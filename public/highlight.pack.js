var hljs=new function(){function m(p){return p.replace(/&/gm,"&amp;").replace(/</gm,"&lt;")}function c(r,q,p){return RegExp(q,"m"+(r.cI?"i":"")+(p?"g":""))}function j(r){for(var p=0;p<r.childNodes.length;p++){var q=r.childNodes[p];if(q.nodeName=="CODE"){return q}if(!(q.nodeType==3&&q.nodeValue.match(/\s+/))){break}}}function g(t,s){var r="";for(var q=0;q<t.childNodes.length;q++){if(t.childNodes[q].nodeType==3){var p=t.childNodes[q].nodeValue;if(s){p=p.replace(/\n/g,"")}r+=p}else{if(t.childNodes[q].nodeName=="BR"){r+="\n"}else{r+=g(t.childNodes[q])}}}if(/MSIE [678]/.test(navigator.userAgent)){r=r.replace(/\r/g,"\n")}return r}function a(s){var q=s.className.split(/\s+/);q=q.concat(s.parentNode.className.split(/\s+/));for(var p=0;p<q.length;p++){var r=q[p].replace(/^language-/,"");if(d[r]||r=="no-highlight"){return r}}}function b(p){var q=[];(function(s,t){for(var r=0;r<s.childNodes.length;r++){if(s.childNodes[r].nodeType==3){t+=s.childNodes[r].nodeValue.length}else{if(s.childNodes[r].nodeName=="BR"){t+=1}else{q.push({event:"start",offset:t,node:s.childNodes[r]});t=arguments.callee(s.childNodes[r],t);q.push({event:"stop",offset:t,node:s.childNodes[r]})}}}return t})(p,0);return q}function l(y,z,x){var r=0;var w="";var t=[];function u(){if(y.length&&z.length){if(y[0].offset!=z[0].offset){return(y[0].offset<z[0].offset)?y:z}else{return z[0].event=="start"?y:z}}else{return y.length?y:z}}function s(C){var D="<"+C.nodeName.toLowerCase();for(var A=0;A<C.attributes.length;A++){var B=C.attributes[A];D+=" "+B.nodeName.toLowerCase();if(B.nodeValue!=undefined&&B.nodeValue!=false&&B.nodeValue!=null){D+='="'+m(B.nodeValue)+'"'}}return D+">"}while(y.length||z.length){var v=u().splice(0,1)[0];w+=m(x.substr(r,v.offset-r));r=v.offset;if(v.event=="start"){w+=s(v.node);t.push(v.node)}else{if(v.event=="stop"){var q=t.length;do{q--;var p=t[q];w+=("</"+p.nodeName.toLowerCase()+">")}while(p!=v.node);t.splice(q,1);while(q<t.length){w+=s(t[q]);q++}}}}w+=x.substr(r);return w}function i(){function p(u,t,v){if(u.compiled){return}if(!v){u.bR=c(t,u.b?u.b:"\\B|\\b");if(!u.e&&!u.eW){u.e="\\B|\\b"}if(u.e){u.eR=c(t,u.e)}}if(u.i){u.iR=c(t,u.i)}if(u.r==undefined){u.r=1}if(u.k){u.lR=c(t,u.l||hljs.IR,true)}for(var s in u.k){if(!u.k.hasOwnProperty(s)){continue}if(u.k[s] instanceof Object){u.kG=u.k}else{u.kG={keyword:u.k}}break}if(!u.c){u.c=[]}u.compiled=true;for(var r=0;r<u.c.length;r++){p(u.c[r],t,false)}if(u.starts){p(u.starts,t,false)}}for(var q in d){if(!d.hasOwnProperty(q)){continue}p(d[q].dM,d[q],true)}}function e(J,D){if(!i.called){i();i.called=true}function z(r,M){for(var L=0;L<M.c.length;L++){if(M.c[L].bR.test(r)){return M.c[L]}}}function w(L,r){if(C[L].e&&C[L].eR.test(r)){return 1}if(C[L].eW){var M=w(L-1,r);return M?M+1:0}return 0}function x(r,L){return L.iR&&L.iR.test(r)}function A(O,N){var M=[];for(var L=0;L<O.c.length;L++){M.push(O.c[L].b)}var r=C.length-1;do{if(C[r].e){M.push(C[r].e)}r--}while(C[r+1].eW);if(O.i){M.push(O.i)}return c(N,"("+M.join("|")+")",true)}function s(M,L){var N=C[C.length-1];if(!N.t){N.t=A(N,H)}N.t.lastIndex=L;var r=N.t.exec(M);if(r){return[M.substr(L,r.index-L),r[0],false]}else{return[M.substr(L),"",true]}}function p(O,r){var L=H.cI?r[0].toLowerCase():r[0];for(var N in O.kG){if(!O.kG.hasOwnProperty(N)){continue}var M=O.kG[N].hasOwnProperty(L);if(M){return[N,M]}}return false}function F(M,O){if(!O.k){return m(M)}var N="";var P=0;O.lR.lastIndex=0;var L=O.lR.exec(M);while(L){N+=m(M.substr(P,L.index-P));var r=p(O,L);if(r){t+=r[1];N+='<span class="'+r[0]+'">'+m(L[0])+"</span>"}else{N+=m(L[0])}P=O.lR.lastIndex;L=O.lR.exec(M)}N+=m(M.substr(P,M.length-P));return N}function K(r,M){if(M.sL&&d[M.sL]){var L=e(M.sL,r);t+=L.keyword_count;return L.value}else{return F(r,M)}}function I(M,r){var L=M.cN?'<span class="'+M.cN+'">':"";if(M.rB){q+=L;M.buffer=""}else{if(M.eB){q+=m(r)+L;M.buffer=""}else{q+=L;M.buffer=r}}C.push(M);B+=M.r}function E(O,L,Q){var R=C[C.length-1];if(Q){q+=K(R.buffer+O,R);return false}var M=z(L,R);if(M){q+=K(R.buffer+O,R);I(M,L);return M.rB}var r=w(C.length-1,L);if(r){var N=R.cN?"</span>":"";if(R.rE){q+=K(R.buffer+O,R)+N}else{if(R.eE){q+=K(R.buffer+O,R)+N+m(L)}else{q+=K(R.buffer+O+L,R)+N}}while(r>1){N=C[C.length-2].cN?"</span>":"";q+=N;r--;C.length--}var P=C[C.length-1];C.length--;C[C.length-1].buffer="";if(P.starts){I(P.starts,"")}return R.rE}if(x(L,R)){throw"Illegal"}}var H=d[J];var C=[H.dM];var B=0;var t=0;var q="";try{var v=0;H.dM.buffer="";do{var y=s(D,v);var u=E(y[0],y[1],y[2]);v+=y[0].length;if(!u){v+=y[1].length}}while(!y[2]);if(C.length>1){throw"Illegal"}return{r:B,keyword_count:t,value:q}}catch(G){if(G=="Illegal"){return{r:0,keyword_count:0,value:m(D)}}else{throw G}}}function f(t){var r={keyword_count:0,r:0,value:m(t)};var q=r;for(var p in d){if(!d.hasOwnProperty(p)){continue}var s=e(p,t);s.language=p;if(s.keyword_count+s.r>q.keyword_count+q.r){q=s}if(s.keyword_count+s.r>r.keyword_count+r.r){q=r;r=s}}if(q.language){r.second_best=q}return r}function h(r,q,p){if(q){r=r.replace(/^((<[^>]+>|\t)+)/gm,function(t,w,v,u){return w.replace(/\t/g,q)})}if(p){r=r.replace(/\n/g,"<br>")}return r}function o(u,x,q){var y=g(u,q);var s=a(u);if(s=="no-highlight"){return}if(s){var w=e(s,y)}else{var w=f(y);s=w.language}var p=b(u);if(p.length){var r=document.createElement("pre");r.innerHTML=w.value;w.value=l(p,b(r),y)}w.value=h(w.value,x,q);var t=u.className;if(!t.match("(\\s|^)(language-)?"+s+"(\\s|$)")){t=t?(t+" "+s):s}if(/MSIE [678]/.test(navigator.userAgent)&&u.tagName=="CODE"&&u.parentNode.tagName=="PRE"){var r=u.parentNode;var v=document.createElement("div");v.innerHTML="<pre><code>"+w.value+"</code></pre>";u=v.firstChild.firstChild;v.firstChild.cN=r.cN;r.parentNode.replaceChild(v.firstChild,r)}else{u.innerHTML=w.value}u.className=t;u.result={language:s,kw:w.keyword_count,re:w.r};if(w.second_best){u.second_best={language:w.second_best.language,kw:w.second_best.keyword_count,re:w.second_best.r}}}function k(){if(k.called){return}k.called=true;var r=document.getElementsByTagName("pre");for(var p=0;p<r.length;p++){var q=j(r[p]);if(q){o(q,hljs.tabReplace)}}}function n(){if(window.addEventListener){window.addEventListener("DOMContentLoaded",k,false);window.addEventListener("load",k,false)}else{if(window.attachEvent){window.attachEvent("onload",k)}else{window.onload=k}}}var d={};this.LANGUAGES=d;this.highlight=e;this.highlightAuto=f;this.fixMarkup=h;this.highlightBlock=o;this.initHighlighting=k;this.initHighlightingOnLoad=n;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="\\b(0x[A-Za-z0-9]+|\\d+(\\.\\d+)?)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BE={b:"\\\\.",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE],r:0};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE],r:0};this.CLCM={cN:"comment",b:"//",e:"$"};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.inherit=function(p,s){var r={};for(var q in p){r[q]=p[q]}if(s){for(var q in s){r[q]=s[q]}}return r}}();hljs.LANGUAGES.bash=function(){var d={"true":1,"false":1};var b={cN:"variable",b:"\\$([a-zA-Z0-9_]+)\\b"};var a={cN:"variable",b:"\\$\\{(([^}])|(\\\\}))+\\}",c:[hljs.CNM]};var c={cN:"string",b:'"',e:'"',i:"\\n",c:[hljs.BE,b,a],r:0};var e={cN:"test_condition",b:"",e:"",c:[c,b,a,hljs.CNM],k:{literal:d},r:0};return{dM:{k:{keyword:{"if":1,then:1,"else":1,fi:1,"for":1,"break":1,"continue":1,"while":1,"in":1,"do":1,done:1,echo:1,exit:1,"return":1,set:1,declare:1},literal:d},c:[{cN:"shebang",b:"(#!\\/bin\\/bash)|(#!\\/bin\\/sh)",r:10},hljs.HCM,hljs.CNM,c,b,a,hljs.inherit(e,{b:"\\[ ",e:" \\]",r:0}),hljs.inherit(e,{b:"\\[\\[ ",e:" \\]\\]"})]}}}();hljs.LANGUAGES.cs={dM:{k:{"abstract":1,as:1,base:1,bool:1,"break":1,"byte":1,"case":1,"catch":1,"char":1,checked:1,"class":1,"const":1,"continue":1,decimal:1,"default":1,delegate:1,"do":1,"do":1,"double":1,"else":1,"enum":1,event:1,explicit:1,extern:1,"false":1,"finally":1,fixed:1,"float":1,"for":1,foreach:1,"goto":1,"if":1,implicit:1,"in":1,"int":1,"interface":1,internal:1,is:1,lock:1,"long":1,namespace:1,"new":1,"null":1,object:1,operator:1,out:1,override:1,params:1,"private":1,"protected":1,"public":1,readonly:1,ref:1,"return":1,sbyte:1,sealed:1,"short":1,sizeof:1,stackalloc:1,"static":1,string:1,struct:1,"switch":1,"this":1,"throw":1,"true":1,"try":1,"typeof":1,uint:1,ulong:1,unchecked:1,unsafe:1,ushort:1,using:1,virtual:1,"volatile":1,"void":1,"while":1,ascending:1,descending:1,from:1,get:1,group:1,into:1,join:1,let:1,orderby:1,partial:1,select:1,set:1,value:1,"var":1,where:1,yield:1},c:[{cN:"comment",b:"///",e:"$",rB:true,c:[{cN:"xmlDocTag",b:"///|<!--|-->"},{cN:"xmlDocTag",b:"</?",e:">"}]},hljs.CLCM,hljs.CBLCLM,{cN:"string",b:'@"',e:'"',c:[{b:'""'}]},hljs.ASM,hljs.QSM,hljs.CNM]}};hljs.LANGUAGES.ruby=function(){var g="[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?";var a="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";var n={keyword:{and:1,"false":1,then:1,defined:1,module:1,"in":1,"return":1,redo:1,"if":1,BEGIN:1,retry:1,end:1,"for":1,"true":1,self:1,when:1,next:1,until:1,"do":1,begin:1,unless:1,END:1,rescue:1,nil:1,"else":1,"break":1,undef:1,not:1,"super":1,"class":1,"case":1,require:1,yield:1,alias:1,"while":1,ensure:1,elsif:1,or:1,def:1},keymethods:{__id__:1,__send__:1,abort:1,abs:1,"all?":1,allocate:1,ancestors:1,"any?":1,arity:1,assoc:1,at:1,at_exit:1,autoload:1,"autoload?":1,"between?":1,binding:1,binmode:1,"block_given?":1,call:1,callcc:1,caller:1,capitalize:1,"capitalize!":1,casecmp:1,"catch":1,ceil:1,center:1,chomp:1,"chomp!":1,chop:1,"chop!":1,chr:1,"class":1,class_eval:1,"class_variable_defined?":1,class_variables:1,clear:1,clone:1,close:1,close_read:1,close_write:1,"closed?":1,coerce:1,collect:1,"collect!":1,compact:1,"compact!":1,concat:1,"const_defined?":1,const_get:1,const_missing:1,const_set:1,constants:1,count:1,crypt:1,"default":1,default_proc:1,"delete":1,"delete!":1,delete_at:1,delete_if:1,detect:1,display:1,div:1,divmod:1,downcase:1,"downcase!":1,downto:1,dump:1,dup:1,each:1,each_byte:1,each_index:1,each_key:1,each_line:1,each_pair:1,each_value:1,each_with_index:1,"empty?":1,entries:1,eof:1,"eof?":1,"eql?":1,"equal?":1,"eval":1,exec:1,exit:1,"exit!":1,extend:1,fail:1,fcntl:1,fetch:1,fileno:1,fill:1,find:1,find_all:1,first:1,flatten:1,"flatten!":1,floor:1,flush:1,for_fd:1,foreach:1,fork:1,format:1,freeze:1,"frozen?":1,fsync:1,getc:1,gets:1,global_variables:1,grep:1,gsub:1,"gsub!":1,"has_key?":1,"has_value?":1,hash:1,hex:1,id:1,include:1,"include?":1,included_modules:1,index:1,indexes:1,indices:1,induced_from:1,inject:1,insert:1,inspect:1,instance_eval:1,instance_method:1,instance_methods:1,"instance_of?":1,"instance_variable_defined?":1,instance_variable_get:1,instance_variable_set:1,instance_variables:1,"integer?":1,intern:1,invert:1,ioctl:1,"is_a?":1,isatty:1,"iterator?":1,join:1,"key?":1,keys:1,"kind_of?":1,lambda:1,last:1,length:1,lineno:1,ljust:1,load:1,local_variables:1,loop:1,lstrip:1,"lstrip!":1,map:1,"map!":1,match:1,max:1,"member?":1,merge:1,"merge!":1,method:1,"method_defined?":1,method_missing:1,methods:1,min:1,module_eval:1,modulo:1,name:1,nesting:1,"new":1,next:1,"next!":1,"nil?":1,nitems:1,"nonzero?":1,object_id:1,oct:1,open:1,pack:1,partition:1,pid:1,pipe:1,pop:1,popen:1,pos:1,prec:1,prec_f:1,prec_i:1,print:1,printf:1,private_class_method:1,private_instance_methods:1,"private_method_defined?":1,private_methods:1,proc:1,protected_instance_methods:1,"protected_method_defined?":1,protected_methods:1,public_class_method:1,public_instance_methods:1,"public_method_defined?":1,public_methods:1,push:1,putc:1,puts:1,quo:1,raise:1,rand:1,rassoc:1,read:1,read_nonblock:1,readchar:1,readline:1,readlines:1,readpartial:1,rehash:1,reject:1,"reject!":1,remainder:1,reopen:1,replace:1,require:1,"respond_to?":1,reverse:1,"reverse!":1,reverse_each:1,rewind:1,rindex:1,rjust:1,round:1,rstrip:1,"rstrip!":1,scan:1,seek:1,select:1,send:1,set_trace_func:1,shift:1,singleton_method_added:1,singleton_methods:1,size:1,sleep:1,slice:1,"slice!":1,sort:1,"sort!":1,sort_by:1,split:1,sprintf:1,squeeze:1,"squeeze!":1,srand:1,stat:1,step:1,store:1,strip:1,"strip!":1,sub:1,"sub!":1,succ:1,"succ!":1,sum:1,superclass:1,swapcase:1,"swapcase!":1,sync:1,syscall:1,sysopen:1,sysread:1,sysseek:1,system:1,syswrite:1,taint:1,"tainted?":1,tell:1,test:1,"throw":1,times:1,to_a:1,to_ary:1,to_f:1,to_hash:1,to_i:1,to_int:1,to_io:1,to_proc:1,to_s:1,to_str:1,to_sym:1,tr:1,"tr!":1,tr_s:1,"tr_s!":1,trace_var:1,transpose:1,trap:1,truncate:1,"tty?":1,type:1,ungetc:1,uniq:1,"uniq!":1,unpack:1,unshift:1,untaint:1,untrace_var:1,upcase:1,"upcase!":1,update:1,upto:1,"value?":1,values:1,values_at:1,warn:1,write:1,write_nonblock:1,"zero?":1,zip:1}};var h={cN:"yardoctag",b:"@[A-Za-z]+"};var d={cN:"comment",b:"#",e:"$",c:[h]};var c={cN:"comment",b:"^\\=begin",e:"^\\=end",c:[h],r:10};var b={cN:"comment",b:"^__END__",e:"\\n$"};var u={cN:"subst",b:"#\\{",e:"}",l:g,k:n};var p=[hljs.BE,u];var s={cN:"string",b:"'",e:"'",c:p,r:0};var r={cN:"string",b:'"',e:'"',c:p,r:0};var q={cN:"string",b:"%[qw]?\\(",e:"\\)",c:p,r:10};var o={cN:"string",b:"%[qw]?\\[",e:"\\]",c:p,r:10};var m={cN:"string",b:"%[qw]?{",e:"}",c:p,r:10};var l={cN:"string",b:"%[qw]?<",e:">",c:p,r:10};var k={cN:"string",b:"%[qw]?/",e:"/",c:p,r:10};var j={cN:"string",b:"%[qw]?%",e:"%",c:p,r:10};var i={cN:"string",b:"%[qw]?-",e:"-",c:p,r:10};var t={cN:"string",b:"%[qw]?\\|",e:"\\|",c:p,r:10};var e={cN:"function",b:"\\bdef\\s+",e:" |$|;",l:g,k:n,c:[{cN:"title",b:a,l:g,k:n},{cN:"params",b:"\\(",e:"\\)",l:g,k:n},d,c,b]};var f={cN:"identifier",b:g,l:g,k:n,r:0};var v=[d,c,b,s,r,q,o,m,l,k,j,i,t,{cN:"class",b:"\\b(class|module)\\b",e:"$|;",k:{"class":1,module:1},c:[{cN:"title",b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?",r:0},{cN:"inheritance",b:"<\\s*",c:[{cN:"parent",b:"("+hljs.IR+"::)?"+hljs.IR}]},d,c,b]},e,{cN:"constant",b:"(::)?([A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:":",c:[s,r,q,o,m,l,k,j,i,t,f],r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"number",b:"\\?\\w"},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},f,{b:"("+hljs.RSR+")\\s*",c:[d,c,b,{cN:"regexp",b:"/",e:"/[a-z]*",i:"\\n",c:[hljs.BE]}],r:0}];u.c=v;e.c[1].c=v;return{dM:{l:g,k:n,c:v}}}();hljs.LANGUAGES.diff={cI:true,dM:{c:[{cN:"chunk",b:"^\\@\\@ +\\-\\d+,\\d+ +\\+\\d+,\\d+ +\\@\\@$",r:10},{cN:"chunk",b:"^\\*\\*\\* +\\d+,\\d+ +\\*\\*\\*\\*$",r:10},{cN:"chunk",b:"^\\-\\-\\- +\\d+,\\d+ +\\-\\-\\-\\-$",r:10},{cN:"header",b:"Index: ",e:"$"},{cN:"header",b:"=====",e:"=====$"},{cN:"header",b:"^\\-\\-\\-",e:"$"},{cN:"header",b:"^\\*{3} ",e:"$"},{cN:"header",b:"^\\+\\+\\+",e:"$"},{cN:"header",b:"\\*{5}",e:"\\*{5}$"},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"change",b:"^\\!",e:"$"}]}};hljs.LANGUAGES.javascript={dM:{k:{keyword:{"in":1,"if":1,"for":1,"while":1,"finally":1,"var":1,"new":1,"function":1,"do":1,"return":1,"void":1,"else":1,"break":1,"catch":1,"instanceof":1,"with":1,"throw":1,"case":1,"default":1,"try":1,"this":1,"switch":1,"continue":1,"typeof":1,"delete":1},literal:{"true":1,"false":1,"null":1}},c:[hljs.ASM,hljs.QSM,hljs.CLCM,hljs.CBLCLM,hljs.CNM,{b:"("+hljs.RSR+"|case|return|throw)\\s*",k:{"return":1,"throw":1,"case":1},c:[hljs.CLCM,hljs.CBLCLM,{cN:"regexp",b:"/",e:"/[gim]*",c:[{b:"\\\\/"}]}],r:0},{cN:"function",b:"\\bfunction\\b",e:"{",k:{"function":1},c:[{cN:"title",b:"[A-Za-z$_][0-9A-Za-z$_]*"},{cN:"params",b:"\\(",e:"\\)",c:[hljs.ASM,hljs.QSM,hljs.CLCM,hljs.CBLCLM]}]}]}};hljs.LANGUAGES.lua=function(){var b="\\[=*\\[";var e="\\]=*\\]";var a={b:b,e:e};a.c=[a];var d={cN:"comment",b:"--(?!"+b+")",e:"$"};var c={cN:"comment",b:"--"+b,e:e,c:[a],r:10};return{dM:{l:hljs.UIR,k:{keyword:{and:1,"break":1,"do":1,"else":1,elseif:1,end:1,"false":1,"for":1,"if":1,"in":1,local:1,nil:1,not:1,or:1,repeat:1,"return":1,then:1,"true":1,until:1,"while":1},built_in:{_G:1,_VERSION:1,assert:1,collectgarbage:1,dofile:1,error:1,getfenv:1,getmetatable:1,ipairs:1,load:1,loadfile:1,loadstring:1,module:1,next:1,pairs:1,pcall:1,print:1,rawequal:1,rawget:1,rawset:1,require:1,select:1,setfenv:1,setmetatable:1,tonumber:1,tostring:1,type:1,unpack:1,xpcall:1,coroutine:1,debug:1,io:1,math:1,os:1,"package":1,string:1,table:1}},c:[d,c,{cN:"function",b:"\\bfunction\\b",e:"\\)",k:{"function":1},c:[{cN:"title",b:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"},{cN:"params",b:"\\(",eW:true,c:[d,c]},d,c]},hljs.CNM,hljs.ASM,hljs.QSM,{cN:"string",b:b,e:e,c:[a],r:10}]}}}();hljs.LANGUAGES.css=function(){var a={cN:"function",b:hljs.IR+"\\(",e:"\\)",c:[{eW:true,eE:true,c:[hljs.NM,hljs.ASM,hljs.QSM]}]};return{cI:true,dM:{i:"[=/|']",c:[hljs.CBLCLM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:{"font-face":1,page:1}},{cN:"at_rule",b:"@",e:"[{;]",eE:true,k:{"import":1,page:1,media:1,charset:1},c:[a,hljs.ASM,hljs.QSM,hljs.NM]},{cN:"tag",b:hljs.IR,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[hljs.CBLCLM,{cN:"rule",b:"[^\\s]",rB:true,e:";",eW:true,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:true,i:"[^\\s]",starts:{cN:"value",eW:true,eE:true,c:[a,hljs.NM,hljs.QSM,hljs.ASM,hljs.CBLCLM,{cN:"hexcolor",b:"\\#[0-9A-F]+"},{cN:"important",b:"!important"}]}}]}]}]}}}();hljs.LANGUAGES.xml=function(){var b="[A-Za-z0-9\\._:-]+";var a={eW:true,c:[{cN:"attribute",b:b,r:0},{b:'="',rB:true,e:'"',c:[{cN:"value",b:'"',eW:true}]},{b:"='",rB:true,e:"'",c:[{cN:"value",b:"'",eW:true}]},{b:"=",c:[{cN:"value",b:"[^\\s/>]+"}]}]};return{cI:true,dM:{c:[{cN:"pi",b:"<\\?",e:"\\?>",r:10},{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style",e:">",k:{title:{style:1}},c:[a],starts:{cN:"css",e:"</style>",rE:true,sL:"css"}},{cN:"tag",b:"<script",e:">",k:{title:{script:1}},c:[a],starts:{cN:"javascript",e:"<\/script>",rE:true,sL:"javascript"}},{cN:"vbscript",b:"<%",e:"%>",sL:"vbscript"},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:"[^ />]+"},a]}]}}}();hljs.LANGUAGES.java={dM:{k:{"false":1,"synchronized":1,"int":1,"abstract":1,"float":1,"private":1,"char":1,"interface":1,"boolean":1,"static":1,"null":1,"if":1,"const":1,"for":1,"true":1,"while":1,"long":1,"throw":1,strictfp:1,"finally":1,"protected":1,"extends":1,"import":1,"native":1,"final":1,"implements":1,"return":1,"void":1,"enum":1,"else":1,"break":1,"transient":1,"new":1,"catch":1,"instanceof":1,"byte":1,"super":1,"class":1,"volatile":1,"case":1,assert:1,"short":1,"package":1,"default":1,"double":1,"public":1,"try":1,"this":1,"switch":1,"continue":1,"throws":1},c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",c:[{cN:"javadoctag",b:"@[A-Za-z]+"}],r:10},hljs.CLCM,hljs.CBLCLM,hljs.ASM,hljs.QSM,{cN:"class",b:"(class |interface )",e:"{",k:{"class":1,"interface":1},i:":",c:[{b:"(implements|extends)",k:{"extends":1,"implements":1},r:10},{cN:"title",b:hljs.UIR}]},hljs.CNM,{cN:"annotation",b:"@[A-Za-z]+"}]}};hljs.LANGUAGES.php={cI:true,dM:{k:{and:1,include_once:1,list:1,"abstract":1,global:1,"private":1,echo:1,"interface":1,as:1,"static":1,endswitch:1,array:1,"null":1,"if":1,endwhile:1,or:1,"const":1,"for":1,endforeach:1,self:1,"var":1,"while":1,isset:1,"public":1,"protected":1,exit:1,foreach:1,"throw":1,elseif:1,"extends":1,include:1,__FILE__:1,empty:1,require_once:1,"function":1,"do":1,xor:1,"return":1,"implements":1,parent:1,clone:1,use:1,__CLASS__:1,__LINE__:1,"else":1,"break":1,print:1,"eval":1,"new":1,"catch":1,__METHOD__:1,"class":1,"case":1,exception:1,php_user_filter:1,"default":1,die:1,require:1,__FUNCTION__:1,enddeclare:1,"final":1,"try":1,"this":1,"switch":1,"continue":1,endfor:1,endif:1,declare:1,unset:1,"true":1,"false":1,namespace:1},c:[hljs.CLCM,hljs.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+",r:10}]},hljs.CNM,hljs.inherit(hljs.ASM,{i:null}),hljs.inherit(hljs.QSM,{i:null}),{cN:"variable",b:"\\$[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*"},{cN:"preprocessor",b:"<\\?php",r:10},{cN:"preprocessor",b:"\\?>"}]}};hljs.LANGUAGES.python=function(){var c={cN:"string",b:"(u|b)?r?'''",e:"'''",r:10};var b={cN:"string",b:'(u|b)?r?"""',e:'"""',r:10};var a={cN:"string",b:"(u|r|ur|b|br)'",e:"'",c:[hljs.BE],r:10};var f={cN:"string",b:'(u|r|ur|b|br)"',e:'"',c:[hljs.BE],r:10};var d={cN:"title",b:hljs.UIR};var e={cN:"params",b:"\\(",e:"\\)",c:[c,b,a,f,hljs.ASM,hljs.QSM]};return{dM:{k:{keyword:{and:1,elif:1,is:1,global:1,as:1,"in":1,"if":1,from:1,raise:1,"for":1,except:1,"finally":1,print:1,"import":1,pass:1,"return":1,exec:1,"else":1,"break":1,not:1,"with":1,"class":1,assert:1,yield:1,"try":1,"while":1,"continue":1,del:1,or:1,def:1,lambda:1,nonlocal:10},built_in:{None:1,True:1,False:1,Ellipsis:1,NotImplemented:1}},i:"(</|->|\\?)",c:[hljs.HCM,c,b,a,f,hljs.ASM,hljs.QSM,{cN:"function",b:"\\bdef ",e:":",i:"$",k:{def:1},c:[d,e],r:10},{cN:"class",b:"\\bclass ",e:":",i:"[${]",k:{"class":1},c:[d,e],r:10},hljs.CNM,{cN:"decorator",b:"@",e:"$"}]}}}();hljs.LANGUAGES.sql={cI:true,dM:{i:"[^\\s]",c:[{cN:"operator",b:"(begin|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma)\\b",e:";|$",k:{keyword:{all:1,partial:1,global:1,month:1,current_timestamp:1,using:1,go:1,revoke:1,smallint:1,indicator:1,"end-exec":1,disconnect:1,zone:1,"with":1,character:1,assertion:1,to:1,add:1,current_user:1,usage:1,input:1,local:1,alter:1,match:1,collate:1,real:1,then:1,rollback:1,get:1,read:1,timestamp:1,session_user:1,not:1,integer:1,bit:1,unique:1,day:1,minute:1,desc:1,insert:1,execute:1,like:1,ilike:2,level:1,decimal:1,drop:1,"continue":1,isolation:1,found:1,where:1,constraints:1,domain:1,right:1,national:1,some:1,module:1,transaction:1,relative:1,second:1,connect:1,escape:1,close:1,system_user:1,"for":1,deferred:1,section:1,cast:1,current:1,sqlstate:1,allocate:1,intersect:1,deallocate:1,numeric:1,"public":1,preserve:1,full:1,"goto":1,initially:1,asc:1,no:1,key:1,output:1,collation:1,group:1,by:1,union:1,session:1,both:1,last:1,language:1,constraint:1,column:1,of:1,space:1,foreign:1,deferrable:1,prior:1,connection:1,unknown:1,action:1,commit:1,view:1,or:1,first:1,into:1,"float":1,year:1,primary:1,cascaded:1,except:1,restrict:1,set:1,references:1,names:1,table:1,outer:1,open:1,select:1,size:1,are:1,rows:1,from:1,prepare:1,distinct:1,leading:1,create:1,only:1,next:1,inner:1,authorization:1,schema:1,corresponding:1,option:1,declare:1,precision:1,immediate:1,"else":1,timezone_minute:1,external:1,varying:1,translation:1,"true":1,"case":1,exception:1,join:1,hour:1,"default":1,"double":1,scroll:1,value:1,cursor:1,descriptor:1,values:1,dec:1,fetch:1,procedure:1,"delete":1,and:1,"false":1,"int":1,is:1,describe:1,"char":1,as:1,at:1,"in":1,varchar:1,"null":1,trailing:1,any:1,absolute:1,current_time:1,end:1,grant:1,privileges:1,when:1,cross:1,check:1,write:1,current_date:1,pad:1,begin:1,temporary:1,exec:1,time:1,update:1,catalog:1,user:1,sql:1,date:1,on:1,identity:1,timezone_hour:1,natural:1,whenever:1,interval:1,work:1,order:1,cascade:1,diagnostics:1,nchar:1,having:1,left:1,call:1,"do":1,handler:1,load:1,replace:1,truncate:1,start:1,lock:1,show:1,pragma:1},aggregate:{count:1,sum:1,min:1,max:1,avg:1}},c:[{cN:"string",b:"'",e:"'",c:[hljs.BE,{b:"''"}],r:0},{cN:"string",b:'"',e:'"',c:[hljs.BE,{b:'""'}],r:0},{cN:"string",b:"`",e:"`",c:[hljs.BE]},hljs.CNM,{b:"\\n"}]},hljs.CBLCLM,{cN:"comment",b:"--",e:"$"}]}};hljs.LANGUAGES.ini={cI:true,dM:{i:"[^\\s]",c:[{cN:"comment",b:";",e:"$"},{cN:"title",b:"^\\[",e:"\\]"},{cN:"setting",b:"^[a-z0-9_\\[\\]]+[ \\t]*=[ \\t]*",e:"$",c:[{cN:"value",eW:true,k:{on:1,off:1,"true":1,"false":1,yes:1,no:1},c:[hljs.QSM,hljs.NM]}]}]}};hljs.LANGUAGES.perl=function(){var c={getpwent:1,getservent:1,quotemeta:1,msgrcv:1,scalar:1,kill:1,dbmclose:1,undef:1,lc:1,ma:1,syswrite:1,tr:1,send:1,umask:1,sysopen:1,shmwrite:1,vec:1,qx:1,utime:1,local:1,oct:1,semctl:1,localtime:1,readpipe:1,"do":1,"return":1,format:1,read:1,sprintf:1,dbmopen:1,pop:1,getpgrp:1,not:1,getpwnam:1,rewinddir:1,qq:1,fileno:1,qw:1,endprotoent:1,wait:1,sethostent:1,bless:1,s:1,opendir:1,"continue":1,each:1,sleep:1,endgrent:1,shutdown:1,dump:1,chomp:1,connect:1,getsockname:1,die:1,socketpair:1,close:1,flock:1,exists:1,index:1,shmget:1,sub:1,"for":1,endpwent:1,redo:1,lstat:1,msgctl:1,setpgrp:1,abs:1,exit:1,select:1,print:1,ref:1,gethostbyaddr:1,unshift:1,fcntl:1,syscall:1,"goto":1,getnetbyaddr:1,join:1,gmtime:1,symlink:1,semget:1,splice:1,x:1,getpeername:1,recv:1,log:1,setsockopt:1,cos:1,last:1,reverse:1,gethostbyname:1,getgrnam:1,study:1,formline:1,endhostent:1,times:1,chop:1,length:1,gethostent:1,getnetent:1,pack:1,getprotoent:1,getservbyname:1,rand:1,mkdir:1,pos:1,chmod:1,y:1,substr:1,endnetent:1,printf:1,next:1,open:1,msgsnd:1,readdir:1,use:1,unlink:1,getsockopt:1,getpriority:1,rindex:1,wantarray:1,hex:1,system:1,getservbyport:1,endservent:1,"int":1,chr:1,untie:1,rmdir:1,prototype:1,tell:1,listen:1,fork:1,shmread:1,ucfirst:1,setprotoent:1,"else":1,sysseek:1,link:1,getgrgid:1,shmctl:1,waitpid:1,unpack:1,getnetbyname:1,reset:1,chdir:1,grep:1,split:1,require:1,caller:1,lcfirst:1,until:1,warn:1,"while":1,values:1,shift:1,telldir:1,getpwuid:1,my:1,getprotobynumber:1,"delete":1,and:1,sort:1,uc:1,defined:1,srand:1,accept:1,"package":1,seekdir:1,getprotobyname:1,semop:1,our:1,rename:1,seek:1,"if":1,q:1,chroot:1,sysread:1,setpwent:1,no:1,crypt:1,getc:1,chown:1,sqrt:1,write:1,setnetent:1,setpriority:1,foreach:1,tie:1,sin:1,msgget:1,map:1,stat:1,getlogin:1,unless:1,elsif:1,truncate:1,exec:1,keys:1,glob:1,tied:1,closedir:1,ioctl:1,socket:1,readlink:1,"eval":1,xor:1,readline:1,binmode:1,setservent:1,eof:1,ord:1,bind:1,alarm:1,pipe:1,atan2:1,getgrent:1,exp:1,time:1,push:1,setgrent:1,gt:1,lt:1,or:1,ne:1,m:1};var d={cN:"subst",b:"[$@]\\{",e:"}",k:c,r:10};var b={cN:"variable",b:"\\$\\d"};var a={cN:"variable",b:"[\\$\\%\\@\\*](\\^\\w\\b|#\\w+(\\:\\:\\w+)*|[^\\s\\w{]|{\\w+}|\\w+(\\:\\:\\w*)*)"};var g=[hljs.BE,d,b,a];var f={b:"->",c:[{b:hljs.IR},{b:"{",e:"}"}]};var e=[b,a,hljs.HCM,{cN:"comment",b:"^(__END__|__DATA__)",e:"\\n$",r:5},f,{cN:"string",b:"q[qwxr]?\\s*\\(",e:"\\)",c:g,r:5},{cN:"string",b:"q[qwxr]?\\s*\\[",e:"\\]",c:g,r:5},{cN:"string",b:"q[qwxr]?\\s*\\{",e:"\\}",c:g,r:5},{cN:"string",b:"q[qwxr]?\\s*\\|",e:"\\|",c:g,r:5},{cN:"string",b:"q[qwxr]?\\s*\\<",e:"\\>",c:g,r:5},{cN:"string",b:"qw\\s+q",e:"q",c:g,r:5},{cN:"string",b:"'",e:"'",c:[hljs.BE],r:0},{cN:"string",b:'"',e:'"',c:g,r:0},{cN:"string",b:"`",e:"`",c:[hljs.BE]},{cN:"string",b:"{\\w+}",r:0},{cN:"string",b:"-?\\w+\\s*\\=\\>",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[hljs.BE],r:0},{cN:"sub",b:"\\bsub\\b",e:"(\\s*\\(.*?\\))?[;{]",k:{sub:1},r:5},{cN:"operator",b:"-\\w\\b",r:0},{cN:"pod",b:"\\=\\w",e:"\\=cut"}];d.c=e;f.c[1].c=e;return{dM:{k:c,c:e}}}();hljs.LANGUAGES.objectivec=function(){var a={keyword:{"false":1,"int":1,"float":1,"while":1,"private":1,"char":1,"catch":1,"export":1,sizeof:2,typedef:2,"const":1,struct:1,"for":1,union:1,unsigned:1,"long":1,"volatile":2,"static":1,"protected":1,bool:1,mutable:1,"if":1,"public":1,"do":1,"return":1,"goto":1,"void":2,"enum":1,"else":1,"break":1,extern:1,"true":1,"class":1,asm:1,"case":1,"short":1,"default":1,"double":1,"throw":1,register:1,explicit:1,signed:1,typename:1,"try":1,"this":1,"switch":1,"continue":1,wchar_t:1,inline:1,readonly:1,assign:1,property:1,protocol:10,self:1,"synchronized":1,end:1,synthesize:50,id:1,optional:1,required:1,implementation:10,nonatomic:1,"interface":1,"super":1,unichar:1,"finally":2,dynamic:2,nil:1},built_in:{YES:5,NO:5,NULL:1,IBOutlet:50,IBAction:50,NSString:50,NSDictionary:50,CGRect:50,CGPoint:50,NSRange:50,release:1,retain:1,autorelease:50,UIButton:50,UILabel:50,UITextView:50,UIWebView:50,MKMapView:50,UISegmentedControl:50,NSObject:50,UITableViewDelegate:50,UITableViewDataSource:50,NSThread:50,UIActivityIndicator:50,UITabbar:50,UIToolBar:50,UIBarButtonItem:50,UIImageView:50,NSAutoreleasePool:50,UITableView:50,BOOL:1,NSInteger:20,CGFloat:20,NSException:50,NSLog:50,NSMutableString:50,NSMutableArray:50,NSMutableDictionary:50,NSURL:50}};return{dM:{k:a,i:"</",c:[hljs.CLCM,hljs.CBLCLM,hljs.CNM,hljs.QSM,{cN:"string",b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"},{cN:"preprocessor",b:"#import",e:"$",c:[{cN:"title",b:'"',e:'"'},{cN:"title",b:"<",e:">"}]},{cN:"preprocessor",b:"#",e:"$"},{cN:"class",b:"interface|class|protocol|implementation",e:"({|$)",k:{"interface":1,"class":1,protocol:5,implementation:5},c:[{cN:"id",b:hljs.UIR}]}]}}}();hljs.LANGUAGES.nginx=function(){var c={cN:"variable",b:"\\$\\d+"};var b={cN:"variable",b:"\\${",e:"}"};var a={cN:"variable",b:"[\\$\\@]"+hljs.UIR};return{dM:{c:[hljs.HCM,{b:hljs.UIR,e:";|{",rE:true,k:{accept_mutex:1,accept_mutex_delay:1,access_log:1,add_after_body:1,add_before_body:1,add_header:1,addition_types:1,alias:1,allow:1,ancient_browser:1,ancient_browser:1,ancient_browser_value:1,ancient_browser_value:1,auth_basic:1,auth_basic_user_file:1,autoindex:1,autoindex_exact_size:1,autoindex_localtime:1,"break":1,charset:1,charset:1,charset_map:1,charset_map:1,charset_types:1,charset_types:1,client_body_buffer_size:1,client_body_in_file_only:1,client_body_in_single_buffer:1,client_body_temp_path:1,client_body_timeout:1,client_header_buffer_size:1,client_header_timeout:1,client_max_body_size:1,connection_pool_size:1,connections:1,create_full_put_path:1,daemon:1,dav_access:1,dav_methods:1,debug_connection:1,debug_points:1,default_type:1,deny:1,directio:1,directio_alignment:1,echo:1,echo_after_body:1,echo_before_body:1,echo_blocking_sleep:1,echo_duplicate:1,echo_end:1,echo_exec:1,echo_flush:1,echo_foreach_split:1,echo_location:1,echo_location_async:1,echo_read_request_body:1,echo_request_body:1,echo_reset_timer:1,echo_sleep:1,echo_subrequest:1,echo_subrequest_async:1,empty_gif:1,empty_gif:1,env:1,error_log:1,error_log:1,error_page:1,events:1,expires:1,fastcgi_bind:1,fastcgi_buffer_size:1,fastcgi_buffers:1,fastcgi_busy_buffers_size:1,fastcgi_cache:1,fastcgi_cache_key:1,fastcgi_cache_methods:1,fastcgi_cache_min_uses:1,fastcgi_cache_path:1,fastcgi_cache_use_stale:1,fastcgi_cache_valid:1,fastcgi_catch_stderr:1,fastcgi_connect_timeout:1,fastcgi_hide_header:1,fastcgi_ignore_client_abort:1,fastcgi_ignore_headers:1,fastcgi_index:1,fastcgi_intercept_errors:1,fastcgi_max_temp_file_size:1,fastcgi_next_upstream:1,fastcgi_param:1,fastcgi_pass:1,fastcgi_pass_header:1,fastcgi_pass_request_body:1,fastcgi_pass_request_headers:1,fastcgi_read_timeout:1,fastcgi_send_lowat:1,fastcgi_send_timeout:1,fastcgi_split_path_info:1,fastcgi_store:1,fastcgi_store_access:1,fastcgi_temp_file_write_size:1,fastcgi_temp_path:1,fastcgi_upstream_fail_timeout:1,fastcgi_upstream_max_fails:1,flv:1,geo:1,geo:1,geoip_city:1,geoip_country:1,gzip:1,gzip_buffers:1,gzip_comp_level:1,gzip_disable:1,gzip_hash:1,gzip_http_version:1,gzip_min_length:1,gzip_no_buffer:1,gzip_proxied:1,gzip_static:1,gzip_types:1,gzip_vary:1,gzip_window:1,http:1,"if":1,if_modified_since:1,ignore_invalid_headers:1,image_filter:1,image_filter_buffer:1,image_filter_jpeg_quality:1,image_filter_transparency:1,include:1,index:1,internal:1,ip_hash:1,js:1,js_load:1,js_require:1,js_utf8:1,keepalive_requests:1,keepalive_timeout:1,kqueue_changes:1,kqueue_events:1,large_client_header_buffers:1,limit_conn:1,limit_conn_log_level:1,limit_except:1,limit_rate:1,limit_rate_after:1,limit_req:1,limit_req_log_level:1,limit_req_zone:1,limit_zone:1,lingering_time:1,lingering_timeout:1,listen:1,location:1,lock_file:1,log_format:1,log_not_found:1,log_subrequest:1,map:1,map_hash_bucket_size:1,map_hash_max_size:1,master_process:1,memcached_bind:1,memcached_buffer_size:1,memcached_connect_timeout:1,memcached_next_upstream:1,memcached_pass:1,memcached_read_timeout:1,memcached_send_timeout:1,memcached_upstream_fail_timeout:1,memcached_upstream_max_fails:1,merge_slashes:1,min_delete_depth:1,modern_browser:1,modern_browser:1,modern_browser_value:1,modern_browser_value:1,more_clear_headers:1,more_clear_input_headers:1,more_set_headers:1,more_set_input_headers:1,msie_padding:1,msie_refresh:1,multi_accept:1,open_file_cache:1,open_file_cache_errors:1,open_file_cache_events:1,open_file_cache_min_uses:1,open_file_cache_retest:1,open_file_cache_valid:1,open_log_file_cache:1,optimize_server_names:1,output_buffers:1,override_charset:1,override_charset:1,perl:1,perl_modules:1,perl_require:1,perl_set:1,pid:1,port_in_redirect:1,post_action:1,postpone_gzipping:1,postpone_output:1,proxy_bind:1,proxy_buffer_size:1,proxy_buffering:1,proxy_buffers:1,proxy_busy_buffers_size:1,proxy_cache:1,proxy_cache_key:1,proxy_cache_methods:1,proxy_cache_min_uses:1,proxy_cache_path:1,proxy_cache_use_stale:1,proxy_cache_valid:1,proxy_connect_timeout:1,proxy_headers_hash_bucket_size:1,proxy_headers_hash_max_size:1,proxy_hide_header:1,proxy_ignore_client_abort:1,proxy_ignore_headers:1,proxy_intercept_errors:1,proxy_max_temp_file_size:1,proxy_method:1,proxy_next_upstream:1,proxy_pass:1,proxy_pass_header:1,proxy_pass_request_body:1,proxy_pass_request_headers:1,proxy_read_timeout:1,proxy_redirect:1,proxy_send_lowat:1,proxy_send_timeout:1,proxy_set_body:1,proxy_set_header:1,proxy_store:1,proxy_store_access:1,proxy_temp_file_write_size:1,proxy_temp_path:1,proxy_upstream_fail_timeout:1,proxy_upstream_max_fails:1,push_authorized_channels_only:1,push_channel_group:1,push_max_channel_id_length:1,push_max_channel_subscribers:1,push_max_message_buffer_length:1,push_max_reserved_memory:1,push_message_buffer_length:1,push_message_timeout:1,push_min_message_buffer_length:1,push_min_message_recipients:1,push_publisher:1,push_store_messages:1,push_subscriber:1,push_subscriber_concurrency:1,random_index:1,read_ahead:1,real_ip_header:1,recursive_error_pages:1,request_pool_size:1,reset_timedout_connection:1,resolver:1,resolver_timeout:1,"return":1,rewrite:1,rewrite_log:1,root:1,satisfy:1,satisfy_any:1,send_lowat:1,send_timeout:1,sendfile:1,sendfile_max_chunk:1,server:1,server:1,server_name:1,server_name_in_redirect:1,server_names_hash_bucket_size:1,server_names_hash_max_size:1,server_tokens:1,set:1,set_real_ip_from:1,source_charset:1,source_charset:1,ssi:1,ssi_ignore_recycled_buffers:1,ssi_min_file_chunk:1,ssi_silent_errors:1,ssi_types:1,ssi_value_length:1,ssl:1,ssl_certificate:1,ssl_certificate_key:1,ssl_ciphers:1,ssl_client_certificate:1,ssl_crl:1,ssl_dhparam:1,ssl_prefer_server_ciphers:1,ssl_protocols:1,ssl_session_cache:1,ssl_session_timeout:1,ssl_verify_client:1,ssl_verify_depth:1,sub_filter:1,sub_filter_once:1,sub_filter_types:1,tcp_nodelay:1,tcp_nopush:1,timer_resolution:1,try_files:1,types:1,types_hash_bucket_size:1,types_hash_max_size:1,underscores_in_headers:1,uninitialized_variable_warn:1,upstream:1,use:1,user:1,userid:1,userid:1,userid_domain:1,userid_domain:1,userid_expires:1,userid_expires:1,userid_mark:1,userid_name:1,userid_name:1,userid_p3p:1,userid_p3p:1,userid_path:1,userid_path:1,userid_service:1,userid_service:1,valid_referers:1,variables_hash_bucket_size:1,variables_hash_max_size:1,worker_connections:1,worker_cpu_affinity:1,worker_priority:1,worker_processes:1,worker_rlimit_core:1,worker_rlimit_nofile:1,worker_rlimit_sigpending:1,working_directory:1,xml_entities:1,xslt_stylesheet:1,xslt_types:1},r:0,c:[hljs.HCM,{b:"\\s",e:"[;{]",rB:true,rE:true,l:"[a-z/]+",k:{built_in:{on:1,off:1,yes:1,no:1,"true":1,"false":1,none:1,blocked:1,debug:1,info:1,notice:1,warn:1,error:1,crit:1,select:1,permanent:1,redirect:1,kqueue:1,rtsig:1,epoll:1,poll:1,"/dev/poll":1}},r:0,c:[hljs.HCM,{cN:"string",b:'"',e:'"',c:[hljs.BE,c,b,a],r:0},{cN:"string",b:"'",e:"'",c:[hljs.BE,c,b,a],r:0},{cN:"string",b:"([a-z]+):/",e:"[;\\s]",rE:true},{cN:"regexp",b:"\\s\\^",e:"\\s|{|;",rE:true,c:[hljs.BE,c,b,a]},{cN:"regexp",b:"~\\*?\\s+",e:"\\s|{|;",rE:true,c:[hljs.BE,c,b,a]},{cN:"regexp",b:"\\*(\\.[a-z\\-]+)+",c:[hljs.BE,c,b,a]},{cN:"regexp",b:"([a-z\\-]+\\.)+\\*",c:[hljs.BE,c,b,a]},{cN:"number",b:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b"},{cN:"number",b:"\\s\\d+[kKmMgGdshdwy]*\\b",r:0},c,b,a]}]}]}}}();hljs.LANGUAGES.django=function(){function c(f,e){return(e==undefined||(!f.cN&&e.cN=="tag")||f.cN=="value")}function d(j,e){var h={};for(var g in j){if(g!="contains"){h[g]=j[g]}var k=[];for(var f=0;j.c&&f<j.c.length;f++){k.push(d(j.c[f],j))}if(c(j,e)){k=b.concat(k)}if(k.length){h.c=k}}return h}var a={cN:"filter",b:"\\|[A-Za-z]+\\:?",eE:true,k:{truncatewords:1,removetags:1,linebreaksbr:1,yesno:1,get_digit:1,timesince:1,random:1,striptags:1,filesizeformat:1,escape:1,linebreaks:1,length_is:1,ljust:1,rjust:1,cut:1,urlize:1,fix_ampersands:1,title:1,floatformat:1,capfirst:1,pprint:1,divisibleby:1,add:1,make_list:1,unordered_list:1,urlencode:1,timeuntil:1,urlizetrunc:1,wordcount:1,stringformat:1,linenumbers:1,slice:1,date:1,dictsort:1,dictsortreversed:1,default_if_none:1,pluralize:1,lower:1,join:1,center:1,"default":1,truncatewords_html:1,upper:1,length:1,phone2numeric:1,wordwrap:1,time:1,addslashes:1,slugify:1,first:1},c:[{cN:"argument",b:'"',e:'"'}]};var b=[{cN:"template_comment",b:"{%\\s*comment\\s*%}",e:"{%\\s*endcomment\\s*%}"},{cN:"template_comment",b:"{#",e:"#}"},{cN:"template_tag",b:"{%",e:"%}",k:{comment:1,endcomment:1,load:1,templatetag:1,ifchanged:1,endifchanged:1,"if":1,endif:1,firstof:1,"for":1,endfor:1,"in":1,ifnotequal:1,endifnotequal:1,widthratio:1,"extends":1,include:1,spaceless:1,endspaceless:1,regroup:1,by:1,as:1,ifequal:1,endifequal:1,ssi:1,now:1,"with":1,cycle:1,url:1,filter:1,endfilter:1,debug:1,block:1,endblock:1,"else":1},c:[a]},{cN:"variable",b:"{{",e:"}}",c:[a]}];return{cI:true,dM:d(hljs.LANGUAGES.xml.dM)}}();hljs.LANGUAGES.cpp=function(){var b={keyword:{"false":1,"int":1,"float":1,"while":1,"private":1,"char":1,"catch":1,"export":1,virtual:1,operator:2,sizeof:2,dynamic_cast:2,typedef:2,const_cast:2,"const":1,struct:1,"for":1,static_cast:2,union:1,namespace:1,unsigned:1,"long":1,"throw":1,"volatile":2,"static":1,"protected":1,bool:1,template:1,mutable:1,"if":1,"public":1,friend:2,"do":1,"return":1,"goto":1,auto:1,"void":2,"enum":1,"else":1,"break":1,"new":1,extern:1,using:1,"true":1,"class":1,asm:1,"case":1,typeid:1,"short":1,reinterpret_cast:2,"default":1,"double":1,register:1,explicit:1,signed:1,typename:1,"try":1,"this":1,"switch":1,"continue":1,wchar_t:1,inline:1,"delete":1,alignof:1,char16_t:1,char32_t:1,constexpr:1,decltype:1,noexcept:1,nullptr:1,static_assert:1,thread_local:1},built_in:{std:1,string:1,cin:1,cout:1,cerr:1,clog:1,stringstream:1,istringstream:1,ostringstream:1,auto_ptr:1,deque:1,list:1,queue:1,stack:1,vector:1,map:1,set:1,bitset:1,multiset:1,multimap:1,unordered_set:1,unordered_map:1,unordered_multiset:1,unordered_multimap:1,array:1,shared_ptr:1}};var a={cN:"stl_container",b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:b,r:10};a.c=[a];return{dM:{k:b,i:"</",c:[hljs.CLCM,hljs.CBLCLM,hljs.QSM,{cN:"string",b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"},hljs.CNM,{cN:"preprocessor",b:"#",e:"$"},a]}}}();