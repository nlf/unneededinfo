So this is the engine I wrote for my blog..

You'll need your twitter API consumer secret and consumer key, and to register on disqus.com and remember your shortname.
Clone the repo and install like so:

    git clone https://github.com/nathan-lafreniere/unneededinfo.git
    cd unneededinfo
    npm install

After that, copy sample.config.js to config.js and edit it for your settings, and it should just work™

Data is saved in local files using the nStore database module, so as to keep things nice and portable.

You can create your own style/theme by copying the default directory in themes/ and editing it to your liking. I may eventually add in another example or two, if there are any requests. Currently I'm only using jade templates, but I'm sure I can make the template engine also configurable if the need arises.
