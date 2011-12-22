var express = require('express')
  , nStore = require('nstore').extend(require('nstore/query')())
  , passport = require('passport')
  , twitStrategy = require('passport-twitter').Strategy
  , marked = require('marked')
  , fermata = require('fermata')
  , gzip = require('connect-gzip')
  , config = require('./config')

var twit = fermata.json('http://api.twitter.com/');

var renderData = { title: config.blogTitle, tagline: config.blogTag, disqus: config.disqusName }

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

passport.use(new twitStrategy({
    consumerKey: config.twitterKey,
    consumerSecret: config.twitterSecret,
    callbackURL: 'http://' + config.blogDomain + '/auth/twitter/callback' },
    function (token, tokenSecret, profile, done) {
        process.nextTick(function () {
            return done(null, profile);
        });
    }
));

function addObjects(obj1, obj2, callback) {
    var newObject = {}
    for (var prop in obj1) {
        if (obj1.hasOwnProperty(prop)) {
            newObject[prop] = obj1[prop];
        }
    }
    for (var prop in obj2) {
        if (obj2.hasOwnProperty(prop)) {
            newObject[prop] = obj2[prop];
        }
    }
    callback(newObject);
}

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login');
}

function ensureAdmin(req, res, next) {
    if (req.isAuthenticated()) { 
        users.get(req.user['id'], function (err, doc, key) {
            if (err) { res.redirect('/login') }
            if (doc.admin === 'true') {
                return next();
            }
        });
    } else {
        res.redirect('/login');
    }
}

function generateSlug (value) {
  return value.toLowerCase().replace(/-+/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

var app = express.createServer();
var data = nStore.new(config.dataPath + '/data.db', function (err) {
    console.log('Loaded posts database');
    data.all(function (err, results) {
        var count = 0;
        for (var i in results) {
            count++;
        }
        if (count == 0) {
            data.save(Date.now(), { title: 'First post', body: 'This is an example first post', author: 'Unneeded Information', slug: generateSlug('First post') }, function (err) { 
                console.log('Created first post');
            });
        }
    });
});
var users = nStore.new(config.dataPath + '/users.db', function (err) {
    console.log('Loaded users database');
});

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret: 'throwawallaby' }));
app.use(express.csrf());
app.use(express.methodOverride());
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(gzip.staticGzip(__dirname + '/public'));
app.use(gzip.gzip());

app.get('/', function (req, res) {
    data.all(function (err, results) {
        var sortedKeys = [];
        for (var i in results){
            sortedKeys.push(i);
        }
        sortedKeys.sort().reverse();
        var articles = [];
        var posts = [];
        for (var i = 0; i < sortedKeys.length; i++) {
            var article = results[sortedKeys[i]];
            if (article !== undefined) {
                if (i < 4) {
                    articles.push({ key: sortedKeys[i], doc: article });
                }
                posts.push({ title: article.title, slug: article.slug });
            }
        }
        if (req.user) {
            users.get(req.user['id'], function (erro, doc, key) {
                addObjects(renderData, { articles: articles, posts: posts, user: doc, marked: marked }, function (data) {
                    res.render('index', data);
                });
            });
        } else {
            addObjects(renderData, { articles: articles, posts: posts, user: req.user, marked: marked }, function (data) {
                res.render('index', data);
            });
        }
    });
});

app.get('/post/new', ensureAdmin, function (req, res) {
    addObjects(renderData, { user: req.user, csrf: req.session._csrf }, function (data) {
        res.render('post', data);
    });
});

app.post('/post/new', ensureAdmin, function (req, res) {
    users.get(req.user.id, function (err, doc, key) {
        var newpost = req.body;
        newpost['body'] = newpost['body'].replace(/\r\n/g, '  \n');
        newpost['slug'] = generateSlug(newpost['title']);
        if (doc.full_name !== '') {
            newpost['author'] = doc.full_name;
        } else {
            newpost['author'] = doc.username;
        }
        data.find({ slug: newpost.slug }, function (err, results) {
            var count = 0;
            for (var key in results) {
                count++;
            }
            if (count > 0) {
                newpost['slug'] = newpost['slug'] + '_' + count.toString();
            }
            data.save(Date.now(), newpost, function (err) {
                res.redirect('/');
            });
        });
    });
});

app.get('/post/:id', function (req, res) {
    data.all(function (err, results) {
        var sortedKeys = [];
        for (var i in results){
            sortedKeys.push(i);
        }
        sortedKeys.sort().reverse();
        var posts = [];
        for (var i = 0; i < sortedKeys.length; i++) {
            var thisone = results[sortedKeys[i]];
            if (thisone !== undefined) {
                if (thisone.slug == req.params.id) {
                    var article = { key: sortedKeys[i], doc: thisone };
                }
                posts.push({ title: thisone.title, slug: thisone.slug });
            }
        }
        if (req.user) {
            users.get(req.user['id'], function (err, doc, key) {
                addObjects(renderData, { article: article, posts: posts, user: doc, marked: marked }, function (data) {
                    res.render('single', data);
                });
            });
        } else {
            addObjects(renderData, { article: article, posts: posts, user: req.user, marked: marked }, function (data) {
                res.render('single', data);
            });
        }
    });
});

app.get('/post/:id/edit', ensureAdmin, function (req, res) {
    data.find({ slug: req.params.id }, function (err, results) {
        for (var key in results) {
            addObjects(renderData, { user: req.user, article: results[key], csrf: req.session._csrf }, function (data) {
                res.render('post', data);
            });
        }
    });
});

app.post('/post/:id/edit', ensureAdmin, function (req, res) {
    data.find({ slug: req.params.id }, function (err, results) {
        for (var key in results) {
            if (results[key] !== undefined) {
                newpost = results[key];
                newpost['title'] = req.body.title;
                newpost['body'] = req.body.body.replace(/\r\n/g, '  \n');
                data.save(key, newpost, function (err) {
                    console.log('Edited post ' + req.params.id);
                    res.redirect('/');
                });
            }
        }
    });
});

app.post('/post/:id/delete', function (req, res) {
    data.find({ slug: req.params.id }, function (err, results) {
        for (var key in results) {
            data.remove(key, function (err) {
                console.log('Deleted post ' + req.params.id);
                res.redirect('/');
            });
        }
    });
});

app.get('/login', function (req, res) {
    addObjects(renderData, { user: req.user }, function (data) {
        res.render('login', data);
    });
});

app.get('/auth/twitter', passport.authenticate('twitter'), function (req, res) {
});

app.get('/users', ensureAdmin, function (req, res) {
    users.all(function (err, results) {
        addObjects(renderData, { users: results, csrf: req.session._csrf }, function (data) {   
            res.render('users', newData);
        });
    });
});

app.post('/users/edit', ensureAdmin, function (req, res) {
    for (var user in req.body) {
        if (user !== 'csrf') {
            users.get(user, function (err, doc, key) {
                newdoc = doc;
                newdoc['admin'] = 'true';
                users.save(key, newdoc, function (err) {
                    console.log('edited user');
                });
            });
        }
    }
    res.redirect('/');
});

app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }), function (req, res) {
    users.get(req.user['id'], function (err, doc, key) {
        if (err) {
            users.all(function (err, results) {
                newuser = req.user;
                if (results.length == 0) {
                    newuser['admin'] = 'true';
                } else {
                    newuser['admin'] = 'false';
                }
                twit.users('show.json')({ screen_name: req.user.username }).get(function (err, result) {
                    if (result.name) { 
                        newuser['full_name'] = result.name;
                    } else {
                        newuser['full_name'] = '';
                    }
                    users.save(newuser['id'], newuser, function (err) {
                        console.log('saved user ' + newuser['username']);
                        res.redirect('/');
                    });
                });
            });
        } else {
            res.redirect('/');
        }
    });
});

app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

process.setuid(config.blogUser);
app.listen(config.blogPort);
console.log("Express server listening on port %d", app.address().port);
