(()=>{var ie={358:R=>{var L=Object.prototype.toString,A=typeof Buffer<"u"&&typeof Buffer.alloc=="function"&&typeof Buffer.allocUnsafe=="function"&&typeof Buffer.from=="function";function x(m){return L.call(m).slice(8,-1)==="ArrayBuffer"}function s(m,h,o){h>>>=0;var a=m.byteLength-h;if(a<0)throw new RangeError("'offset' is out of bounds");if(o===void 0)o=a;else if(o>>>=0,o>a)throw new RangeError("'length' is out of bounds");return A?Buffer.from(m.slice(h,h+o)):new Buffer(new Uint8Array(m.slice(h,h+o)))}function _(m,h){if((typeof h!="string"||h==="")&&(h="utf8"),!Buffer.isEncoding(h))throw new TypeError('"encoding" must be a valid string encoding');return A?Buffer.from(m,h):new Buffer(m,h)}function M(m,h,o){if(typeof m=="number")throw new TypeError('"value" argument must not be a number');return x(m)?s(m,h,o):typeof m=="string"?_(m,h):A?Buffer.from(m):new Buffer(m)}R.exports=M},49:(R,L,A)=>{A(685).install()},685:(R,L,A)=>{R=A.nmd(R);var x=A(461).SourceMapConsumer,s=A(17),_;try{_=A(147),(!_.existsSync||!_.readFileSync)&&(_=null)}catch{}var M=A(358);function m(g,v){return g.require(v)}var h=!1,o=!1,a=!1,u="auto",n={},l={},t=/^data:application\/json[^,]+base64,/,f=[],i=[];function d(){return u==="browser"?!0:u==="node"?!1:typeof window<"u"&&typeof XMLHttpRequest=="function"&&!(window.require&&window.module&&window.process&&window.process.type==="renderer")}function w(){return typeof process=="object"&&process!==null&&typeof process.on=="function"}function S(){return typeof process=="object"&&process!==null?process.version:""}function O(){if(typeof process=="object"&&process!==null)return process.stderr}function r(g){if(typeof process=="object"&&process!==null&&typeof process.exit=="function")return process.exit(g)}function e(g){return function(v){for(var b=0;b<g.length;b++){var c=g[b](v);if(c)return c}return null}}var p=e(f);f.push(function(g){if(g=g.trim(),/^file:/.test(g)&&(g=g.replace(/file:\/\/\/(\w:)?/,function(c,y){return y?"":"/"})),g in n)return n[g];var v="";try{if(_)_.existsSync(g)&&(v=_.readFileSync(g,"utf8"));else{var b=new XMLHttpRequest;b.open("GET",g,!1),b.send(null),b.readyState===4&&b.status===200&&(v=b.responseText)}}catch{}return n[g]=v});function C(g,v){if(!g)return v;var b=s.dirname(g),c=/^\w+:\/\/[^\/]*/.exec(b),y=c?c[0]:"",E=b.slice(y.length);return y&&/^\/\w\:/.test(E)?(y+="/",y+s.resolve(b.slice(y.length),v).replace(/\\/g,"/")):y+s.resolve(b.slice(y.length),v)}function U(g){var v;if(d())try{var b=new XMLHttpRequest;b.open("GET",g,!1),b.send(null),v=b.readyState===4?b.responseText:null;var c=b.getResponseHeader("SourceMap")||b.getResponseHeader("X-SourceMap");if(c)return c}catch{}v=p(g);for(var y=/(?:\/\/[@#][\s]*sourceMappingURL=([^\s'"]+)[\s]*$)|(?:\/\*[@#][\s]*sourceMappingURL=([^\s*'"]+)[\s]*(?:\*\/)[\s]*$)/mg,E,I;I=y.exec(v);)E=I;return E?E[1]:null}var B=e(i);i.push(function(g){var v=U(g);if(!v)return null;var b;if(t.test(v)){var c=v.slice(v.indexOf(",")+1);b=M(c,"base64").toString(),v=g}else v=C(g,v),b=p(v);return b?{url:v,map:b}:null});function k(g){var v=l[g.source];if(!v){var b=B(g.source);b?(v=l[g.source]={url:b.url,map:new x(b.map)},v.map.sourcesContent&&v.map.sources.forEach(function(y,E){var I=v.map.sourcesContent[E];if(I){var N=C(v.url,y);n[N]=I}})):v=l[g.source]={url:null,map:null}}if(v&&v.map&&typeof v.map.originalPositionFor=="function"){var c=v.map.originalPositionFor(g);if(c.source!==null)return c.source=C(v.url,c.source),c}return g}function T(g){var v=/^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(g);if(v){var b=k({source:v[2],line:+v[3],column:v[4]-1});return"eval at "+v[1]+" ("+b.source+":"+b.line+":"+(b.column+1)+")"}return v=/^eval at ([^(]+) \((.+)\)$/.exec(g),v?"eval at "+v[1]+" ("+T(v[2])+")":g}function J(){var g,v="";if(this.isNative())v="native";else{g=this.getScriptNameOrSourceURL(),!g&&this.isEval()&&(v=this.getEvalOrigin(),v+=", "),g?v+=g:v+="<anonymous>";var b=this.getLineNumber();if(b!=null){v+=":"+b;var c=this.getColumnNumber();c&&(v+=":"+c)}}var y="",E=this.getFunctionName(),I=!0,N=this.isConstructor(),G=!(this.isToplevel()||N);if(G){var P=this.getTypeName();P==="[object Object]"&&(P="null");var j=this.getMethodName();E?(P&&E.indexOf(P)!=0&&(y+=P+"."),y+=E,j&&E.indexOf("."+j)!=E.length-j.length-1&&(y+=" [as "+j+"]")):y+=P+"."+(j||"<anonymous>")}else N?y+="new "+(E||"<anonymous>"):E?y+=E:(y+=v,I=!1);return I&&(y+=" ("+v+")"),y}function D(g){var v={};return Object.getOwnPropertyNames(Object.getPrototypeOf(g)).forEach(function(b){v[b]=/^(?:is|get)/.test(b)?function(){return g[b].call(g)}:g[b]}),v.toString=J,v}function z(g,v){if(v===void 0&&(v={nextPosition:null,curPosition:null}),g.isNative())return v.curPosition=null,g;var b=g.getFileName()||g.getScriptNameOrSourceURL();if(b){var c=g.getLineNumber(),y=g.getColumnNumber()-1,E=/^v(10\.1[6-9]|10\.[2-9][0-9]|10\.[0-9]{3,}|1[2-9]\d*|[2-9]\d|\d{3,}|11\.11)/,I=E.test(S())?0:62;c===1&&y>I&&!d()&&!g.isEval()&&(y-=I);var N=k({source:b,line:c,column:y});v.curPosition=N,g=D(g);var G=g.getFunctionName;return g.getFunctionName=function(){return v.nextPosition==null?G():v.nextPosition.name||G()},g.getFileName=function(){return N.source},g.getLineNumber=function(){return N.line},g.getColumnNumber=function(){return N.column+1},g.getScriptNameOrSourceURL=function(){return N.source},g}var P=g.isEval()&&g.getEvalOrigin();return P&&(P=T(P),g=D(g),g.getEvalOrigin=function(){return P}),g}function q(g,v){a&&(n={},l={});for(var b=g.name||"Error",c=g.message||"",y=b+": "+c,E={nextPosition:null,curPosition:null},I=[],N=v.length-1;N>=0;N--)I.push(`
    at `+z(v[N],E)),E.nextPosition=E.curPosition;return E.curPosition=E.nextPosition=null,y+I.reverse().join("")}function H(g){var v=/\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(g.stack);if(v){var b=v[1],c=+v[2],y=+v[3],E=n[b];if(!E&&_&&_.existsSync(b))try{E=_.readFileSync(b,"utf8")}catch{E=""}if(E){var I=E.split(/(?:\r\n|\r|\n)/)[c-1];if(I)return b+":"+c+`
`+I+`
`+new Array(y).join(" ")+"^"}}return null}function Z(g){var v=H(g),b=O();b&&b._handle&&b._handle.setBlocking&&b._handle.setBlocking(!0),v&&(console.error(),console.error(v)),console.error(g.stack),r(1)}function te(){var g=process.emit;process.emit=function(v){if(v==="uncaughtException"){var b=arguments[1]&&arguments[1].stack,c=this.listeners(v).length>0;if(b&&!c)return Z(arguments[1])}return g.apply(this,arguments)}}var oe=f.slice(0),Y=i.slice(0);L.wrapCallSite=z,L.getErrorSource=H,L.mapSourcePosition=k,L.retrieveSourceMap=B,L.install=function(g){if(g=g||{},g.environment&&(u=g.environment,["node","browser","auto"].indexOf(u)===-1))throw new Error("environment "+u+" was unknown. Available options are {auto, browser, node}");if(g.retrieveFile&&(g.overrideRetrieveFile&&(f.length=0),f.unshift(g.retrieveFile)),g.retrieveSourceMap&&(g.overrideRetrieveSourceMap&&(i.length=0),i.unshift(g.retrieveSourceMap)),g.hookRequire&&!d()){var v=m(R,"module"),b=v.prototype._compile;b.__sourceMapSupport||(v.prototype._compile=function(E,I){return n[I]=E,l[I]=void 0,b.call(this,E,I)},v.prototype._compile.__sourceMapSupport=!0)}if(a||(a="emptyCacheBetweenOperations"in g?g.emptyCacheBetweenOperations:!1),h||(h=!0,Error.prepareStackTrace=q),!o){var c="handleUncaughtExceptions"in g?g.handleUncaughtExceptions:!0;try{var y=m(R,"worker_threads");y.isMainThread===!1&&(c=!1)}catch{}c&&w()&&(o=!0,te())}},L.resetRetrieveHandlers=function(){f.length=0,i.length=0,f=oe.slice(0),i=Y.slice(0),B=e(i),p=e(f)}},668:(R,L,A)=>{var x=A(930),s=Object.prototype.hasOwnProperty,_=typeof Map<"u";function M(){this._array=[],this._set=_?new Map:Object.create(null)}M.fromArray=function(h,o){for(var a=new M,u=0,n=h.length;u<n;u++)a.add(h[u],o);return a},M.prototype.size=function(){return _?this._set.size:Object.getOwnPropertyNames(this._set).length},M.prototype.add=function(h,o){var a=_?h:x.toSetString(h),u=_?this.has(h):s.call(this._set,a),n=this._array.length;(!u||o)&&this._array.push(h),u||(_?this._set.set(h,n):this._set[a]=n)},M.prototype.has=function(h){if(_)return this._set.has(h);var o=x.toSetString(h);return s.call(this._set,o)},M.prototype.indexOf=function(h){if(_){var o=this._set.get(h);if(o>=0)return o}else{var a=x.toSetString(h);if(s.call(this._set,a))return this._set[a]}throw new Error('"'+h+'" is not in the set.')},M.prototype.at=function(h){if(h>=0&&h<this._array.length)return this._array[h];throw new Error("No element indexed by "+h)},M.prototype.toArray=function(){return this._array.slice()},L.I=M},158:(R,L,A)=>{var x=A(977),s=5,_=1<<s,M=_-1,m=_;function h(a){return a<0?(-a<<1)+1:(a<<1)+0}function o(a){var u=(a&1)===1,n=a>>1;return u?-n:n}L.encode=function(u){var n="",l,t=h(u);do l=t&M,t>>>=s,t>0&&(l|=m),n+=x.encode(l);while(t>0);return n},L.decode=function(u,n,l){var t=u.length,f=0,i=0,d,w;do{if(n>=t)throw new Error("Expected more digits in base 64 VLQ value.");if(w=x.decode(u.charCodeAt(n++)),w===-1)throw new Error("Invalid base64 digit: "+u.charAt(n-1));d=!!(w&m),w&=M,f=f+(w<<i),i+=s}while(d);l.value=o(f),l.rest=n}},977:(R,L)=>{var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");L.encode=function(x){if(0<=x&&x<A.length)return A[x];throw new TypeError("Must be between 0 and 63: "+x)},L.decode=function(x){var s=65,_=90,M=97,m=122,h=48,o=57,a=43,u=47,n=26,l=52;return s<=x&&x<=_?x-s:M<=x&&x<=m?x-M+n:h<=x&&x<=o?x-h+l:x==a?62:x==u?63:-1}},63:(R,L)=>{L.GREATEST_LOWER_BOUND=1,L.LEAST_UPPER_BOUND=2;function A(x,s,_,M,m,h){var o=Math.floor((s-x)/2)+x,a=m(_,M[o],!0);return a===0?o:a>0?s-o>1?A(o,s,_,M,m,h):h==L.LEAST_UPPER_BOUND?s<M.length?s:-1:o:o-x>1?A(x,o,_,M,m,h):h==L.LEAST_UPPER_BOUND?o:x<0?-1:x}L.search=function(s,_,M,m){if(_.length===0)return-1;var h=A(-1,_.length,s,_,M,m||L.GREATEST_LOWER_BOUND);if(h<0)return-1;for(;h-1>=0&&M(_[h],_[h-1],!0)===0;)--h;return h}},923:(R,L,A)=>{var x=A(930);function s(M,m){var h=M.generatedLine,o=m.generatedLine,a=M.generatedColumn,u=m.generatedColumn;return o>h||o==h&&u>=a||x.compareByGeneratedPositionsInflated(M,m)<=0}function _(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}_.prototype.unsortedForEach=function(m,h){this._array.forEach(m,h)},_.prototype.add=function(m){s(this._last,m)?(this._last=m,this._array.push(m)):(this._sorted=!1,this._array.push(m))},_.prototype.toArray=function(){return this._sorted||(this._array.sort(x.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},L.H=_},645:(R,L)=>{function A(_,M,m){var h=_[M];_[M]=_[m],_[m]=h}function x(_,M){return Math.round(_+Math.random()*(M-_))}function s(_,M,m,h){if(m<h){var o=x(m,h),a=m-1;A(_,o,h);for(var u=_[h],n=m;n<h;n++)M(_[n],u)<=0&&(a+=1,A(_,a,n));A(_,a+1,n);var l=a+1;s(_,M,m,l-1),s(_,M,l+1,h)}}L.U=function(_,M){s(_,M,0,_.length-1)}},94:(R,L,A)=>{var x,s=A(930),_=A(63),M=A(668).I,m=A(158),h=A(645).U;function o(l,t){var f=l;return typeof l=="string"&&(f=s.parseSourceMapInput(l)),f.sections!=null?new n(f,t):new a(f,t)}o.fromSourceMap=function(l,t){return a.fromSourceMap(l,t)},o.prototype._version=3,o.prototype.__generatedMappings=null,Object.defineProperty(o.prototype,"_generatedMappings",{configurable:!0,enumerable:!0,get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),o.prototype.__originalMappings=null,Object.defineProperty(o.prototype,"_originalMappings",{configurable:!0,enumerable:!0,get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),o.prototype._charIsMappingSeparator=function(t,f){var i=t.charAt(f);return i===";"||i===","},o.prototype._parseMappings=function(t,f){throw new Error("Subclasses must implement _parseMappings")},o.GENERATED_ORDER=1,o.ORIGINAL_ORDER=2,o.GREATEST_LOWER_BOUND=1,o.LEAST_UPPER_BOUND=2,o.prototype.eachMapping=function(t,f,i){var d=f||null,w=i||o.GENERATED_ORDER,S;switch(w){case o.GENERATED_ORDER:S=this._generatedMappings;break;case o.ORIGINAL_ORDER:S=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var O=this.sourceRoot;S.map(function(r){var e=r.source===null?null:this._sources.at(r.source);return e=s.computeSourceURL(O,e,this._sourceMapURL),{source:e,generatedLine:r.generatedLine,generatedColumn:r.generatedColumn,originalLine:r.originalLine,originalColumn:r.originalColumn,name:r.name===null?null:this._names.at(r.name)}},this).forEach(t,d)},o.prototype.allGeneratedPositionsFor=function(t){var f=s.getArg(t,"line"),i={source:s.getArg(t,"source"),originalLine:f,originalColumn:s.getArg(t,"column",0)};if(i.source=this._findSourceIndex(i.source),i.source<0)return[];var d=[],w=this._findMapping(i,this._originalMappings,"originalLine","originalColumn",s.compareByOriginalPositions,_.LEAST_UPPER_BOUND);if(w>=0){var S=this._originalMappings[w];if(t.column===void 0)for(var O=S.originalLine;S&&S.originalLine===O;)d.push({line:s.getArg(S,"generatedLine",null),column:s.getArg(S,"generatedColumn",null),lastColumn:s.getArg(S,"lastGeneratedColumn",null)}),S=this._originalMappings[++w];else for(var r=S.originalColumn;S&&S.originalLine===f&&S.originalColumn==r;)d.push({line:s.getArg(S,"generatedLine",null),column:s.getArg(S,"generatedColumn",null),lastColumn:s.getArg(S,"lastGeneratedColumn",null)}),S=this._originalMappings[++w]}return d},L.SourceMapConsumer=o;function a(l,t){var f=l;typeof l=="string"&&(f=s.parseSourceMapInput(l));var i=s.getArg(f,"version"),d=s.getArg(f,"sources"),w=s.getArg(f,"names",[]),S=s.getArg(f,"sourceRoot",null),O=s.getArg(f,"sourcesContent",null),r=s.getArg(f,"mappings"),e=s.getArg(f,"file",null);if(i!=this._version)throw new Error("Unsupported version: "+i);S&&(S=s.normalize(S)),d=d.map(String).map(s.normalize).map(function(p){return S&&s.isAbsolute(S)&&s.isAbsolute(p)?s.relative(S,p):p}),this._names=M.fromArray(w.map(String),!0),this._sources=M.fromArray(d,!0),this._absoluteSources=this._sources.toArray().map(function(p){return s.computeSourceURL(S,p,t)}),this.sourceRoot=S,this.sourcesContent=O,this._mappings=r,this._sourceMapURL=t,this.file=e}a.prototype=Object.create(o.prototype),a.prototype.consumer=o,a.prototype._findSourceIndex=function(l){var t=l;if(this.sourceRoot!=null&&(t=s.relative(this.sourceRoot,t)),this._sources.has(t))return this._sources.indexOf(t);var f;for(f=0;f<this._absoluteSources.length;++f)if(this._absoluteSources[f]==l)return f;return-1},a.fromSourceMap=function(t,f){var i=Object.create(a.prototype),d=i._names=M.fromArray(t._names.toArray(),!0),w=i._sources=M.fromArray(t._sources.toArray(),!0);i.sourceRoot=t._sourceRoot,i.sourcesContent=t._generateSourcesContent(i._sources.toArray(),i.sourceRoot),i.file=t._file,i._sourceMapURL=f,i._absoluteSources=i._sources.toArray().map(function(B){return s.computeSourceURL(i.sourceRoot,B,f)});for(var S=t._mappings.toArray().slice(),O=i.__generatedMappings=[],r=i.__originalMappings=[],e=0,p=S.length;e<p;e++){var C=S[e],U=new u;U.generatedLine=C.generatedLine,U.generatedColumn=C.generatedColumn,C.source&&(U.source=w.indexOf(C.source),U.originalLine=C.originalLine,U.originalColumn=C.originalColumn,C.name&&(U.name=d.indexOf(C.name)),r.push(U)),O.push(U)}return h(i.__originalMappings,s.compareByOriginalPositions),i},a.prototype._version=3,Object.defineProperty(a.prototype,"sources",{get:function(){return this._absoluteSources.slice()}});function u(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}a.prototype._parseMappings=function(t,f){for(var i=1,d=0,w=0,S=0,O=0,r=0,e=t.length,p=0,C={},U={},B=[],k=[],T,J,D,z,q;p<e;)if(t.charAt(p)===";")i++,p++,d=0;else if(t.charAt(p)===",")p++;else{for(T=new u,T.generatedLine=i,z=p;z<e&&!this._charIsMappingSeparator(t,z);z++);if(J=t.slice(p,z),D=C[J],D)p+=J.length;else{for(D=[];p<z;)m.decode(t,p,U),q=U.value,p=U.rest,D.push(q);if(D.length===2)throw new Error("Found a source, but no line and column");if(D.length===3)throw new Error("Found a source and line, but no column");C[J]=D}T.generatedColumn=d+D[0],d=T.generatedColumn,D.length>1&&(T.source=O+D[1],O+=D[1],T.originalLine=w+D[2],w=T.originalLine,T.originalLine+=1,T.originalColumn=S+D[3],S=T.originalColumn,D.length>4&&(T.name=r+D[4],r+=D[4])),k.push(T),typeof T.originalLine=="number"&&B.push(T)}h(k,s.compareByGeneratedPositionsDeflated),this.__generatedMappings=k,h(B,s.compareByOriginalPositions),this.__originalMappings=B},a.prototype._findMapping=function(t,f,i,d,w,S){if(t[i]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+t[i]);if(t[d]<0)throw new TypeError("Column must be greater than or equal to 0, got "+t[d]);return _.search(t,f,w,S)},a.prototype.computeColumnSpans=function(){for(var t=0;t<this._generatedMappings.length;++t){var f=this._generatedMappings[t];if(t+1<this._generatedMappings.length){var i=this._generatedMappings[t+1];if(f.generatedLine===i.generatedLine){f.lastGeneratedColumn=i.generatedColumn-1;continue}}f.lastGeneratedColumn=1/0}},a.prototype.originalPositionFor=function(t){var f={generatedLine:s.getArg(t,"line"),generatedColumn:s.getArg(t,"column")},i=this._findMapping(f,this._generatedMappings,"generatedLine","generatedColumn",s.compareByGeneratedPositionsDeflated,s.getArg(t,"bias",o.GREATEST_LOWER_BOUND));if(i>=0){var d=this._generatedMappings[i];if(d.generatedLine===f.generatedLine){var w=s.getArg(d,"source",null);w!==null&&(w=this._sources.at(w),w=s.computeSourceURL(this.sourceRoot,w,this._sourceMapURL));var S=s.getArg(d,"name",null);return S!==null&&(S=this._names.at(S)),{source:w,line:s.getArg(d,"originalLine",null),column:s.getArg(d,"originalColumn",null),name:S}}}return{source:null,line:null,column:null,name:null}},a.prototype.hasContentsOfAllSources=function(){return this.sourcesContent?this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some(function(t){return t==null}):!1},a.prototype.sourceContentFor=function(t,f){if(!this.sourcesContent)return null;var i=this._findSourceIndex(t);if(i>=0)return this.sourcesContent[i];var d=t;this.sourceRoot!=null&&(d=s.relative(this.sourceRoot,d));var w;if(this.sourceRoot!=null&&(w=s.urlParse(this.sourceRoot))){var S=d.replace(/^file:\/\//,"");if(w.scheme=="file"&&this._sources.has(S))return this.sourcesContent[this._sources.indexOf(S)];if((!w.path||w.path=="/")&&this._sources.has("/"+d))return this.sourcesContent[this._sources.indexOf("/"+d)]}if(f)return null;throw new Error('"'+d+'" is not in the SourceMap.')},a.prototype.generatedPositionFor=function(t){var f=s.getArg(t,"source");if(f=this._findSourceIndex(f),f<0)return{line:null,column:null,lastColumn:null};var i={source:f,originalLine:s.getArg(t,"line"),originalColumn:s.getArg(t,"column")},d=this._findMapping(i,this._originalMappings,"originalLine","originalColumn",s.compareByOriginalPositions,s.getArg(t,"bias",o.GREATEST_LOWER_BOUND));if(d>=0){var w=this._originalMappings[d];if(w.source===i.source)return{line:s.getArg(w,"generatedLine",null),column:s.getArg(w,"generatedColumn",null),lastColumn:s.getArg(w,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},x=a;function n(l,t){var f=l;typeof l=="string"&&(f=s.parseSourceMapInput(l));var i=s.getArg(f,"version"),d=s.getArg(f,"sections");if(i!=this._version)throw new Error("Unsupported version: "+i);this._sources=new M,this._names=new M;var w={line:-1,column:0};this._sections=d.map(function(S){if(S.url)throw new Error("Support for url field in sections not implemented.");var O=s.getArg(S,"offset"),r=s.getArg(O,"line"),e=s.getArg(O,"column");if(r<w.line||r===w.line&&e<w.column)throw new Error("Section offsets must be ordered and non-overlapping.");return w=O,{generatedOffset:{generatedLine:r+1,generatedColumn:e+1},consumer:new o(s.getArg(S,"map"),t)}})}n.prototype=Object.create(o.prototype),n.prototype.constructor=o,n.prototype._version=3,Object.defineProperty(n.prototype,"sources",{get:function(){for(var l=[],t=0;t<this._sections.length;t++)for(var f=0;f<this._sections[t].consumer.sources.length;f++)l.push(this._sections[t].consumer.sources[f]);return l}}),n.prototype.originalPositionFor=function(t){var f={generatedLine:s.getArg(t,"line"),generatedColumn:s.getArg(t,"column")},i=_.search(f,this._sections,function(w,S){var O=w.generatedLine-S.generatedOffset.generatedLine;return O||w.generatedColumn-S.generatedOffset.generatedColumn}),d=this._sections[i];return d?d.consumer.originalPositionFor({line:f.generatedLine-(d.generatedOffset.generatedLine-1),column:f.generatedColumn-(d.generatedOffset.generatedLine===f.generatedLine?d.generatedOffset.generatedColumn-1:0),bias:t.bias}):{source:null,line:null,column:null,name:null}},n.prototype.hasContentsOfAllSources=function(){return this._sections.every(function(t){return t.consumer.hasContentsOfAllSources()})},n.prototype.sourceContentFor=function(t,f){for(var i=0;i<this._sections.length;i++){var d=this._sections[i],w=d.consumer.sourceContentFor(t,!0);if(w)return w}if(f)return null;throw new Error('"'+t+'" is not in the SourceMap.')},n.prototype.generatedPositionFor=function(t){for(var f=0;f<this._sections.length;f++){var i=this._sections[f];if(i.consumer._findSourceIndex(s.getArg(t,"source"))!==-1){var d=i.consumer.generatedPositionFor(t);if(d){var w={line:d.line+(i.generatedOffset.generatedLine-1),column:d.column+(i.generatedOffset.generatedLine===d.line?i.generatedOffset.generatedColumn-1:0)};return w}}}return{line:null,column:null}},n.prototype._parseMappings=function(t,f){this.__generatedMappings=[],this.__originalMappings=[];for(var i=0;i<this._sections.length;i++)for(var d=this._sections[i],w=d.consumer._generatedMappings,S=0;S<w.length;S++){var O=w[S],r=d.consumer._sources.at(O.source);r=s.computeSourceURL(d.consumer.sourceRoot,r,this._sourceMapURL),this._sources.add(r),r=this._sources.indexOf(r);var e=null;O.name&&(e=d.consumer._names.at(O.name),this._names.add(e),e=this._names.indexOf(e));var p={source:r,generatedLine:O.generatedLine+(d.generatedOffset.generatedLine-1),generatedColumn:O.generatedColumn+(d.generatedOffset.generatedLine===O.generatedLine?d.generatedOffset.generatedColumn-1:0),originalLine:O.originalLine,originalColumn:O.originalColumn,name:e};this.__generatedMappings.push(p),typeof p.originalLine=="number"&&this.__originalMappings.push(p)}h(this.__generatedMappings,s.compareByGeneratedPositionsDeflated),h(this.__originalMappings,s.compareByOriginalPositions)},x=n},458:(R,L,A)=>{var x=A(158),s=A(930),_=A(668).I,M=A(923).H;function m(h){h||(h={}),this._file=s.getArg(h,"file",null),this._sourceRoot=s.getArg(h,"sourceRoot",null),this._skipValidation=s.getArg(h,"skipValidation",!1),this._sources=new _,this._names=new _,this._mappings=new M,this._sourcesContents=null}m.prototype._version=3,m.fromSourceMap=function(o){var a=o.sourceRoot,u=new m({file:o.file,sourceRoot:a});return o.eachMapping(function(n){var l={generated:{line:n.generatedLine,column:n.generatedColumn}};n.source!=null&&(l.source=n.source,a!=null&&(l.source=s.relative(a,l.source)),l.original={line:n.originalLine,column:n.originalColumn},n.name!=null&&(l.name=n.name)),u.addMapping(l)}),o.sources.forEach(function(n){var l=n;a!==null&&(l=s.relative(a,n)),u._sources.has(l)||u._sources.add(l);var t=o.sourceContentFor(n);t!=null&&u.setSourceContent(n,t)}),u},m.prototype.addMapping=function(o){var a=s.getArg(o,"generated"),u=s.getArg(o,"original",null),n=s.getArg(o,"source",null),l=s.getArg(o,"name",null);this._skipValidation||this._validateMapping(a,u,n,l),n!=null&&(n=String(n),this._sources.has(n)||this._sources.add(n)),l!=null&&(l=String(l),this._names.has(l)||this._names.add(l)),this._mappings.add({generatedLine:a.line,generatedColumn:a.column,originalLine:u!=null&&u.line,originalColumn:u!=null&&u.column,source:n,name:l})},m.prototype.setSourceContent=function(o,a){var u=o;this._sourceRoot!=null&&(u=s.relative(this._sourceRoot,u)),a!=null?(this._sourcesContents||(this._sourcesContents=Object.create(null)),this._sourcesContents[s.toSetString(u)]=a):this._sourcesContents&&(delete this._sourcesContents[s.toSetString(u)],Object.keys(this._sourcesContents).length===0&&(this._sourcesContents=null))},m.prototype.applySourceMap=function(o,a,u){var n=a;if(a==null){if(o.file==null)throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);n=o.file}var l=this._sourceRoot;l!=null&&(n=s.relative(l,n));var t=new _,f=new _;this._mappings.unsortedForEach(function(i){if(i.source===n&&i.originalLine!=null){var d=o.originalPositionFor({line:i.originalLine,column:i.originalColumn});d.source!=null&&(i.source=d.source,u!=null&&(i.source=s.join(u,i.source)),l!=null&&(i.source=s.relative(l,i.source)),i.originalLine=d.line,i.originalColumn=d.column,d.name!=null&&(i.name=d.name))}var w=i.source;w!=null&&!t.has(w)&&t.add(w);var S=i.name;S!=null&&!f.has(S)&&f.add(S)},this),this._sources=t,this._names=f,o.sources.forEach(function(i){var d=o.sourceContentFor(i);d!=null&&(u!=null&&(i=s.join(u,i)),l!=null&&(i=s.relative(l,i)),this.setSourceContent(i,d))},this)},m.prototype._validateMapping=function(o,a,u,n){if(a&&typeof a.line!="number"&&typeof a.column!="number")throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");if(!(o&&"line"in o&&"column"in o&&o.line>0&&o.column>=0&&!a&&!u&&!n)){if(o&&"line"in o&&"column"in o&&a&&"line"in a&&"column"in a&&o.line>0&&o.column>=0&&a.line>0&&a.column>=0&&u)return;throw new Error("Invalid mapping: "+JSON.stringify({generated:o,source:u,original:a,name:n}))}},m.prototype._serializeMappings=function(){for(var o=0,a=1,u=0,n=0,l=0,t=0,f="",i,d,w,S,O=this._mappings.toArray(),r=0,e=O.length;r<e;r++){if(d=O[r],i="",d.generatedLine!==a)for(o=0;d.generatedLine!==a;)i+=";",a++;else if(r>0){if(!s.compareByGeneratedPositionsInflated(d,O[r-1]))continue;i+=","}i+=x.encode(d.generatedColumn-o),o=d.generatedColumn,d.source!=null&&(S=this._sources.indexOf(d.source),i+=x.encode(S-t),t=S,i+=x.encode(d.originalLine-1-n),n=d.originalLine-1,i+=x.encode(d.originalColumn-u),u=d.originalColumn,d.name!=null&&(w=this._names.indexOf(d.name),i+=x.encode(w-l),l=w)),f+=i}return f},m.prototype._generateSourcesContent=function(o,a){return o.map(function(u){if(!this._sourcesContents)return null;a!=null&&(u=s.relative(a,u));var n=s.toSetString(u);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null},this)},m.prototype.toJSON=function(){var o={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};return this._file!=null&&(o.file=this._file),this._sourceRoot!=null&&(o.sourceRoot=this._sourceRoot),this._sourcesContents&&(o.sourcesContent=this._generateSourcesContent(o.sources,o.sourceRoot)),o},m.prototype.toString=function(){return JSON.stringify(this.toJSON())},L.h=m},771:(R,L,A)=>{var x,s=A(458).h,_=A(930),M=/(\r?\n)/,m=10,h="$$$isSourceNode$$$";function o(a,u,n,l,t){this.children=[],this.sourceContents={},this.line=a??null,this.column=u??null,this.source=n??null,this.name=t??null,this[h]=!0,l!=null&&this.add(l)}o.fromStringWithSourceMap=function(u,n,l){var t=new o,f=u.split(M),i=0,d=function(){var e=C(),p=C()||"";return e+p;function C(){return i<f.length?f[i++]:void 0}},w=1,S=0,O=null;return n.eachMapping(function(e){if(O!==null)if(w<e.generatedLine)r(O,d()),w++,S=0;else{var p=f[i]||"",C=p.substr(0,e.generatedColumn-S);f[i]=p.substr(e.generatedColumn-S),S=e.generatedColumn,r(O,C),O=e;return}for(;w<e.generatedLine;)t.add(d()),w++;if(S<e.generatedColumn){var p=f[i]||"";t.add(p.substr(0,e.generatedColumn)),f[i]=p.substr(e.generatedColumn),S=e.generatedColumn}O=e},this),i<f.length&&(O&&r(O,d()),t.add(f.splice(i).join(""))),n.sources.forEach(function(e){var p=n.sourceContentFor(e);p!=null&&(l!=null&&(e=_.join(l,e)),t.setSourceContent(e,p))}),t;function r(e,p){if(e===null||e.source===void 0)t.add(p);else{var C=l?_.join(l,e.source):e.source;t.add(new o(e.originalLine,e.originalColumn,C,p,e.name))}}},o.prototype.add=function(u){if(Array.isArray(u))u.forEach(function(n){this.add(n)},this);else if(u[h]||typeof u=="string")u&&this.children.push(u);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+u);return this},o.prototype.prepend=function(u){if(Array.isArray(u))for(var n=u.length-1;n>=0;n--)this.prepend(u[n]);else if(u[h]||typeof u=="string")this.children.unshift(u);else throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+u);return this},o.prototype.walk=function(u){for(var n,l=0,t=this.children.length;l<t;l++)n=this.children[l],n[h]?n.walk(u):n!==""&&u(n,{source:this.source,line:this.line,column:this.column,name:this.name})},o.prototype.join=function(u){var n,l,t=this.children.length;if(t>0){for(n=[],l=0;l<t-1;l++)n.push(this.children[l]),n.push(u);n.push(this.children[l]),this.children=n}return this},o.prototype.replaceRight=function(u,n){var l=this.children[this.children.length-1];return l[h]?l.replaceRight(u,n):typeof l=="string"?this.children[this.children.length-1]=l.replace(u,n):this.children.push("".replace(u,n)),this},o.prototype.setSourceContent=function(u,n){this.sourceContents[_.toSetString(u)]=n},o.prototype.walkSourceContents=function(u){for(var n=0,l=this.children.length;n<l;n++)this.children[n][h]&&this.children[n].walkSourceContents(u);for(var t=Object.keys(this.sourceContents),n=0,l=t.length;n<l;n++)u(_.fromSetString(t[n]),this.sourceContents[t[n]])},o.prototype.toString=function(){var u="";return this.walk(function(n){u+=n}),u},o.prototype.toStringWithSourceMap=function(u){var n={code:"",line:1,column:0},l=new s(u),t=!1,f=null,i=null,d=null,w=null;return this.walk(function(S,O){n.code+=S,O.source!==null&&O.line!==null&&O.column!==null?((f!==O.source||i!==O.line||d!==O.column||w!==O.name)&&l.addMapping({source:O.source,original:{line:O.line,column:O.column},generated:{line:n.line,column:n.column},name:O.name}),f=O.source,i=O.line,d=O.column,w=O.name,t=!0):t&&(l.addMapping({generated:{line:n.line,column:n.column}}),f=null,t=!1);for(var r=0,e=S.length;r<e;r++)S.charCodeAt(r)===m?(n.line++,n.column=0,r+1===e?(f=null,t=!1):t&&l.addMapping({source:O.source,original:{line:O.line,column:O.column},generated:{line:n.line,column:n.column},name:O.name})):n.column++}),this.walkSourceContents(function(S,O){l.setSourceContent(S,O)}),{code:n.code,map:l}},x=o},930:(R,L)=>{function A(r,e,p){if(e in r)return r[e];if(arguments.length===3)return p;throw new Error('"'+e+'" is a required argument.')}L.getArg=A;var x=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,s=/^data:.+\,.+$/;function _(r){var e=r.match(x);return e?{scheme:e[1],auth:e[2],host:e[3],port:e[4],path:e[5]}:null}L.urlParse=_;function M(r){var e="";return r.scheme&&(e+=r.scheme+":"),e+="//",r.auth&&(e+=r.auth+"@"),r.host&&(e+=r.host),r.port&&(e+=":"+r.port),r.path&&(e+=r.path),e}L.urlGenerate=M;function m(r){var e=r,p=_(r);if(p){if(!p.path)return r;e=p.path}for(var C=L.isAbsolute(e),U=e.split(/\/+/),B,k=0,T=U.length-1;T>=0;T--)B=U[T],B==="."?U.splice(T,1):B===".."?k++:k>0&&(B===""?(U.splice(T+1,k),k=0):(U.splice(T,2),k--));return e=U.join("/"),e===""&&(e=C?"/":"."),p?(p.path=e,M(p)):e}L.normalize=m;function h(r,e){r===""&&(r="."),e===""&&(e=".");var p=_(e),C=_(r);if(C&&(r=C.path||"/"),p&&!p.scheme)return C&&(p.scheme=C.scheme),M(p);if(p||e.match(s))return e;if(C&&!C.host&&!C.path)return C.host=e,M(C);var U=e.charAt(0)==="/"?e:m(r.replace(/\/+$/,"")+"/"+e);return C?(C.path=U,M(C)):U}L.join=h,L.isAbsolute=function(r){return r.charAt(0)==="/"||x.test(r)};function o(r,e){r===""&&(r="."),r=r.replace(/\/$/,"");for(var p=0;e.indexOf(r+"/")!==0;){var C=r.lastIndexOf("/");if(C<0||(r=r.slice(0,C),r.match(/^([^\/]+:\/)?\/*$/)))return e;++p}return Array(p+1).join("../")+e.substr(r.length+1)}L.relative=o;var a=function(){var r=Object.create(null);return!("__proto__"in r)}();function u(r){return r}function n(r){return t(r)?"$"+r:r}L.toSetString=a?u:n;function l(r){return t(r)?r.slice(1):r}L.fromSetString=a?u:l;function t(r){if(!r)return!1;var e=r.length;if(e<9||r.charCodeAt(e-1)!==95||r.charCodeAt(e-2)!==95||r.charCodeAt(e-3)!==111||r.charCodeAt(e-4)!==116||r.charCodeAt(e-5)!==111||r.charCodeAt(e-6)!==114||r.charCodeAt(e-7)!==112||r.charCodeAt(e-8)!==95||r.charCodeAt(e-9)!==95)return!1;for(var p=e-10;p>=0;p--)if(r.charCodeAt(p)!==36)return!1;return!0}function f(r,e,p){var C=d(r.source,e.source);return C!==0||(C=r.originalLine-e.originalLine,C!==0)||(C=r.originalColumn-e.originalColumn,C!==0||p)||(C=r.generatedColumn-e.generatedColumn,C!==0)||(C=r.generatedLine-e.generatedLine,C!==0)?C:d(r.name,e.name)}L.compareByOriginalPositions=f;function i(r,e,p){var C=r.generatedLine-e.generatedLine;return C!==0||(C=r.generatedColumn-e.generatedColumn,C!==0||p)||(C=d(r.source,e.source),C!==0)||(C=r.originalLine-e.originalLine,C!==0)||(C=r.originalColumn-e.originalColumn,C!==0)?C:d(r.name,e.name)}L.compareByGeneratedPositionsDeflated=i;function d(r,e){return r===e?0:r===null?1:e===null?-1:r>e?1:-1}function w(r,e){var p=r.generatedLine-e.generatedLine;return p!==0||(p=r.generatedColumn-e.generatedColumn,p!==0)||(p=d(r.source,e.source),p!==0)||(p=r.originalLine-e.originalLine,p!==0)||(p=r.originalColumn-e.originalColumn,p!==0)?p:d(r.name,e.name)}L.compareByGeneratedPositionsInflated=w;function S(r){return JSON.parse(r.replace(/^\)]}'[^\n]*\n/,""))}L.parseSourceMapInput=S;function O(r,e,p){if(e=e||"",r&&(r[r.length-1]!=="/"&&e[0]!=="/"&&(r+="/"),e=r+e),p){var C=_(p);if(!C)throw new Error("sourceMapURL could not be parsed");if(C.path){var U=C.path.lastIndexOf("/");U>=0&&(C.path=C.path.substring(0,U+1))}e=h(M(C),e)}return m(e)}L.computeSourceURL=O},461:(R,L,A)=>{A(458).h,L.SourceMapConsumer=A(94).SourceMapConsumer,A(771)},187:(R,L,A)=>{"use strict";A.r(L),A.d(L,{NIL:()=>g,parse:()=>e,stringify:()=>t,v1:()=>O,v3:()=>D,v4:()=>H,v5:()=>Y,validate:()=>a,version:()=>b});const x=require("crypto");var s=A.n(x);const _=new Uint8Array(256);let M=_.length;function m(){return M>_.length-16&&(s().randomFillSync(_),M=0),_.slice(M,M+=16)}const h=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function o(c){return typeof c=="string"&&h.test(c)}const a=o,u=[];for(let c=0;c<256;++c)u.push((c+256).toString(16).slice(1));function n(c,y=0){return(u[c[y+0]]+u[c[y+1]]+u[c[y+2]]+u[c[y+3]]+"-"+u[c[y+4]]+u[c[y+5]]+"-"+u[c[y+6]]+u[c[y+7]]+"-"+u[c[y+8]]+u[c[y+9]]+"-"+u[c[y+10]]+u[c[y+11]]+u[c[y+12]]+u[c[y+13]]+u[c[y+14]]+u[c[y+15]]).toLowerCase()}function l(c,y=0){const E=n(c,y);if(!a(E))throw TypeError("Stringified UUID is invalid");return E}const t=l;let f,i,d=0,w=0;function S(c,y,E){let I=y&&E||0;const N=y||new Array(16);c=c||{};let G=c.node||f,P=c.clockseq!==void 0?c.clockseq:i;if(G==null||P==null){const $=c.random||(c.rng||m)();G==null&&(G=f=[$[0]|1,$[1],$[2],$[3],$[4],$[5]]),P==null&&(P=i=($[6]<<8|$[7])&16383)}let j=c.msecs!==void 0?c.msecs:Date.now(),Q=c.nsecs!==void 0?c.nsecs:w+1;const W=j-d+(Q-w)/1e4;if(W<0&&c.clockseq===void 0&&(P=P+1&16383),(W<0||j>d)&&c.nsecs===void 0&&(Q=0),Q>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");d=j,w=Q,i=P,j+=122192928e5;const V=((j&268435455)*1e4+Q)%4294967296;N[I++]=V>>>24&255,N[I++]=V>>>16&255,N[I++]=V>>>8&255,N[I++]=V&255;const K=j/4294967296*1e4&268435455;N[I++]=K>>>8&255,N[I++]=K&255,N[I++]=K>>>24&15|16,N[I++]=K>>>16&255,N[I++]=P>>>8|128,N[I++]=P&255;for(let $=0;$<6;++$)N[I+$]=G[$];return y||n(N)}const O=S;function r(c){if(!a(c))throw TypeError("Invalid UUID");let y;const E=new Uint8Array(16);return E[0]=(y=parseInt(c.slice(0,8),16))>>>24,E[1]=y>>>16&255,E[2]=y>>>8&255,E[3]=y&255,E[4]=(y=parseInt(c.slice(9,13),16))>>>8,E[5]=y&255,E[6]=(y=parseInt(c.slice(14,18),16))>>>8,E[7]=y&255,E[8]=(y=parseInt(c.slice(19,23),16))>>>8,E[9]=y&255,E[10]=(y=parseInt(c.slice(24,36),16))/1099511627776&255,E[11]=y/4294967296&255,E[12]=y>>>24&255,E[13]=y>>>16&255,E[14]=y>>>8&255,E[15]=y&255,E}const e=r;function p(c){c=unescape(encodeURIComponent(c));const y=[];for(let E=0;E<c.length;++E)y.push(c.charCodeAt(E));return y}const C="6ba7b810-9dad-11d1-80b4-00c04fd430c8",U="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function B(c,y,E){function I(N,G,P,j){var Q;if(typeof N=="string"&&(N=p(N)),typeof G=="string"&&(G=e(G)),((Q=G)===null||Q===void 0?void 0:Q.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let W=new Uint8Array(16+N.length);if(W.set(G),W.set(N,G.length),W=E(W),W[6]=W[6]&15|y,W[8]=W[8]&63|128,P){j=j||0;for(let V=0;V<16;++V)P[j+V]=W[V];return P}return n(W)}try{I.name=c}catch{}return I.DNS=C,I.URL=U,I}function k(c){return Array.isArray(c)?c=Buffer.from(c):typeof c=="string"&&(c=Buffer.from(c,"utf8")),s().createHash("md5").update(c).digest()}const D=B("v3",48,k),z={randomUUID:s().randomUUID};function q(c,y,E){if(z.randomUUID&&!y&&!c)return z.randomUUID();c=c||{};const I=c.random||(c.rng||m)();if(I[6]=I[6]&15|64,I[8]=I[8]&63|128,y){E=E||0;for(let N=0;N<16;++N)y[E+N]=I[N];return y}return n(I)}const H=q;function Z(c){return Array.isArray(c)?c=Buffer.from(c):typeof c=="string"&&(c=Buffer.from(c,"utf8")),s().createHash("sha1").update(c).digest()}const Y=B("v5",80,Z),g="00000000-0000-0000-0000-000000000000";function v(c){if(!a(c))throw TypeError("Invalid UUID");return parseInt(c.slice(14,15),16)}const b=v},336:R=>{"use strict";R.exports=require("aws-sdk")},147:R=>{"use strict";R.exports=require("fs")},17:R=>{"use strict";R.exports=require("path")}},ee={};function F(R){var L=ee[R];if(L!==void 0)return L.exports;var A=ee[R]={id:R,loaded:!1,exports:{}};return ie[R](A,A.exports,F),A.loaded=!0,A.exports}F.n=R=>{var L=R&&R.__esModule?()=>R.default:()=>R;return F.d(L,{a:L}),L},F.d=(R,L)=>{for(var A in L)F.o(L,A)&&!F.o(R,A)&&Object.defineProperty(R,A,{enumerable:!0,get:L[A]})},F.o=(R,L)=>Object.prototype.hasOwnProperty.call(R,L),F.r=R=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(R,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(R,"__esModule",{value:!0})},F.nmd=R=>(R.paths=[],R.children||(R.children=[]),R);var X={};(()=>{"use strict";F.r(X),F.d(X,{handler:()=>M});var R=F(49),L=F.n(R);const{v4:A}=F(187),x=F(336),s=new x.DynamoDB.DocumentClient;async function _(m,h){try{const{firstName:o,lastName:a,email:u,phone:n}=JSON.parse(m.body),l=A(),t=new Date,f={id:l,firstName:o,lastName:a,email:u,phone:n,date:t.toISOString()},i=await s.put({TableName:"UsersTable",Item:f}).promise();return{statusCode:201,body:JSON.stringify(i)}}catch(o){return{statusCode:500,body:JSON.stringify(o)}}}const M=_})();var re=exports;for(var ne in X)re[ne]=X[ne];X.__esModule&&Object.defineProperty(re,"__esModule",{value:!0})})();

//# sourceMappingURL=register.js.map