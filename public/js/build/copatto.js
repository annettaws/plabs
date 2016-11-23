/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);

/*
 AngularJS v1.5.6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(F){'use strict';function O(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.5.6/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function xa(a){if(null==a||Wa(a))return!1;if(K(a)||I(a)||G&&a instanceof G)return!0;
var b="length"in Object(a)&&a.length;return Q(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"==typeof a.item)}function q(a,b,d){var c,e;if(a)if(E(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(K(a)||xa(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(rc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)sa.call(a,c)&&b.call(d,a[c],c,a);return a}function sc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function tc(a){return function(b,d){a(d,b)}}function Yd(){return++pb}function Qb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(J(g)||E(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&J(n)?ha(n)?a[m]=new Date(n.valueOf()):Xa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):
Rb(n)?a[m]=n.clone():(J(a[m])||(a[m]=K(n)?[]:{}),Qb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function P(a){return Qb(a,ya.call(arguments,1),!1)}function Zd(a){return Qb(a,ya.call(arguments,1),!0)}function $(a){return parseInt(a,10)}function Sb(a,b){return P(Object.create(a),b)}function C(){}function Ya(a){return a}function ca(a){return function(){return a}}function uc(a){return E(a.toString)&&a.toString!==ja}function y(a){return"undefined"===typeof a}function v(a){return"undefined"!==
typeof a}function J(a){return null!==a&&"object"===typeof a}function rc(a){return null!==a&&"object"===typeof a&&!vc(a)}function I(a){return"string"===typeof a}function Q(a){return"number"===typeof a}function ha(a){return"[object Date]"===ja.call(a)}function E(a){return"function"===typeof a}function Xa(a){return"[object RegExp]"===ja.call(a)}function Wa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function Ea(a){return"boolean"===typeof a}function $d(a){return a&&Q(a.length)&&
ae.test(ja.call(a))}function Rb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function be(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ta(a){return L(a.nodeName||a[0]&&a[0].nodeName)}function $a(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function oa(a,b){function d(a,b){var d=b.$$hashKey,e;if(K(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(rc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)sa.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!J(a))return a;var b=f.indexOf(a);if(-1!==b)return g[b];if(Wa(a)||Za(a))throw za("cpws");var b=!1,c=e(a);void 0===c&&(c=K(a)?[]:Object.create(vc(a)),b=!0);f.push(a);g.push(c);return b?d(a,c):c}function e(a){switch(ja.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer));
case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(E(a.cloneNode))return a.cloneNode(!0)}var f=[],
g=[];if(b){if($d(b)||"[object ArrayBuffer]"===ja.call(b))throw za("cpta");if(a===b)throw za("cpi");K(b)?b.length=0:q(b,function(a,d){"$$hashKey"!==d&&delete b[d]});f.push(a);g.push(b);return d(a,b)}return c(a)}function fa(a,b){if(K(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(J(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function na(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d==typeof b&&
"object"==d)if(K(a)){if(!K(b))return!1;if((d=a.length)==b.length){for(c=0;c<d;c++)if(!na(a[c],b[c]))return!1;return!0}}else{if(ha(a))return ha(b)?na(a.getTime(),b.getTime()):!1;if(Xa(a))return Xa(b)?a.toString()==b.toString():!1;if(Za(a)||Za(b)||Wa(a)||Wa(b)||K(b)||ha(b)||Xa(b))return!1;d=S();for(c in a)if("$"!==c.charAt(0)&&!E(a[c])){if(!na(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&v(b[c])&&!E(b[c]))return!1;return!0}return!1}function ab(a,b,d){return a.concat(ya.call(b,
d))}function bb(a,b){var d=2<arguments.length?ya.call(arguments,2):[];return!E(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,ab(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function ce(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Wa(b)?d="$WINDOW":b&&F.document===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function cb(a,b){if(!y(a))return Q(b)||(b=b?2:null),JSON.stringify(a,ce,
b)}function wc(a){return I(a)?JSON.parse(a):a}function xc(a,b){a=a.replace(de,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Tb(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=xc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function ua(a){a=G(a).clone();try{a.empty()}catch(b){}var d=G("<div>").append(a).html();try{return a[0].nodeType===Na?L(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+L(b)})}catch(c){return L(d)}}
function yc(a){try{return decodeURIComponent(a)}catch(b){}}function zc(a){var b={};q((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=yc(e),v(e)&&(f=v(f)?yc(f):!0,sa.call(b,e)?K(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Ub(a){var b=[];q(a,function(a,c){K(a)?q(a,function(a){b.push(ia(c,!0)+(!0===a?"":"="+ia(a,!0)))}):b.push(ia(c,!0)+(!0===a?"":"="+ia(a,!0)))});return b.length?b.join("&"):""}
function qb(a){return ia(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ia(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ee(a,b){var d,c,e=Oa.length;for(c=0;c<e;++c)if(d=Oa[c]+b,I(d=a.getAttribute(d)))return d;return null}function fe(a,b){var d,c,e={};q(Oa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});
q(Oa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==ee(d,"strict-di"),b(d,c?[c]:[],e))}function Ac(a,b,d){J(d)||(d={});d=P({strictDi:!1},d);var c=function(){a=G(a);if(a.injector()){var c=a[0]===F.document?"document":ua(a);throw za("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
b.unshift("ng");c=db(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;F&&e.test(F.name)&&(d.debugInfoEnabled=!0,F.name=F.name.replace(e,""));if(F&&!f.test(F.name))return c();F.name=F.name.replace(f,"");da.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};E(da.resumeDeferredBootstrap)&&da.resumeDeferredBootstrap()}function ge(){F.name=
"NG_ENABLE_DEBUG_INFO!"+F.name;F.location.reload()}function he(a){a=da.element(a).injector();if(!a)throw za("test");return a.get("$$testability")}function Bc(a,b){b=b||"_";return a.replace(ie,function(a,c){return(c?b:"")+a.toLowerCase()})}function je(){var a;if(!Cc){var b=rb();(Y=y(b)?F.jQuery:b?F[b]:void 0)&&Y.fn.on?(G=Y,P(Y.fn,{scope:Pa.scope,isolateScope:Pa.isolateScope,controller:Pa.controller,injector:Pa.injector,inheritedData:Pa.inheritedData}),a=Y.cleanData,Y.cleanData=function(b){for(var c,
e=0,f;null!=(f=b[e]);e++)(c=Y._data(f,"events"))&&c.$destroy&&Y(f).triggerHandler("$destroy");a(b)}):G=T;da.element=G;Cc=!0}}function sb(a,b,d){if(!a)throw za("areq",b||"?",d||"required");return a}function Qa(a,b,d){d&&K(a)&&(a=a[a.length-1]);sb(E(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ra(a,b){if("hasOwnProperty"===a)throw za("badname",b);}function Dc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=
b[g],a&&(a=(e=a)[c]);return!d&&E(a)?bb(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=G(ya.call(a,0,e))),c.push(b);return c||a}function S(){return Object.create(null)}function ke(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=O("$injector"),c=O("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||O;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&
(a[f]=null);return b(a,f,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return U}}function b(a,d){return function(b,e){e&&E(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return U}}if(!g)throw d("nomod",f);var c=[],e=[],p=[],x=a("$injector","invoke","push",e),U={_invokeQueue:c,_configBlocks:e,_runBlocks:p,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide",
"constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:x,run:function(a){p.push(a);return this}};h&&x(h);return U})}})}function le(a){P(a,{bootstrap:Ac,copy:oa,extend:P,merge:Zd,equals:na,element:G,forEach:q,injector:db,noop:C,bind:bb,toJson:cb,fromJson:wc,identity:Ya,isUndefined:y,
isDefined:v,isString:I,isFunction:E,isObject:J,isNumber:Q,isElement:Rb,isArray:K,version:me,isDate:ha,lowercase:L,uppercase:ub,callbacks:{counter:0},getTestability:he,$$minErr:O,$$csp:Fa,reloadWithDebugInfo:ge});Vb=ke(F);Vb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ne});a.provider("$compile",Ec).directive({a:oe,input:Fc,textarea:Fc,form:pe,script:qe,select:re,style:se,option:te,ngBind:ue,ngBindHtml:ve,ngBindTemplate:we,ngClass:xe,ngClassEven:ye,ngClassOdd:ze,ngCloak:Ae,ngController:Be,
ngForm:Ce,ngHide:De,ngIf:Ee,ngInclude:Fe,ngInit:Ge,ngNonBindable:He,ngPluralize:Ie,ngRepeat:Je,ngShow:Ke,ngStyle:Le,ngSwitch:Me,ngSwitchWhen:Ne,ngSwitchDefault:Oe,ngOptions:Pe,ngTransclude:Qe,ngModel:Re,ngList:Se,ngChange:Te,pattern:Gc,ngPattern:Gc,required:Hc,ngRequired:Hc,minlength:Ic,ngMinlength:Ic,maxlength:Jc,ngMaxlength:Jc,ngValue:Ue,ngModelOptions:Ve}).directive({ngInclude:We}).directive(vb).directive(Kc);a.provider({$anchorScroll:Xe,$animate:Ye,$animateCss:Ze,$$animateJs:$e,$$animateQueue:af,
$$AnimateRunner:bf,$$animateAsyncRun:cf,$browser:df,$cacheFactory:ef,$controller:ff,$document:gf,$exceptionHandler:hf,$filter:Lc,$$forceReflow:jf,$interpolate:kf,$interval:lf,$http:mf,$httpParamSerializer:nf,$httpParamSerializerJQLike:of,$httpBackend:pf,$xhrFactory:qf,$location:rf,$log:sf,$parse:tf,$rootScope:uf,$q:vf,$$q:wf,$sce:xf,$sceDelegate:yf,$sniffer:zf,$templateCache:Af,$templateRequest:Bf,$$testability:Cf,$timeout:Df,$window:Ef,$$rAF:Ff,$$jqLite:Gf,$$HashMap:Hf,$$cookieReader:If})}])}function eb(a){return a.replace(Jf,
function(a,d,c,e){return e?c.toUpperCase():c}).replace(Kf,"Moz$1")}function Mc(a){a=a.nodeType;return 1===a||!a||9===a}function Nc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Wb.test(a)){d=d||e.appendChild(b.createElement("div"));c=(Lf.exec(a)||["",""])[1].toLowerCase();c=ga[c]||ga._default;d.innerHTML=c[1]+a.replace(Mf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=ab(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});
return e}function Oc(a,b){var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)}function T(a){if(a instanceof T)return a;var b;I(a)&&(a=V(a),b=!0);if(!(this instanceof T)){if(b&&"<"!=a.charAt(0))throw Xb("nosel");return new T(a)}if(b){b=F.document;var d;a=(d=Nf.exec(a))?[b.createElement(d[1])]:(d=Nc(a,b))?d.childNodes:[]}Pc(this,a)}function Yb(a){return a.cloneNode(!0)}function wb(a,b){b||fb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)fb(d[c])}function Qc(a,
b,d,c){if(v(c))throw Xb("offargs");var e=(c=xb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];v(d)&&$a(c||[],d);v(d)&&c&&0<c.length||(a.removeEventListener(b,f,!1),delete e[b])};q(b.split(" "),function(a){g(a);yb[a]&&g(yb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function fb(a,b){var d=a.ng339,c=d&&gb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Qc(a)),delete gb[d],a.ng339=void 0))}function xb(a,b){var d=
a.ng339,d=d&&gb[d];b&&!d&&(a.ng339=d=++Of,d=gb[d]={events:{},data:{},handle:void 0});return d}function Zb(a,b,d){if(Mc(a)){var c=v(d),e=!c&&b&&!J(b),f=!b;a=(a=xb(a,!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];P(a,b)}}}function zb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Ab(a,b){b&&a.setAttribute&&q(b.split(" "),function(b){a.setAttribute("class",V((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+V(b)+" "," ")))})}function Bb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=V(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",V(d))}}function Pc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Rc(a,b){return Cb(a,"$"+(b||"ngController")+"Controller")}function Cb(a,
b,d){9==a.nodeType&&(a=a.documentElement);for(b=K(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(v(d=G.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function Sc(a){for(wb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Db(a,b){b||wb(a);var d=a.parentNode;d&&d.removeChild(a)}function Pf(a,b){b=b||F;if("complete"===b.document.readyState)b.setTimeout(a);else G(b).on("load",a)}function Tc(a,b){var d=Eb[b.toLowerCase()];return d&&Uc[ta(a)]&&d}function Qf(a,b){var d=function(c,
d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(y(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||Rf;1<g&&(f=fa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=
a;return d}function Rf(a,b,d){d.call(a,b)}function Sf(a,b,d){var c=b.relatedTarget;c&&(c===a||Tf.call(a,c))||d.call(a,b)}function Gf(){this.$get=function(){return P(T,{hasClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)}})}}function Ga(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=
d+":"+(b||Yd)():d+":"+a}function Sa(a,b){if(b){var d=0;this.nextUid=function(){return++d}}q(a,this.put,this)}function Vc(a){a=(Function.prototype.toString.call(a)+" ").replace(Uf,"");return a.match(Vf)||a.match(Wf)}function Xf(a){return(a=Vc(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function db(a,b){function d(a){return function(b,c){if(J(b))q(b,tc(a));else return a(b,c)}}function c(a,b){Ra(a,"service");if(E(b)||K(b))b=p.instantiate(b);if(!b.$get)throw Ha("pget",a);return n[a+"Provider"]=
b}function e(a,b){return function(){var c=z.invoke(b,this);if(y(c))throw Ha("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){sb(y(a)||K(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{I(a)?(c=Vb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):E(a)?b.push(p.invoke(a)):K(a)?b.push(p.invoke(a)):
Qa(a,"module")}catch(e){throw K(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ha("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=db.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];
if("string"!==typeof l)throw Ha("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);K(a)&&(a=a[a.length-1]);d=11>=Ba?!1:"function"===typeof a&&/^(?:class\s|constructor\()/.test(Function.prototype.toString.call(a)+" ");return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=K(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,
a))},get:d,annotate:db.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Sa([],!0),n={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,ca(b),!1)}),constant:d(function(a,b){Ra(a,"constant");n[a]=b;x[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=z.invoke(d,c);return z.invoke(b,null,
{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){da.isString(b)&&l.push(b);throw Ha("unpr",l.join(" <- "));}),x={},U=h(x,function(a,b){var c=p.get(a+"Provider",b);return z.invoke(c.$get,c,void 0,a)}),z=U;n.$injectorProvider={$get:ca(U)};var r=g(a),z=U.get("$injector");z.strictDi=b;q(r,function(a){a&&z.invoke(a)});return z}function Xe(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,
function(a){if("a"===ta(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;E(c)?c=c():Rb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Q(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=I(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===
b&&""===a||Pf(function(){c.$evalAsync(g)})});return g}]}function hb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;K(a)&&(a=a.join(" "));K(b)&&(b=b.join(" "));return a+" "+b}function Yf(a){I(a)&&(a=a.split(" "));var b=S();q(a,function(a){a.length&&(b[a]=!0)});return b}function Ia(a){return J(a)?a:{}}function Zf(a,b,d,c){function e(a){try{a.apply(null,ya.call(arguments,1))}finally{if(U--,0===U)for(;z.length;)try{z.pop()()}catch(b){d.error(b)}}}function f(){w=null;g();h()}function g(){r=ka();
r=y(r)?null:r;na(r,H)&&(r=H);H=r}function h(){if(u!==k.url()||D!==r)u=k.url(),D=r,q(B,function(a){a(k.url(),r)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,x={};k.isMock=!1;var U=0,z=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){U++};k.notifyWhenNoOutstandingRequests=function(a){0===U?a():z.push(a)};var r,D,u=l.href,t=b.find("base"),w=null,ka=c.history?function(){try{return m.state}catch(a){}}:C;g();D=r;k.url=function(b,d,e){y(e)&&(e=null);
l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=D===e;if(u===b&&(!c.history||f))return k;var h=u&&Ja(u)===Ja(b);u=b;D=e;!c.history||h&&f?(h||(w=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(w=b)):(m[d?"replaceState":"pushState"](e,"",b),g(),D=r);w&&(w=b);return k}return w||l.href.replace(/%27/g,"'")};k.state=function(){return r};var B=[],A=!1,H=null;k.onUrlChange=function(b){if(!A){if(c.history)G(a).on("popstate",f);G(a).on("hashchange",
f);A=!0}B.push(b);return b};k.$$applicationDestroyed=function(){G(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=t.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;U++;c=n(function(){delete x[c];e(a)},b||0);x[c]=!0;return c};k.defer.cancel=function(a){return x[a]?(delete x[a],p(a),e(C),!0):!1}}function df(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new Zf(a,c,b,d)}]}function ef(){this.$get=
function(){function a(a,c){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw O("$cacheFactory")("iid",a);var g=0,h=P({},c,{id:a}),k=S(),l=c&&c.capacity||Number.MAX_VALUE,m=S(),n=null,p=null;return b[a]={put:function(a,b){if(!y(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},
remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=S();g=0;m=S();n=p=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return P({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Af(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Ec(a,b){function d(a,
b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,e=S();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw ea("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==L(b))throw ea("baddir",a);if(a!==a.trim())throw ea("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!K(b)&&J(b)&&q(b,function(a,
c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,h=/(([\w\-]+)(?:\:([^;]+))?;?)/,k=be("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,n=S();this.directive=function z(b,d){Ra(b,"directive");I(b)?(c(b),sb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(f[b],function(f,g){try{var h=a.invoke(f);E(h)?h={compile:ca(h)}:
!h.compile&&h.link&&(h.compile=ca(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);h.restrict=h.restrict||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(k){c(k)}});return d}])),f[b].push(d)):q(b,tc(z));return this};this.component=function(a,b){function c(a){function e(b){return E(b)||K(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Wc(b.controller)||b.controllerAs||"$ctrl",
template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,E(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return v(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(a){return v(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return v(a)?(p=a,this):p};var x=10;this.onChangesTtl=function(a){return arguments.length?(x=a,this):x};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,e,n,w,ka,B,A,H){function M(){try{if(!--oa)throw Y=void 0,ea("infchng",x);ka.$apply(function(){for(var a=
0,b=Y.length;a<b;++a)Y[a]();Y=void 0})}finally{oa++}}function Aa(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function R(a,b,c){la.innerHTML="<span "+b+">";b=la.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function N(a,b){try{a.addClass(b)}catch(c){}}function aa(a,b,c,d,e){a instanceof G||(a=G(a));for(var f=/\S+/,g=0,h=a.length;g<h;g++){var k=a[g];k.nodeType===Na&&k.nodeValue.match(f)&&
Oc(k,a[g]=F.document.createElement("span"))}var l=s(a,b,a,c,d,e);aa.$$addScopeClass(a);var m=null;return function(b,c,d){sb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var f=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;f&&f.$$boundTransclude&&(f=f.$$boundTransclude);m||(m=(d=d&&d[0])?"foreignobject"!==ta(d)&&ja.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==m?G(ba(m,G("<div>").append(a).html())):c?Pa.clone.call(a):a;if(g)for(var h in g)d.data("$"+
h+"Controller",g[h].instance);aa.$$addScopeInfo(d,b);c&&c(d,b);l&&l(b,d,d,f);return d}}function s(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,n,u,r;if(p)for(r=Array(c.length),m=0;m<h.length;m+=3)f=h[m],r[f]=c[f];else r=c;m=0;for(n=h.length;m<n;)k=r[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),aa.$$addScopeInfo(G(k),l)):l=a,u=c.transcludeOnThisElement?va(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?va(a,b):null,c(f,l,k,d,u)):f&&f(a,k.childNodes,void 0,e)}for(var h=[],k,l,m,n,p,u=0;u<
a.length;u++){k=new Aa;l=$b(a[u],[],k,0===u?d:void 0,e);(f=l.length?Ta(l,a[u],k,b,c,null,[],[],f):null)&&f.scope&&aa.$$addScopeClass(k.$$element);k=f&&f.terminal||!(m=a[u].childNodes)||!m.length?null:s(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(u,f,k),n=!0,p=p||f;f=null}return n?g:null}function va(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}
var e=d.$$slots=S(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?va(a,b.$$slots[f],c):null;return d}function $b(a,b,c,d,e){var f=c.$attr,k;switch(a.nodeType){case 1:Da(b,wa(ta(a)),"E",d,e);for(var l,m,n,p=a.attributes,u=0,r=p&&p.length;u<r;u++){var B=!1,x=!1;l=p[u];k=l.name;m=V(l.value);l=wa(k);if(n=xa.test(l))k=k.replace(Xc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(l=l.match(za))&&Q(l[1])&&(B=k,x=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=wa(k.toLowerCase());f[l]=
k;if(n||!c.hasOwnProperty(l))c[l]=m,Tc(a,l)&&(c[l]=!0);ha(a,b,m,l,n);Da(b,l,"A",d,e,B,x)}a=a.className;J(a)&&(a=a.animVal);if(I(a)&&""!==a)for(;k=h.exec(a);)l=wa(k[2]),Da(b,l,"C",d,e)&&(c[l]=V(k[3])),a=a.substr(k.index+k[0].length);break;case Na:if(11===Ba)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Na;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);$(b,a.nodeValue);break;case 8:try{if(k=g.exec(a.nodeValue))l=wa(k[1]),Da(b,l,"M",d,e)&&(c[l]=V(k[2]))}catch(A){}}b.sort(X);
return b}function Yc(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ea("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return G(d)}function O(a,b,c){return function(d,e,f,g,h){e=Yc(e[0],b,c);return a(d,e,f,g,h)}}function ac(a,b,c,d,e,f){var g;return a?aa(b,c,d,e,f):function(){g||(g=aa(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function Ta(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&
(a=O(a,c,d));a.require=t.require;a.directiveName=M;if(B===t||t.$$isolateScope)a=fa(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=O(b,c,d));b.require=t.require;b.directiveName=M;if(B===t||t.$$isolateScope)b=fa(b,{isolateScope:!0});k.push(b)}}function n(a,c,e,f,g){function l(a,b,c,d){var e;Za(a)||(d=c,c=b,b=a,a=void 0);w&&(e=z);c||(c=w?D.parent():D);if(d){var f=g.$$slots[d];if(f)return f(a,b,e,c,Fb);if(y(f))throw ea("noslot",d,ua(D));}else return g(a,b,e,c,Fb)}var m,p,A,t,H,z,N,D;b===e?(f=d,D=d.$$element):
(D=G(e),f=new Aa(D,d));H=c;B?t=c.$new(!0):u&&(H=c.$parent);g&&(N=l,N.$$boundTransclude=g,N.isSlotFilled=function(a){return!!g.$$slots[a]});r&&(z=$f(D,f,N,r,t,c,B));B&&(aa.$$addScopeInfo(D,t,!0,!(x&&(x===B||x===B.$$originalDirective))),aa.$$addScopeClass(D,!0),t.$$isolateBindings=B.$$isolateBindings,p=ga(c,f,t,t.$$isolateBindings,B),p.removeWatches&&t.$on("$destroy",p.removeWatches));for(m in z){p=r[m];A=z[m];var R=p.$$bindings.bindToController;A.bindingInfo=A.identifier&&R?ga(H,f,A.instance,R,p):
{};var M=A();M!==A.instance&&(A.instance=M,D.data("$"+p.name+"Controller",M),A.bindingInfo.removeWatches&&A.bindingInfo.removeWatches(),A.bindingInfo=ga(H,f,A.instance,R,p))}q(r,function(a,b){var c=a.require;a.bindToController&&!K(c)&&J(c)&&P(z[b].instance,ib(b,c,D,z))});q(z,function(a){var b=a.instance;E(b.$onChanges)&&b.$onChanges(a.bindingInfo.initialChanges);E(b.$onInit)&&b.$onInit();E(b.$onDestroy)&&H.$on("$destroy",function(){b.$onDestroy()})});m=0;for(p=h.length;m<p;m++)A=h[m],ia(A,A.isolateScope?
t:c,D,f,A.require&&ib(A.directiveName,A.require,D,z),N);var Fb=c;B&&(B.template||null===B.templateUrl)&&(Fb=t);a&&a(Fb,e.childNodes,void 0,g);for(m=k.length-1;0<=m;m--)A=k[m],ia(A,A.isolateScope?t:c,D,f,A.require&&ib(A.directiveName,A.require,D,z),N);q(z,function(a){a=a.instance;E(a.$postLink)&&a.$postLink()})}l=l||{};for(var p=-Number.MAX_VALUE,u=l.newScopeDirective,r=l.controllerDirectives,B=l.newIsolateScopeDirective,x=l.templateDirective,A=l.nonTlbTranscludeDirective,H=!1,z=!1,w=l.hasElementTranscludeDirective,
N=d.$$element=G(b),t,M,R,ka=e,s,Ca=!1,va=!1,v,C=0,F=a.length;C<F;C++){t=a[C];var I=t.$$start,Ta=t.$$end;I&&(N=Yc(b,I,Ta));R=void 0;if(p>t.priority)break;if(v=t.scope)t.templateUrl||(J(v)?(W("new/isolated scope",B||u,t,N),B=t):W("new/isolated scope",B,t,N)),u=u||t;M=t.name;if(!Ca&&(t.replace&&(t.templateUrl||t.template)||t.transclude&&!t.$$tlb)){for(v=C+1;Ca=a[v++];)if(Ca.transclude&&!Ca.$$tlb||Ca.replace&&(Ca.templateUrl||Ca.template)){va=!0;break}Ca=!0}!t.templateUrl&&t.controller&&(v=t.controller,
r=r||S(),W("'"+M+"' controller",r[M],t,N),r[M]=t);if(v=t.transclude)if(H=!0,t.$$tlb||(W("transclusion",A,t,N),A=t),"element"==v)w=!0,p=t.priority,R=N,N=d.$$element=G(aa.$$createComment(M,d[M])),b=N[0],ca(f,ya.call(R,0),b),R[0].$$parentNode=R[0].parentNode,ka=ac(va,R,e,p,g&&g.name,{nonTlbTranscludeDirective:A});else{var L=S();R=G(Yb(b)).contents();if(J(v)){R=[];var Q=S(),Da=S();q(v,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Q[a]=b;L[b]=null;Da[b]=c});q(N.contents(),function(a){var b=
Q[wa(ta(a))];b?(Da[b]=!0,L[b]=L[b]||[],L[b].push(a)):R.push(a)});q(Da,function(a,b){if(!a)throw ea("reqslot",b);});for(var X in L)L[X]&&(L[X]=ac(va,L[X],e))}N.empty();ka=ac(va,R,e,void 0,void 0,{needsNewScope:t.$$isolateScope||t.$$newScope});ka.$$slots=L}if(t.template)if(z=!0,W("template",x,t,N),x=t,v=E(t.template)?t.template(N,d):t.template,v=ra(v),t.replace){g=t;R=Wb.test(v)?Zc(ba(t.templateNamespace,V(v))):[];b=R[0];if(1!=R.length||1!==b.nodeType)throw ea("tplrt",M,"");ca(f,N,b);F={$attr:{}};v=
$b(b,[],F);var $=a.splice(C+1,a.length-(C+1));(B||u)&&$c(v,B,u);a=a.concat(v).concat($);T(d,F);F=a.length}else N.html(v);if(t.templateUrl)z=!0,W("template",x,t,N),x=t,t.replace&&(g=t),n=Z(a.splice(C,a.length-C),N,d,f,H&&ka,h,k,{controllerDirectives:r,newScopeDirective:u!==t&&u,newIsolateScopeDirective:B,templateDirective:x,nonTlbTranscludeDirective:A}),F=a.length;else if(t.compile)try{s=t.compile(N,d,ka);var Y=t.$$originalDirective||t;E(s)?m(null,bb(Y,s),I,Ta):s&&m(bb(Y,s.pre),bb(Y,s.post),I,Ta)}catch(da){c(da,
ua(N))}t.terminal&&(n.terminal=!0,p=Math.max(p,t.priority))}n.scope=u&&!0===u.scope;n.transcludeOnThisElement=H;n.templateOnThisElement=z;n.transclude=ka;l.hasElementTranscludeDirective=w;return n}function ib(a,b,c,d){var e;if(I(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw ea("ctreq",b,a);}else if(K(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=
ib(a,b[g],c,d);else J(b)&&(e={},q(b,function(b,f){e[f]=ib(a,b,c,d)}));return e||null}function $f(a,b,c,d,e,f,g){var h=S(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},n=l.controller;"@"==n&&(n=b[l.name]);m=w(n,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function $c(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Sb(a[d],{$$isolateScope:b,$$newScope:c})}function Da(b,e,g,h,k,l,m){if(e===k)return null;k=null;if(f.hasOwnProperty(e)){var n;
e=a.get(e+"Directive");for(var p=0,u=e.length;p<u;p++)try{if(n=e[p],(y(h)||h>n.priority)&&-1!=n.restrict.indexOf(g)){l&&(n=Sb(n,{$$start:l,$$end:m}));if(!n.$$bindings){var r=n,B=n,A=n.name,x={isolateScope:null,bindToController:null};J(B.scope)&&(!0===B.bindToController?(x.bindToController=d(B.scope,A,!0),x.isolateScope={}):x.isolateScope=d(B.scope,A,!1));J(B.bindToController)&&(x.bindToController=d(B.bindToController,A,!0));if(J(x.bindToController)){var t=B.controller,H=B.controllerAs;if(!t)throw ea("noctrl",
A);if(!Wc(t,H))throw ea("noident",A);}var N=r.$$bindings=x;J(N.isolateScope)&&(n.$$isolateBindings=N.isolateScope)}b.push(n);k=n}}catch(w){c(w)}}return k}function Q(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function T(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,f){"class"==f?(N(e,b),a["class"]=(a["class"]?
a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Z(a,b,c,d,f,g,h,k){var l=[],m,n,p=b[0],B=a.shift(),r=Sb(B,{templateUrl:null,transclude:null,replace:null,$$originalDirective:B}),A=E(B.templateUrl)?B.templateUrl(b,c):B.templateUrl,x=B.templateNamespace;b.empty();e(A).then(function(e){var u,t;e=ra(e);if(B.replace){e=Wb.test(e)?Zc(ba(x,V(e))):[];u=e[0];if(1!=e.length||1!==u.nodeType)throw ea("tplrt",
B.name,A);e={$attr:{}};ca(d,b,u);var H=$b(u,[],e);J(B.scope)&&$c(H,!0);a=H.concat(a);T(c,e)}else u=p,b.html(e);a.unshift(r);m=Ta(a,u,c,f,b,B,g,h,k);q(d,function(a,c){a==u&&(d[c]=b[0])});for(n=s(b[0].childNodes,f);l.length;){e=l.shift();t=l.shift();var z=l.shift(),D=l.shift(),H=b[0];if(!e.$$destroyed){if(t!==p){var w=t.className;k.hasElementTranscludeDirective&&B.replace||(H=Yb(u));ca(z,G(t),H);N(G(H),w)}t=m.transcludeOnThisElement?va(e,m.transclude,D):D;m(n,e,H,d,t)}}l=null});return function(a,b,
c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&(a=va(b,m.transclude,e)),m(n,b,c,d,a)))}}function X(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function W(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ea("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ua(d));}function $(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&aa.$$addBindingClass(a);
return function(a,c){var e=c.parent();b||aa.$$addBindingClass(e);aa.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ba(a,b){a=L(a||"html");switch(a){case "svg":case "math":var c=F.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function da(a,b){if("srcdoc"==b)return B.HTML;var c=ta(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return B.RESOURCE_URL}function ha(a,
c,d,e,f){var g=da(a,e);f=k[e]||f;var h=b(d,!0,g,f);if(h){if("multiple"===e&&"select"===ta(a))throw ea("selmulti",ua(a));c.push({priority:100,compile:function(){return{pre:function(a,c,k){c=k.$$observers||(k.$$observers=S());if(m.test(e))throw ea("nodomevents");var l=k[e];l!==d&&(h=l&&b(l,!0,g,f),d=l);h&&(k[e]=h(a),(c[e]||(c[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||a).$watch(h,function(a,b){"class"===e&&a!=b?k.$updateClass(a,b):k.$set(e,a)}))}}}})}}function ca(a,b,c){var d=b[0],
e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=F.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);G.hasData(d)&&(G.data(c,G.data(d)),G(d).off("$destroy"));G.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function fa(a,b){return P(function(){return a.apply(null,arguments)},
a,b)}function ia(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ua(d))}}function ga(a,c,d,e,f){function g(b,c,e){E(d.$onChanges)&&c!==e&&(Y||(a.$$postDigest(M),Y=[]),m||(m={},Y.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Gb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,p=e.optional,u,B,A,x;switch(e.mode){case "@":p||sa.call(c,m)||(d[h]=c[m]=void 0);c.$observe(m,function(a){if(I(a)||Ea(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;u=c[m];I(u)?d[h]=
b(u)(a):Ea(u)&&(d[h]=u);l[h]=new Gb(bc,d[h]);break;case "=":if(!sa.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;B=n(c[m]);x=B.literal?na:function(a,b){return a===b||a!==a&&b!==b};A=B.assign||function(){u=d[h]=B(a);throw ea("nonassign",c[m],m,f.name);};u=d[h]=B(a);p=function(b){x(b,d[h])||(x(b,u)?A(a,b=d[h]):d[h]=b);return u=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,B.literal);k.push(p);break;case "<":if(!sa.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;
B=n(c[m]);var H=d[h]=B(a);l[h]=new Gb(bc,d[h]);p=a.$watch(B,function(a,b){if(b===a){if(b===H)return;b=H}g(h,a,b);d[h]=a},B.literal);k.push(p);break;case "&":B=c.hasOwnProperty(m)?n(c[m]):C;if(B===C&&p)break;d[h]=function(b){return B(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var ma=/^\w/,la=F.document.createElement("div"),oa=x,Y;Aa.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&A.addClass(this.$$element,a)},$removeClass:function(a){a&&
0<a.length&&A.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=ad(a,b);c&&c.length&&A.addClass(this.$$element,c);(c=ad(b,a))&&c.length&&A.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Tc(this.$$element[0],a),g=bd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Bc(a,"-"));f=ta(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===f&&"src"===a)this[a]=b=H(b,"src"===a);else if("img"===
f&&"srcset"===a&&v(b)){for(var f="",g=V(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+H(V(g[m]),!0),f=f+(" "+V(g[m+1]));g=V(g[2*l]).split(/\s/);f+=H(V(g[0]),!0);2===g.length&&(f+=" "+V(g[1]));this[a]=b=f}!1!==d&&(null===b||y(b)?this.$$element.removeAttr(e):ma.test(e)?this.$$element.attr(e,b):R(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,
d=c.$$observers||(c.$$observers=S()),e=d[a]||(d[a]=[]);e.push(b);ka.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||y(c[a])||b(c[a])});return function(){$a(e,b)}}};var pa=b.startSymbol(),qa=b.endSymbol(),ra="{{"==pa&&"}}"==qa?Ya:function(a){return a.replace(/\{\{/g,pa).replace(/}}/g,qa)},xa=/^ngAttr[A-Z]/,za=/^(.+)Start$/;aa.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];K(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:C;aa.$$addBindingClass=p?function(a){N(a,"ng-binding")}:
C;aa.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:C;aa.$$addScopeClass=p?function(a,b){N(a,b?"ng-isolate-scope":"ng-scope")}:C;aa.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return F.document.createComment(c)};return aa}]}function Gb(a,b){this.previousValue=a;this.currentValue=b}function wa(a){return eb(a.replace(Xc,""))}function ad(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=
c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function Zc(a){a=G(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&ag.call(a,b,1);return a}function Wc(a,b){if(b&&I(b))return b;if(I(a)){var d=cd.exec(a);if(d)return d[3]}}function ff(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Ra(b,"controller");J(b)?P(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,
b,c,d){if(!a||!J(a.$scope))throw O("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,n;h=!0===h;k&&I(k)&&(n=k);if(I(f)){k=f.match(cd);if(!k)throw bg("ctrlfmt",f);m=k[1];n=n||k[3];f=a.hasOwnProperty(m)?a[m]:Dc(g.$scope,m,!0)||(b?Dc(c,m,!0):void 0);Qa(f,m,!0)}if(h)return h=(K(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),n&&e(g,n,l,m||f.name),P(function(){var a=d.invoke(f,l,g,m);a!==l&&(J(a)||E(a))&&(l=a,n&&e(g,n,l,m||f.name));return l},{instance:l,identifier:n});l=
d.instantiate(f,g,m);n&&e(g,n,l,m||f.name);return l}}]}function gf(){this.$get=["$window",function(a){return G(a.document)}]}function hf(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function cc(a){return J(a)?ha(a)?a.toISOString():cb(a):a}function nf(){this.$get=function(){return function(a){if(!a)return"";var b=[];sc(a,function(a,c){null===a||y(a)||(K(a)?q(a,function(a){b.push(ia(c)+"="+ia(cc(a)))}):b.push(ia(c)+"="+ia(cc(a))))});return b.join("&")}}}function of(){this.$get=
function(){return function(a){function b(a,e,f){null===a||y(a)||(K(a)?q(a,function(a,c){b(a,e+"["+(J(a)?c:"")+"]")}):J(a)&&!ha(a)?sc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ia(e)+"="+ia(cc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function dc(a,b){if(I(a)){var d=a.replace(cg,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(dd))||(c=(c=d.match(dg))&&eg[c[0]].test(d));c&&(a=wc(d))}}return a}function ed(a){var b=S(),d;I(a)?q(a.split("\n"),function(a){d=
a.indexOf(":");var e=L(V(a.substr(0,d)));a=V(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):J(a)&&q(a,function(a,d){var f=L(d),g=V(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function fd(a){var b;return function(d){b||(b=ed(a));return d?(d=b[L(d)],void 0===d&&(d=null),d):b}}function gd(a,b,d,c){if(E(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function mf(){var a=this.defaults={transformResponse:[dc],transformRequest:[function(a){return J(a)&&"[object File]"!==ja.call(a)&&"[object Blob]"!==
ja.call(a)&&"[object FormData]"!==ja.call(a)?cb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:fa(ec),put:fa(ec),patch:fa(ec)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return v(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return v(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",
function(e,f,g,h,k,l){function m(b){function c(a){var b=P({},a);b.data=gd(a.data,a.headers,a.status,f.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}function e(a,b){var c,d={};q(a,function(a,e){E(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}if(!J(b))throw O("$http")("badreq",b);if(!I(b.url))throw O("$http")("badreq",b.url);var f=P({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);f.headers=function(b){var c=
a.headers,d=P({},b.headers),f,g,h,c=P({},c.common,c[L(b.method)]);a:for(f in c){g=L(f);for(h in d)if(L(h)===g)continue a;d[f]=c[f]}return e(d,fa(b))}(b);f.method=ub(f.method);f.paramSerializer=I(f.paramSerializer)?l.get(f.paramSerializer):f.paramSerializer;var g=[function(b){var d=b.headers,e=gd(b.data,fd(d),void 0,b.transformRequest);y(e)&&q(d,function(a,b){"content-type"===L(b)&&delete d[b]});y(b.withCredentials)&&!y(a.withCredentials)&&(b.withCredentials=a.withCredentials);return n(b,e).then(c,
c)},void 0],h=k.when(f);for(q(U,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){b=g.shift();var m=g.shift(),h=h.then(b,m)}d?(h.success=function(a){Qa(a,"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Qa(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=hd("success"),h.error=hd("error"));return h}function n(c,d){function g(a){if(a){var c=
{};q(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){n(c,a,d,e)}H&&(200<=a&&300>a?H.put(R,[a,c,ed(d),e]):H.remove(R));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function n(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?B.resolve:B.reject)({data:a,status:b,headers:fd(d),config:c,statusText:e})}function w(a){n(a.data,a.status,fa(a.headers()),a.statusText)}function U(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,
1)}var B=k.defer(),A=B.promise,H,M,Aa=c.headers,R=p(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);A.then(U,U);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(H=J(c.cache)?c.cache:J(a.cache)?a.cache:x);H&&(M=H.get(R),v(M)?M&&E(M.then)?M.then(w,w):K(M)?n(M[1],M[0],fa(M[2]),M[3]):n(M,200,{},"OK"):H.put(R,A));y(M)&&((M=id(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(Aa[c.xsrfHeaderName||a.xsrfHeaderName]=M),e(c.method,R,d,l,Aa,c.timeout,c.withCredentials,
c.responseType,g(c.eventHandlers),g(c.uploadEventHandlers)));return A}function p(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var x=g("$http");a.paramSerializer=I(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var U=[];q(c,function(a){U.unshift(I(a)?l.get(a):l.invoke(a))});m.pendingRequests=[];(function(a){q(arguments,function(a){m[a]=function(b,c){return m(P({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){m[a]=function(b,
c,d){return m(P({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function qf(){this.$get=function(){return function(){return new F.XMLHttpRequest}}}function pf(){this.$get=["$browser","$window","$document","$xhrFactory",function(a,b,d,c){return fg(a,c,a.defer,b.angular.callbacks,d[0])}]}function fg(a,b,d,c,e){function f(a,b,d){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",
m,!1);e.body.removeChild(f);f=null;var g=-1,x="unknown";a&&("load"!==a.type||c[b].called||(a={type:"error"}),x=a.type,g="error"===a.type?404:200);d&&d(g,x)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,n,p,x,U,z){function r(){t&&t();w&&w.abort()}function D(b,c,e,f,g){v(B)&&d.cancel(B);t=w=null;b(c,e,f,g);a.$$completeOutstandingRequest(C)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"==L(e)){var u="_"+(c.counter++).toString(36);
c[u]=function(a){c[u].data=a;c[u].called=!0};var t=f(h.replace("JSON_CALLBACK","angular.callbacks."+u),u,function(a,b){D(l,a,c[u].data,"",b);c[u]=C})}else{var w=b(e,h);w.open(e,h,!0);q(m,function(a,b){v(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==pa(h).protocol?404:0);D(l,c,b,w.getAllResponseHeaders(),a)};e=function(){D(l,-1,null,null,"")};w.onerror=e;w.onabort=e;q(U,function(a,
b){w.addEventListener(b,a)});q(z,function(a,b){w.upload.addEventListener(b,a)});p&&(w.withCredentials=!0);if(x)try{w.responseType=x}catch(ka){if("json"!==x)throw ka;}w.send(y(k)?null:k)}if(0<n)var B=d(r,n);else n&&E(n.then)&&n.then(r)}}function kf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,
b)}function h(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function k(f,k,n,p){function D(a){try{var b=a;a=n?e.getTrusted(n,b):e.valueOf(b);var d;if(p&&!v(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=cb(a)}d=a}return d}catch(g){c(Ka.interr(f,g))}}if(!f.length||-1===f.indexOf(a)){var u;k||(k=g(f),u=ca(k),u.exp=f,u.expressions=[],u.$$watchDelegate=h);return u}p=!!p;var t,w,q=0,B=[],A=[];u=f.length;for(var H=[],M=[];q<
u;)if(-1!=(t=f.indexOf(a,q))&&-1!=(w=f.indexOf(b,t+l)))q!==t&&H.push(g(f.substring(q,t))),q=f.substring(t+l,w),B.push(q),A.push(d(q,D)),q=w+m,M.push(H.length),H.push("");else{q!==u&&H.push(g(f.substring(q)));break}n&&1<H.length&&Ka.throwNoconcat(f);if(!k||B.length){var Aa=function(a){for(var b=0,c=B.length;b<c;b++){if(p&&y(a[b]))return;H[M[b]]=a[b]}return H.join("")};return P(function(a){var b=0,d=B.length,e=Array(d);try{for(;b<d;b++)e[b]=A[b](a);return Aa(e)}catch(g){c(Ka.interr(f,g))}},{exp:f,expressions:B,
$$watchDelegate:function(a,b){var c;return a.$watchGroup(A,function(d,e){var f=Aa(d);E(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,f),"g"),p=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function lf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,k,l,m){function n(){p?f.apply(null,x):f(r)}var p=4<arguments.length,x=p?ya.call(arguments,4):
[],q=b.setInterval,z=b.clearInterval,r=0,D=v(m)&&!m,u=(D?c:d).defer(),t=u.promise;l=v(l)?l:0;t.$$intervalId=q(function(){D?e.defer(n):a.$evalAsync(n);u.notify(r++);0<l&&r>=l&&(u.resolve(r),z(t.$$intervalId),delete g[t.$$intervalId]);D||a.$apply()},k);g[t.$$intervalId]=u;return t}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function fc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=
qb(a[b]);return a.join("/")}function jd(a,b){var d=pa(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=$(d.port)||gg[d.protocol]||null}function kd(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=pa(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=zc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function la(a,b){if(0===b.lastIndexOf(a,0))return b.substr(a.length)}function Ja(a){var b=
a.indexOf("#");return-1==b?a:a.substr(0,b)}function jb(a){return a.replace(/(#.+)|#$/,"$1")}function gc(a,b,d){this.$$html5=!0;d=d||"";jd(a,this);this.$$parse=function(a){var d=la(b,a);if(!I(d))throw Hb("ipthprfx",a,b);kd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Ub(this.$$search),d=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;v(f=la(a,c))?(g=f,g=v(f=la(d,f))?b+(la("/",f)||f):a+g):v(f=la(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function hc(a,b,d){jd(a,this);this.$$parse=function(c){var e=la(a,c)||la(b,c),f;y(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",y(e)&&(a=c,this.replace())):(f=la(d,e),y(f)&&(f=e));kd(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.lastIndexOf(e,0)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=
Ub(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ja(a)==Ja(b)?(this.$$parse(b),!0):!1}}function ld(a,b,d){this.$$html5=!0;hc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Ja(c)?f=c:(g=la(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Ub(this.$$search),
e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Ib(a){return function(){return this[a]}}function md(a,b){return function(d){if(y(d))return this[a];this[a]=b(d);this.$$compose();return this}}function rf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return v(b)?(a=b,this):a};this.html5Mode=function(a){return Ea(a)?(b.enabled=a,this):J(a)?(Ea(a.enabled)&&(b.enabled=a.enabled),Ea(a.requireBase)&&
(b.requireBase=a.requireBase),Ea(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw Hb("nobase");p=n.substring(0,n.indexOf("/",
n.indexOf("//")+2))+(m||"/");m=e.history?gc:ld}else p=Ja(n),m=hc;var x=p.substr(0,Ja(p).lastIndexOf("/")+1);l=new m(p,x,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var q=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=G(a.target);"a"!==ta(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");J(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=
pa(h.animVal).href);q.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});jb(l.absUrl())!=jb(n)&&c.url(l.absUrl(),!0);var z=!0;c.onUrlChange(function(a,b){y(la(x,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=jb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=
e,h(c,!1,e)):(z=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=jb(c.url()),b=jb(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(z||m)z=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)))});l.$$replace=!1});return l}]}function sf(){var a=!0,b=this;this.debugEnabled=function(b){return v(b)?
(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||C;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];q(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),
debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Ua(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===a||"__proto__"===a)throw ba("isecfld",b);return a}function hg(a){return a+""}function qa(a,b){if(a){if(a.constructor===a)throw ba("isecfn",b);if(a.window===a)throw ba("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw ba("isecdom",b);if(a===Object)throw ba("isecobj",b);}return a}function nd(a,
b){if(a){if(a.constructor===a)throw ba("isecfn",b);if(a===ig||a===jg||a===kg)throw ba("isecff",b);}}function Jb(a,b){if(a&&(a===(0).constructor||a===(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw ba("isecaf",b);}function lg(a,b){return"undefined"!==typeof a?a:b}function od(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function Z(a,b){var d,c;switch(a.type){case s.Program:d=!0;q(a.body,function(a){Z(a.expression,b);d=
d&&a.expression.constant});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:Z(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:Z(a.left,b);Z(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:Z(a.left,b);Z(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:Z(a.test,
b);Z(a.alternate,b);Z(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=!1;a.toWatch=[a];break;case s.MemberExpression:Z(a.object,b);a.computed&&Z(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=a.filter?!b(a.callee.name).$stateful:!1;c=[];q(a.arguments,function(a){Z(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});
a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case s.AssignmentExpression:Z(a.left,b);Z(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];q(a.elements,function(a){Z(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];q(a.properties,function(a){Z(a.value,b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch)});
a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1;a.toWatch=[];break;case s.LocalsExpression:a.constant=!1,a.toWatch=[]}}function pd(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function qd(a){return a.type===s.Identifier||a.type===s.MemberExpression}function rd(a){if(1===a.body.length&&qd(a.body[0].expression))return{type:s.AssignmentExpression,left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function sd(a){return 0===
a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression)}function td(a,b){this.astBuilder=a;this.$filter=b}function ud(a,b){this.astBuilder=a;this.$filter=b}function Kb(a){return"constructor"==a}function ic(a){return E(a.valueOf)?a.valueOf():mg.call(a)}function tf(){var a=S(),b=S(),d={"true":!0,"false":!1,"null":null,undefined:void 0},c,e;this.addLiteral=function(a,b){d[a]=b};this.setIdentifierFns=
function(a,b){c=a;e=b;return this};this.$get=["$filter",function(f){function g(c,d,e){var g,k,A;e=e||D;switch(typeof c){case "string":A=c=c.trim();var H=e?b:a;g=H[A];if(!g){":"===c.charAt(0)&&":"===c.charAt(1)&&(k=!0,c=c.substring(2));g=e?r:z;var q=new jc(g);g=(new kc(q,f,g)).parse(c);g.constant?g.$$watchDelegate=p:k?g.$$watchDelegate=g.literal?n:m:g.inputs&&(g.$$watchDelegate=l);e&&(g=h(g));H[A]=g}return x(g,d);case "function":return x(c,d);default:return x(C,d)}}function h(a){function b(c,d,e,f){var g=
D;D=!0;try{return a(c,d,e,f)}finally{D=g}}if(!a)return a;b.$$watchDelegate=a.$$watchDelegate;b.assign=h(a.assign);b.constant=a.constant;b.literal=a.literal;for(var c=0;a.inputs&&c<a.inputs.length;++c)a.inputs[c]=h(a.inputs[c]);b.inputs=a.inputs;return b}function k(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ic(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function l(a,b,c,d,e){var f=d.inputs,g;if(1===f.length){var h=k,f=f[0];return a.$watch(function(a){var b=f(a);k(b,h)||(g=d(a,void 0,
void 0,[b]),h=b&&ic(b));return g},b,c,e)}for(var l=[],m=[],n=0,p=f.length;n<p;n++)l[n]=k,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var h=f[c](a);if(b||(b=!k(h,l[c])))m[c]=h,l[c]=h&&ic(h)}b&&(g=d(a,void 0,void 0,m));return g},b,c,e)}function m(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;E(b)&&b.apply(this,arguments);v(a)&&d.$$postDigest(function(){v(f)&&e()})},c)}function n(a,b,c,d){function e(a){var b=!0;q(a,function(a){v(a)||(b=
!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;E(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function p(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function x(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==n&&c!==m?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return v(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==l?c.$$watchDelegate=a.$$watchDelegate:
b.$stateful||(c.$$watchDelegate=l,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var U=Fa().noUnsafeEval,z={csp:U,expensiveChecks:!1,literals:oa(d),isIdentifierStart:E(c)&&c,isIdentifierContinue:E(e)&&e},r={csp:U,expensiveChecks:!0,literals:oa(d),isIdentifierStart:E(c)&&c,isIdentifierContinue:E(e)&&e},D=!1;g.$$runningExpensiveChecks=function(){return D};return g}]}function vf(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return vd(function(b){a.$evalAsync(b)},b)}]}function wf(){this.$get=
["$browser","$exceptionHandler",function(a,b){return vd(function(b){a.defer(b)},b)}]}function vd(a,b){function d(){this.$$state={status:0}}function c(a,b){return function(c){b.call(a,c)}}function e(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=void 0;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];try{E(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}
function f(){this.promise=new d}var g=O("$q",TypeError);P(d.prototype,{then:function(a,b,c){if(y(a)&&y(b)&&y(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&e(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}});P(f.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?
this.$$reject(g("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){function d(a){k||(k=!0,h.$$resolve(a))}function f(a){k||(k=!0,h.$$reject(a))}var g,h=this,k=!1;try{if(J(a)||E(a))g=a&&a.then;E(g)?(this.promise.$$state.status=-1,g.call(a,d,f,c(this,this.notify))):(this.promise.$$state.value=a,this.promise.$$state.status=1,e(this.promise.$$state))}catch(l){f(l),b(l)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=
2;e(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(E(a)?a(c):c)}catch(h){b(h)}}})}});var h=function(a,b){var c=new f;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{E(c)&&(d=c())}catch(e){return h(e,!1)}return d&&E(d.then)?d.then(function(){return h(a,b)},function(a){return h(a,!1)}):h(a,b)},l=function(a,b,c,d){var e=
new f;e.resolve(a);return e.promise.then(b,c,d)},m=function(a){if(!E(a))throw g("norslvr",a);var b=new f;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};m.prototype=d.prototype;m.defer=function(){var a=new f;a.resolve=c(a,a.resolve);a.reject=c(a,a.reject);a.notify=c(a,a.notify);return a};m.reject=function(a){var b=new f;b.reject(a);return b.promise};m.when=l;m.resolve=l;m.all=function(a){var b=new f,c=0,d=K(a)?[]:{};q(a,function(a,e){c++;l(a).then(function(a){d.hasOwnProperty(e)||
(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return m}function Ff(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function uf(){function a(a){function b(){this.$$watchers=
this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=O("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Ba&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=
a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(D.$$phase)throw d("inprog",D.$$phase);D.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function x(a,b,c){do a.$$listenerCount[c]-=
b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function s(){}function z(){for(;w.length;)try{w.shift()()}catch(a){f(a)}e=null}function r(){null===e&&(e=h.defer(function(){D.$apply(z)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=
d;(b||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:s,get:f,exp:e||a,eq:!!d};c=null;E(b)||(l.fn=C);k||(k=h.$$watchers=[]);k.unshift(l);p(this,1);return function(){0<=$a(k,l)&&p(h,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&
b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!y(e)){if(J(e))if(xa(e))for(f!==n&&(f=n,u=f.length=0,l++),a=e.length,u!==a&&(l++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==
p&&(f=p={},u=0,l++);a=0;for(b in e)sa.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(u++,f[b]=g,l++));if(u>a)for(b in l++,f)sa.call(e,b)||(u--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],p={},r=!0,u=0;return this.$watch(m,function(){r?(r=!1,b(e,e,d)):b(e,h,d);if(k)if(J(e))if(xa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)sa.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,
g,k,l,m,p,r,x,q=b,w,y=[],C,F;n("$digest");h.$$checkUrlChange();this===D&&null!==e&&(h.defer.cancel(e),z());c=null;do{x=!1;w=this;for(p=0;p<u.length;p++){try{F=u[p],F.scope.$eval(F.expression,F.locals)}catch(G){f(G)}c=null}u.length=0;a:do{if(p=w.$$watchers)for(r=p.length;r--;)try{if(a=p[r])if(m=a.get,(g=m(w))!==(k=a.last)&&!(a.eq?na(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))x=!0,c=a,a.last=a.eq?oa(g,null):g,l=a.fn,l(g,k===s?g:k,w),5>q&&(C=4-q,y[C]||(y[C]=[]),y[C].push({msg:E(a.exp)?
"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){x=!1;break a}}catch(I){f(I)}if(!(p=w.$$watchersCount&&w.$$childHead||w!==this&&w.$$nextSibling))for(;w!==this&&!(p=w.$$nextSibling);)w=w.$parent}while(w=p);if((x||u.length)&&!q--)throw D.$$phase=null,d("infdig",b,y);}while(x||u.length);for(D.$$phase=null;v<t.length;)try{t[v++]()}catch(J){f(J)}t.length=v=0},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===
D&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);for(var b in this.$$listenerCount)x(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=C;this.$on=this.$watch=this.$watchGroup=
function(){return C};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){D.$$phase||u.length||h.defer(function(){u.length&&D.$digest()});u.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){t.push(a)},$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{D.$$phase=null}}catch(b){f(b)}finally{try{D.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&w.push(b);
a=g(a);r()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,x(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=ab([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=
e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=ab([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,
1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var D=new m,u=D.$$asyncQueue=[],t=D.$$postDigestQueue=[],w=D.$$applyAsyncQueue=[],v=0;return D}]}function ne(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return v(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return v(a)?(b=a,this):b};
this.$get=function(){return function(d,c){var e=c?b:a,f;f=pa(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function ng(a){if("self"===a)return a;if(I(a)){if(-1<a.indexOf("***"))throw ra("iwcard",a);a=wd(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Xa(a))return new RegExp("^"+a.source+"$");throw ra("imatcher");}function xd(a){var b=[];v(a)&&q(a,function(a){b.push(ng(a))});return b}function yf(){this.SCE_CONTEXTS=ma;var a=["self"],b=[];this.resourceUrlWhitelist=
function(b){arguments.length&&(a=xd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=xd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?id(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw ra("unsafe");
};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[ma.HTML]=e(g);h[ma.CSS]=e(g);h[ma.URL]=e(g);h[ma.JS]=e(g);h[ma.RESOURCE_URL]=e(h[ma.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ra("icontext",a,b);if(null===b||y(b)||""===b)return b;if("string"!==typeof b)throw ra("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||y(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===ma.RESOURCE_URL){var g=
pa(e.toString()),n,p,x=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){x=!0;break}if(x)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){x=!1;break}if(x)return e;throw ra("insecurl",e.toString());}if(d===ma.HTML)return f(e);throw ra("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function xf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ba)throw ra("iequirks");var c=fa(ma);c.isEnabled=function(){return a};
c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;q(ma,function(a,b){var d=L(b);c[eb("parse_as_"+d)]=function(b){return e(a,b)};c[eb("get_trusted_"+d)]=function(b){return f(a,b)};c[eb("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function zf(){this.$get=["$window",
"$document",function(a,b){var d={},c=!(a.chrome&&a.chrome.app&&a.chrome.app.runtime)&&a.history&&a.history.pushState,e=$((/android (\d+)/.exec(L((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h,k=/^(Moz|webkit|ms)(?=[A-Z])/,l=g.body&&g.body.style,m=!1,n=!1;if(l){for(var p in l)if(m=k.exec(p)){h=m[0];h=h[0].toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");m=!!("transition"in l||h+"Transition"in l);n=!!("animation"in l||h+"Animation"in
l);!e||m&&n||(m=I(l.webkitTransition),n=I(l.webkitAnimation))}return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&11>=Ba)return!1;if(y(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Fa(),vendorPrefix:h,transitions:m,animations:n,android:e}}]}function Bf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$templateCache","$http","$q","$sce",function(b,d,c,e){function f(g,h){f.totalPendingRequests++;if(!I(g)||y(b.get(g)))g=e.getTrustedResourceUrl(g);
var k=d.defaults&&d.defaults.transformResponse;K(k)?k=k.filter(function(a){return a!==dc}):k===dc&&(k=null);return d.get(g,P({cache:b,transformResponse:k},a))["finally"](function(){f.totalPendingRequests--}).then(function(a){b.put(g,a.data);return a.data},function(a){if(!h)throw og("tpload",g,a.status,a.statusText);return c.reject(a)})}f.totalPendingRequests=0;return f}]}function Cf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");
var g=[];q(a,function(a){var c=da.element(a).data("$binding");c&&q(c,function(c){d?(new RegExp("(^|\\s)"+wd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}
function Df(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){E(f)||(l=k,k=f,f=C);var m=ya.call(arguments,3),n=v(l)&&!l,p=(n?c:d).defer(),x=p.promise,q;q=b.defer(function(){try{p.resolve(f.apply(null,m))}catch(b){p.reject(b),e(b)}finally{delete g[x.$$timeoutId]}n||a.$apply()},k);x.$$timeoutId=q;g[q]=p;return x}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):
!1};return f}]}function pa(a){Ba&&(X.setAttribute("href",a),a=X.href);X.setAttribute("href",a);return{href:X.href,protocol:X.protocol?X.protocol.replace(/:$/,""):"",host:X.host,search:X.search?X.search.replace(/^\?/,""):"",hash:X.hash?X.hash.replace(/^#/,""):"",hostname:X.hostname,port:X.port,pathname:"/"===X.pathname.charAt(0)?X.pathname:"/"+X.pathname}}function id(a){a=I(a)?pa(a):a;return a.protocol===yd.protocol&&a.host===yd.host}function Ef(){this.$get=ca(F)}function zd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}
var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),y(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function If(){this.$get=zd}function Lc(a){function b(d,c){if(J(d)){var e={};q(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Ad);b("date",Bd);
b("filter",pg);b("json",qg);b("limitTo",rg);b("lowercase",sg);b("number",Cd);b("orderBy",Dd);b("uppercase",tg)}function pg(){return function(a,b,d){if(!xa(a)){if(null==a)return a;throw O("filter")("notarray",a);}var c;switch(lc(b)){case "function":break;case "boolean":case "null":case "number":case "string":c=!0;case "object":b=ug(b,d,c);break;default:return a}return Array.prototype.filter.call(a,b)}}function ug(a,b,d){var c=J(a)&&"$"in a;!0===b?b=na:E(b)||(b=function(a,b){if(y(a))return!1;if(null===
a||null===b)return a===b;if(J(b)||J(a)&&!uc(a))return!1;a=L(""+a);b=L(""+b);return-1!==a.indexOf(b)});return function(e){return c&&!J(e)?La(e,a.$,b,!1):La(e,a,b,d)}}function La(a,b,d,c,e){var f=lc(a),g=lc(b);if("string"===g&&"!"===b.charAt(0))return!La(a,b.substring(1),d,c);if(K(a))return a.some(function(a){return La(a,b,d,c)});switch(f){case "object":var h;if(c){for(h in a)if("$"!==h.charAt(0)&&La(a[h],b,d,!0))return!0;return e?!1:La(a,b,d,!1)}if("object"===g){for(h in b)if(e=b[h],!E(e)&&!y(e)&&
(f="$"===h,!La(f?a:a[h],e,d,f,f)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function lc(a){return null===a?"null":typeof a}function Ad(a){var b=a.NUMBER_FORMATS;return function(a,c,e){y(c)&&(c=b.CURRENCY_SYM);y(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Ed(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Cd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Ed(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function vg(a){var b=
0,d,c,e,f,g;-1<(c=a.indexOf(Fd))&&(a=a.replace(Fd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)==mc;e++);if(e==(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)==mc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Gd&&(d=d.splice(0,Gd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function wg(a,b,d,c){var e=a.d,f=e.length-a.i;b=y(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=
0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Ed(a,b,d,c,e){if(!I(a)&&!Q(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=vg(h);wg(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,
b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Lb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=mc+a;d&&(a=a.substr(a.length-b));return e+
a}function W(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12==d&&(f=12);return Lb(f,b,c,e)}}function kb(a,b,d){return function(c,e){var f=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Hd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Id(a){return function(b){var d=Hd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Lb(b,a)}}function nc(a,
b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Bd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=$(b[9]+b[10]),g=$(b[9]+b[11]));h.call(a,$(b[1]),$(b[2])-1,$(b[3]));f=$(b[4]||0)-f;g=$(b[5]||0)-g;h=$(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,
d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;I(c)&&(c=xg.test(c)?$(c):b(c));Q(c)&&(c=new Date(c));if(!ha(c)||!isFinite(c.getTime()))return c;for(;d;)(l=yg.exec(d))?(h=ab(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=xc(f,m),c=Tb(c,f,!0));q(h,function(b){k=zg[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function qg(){return function(a,b){y(b)&&(b=2);return cb(a,b)}}function rg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):$(b);if(isNaN(b))return a;Q(a)&&(a=a.toString());if(!K(a)&&!I(a))return a;d=!d||isNaN(d)?0:$(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?a.slice(d,d+b):0===d?a.slice(b,a.length):a.slice(Math.max(0,d+b),d)}}function Dd(a){function b(b,d){d=d?-1:1;return b.map(function(b){var c=1,h=Ya;if(E(b))h=b;else if(I(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(h=a(b),h.constant))var k=h(),h=function(a){return a[k]}}return{get:h,
descending:c*d}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}return function(a,e,f){if(null==a)return a;if(!xa(a))throw O("orderBy")("notarray",a);K(e)||(e=[e]);0===e.length&&(e=["+"]);var g=b(e,f);g.push({get:function(){return{}},descending:f?-1:1});a=Array.prototype.map.call(a,function(a,b){return{value:a,predicateValues:g.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("string"===c)e=e.toLowerCase();else if("object"===
c)a:{if("function"===typeof e.valueOf&&(e=e.valueOf(),d(e)))break a;if(uc(e)&&(e=e.toString(),d(e)))break a;e=b}return{value:e,type:c}})}});a.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],x=0;c.type===f.type?c.value!==f.value&&(x=c.value<f.value?-1:1):x=c.type<f.type?-1:1;if(c=x*g[d].descending)break}return c});return a=a.map(function(a){return a.value})}}function Ma(a){E(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ca(a)}function Jd(a,
b,d,c,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=void 0;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Mb;f.$rollbackViewValue=function(){q(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){q(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ra(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];
f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(f.$pending,function(b,c){f.$setValidity(c,null,a)});q(f.$error,function(b,c){f.$setValidity(c,null,a)});q(f.$$success,function(b,c){f.$setValidity(c,null,a)});$a(g,a);a.$$parentForm=Mb};Kd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&($a(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Va);
c.addClass(a,Nb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){c.setClass(a,Va,Nb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;q(g,function(a){a.$setPristine()})};f.$setUntouched=function(){q(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function oc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function lb(a,b,d,c,e,f){var g=L(b[0].type);
if(!e.android){var h=!1;b.on("compositionstart",function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=V(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<
b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",m)}b.on("change",l);if(Ld[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Ob(a,b){return function(d,c){var e,f;if(ha(d))return d;if(I(d)){'"'==d.charAt(0)&&
'"'==d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Ag.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function mb(a,b,d,c){return function(e,f,g,h,k,l,m){function n(a){return a&&
!(a.getTime&&a.getTime()!==a.getTime())}function p(a){return v(a)&&!ha(a)?d(a)||void 0:a}Md(e,f,g,h);lb(e,f,g,h,k,l);var q=h&&h.$options&&h.$options.timezone,s;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,s),q&&(a=Tb(a,q)),a});h.$formatters.push(function(a){if(a&&!ha(a))throw nb("datefmt",a);if(n(a))return(s=a)&&q&&(s=Tb(s,q,!0)),m("date")(a,c,q);s=null;return""});if(v(g.min)||g.ngMin){var z;h.$validators.min=function(a){return!n(a)||y(z)||d(a)>=
z};g.$observe("min",function(a){z=p(a);h.$validate()})}if(v(g.max)||g.ngMax){var r;h.$validators.max=function(a){return!n(a)||y(r)||d(a)<=r};g.$observe("max",function(a){r=p(a);h.$validate()})}}}function Md(a,b,d,c){(c.$$hasNativeValidators=J(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Nd(a,b,d,c,e){if(v(c)){a=a(c);if(!a.constant)throw nb("constexpr",d,c);return a(b)}return e}function pc(a,b){a="ngClass"+a;return["$animate",
function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return K(a)?(q(a,function(a){b=b.concat(e(a))}),b):I(a)?a.split(" "):J(a)?(q(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function k(a){a=l(a,1);h.$addClass(a)}function l(a,b){var c=g.data("$classCounts")||S(),d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",
c);return d.join(" ")}function m(a,b){var e=c(b,a),f=c(a,b),e=l(e,1),f=l(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&d.removeClass(g,f)}function n(a){if(!0===b||(f.$index&1)===b){var c=e(a||[]);if(!p)k(c);else if(!na(a,p)){var d=e(p);m(d,c)}}p=K(a)?a.map(function(a){return fa(a)}):fa(a)}var p;f.$watch(h[a],n,!0);h.$observe("class",function(b){n(f.$eval(h[a]))});"ngClass"!==a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var m=e(f.$eval(h[a]));g===b?k(m):(g=l(m,-1),h.$removeClass(g))}})}}}]}
function Kd(a){function b(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+Bc(a,"-"):"";b(ob+a,!0===c);b(Od+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Od]=!(f[ob]=e.hasClass(ob));c.$setValidity=function(a,e,f){y(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&h(c.$pending,a,f),Pd(c.$pending)&&(c.$pending=void 0));Ea(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,
a,f),h(c.$$success,a,f));c.$pending?(b(Qd,!0),c.$valid=c.$invalid=void 0,d("",null)):(b(Qd,!1),c.$valid=Pd(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?void 0:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function Pd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var Bg=/^\/(.+)\/([a-z]*)$/,sa=Object.prototype.hasOwnProperty,L=function(a){return I(a)?a.toLowerCase():a},ub=function(a){return I(a)?a.toUpperCase():a},Ba,
G,Y,ya=[].slice,ag=[].splice,Cg=[].push,ja=Object.prototype.toString,vc=Object.getPrototypeOf,za=O("ng"),da=F.angular||(F.angular={}),Vb,pb=0;Ba=F.document.documentMode;C.$inject=[];Ya.$inject=[];var K=Array.isArray,ae=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,V=function(a){return I(a)?a.trim():a},wd=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Fa=function(){if(!v(Fa.rules)){var a=F.document.querySelector("[ng-csp]")||
F.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Fa.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Fa;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Fa.rules},rb=function(){if(v(rb.name_))return rb.name_;var a,b,d=Oa.length,c,e;for(b=0;b<d;++b)if(c=Oa[b],a=F.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+
"jq");break}return rb.name_=e},de=/:/g,Oa=["ng-","data-ng-","ng:","x-ng-"],ie=/[A-Z]/g,Cc=!1,Na=3,me={full:"1.5.6",major:1,minor:5,dot:6,codeName:"arrow-stringification"};T.expando="ng339";var gb=T.cache={},Of=1;T._data=function(a){return this.cache[a[this.expando]]||{}};var Jf=/([\:\-\_]+(.))/g,Kf=/^moz([A-Z])/,yb={mouseleave:"mouseout",mouseenter:"mouseover"},Xb=O("jqLite"),Nf=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Wb=/<|&#?\w+;/,Lf=/<([\w:-]+)/,Mf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
ga={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ga.optgroup=ga.option;ga.tbody=ga.tfoot=ga.colgroup=ga.caption=ga.thead;ga.th=ga.td;var Tf=F.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Pa=T.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===
F.document.readyState?F.setTimeout(b):(this.on("DOMContentLoaded",b),T(F).on("load",b))},toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?G(this[a]):G(this[this.length+a])},length:0,push:Cg,sort:[].sort,splice:[].splice},Eb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Eb[L(a)]=a});var Uc={};q("input select option textarea button form details".split(" "),function(a){Uc[a]=!0});var bd={ngMinlength:"minlength",
ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};q({data:Zb,removeData:fb,hasData:function(a){for(var b in gb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)fb(a[b])}},function(a,b){T[b]=a});q({data:Zb,inheritedData:Cb,scope:function(a){return G.data(a,"$scope")||Cb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return G.data(a,"$isolateScope")||G.data(a,"$isolateScopeNoTemplate")},controller:Rc,injector:function(a){return Cb(a,
"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:zb,css:function(a,b,d){b=eb(b);if(v(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Na&&2!==c&&8!==c)if(c=L(b),Eb[c])if(v(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||C).specified?c:void 0;else if(v(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?void 0:a},prop:function(a,b,d){if(v(d))a[b]=
d;else return a[b]},text:function(){function a(a,d){if(y(d)){var c=a.nodeType;return 1===c||c===Na?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(y(b)){if(a.multiple&&"select"===ta(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(y(b))return a.innerHTML;wb(a,!0);a.innerHTML=b},empty:Sc},function(a,b){T.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Sc&&y(2==a.length&&
a!==zb&&a!==Rc?b:c)){if(J(b)){for(e=0;e<g;e++)if(a===Zb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=y(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});q({removeData:fb,on:function(a,b,d,c){if(v(c))throw Xb("onargs");if(Mc(a)){c=xb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=Qf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=
c,"$destroy"===b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],yb[b]?(h(yb[b],Sf),h(b,void 0,!0)):h(b)}},off:Qc,one:function(a,b,d){a=G(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;wb(a);q(new T(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,
b){var d=a.nodeType;if(1===d||11===d){b=new T(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new T(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){Oc(a,G(b).eq(0).clone()[0])},remove:Db,detach:function(a){Db(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new T(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:Bb,removeClass:Ab,toggleClass:function(a,b,d){b&&q(b.split(" "),
function(b){var e=d;y(e)&&(e=!zb(a,b));(e?Bb:Ab)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Yb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=xb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:C,type:f,target:a},b.type&&(c=P(c,b)),b=fa(g),e=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){T.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)y(f)?(f=a(this[g],b,c,e),v(f)&&(f=G(f))):Pc(f,a(this[g],b,c,e));return v(f)?f:this};T.prototype.bind=T.prototype.on;T.prototype.unbind=T.prototype.off});Sa.prototype={put:function(a,
b){this[Ga(a,this.nextUid)]=b},get:function(a){return this[Ga(a,this.nextUid)]},remove:function(a){var b=this[a=Ga(a,this.nextUid)];delete this[a];return b}};var Hf=[function(){this.$get=[function(){return Sa}]}],Vf=/^([^\(]+?)=>/,Wf=/^[^\(]*\(\s*([^\)]*)\)/m,Dg=/,/,Eg=/^\s*(_?)(\S+?)\1\s*$/,Uf=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=O("$injector");db.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw I(d)&&d||(d=a.name||Xf(a)),Ha("strictdi",d);
b=Vc(a);q(b[1].split(Dg),function(a){a.replace(Eg,function(a,b,d){c.push(d)})})}a.$inject=c}}else K(a)?(b=a.length-1,Qa(a[b],"fn"),c=a.slice(0,b)):Qa(a,"fn",!0);return c};var Rd=O("$animate"),$e=function(){this.$get=C},af=function(){var a=new Sa,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=I(b)?b.split(" "):K(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){q(b,function(b){var c=a.get(b);if(c){var d=Yf(b.attr("class")),e="",f="";q(c,
function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&Bb(a,e);f&&Ab(a,f)});a.remove(b)}});b.length=0}return{enabled:C,on:C,off:C,pin:C,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},Ye=["$provide",function(a){var b=this;this.$$registeredAnimations=
Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Rd("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Rd("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=
d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=f&&G(f);g=g&&G(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ia(h))},move:function(e,f,g,h){f=f&&G(f);g=g&&G(g);f=f||g.parent();b(e,f,g);return a.push(e,"move",Ia(h))},leave:function(b,c){return a.push(b,"leave",Ia(c),function(){b.remove()})},addClass:function(b,
c,g){g=Ia(g);g.addClass=hb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ia(g);g.removeClass=hb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ia(h);h.addClass=hb(h.addClass,c);h.removeClass=hb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ia(k);k.from=k.from?P(k.from,c):c;k.to=k.to?P(k.to,g):g;k.tempClasses=hb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],cf=function(){this.$get=
["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},bf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){var d=c[0];d&&d.hidden?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);
else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:C,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},
"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=
0,this._state=2)}};return f}]},Ze=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=e||{};g.$$prepared||(g=oa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},ea=O("$compile"),bc=new function(){};
Ec.$inject=["$provide","$$sanitizeUriProvider"];Gb.prototype.isFirstChange=function(){return this.previousValue===bc};var Xc=/^((?:x|data)[\:\-_])/i,bg=O("$controller"),cd=/^(\S+)(\s+as\s+([\w$]+))?$/,jf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof G&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},dd="application/json",ec={"Content-Type":dd+";charset=utf-8"},dg=/^\[|^\{(?!\{)/,eg={"[":/]$/,"{":/}$/},cg=/^\)\]\}',?\n/,Fg=O("$http"),hd=function(a){return function(){throw Fg("legacy",
a);}},Ka=da.$interpolateMinErr=O("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,b){return Ka("interr",a,b.toString())};var Gg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,gg={http:80,https:443,ftp:21},Hb=O("$location"),Hg={$$html5:!1,$$replace:!1,absUrl:Ib("$$absUrl"),url:function(a){if(y(a))return this.$$url;var b=Gg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Ib("$$protocol"),
host:Ib("$$host"),port:Ib("$$port"),path:md("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(I(a)||Q(a))a=a.toString(),this.$$search=zc(a);else if(J(a))a=oa(a,{}),q(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Hb("isrcharg");break;default:y(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:md("$$hash",function(a){return null!==
a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([ld,hc,gc],function(a){a.prototype=Object.create(Hg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==gc||!this.$$html5)throw Hb("nostate");this.$$state=y(b)?null:b;return this}});var ba=O("$parse"),ig=Function.prototype.call,jg=Function.prototype.apply,kg=Function.prototype.bind,Pb=S();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Pb[a]=!0});var Ig={n:"\n",f:"\f",r:"\r",
t:"\t",v:"\v","'":"'",'"':'"'},jc=function(a){this.options=a};jc.prototype={constructor:jc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;
else{var b=a+this.peek(),d=b+this.peek(2),c=Pb[b],e=Pb[d];Pb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||
"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,
b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=v(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw ba("lexerr",
a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=L(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"==d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},
readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=Ig[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";
s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";s.ThisExpression="ThisExpression";s.LocalsExpression="LocalsExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);
a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},
assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=
this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),
b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):
this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=oa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:s.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,
callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==
this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},
object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:s.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",
this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},throwError:function(a,b){throw ba("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw ba("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw ba("ueoe",this.text);return this.tokens[0]},peek:function(a,b,
d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:s.ThisExpression},$locals:{type:s.LocalsExpression}}};td.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},
assign:{vars:[],body:[],own:{}},inputs:[]};Z(c,d.$filter);var e="",f;this.stage="assign";if(f=rd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign","s,v,l");f=pd(c.body);d.stage="inputs";q(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+
" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Ua,qa,nd,hg,Jb,lg,od,a);this.state=this.stage=void 0;e.literal=sd(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;q(b,function(b){a.push("var "+
b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},
recurse:function(a,b,d,c,e,f){var g,h,k=this,l,m,n;c=c||C;if(!f&&v(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case s.Program:q(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;case s.UnaryExpression:this.recurse(a.argument,void 0,void 0,
function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case s.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));
c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Ua(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",
a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Kb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){e&&1!==e&&k.addEnsureSafeAssignContext(g);if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),
k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.ensureSafeObject(k.computedMember(g,h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Ua(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Kb(a.property.name))m=k.ensureSafeObject(m);k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},
function(){k.assign(b,"undefined")});c(b)},!!e);break;case s.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);q(a.arguments,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),
m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};if(!qd(a.left))throw ba("lval");this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,g.name,g.computed)+a.operator+
h;k.assign(b,m);c(b||m)})},1);break;case s.ArrayExpression:l=[];q(a.elements,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case s.ObjectExpression:l=[];n=!1;q(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===s.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,h);k.assign(k.member(b,g,
a.computed),h)})):(q(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===s.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case s.ThisExpression:this.assign(b,"s");c("s");break;case s.LocalsExpression:this.assign(b,"l");c("l");break;case s.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=
this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;
c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/[$_a-zA-Z][$_a-zA-Z0-9]*/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),
";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},
getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(I(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+
"'";if(Q(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw ba("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};ud.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;Z(c,d.$filter);var e,f;if(e=rd(c))f=this.recurse(e);e=pd(c.body);
var g;e&&(g=[],q(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];q(c.body,function(a){h.push(d.recurse(a.expression))});e=0===c.body.length?C:1===c.body.length?h[0]:function(a,b){var c;q(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=sd(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,
b);case s.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case s.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return Ua(a.name,f.expression),f.identifier(a.name,
f.expensiveChecks||Kb(a.name),b,d,f.expression);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Ua(a.property.name,f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case s.CallExpression:return g=[],q(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?
function(a,c,d,f){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,f));a=e.apply(void 0,n,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,m){var n=e(a,c,d,m),p;if(null!=n.value){qa(n.context,f.expression);nd(n.value,f.expression);p=[];for(var q=0;q<g.length;++q)p.push(qa(g[q](a,c,d,m),f.expression));p=qa(n.value.apply(n.context,p),f.expression)}return b?{value:p}:p};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,m){var n=c(a,
d,g,m);a=e(a,d,g,m);qa(n.value,f.expression);Jb(n.context);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],q(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),
function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.LocalsExpression:return function(a,c){return b?{value:c}:c};case s.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=v(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,
f){d=a(d,c,e,f);d=v(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=od(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(v(h)?h:0)-(v(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=
a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d,c,e){return function(f,g,h,k){f=g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:void 0;b&&qa(g,e);return d?{context:f,name:a,
value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),m,n;null!=l&&(m=b(f,g,h,k),m+="",Ua(m,e),c&&1!==c&&(Jb(l),l&&!l[m]&&(l[m]={})),n=l[m],qa(n,e));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&(Jb(g),g&&!g[b]&&(g[b]={}));h=null!=g?g[b]:void 0;(d||Kb(b))&&qa(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var kc=
function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(a,d);this.astCompiler=d.csp?new ud(this.ast,b):new td(this.ast,b)};kc.prototype={constructor:kc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};var mg=Object.prototype.valueOf,ra=O("$sce"),ma={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},og=O("$compile"),X=F.document.createElement("a"),yd=pa(F.location.href);zd.$inject=["$document"];Lc.$inject=["$provide"];var Gd=22,
Fd=".",mc="0";Ad.$inject=["$locale"];Cd.$inject=["$locale"];var zg={yyyy:W("FullYear",4,0,!1,!0),yy:W("FullYear",2,0,!0,!0),y:W("FullYear",1,0,!1,!0),MMMM:kb("Month"),MMM:kb("Month",!0),MM:W("Month",2,1),M:W("Month",1,1),LLLL:kb("Month",!1,!0),dd:W("Date",2),d:W("Date",1),HH:W("Hours",2),H:W("Hours",1),hh:W("Hours",2,-12),h:W("Hours",1,-12),mm:W("Minutes",2),m:W("Minutes",1),ss:W("Seconds",2),s:W("Seconds",1),sss:W("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,b){return 12>a.getHours()?
b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Lb(Math[0<a?"floor":"ceil"](a/60),2)+Lb(Math.abs(a%60),2))},ww:Id(2),w:Id(1),G:nc,GG:nc,GGG:nc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},yg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,xg=/^\-?\d+$/;Bd.$inject=["$locale"];var sg=ca(L),tg=ca(ub);Dd.$inject=["$parse"];var oe=ca({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,
b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ja.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};q(Eb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=wa("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});q(bd,function(a,b){vb[b]=function(){return{priority:100,link:function(a,
c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Bg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=wa("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ja.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ba&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});
var Mb={$addControl:C,$$renameControl:function(a,b){a.$name=b},$removeControl:C,$setValidity:C,$setDirty:C,$setPristine:C,$setSubmitted:C};Jd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Sd=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||C}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Jd,compile:function(d,f){d.addClass(Va).addClass(ob);var g=f.name?"name":a&&f.ngForm?"ngForm":
!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var p=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var q=g?c(n.$name):C;g&&(q(a,n),e.$observe(g,function(b){n.$name!==b&&(q(a,void 0),n.$$parentForm.$$renameControl(n,b),q=c(n.$name),q(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);
q(a,void 0);P(n,Mb)})}}}}}]},pe=Sd(),Ce=Sd(!0),Ag=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,Jg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Kg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Lg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Td=/^(\d{4,})-(\d{2})-(\d{2})$/,Ud=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
qc=/^(\d{4,})-W(\d\d)$/,Vd=/^(\d{4,})-(\d\d)$/,Wd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Ld=S();q(["date","datetime-local","month","time","week"],function(a){Ld[a]=!0});var Xd={text:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);oc(c)},date:mb("date",Td,Ob(Td,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":mb("datetimelocal",Ud,Ob(Ud,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:mb("time",Wd,Ob(Wd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:mb("week",qc,function(a,b){if(ha(a))return a;
if(I(a)){qc.lastIndex=0;var d=qc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Hd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:mb("month",Vd,Ob(Vd,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Md(a,b,d,c);lb(a,b,d,c,e,f);c.$$parserName="number";c.$parsers.push(function(a){if(c.$isEmpty(a))return null;if(Lg.test(a))return parseFloat(a)});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!Q(a))throw nb("numfmt",
a);a=a.toString()}return a});if(v(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||y(g)||a>=g};d.$observe("min",function(a){v(a)&&!Q(a)&&(a=parseFloat(a,10));g=Q(a)&&!isNaN(a)?a:void 0;c.$validate()})}if(v(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||y(h)||a<=h};d.$observe("max",function(a){v(a)&&!Q(a)&&(a=parseFloat(a,10));h=Q(a)&&!isNaN(a)?a:void 0;c.$validate()})}},url:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);oc(c);c.$$parserName="url";c.$validators.url=
function(a,b){var d=a||b;return c.$isEmpty(d)||Jg.test(d)}},email:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);oc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Kg.test(d)}},radio:function(a,b,d,c){y(d.name)&&b.attr("name",++pb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Nd(h,a,"ngTrueValue",d.ngTrueValue,
!0),l=Nd(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return na(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:C,button:C,submit:C,reset:C,file:C},Fc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Xd[L(g.type)]||Xd.text)(e,f,
g,h[0],b,a,d,c)}}}}],Mg=/^(true|false|\d+)$/,Ue=function(){return{restrict:"A",priority:100,compile:function(a,b){return Mg.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},ue=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=y(a)?"":a})}}}}],we=["$interpolate","$compile",
function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=y(a)?"":a})}}}}],ve=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=
f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],Te=ca({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),xe=pc("",!0),ze=pc("Odd",0),ye=pc("Even",1),Ae=Ma({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Be=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Kc={},Ng={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=wa("ng-"+a);Kc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Ng[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Ee=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var h,k,l;d.$watch(e.ngIf,function(d){d?k||g(function(d,f){k=f;d[d.length++]=
b.$$createComment("end ngIf",e.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=tb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],Fe=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:da.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,p){var q=0,s,z,r,D=function(){z&&(z.remove(),z=null);s&&
(s.$destroy(),s=null);r&&(d.leave(r).then(function(){z=null}),z=r,r=null)};c.$watch(f,function(f){var m=function(){!v(h)||h&&!c.$eval(h)||b()},w=++q;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&w===q){var b=c.$new();n.template=a;a=p(b,function(a){D();d.enter(a,null,e).then(m)});s=b;r=a;s.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||w!==q||(D(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(D(),n.template=null)})}}}}],We=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(b,d,c,e){ja.call(d[0]).match(/SVG/)?(d.empty(),a(Nc(e.template,F.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],Ge=Ma({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),Se=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?V(e):e;c.$parsers.push(function(a){if(!y(a)){var b=
[];a&&q(a.split(g),function(a){a&&b.push(f?V(a):a)});return b}});c.$formatters.push(function(a){if(K(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},ob="ng-valid",Od="ng-invalid",Va="ng-pristine",Nb="ng-dirty",Qd="ng-pending",nb=O("ngModel"),Og=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};
this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=l(d.name||"",!1)(a);this.$$parentForm=Mb;var m=e(d.ngModel),n=m.assign,p=m,s=n,F=null,z,r=this;this.$$setOptions=function(a){if((r.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");p=function(a){var c=m(a);E(c)&&(c=b(a));
return c};s=function(a,b){E(m(a))?f(a,{$$$p:b}):n(a,b)}}else if(!m.assign)throw nb("nonassign",d.ngModel,ua(c));};this.$render=C;this.$isEmpty=function(a){return y(a)||""===a||null===a||a!==a};this.$$updateEmptyClasses=function(a){r.$isEmpty(a)?(f.removeClass(c,"ng-not-empty"),f.addClass(c,"ng-empty")):(f.removeClass(c,"ng-empty"),f.addClass(c,"ng-not-empty"))};var D=0;Kd({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){r.$dirty=
!1;r.$pristine=!0;f.removeClass(c,Nb);f.addClass(c,Va)};this.$setDirty=function(){r.$dirty=!0;r.$pristine=!1;f.removeClass(c,Va);f.addClass(c,Nb);r.$$parentForm.$setDirty()};this.$setUntouched=function(){r.$touched=!1;r.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};this.$setTouched=function(){r.$touched=!0;r.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(F);r.$viewValue=r.$$lastCommittedViewValue;r.$render()};this.$validate=function(){if(!Q(r.$modelValue)||
!isNaN(r.$modelValue)){var a=r.$$rawModelValue,b=r.$valid,c=r.$modelValue,d=r.$options&&r.$options.allowInvalid;r.$$runValidators(a,r.$$lastCommittedViewValue,function(e){d||b===e||(r.$modelValue=e?a:void 0,r.$modelValue!==c&&r.$$writeModelToScope())})}};this.$$runValidators=function(a,b,c){function d(){var c=!0;q(r.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(q(r.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;q(r.$asyncValidators,function(e,g){var h=
e(a,b);if(!h||!E(h.then))throw nb("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},C):g(!0)}function f(a,b){h===D&&r.$setValidity(a,b)}function g(a){h===D&&c(a)}D++;var h=D;(function(){var a=r.$$parserName||"parse";if(y(z))f(a,null);else return z||(q(r.$validators,function(a,b){f(b,null)}),q(r.$asyncValidators,function(a,b){f(b,null)})),f(a,z),z;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=
r.$viewValue;g.cancel(F);if(r.$$lastCommittedViewValue!==a||""===a&&r.$$hasNativeValidators)r.$$updateEmptyClasses(a),r.$$lastCommittedViewValue=a,r.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=r.$$lastCommittedViewValue;if(z=y(b)?void 0:!0)for(var c=0;c<r.$parsers.length;c++)if(b=r.$parsers[c](b),y(b)){z=!1;break}Q(r.$modelValue)&&isNaN(r.$modelValue)&&(r.$modelValue=p(a));var d=r.$modelValue,e=r.$options&&r.$options.allowInvalid;r.$$rawModelValue=
b;e&&(r.$modelValue=b,r.$modelValue!==d&&r.$$writeModelToScope());r.$$runValidators(b,r.$$lastCommittedViewValue,function(a){e||(r.$modelValue=a?b:void 0,r.$modelValue!==d&&r.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,r.$modelValue);q(r.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){r.$viewValue=a;r.$options&&!r.$options.updateOnDefault||r.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=r.$options;
d&&v(d.debounce)&&(d=d.debounce,Q(d)?c=d:Q(d[b])?c=d[b]:Q(d["default"])&&(c=d["default"]));g.cancel(F);c?F=g(function(){r.$commitViewValue()},c):h.$$phase?r.$commitViewValue():a.$apply(function(){r.$commitViewValue()})};a.$watch(function(){var b=p(a);if(b!==r.$modelValue&&(r.$modelValue===r.$modelValue||b===b)){r.$modelValue=r.$$rawModelValue=b;z=void 0;for(var c=r.$formatters,d=c.length,e=b;d--;)e=c[d](e);r.$viewValue!==e&&(r.$$updateEmptyClasses(e),r.$viewValue=r.$$lastCommittedViewValue=e,r.$render(),
r.$$runValidators(b,e,C))}return b})}],Re=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Og,priority:1,compile:function(b){b.addClass(Va).addClass("ng-untouched").addClass(ob);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,
c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],Pg=/(\s+|^)default(\s+|$)/,Ve=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=oa(a.$eval(b.ngModelOptions));v(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=V(this.$options.updateOn.replace(Pg,
function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},He=Ma({terminal:!0,priority:1E3}),Qg=O("ngOptions"),Rg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Pe=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=
b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&xa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(Rg);if(!n)throw Qg("iexp",a,ua(b));var p=n[5]||n[7],q=n[6];a=/ as /.test(n[0])&&n[1];var s=n[9];b=d(n[2]?n[1]:p);var z=a&&d(a)||b,r=s&&d(s),v=s?function(a,b){return r(c,b)}:function(a){return Ga(a)},u=function(a,b){return v(a,H(a,b))},t=d(n[2]||n[1]),w=d(n[3]||""),y=d(n[4]||""),B=d(n[8]),A={},H=q?function(a,b){A[q]=b;A[p]=
a;return A}:function(a){A[p]=a;return A};return{trackBy:s,getTrackByValue:u,getWatchables:d(B,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=H(l,h),l=v(l,h);b.push(l);if(n[2]||n[1])l=t(c,h),b.push(l);n[4]&&(h=y(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=B(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===g?n:g[n],q=H(d[p],p),r=z(c,q),p=v(r,q),x=t(c,q),A=w(c,q),q=y(c,q),r=new e(p,r,x,A,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,
getOptionFromViewValue:function(a){return b[u(a)]},getViewValueFromOption:function(a){return s?da.copy(a.viewValue):a.viewValue}}}}}var e=F.document.createElement("option"),f=F.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=C},post:function(d,h,k,l){function m(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function n(){var a=
w&&p.readValue();if(w)for(var b=w.items.length-1;0<=b;b--){var c=w.items[b];c.group?Db(c.element.parentNode):Db(c.element)}w=C.getOptions();var d={};u&&h.prepend(z);w.items.forEach(function(a){var b;if(v(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),B.appendChild(b),b.label=a.group,d[a.group]=b);var c=e.cloneNode(!1)}else b=B,c=e.cloneNode(!1);b.appendChild(c);m(a,c)});h[0].appendChild(B);s.$render();s.$isEmpty(a)||(b=p.readValue(),(C.trackBy||y?na(a,b):a===b)||(s.$setViewValue(b),s.$render()))}var p=
l[0],s=l[1],y=k.multiple,z;l=0;for(var r=h.children(),D=r.length;l<D;l++)if(""===r[l].value){z=r.eq(l);break}var u=!!z,t=G(e.cloneNode(!1));t.val("?");var w,C=c(k.ngOptions,h,d),B=b[0].createDocumentFragment();y?(s.$isEmpty=function(a){return!a||0===a.length},p.writeValue=function(a){w.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){if(a=w.getOptionFromViewValue(a))a.element.selected=!0})},p.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=w.selectValueMap[a])&&
!a.disabled&&b.push(w.getViewValueFromOption(a))});return b},C.trackBy&&d.$watchCollection(function(){if(K(s.$viewValue))return s.$viewValue.map(function(a){return C.getTrackByValue(a)})},function(){s.$render()})):(p.writeValue=function(a){var b=w.getOptionFromViewValue(a);b?(h[0].value!==b.selectValue&&(t.remove(),u||z.remove(),h[0].value=b.selectValue,b.element.selected=!0),b.element.setAttribute("selected","selected")):null===a||u?(t.remove(),u||h.prepend(z),h.val(""),z.prop("selected",!0),z.attr("selected",
!0)):(u||z.remove(),h.prepend(t),h.val("?"),t.prop("selected",!0),t.attr("selected",!0))},p.readValue=function(){var a=w.selectValueMap[h.val()];return a&&!a.disabled?(u||z.remove(),t.remove(),w.getViewValueFromOption(a)):null},C.trackBy&&d.$watch(function(){return C.getTrackByValue(s.$viewValue)},function(){s.$render()}));u?(z.remove(),a(z)(d),z.removeClass("ng-scope")):z=G(e.cloneNode(!1));h.empty();n();d.$watchCollection(C.getWatchables,n)}}}}],Ie=["$locale","$interpolate","$log",function(a,b,
d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=f.$eval(m)||{},s={},v=b.startSymbol(),z=b.endSymbol(),r=v+l+"-"+n+z,D=da.noop,u;q(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+L(c[2]),p[c]=g.attr(h.$attr[b]))});q(p,function(a,d){s[d]=b(a.replace(c,r))});f.$watch(l,function(b){var c=parseFloat(b),e=isNaN(c);e||c in p||(c=a.pluralCat(c-n));c===u||e&&Q(u)&&isNaN(u)||(D(),e=s[c],y(e)?
(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),D=C,k()):D=f.$watch(e,k),u=c)})}}}],Je=["$parse","$animate","$compile",function(a,b,d){var c=O("ngRepeat"),e=function(a,b,c,d,e,m,n){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],s=l[4],l=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var v=l[3]||l[1],z=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",p);var r,D,u,t,w={$id:Ga};s?r=a(s):(u=function(a,b){return Ga(b)},t=function(a){return a});return function(a,d,f,g,l){r&&(D=function(b,c,d){z&&(w[z]=b);w[v]=c;w.$index=
d;return r(a,w)});var m=S();a.$watchCollection(n,function(f){var g,n,r=d[0],s,x=S(),w,y,C,A,F,E,G;p&&(a[p]=f);if(xa(f))F=f,n=D||u;else for(G in n=D||t,F=[],f)sa.call(f,G)&&"$"!==G.charAt(0)&&F.push(G);w=F.length;G=Array(w);for(g=0;g<w;g++)if(y=f===F?g:F[g],C=f[y],A=n(y,C,g),m[A])E=m[A],delete m[A],x[A]=E,G[g]=E;else{if(x[A])throw q(G,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,A,C);G[g]={id:A,scope:void 0,clone:void 0};x[A]=!0}for(s in m){E=m[s];A=tb(E.clone);b.leave(A);if(A[0].parentNode)for(g=
0,n=A.length;g<n;g++)A[g].$$NG_REMOVED=!0;E.scope.$destroy()}for(g=0;g<w;g++)if(y=f===F?g:F[g],C=f[y],E=G[g],E.scope){s=r;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);E.clone[0]!=s&&b.move(tb(E.clone),null,r);r=E.clone[E.clone.length-1];e(E.scope,g,v,C,z,y,w)}else l(function(a,c){E.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;E.clone=a;x[E.id]=E;e(E.scope,g,v,C,z,y,w)});m=x})}}}}],Ke=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,
function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Le=Ma(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),Me=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(d,c,e,f){var g=[],h=[],k=[],l=[],m=function(a,b){return function(){a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var s=tb(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).then(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&q(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),
f)})})})}}}],Ne=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),Oe=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),Sg=O("ngTransclude"),Qe=Ma({restrict:"EAC",link:function(a,b,d,c,e){d.ngTransclude===
d.$attr.ngTransclude&&(d.ngTransclude="");if(!e)throw Sg("orphan",ua(b));e(function(a){a.length&&(b.empty(),b.append(a))},null,d.ngTransclude||d.ngTranscludeSlot)}}),qe=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Tg={$setViewValue:C,$render:C},Ug=["$element","$scope",function(a,b){var d=this,c=new Sa;d.ngModelCtrl=Tg;d.unknownOption=G(F.document.createElement("option"));d.renderUnknownOption=function(b){b=
"? "+Ga(b)+" ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b)};b.$on("$destroy",function(){d.renderUnknownOption=C});d.removeUnknownOption=function(){d.unknownOption.parent()&&d.unknownOption.remove()};d.readValue=function(){d.removeUnknownOption();return a.val()};d.writeValue=function(b){d.hasOption(b)?(d.removeUnknownOption(),a.val(b),""===b&&d.emptyOption.prop("selected",!0)):null==b&&d.emptyOption?(d.removeUnknownOption(),a.val("")):d.renderUnknownOption(b)};d.addOption=function(a,
b){if(8!==b[0].nodeType){Ra(a,'"option value"');""===a&&(d.emptyOption=b);var g=c.get(a)||0;c.put(a,g+1);d.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=!0)}};d.removeOption=function(a){var b=c.get(a);b&&(1===b?(c.remove(a),""===a&&(d.emptyOption=void 0)):c.put(a,b-1))};d.hasOption=function(a){return!!c.get(a)};d.registerOption=function(a,b,c,h,k){if(h){var l;c.$observe("value",function(a){v(l)&&d.removeOption(l);l=a;d.addOption(a,b)})}else k?a.$watch(k,function(a,e){c.$set("value",
a);e!==a&&d.removeOption(e);d.addOption(a,b)}):d.addOption(c.value,b);b.on("$destroy",function(){d.removeOption(c.value);d.ngModelCtrl.$render()})}}],re=function(){return{restrict:"E",require:["select","?ngModel"],controller:Ug,priority:1,link:{pre:function(a,b,d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});if(d.multiple){f.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};
f.writeValue=function(a){var c=new Sa(a);q(b.find("option"),function(a){a.selected=v(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||na(g,e.$viewValue)||(g=fa(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},te=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){if(v(d.value))var c=a(d.value,!0);else{var e=
a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],se=ca({restrict:"E",terminal:!1}),Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,
b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){I(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw O("ngPattern")("noregexp",f,a,ua(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||y(e)||e.test(b)}}}}},Jc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=$(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||
b.length<=e}}}}},Ic=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=$(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};F.angular.bootstrap?F.console&&console.log("WARNING: Tried to load angular more than once."):(je(),le(da),da.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM",
"PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,
6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,
c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),G(F.document).ready(function(){fe(F.document,Ac)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/**
 * angular-strap
 * @version v2.3.9 - 2016-06-10
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com> (https://github.com/mgcrea)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
!function(e,t,n){'use strict';function a(e,n,a,o,i,r){function s(e,n){return angular.element((n||t).querySelectorAll(e))}function l(e){return u[e]?u[e]:u[e]=n.get(e,{cache:r}).then(function(e){return e.data})}this.compile=function(t){t.template&&/\.html$/.test(t.template)&&(console.warn('Deprecated use of `template` option to pass a file. Please use the `templateUrl` option instead.'),t.templateUrl=t.template,t.template='');var n=t.templateUrl,r=t.template||'',u=t.controller,c=t.controllerAs,d=angular.copy(t.resolve||{}),f=angular.copy(t.locals||{}),p=t.transformTemplate||angular.identity,g=t.bindToController;if(angular.forEach(d,function(e,t){angular.isString(e)?d[t]=a.get(e):d[t]=a.invoke(e)}),angular.extend(d,f),r)d.$template=e.when(r);else{if(!n)throw new Error('Missing `template` / `templateUrl` option.');d.$template=l(n)}return t.titleTemplate&&(d.$template=e.all([d.$template,l(t.titleTemplate)]).then(function(e){var t=angular.element(e[0]);return s('[ng-bind="title"]',t[0]).removeAttr('ng-bind').html(e[1]),t[0].outerHTML})),t.contentTemplate&&(d.$template=e.all([d.$template,l(t.contentTemplate)]).then(function(e){var n=angular.element(e[0]),a=s('[ng-bind="content"]',n[0]).removeAttr('ng-bind').html(e[1]);return t.templateUrl||a.next().remove(),n[0].outerHTML})),e.all(d).then(function(e){var n=p(e.$template);t.html&&(n=n.replace(/ng-bind="/gi,'ng-bind-html="'));var a=angular.element('<div>').html(n.trim()).contents(),r=o(a);return{locals:e,element:a,link:function(t){if(e.$scope=t,u){var n=i(u,e,!0);g&&angular.extend(n.instance,e);var o=angular.isObject(n)?n:n();a.data('$ngControllerController',o),a.children().data('$ngControllerController',o),c&&(t[c]=o)}return r.apply(null,arguments)}}})};var u={}}a.$inject=['$q','$http','$injector','$compile','$controller','$templateCache'],angular.module('mgcrea.ngStrap.typeahead',['mgcrea.ngStrap.tooltip','mgcrea.ngStrap.helpers.parseOptions']).provider('$typeahead',function(){var e=this.defaults={animation:'am-fade',prefixClass:'typeahead',prefixEvent:'$typeahead',placement:'bottom-left',templateUrl:'typeahead/typeahead.tpl.html',trigger:'focus',container:!1,keyboard:!0,html:!1,delay:0,minLength:1,filter:'bsAsyncFilter',limit:6,autoSelect:!1,comparator:'',trimValue:!0};this.$get=['$window','$rootScope','$tooltip','$$rAF','$timeout',function(t,n,a,o,i){function r(t,n,r){var l={},u=angular.extend({},e,r);l=a(t,u);var c=r.scope,d=l.$scope;d.$resetMatches=function(){d.$matches=[],d.$activeIndex=u.autoSelect?0:-1},d.$resetMatches(),d.$activate=function(e){d.$$postDigest(function(){l.activate(e)})},d.$select=function(e,t){d.$$postDigest(function(){l.select(e)})},d.$isVisible=function(){return l.$isVisible()},l.update=function(e){d.$matches=e,d.$activeIndex>=e.length&&(d.$activeIndex=u.autoSelect?0:-1),s(d),o(l.$applyPlacement)},l.activate=function(e){d.$activeIndex=e},l.select=function(e){if(-1!==e){var t=d.$matches[e].value;n.$setViewValue(t),n.$render(),d.$resetMatches(),c&&c.$digest(),d.$emit(u.prefixEvent+'.select',t,e,l),angular.isDefined(u.onSelect)&&angular.isFunction(u.onSelect)&&u.onSelect(t,e,l)}},l.$isVisible=function(){return u.minLength&&n?d.$matches.length&&angular.isString(n.$viewValue)&&n.$viewValue.length>=u.minLength:!!d.$matches.length},l.$getIndex=function(e){var t;for(t=d.$matches.length;t--&&!angular.equals(d.$matches[t].value,e););return t},l.$onMouseDown=function(e){e.preventDefault(),e.stopPropagation()},l.$onKeyDown=function(e){/(38|40|13)/.test(e.keyCode)&&(!l.$isVisible()||13===e.keyCode&&-1===d.$activeIndex||(e.preventDefault(),e.stopPropagation()),13===e.keyCode&&d.$matches.length?l.select(d.$activeIndex):38===e.keyCode&&d.$activeIndex>0?d.$activeIndex--:40===e.keyCode&&d.$activeIndex<d.$matches.length-1?d.$activeIndex++:angular.isUndefined(d.$activeIndex)&&(d.$activeIndex=0),d.$digest())};var f=l.show;l.show=function(){f(),i(function(){l.$element&&(l.$element.on('mousedown',l.$onMouseDown),u.keyboard&&t&&t.on('keydown',l.$onKeyDown))},0,!1)};var p=l.hide;return l.hide=function(){l.$element&&l.$element.off('mousedown',l.$onMouseDown),u.keyboard&&t&&t.off('keydown',l.$onKeyDown),u.autoSelect||l.activate(-1),p()},l}function s(e){e.$$phase||e.$root&&e.$root.$$phase||e.$digest()}return r.defaults=e,r}]}).filter('bsAsyncFilter',['$filter',function(e){return function(t,n,a){return t&&angular.isFunction(t.then)?t.then(function(t){return e('filter')(t,n,a)}):e('filter')(t,n,a)}}]).directive('bsTypeahead',['$window','$parse','$q','$typeahead','$parseOptions',function(e,t,n,a,o){var i=a.defaults;return{restrict:'EAC',require:'ngModel',link:function(e,t,n,r){t.off('change');var s={scope:e};angular.forEach(['template','templateUrl','controller','controllerAs','placement','container','delay','trigger','keyboard','html','animation','filter','limit','minLength','watchOptions','selectMode','autoSelect','comparator','id','prefixEvent','prefixClass'],function(e){angular.isDefined(n[e])&&(s[e]=n[e])});var l=/^(false|0|)$/i;angular.forEach(['html','container','trimValue','filter'],function(e){angular.isDefined(n[e])&&l.test(n[e])&&(s[e]=!1)}),angular.forEach(['onBeforeShow','onShow','onBeforeHide','onHide','onSelect'],function(t){var a='bs'+t.charAt(0).toUpperCase()+t.slice(1);angular.isDefined(n[a])&&(s[t]=e.$eval(n[a]))}),t.attr('autocomplete')||t.attr('autocomplete','off');var u=angular.isDefined(s.filter)?s.filter:i.filter,c=s.limit||i.limit,d=s.comparator||i.comparator,f=n.bsOptions;u&&(f+=' | '+u+':$viewValue',d&&(f+=':'+d)),c&&(f+=' | limitTo:'+c);var p=o(f),g=a(t,r,s);if(s.watchOptions){var m=p.$match[7].replace(/\|.+/,'').replace(/\(.*\)/g,'').trim();e.$watchCollection(m,function(t,n){p.valuesFn(e,r).then(function(e){g.update(e),r.$render()})})}e.$watch(n.ngModel,function(t,n){e.$modelValue=t,p.valuesFn(e,r).then(function(e){return s.selectMode&&!e.length&&t.length>0?void r.$setViewValue(r.$viewValue.substring(0,r.$viewValue.length-1)):(e.length>c&&(e=e.slice(0,c)),g.update(e),void r.$render())})}),r.$formatters.push(function(e){var t=p.displayValue(e);return t?t:angular.isDefined(e)&&'object'!=typeof e?e:''}),r.$render=function(){if(r.$isEmpty(r.$viewValue))return t.val('');var e=g.$getIndex(r.$modelValue),n=-1!==e?g.$scope.$matches[e].label:r.$viewValue;n=angular.isObject(n)?p.displayValue(n):n;var a=n?n.toString().replace(/<(?:.|\n)*?>/gm,''):'',o=t[0].selectionStart,i=t[0].selectionEnd;t.val(s.trimValue===!1?a:a.trim()),t[0].setSelectionRange(o,i)},e.$on('$destroy',function(){g&&g.destroy(),s=null,g=null})}}}]),angular.module('mgcrea.ngStrap.tab',[]).provider('$tab',function(){var e=this.defaults={animation:'am-fade',template:'tab/tab.tpl.html',navClass:'nav-tabs',activeClass:'active'},t=this.controller=function(t,n,a){var o=this;o.$options=angular.copy(e),angular.forEach(['animation','navClass','activeClass'],function(e){angular.isDefined(a[e])&&(o.$options[e]=a[e])}),t.$navClass=o.$options.navClass,t.$activeClass=o.$options.activeClass,o.$panes=t.$panes=[],o.$activePaneChangeListeners=o.$viewChangeListeners=[],o.$push=function(e){angular.isUndefined(o.$panes.$active)&&t.$setActive(e.name||0),o.$panes.push(e)},o.$remove=function(e){var t,n=o.$panes.indexOf(e),a=o.$panes.$active;t=angular.isString(a)?o.$panes.map(function(e){return e.name}).indexOf(a):o.$panes.$active,o.$panes.splice(n,1),t>n?t--:n===t&&t===o.$panes.length&&t--,t>=0&&t<o.$panes.length?o.$setActive(o.$panes[t].name||t):o.$setActive()},o.$setActive=t.$setActive=function(e){o.$panes.$active=e,o.$activePaneChangeListeners.forEach(function(e){e()})},o.$isActive=t.$isActive=function(e,t){return o.$panes.$active===e.name||o.$panes.$active===t}};this.$get=function(){var n={};return n.defaults=e,n.controller=t,n}}).directive('bsTabs',['$window','$animate','$tab','$parse',function(e,t,n,a){var o=n.defaults;return{require:['?ngModel','bsTabs'],transclude:!0,scope:!0,controller:['$scope','$element','$attrs',n.controller],templateUrl:function(e,t){return t.template||o.template},link:function(e,t,n,o){var i=o[0],r=o[1];if(i&&(r.$activePaneChangeListeners.push(function(){i.$setViewValue(r.$panes.$active)}),i.$formatters.push(function(e){return r.$setActive(e),e})),n.bsActivePane){var s=a(n.bsActivePane);r.$activePaneChangeListeners.push(function(){s.assign(e,r.$panes.$active)}),e.$watch(n.bsActivePane,function(e,t){r.$setActive(e)},!0)}}}}]).directive('bsPane',['$window','$animate','$sce',function(e,t,n){return{require:['^?ngModel','^bsTabs'],scope:!0,link:function(e,a,o,i){function r(){var n=s.$panes.indexOf(e);t[s.$isActive(e,n)?'addClass':'removeClass'](a,s.$options.activeClass)}var s=i[1];a.addClass('tab-pane'),o.$observe('title',function(t,a){e.title=n.trustAsHtml(t)}),e.name=o.name,s.$options.animation&&a.addClass(s.$options.animation),o.$observe('disabled',function(t,n){e.disabled=e.$eval(t)}),s.$push(e),e.$on('$destroy',function(){s.$remove(e)}),s.$activePaneChangeListeners.push(function(){r()}),r()}}}]),angular.module('mgcrea.ngStrap.tooltip',['mgcrea.ngStrap.core','mgcrea.ngStrap.helpers.dimensions']).provider('$tooltip',function(){var e=this.defaults={animation:'am-fade',customClass:'',prefixClass:'tooltip',prefixEvent:'tooltip',container:!1,target:!1,placement:'top',templateUrl:'tooltip/tooltip.tpl.html',template:'',titleTemplate:!1,trigger:'hover focus',keyboard:!1,html:!1,show:!1,title:'',type:'',delay:0,autoClose:!1,bsEnabled:!0,mouseDownPreventDefault:!0,mouseDownStopPropagation:!0,viewport:{selector:'body',padding:0}};this.$get=['$window','$rootScope','$bsCompiler','$q','$templateCache','$http','$animate','$sce','dimensions','$$rAF','$timeout',function(n,a,o,i,r,s,l,u,c,d,f){function p(i,r){function s(){O.$emit(V.prefixEvent+'.show',F),angular.isDefined(V.onShow)&&angular.isFunction(V.onShow)&&V.onShow(F)}function p(){if(O.$emit(V.prefixEvent+'.hide',F),angular.isDefined(V.onHide)&&angular.isFunction(V.onHide)&&V.onHide(F),B===z){if(q&&'focus'===V.trigger)return i[0].blur();A()}}function $(){var e=V.trigger.split(' ');angular.forEach(e,function(e){'click'===e||'contextmenu'===e?i.on(e,F.toggle):'manual'!==e&&(i.on('hover'===e?'mouseenter':'focus',F.enter),i.on('hover'===e?'mouseleave':'blur',F.leave),'button'===I&&'hover'!==e&&i.on(h?'touchstart':'mousedown',F.$onFocusElementMouseDown))})}function w(){for(var e=V.trigger.split(' '),t=e.length;t--;){var n=e[t];'click'===n||'contextmenu'===n?i.off(n,F.toggle):'manual'!==n&&(i.off('hover'===n?'mouseenter':'focus',F.enter),i.off('hover'===n?'mouseleave':'blur',F.leave),'button'===I&&'hover'!==n&&i.off(h?'touchstart':'mousedown',F.$onFocusElementMouseDown))}}function y(){'focus'!==V.trigger?B.on('keyup',F.$onKeyUp):i.on('keyup',F.$onFocusKeyUp)}function b(){'focus'!==V.trigger?B.off('keyup',F.$onKeyUp):i.off('keyup',F.$onFocusKeyUp)}function D(){f(function(){B.on('click',k),v.on('click',F.hide),j=!0},0,!1)}function S(){j&&(B.off('click',k),v.off('click',F.hide),j=!1)}function k(e){e.stopPropagation()}function x(e){e=e||V.target||i;var a=e[0],o='BODY'===a.tagName,r=a.getBoundingClientRect(),s={};for(var l in r)s[l]=r[l];null===s.width&&(s=angular.extend({},s,{width:r.right-r.left,height:r.bottom-r.top}));var u=o?{top:0,left:0}:c.offset(a),d={scroll:o?t.documentElement.scrollTop||t.body.scrollTop:e.prop('scrollTop')||0},f=o?{width:t.documentElement.clientWidth,height:n.innerHeight}:null;return angular.extend({},s,d,f,u)}function C(e,t,n,a){var o,i=e.split('-');switch(i[0]){case'right':o={top:t.top+t.height/2-a/2,left:t.left+t.width};break;case'bottom':o={top:t.top+t.height,left:t.left+t.width/2-n/2};break;case'left':o={top:t.top+t.height/2-a/2,left:t.left-n};break;default:o={top:t.top-a,left:t.left+t.width/2-n/2}}if(!i[1])return o;if('top'===i[0]||'bottom'===i[0])switch(i[1]){case'left':o.left=t.left;break;case'right':o.left=t.left+t.width-n}else if('left'===i[0]||'right'===i[0])switch(i[1]){case'top':o.top=t.top-a+t.height;break;case'bottom':o.top=t.top}return o}function T(e,t){var n=B[0],a=n.offsetWidth,o=n.offsetHeight,i=parseInt(c.css(n,'margin-top'),10),r=parseInt(c.css(n,'margin-left'),10);isNaN(i)&&(i=0),isNaN(r)&&(r=0),e.top=e.top+i,e.left=e.left+r,c.setOffset(n,angular.extend({using:function(e){B.css({top:Math.round(e.top)+'px',left:Math.round(e.left)+'px',right:''})}},e),0);var s=n.offsetWidth,l=n.offsetHeight;if('top'===t&&l!==o&&(e.top=e.top+o-l),!/top-left|top-right|bottom-left|bottom-right/.test(t)){var u=E(t,e,s,l);if(u.left?e.left+=u.left:e.top+=u.top,c.setOffset(n,e),/top|right|bottom|left/.test(t)){var d=/top|bottom/.test(t),f=d?2*u.left-a+s:2*u.top-o+l,p=d?'offsetWidth':'offsetHeight';M(f,n[p],d)}}}function E(e,t,n,a){var o={top:0,left:0};if(!F.$viewport)return o;var i=V.viewport&&V.viewport.padding||0,r=x(F.$viewport);if(/right|left/.test(e)){var s=t.top-i-r.scroll,l=t.top+i-r.scroll+a;s<r.top?o.top=r.top-s:l>r.top+r.height&&(o.top=r.top+r.height-l)}else{var u=t.left-i,c=t.left+i+n;u<r.left?o.left=r.left-u:c>r.right&&(o.left=r.left+r.width-c)}return o}function M(e,t,n){var a=m('.tooltip-arrow, .arrow',B[0]);a.css(n?'left':'top',50*(1-e/t)+'%').css(n?'top':'left','')}function A(){clearTimeout(P),F.$isShown&&null!==B&&(V.autoClose&&S(),V.keyboard&&b()),Y&&(Y.$destroy(),Y=null),B&&(B.remove(),B=F.$element=null)}var F={},V=F.$options=angular.extend({},e,r),H=F.$promise=o.compile(V),O=F.$scope=V.scope&&V.scope.$new()||a.$new(),I=i[0].nodeName.toLowerCase();if(V.delay&&angular.isString(V.delay)){var N=V.delay.split(',').map(parseFloat);V.delay=N.length>1?{show:N[0],hide:N[1]}:N[0]}F.$id=V.id||i.attr('id')||'',V.title&&(O.title=u.trustAsHtml(V.title)),O.$setEnabled=function(e){O.$$postDigest(function(){F.setEnabled(e)})},O.$hide=function(){O.$$postDigest(function(){F.hide()})},O.$show=function(){O.$$postDigest(function(){F.show()})},O.$toggle=function(){O.$$postDigest(function(){F.toggle()})},F.$isShown=O.$isShown=!1;var P,U,L,B,R,Y;H.then(function(e){L=e,F.init()}),F.init=function(){V.delay&&angular.isNumber(V.delay)&&(V.delay={show:V.delay,hide:V.delay}),'self'===V.container?R=i:angular.isElement(V.container)?R=V.container:V.container&&(R=m(V.container)),$(),V.target&&(V.target=angular.isElement(V.target)?V.target:m(V.target)),V.show&&O.$$postDigest(function(){'focus'===V.trigger?i[0].focus():F.show()})},F.destroy=function(){w(),A(),O.$destroy()},F.enter=function(){return clearTimeout(P),U='in',V.delay&&V.delay.show?void(P=setTimeout(function(){'in'===U&&F.show()},V.delay.show)):F.show()},F.show=function(){if(V.bsEnabled&&!F.$isShown){O.$emit(V.prefixEvent+'.show.before',F),angular.isDefined(V.onBeforeShow)&&angular.isFunction(V.onBeforeShow)&&V.onBeforeShow(F);var e,t;V.container?(e=R,t=R[0].lastChild?angular.element(R[0].lastChild):null):(e=null,t=i),B&&A(),Y=F.$scope.$new(),B=F.$element=L.link(Y,function(e,t){}),B.css({top:'-9999px',left:'-9999px',right:'auto',display:'block',visibility:'hidden'}),V.animation&&B.addClass(V.animation),V.type&&B.addClass(V.prefixClass+'-'+V.type),V.customClass&&B.addClass(V.customClass),t?t.after(B):e.prepend(B),F.$isShown=O.$isShown=!0,g(O),F.$applyPlacement(),angular.version.minor<=2?l.enter(B,e,t,s):l.enter(B,e,t).then(s),g(O),d(function(){B&&B.css({visibility:'visible'}),V.keyboard&&('focus'!==V.trigger&&F.focus(),y())}),V.autoClose&&D()}},F.leave=function(){return clearTimeout(P),U='out',V.delay&&V.delay.hide?void(P=setTimeout(function(){'out'===U&&F.hide()},V.delay.hide)):F.hide()};var q,z;F.hide=function(e){F.$isShown&&(O.$emit(V.prefixEvent+'.hide.before',F),angular.isDefined(V.onBeforeHide)&&angular.isFunction(V.onBeforeHide)&&V.onBeforeHide(F),q=e,z=B,angular.version.minor<=2?l.leave(B,p):l.leave(B).then(p),F.$isShown=O.$isShown=!1,g(O),V.keyboard&&null!==B&&b(),V.autoClose&&null!==B&&S())},F.toggle=function(e){e&&e.preventDefault(),F.$isShown?F.leave():F.enter()},F.focus=function(){B[0].focus()},F.setEnabled=function(e){V.bsEnabled=e},F.setViewport=function(e){V.viewport=e},F.$applyPlacement=function(){if(B){var t=V.placement,n=/\s?auto?\s?/i,a=n.test(t);a&&(t=t.replace(n,'')||e.placement),B.addClass(V.placement);var o=x(),i=B.prop('offsetWidth'),r=B.prop('offsetHeight');if(F.$viewport=V.viewport&&m(V.viewport.selector||V.viewport),a){var s=t,l=x(F.$viewport);/bottom/.test(s)&&o.bottom+r>l.bottom?t=s.replace('bottom','top'):/top/.test(s)&&o.top-r<l.top&&(t=s.replace('top','bottom')),/left/.test(s)&&o.left-i<l.left?t=t.replace('left','right'):/right/.test(s)&&o.right+i>l.width&&(t=t.replace('right','left')),B.removeClass(s).addClass(t)}var u=C(t,o,i,r);T(u,t)}},F.$onKeyUp=function(e){27===e.which&&F.$isShown&&(F.hide(),e.stopPropagation())},F.$onFocusKeyUp=function(e){27===e.which&&(i[0].blur(),e.stopPropagation())},F.$onFocusElementMouseDown=function(e){V.mouseDownPreventDefault&&e.preventDefault(),V.mouseDownStopPropagation&&e.stopPropagation(),F.$isShown?i[0].blur():i[0].focus()};var j=!1;return F}function g(e){e.$$phase||e.$root&&e.$root.$$phase||e.$digest()}function m(e,n){return angular.element((n||t).querySelectorAll(e))}var $=/(ip[ao]d|iphone|android)/gi.test(n.navigator.userAgent),h='createTouch'in n.document&&$,v=angular.element(n.document);return p}]}).directive('bsTooltip',['$window','$location','$sce','$parse','$tooltip','$$rAF',function(e,t,n,a,o,i){return{restrict:'EAC',scope:!0,link:function(e,t,a,r){var s,l={scope:e};angular.forEach(['template','templateUrl','controller','controllerAs','titleTemplate','placement','container','delay','trigger','html','animation','backdropAnimation','type','customClass','id'],function(e){angular.isDefined(a[e])&&(l[e]=a[e])});var u=/^(false|0|)$/i;angular.forEach(['html','container'],function(e){angular.isDefined(a[e])&&u.test(a[e])&&(l[e]=!1)}),angular.forEach(['onBeforeShow','onShow','onBeforeHide','onHide'],function(t){var n='bs'+t.charAt(0).toUpperCase()+t.slice(1);angular.isDefined(a[n])&&(l[t]=e.$eval(a[n]))});var c=t.attr('data-target');angular.isDefined(c)&&(u.test(c)?l.target=!1:l.target=c),e.hasOwnProperty('title')||(e.title=''),a.$observe('title',function(t){if(angular.isDefined(t)||!e.hasOwnProperty('title')){var a=e.title;e.title=n.trustAsHtml(t),angular.isDefined(a)&&i(function(){s&&s.$applyPlacement()})}}),a.$observe('disabled',function(e){e&&s.$isShown&&s.hide()}),a.bsTooltip&&e.$watch(a.bsTooltip,function(t,n){angular.isObject(t)?angular.extend(e,t):e.title=t,angular.isDefined(n)&&i(function(){s&&s.$applyPlacement()})},!0),a.bsShow&&e.$watch(a.bsShow,function(e,t){s&&angular.isDefined(e)&&(angular.isString(e)&&(e=!!e.match(/true|,?(tooltip),?/i)),e===!0?s.show():s.hide())}),a.bsEnabled&&e.$watch(a.bsEnabled,function(e,t){s&&angular.isDefined(e)&&(angular.isString(e)&&(e=!!e.match(/true|1|,?(tooltip),?/i)),e===!1?s.setEnabled(!1):s.setEnabled(!0))}),a.viewport&&e.$watch(a.viewport,function(e){s&&angular.isDefined(e)&&s.setViewport(e)}),s=o(t,l),e.$on('$destroy',function(){s&&s.destroy(),l=null,s=null})}}}]),angular.module('mgcrea.ngStrap.timepicker',['mgcrea.ngStrap.helpers.dateParser','mgcrea.ngStrap.helpers.dateFormatter','mgcrea.ngStrap.tooltip']).provider('$timepicker',function(){var e=this.defaults={animation:'am-fade',defaultDate:'auto',prefixClass:'timepicker',placement:'bottom-left',templateUrl:'timepicker/timepicker.tpl.html',trigger:'focus',container:!1,keyboard:!0,html:!1,delay:0,useNative:!0,timeType:'date',timeFormat:'shortTime',timezone:null,modelTimeFormat:null,autoclose:!1,minTime:-(1/0),maxTime:+(1/0),length:5,hourStep:1,minuteStep:5,secondStep:5,roundDisplay:!1,iconUp:'glyphicon glyphicon-chevron-up',iconDown:'glyphicon glyphicon-chevron-down',arrowBehavior:'pager'};this.$get=['$window','$document','$rootScope','$sce','$dateFormatter','$tooltip','$timeout',function(t,n,a,o,i,r,s){function l(t,n,a){function o(e){var t=6e4*g.minuteStep;return new Date(Math.floor(e.getTime()/t)*t)}function l(e,n){var a=e+n;if(t[0].createTextRange){var o=t[0].createTextRange();o.collapse(!0),o.moveStart('character',e),o.moveEnd('character',a),o.select()}else t[0].setSelectionRange?t[0].setSelectionRange(e,a):angular.isUndefined(t[0].selectionStart)&&(t[0].selectionStart=e,t[0].selectionEnd=a)}function d(){t[0].focus()}var f=r(t,angular.extend({},e,a)),p=a.scope,g=f.$options,m=f.$scope,$=g.lang,h=function(e,t,n){return i.formatDate(e,t,$,n)},v=0,w=g.roundDisplay?o(new Date):new Date,y=n.$dateValue||w,b={hour:y.getHours(),meridian:y.getHours()<12,minute:y.getMinutes(),second:y.getSeconds(),millisecond:y.getMilliseconds()},D=i.getDatetimeFormat(g.timeFormat,$),S=i.hoursFormat(D),k=i.timeSeparator(D),x=i.minutesFormat(D),C=i.secondsFormat(D),T=i.showSeconds(D),E=i.showAM(D);m.$iconUp=g.iconUp,m.$iconDown=g.iconDown,m.$select=function(e,t){f.select(e,t)},m.$moveIndex=function(e,t){f.$moveIndex(e,t)},m.$switchMeridian=function(e){f.switchMeridian(e)},f.update=function(e){angular.isDate(e)&&!isNaN(e.getTime())?(f.$date=e,angular.extend(b,{hour:e.getHours(),minute:e.getMinutes(),second:e.getSeconds(),millisecond:e.getMilliseconds()}),f.$build()):f.$isBuilt||f.$build()},f.select=function(e,t,a){(!n.$dateValue||isNaN(n.$dateValue.getTime()))&&(n.$dateValue='today'===g.defaultDate?new Date:new Date(1970,0,1)),angular.isDate(e)||(e=new Date(e)),0===t?n.$dateValue.setHours(e.getHours()):1===t?n.$dateValue.setMinutes(e.getMinutes()):2===t&&n.$dateValue.setSeconds(e.getSeconds()),n.$setViewValue(angular.copy(n.$dateValue)),n.$render(),g.autoclose&&!a&&s(function(){f.hide(!0)})},f.switchMeridian=function(e){if(n.$dateValue&&!isNaN(n.$dateValue.getTime())){var t=(e||n.$dateValue).getHours();n.$dateValue.setHours(12>t?t+12:t-12),n.$setViewValue(angular.copy(n.$dateValue)),n.$render()}},f.$build=function(){var e,t,n=m.midIndex=parseInt(g.length/2,10),a=[];for(e=0;e<g.length;e++)t=new Date(1970,0,1,b.hour-(n-e)*g.hourStep),a.push({date:t,label:h(t,S),selected:f.$date&&f.$isSelected(t,0),disabled:f.$isDisabled(t,0)});var o,i=[];for(e=0;e<g.length;e++)o=new Date(1970,0,1,0,b.minute-(n-e)*g.minuteStep),i.push({date:o,label:h(o,x),selected:f.$date&&f.$isSelected(o,1),disabled:f.$isDisabled(o,1)});var r,s=[];for(e=0;e<g.length;e++)r=new Date(1970,0,1,0,0,b.second-(n-e)*g.secondStep),s.push({date:r,label:h(r,C),selected:f.$date&&f.$isSelected(r,2),disabled:f.$isDisabled(r,2)});var l=[];for(e=0;e<g.length;e++)T?l.push([a[e],i[e],s[e]]):l.push([a[e],i[e]]);m.rows=l,m.showSeconds=T,m.showAM=E,m.isAM=(f.$date||a[n].date).getHours()<12,m.timeSeparator=k,f.$isBuilt=!0},f.$isSelected=function(e,t){return f.$date?0===t?e.getHours()===f.$date.getHours():1===t?e.getMinutes()===f.$date.getMinutes():2===t?e.getSeconds()===f.$date.getSeconds():void 0:!1},f.$isDisabled=function(e,t){var n;return 0===t?n=e.getTime()+6e4*b.minute+1e3*b.second:1===t?n=e.getTime()+36e5*b.hour+1e3*b.second:2===t&&(n=e.getTime()+36e5*b.hour+6e4*b.minute),n<1*g.minTime||n>1*g.maxTime},m.$arrowAction=function(e,t){'picker'===g.arrowBehavior?f.$setTimeByStep(e,t):f.$moveIndex(e,t)},f.$setTimeByStep=function(e,t){var n=new Date(f.$date||y),a=n.getHours(),o=n.getMinutes(),i=n.getSeconds();0===t?n.setHours(a-parseInt(g.hourStep,10)*e):1===t?n.setMinutes(o-parseInt(g.minuteStep,10)*e):2===t&&n.setSeconds(i-parseInt(g.secondStep,10)*e),f.select(n,t,!0)},f.$moveIndex=function(e,t){var n;0===t?(n=new Date(1970,0,1,b.hour+e*g.length,b.minute,b.second),angular.extend(b,{hour:n.getHours()})):1===t?(n=new Date(1970,0,1,b.hour,b.minute+e*g.length*g.minuteStep,b.second),angular.extend(b,{minute:n.getMinutes()})):2===t&&(n=new Date(1970,0,1,b.hour,b.minute,b.second+e*g.length*g.secondStep),angular.extend(b,{second:n.getSeconds()})),f.$build()},f.$onMouseDown=function(e){if('input'!==e.target.nodeName.toLowerCase()&&e.preventDefault(),e.stopPropagation(),c){var t=angular.element(e.target);'button'!==t[0].nodeName.toLowerCase()&&(t=t.parent()),t.triggerHandler('click')}},f.$onKeyDown=function(e){if(/(38|37|39|40|13)/.test(e.keyCode)&&!e.shiftKey&&!e.altKey){if(e.preventDefault(),e.stopPropagation(),13===e.keyCode)return void f.hide(!0);var t=new Date(f.$date),n=t.getHours(),a=h(t,S).length,o=t.getMinutes(),i=h(t,x).length,r=t.getSeconds(),s=h(t,C).length,u=1,c=/(37|39)/.test(e.keyCode),d=2+1*T+1*E;c&&(37===e.keyCode?v=1>v?d-1:v-1:39===e.keyCode&&(v=d-1>v?v+1:0));var m=[0,a],$=0;38===e.keyCode&&($=-1),40===e.keyCode&&($=1);var w=2===v&&T,y=2===v&&!T||3===v&&T;0===v?(t.setHours(n+$*parseInt(g.hourStep,10)),a=h(t,S).length,m=[0,a]):1===v?(t.setMinutes(o+$*parseInt(g.minuteStep,10)),i=h(t,x).length,m=[a+u,i]):w?(t.setSeconds(r+$*parseInt(g.secondStep,10)),s=h(t,C).length,m=[a+u+i+u,s]):y&&(c||f.switchMeridian(),m=[a+u+i+u+(s+u)*T,2]),f.select(t,v,!0),l(m[0],m[1]),p.$digest()}};var M=f.init;f.init=function(){return u&&g.useNative?(t.prop('type','time'),void t.css('-webkit-appearance','textfield')):(c&&(t.prop('type','text'),t.attr('readonly','true'),t.on('click',d)),void M())};var A=f.destroy;f.destroy=function(){u&&g.useNative&&t.off('click',d),A()};var F=f.show;f.show=function(){!c&&t.attr('readonly')||t.attr('disabled')||(F(),s(function(){f.$element&&f.$element.on(c?'touchstart':'mousedown',f.$onMouseDown),g.keyboard&&t&&t.on('keydown',f.$onKeyDown)},0,!1))};var V=f.hide;return f.hide=function(e){f.$isShown&&(f.$element&&f.$element.off(c?'touchstart':'mousedown',f.$onMouseDown),g.keyboard&&t&&t.off('keydown',f.$onKeyDown),V(e))},f}var u=/(ip[ao]d|iphone|android)/gi.test(t.navigator.userAgent),c='createTouch'in t.document&&u;return e.lang||(e.lang=i.getDefaultLocale()),l.defaults=e,l}]}).directive('bsTimepicker',['$window','$parse','$q','$dateFormatter','$dateParser','$timepicker',function(e,t,a,o,i,r){var s=r.defaults,l=/(ip[ao]d|iphone|android)/gi.test(e.navigator.userAgent);return{restrict:'EAC',require:'ngModel',link:function(e,t,a,u){function c(e){if(angular.isDate(e)){var t=isNaN(f.minTime)||new Date(e.getTime()).setFullYear(1970,0,1)>=f.minTime,n=isNaN(f.maxTime)||new Date(e.getTime()).setFullYear(1970,0,1)<=f.maxTime,a=t&&n;u.$setValidity('date',a),u.$setValidity('min',t),u.$setValidity('max',n),a&&(u.$dateValue=e)}}function d(){return!u.$dateValue||isNaN(u.$dateValue.getTime())?'':$(u.$dateValue,f.timeFormat)}var f={scope:e};angular.forEach(['template','templateUrl','controller','controllerAs','placement','container','delay','trigger','keyboard','html','animation','autoclose','timeType','timeFormat','timezone','modelTimeFormat','useNative','hourStep','minuteStep','secondStep','length','arrowBehavior','iconUp','iconDown','roundDisplay','id','prefixClass','prefixEvent','defaultDate'],function(e){angular.isDefined(a[e])&&(f[e]=a[e])});var p=/^(false|0|)$/i;angular.forEach(['html','container','autoclose','useNative','roundDisplay'],function(e){angular.isDefined(a[e])&&p.test(a[e])&&(f[e]=!1)}),angular.forEach(['onBeforeShow','onShow','onBeforeHide','onHide'],function(t){var n='bs'+t.charAt(0).toUpperCase()+t.slice(1);angular.isDefined(a[n])&&(f[t]=e.$eval(a[n]))}),l&&(f.useNative||s.useNative)&&(f.timeFormat='HH:mm');var g=r(t,u,f);f=g.$options;var m=f.lang,$=function(e,t,n){return o.formatDate(e,t,m,n)};a.bsShow&&e.$watch(a.bsShow,function(e,t){g&&angular.isDefined(e)&&(angular.isString(e)&&(e=!!e.match(/true|,?(timepicker),?/i)),e===!0?g.show():g.hide())});var h=i({format:f.timeFormat,lang:m});angular.forEach(['minTime','maxTime'],function(e){angular.isDefined(a[e])&&a.$observe(e,function(t){g.$options[e]=h.getTimeForAttribute(e,t),isNaN(g.$options[e])||g.$build(),c(u.$dateValue)})}),e.$watch(a.ngModel,function(e,t){g.update(u.$dateValue)},!0),u.$parsers.unshift(function(e){var t;if(!e)return u.$setValidity('date',!0),null;var a=angular.isDate(e)?e:h.parse(e,u.$dateValue);return!a||isNaN(a.getTime())?(u.$setValidity('date',!1),n):(c(a),'string'===f.timeType?(t=h.timezoneOffsetAdjust(a,f.timezone,!0),$(t,f.modelTimeFormat||f.timeFormat)):(t=h.timezoneOffsetAdjust(u.$dateValue,f.timezone,!0),'number'===f.timeType?t.getTime():'unix'===f.timeType?t.getTime()/1e3:'iso'===f.timeType?t.toISOString():new Date(t)))}),u.$formatters.push(function(e){var t;return t=angular.isUndefined(e)||null===e?NaN:angular.isDate(e)?e:'string'===f.timeType?h.parse(e,null,f.modelTimeFormat):'unix'===f.timeType?new Date(1e3*e):new Date(e),u.$dateValue=h.timezoneOffsetAdjust(t,f.timezone),d()}),u.$render=function(){t.val(d())},e.$on('$destroy',function(){g&&g.destroy(),f=null,g=null})}}}]),angular.module('mgcrea.ngStrap.scrollspy',['mgcrea.ngStrap.helpers.debounce','mgcrea.ngStrap.helpers.dimensions']).provider('$scrollspy',function(){var e=this.$$spies={},n=this.defaults={debounce:150,throttle:100,offset:100};this.$get=['$window','$document','$rootScope','dimensions','debounce','throttle',function(a,o,i,r,s,l){function u(e,t){return e[0].nodeName&&e[0].nodeName.toLowerCase()===t.toLowerCase()}function c(o){var c=angular.extend({},n,o);c.element||(c.element=p);var g=u(c.element,'body'),m=g?d:c.element,$=g?'window':c.id;if(e[$])return e[$].$$count++,e[$];var h,v,w,y,b,D,S,k,x={},C=x.$trackedElements=[],T=[];return x.init=function(){this.$$count=1,y=s(this.checkPosition,c.debounce),b=l(this.checkPosition,c.throttle),m.on('click',this.checkPositionWithEventLoop),d.on('resize',y),m.on('scroll',b),D=s(this.checkOffsets,c.debounce),h=i.$on('$viewContentLoaded',D),v=i.$on('$includeContentLoaded',D),D(),$&&(e[$]=x)},x.destroy=function(){this.$$count--,this.$$count>0||(m.off('click',this.checkPositionWithEventLoop),d.off('resize',y),m.off('scroll',b),h(),v(),$&&delete e[$])},x.checkPosition=function(){if(T.length){if(k=(g?a.pageYOffset:m.prop('scrollTop'))||0,S=Math.max(a.innerHeight,f.prop('clientHeight')),k<T[0].offsetTop&&w!==T[0].target)return x.$activateElement(T[0]);for(var e=T.length;e--;)if(!angular.isUndefined(T[e].offsetTop)&&null!==T[e].offsetTop&&w!==T[e].target&&!(k<T[e].offsetTop||T[e+1]&&k>T[e+1].offsetTop))return x.$activateElement(T[e])}},x.checkPositionWithEventLoop=function(){setTimeout(x.checkPosition,1)},x.$activateElement=function(e){if(w){var t=x.$getTrackedElement(w);t&&(t.source.removeClass('active'),u(t.source,'li')&&u(t.source.parent().parent(),'li')&&t.source.parent().parent().removeClass('active'))}w=e.target,e.source.addClass('active'),u(e.source,'li')&&u(e.source.parent().parent(),'li')&&e.source.parent().parent().addClass('active')},x.$getTrackedElement=function(e){return C.filter(function(t){return t.target===e})[0]},x.checkOffsets=function(){angular.forEach(C,function(e){var n=t.querySelector(e.target);e.offsetTop=n?r.offset(n).top:null,c.offset&&null!==e.offsetTop&&(e.offsetTop-=1*c.offset)}),T=C.filter(function(e){return null!==e.offsetTop}).sort(function(e,t){return e.offsetTop-t.offsetTop}),y()},x.trackElement=function(e,t){C.push({target:e,source:t})},x.untrackElement=function(e,t){for(var n,a=C.length;a--;)if(C[a].target===e&&C[a].source===t){n=a;break}C.splice(n,1)},x.activate=function(e){C[e].addClass('active')},x.init(),x}var d=angular.element(a),f=angular.element(o.prop('documentElement')),p=angular.element(a.document.body);return c}]}).directive('bsScrollspy',['$rootScope','debounce','dimensions','$scrollspy',function(e,t,n,a){return{restrict:'EAC',link:function(e,t,n){var o={scope:e};angular.forEach(['offset','target'],function(e){angular.isDefined(n[e])&&(o[e]=n[e])});var i=a(o);i.trackElement(o.target,t),e.$on('$destroy',function(){i&&(i.untrackElement(o.target,t),i.destroy()),o=null,i=null})}}}]).directive('bsScrollspyList',['$rootScope','debounce','dimensions','$scrollspy',function(e,t,n,a){return{restrict:'A',compile:function(e,t){var n=e[0].querySelectorAll('li > a[href]');angular.forEach(n,function(e){var t=angular.element(e);t.parent().attr('bs-scrollspy','').attr('data-target',t.attr('href'))})}}}]),angular.module('mgcrea.ngStrap.select',['mgcrea.ngStrap.tooltip','mgcrea.ngStrap.helpers.parseOptions']).provider('$select',function(){var e=this.defaults={animation:'am-fade',prefixClass:'select',prefixEvent:'$select',placement:'bottom-left',templateUrl:'select/select.tpl.html',trigger:'focus',container:!1,keyboard:!0,html:!1,delay:0,multiple:!1,allNoneButtons:!1,sort:!0,caretHtml:'&nbsp;<span class="caret"></span>',placeholder:'Choose among the following...',allText:'All',noneText:'None',maxLength:3,maxLengthHtml:'selected',iconCheckmark:'glyphicon glyphicon-ok',
toggle:!1};this.$get=['$window','$document','$rootScope','$tooltip','$timeout',function(t,a,o,i,r){function s(o,s,l){var c={},d=angular.extend({},e,l);c=i(o,d);var f=c.$scope;f.$matches=[],d.multiple?f.$activeIndex=[]:f.$activeIndex=-1,f.$isMultiple=d.multiple,f.$showAllNoneButtons=d.allNoneButtons&&d.multiple,f.$iconCheckmark=d.iconCheckmark,f.$allText=d.allText,f.$noneText=d.noneText,f.$activate=function(e){f.$$postDigest(function(){c.activate(e)})},f.$select=function(e,t){f.$$postDigest(function(){c.select(e)})},f.$isVisible=function(){return c.$isVisible()},f.$isActive=function(e){return c.$isActive(e)},f.$selectAll=function(){for(var e=0;e<f.$matches.length;e++)f.$isActive(e)||f.$select(e)},f.$selectNone=function(){for(var e=0;e<f.$matches.length;e++)f.$isActive(e)&&f.$select(e)},c.update=function(e){f.$matches=e,c.$updateActiveIndex()},c.activate=function(e){return d.multiple?(c.$isActive(e)?f.$activeIndex.splice(f.$activeIndex.indexOf(e),1):f.$activeIndex.push(e),d.sort&&f.$activeIndex.sort(function(e,t){return e-t})):f.$activeIndex=e,f.$activeIndex},c.select=function(e){if(!(angular.isUndefined(e)||0>e||e>=f.$matches.length)){var t=f.$matches[e].value;f.$apply(function(){c.activate(e),d.multiple?s.$setViewValue(f.$activeIndex.map(function(e){return angular.isUndefined(f.$matches[e])?null:f.$matches[e].value})):(d.toggle?s.$setViewValue(t===s.$modelValue?n:t):s.$setViewValue(t),c.hide())}),f.$emit(d.prefixEvent+'.select',t,e,c),angular.isDefined(d.onSelect)&&angular.isFunction(d.onSelect)&&d.onSelect(t,e,c)}},c.$updateActiveIndex=function(){d.multiple?angular.isArray(s.$modelValue)?f.$activeIndex=s.$modelValue.map(function(e){return c.$getIndex(e)}):f.$activeIndex=[]:angular.isDefined(s.$modelValue)&&f.$matches.length?f.$activeIndex=c.$getIndex(s.$modelValue):f.$activeIndex=-1},c.$isVisible=function(){return d.minLength&&s?f.$matches.length&&s.$viewValue.length>=d.minLength:f.$matches.length},c.$isActive=function(e){return d.multiple?-1!==f.$activeIndex.indexOf(e):f.$activeIndex===e},c.$getIndex=function(e){var t;for(t=f.$matches.length;t--&&!angular.equals(f.$matches[t].value,e););return t},c.$onMouseDown=function(e){if(e.preventDefault(),e.stopPropagation(),u){var t=angular.element(e.target);t.triggerHandler('click')}},c.$onKeyDown=function(e){return/(9|13|38|40)/.test(e.keyCode)?(9!==e.keyCode&&(e.preventDefault(),e.stopPropagation()),d.multiple&&9===e.keyCode?c.hide():d.multiple||13!==e.keyCode&&9!==e.keyCode?void(d.multiple||(38===e.keyCode&&f.$activeIndex>0?f.$activeIndex--:38===e.keyCode&&f.$activeIndex<0?f.$activeIndex=f.$matches.length-1:40===e.keyCode&&f.$activeIndex<f.$matches.length-1?f.$activeIndex++:angular.isUndefined(f.$activeIndex)&&(f.$activeIndex=0),f.$digest())):c.select(f.$activeIndex)):void 0},c.$isIE=function(){var e=t.navigator.userAgent;return e.indexOf('MSIE ')>0||e.indexOf('Trident/')>0||e.indexOf('Edge/')>0},c.$selectScrollFix=function(e){'UL'===a[0].activeElement.tagName&&(e.preventDefault(),e.stopImmediatePropagation(),e.target.focus())};var p=c.show;c.show=function(){p(),d.multiple&&c.$element.addClass('select-multiple'),r(function(){c.$element.on(u?'touchstart':'mousedown',c.$onMouseDown),d.keyboard&&o.on('keydown',c.$onKeyDown)},0,!1)};var g=c.hide;return c.hide=function(){!d.multiple&&angular.isUndefined(s.$modelValue)&&(f.$activeIndex=-1),c.$element.off(u?'touchstart':'mousedown',c.$onMouseDown),d.keyboard&&o.off('keydown',c.$onKeyDown),g(!0)},c}var l=/(ip[ao]d|iphone|android)/gi.test(t.navigator.userAgent),u='createTouch'in t.document&&l;return s.defaults=e,s}]}).directive('bsSelect',['$window','$parse','$q','$select','$parseOptions',function(e,t,n,a,o){var i=a.defaults;return{restrict:'EAC',require:'ngModel',link:function(e,t,n,r){var s={scope:e,placeholder:i.placeholder};angular.forEach(['template','templateUrl','controller','controllerAs','placement','container','delay','trigger','keyboard','html','animation','placeholder','allNoneButtons','maxLength','maxLengthHtml','allText','noneText','iconCheckmark','autoClose','id','sort','caretHtml','prefixClass','prefixEvent','toggle'],function(e){angular.isDefined(n[e])&&(s[e]=n[e])});var l=/^(false|0|)$/i;angular.forEach(['html','container','allNoneButtons','sort'],function(e){angular.isDefined(n[e])&&l.test(n[e])&&(s[e]=!1)}),angular.forEach(['onBeforeShow','onShow','onBeforeHide','onHide','onSelect'],function(t){var a='bs'+t.charAt(0).toUpperCase()+t.slice(1);angular.isDefined(n[a])&&(s[t]=e.$eval(n[a]))});var u=t.attr('data-multiple');if(angular.isDefined(u)&&(l.test(u)?s.multiple=!1:s.multiple=u),'select'===t[0].nodeName.toLowerCase()){var c=t;c.css('display','none'),t=angular.element('<button type="button" class="btn btn-default"></button>'),c.after(t)}var d=o(n.bsOptions),f=a(t,r,s);f.$isIE()&&t[0].addEventListener('blur',f.$selectScrollFix);var p=d.$match[7].replace(/\|.+/,'').trim();e.$watch(p,function(t,n){d.valuesFn(e,r).then(function(e){f.update(e),r.$render()})},!0),e.$watch(n.ngModel,function(e,t){f.$updateActiveIndex(),r.$render()},!0),r.$render=function(){var e,n;s.multiple&&angular.isArray(r.$modelValue)?(e=r.$modelValue.map(function(e){return n=f.$getIndex(e),-1!==n?f.$scope.$matches[n].label:!1}).filter(angular.isDefined),e=e.length>(s.maxLength||i.maxLength)?e.length+' '+(s.maxLengthHtml||i.maxLengthHtml):e.join(', ')):(n=f.$getIndex(r.$modelValue),e=-1!==n?f.$scope.$matches[n].label:!1),t.html((e||s.placeholder)+(s.caretHtml||i.caretHtml))},s.multiple&&(r.$isEmpty=function(e){return!e||0===e.length}),e.$on('$destroy',function(){f&&f.destroy(),s=null,f=null})}}}]),angular.module('mgcrea.ngStrap.popover',['mgcrea.ngStrap.tooltip']).provider('$popover',function(){var e=this.defaults={animation:'am-fade',customClass:'',container:!1,target:!1,placement:'right',templateUrl:'popover/popover.tpl.html',contentTemplate:!1,trigger:'click',keyboard:!0,html:!1,title:'',content:'',delay:0,autoClose:!1};this.$get=['$tooltip',function(t){function n(n,a){var o=angular.extend({},e,a),i=t(n,o);return o.content&&(i.$scope.content=o.content),i}return n}]}).directive('bsPopover',['$window','$sce','$popover',function(e,t,n){var a=e.requestAnimationFrame||e.setTimeout;return{restrict:'EAC',scope:!0,link:function(e,o,i){var r,s={scope:e};angular.forEach(['template','templateUrl','controller','controllerAs','contentTemplate','placement','container','delay','trigger','html','animation','customClass','autoClose','id','prefixClass','prefixEvent'],function(e){angular.isDefined(i[e])&&(s[e]=i[e])});var l=/^(false|0|)$/i;angular.forEach(['html','container','autoClose'],function(e){angular.isDefined(i[e])&&l.test(i[e])&&(s[e]=!1)}),angular.forEach(['onBeforeShow','onShow','onBeforeHide','onHide'],function(t){var n='bs'+t.charAt(0).toUpperCase()+t.slice(1);angular.isDefined(i[n])&&(s[t]=e.$eval(i[n]))});var u=o.attr('data-target');angular.isDefined(u)&&(l.test(u)?s.target=!1:s.target=u),angular.forEach(['title','content'],function(n){i[n]&&i.$observe(n,function(o,i){e[n]=t.trustAsHtml(o),angular.isDefined(i)&&a(function(){r&&r.$applyPlacement()})})}),i.bsPopover&&e.$watch(i.bsPopover,function(t,n){angular.isObject(t)?angular.extend(e,t):e.content=t,angular.isDefined(n)&&a(function(){r&&r.$applyPlacement()})},!0),i.bsShow&&e.$watch(i.bsShow,function(e,t){r&&angular.isDefined(e)&&(angular.isString(e)&&(e=!!e.match(/true|,?(popover),?/i)),e===!0?r.show():r.hide())}),i.viewport&&e.$watch(i.viewport,function(e){r&&angular.isDefined(e)&&r.setViewport(e)}),r=n(o,s),e.$on('$destroy',function(){r&&r.destroy(),s=null,r=null})}}}]),angular.module('mgcrea.ngStrap.navbar',[]).provider('$navbar',function(){var e=this.defaults={activeClass:'active',routeAttr:'data-match-route',strict:!1};this.$get=function(){return{defaults:e}}}).directive('bsNavbar',['$window','$location','$navbar',function(e,t,n){var a=n.defaults;return{restrict:'A',link:function(e,n,o,i){var r=angular.copy(a);angular.forEach(Object.keys(a),function(e){angular.isDefined(o[e])&&(r[e]=o[e])}),e.$watch(function(){return t.path()},function(e,t){var a=n[0].querySelectorAll('li['+r.routeAttr+']');angular.forEach(a,function(t){var n=angular.element(t),a=n.attr(r.routeAttr).replace('/','\\/');r.strict&&(a='^'+a+'$');var o=new RegExp(a,'i');o.test(e)?n.addClass(r.activeClass):n.removeClass(r.activeClass)})})}}}]),angular.module('mgcrea.ngStrap.modal',['mgcrea.ngStrap.core','mgcrea.ngStrap.helpers.dimensions']).provider('$modal',function(){var e=this.defaults={animation:'am-fade',backdropAnimation:'am-fade',customClass:'',prefixClass:'modal',prefixEvent:'modal',placement:'top',templateUrl:'modal/modal.tpl.html',template:'',contentTemplate:!1,container:!1,element:null,backdrop:!0,keyboard:!0,html:!1,show:!0,size:null};this.$get=['$window','$rootScope','$bsCompiler','$animate','$timeout','$sce','dimensions',function(n,a,o,i,r,s,l){function u(t){function n(){T.$emit(x.prefixEvent+'.show',k),angular.isDefined(x.onShow)&&angular.isFunction(x.onShow)&&x.onShow(k)}function r(){T.$emit(x.prefixEvent+'.hide',k),angular.isDefined(x.onHide)&&angular.isFunction(x.onHide)&&x.onHide(k),g.removeClass(x.prefixClass+'-open'),x.animation&&g.removeClass(x.prefixClass+'-with-'+x.animation)}function l(){x.backdrop&&(M.on('click',b),F.on('click',b),F.on('wheel',D))}function u(){x.backdrop&&(M.off('click',b),F.off('click',b),F.off('wheel',D))}function w(){x.keyboard&&M.on('keyup',k.$onKeyUp)}function y(){x.keyboard&&M.off('keyup',k.$onKeyUp)}function b(e){e.target===e.currentTarget&&('static'===x.backdrop?k.focus():k.hide())}function D(e){e.preventDefault()}function S(){k.$isShown&&null!==M&&(u(),y()),A&&(A.$destroy(),A=null),M&&(M.remove(),M=k.$element=null)}var k={},x=k.$options=angular.extend({},e,t),C=k.$promise=o.compile(x),T=k.$scope=x.scope&&x.scope.$new()||a.$new();x.element||x.container||(x.container='body'),k.$id=x.id||x.element&&x.element.attr('id')||'',f(['title','content'],function(e){x[e]&&(T[e]=s.trustAsHtml(x[e]))}),T.$hide=function(){T.$$postDigest(function(){k.hide()})},T.$show=function(){T.$$postDigest(function(){k.show()})},T.$toggle=function(){T.$$postDigest(function(){k.toggle()})},k.$isShown=T.$isShown=!1;var E,M,A,F=angular.element('<div class="'+x.prefixClass+'-backdrop"/>');return F.css({position:'fixed',top:'0px',left:'0px',bottom:'0px',right:'0px'}),C.then(function(e){E=e,k.init()}),k.init=function(){x.show&&T.$$postDigest(function(){k.show()})},k.destroy=function(){S(),F&&(F.remove(),F=null),T.$destroy()},k.show=function(){if(!k.$isShown){var e,t;if(angular.isElement(x.container)?(e=x.container,t=x.container[0].lastChild?angular.element(x.container[0].lastChild):null):x.container?(e=d(x.container),t=e[0]&&e[0].lastChild?angular.element(e[0].lastChild):null):(e=null,t=x.element),M&&S(),A=k.$scope.$new(),M=k.$element=E.link(A,function(e,t){}),x.backdrop&&(M.css({'z-index':$+20*m}),F.css({'z-index':h+20*m}),m++),!T.$emit(x.prefixEvent+'.show.before',k).defaultPrevented){angular.isDefined(x.onBeforeShow)&&angular.isFunction(x.onBeforeShow)&&x.onBeforeShow(k),M.css({display:'block'}).addClass(x.placement),x.customClass&&M.addClass(x.customClass),x.size&&v[x.size]&&angular.element(d('.modal-dialog',M[0])).addClass(v[x.size]),x.animation&&(x.backdrop&&F.addClass(x.backdropAnimation),M.addClass(x.animation)),x.backdrop&&i.enter(F,g,null),angular.version.minor<=2?i.enter(M,e,t,n):i.enter(M,e,t).then(n),k.$isShown=T.$isShown=!0,c(T);var a=M[0];p(function(){a.focus()}),g.addClass(x.prefixClass+'-open'),x.animation&&g.addClass(x.prefixClass+'-with-'+x.animation),l(),w()}}},k.hide=function(){k.$isShown&&(T.$emit(x.prefixEvent+'.hide.before',k).defaultPrevented||(angular.isDefined(x.onBeforeHide)&&angular.isFunction(x.onBeforeHide)&&x.onBeforeHide(k),angular.version.minor<=2?i.leave(M,r):i.leave(M).then(r),x.backdrop&&(m--,i.leave(F)),k.$isShown=T.$isShown=!1,c(T),u(),y()))},k.toggle=function(){k.$isShown?k.hide():k.show()},k.focus=function(){M[0].focus()},k.$onKeyUp=function(e){27===e.which&&k.$isShown&&(k.hide(),e.stopPropagation())},k}function c(e){e.$$phase||e.$root&&e.$root.$$phase||e.$digest()}function d(e,n){return angular.element((n||t).querySelectorAll(e))}var f=angular.forEach,p=n.requestAnimationFrame||n.setTimeout,g=angular.element(n.document.body),m=0,$=1050,h=1040,v={lg:'modal-lg',sm:'modal-sm'};return u}]}).directive('bsModal',['$window','$sce','$parse','$modal',function(e,t,n,a){return{restrict:'EAC',scope:!0,link:function(e,n,o,i){var r={scope:e,element:n,show:!1};angular.forEach(['template','templateUrl','controller','controllerAs','contentTemplate','placement','backdrop','keyboard','html','container','animation','backdropAnimation','id','prefixEvent','prefixClass','customClass','modalClass','size'],function(e){angular.isDefined(o[e])&&(r[e]=o[e])}),r.modalClass&&(r.customClass=r.modalClass);var s=/^(false|0|)$/i;angular.forEach(['backdrop','keyboard','html','container'],function(e){angular.isDefined(o[e])&&s.test(o[e])&&(r[e]=!1)}),angular.forEach(['onBeforeShow','onShow','onBeforeHide','onHide'],function(t){var n='bs'+t.charAt(0).toUpperCase()+t.slice(1);angular.isDefined(o[n])&&(r[t]=e.$eval(o[n]))}),angular.forEach(['title','content'],function(n){o[n]&&o.$observe(n,function(a,o){e[n]=t.trustAsHtml(a)})}),o.bsModal&&e.$watch(o.bsModal,function(t,n){angular.isObject(t)?angular.extend(e,t):e.content=t},!0);var l=a(r);n.on(o.trigger||'click',l.toggle),e.$on('$destroy',function(){l&&l.destroy(),r=null,l=null})}}}]),angular.module('mgcrea.ngStrap.dropdown',['mgcrea.ngStrap.tooltip']).provider('$dropdown',function(){var e=this.defaults={animation:'am-fade',prefixClass:'dropdown',prefixEvent:'dropdown',placement:'bottom-left',templateUrl:'dropdown/dropdown.tpl.html',trigger:'click',container:!1,keyboard:!0,html:!1,delay:0};this.$get=['$window','$rootScope','$tooltip','$timeout',function(t,n,a,o){function i(t,i){function l(e){return e.target!==t[0]?e.target!==t[0]&&u.hide():void 0}var u={},c=angular.extend({},e,i);u.$scope=c.scope&&c.scope.$new()||n.$new(),u=a(t,c);var d=t.parent();u.$onKeyDown=function(e){if(/(38|40)/.test(e.keyCode)){e.preventDefault(),e.stopPropagation();var t=angular.element(u.$element[0].querySelectorAll('li:not(.divider) a'));if(t.length){var n;angular.forEach(t,function(e,t){s&&s.call(e,':focus')&&(n=t)}),38===e.keyCode&&n>0?n--:40===e.keyCode&&n<t.length-1?n++:angular.isUndefined(n)&&(n=0),t.eq(n)[0].focus()}}};var f=u.show;u.show=function(){f(),o(function(){c.keyboard&&u.$element&&u.$element.on('keydown',u.$onKeyDown),r.on('click',l)},0,!1),d.hasClass('dropdown')&&d.addClass('open')};var p=u.hide;u.hide=function(){u.$isShown&&(c.keyboard&&u.$element&&u.$element.off('keydown',u.$onKeyDown),r.off('click',l),d.hasClass('dropdown')&&d.removeClass('open'),p())};var g=u.destroy;return u.destroy=function(){r.off('click',l),g()},u}var r=angular.element(t.document.body),s=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector;return i}]}).directive('bsDropdown',['$window','$sce','$dropdown',function(e,t,a){return{restrict:'EAC',scope:!0,compile:function(e,t){if(!t.bsDropdown){for(var o=e[0].nextSibling;o&&1!==o.nodeType;)o=o.nextSibling;o&&o.className.split(' ').indexOf('dropdown-menu')>=0&&(t.template=o.outerHTML,t.templateUrl=n,o.parentNode.removeChild(o))}return function(e,n,o){var i={scope:e};angular.forEach(['template','templateUrl','controller','controllerAs','placement','container','delay','trigger','keyboard','html','animation','id','autoClose'],function(e){angular.isDefined(t[e])&&(i[e]=t[e])});var r=/^(false|0|)$/i;angular.forEach(['html','container'],function(e){angular.isDefined(o[e])&&r.test(o[e])&&(i[e]=!1)}),angular.forEach(['onBeforeShow','onShow','onBeforeHide','onHide'],function(t){var n='bs'+t.charAt(0).toUpperCase()+t.slice(1);angular.isDefined(o[n])&&(i[t]=e.$eval(o[n]))}),o.bsDropdown&&e.$watch(o.bsDropdown,function(t,n){e.content=t},!0);var s=a(n,i);o.bsShow&&e.$watch(o.bsShow,function(e,t){s&&angular.isDefined(e)&&(angular.isString(e)&&(e=!!e.match(/true|,?(dropdown),?/i)),e===!0?s.show():s.hide())}),e.$on('$destroy',function(){s&&s.destroy(),i=null,s=null})}}}}]),angular.version.minor<3&&angular.version.dot<14&&angular.module('ng').factory('$$rAF',['$window','$timeout',function(e,t){var n=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame,a=e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.mozCancelAnimationFrame||e.webkitCancelRequestAnimationFrame,o=!!n,i=o?function(e){var t=n(e);return function(){a(t)}}:function(e){var n=t(e,16.66,!1);return function(){t.cancel(n)}};return i.supported=o,i}]),angular.module('mgcrea.ngStrap.helpers.parseOptions',[]).provider('$parseOptions',function(){var e=this.defaults={regexp:/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/};this.$get=['$parse','$q',function(t,n){function a(a,o){function i(e,t){return e.map(function(e,n){var a,o,i={};return i[c]=e,a=u(t,i),o=p(t,i),{label:a,value:o,index:n}})}var r={},s=angular.extend({},e,o);r.$values=[];var l,u,c,d,f,p,g;return r.init=function(){r.$match=l=a.match(s.regexp),u=t(l[2]||l[1]),c=l[4]||l[6],d=l[5],f=t(l[3]||''),p=t(l[2]?l[1]:c),g=t(l[7])},r.valuesFn=function(e,t){return n.when(g(e,t)).then(function(t){return angular.isArray(t)||(t=[]),r.$values=t.length?i(t,e):[],r.$values})},r.displayValue=function(e){var t={};return t[c]=e,u(t)},r.init(),r}return a}]}),angular.module('mgcrea.ngStrap.helpers.dimensions',[]).factory('dimensions',function(){function t(e){var t=e.ownerDocument,o=e.offsetParent||t;if(a(o,'#document'))return t.documentElement;for(;o&&!a(o,'html')&&'static'===n.css(o,'position');)o=o.offsetParent;return o||t.documentElement}var n={},a=n.nodeName=function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()};return n.css=function(t,n,a){var o;return o=t.currentStyle?t.currentStyle[n]:e.getComputedStyle?e.getComputedStyle(t)[n]:t.style[n],a===!0?parseFloat(o)||0:o},n.offset=function(t){var n=t.getBoundingClientRect(),a=t.ownerDocument;return{width:n.width||t.offsetWidth,height:n.height||t.offsetHeight,top:n.top+(e.pageYOffset||a.documentElement.scrollTop)-(a.documentElement.clientTop||0),left:n.left+(e.pageXOffset||a.documentElement.scrollLeft)-(a.documentElement.clientLeft||0)}},n.setOffset=function(e,t,a){var o,i,r,s,l,u,c,d=n.css(e,'position'),f=angular.element(e),p={};'static'===d&&(e.style.position='relative'),l=n.offset(e),r=n.css(e,'top'),u=n.css(e,'left'),c=('absolute'===d||'fixed'===d)&&(r+u).indexOf('auto')>-1,c?(o=n.position(e),s=o.top,i=o.left):(s=parseFloat(r)||0,i=parseFloat(u)||0),angular.isFunction(t)&&(t=t.call(e,a,l)),null!==t.top&&(p.top=t.top-l.top+s),null!==t.left&&(p.left=t.left-l.left+i),'using'in t?t.using.call(f,p):f.css({top:p.top+'px',left:p.left+'px'})},n.position=function(e){var o,i,r={top:0,left:0};return'fixed'===n.css(e,'position')?i=e.getBoundingClientRect():(o=t(e),i=n.offset(e),a(o,'html')||(r=n.offset(o)),r.top+=n.css(o,'borderTopWidth',!0),r.left+=n.css(o,'borderLeftWidth',!0)),{width:e.offsetWidth,height:e.offsetHeight,top:i.top-r.top-n.css(e,'marginTop',!0),left:i.left-r.left-n.css(e,'marginLeft',!0)}},n.height=function(e,t){var a=e.offsetHeight;return t?a+=n.css(e,'marginTop',!0)+n.css(e,'marginBottom',!0):a-=n.css(e,'paddingTop',!0)+n.css(e,'paddingBottom',!0)+n.css(e,'borderTopWidth',!0)+n.css(e,'borderBottomWidth',!0),a},n.width=function(e,t){var a=e.offsetWidth;return t?a+=n.css(e,'marginLeft',!0)+n.css(e,'marginRight',!0):a-=n.css(e,'paddingLeft',!0)+n.css(e,'paddingRight',!0)+n.css(e,'borderLeftWidth',!0)+n.css(e,'borderRightWidth',!0),a},n}),angular.module('mgcrea.ngStrap.helpers.debounce',[]).factory('debounce',['$timeout',function(e){return function(t,n,a){var o=null;return function(){var i=this,r=arguments,s=a&&!o;return o&&e.cancel(o),o=e(function(){o=null,a||t.apply(i,r)},n,!1),s&&t.apply(i,r),o}}}]).factory('throttle',['$timeout',function(e){return function(t,n,a){var o=null;return a||(a={}),function(){var i=this,r=arguments;o||(a.leading!==!1&&t.apply(i,r),o=e(function(){o=null,a.trailing!==!1&&t.apply(i,r)},n,!1))}}}]),angular.module('mgcrea.ngStrap.helpers.dateParser',[]).provider('$dateParser',['$localeProvider',function(e){function t(){this.year=1970,this.month=0,this.day=1,this.hours=0,this.minutes=0,this.seconds=0,this.milliseconds=0}function n(){}function a(e){return!isNaN(parseFloat(e))&&isFinite(e)}function o(e,t){for(var n=e.length,a=t.toString().toLowerCase(),o=0;n>o;o++)if(e[o].toLowerCase()===a)return o;return-1}t.prototype.setMilliseconds=function(e){this.milliseconds=e},t.prototype.setSeconds=function(e){this.seconds=e},t.prototype.setMinutes=function(e){this.minutes=e},t.prototype.setHours=function(e){this.hours=e},t.prototype.getHours=function(){return this.hours},t.prototype.setDate=function(e){this.day=e},t.prototype.setMonth=function(e){this.month=e},t.prototype.setFullYear=function(e){this.year=e},t.prototype.fromDate=function(e){return this.year=e.getFullYear(),this.month=e.getMonth(),this.day=e.getDate(),this.hours=e.getHours(),this.minutes=e.getMinutes(),this.seconds=e.getSeconds(),this.milliseconds=e.getMilliseconds(),this},t.prototype.toDate=function(){return new Date(this.year,this.month,this.day,this.hours,this.minutes,this.seconds,this.milliseconds)};var i=t.prototype,r=this.defaults={format:'shortDate',strict:!1};this.$get=['$locale','dateFilter',function(e,s){var l=function(l){function u(e){var t=c(e);return g(t)}function c(e){var t=d(e),n=t.replace(/''/g,'\\\''),a=/('(?:\\'|.)*?')/,o=n.split(a),i=Object.keys(b),r=[];return angular.forEach(o,function(e){if(f(e))e=p(e);else for(var t=0;t<i.length;t++)e=e.split(i[t]).join('${'+t+'}');r.push(e)}),r.join('')}function d(e){return e.replace(/\\/g,'[\\\\]').replace(/-/g,'[-]').replace(/\./g,'[.]').replace(/\*/g,'[*]').replace(/\+/g,'[+]').replace(/\?/g,'[?]').replace(/\$/g,'[$]').replace(/\^/g,'[^]').replace(/\//g,'[/]').replace(/\\s/g,'[\\s]')}function f(e){return/^'.*'$/.test(e)}function p(e){return e.replace(/^'(.*)'$/,'$1')}function g(e){for(var t=Object.keys(b),n=e,a=0;a<t.length;a++)n=n.split('${'+a+'}').join('('+b[t[a]]+')');return new RegExp('^'+n+'$',['i'])}function m(e){var t=c(e);return $(t)}function $(e){for(var t,n,a,o,i=Object.keys(b),r=new RegExp('\\${(\\d+)}','g'),s=[];null!==(t=r.exec(e));)n=t[1],a=i[n],o=D[a],s.push(o);return s}var h,v,w=angular.extend({},r,l),y={},b={sss:'[0-9]{3}',ss:'[0-5][0-9]',s:w.strict?'[1-5]?[0-9]':'[0-9]|[0-5][0-9]',mm:'[0-5][0-9]',m:w.strict?'[1-5]?[0-9]':'[0-9]|[0-5][0-9]',HH:'[01][0-9]|2[0-3]',H:w.strict?'1?[0-9]|2[0-3]':'[01]?[0-9]|2[0-3]',hh:'[0][1-9]|[1][012]',h:w.strict?'[1-9]|1[012]':'0?[1-9]|1[012]',a:'AM|PM',EEEE:e.DATETIME_FORMATS.DAY.join('|'),EEE:e.DATETIME_FORMATS.SHORTDAY.join('|'),dd:'0[1-9]|[12][0-9]|3[01]',d:w.strict?'[1-9]|[1-2][0-9]|3[01]':'0?[1-9]|[1-2][0-9]|3[01]',MMMM:e.DATETIME_FORMATS.MONTH.join('|'),MMM:e.DATETIME_FORMATS.SHORTMONTH.join('|'),MM:'0[1-9]|1[012]',M:w.strict?'[1-9]|1[012]':'0?[1-9]|1[012]',yyyy:'[1]{1}[0-9]{3}|[2]{1}[0-9]{3}',yy:'[0-9]{2}',y:w.strict?'-?(0|[1-9][0-9]{0,3})':'-?0*[0-9]{1,4}'},D={sss:i.setMilliseconds,ss:i.setSeconds,s:i.setSeconds,mm:i.setMinutes,m:i.setMinutes,HH:i.setHours,H:i.setHours,hh:i.setHours,h:i.setHours,EEEE:n,EEE:n,dd:i.setDate,d:i.setDate,a:function(e){var t=this.getHours()%12;return this.setHours(e.match(/pm/i)?t+12:t)},MMMM:function(t){return this.setMonth(o(e.DATETIME_FORMATS.MONTH,t))},MMM:function(t){return this.setMonth(o(e.DATETIME_FORMATS.SHORTMONTH,t))},MM:function(e){return this.setMonth(1*e-1)},M:function(e){return this.setMonth(1*e-1)},yyyy:i.setFullYear,yy:function(e){return this.setFullYear(2e3+1*e)},y:function(e){return 50>=1*e&&2===e.length?this.setFullYear(2e3+1*e):this.setFullYear(1*e)}};return y.init=function(){y.$format=e.DATETIME_FORMATS[w.format]||w.format,h=u(y.$format),v=m(y.$format)},y.isValid=function(e){return angular.isDate(e)?!isNaN(e.getTime()):h.test(e)},y.parse=function(n,a,o,i){o&&(o=e.DATETIME_FORMATS[o]||o),angular.isDate(n)&&(n=s(n,o||y.$format,i));var r=o?u(o):h,l=o?m(o):v,c=r.exec(n);if(!c)return!1;for(var d=a&&!isNaN(a.getTime())?(new t).fromDate(a):(new t).fromDate(new Date(1970,0,1,0)),f=0;f<c.length-1;f++)l[f]&&l[f].call(d,c[f+1]);var p=d.toDate();return parseInt(d.day,10)!==p.getDate()?!1:p},y.getDateForAttribute=function(e,t){var n;if('today'===t){var o=new Date;n=new Date(o.getFullYear(),o.getMonth(),o.getDate()+('maxDate'===e?1:0),0,0,0,'minDate'===e?0:-1)}else n=angular.isString(t)&&t.match(/^".+"$/)?new Date(t.substr(1,t.length-2)):a(t)?new Date(parseInt(t,10)):angular.isString(t)&&0===t.length?'minDate'===e?-(1/0):+(1/0):new Date(t);return n},y.getTimeForAttribute=function(e,t){var n;return n='now'===t?(new Date).setFullYear(1970,0,1):angular.isString(t)&&t.match(/^".+"$/)?new Date(t.substr(1,t.length-2)).setFullYear(1970,0,1):a(t)?new Date(parseInt(t,10)).setFullYear(1970,0,1):angular.isString(t)&&0===t.length?'minTime'===e?-(1/0):+(1/0):y.parse(t,new Date(1970,0,1,0))},y.daylightSavingAdjust=function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},y.timezoneOffsetAdjust=function(e,t,n){return e?(t&&'UTC'===t&&(e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+(n?-1:1)*e.getTimezoneOffset())),e):null},y.init(),y};return l}]}]),angular.module('mgcrea.ngStrap.helpers.dateFormatter',[]).service('$dateFormatter',['$locale','dateFilter',function(e,t){function n(e){return/(h+)([:\.])?(m+)([:\.])?(s*)[ ]?(a?)/i.exec(e).slice(1)}this.getDefaultLocale=function(){return e.id},this.getDatetimeFormat=function(t,n){return e.DATETIME_FORMATS[t]||t},this.weekdaysShort=function(t){return e.DATETIME_FORMATS.SHORTDAY},this.hoursFormat=function(e){return n(e)[0]},this.minutesFormat=function(e){return n(e)[2]},this.secondsFormat=function(e){return n(e)[4]},this.timeSeparator=function(e){return n(e)[1]},this.showSeconds=function(e){return!!n(e)[4]},this.showAM=function(e){return!!n(e)[5]},this.formatDate=function(e,n,a,o){return t(e,n,o)}}]),angular.module('mgcrea.ngStrap.core',[]).service('$bsCompiler',a),angular.module('mgcrea.ngStrap.datepicker',['mgcrea.ngStrap.helpers.dateParser','mgcrea.ngStrap.helpers.dateFormatter','mgcrea.ngStrap.tooltip']).provider('$datepicker',function(){var e=this.defaults={animation:'am-fade',prefixClass:'datepicker',placement:'bottom-left',templateUrl:'datepicker/datepicker.tpl.html',trigger:'focus',container:!1,keyboard:!0,html:!1,delay:0,useNative:!1,dateType:'date',dateFormat:'shortDate',timezone:null,modelDateFormat:null,dayFormat:'dd',monthFormat:'MMM',yearFormat:'yyyy',monthTitleFormat:'MMMM yyyy',yearTitleFormat:'yyyy',strictFormat:!1,autoclose:!1,minDate:-(1/0),maxDate:+(1/0),startView:0,minView:0,startWeek:0,daysOfWeekDisabled:'',hasToday:!1,hasClear:!1,iconLeft:'glyphicon glyphicon-chevron-left',iconRight:'glyphicon glyphicon-chevron-right'};this.$get=['$window','$document','$rootScope','$sce','$dateFormatter','datepickerViews','$tooltip','$timeout',function(t,n,a,o,i,r,s,l){function u(t,n,a){function o(e){e.selected=u.$isSelected(e.date)}function i(){t[0].focus()}var u=s(t,angular.extend({},e,a)),f=a.scope,p=u.$options,g=u.$scope;p.startView&&(p.startView-=p.minView);var m=r(u);u.$views=m.views;var $=m.viewDate;g.$mode=p.startView,g.$iconLeft=p.iconLeft,g.$iconRight=p.iconRight,g.$hasToday=p.hasToday,g.$hasClear=p.hasClear;var h=u.$views[g.$mode];g.$select=function(e){u.select(e)},g.$selectPane=function(e){u.$selectPane(e)},g.$toggleMode=function(){u.setMode((g.$mode+1)%u.$views.length)},g.$setToday=function(){p.autoclose?(u.setMode(0),u.select(new Date)):u.select(new Date,!0)},g.$clear=function(){p.autoclose?(u.setMode(0),u.select(null)):u.select(null,!0)},u.update=function(e){angular.isDate(e)&&!isNaN(e.getTime())&&(u.$date=e,h.update.call(h,e)),u.$build(!0)},u.updateDisabledDates=function(e){p.disabledDateRanges=e;for(var t=0,n=g.rows.length;n>t;t++)angular.forEach(g.rows[t],u.$setDisabledEl)},u.select=function(e,t){angular.isDate(e)?(!angular.isDate(n.$dateValue)||isNaN(n.$dateValue.getTime()))&&(n.$dateValue=new Date(e)):n.$dateValue=null,!g.$mode||t?(n.$setViewValue(angular.copy(e)),n.$render(),p.autoclose&&!t&&l(function(){u.hide(!0)})):(angular.extend($,{year:e.getFullYear(),month:e.getMonth(),date:e.getDate()}),u.setMode(g.$mode-1),u.$build())},u.setMode=function(e){g.$mode=e,h=u.$views[g.$mode],u.$build()},u.$build=function(e){e===!0&&h.built||(e!==!1||h.built)&&h.build.call(h)},u.$updateSelected=function(){for(var e=0,t=g.rows.length;t>e;e++)angular.forEach(g.rows[e],o)},u.$isSelected=function(e){return h.isSelected(e)},u.$setDisabledEl=function(e){e.disabled=h.isDisabled(e.date)},u.$selectPane=function(e){var t=h.steps,n=new Date(Date.UTC($.year+(t.year||0)*e,$.month+(t.month||0)*e,1));angular.extend($,{year:n.getUTCFullYear(),month:n.getUTCMonth(),date:n.getUTCDate()}),u.$build()},u.$onMouseDown=function(e){if(e.preventDefault(),e.stopPropagation(),d){var t=angular.element(e.target);'button'!==t[0].nodeName.toLowerCase()&&(t=t.parent()),t.triggerHandler('click')}},u.$onKeyDown=function(e){if(/(38|37|39|40|13)/.test(e.keyCode)&&!e.shiftKey&&!e.altKey){if(e.preventDefault(),e.stopPropagation(),13===e.keyCode)return void(g.$mode?g.$apply(function(){u.setMode(g.$mode-1)}):u.hide(!0));h.onKeyDown(e),f.$digest()}};var v=u.init;u.init=function(){return c&&p.useNative?(t.prop('type','date'),void t.css('-webkit-appearance','textfield')):(d&&(t.prop('type','text'),t.attr('readonly','true'),t.on('click',i)),void v())};var w=u.destroy;u.destroy=function(){c&&p.useNative&&t.off('click',i),w()};var y=u.show;u.show=function(){!d&&t.attr('readonly')||t.attr('disabled')||(y(),l(function(){u.$isShown&&(u.$element.on(d?'touchstart':'mousedown',u.$onMouseDown),p.keyboard&&t.on('keydown',u.$onKeyDown))},0,!1))};var b=u.hide;return u.hide=function(e){u.$isShown&&(u.$element.off(d?'touchstart':'mousedown',u.$onMouseDown),p.keyboard&&t.off('keydown',u.$onKeyDown),b(e))},u}var c=/(ip[ao]d|iphone|android)/gi.test(t.navigator.userAgent),d='createTouch'in t.document&&c;return e.lang||(e.lang=i.getDefaultLocale()),u.defaults=e,u}]}).directive('bsDatepicker',['$window','$parse','$q','$dateFormatter','$dateParser','$datepicker',function(e,t,n,a,o,i){var r=/(ip[ao]d|iphone|android)/gi.test(e.navigator.userAgent);return{restrict:'EAC',require:'ngModel',link:function(e,t,n,s){function l(e){return e&&e.length?e:null}function u(e){if(angular.isDate(e)){var t=isNaN(p.$options.minDate)||e.getTime()>=p.$options.minDate,n=isNaN(p.$options.maxDate)||e.getTime()<=p.$options.maxDate,a=t&&n;s.$setValidity('date',a),s.$setValidity('min',t),s.$setValidity('max',n),a&&(s.$dateValue=e)}}function c(){return!s.$dateValue||isNaN(s.$dateValue.getTime())?'':m(s.$dateValue,d.dateFormat)}var d={scope:e};angular.forEach(['template','templateUrl','controller','controllerAs','placement','container','delay','trigger','html','animation','autoclose','dateType','dateFormat','timezone','modelDateFormat','dayFormat','strictFormat','startWeek','startDate','useNative','lang','startView','minView','iconLeft','iconRight','daysOfWeekDisabled','id','prefixClass','prefixEvent','hasToday','hasClear'],function(e){angular.isDefined(n[e])&&(d[e]=n[e])});var f=/^(false|0|)$/i;angular.forEach(['html','container','autoclose','useNative','hasToday','hasClear'],function(e){angular.isDefined(n[e])&&f.test(n[e])&&(d[e]=!1)}),angular.forEach(['onBeforeShow','onShow','onBeforeHide','onHide'],function(t){var a='bs'+t.charAt(0).toUpperCase()+t.slice(1);angular.isDefined(n[a])&&(d[t]=e.$eval(n[a]))});var p=i(t,s,d);d=p.$options,r&&d.useNative&&(d.dateFormat='yyyy-MM-dd');var g=d.lang,m=function(e,t){return a.formatDate(e,t,g)},$=o({format:d.dateFormat,lang:g,strict:d.strictFormat});n.bsShow&&e.$watch(n.bsShow,function(e,t){p&&angular.isDefined(e)&&(angular.isString(e)&&(e=!!e.match(/true|,?(datepicker),?/i)),e===!0?p.show():p.hide())}),angular.forEach(['minDate','maxDate'],function(e){
angular.isDefined(n[e])&&n.$observe(e,function(t){p.$options[e]=$.getDateForAttribute(e,t),isNaN(p.$options[e])||p.$build(!1),u(s.$dateValue)})}),angular.isDefined(n.dateFormat)&&n.$observe('dateFormat',function(e){p.$options.dateFormat=e}),e.$watch(n.ngModel,function(e,t){p.update(s.$dateValue)},!0),angular.isDefined(n.disabledDates)&&e.$watch(n.disabledDates,function(e,t){e=l(e),t=l(t),e&&p.updateDisabledDates(e)}),s.$parsers.unshift(function(e){var t;if(!e)return s.$setValidity('date',!0),null;var n=$.parse(e,s.$dateValue);return!n||isNaN(n.getTime())?void s.$setValidity('date',!1):(u(n),'string'===d.dateType?(t=$.timezoneOffsetAdjust(n,d.timezone,!0),m(t,d.modelDateFormat||d.dateFormat)):(t=$.timezoneOffsetAdjust(s.$dateValue,d.timezone,!0),'number'===d.dateType?t.getTime():'unix'===d.dateType?t.getTime()/1e3:'iso'===d.dateType?t.toISOString():new Date(t)))}),s.$formatters.push(function(e){var t;return t=angular.isUndefined(e)||null===e?NaN:angular.isDate(e)?e:'string'===d.dateType?$.parse(e,null,d.modelDateFormat):'unix'===d.dateType?new Date(1e3*e):new Date(e),s.$dateValue=$.timezoneOffsetAdjust(t,d.timezone),c()}),s.$render=function(){t.val(c())},e.$on('$destroy',function(){p&&p.destroy(),d=null,p=null})}}}]).provider('datepickerViews',function(){function e(e,t){for(var n=[];e.length>0;)n.push(e.splice(0,t));return n}function t(e,t){return(e%t+t)%t}this.$get=['$dateFormatter','$dateParser','$sce',function(n,a,o){return function(i){var r=i.$scope,s=i.$options,l=s.lang,u=function(e,t){return n.formatDate(e,t,l)},c=a({format:s.dateFormat,lang:l,strict:s.strictFormat}),d=n.weekdaysShort(l),f=d.slice(s.startWeek).concat(d.slice(0,s.startWeek)),p=o.trustAsHtml('<th class="dow text-center">'+f.join('</th><th class="dow text-center">')+'</th>'),g=i.$date||(s.startDate?c.getDateForAttribute('startDate',s.startDate):new Date),m={year:g.getFullYear(),month:g.getMonth(),date:g.getDate()},$=[{format:s.dayFormat,split:7,steps:{month:1},update:function(e,t){!this.built||t||e.getFullYear()!==m.year||e.getMonth()!==m.month?(angular.extend(m,{year:i.$date.getFullYear(),month:i.$date.getMonth(),date:i.$date.getDate()}),i.$build()):(e.getDate()!==m.date||1===e.getDate())&&(m.date=i.$date.getDate(),i.$updateSelected())},build:function(){var n=new Date(m.year,m.month,1),a=n.getTimezoneOffset(),o=new Date(+n-864e5*t(n.getDay()-s.startWeek,7)),l=o.getTimezoneOffset(),d=c.timezoneOffsetAdjust(new Date,s.timezone).toDateString();l!==a&&(o=new Date(+o+6e4*(l-a)));for(var f,g=[],$=0;42>$;$++)f=c.daylightSavingAdjust(new Date(o.getFullYear(),o.getMonth(),o.getDate()+$)),g.push({date:f,isToday:f.toDateString()===d,label:u(f,this.format),selected:i.$date&&this.isSelected(f),muted:f.getMonth()!==m.month,disabled:this.isDisabled(f)});r.title=u(n,s.monthTitleFormat),r.showLabels=!0,r.labels=p,r.rows=e(g,this.split),r.isTodayDisabled=this.isDisabled(new Date),this.built=!0},isSelected:function(e){return i.$date&&e.getFullYear()===i.$date.getFullYear()&&e.getMonth()===i.$date.getMonth()&&e.getDate()===i.$date.getDate()},isDisabled:function(e){var t=e.getTime();if(t<s.minDate||t>s.maxDate)return!0;if(-1!==s.daysOfWeekDisabled.indexOf(e.getDay()))return!0;if(s.disabledDateRanges)for(var n=0;n<s.disabledDateRanges.length;n++)if(t>=s.disabledDateRanges[n].start&&t<=s.disabledDateRanges[n].end)return!0;return!1},onKeyDown:function(e){if(i.$date){var t,n=i.$date.getTime();37===e.keyCode?t=new Date(n-864e5):38===e.keyCode?t=new Date(n-6048e5):39===e.keyCode?t=new Date(n+864e5):40===e.keyCode&&(t=new Date(n+6048e5)),this.isDisabled(t)||i.select(t,!0)}}},{name:'month',format:s.monthFormat,split:4,steps:{year:1},update:function(e,t){this.built&&e.getFullYear()===m.year?e.getMonth()!==m.month&&(angular.extend(m,{month:i.$date.getMonth(),date:i.$date.getDate()}),i.$updateSelected()):(angular.extend(m,{year:i.$date.getFullYear(),month:i.$date.getMonth(),date:i.$date.getDate()}),i.$build())},build:function(){for(var t,n=[],a=0;12>a;a++)t=new Date(m.year,a,1),n.push({date:t,label:u(t,this.format),selected:i.$isSelected(t),disabled:this.isDisabled(t)});r.title=u(t,s.yearTitleFormat),r.showLabels=!1,r.rows=e(n,this.split),this.built=!0},isSelected:function(e){return i.$date&&e.getFullYear()===i.$date.getFullYear()&&e.getMonth()===i.$date.getMonth()},isDisabled:function(e){var t=+new Date(e.getFullYear(),e.getMonth()+1,0);return t<s.minDate||e.getTime()>s.maxDate},onKeyDown:function(e){if(i.$date){var t=i.$date.getMonth(),n=new Date(i.$date);37===e.keyCode?n.setMonth(t-1):38===e.keyCode?n.setMonth(t-4):39===e.keyCode?n.setMonth(t+1):40===e.keyCode&&n.setMonth(t+4),this.isDisabled(n)||i.select(n,!0)}}},{name:'year',format:s.yearFormat,split:4,steps:{year:12},update:function(e,t){!this.built||t||parseInt(e.getFullYear()/20,10)!==parseInt(m.year/20,10)?(angular.extend(m,{year:i.$date.getFullYear(),month:i.$date.getMonth(),date:i.$date.getDate()}),i.$build()):e.getFullYear()!==m.year&&(angular.extend(m,{year:i.$date.getFullYear(),month:i.$date.getMonth(),date:i.$date.getDate()}),i.$updateSelected())},build:function(){for(var t,n=m.year-m.year%(3*this.split),a=[],o=0;12>o;o++)t=new Date(n+o,0,1),a.push({date:t,label:u(t,this.format),selected:i.$isSelected(t),disabled:this.isDisabled(t)});r.title=a[0].label+'-'+a[a.length-1].label,r.showLabels=!1,r.rows=e(a,this.split),this.built=!0},isSelected:function(e){return i.$date&&e.getFullYear()===i.$date.getFullYear()},isDisabled:function(e){var t=+new Date(e.getFullYear()+1,0,0);return t<s.minDate||e.getTime()>s.maxDate},onKeyDown:function(e){if(i.$date){var t=i.$date.getFullYear(),n=new Date(i.$date);37===e.keyCode?n.setYear(t-1):38===e.keyCode?n.setYear(t-4):39===e.keyCode?n.setYear(t+1):40===e.keyCode&&n.setYear(t+4),this.isDisabled(n)||i.select(n,!0)}}}];return{views:s.minView?Array.prototype.slice.call($,s.minView):$,viewDate:m}}}]}),angular.module('mgcrea.ngStrap.button',[]).provider('$button',function(){var e=this.defaults={activeClass:'active',toggleEvent:'click'};this.$get=function(){return{defaults:e}}}).directive('bsCheckboxGroup',function(){return{restrict:'A',require:'ngModel',compile:function(e,t){e.attr('data-toggle','buttons'),e.removeAttr('ng-model');var n=e[0].querySelectorAll('input[type="checkbox"]');angular.forEach(n,function(e){var n=angular.element(e);n.attr('bs-checkbox',''),n.attr('ng-model',t.ngModel+'.'+n.attr('value'))})}}}).directive('bsCheckbox',['$button','$$rAF',function(e,t){var n=e.defaults,a=/^(true|false|\d+)$/;return{restrict:'A',require:'ngModel',link:function(e,o,i,r){var s=n,l='INPUT'===o[0].nodeName,u=l?o.parent():o,c=angular.isDefined(i.trueValue)?i.trueValue:!0;a.test(i.trueValue)&&(c=e.$eval(i.trueValue));var d=angular.isDefined(i.falseValue)?i.falseValue:!1;a.test(i.falseValue)&&(d=e.$eval(i.falseValue));var f='boolean'!=typeof c||'boolean'!=typeof d;f&&(r.$parsers.push(function(e){return e?c:d}),r.$formatters.push(function(e){return angular.equals(e,c)}),e.$watch(i.ngModel,function(e,t){r.$render()})),r.$render=function(){var e=angular.equals(r.$modelValue,c);t(function(){l&&(o[0].checked=e),u.toggleClass(s.activeClass,e)})},o.bind(s.toggleEvent,function(){e.$apply(function(){l||r.$setViewValue(!u.hasClass('active')),f||r.$render()})})}}}]).directive('bsRadioGroup',function(){return{restrict:'A',require:'ngModel',compile:function(e,t){e.attr('data-toggle','buttons'),e.removeAttr('ng-model');var n=e[0].querySelectorAll('input[type="radio"]');angular.forEach(n,function(e){angular.element(e).attr('bs-radio',''),angular.element(e).attr('ng-model',t.ngModel)})}}}).directive('bsRadio',['$button','$$rAF',function(e,t){var n=e.defaults,a=/^(true|false|\d+)$/;return{restrict:'A',require:'ngModel',link:function(e,o,i,r){var s,l=n,u='INPUT'===o[0].nodeName,c=u?o.parent():o;i.$observe('value',function(t){s='boolean'!=typeof t&&a.test(t)?e.$eval(t):t,r.$render()}),r.$render=function(){var e=angular.equals(r.$modelValue,s);t(function(){u&&(o[0].checked=e),c.toggleClass(l.activeClass,e)})},o.bind(l.toggleEvent,function(){e.$apply(function(){r.$setViewValue(s),r.$render()})})}}}]),angular.module('mgcrea.ngStrap.collapse',[]).provider('$collapse',function(){var e=this.defaults={animation:'am-collapse',disallowToggle:!1,activeClass:'in',startCollapsed:!1,allowMultiple:!1},t=this.controller=function(t,n,a){function o(e){for(var t=l.$targets.$active,n=0;n<t.length;n++)e<t[n]&&(t[n]=t[n]-1),t[n]===l.$targets.length&&(t[n]=l.$targets.length-1)}function i(e){var t=l.$targets.$active;return-1!==t.indexOf(e)}function r(e){var t=l.$targets.$active.indexOf(e);-1!==t&&l.$targets.$active.splice(t,1)}function s(e){l.$options.allowMultiple||l.$targets.$active.splice(0,1),-1===l.$targets.$active.indexOf(e)&&l.$targets.$active.push(e)}var l=this;l.$options=angular.copy(e),angular.forEach(['animation','disallowToggle','activeClass','startCollapsed','allowMultiple'],function(e){angular.isDefined(a[e])&&(l.$options[e]=a[e])});var u=/^(false|0|)$/i;angular.forEach(['disallowToggle','startCollapsed','allowMultiple'],function(e){angular.isDefined(a[e])&&u.test(a[e])&&(l.$options[e]=!1)}),l.$toggles=[],l.$targets=[],l.$viewChangeListeners=[],l.$registerToggle=function(e){l.$toggles.push(e)},l.$registerTarget=function(e){l.$targets.push(e)},l.$unregisterToggle=function(e){var t=l.$toggles.indexOf(e);l.$toggles.splice(t,1)},l.$unregisterTarget=function(e){var t=l.$targets.indexOf(e);l.$targets.splice(t,1),l.$options.allowMultiple&&r(e),o(t),l.$viewChangeListeners.forEach(function(e){e()})},l.$targets.$active=l.$options.startCollapsed?[]:[0],l.$setActive=t.$setActive=function(e){angular.isArray(e)?l.$targets.$active=e:!l.$options.disallowToggle&&i(e)?r(e):s(e),l.$viewChangeListeners.forEach(function(e){e()})},l.$activeIndexes=function(){return l.$options.allowMultiple?l.$targets.$active:1===l.$targets.$active.length?l.$targets.$active[0]:-1}};this.$get=function(){var n={};return n.defaults=e,n.controller=t,n}}).directive('bsCollapse',['$window','$animate','$collapse',function(e,t,n){return{require:['?ngModel','bsCollapse'],controller:['$scope','$element','$attrs',n.controller],link:function(e,t,n,a){var o=a[0],i=a[1];o&&(i.$viewChangeListeners.push(function(){o.$setViewValue(i.$activeIndexes())}),o.$formatters.push(function(e){if(angular.isArray(e))i.$setActive(e);else{var t=i.$activeIndexes();angular.isArray(t)?-1===t.indexOf(1*e)&&i.$setActive(1*e):t!==1*e&&i.$setActive(1*e)}return e}))}}}]).directive('bsCollapseToggle',function(){return{require:['^?ngModel','^bsCollapse'],link:function(e,t,n,a){var o=a[1];t.attr('data-toggle','collapse'),o.$registerToggle(t),e.$on('$destroy',function(){o.$unregisterToggle(t)}),t.on('click',function(){if(!n.disabled){var a=n.bsCollapseToggle&&'bs-collapse-toggle'!==n.bsCollapseToggle?n.bsCollapseToggle:o.$toggles.indexOf(t);o.$setActive(1*a),e.$apply()}})}}}).directive('bsCollapseTarget',['$animate',function(e){return{require:['^?ngModel','^bsCollapse'],link:function(t,n,a,o){function i(){var t=r.$targets.indexOf(n),a=r.$activeIndexes(),o='removeClass';angular.isArray(a)?-1!==a.indexOf(t)&&(o='addClass'):t===a&&(o='addClass'),e[o](n,r.$options.activeClass)}var r=o[1];n.addClass('collapse'),r.$options.animation&&n.addClass(r.$options.animation),r.$registerTarget(n),t.$on('$destroy',function(){r.$unregisterTarget(n)}),r.$viewChangeListeners.push(function(){i()}),i()}}}]),angular.module('mgcrea.ngStrap.aside',['mgcrea.ngStrap.modal']).provider('$aside',function(){var e=this.defaults={animation:'am-fade-and-slide-right',prefixClass:'aside',prefixEvent:'aside',placement:'right',templateUrl:'aside/aside.tpl.html',contentTemplate:!1,container:!1,element:null,backdrop:!0,keyboard:!0,html:!1,show:!0};this.$get=['$modal',function(t){function n(n){var a={},o=angular.extend({},e,n);return a=t(o)}return n}]}).directive('bsAside',['$window','$sce','$aside',function(e,t,n){return{restrict:'EAC',scope:!0,link:function(e,a,o,i){var r={scope:e,element:a,show:!1};angular.forEach(['template','templateUrl','controller','controllerAs','contentTemplate','placement','backdrop','keyboard','html','container','animation'],function(e){angular.isDefined(o[e])&&(r[e]=o[e])});var s=/^(false|0|)$/i;angular.forEach(['backdrop','keyboard','html','container'],function(e){angular.isDefined(o[e])&&s.test(o[e])&&(r[e]=!1)}),angular.forEach(['onBeforeShow','onShow','onBeforeHide','onHide'],function(t){var n='bs'+t.charAt(0).toUpperCase()+t.slice(1);angular.isDefined(o[n])&&(r[t]=e.$eval(o[n]))}),angular.forEach(['title','content'],function(n){o[n]&&o.$observe(n,function(a,o){e[n]=t.trustAsHtml(a)})}),o.bsAside&&e.$watch(o.bsAside,function(t,n){angular.isObject(t)?angular.extend(e,t):e.content=t},!0);var l=n(r);a.on(o.trigger||'click',l.toggle),e.$on('$destroy',function(){l&&l.destroy(),r=null,l=null})}}}]),angular.module('mgcrea.ngStrap.alert',['mgcrea.ngStrap.modal']).provider('$alert',function(){var e=this.defaults={animation:'am-fade',prefixClass:'alert',prefixEvent:'alert',placement:null,templateUrl:'alert/alert.tpl.html',container:!1,element:null,backdrop:!1,keyboard:!0,show:!0,duration:!1,type:!1,dismissable:!0};this.$get=['$modal','$timeout',function(t,n){function a(a){var o={},i=angular.extend({},e,a);o=t(i),o.$scope.dismissable=!!i.dismissable,i.type&&(o.$scope.type=i.type);var r=o.show;return i.duration&&(o.show=function(){r(),n(function(){o.hide()},1e3*i.duration)}),o}return a}]}).directive('bsAlert',['$window','$sce','$alert',function(e,t,n){return{restrict:'EAC',scope:!0,link:function(e,a,o,i){var r={scope:e,element:a,show:!1};angular.forEach(['template','templateUrl','controller','controllerAs','placement','keyboard','html','container','animation','duration','dismissable'],function(e){angular.isDefined(o[e])&&(r[e]=o[e])});var s=/^(false|0|)$/i;angular.forEach(['keyboard','html','container','dismissable'],function(e){angular.isDefined(o[e])&&s.test(o[e])&&(r[e]=!1)}),angular.forEach(['onBeforeShow','onShow','onBeforeHide','onHide'],function(t){var n='bs'+t.charAt(0).toUpperCase()+t.slice(1);angular.isDefined(o[n])&&(r[t]=e.$eval(o[n]))}),e.hasOwnProperty('title')||(e.title=''),angular.forEach(['title','content','type'],function(n){o[n]&&o.$observe(n,function(a,o){e[n]=t.trustAsHtml(a)})}),o.bsAlert&&e.$watch(o.bsAlert,function(t,n){angular.isObject(t)?angular.extend(e,t):e.content=t},!0);var l=n(r);a.on(o.trigger||'click',l.toggle),e.$on('$destroy',function(){l&&l.destroy(),r=null,l=null})}}}]),angular.module('mgcrea.ngStrap.affix',['mgcrea.ngStrap.helpers.dimensions','mgcrea.ngStrap.helpers.debounce']).provider('$affix',function(){var e=this.defaults={offsetTop:'auto',inlineStyles:!0};this.$get=['$window','debounce','dimensions',function(t,n,a){function o(o,s){function l(e,t,n){var a=u(),o=c();return v>=a?'top':null!==e&&a+e<=t.top?'middle':null!==w&&t.top+n+$>=o-w?'bottom':'middle'}function u(){return p[0]===t?t.pageYOffset:p[0].scrollTop}function c(){return p[0]===t?t.document.body.scrollHeight:p[0].scrollHeight}var d={},f=angular.extend({},e,s),p=f.target,g='affix affix-top affix-bottom',m=!1,$=0,h=0,v=0,w=0,y=null,b=null,D=o.parent();if(f.offsetParent)if(f.offsetParent.match(/^\d+$/))for(var S=0;S<1*f.offsetParent-1;S++)D=D.parent();else D=angular.element(f.offsetParent);return d.init=function(){this.$parseOffsets(),h=a.offset(o[0]).top+$,m=!o[0].style.width,p.on('scroll',this.checkPosition),p.on('click',this.checkPositionWithEventLoop),r.on('resize',this.$debouncedOnResize),this.checkPosition(),this.checkPositionWithEventLoop()},d.destroy=function(){p.off('scroll',this.checkPosition),p.off('click',this.checkPositionWithEventLoop),r.off('resize',this.$debouncedOnResize)},d.checkPositionWithEventLoop=function(){setTimeout(d.checkPosition,1)},d.checkPosition=function(){var e=u(),t=a.offset(o[0]),n=a.height(o[0]),r=l(b,t,n);y!==r&&(y=r,'top'===r?(b=null,m&&o.css('width',''),f.inlineStyles&&(o.css('position',f.offsetParent?'':'relative'),o.css('top',''))):'bottom'===r?(b=f.offsetUnpin?-(1*f.offsetUnpin):t.top-e,m&&o.css('width',''),f.inlineStyles&&(o.css('position',f.offsetParent?'':'relative'),o.css('top',f.offsetParent?'':i[0].offsetHeight-w-n-h+'px'))):(b=null,m&&o.css('width',o[0].offsetWidth+'px'),f.inlineStyles&&(o.css('position','fixed'),o.css('top',$+'px'))),o.removeClass(g).addClass('affix'+('middle'!==r?'-'+r:'')))},d.$onResize=function(){d.$parseOffsets(),d.checkPosition()},d.$debouncedOnResize=n(d.$onResize,50),d.$parseOffsets=function(){var e=o.css('position');f.inlineStyles&&o.css('position',f.offsetParent?'':'relative'),f.offsetTop&&('auto'===f.offsetTop&&(f.offsetTop='+0'),f.offsetTop.match(/^[-+]\d+$/)?($=1*-f.offsetTop,v=f.offsetParent?a.offset(D[0]).top+1*f.offsetTop:a.offset(o[0]).top-a.css(o[0],'marginTop',!0)+1*f.offsetTop):v=1*f.offsetTop),f.offsetBottom&&(w=f.offsetParent&&f.offsetBottom.match(/^[-+]\d+$/)?c()-(a.offset(D[0]).top+a.height(D[0]))+1*f.offsetBottom+1:1*f.offsetBottom),f.inlineStyles&&o.css('position',e)},d.init(),d}var i=angular.element(t.document.body),r=angular.element(t);return o}]}).directive('bsAffix',['$affix','$window',function(e,t){return{restrict:'EAC',require:'^?bsAffixTarget',link:function(n,a,o,i){var r={scope:n,target:i?i.$element:angular.element(t)};angular.forEach(['offsetTop','offsetBottom','offsetParent','offsetUnpin','inlineStyles'],function(e){if(angular.isDefined(o[e])){var t=o[e];/true/i.test(t)&&(t=!0),/false/i.test(t)&&(t=!1),r[e]=t}});var s=e(a,r);n.$on('$destroy',function(){s&&s.destroy(),r=null,s=null})}}}]).directive('bsAffixTarget',function(){return{controller:['$element',function(e){this.$element=e}]}}),angular.module('mgcrea.ngStrap',['mgcrea.ngStrap.modal','mgcrea.ngStrap.aside','mgcrea.ngStrap.alert','mgcrea.ngStrap.button','mgcrea.ngStrap.select','mgcrea.ngStrap.datepicker','mgcrea.ngStrap.timepicker','mgcrea.ngStrap.navbar','mgcrea.ngStrap.tooltip','mgcrea.ngStrap.popover','mgcrea.ngStrap.dropdown','mgcrea.ngStrap.typeahead','mgcrea.ngStrap.scrollspy','mgcrea.ngStrap.affix','mgcrea.ngStrap.tab','mgcrea.ngStrap.collapse'])}(window,document);
//# sourceMappingURL=angular-strap.min.js.map

/**
 * angular-strap
 * @version v2.3.9 - 2016-06-10
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com> (https://github.com/mgcrea)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function(window, document, undefined) {
  'use strict';
  angular.module('mgcrea.ngStrap.alert').run([ '$templateCache', function($templateCache) {
    $templateCache.put('alert/alert.tpl.html', '<div class="alert" ng-class="[type ? \'alert-\' + type : null]"><button type="button" class="close" ng-if="dismissable" ng-click="$hide()">&times;</button> <span ng-if="title"><strong ng-bind="title"></strong>&nbsp;<span ng-bind-html="content"></span></span> <span ng-if="!title" ng-bind-html="content"></span></div>');
  } ]);
  angular.module('mgcrea.ngStrap.aside').run([ '$templateCache', function($templateCache) {
    $templateCache.put('aside/aside.tpl.html', '<div class="aside" tabindex="-1" role="dialog"><div class="aside-dialog"><div class="aside-content"><div class="aside-header" ng-show="title"><button type="button" class="close" ng-click="$hide()">&times;</button><h4 class="aside-title" ng-bind="title"></h4></div><div class="aside-body" ng-bind="content"></div><div class="aside-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>');
  } ]);
  angular.module('mgcrea.ngStrap.datepicker').run([ '$templateCache', function($templateCache) {
    $templateCache.put('datepicker/datepicker.tpl.html', '<div class="dropdown-menu datepicker" ng-class="\'datepicker-mode-\' + $mode" style="max-width: 320px"><table style="table-layout: fixed; height: 100%; width: 100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$selectPane(-1)"><i class="{{$iconLeft}}"></i></button></th><th colspan="{{ rows[0].length - 2 }}"><button tabindex="-1" type="button" class="btn btn-default btn-block text-strong" ng-click="$toggleMode()"><strong style="text-transform: capitalize" ng-bind="title"></strong></button></th><th><button tabindex="-1" type="button" class="btn btn-default pull-right" ng-click="$selectPane(+1)"><i class="{{$iconRight}}"></i></button></th></tr><tr ng-if="showLabels" ng-bind-html="labels"></tr></thead><tbody><tr ng-repeat="(i, row) in rows" height="{{ 100 / rows.length }}%"><td class="text-center" ng-repeat="(j, el) in row"><button tabindex="-1" type="button" class="btn btn-default" style="width: 100%" ng-class="{\'btn-primary\': el.selected, \'btn-info btn-today\': el.isToday && !el.selected}" ng-click="$select(el.date)" ng-disabled="el.disabled"><span ng-class="{\'text-muted\': el.muted}" ng-bind="el.label"></span></button></td></tr></tbody><tfoot><tr><td colspan="{{ rows[0].length }}"><div class="btn-group btn-group-justified" role="group"><div class="btn-group" role="group" ng-if="$hasToday"><button type="button" class="btn btn-default today" ng-click="$setToday()" ng-disabled="isTodayDisabled"><strong style="text-transform: capitalize">Today</strong></button></div><div class="btn-group" role="group" ng-if="$hasClear"><button type="button" class="btn btn-default clear" ng-click="$clear()"><strong style="text-transform: capitalize">Clear</strong></button></div></div></td></tr></tfoot></table></div>');
  } ]);
  angular.module('mgcrea.ngStrap.dropdown').run([ '$templateCache', function($templateCache) {
    $templateCache.put('dropdown/dropdown.tpl.html', '<ul tabindex="-1" class="dropdown-menu" role="menu" ng-show="content && content.length"><li role="presentation" ng-class="{divider: item.divider, active: item.active}" ng-repeat="item in content"><a role="menuitem" tabindex="-1" ng-href="{{item.href}}" ng-if="!item.divider && item.href" target="{{item.target || \'\'}}" ng-bind="item.text"></a> <a role="menuitem" tabindex="-1" href="javascript:void(0)" ng-if="!item.divider && item.click" ng-click="$eval(item.click);$hide()" ng-bind="item.text"></a></li></ul>');
  } ]);
  angular.module('mgcrea.ngStrap.modal').run([ '$templateCache', function($templateCache) {
    $templateCache.put('modal/modal.tpl.html', '<div class="modal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header" ng-show="title"><button type="button" class="close" aria-label="Close" ng-click="$hide()"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" ng-bind="title"></h4></div><div class="modal-body" ng-bind="content"></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>');
  } ]);
  angular.module('mgcrea.ngStrap.popover').run([ '$templateCache', function($templateCache) {
    $templateCache.put('popover/popover.tpl.html', '<div class="popover" tabindex="-1"><div class="arrow"></div><h3 class="popover-title" ng-bind="title" ng-show="title"></h3><div class="popover-content" ng-bind="content"></div></div>');
  } ]);
  angular.module('mgcrea.ngStrap.select').run([ '$templateCache', function($templateCache) {
    $templateCache.put('select/select.tpl.html', '<ul tabindex="-1" class="select dropdown-menu" ng-show="$isVisible()" role="select"><li ng-if="$showAllNoneButtons"><div class="btn-group" style="margin-bottom: 5px; margin-left: 5px"><button type="button" class="btn btn-default btn-xs" ng-click="$selectAll()">{{$allText}}</button> <button type="button" class="btn btn-default btn-xs" ng-click="$selectNone()">{{$noneText}}</button></div></li><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $isActive($index)}"><a style="cursor: default" role="menuitem" tabindex="-1" ng-click="$select($index, $event)"><i class="{{$iconCheckmark}} pull-right" ng-if="$isMultiple && $isActive($index)"></i> <span ng-bind="match.label"></span></a></li></ul>');
  } ]);
  angular.module('mgcrea.ngStrap.timepicker').run([ '$templateCache', function($templateCache) {
    $templateCache.put('timepicker/timepicker.tpl.html', '<div class="dropdown-menu timepicker" style="min-width: 0px;width: auto"><table height="100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 0)"><i class="{{ $iconUp }}"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 1)"><i class="{{ $iconUp }}"></i></button></th><th ng-if="showSeconds">&nbsp;</th><th ng-if="showSeconds"><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 2)"><i class="{{ $iconUp }}"></i></button></th></tr></thead><tbody><tr ng-repeat="(i, row) in rows"><td class="text-center"><button tabindex="-1" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[0].selected}" ng-click="$select(row[0].date, 0)" ng-disabled="row[0].disabled"><span ng-class="{\'text-muted\': row[0].muted}" ng-bind="row[0].label"></span></button></td><td><span ng-bind="i == midIndex ? timeSeparator : \' \'"></span></td><td class="text-center"><button tabindex="-1" ng-if="row[1].date" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[1].selected}" ng-click="$select(row[1].date, 1)" ng-disabled="row[1].disabled"><span ng-class="{\'text-muted\': row[1].muted}" ng-bind="row[1].label"></span></button></td><td ng-if="showSeconds"><span ng-bind="i == midIndex ? timeSeparator : \' \'"></span></td><td ng-if="showSeconds" class="text-center"><button tabindex="-1" ng-if="row[2].date" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[2].selected}" ng-click="$select(row[2].date, 2)" ng-disabled="row[2].disabled"><span ng-class="{\'text-muted\': row[2].muted}" ng-bind="row[2].label"></span></button></td><td ng-if="showAM">&nbsp;</td><td ng-if="showAM"><button tabindex="-1" ng-show="i == midIndex - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !!isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">AM</button> <button tabindex="-1" ng-show="i == midIndex + 1 - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">PM</button></td></tr></tbody><tfoot><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 0)"><i class="{{ $iconDown }}"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 1)"><i class="{{ $iconDown }}"></i></button></th><th ng-if="showSeconds">&nbsp;</th><th ng-if="showSeconds"><button ng-if="showSeconds" tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 2)"><i class="{{ $iconDown }}"></i></button></th></tr></tfoot></table></div>');
  } ]);
  angular.module('mgcrea.ngStrap.tooltip').run([ '$templateCache', function($templateCache) {
    $templateCache.put('tooltip/tooltip.tpl.html', '<div class="tooltip in" ng-show="title"><div class="tooltip-arrow"></div><div class="tooltip-inner" ng-bind="title"></div></div>');
  } ]);
  angular.module('mgcrea.ngStrap.tab').run([ '$templateCache', function($templateCache) {
    $templateCache.put('tab/tab.tpl.html', '<ul class="nav" ng-class="$navClass" role="tablist"><li role="presentation" ng-repeat="$pane in $panes track by $index" ng-class="[ $isActive($pane, $index) ? $activeClass : \'\', $pane.disabled ? \'disabled\' : \'\' ]"><a role="tab" data-toggle="tab" ng-click="!$pane.disabled && $setActive($pane.name || $index)" data-index="{{ $index }}" ng-bind-html="$pane.title" aria-controls="$pane.title" href=""></a></li></ul><div ng-transclude class="tab-content"></div>');
  } ]);
  angular.module('mgcrea.ngStrap.typeahead').run([ '$templateCache', function($templateCache) {
    $templateCache.put('typeahead/typeahead.tpl.html', '<ul tabindex="-1" class="typeahead dropdown-menu" ng-show="$isVisible()" role="select"><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $index == $activeIndex}"><a role="menuitem" tabindex="-1" ng-click="$select($index, $event)" ng-bind="match.label"></a></li></ul>');
  } ]);
})(window, document);

/**
 * angular-strap
 * @version v2.3.9 - 2016-06-10
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com> (https://github.com/mgcrea)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function(window, document, undefined) {
  'use strict';
  angular.module('mgcrea.ngStrap.alert').run([ '$templateCache', function($templateCache) {
    $templateCache.put('alert/alert.tpl.html', '<div class="alert" ng-class="[type ? \'alert-\' + type : null]"><button type="button" class="close" ng-if="dismissable" ng-click="$hide()">&times;</button> <span ng-if="title"><strong ng-bind="title"></strong>&nbsp;<span ng-bind-html="content"></span></span> <span ng-if="!title" ng-bind-html="content"></span></div>');
  } ]);
  angular.module('mgcrea.ngStrap.aside').run([ '$templateCache', function($templateCache) {
    $templateCache.put('aside/aside.tpl.html', '<div class="aside" tabindex="-1" role="dialog"><div class="aside-dialog"><div class="aside-content"><div class="aside-header" ng-show="title"><button type="button" class="close" ng-click="$hide()">&times;</button><h4 class="aside-title" ng-bind="title"></h4></div><div class="aside-body" ng-bind="content"></div><div class="aside-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>');
  } ]);
  angular.module('mgcrea.ngStrap.datepicker').run([ '$templateCache', function($templateCache) {
    $templateCache.put('datepicker/datepicker.tpl.html', '<div class="dropdown-menu datepicker" ng-class="\'datepicker-mode-\' + $mode" style="max-width: 320px"><table style="table-layout: fixed; height: 100%; width: 100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$selectPane(-1)"><i class="{{$iconLeft}}"></i></button></th><th colspan="{{ rows[0].length - 2 }}"><button tabindex="-1" type="button" class="btn btn-default btn-block text-strong" ng-click="$toggleMode()"><strong style="text-transform: capitalize" ng-bind="title"></strong></button></th><th><button tabindex="-1" type="button" class="btn btn-default pull-right" ng-click="$selectPane(+1)"><i class="{{$iconRight}}"></i></button></th></tr><tr ng-if="showLabels" ng-bind-html="labels"></tr></thead><tbody><tr ng-repeat="(i, row) in rows" height="{{ 100 / rows.length }}%"><td class="text-center" ng-repeat="(j, el) in row"><button tabindex="-1" type="button" class="btn btn-default" style="width: 100%" ng-class="{\'btn-primary\': el.selected, \'btn-info btn-today\': el.isToday && !el.selected}" ng-click="$select(el.date)" ng-disabled="el.disabled"><span ng-class="{\'text-muted\': el.muted}" ng-bind="el.label"></span></button></td></tr></tbody><tfoot><tr><td colspan="{{ rows[0].length }}"><div class="btn-group btn-group-justified" role="group"><div class="btn-group" role="group" ng-if="$hasToday"><button type="button" class="btn btn-default today" ng-click="$setToday()" ng-disabled="isTodayDisabled"><strong style="text-transform: capitalize">Today</strong></button></div><div class="btn-group" role="group" ng-if="$hasClear"><button type="button" class="btn btn-default clear" ng-click="$clear()"><strong style="text-transform: capitalize">Clear</strong></button></div></div></td></tr></tfoot></table></div>');
  } ]);
  angular.module('mgcrea.ngStrap.dropdown').run([ '$templateCache', function($templateCache) {
    $templateCache.put('dropdown/dropdown.tpl.html', '<ul tabindex="-1" class="dropdown-menu" role="menu" ng-show="content && content.length"><li role="presentation" ng-class="{divider: item.divider, active: item.active}" ng-repeat="item in content"><a role="menuitem" tabindex="-1" ng-href="{{item.href}}" ng-if="!item.divider && item.href" target="{{item.target || \'\'}}" ng-bind="item.text"></a> <a role="menuitem" tabindex="-1" href="javascript:void(0)" ng-if="!item.divider && item.click" ng-click="$eval(item.click);$hide()" ng-bind="item.text"></a></li></ul>');
  } ]);
  angular.module('mgcrea.ngStrap.modal').run([ '$templateCache', function($templateCache) {
    $templateCache.put('modal/modal.tpl.html', '<div class="modal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header" ng-show="title"><button type="button" class="close" aria-label="Close" ng-click="$hide()"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" ng-bind="title"></h4></div><div class="modal-body" ng-bind="content"></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>');
  } ]);
  angular.module('mgcrea.ngStrap.popover').run([ '$templateCache', function($templateCache) {
    $templateCache.put('popover/popover.tpl.html', '<div class="popover" tabindex="-1"><div class="arrow"></div><h3 class="popover-title" ng-bind="title" ng-show="title"></h3><div class="popover-content" ng-bind="content"></div></div>');
  } ]);
  angular.module('mgcrea.ngStrap.select').run([ '$templateCache', function($templateCache) {
    $templateCache.put('select/select.tpl.html', '<ul tabindex="-1" class="select dropdown-menu" ng-show="$isVisible()" role="select"><li ng-if="$showAllNoneButtons"><div class="btn-group" style="margin-bottom: 5px; margin-left: 5px"><button type="button" class="btn btn-default btn-xs" ng-click="$selectAll()">{{$allText}}</button> <button type="button" class="btn btn-default btn-xs" ng-click="$selectNone()">{{$noneText}}</button></div></li><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $isActive($index)}"><a style="cursor: default" role="menuitem" tabindex="-1" ng-click="$select($index, $event)"><i class="{{$iconCheckmark}} pull-right" ng-if="$isMultiple && $isActive($index)"></i> <span ng-bind="match.label"></span></a></li></ul>');
  } ]);
  angular.module('mgcrea.ngStrap.timepicker').run([ '$templateCache', function($templateCache) {
    $templateCache.put('timepicker/timepicker.tpl.html', '<div class="dropdown-menu timepicker" style="min-width: 0px;width: auto"><table height="100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 0)"><i class="{{ $iconUp }}"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 1)"><i class="{{ $iconUp }}"></i></button></th><th ng-if="showSeconds">&nbsp;</th><th ng-if="showSeconds"><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 2)"><i class="{{ $iconUp }}"></i></button></th></tr></thead><tbody><tr ng-repeat="(i, row) in rows"><td class="text-center"><button tabindex="-1" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[0].selected}" ng-click="$select(row[0].date, 0)" ng-disabled="row[0].disabled"><span ng-class="{\'text-muted\': row[0].muted}" ng-bind="row[0].label"></span></button></td><td><span ng-bind="i == midIndex ? timeSeparator : \' \'"></span></td><td class="text-center"><button tabindex="-1" ng-if="row[1].date" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[1].selected}" ng-click="$select(row[1].date, 1)" ng-disabled="row[1].disabled"><span ng-class="{\'text-muted\': row[1].muted}" ng-bind="row[1].label"></span></button></td><td ng-if="showSeconds"><span ng-bind="i == midIndex ? timeSeparator : \' \'"></span></td><td ng-if="showSeconds" class="text-center"><button tabindex="-1" ng-if="row[2].date" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[2].selected}" ng-click="$select(row[2].date, 2)" ng-disabled="row[2].disabled"><span ng-class="{\'text-muted\': row[2].muted}" ng-bind="row[2].label"></span></button></td><td ng-if="showAM">&nbsp;</td><td ng-if="showAM"><button tabindex="-1" ng-show="i == midIndex - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !!isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">AM</button> <button tabindex="-1" ng-show="i == midIndex + 1 - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">PM</button></td></tr></tbody><tfoot><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 0)"><i class="{{ $iconDown }}"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 1)"><i class="{{ $iconDown }}"></i></button></th><th ng-if="showSeconds">&nbsp;</th><th ng-if="showSeconds"><button ng-if="showSeconds" tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 2)"><i class="{{ $iconDown }}"></i></button></th></tr></tfoot></table></div>');
  } ]);
  angular.module('mgcrea.ngStrap.tooltip').run([ '$templateCache', function($templateCache) {
    $templateCache.put('tooltip/tooltip.tpl.html', '<div class="tooltip in" ng-show="title"><div class="tooltip-arrow"></div><div class="tooltip-inner" ng-bind="title"></div></div>');
  } ]);
  angular.module('mgcrea.ngStrap.tab').run([ '$templateCache', function($templateCache) {
    $templateCache.put('tab/tab.tpl.html', '<ul class="nav" ng-class="$navClass" role="tablist"><li role="presentation" ng-repeat="$pane in $panes track by $index" ng-class="[ $isActive($pane, $index) ? $activeClass : \'\', $pane.disabled ? \'disabled\' : \'\' ]"><a role="tab" data-toggle="tab" ng-click="!$pane.disabled && $setActive($pane.name || $index)" data-index="{{ $index }}" ng-bind-html="$pane.title" aria-controls="$pane.title" href=""></a></li></ul><div ng-transclude class="tab-content"></div>');
  } ]);
  angular.module('mgcrea.ngStrap.typeahead').run([ '$templateCache', function($templateCache) {
    $templateCache.put('typeahead/typeahead.tpl.html', '<ul tabindex="-1" class="typeahead dropdown-menu" ng-show="$isVisible()" role="select"><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $index == $activeIndex}"><a role="menuitem" tabindex="-1" ng-click="$select($index, $event)" ng-bind="match.label"></a></li></ul>');
  } ]);
})(window, document);

/*
 AngularJS v1.5.6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(S,B){'use strict';function Aa(a,b,c){if(!a)throw Ma("areq",b||"?",c||"required");return a}function Ba(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;ca(a)&&(a=a.join(" "));ca(b)&&(b=b.join(" "));return a+" "+b}function Na(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function Y(a,b,c){var d="";a=ca(a)?a:a&&P(a)&&a.length?a.split(/\s+/):[];s(a,function(a,l){a&&0<a.length&&(d+=0<l?" ":"",d+=c?b+a:a+b)});return d}function Oa(a){if(a instanceof E)switch(a.length){case 0:return a;
case 1:if(1===a[0].nodeType)return a;break;default:return E(da(a))}if(1===a.nodeType)return E(a)}function da(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Pa(a,b,c){s(b,function(b){a.addClass(b,c)})}function Qa(a,b,c){s(b,function(b){a.removeClass(b,c)})}function V(a){return function(b,c){c.addClass&&(Pa(a,b,c.addClass),c.addClass=null);c.removeClass&&(Qa(a,b,c.removeClass),c.removeClass=null)}}function pa(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
R;a.domOperation=function(){a.$$domOperationFired=!0;b();b=R};a.$$prepared=!0}return a}function ha(a,b){Ca(a,b);Da(a,b)}function Ca(a,b){b.from&&(a.css(b.from),b.from=null)}function Da(a,b){b.to&&(a.css(b.to),b.to=null)}function W(a,b,c){var d=b.options||{};c=c.options||{};var e=(d.addClass||"")+" "+(c.addClass||""),l=(d.removeClass||"")+" "+(c.removeClass||"");a=Ra(a.attr("class"),e,l);c.preparationClasses&&(d.preparationClasses=Z(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
e=d.domOperation!==R?d.domOperation:null;Ea(d,c);e&&(d.domOperation=e);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Ra(a,b,c){function d(a){P(a)&&(a=a.split(" "));var b={};s(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);s(b,function(a,b){e[b]=1});c=d(c);s(c,function(a,b){e[b]=1===e[b]?null:-1});var l={addClass:"",removeClass:""};s(e,function(b,c){var d,e;1===b?(d="addClass",
e=!a[c]):-1===b&&(d="removeClass",e=a[c]);e&&(l[d].length&&(l[d]+=" "),l[d]+=c)});return l}function z(a){return a instanceof B.element?a[0]:a}function Sa(a,b,c){var d="";b&&(d=Y(b,"ng-",!0));c.addClass&&(d=Z(d,Y(c.addClass,"-add")));c.removeClass&&(d=Z(d,Y(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function qa(a,b){var c=b?"-"+b+"s":"";la(a,[ma,c]);return[ma,c]}function ta(a,b){var c=b?"paused":"",d=$+"PlayState";la(a,[d,c]);return[d,c]}function la(a,b){a.style[b[0]]=
b[1]}function Z(a,b){return a?b?a+" "+b:a:b}function Fa(a,b,c){var d=Object.create(null),e=a.getComputedStyle(b)||{};s(c,function(a,b){var c=e[a];if(c){var k=c.charAt(0);if("-"===k||"+"===k||0<=k)c=Ta(c);0===c&&(c=null);d[b]=c}});return d}function Ta(a){var b=0;a=a.split(/\s*,\s*/);s(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function ua(a){return 0===a||null!=a}function Ga(a,b){var c=T,d=a+"s";b?c+="Duration":d+=" linear all";
return[c,d]}function Ha(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ia(a,b,c){s(c,function(c){a[c]=ea(a[c])?a[c]:b.style.getPropertyValue(c)})}var R=B.noop,Ja=B.copy,Ea=B.extend,E=B.element,s=B.forEach,ca=B.isArray,P=B.isString,va=B.isObject,O=B.isUndefined,ea=B.isDefined,Ka=B.isFunction,wa=B.isElement,T,xa,$,ya;O(S.ontransitionend)&&
ea(S.onwebkittransitionend)?(T="WebkitTransition",xa="webkitTransitionEnd transitionend"):(T="transition",xa="transitionend");O(S.onanimationend)&&ea(S.onwebkitanimationend)?($="WebkitAnimation",ya="webkitAnimationEnd animationend"):($="animation",ya="animationend");var ra=$+"Delay",za=$+"Duration",ma=T+"Delay",La=T+"Duration",Ma=B.$$minErr("ng"),Ua={transitionDuration:La,transitionDelay:ma,transitionProperty:T+"Property",animationDuration:za,animationDelay:ra,animationIterationCount:$+"IterationCount"},
Va={transitionDuration:La,transitionDelay:ma,animationDuration:za,animationDelay:ra};B.module("ngAnimate",[]).directive("ngAnimateSwap",["$animate","$rootScope",function(a,b){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,d,e,l,m){var I,k;b.$watchCollection(e.ngAnimateSwap||e["for"],function(e){I&&a.leave(I);k&&(k.$destroy(),k=null);if(e||0===e)k=b.$new(),m(k,function(b){I=b;a.enter(b,null,d)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,
c,d){function e(a){c.data("$$ngAnimateChildren","on"===a||"true"===a)}var l=d.ngAnimateChildren;B.isString(l)&&0===l.length?c.data("$$ngAnimateChildren",!0):(e(a(l)(b)),d.$observe("ngAnimateChildren",e))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),m=0;m<b.length;m++)b[m]();e||a(function(){e||c()})}}var d,e;d=b.queue=[];b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=null;b();c()})};return b}]).provider("$$animateQueue",
["$animateProvider",function(a){function b(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);s(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){return d[a]})}}function d(a,b,c,d){return l[a].some(function(a){return a(b,c,d)})}function e(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var l=this.rules={skip:[],cancel:[],join:[]};l.join.push(function(a,b,c){return!b.structural&&e(b)});l.skip.push(function(a,
b,c){return!b.structural&&!e(b)});l.skip.push(function(a,b,c){return"leave"==c.event&&b.structural});l.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});l.cancel.push(function(a,b,c){return c.structural&&b.structural});l.cancel.push(function(a,b,c){return 2===c.state&&b.structural});l.cancel.push(function(a,b,d){if(d.structural)return!1;a=b.addClass;b=b.removeClass;var e=d.addClass;d=d.removeClass;return O(a)&&O(b)||O(e)&&O(d)?!1:c(a,d)||c(b,e)});this.$get=["$$rAF","$rootScope",
"$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(b,c,k,l,w,Wa,Q,u,F,n){function K(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function J(a,b,c){var f=z(b),d=z(a),L=[];(a=h[c])&&s(a,function(a){y.call(a.node,f)?L.push(a.callback):"leave"===c&&y.call(a.node,d)&&L.push(a.callback)});return L}function r(a,b,c){var f=da(b);return a.filter(function(a){return!(a.node===f&&(!c||a.callback===c))})}function t(a,
h,x){function r(c,f,d,h){H(function(){var c=J(oa,a,f);c.length?b(function(){s(c,function(b){b(a,d,h)});"close"!==d||a[0].parentNode||sa.off(a)}):"close"!==d||a[0].parentNode||sa.off(a)});c.progress(f,d,h)}function g(b){var c=a,f=p;f.preparationClasses&&(c.removeClass(f.preparationClasses),f.preparationClasses=null);f.activeClasses&&(c.removeClass(f.activeClasses),f.activeClasses=null);D(a,p);ha(a,p);p.domOperation();n.complete(!b)}var p=Ja(x),t,oa;if(a=Oa(a))t=z(a),oa=a.parent();var p=pa(p),n=new Q,
H=K();ca(p.addClass)&&(p.addClass=p.addClass.join(" "));p.addClass&&!P(p.addClass)&&(p.addClass=null);ca(p.removeClass)&&(p.removeClass=p.removeClass.join(" "));p.removeClass&&!P(p.removeClass)&&(p.removeClass=null);p.from&&!va(p.from)&&(p.from=null);p.to&&!va(p.to)&&(p.to=null);if(!t)return g(),n;x=[t.className,p.addClass,p.removeClass].join(" ");if(!Xa(x))return g(),n;var k=0<=["enter","move","leave"].indexOf(h),y=l[0].hidden,u=!f||y||L.get(t);x=!u&&A.get(t)||{};var F=!!x.state;u||F&&1==x.state||
(u=!N(a,oa,h));if(u)return y&&r(n,h,"start"),g(),y&&r(n,h,"close"),n;k&&M(a);y={structural:k,element:a,event:h,addClass:p.addClass,removeClass:p.removeClass,close:g,options:p,runner:n};if(F){if(d("skip",a,y,x)){if(2===x.state)return g(),n;W(a,x,y);return x.runner}if(d("cancel",a,y,x))if(2===x.state)x.runner.end();else if(x.structural)x.close();else return W(a,x,y),x.runner;else if(d("join",a,y,x))if(2===x.state)W(a,y,{});else return Sa(a,k?h:null,p),h=y.event=x.event,p=W(a,x,y),x.runner}else W(a,
y,{});(F=y.structural)||(F="animate"===y.event&&0<Object.keys(y.options.to||{}).length||e(y));if(!F)return g(),ka(a),n;var w=(x.counter||0)+1;y.counter=w;G(a,1,y);c.$$postDigest(function(){var b=A.get(t),c=!b,b=b||{},f=0<(a.parent()||[]).length&&("animate"===b.event||b.structural||e(b));if(c||b.counter!==w||!f){c&&(D(a,p),ha(a,p));if(c||k&&b.event!==h)p.domOperation(),n.end();f||ka(a)}else h=!b.structural&&e(b,!0)?"setClass":b.event,G(a,2),b=Wa(a,h,b.options),n.setHost(b),r(n,h,"start",{}),b.done(function(b){g(!b);
(b=A.get(t))&&b.counter===w&&ka(z(a));r(n,h,"close",{})})});return n}function M(a){a=z(a).querySelectorAll("[data-ng-animate]");s(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=A.get(a);if(c)switch(b){case 2:c.runner.end();case 1:A.remove(a)}})}function ka(a){a=z(a);a.removeAttribute("data-ng-animate");A.remove(a)}function g(a,b){return z(a)===z(b)}function N(a,b,c){c=E(l[0].body);var f=g(a,c)||"HTML"===a[0].nodeName,d=g(a,k),h=!1,r,e=L.get(z(a));(a=E.data(a[0],"$ngAnimatePin"))&&
(b=a);for(b=z(b);b;){d||(d=g(b,k));if(1!==b.nodeType)break;a=A.get(b)||{};if(!h){var n=L.get(b);if(!0===n&&!1!==e){e=!0;break}else!1===n&&(e=!1);h=a.structural}if(O(r)||!0===r)a=E.data(b,"$$ngAnimateChildren"),ea(a)&&(r=a);if(h&&!1===r)break;f||(f=g(b,c));if(f&&d)break;if(!d&&(a=E.data(b,"$ngAnimatePin"))){b=z(a);continue}b=b.parentNode}return(!h||r)&&!0!==e&&d&&f}function G(a,b,c){c=c||{};c.state=b;a=z(a);a.setAttribute("data-ng-animate",b);c=(b=A.get(a))?Ea(b,c):c;A.put(a,c)}var A=new w,L=new w,
f=null,oa=c.$watch(function(){return 0===u.totalPendingRequests},function(a){a&&(oa(),c.$$postDigest(function(){c.$$postDigest(function(){null===f&&(f=!0)})}))}),h={},H=a.classNameFilter(),Xa=H?function(a){return H.test(a)}:function(){return!0},D=V(F),y=S.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&16)},sa={on:function(a,b,c){var f=da(b);h[a]=h[a]||[];h[a].push({node:f,callback:c});E(b).on("$destroy",function(){A.get(f)||sa.off(a,b,c)})},off:function(a,
b,c){if(1!==arguments.length||B.isString(arguments[0])){var f=h[a];f&&(h[a]=1===arguments.length?null:r(f,b,c))}else for(f in b=arguments[0],h)h[f]=r(h[f],b)},pin:function(a,b){Aa(wa(a),"element","not an element");Aa(wa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=c||{};c.domOperation=f;return t(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!f;else if(wa(a)){var d=z(a),h=L.get(d);1===c?b=!h:L.put(d,!b)}else b=f=!!a;return b}};return sa}]}]).provider("$$animation",
["$animateProvider",function(a){var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(a,d,e,l,m,I){function k(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,t=d.parentNode;e.put(d,a);for(var M;t;){if(M=e.get(t)){M.processed||(M=b(M));break}t=t.parentNode}(M||c).children.push(a);return a}var c={children:[]},d,e=new m;for(d=0;d<a.length;d++){var k=a[d];e.put(k.domNode,a[d]={domNode:k.domNode,fn:k.fn,children:[]})}for(d=
0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var e=0,g=[];for(d=0;d<c.length;d++){var n=c[d];0>=a&&(a=e,e=0,b.push(g),g=[]);g.push(n.fn);n.children.forEach(function(a){e++;c.push(a)});a--}g.length&&b.push(g);return b}(c)}var v=[],w=V(a);return function(m,Q,u){function F(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];s(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&
b.push(a)});return b}function n(a){var b=[],c={};s(a,function(a,d){var h=z(a.element),e=0<=["enter","move"].indexOf(a.event),h=a.structural?F(h):[];if(h.length){var g=e?"to":"from";s(h,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][g]={animationID:d,element:E(a)}})}else b.push(a)});var d={},e={};s(c,function(c,g){var r=c.from,n=c.to;if(r&&n){var A=a[r.animationID],t=a[n.animationID],m=r.animationID.toString();if(!e[m]){var k=e[m]={structural:!0,beforeStart:function(){A.beforeStart();
t.beforeStart()},close:function(){A.close();t.close()},classes:K(A.classes,t.classes),from:A,to:t,anchors:[]};k.classes.length?b.push(k):(b.push(A),b.push(t))}e[m].anchors.push({out:r.element,"in":n.element})}else r=r?r.animationID:n.animationID,n=r.toString(),d[n]||(d[n]=!0,b.push(a[r]))});return b}function K(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],d=0;d<a.length;d++){var e=a[d];if("ng-"!==e.substring(0,3))for(var r=0;r<b.length;r++)if(e===b[r]){c.push(e);break}}return c.join(" ")}function J(a){for(var c=
b.length-1;0<=c;c--){var d=b[c];if(e.has(d)&&(d=e.get(d)(a)))return d}}function r(a,b){function c(a){(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function t(){var a=m.data("$$animationRunner");!a||"leave"===Q&&u.$$domOperationFired||a.end()}function M(b){m.off("$destroy",t);m.removeData("$$animationRunner");w(m,u);ha(m,u);u.domOperation();G&&a.removeClass(m,G);m.removeClass("ng-animate");g.complete(!b)}u=pa(u);var ka=0<=["enter","move",
"leave"].indexOf(Q),g=new l({end:function(){M()},cancel:function(){M(!0)}});if(!b.length)return M(),g;m.data("$$animationRunner",g);var N=Ba(m.attr("class"),Ba(u.addClass,u.removeClass)),G=u.tempClasses;G&&(N+=" "+G,u.tempClasses=null);var A;ka&&(A="ng-"+Q+"-prepare",a.addClass(m,A));v.push({element:m,classes:N,event:Q,structural:ka,options:u,beforeStart:function(){m.addClass("ng-animate");G&&a.addClass(m,G);A&&(a.removeClass(m,A),A=null)},close:M});m.on("$destroy",t);if(1<v.length)return g;d.$$postDigest(function(){var a=
[];s(v,function(b){b.element.data("$$animationRunner")?a.push(b):b.close()});v.length=0;var b=n(a),c=[];s(b,function(a){c.push({domNode:z(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var b,c=a.close;if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var d=J(a);d&&(b=d.start)}b?(b=b(),b.done(function(a){c(!a)}),r(a,b)):c()}})});I(k(c))});return g}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ha(),c=Ha();this.$get=["$window","$$jqLite",
"$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,e,l,m,I,k,v,w){function B(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++K))+"-"+a.getAttribute("class")+"-"+b}function Q(r,n,m,k){var g;0<b.count(m)&&(g=c.get(m),g||(n=Y(n,"-stagger"),e.addClass(r,n),g=Fa(a,r,k),g.animationDuration=Math.max(g.animationDuration,0),g.transitionDuration=Math.max(g.transitionDuration,0),e.removeClass(r,n),c.put(m,g)));return g||{}}function u(a){J.push(a);
v.waitUntilQuiet(function(){b.flush();c.flush();for(var a=I(),d=0;d<J.length;d++)J[d](a);J.length=0})}function F(c,e,n){e=b.get(n);e||(e=Fa(a,c,Ua),"infinite"===e.animationIterationCount&&(e.animationIterationCount=1));b.put(n,e);c=e;n=c.animationDelay;e=c.transitionDelay;c.maxDelay=n&&e?Math.max(n,e):n||e;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var n=V(e),K=0,J=[];return function(a,c){function d(){g()}function v(){g(!0)}function g(b){if(!(y||
E&&K)){y=!0;K=!1;f.$$skipPreparationClasses||e.removeClass(a,ga);e.removeClass(a,ea);ta(h,!1);qa(h,!1);s(H,function(a){h.style[a[0]]=""});n(a,f);ha(a,f);Object.keys(J).length&&s(J,function(a,b){a?h.style.setProperty(b,a):h.style.removeProperty(b)});if(f.onDone)f.onDone();fa&&fa.length&&a.off(fa.join(" "),A);var c=a.data("$$animateCss");c&&(m.cancel(c[0].timer),a.removeData("$$animateCss"));O&&O.complete(!b)}}function N(a){q.blockTransition&&qa(h,a);q.blockKeyframeAnimation&&ta(h,!!a)}function G(){O=
new l({end:d,cancel:v});u(R);g();return{$$willAnimate:!1,start:function(){return O},end:d}}function A(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-W,0)>=S&&b>=p&&(E=!0,g())}function L(){function b(){if(!y){N(!1);s(H,function(a){h.style[a[0]]=a[1]});n(a,f);e.addClass(a,ea);if(q.recalculateTimingStyles){na=h.className+" "+ga;ia=B(h,na);C=F(h,na,ia);aa=C.maxDelay;P=Math.max(aa,0);p=C.maxDuration;if(0===p){g();return}q.hasTransitions=
0<C.transitionDuration;q.hasAnimations=0<C.animationDuration}q.applyAnimationDelay&&(aa="boolean"!==typeof f.delay&&ua(f.delay)?parseFloat(f.delay):aa,P=Math.max(aa,0),C.animationDelay=aa,ba=[ra,aa+"s"],H.push(ba),h.style[ba[0]]=ba[1]);S=1E3*P;V=1E3*p;if(f.easing){var d,k=f.easing;q.hasTransitions&&(d=T+"TimingFunction",H.push([d,k]),h.style[d]=k);q.hasAnimations&&(d=$+"TimingFunction",H.push([d,k]),h.style[d]=k)}C.transitionDuration&&fa.push(xa);C.animationDuration&&fa.push(ya);W=Date.now();var L=
S+1.5*V;d=W+L;var k=a.data("$$animateCss")||[],l=!0;if(k.length){var G=k[0];(l=d>G.expectedEndTime)?m.cancel(G.timer):k.push(g)}l&&(L=m(c,L,!1),k[0]={timer:L,expectedEndTime:d},k.push(g),a.data("$$animateCss",k));if(fa.length)a.on(fa.join(" "),A);f.to&&(f.cleanupStyles&&Ia(J,h,Object.keys(f.to)),Da(a,f))}}function c(){var b=a.data("$$animateCss");if(b){for(var d=1;d<b.length;d++)b[d]();a.removeData("$$animateCss")}}if(!y)if(h.parentNode){var d=function(a){if(E)K&&a&&(K=!1,g());else if(K=!a,C.animationDuration)if(a=
ta(h,K),K)H.push(a);else{var b=H,c=b.indexOf(a);0<=a&&b.splice(c,1)}},k=0<da&&(C.transitionDuration&&0===X.transitionDuration||C.animationDuration&&0===X.animationDuration)&&Math.max(X.animationDelay,X.transitionDelay);k?m(b,Math.floor(k*da*1E3),!1):b();x.resume=function(){d(!0)};x.pause=function(){d(!1)}}else g()}var f=c||{};f.$$prepared||(f=pa(Ja(f)));var J={},h=z(a);if(!h||!h.parentNode||!w.enabled())return G();var H=[],I=a.attr("class"),D=Na(f),y,K,E,O,x,P,S,p,V,W,fa=[];if(0===f.duration||!k.animations&&
!k.transitions)return G();var ja=f.event&&ca(f.event)?f.event.join(" "):f.event,Z="",U="";ja&&f.structural?Z=Y(ja,"ng-",!0):ja&&(Z=ja);f.addClass&&(U+=Y(f.addClass,"-add"));f.removeClass&&(U.length&&(U+=" "),U+=Y(f.removeClass,"-remove"));f.applyClassesEarly&&U.length&&n(a,f);var ga=[Z,U].join(" ").trim(),na=I+" "+ga,ea=Y(ga,"-active"),I=D.to&&0<Object.keys(D.to).length;if(!(0<(f.keyframeStyle||"").length||I||ga))return G();var ia,X;0<f.stagger?(D=parseFloat(f.stagger),X={transitionDelay:D,animationDelay:D,
transitionDuration:0,animationDuration:0}):(ia=B(h,na),X=Q(h,ga,ia,Va));f.$$skipPreparationClasses||e.addClass(a,ga);f.transitionStyle&&(D=[T,f.transitionStyle],la(h,D),H.push(D));0<=f.duration&&(D=0<h.style[T].length,D=Ga(f.duration,D),la(h,D),H.push(D));f.keyframeStyle&&(D=[$,f.keyframeStyle],la(h,D),H.push(D));var da=X?0<=f.staggerIndex?f.staggerIndex:b.count(ia):0;(ja=0===da)&&!f.skipBlocking&&qa(h,9999);var C=F(h,na,ia),aa=C.maxDelay;P=Math.max(aa,0);p=C.maxDuration;var q={};q.hasTransitions=
0<C.transitionDuration;q.hasAnimations=0<C.animationDuration;q.hasTransitionAll=q.hasTransitions&&"all"==C.transitionProperty;q.applyTransitionDuration=I&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=f.duration&&q.hasAnimations;q.applyTransitionDelay=ua(f.delay)&&(q.applyTransitionDuration||q.hasTransitions);q.applyAnimationDelay=ua(f.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<U.length;if(q.applyTransitionDuration||q.applyAnimationDuration)p=
f.duration?parseFloat(f.duration):p,q.applyTransitionDuration&&(q.hasTransitions=!0,C.transitionDuration=p,D=0<h.style[T+"Property"].length,H.push(Ga(p,D))),q.applyAnimationDuration&&(q.hasAnimations=!0,C.animationDuration=p,H.push([za,p+"s"]));if(0===p&&!q.recalculateTimingStyles)return G();if(null!=f.delay){var ba;"boolean"!==typeof f.delay&&(ba=parseFloat(f.delay),P=Math.max(ba,0));q.applyTransitionDelay&&H.push([ma,ba+"s"]);q.applyAnimationDelay&&H.push([ra,ba+"s"])}null==f.duration&&0<C.transitionDuration&&
(q.recalculateTimingStyles=q.recalculateTimingStyles||ja);S=1E3*P;V=1E3*p;f.skipBlocking||(q.blockTransition=0<C.transitionDuration,q.blockKeyframeAnimation=0<C.animationDuration&&0<X.animationDelay&&0===X.animationDuration);f.from&&(f.cleanupStyles&&Ia(J,h,Object.keys(f.from)),Ca(a,f));q.blockTransition||q.blockKeyframeAnimation?N(p):f.skipBlocking||qa(h,!1);return{$$willAnimate:!0,end:d,start:function(){if(!y)return x={end:d,cancel:v,resume:null,pause:null},O=new l(x),u(L),O}}}}]}]).provider("$$animateCssDriver",
["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,e,l,m,I){function k(a){return a.replace(/\bng-\S+\b/g,"")}function v(a,b){P(a)&&(a=a.split(" "));P(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function w(c,e,m){function l(a){var b={},c=z(a).getBoundingClientRect();s(["width","height","top","left"],function(a){var d=c[a];
switch(a){case "top":d+=u.scrollTop;break;case "left":d+=u.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function t(){var c=k(m.attr("class")||""),d=v(c,g),c=v(g,c),d=a(w,{to:l(m),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function I(){w.remove();e.removeClass("ng-animate-shim");m.removeClass("ng-animate-shim")}var w=E(z(e).cloneNode(!0)),g=k(w.attr("class")||"");e.addClass("ng-animate-shim");m.addClass("ng-animate-shim");w.addClass("ng-anchor");
F.append(w);var N;c=function(){var c=a(w,{addClass:"ng-anchor-out",delay:!0,from:l(e)});return c.$$willAnimate?c:null}();if(!c&&(N=t(),!N))return I();var G=c||N;return{start:function(){function a(){c&&c.end()}var b,c=G.start();c.done(function(){c=null;if(!N&&(N=t()))return c=N.start(),c.done(function(){c=null;I();b.complete()}),c;I();b.complete()});return b=new d({end:a,cancel:a})}}}function B(a,b,c,e){var k=Q(a,R),m=Q(b,R),l=[];s(e,function(a){(a=w(c,a.out,a["in"]))&&l.push(a)});if(k||m||0!==l.length)return{start:function(){function a(){s(b,
function(a){a.end()})}var b=[];k&&b.push(k.start());m&&b.push(m.start());s(l,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function Q(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=e.domOperation));e.preparationClasses&&(e.event=Z(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!l.animations&&!l.transitions)return R;var u=I[0].body;
c=z(e);var F=E(c.parentNode&&11===c.parentNode.nodeType||u.contains(c)?c:u);V(m);return function(a){return a.from&&a.to?B(a.from,a.to,a.classes,a.anchors):Q(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function e(c){c=ca(c)?c:c.split(" ");for(var d=[],e={},l=0;l<c.length;l++){var w=c[l],s=a.$$registeredAnimations[w];s&&!e[w]&&(d.push(b.get(s)),e[w]=!0)}return d}var l=V(d);return function(a,b,d,v){function w(){v.domOperation();
l(a,v)}function B(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,n,K,f];break;case "addClass":b=[b,n,f];break;case "removeClass":b=[b,K,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Ka(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Ka(a))return a;return R}function z(a,b,d,e,f){var g=[];s(e,function(e){var k=e[f];k&&g.push(function(){var e,f,h=!1,g=function(a){h||(h=!0,(f||R)(a),e.complete(!a))};e=new c({end:function(){g()},cancel:function(){g(!0)}});
f=B(k,a,b,d,function(a){g(!1===a)});return e})});return g}function u(a,b,d,e,f){var g=z(a,b,d,e,f);if(0===g.length){var h,k;"beforeSetClass"===f?(h=z(a,"removeClass",d,e,"beforeRemoveClass"),k=z(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=z(a,"removeClass",d,e,"removeClass"),k=z(a,"addClass",d,e,"addClass"));h&&(g=g.concat(h));k&&(g=g.concat(k))}if(0!==g.length)return function(a){var b=[];g.length&&s(g,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){s(b,function(b){a?
b.cancel():b.end()})}}}var F=!1;3===arguments.length&&va(d)&&(v=d,d=null);v=pa(v);d||(d=a.attr("class")||"",v.addClass&&(d+=" "+v.addClass),v.removeClass&&(d+=" "+v.removeClass));var n=v.addClass,K=v.removeClass,J=e(d),r,t;if(J.length){var M,E;"leave"==b?(E="leave",M="afterLeave"):(E="before"+b.charAt(0).toUpperCase()+b.substr(1),M=b);"enter"!==b&&"move"!==b&&(r=u(a,b,v,J,E));t=u(a,b,v,J,M)}if(r||t){var g;return{$$willAnimate:!0,end:function(){g?g.end():(F=!0,w(),ha(a,v),g=new c,g.complete(!0));return g},
start:function(){function b(c){F=!0;w();ha(a,v);g.complete(c)}if(g)return g;g=new c;var d,e=[];r&&e.push(function(a){d=r(a)});e.length?e.push(function(a){w();a(!0)}):w();t&&e.push(function(a){d=t(a)});g.setHost({end:function(){F||((d||R)(void 0),b(void 0))},cancel:function(){F||((d||R)(!0),b(!0))}});c.chain(e,b);return g}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,
c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),m=d(a.to);if(b||m)return{start:function(){function a(){return function(){s(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());m&&d.push(m.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});return e}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/**
 * AngularGM - Google Maps Directives for AngularJS
 * @version v1.0.2 - 2015-06-17
 * @link http://dylanfprice.github.com/angular-gm
 * @author Dylan Price <the.dylan.price@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
/**
 * @doc module
 * @name angulargm
 *
 * @description
 * Module for embedding Google Maps into AngularJS applications.
 *
 * # Example Plunkers ([fullscreen](http://embed.plnkr.co/PYDYjVuRHaJpdntoJtqL))
 *
 * <iframe style="width: 100%; height: 400px" src="http://embed.plnkr.co/PYDYjVuRHaJpdntoJtqL" frameborder="0" allowfullscreen="allowfullscreen">
 * </iframe>
 *
 * Author: Dylan Price <the.dylan.price@gmail.com>
 */
(function() {
'use strict';

  angular.module('AngularGM', []).

  /**
   * @ngdoc service
   * @name angulargm.service:angulargmDefaults
   *
   * @description
   * Default configuration.
   *
   * To provide your own default config, use the following
   * ```js
   * angular.module('myModule').config(function($provide) {
   *   $provide.decorator('angulargmDefaults', function($delegate) {
   *     return angular.extend($delegate, {
   *       'precision': 3,
   *       'markerConstructor': myCustomMarkerConstructor,
   *       'polylineConstructor': myCustomPolylineConstructor,
   *       'mapOptions': {
   *         center: new google.maps.LatLng(55, 111),
   *         mapTypeId: google.maps.MapTypeId.SATELLITE,
   *         ...
   *       }
   *     });
   *   });
   * });
   * ```
   */
  factory('angulargmDefaults', function() {
    return {
      'precision': 3,
      'markerConstructor': google.maps.Marker,
      'polylineConstructor': google.maps.Polyline,
      'circleConstructor': google.maps.Circle,
      'mapOptions': {
        zoom : 8,
        center : new google.maps.LatLng(46, -120),
        mapTypeId : google.maps.MapTypeId.ROADMAP
      }
    };
  });

})();

(function () {
    'use strict';
    
    angular.module('AngularGM').

  directive('gmCircles', ['$parse', '$compile', '$timeout', '$log', 'angulargmUtils', 'angulargmShape',
    function ($parse, $compile, $timeout, $log, angulargmUtils, angulargmShape) {
     
        var objToLatLng = angulargmUtils.objToLatLng;

        function link(scope, element, attrs, controller) {
            if (!('gmCircleCenter' in attrs)) {
                throw 'gmCircleCenter attribute required';
            }

            var circleOptions = function (object) {
                var latLngObj = scope.gmCircleCenter({ object: object });    
                var center = objToLatLng(latLngObj);
                if (center == null) {
                    return null;
                }
                var circleOptions = scope.gmCircleOptions({ object: object });
                var options = {};
                angular.extend(options, circleOptions, { center: center });
                return options;
            };
                
            angulargmShape.createShapeDirective(
                'circle', scope, attrs, controller, circleOptions
            );
        }
            
        return {
            restrict: 'AE',
            priority: 100,
            scope: {
                gmObjects: '&',
                gmId: '&',
                gmCircleCenter: '&',
                gmCircleOptions: '&'
            },
            require: '^gmMap',
            link: link
        };
    }]);
})();
/**
 * @ngdoc directive
 * @name angulargm.directive:gmInfoWindow
 * @element ANY
 *
 * @description
 * A directive for creating a google.maps.InfoWindow.
 *
 * @param {expression} gm-info-window scope variable to store the
 * [google.maps.InfoWindow](https://developers.google.com/maps/documentation/javascript/reference#InfoWindow)
 * in. Does not have to already exist.
 *
 * @param {expression} gm-info-window-options object in the current scope
 * that is a
 * [google.maps.InfoWindowOptions](https://developers.google.com/maps/documentation/javascript/reference#InfoWindowOptions)
 * object. If unspecified, google maps api defaults will be used.
 *
 * @param {expression} gm-on-*event* an angular expression which evaluates to an
 * event handler. This handler will be attached to the InfoWindow's \*event\*
 * event.  The variable `infoWindow` evaluates to the InfoWindow.  For example:
 * ```html
 * gm-on-closeclick="myCloseclickFn(infoWindow)"
 * ```
 * will call your myCloseclickFn whenever the InfoWindow is clicked closed. You
 * may have multiple `gm-on-*event*` handlers, but only one for each type of
 * event.
 */
(function () {
'use strict';

  angular.module('AngularGM').

  /*
   * Much of this code is taken from the Angular UI team, see:
   * https://github.com/angular-ui/ui-map/blob/master/ui-map.js
   */
  directive('gmInfoWindow',
    ['$parse', '$compile', '$timeout', 'angulargmUtils',
    function ($parse, $compile, $timeout, angulargmUtils) {

    /** aliases */
    var getEventHandlers = angulargmUtils.getEventHandlers;

    function link(scope, element, attrs, controller) {
      var opts = angular.extend({}, scope.$eval(attrs.gmInfoWindowOptions));
      opts.content = element[0];
      var model = $parse(attrs.gmInfoWindow);
      var infoWindow = model(scope);

      if (!infoWindow) {
        infoWindow = new google.maps.InfoWindow(opts);
        model.assign(scope, infoWindow);
      }

      var handlers = getEventHandlers(attrs);

      // set up info window event handlers
      angular.forEach(handlers, function(handler, event) {
        google.maps.event.addListener(infoWindow, event, function() {
          $timeout(function() {
            handler(scope, {
              infoWindow: infoWindow
            });
          });
        });
      });
    }

    return {
      restrict: 'A',
      priority: 100,
      scope: false,
      link: link
    };

  }]);
})();

/**
 * @ngdoc directive
 * @name angulargm.directive:gmMap
 * @element ANY
 *
 * @description
 * A directive for embedding google maps into your app.
 *
 * `gm-map-id` is required. The `gm-center`, `gm-zoom`, `gm-bounds`, and
 * `gm-map-type-id` variables do not have to exist in the current scope--they
 * will be created if necessary. All three have bi-directional association,
 * i.e.  drag or zoom the map and they will update, update them and the map
 * will change.  However, any initial state of these three variables will be
 * ignored.
 *
 * If you need to get a handle on the google.maps.Map object, see
 * {@link angulargm.service:angulargmContainer angulargmContainer}
 *
 * @param {expression} gm-map-id angular expression that evaluates to a unique
 * string id for the map, e.g. `'map_canvas'` or `myMapId` where myMapId is a
 * variable in the current scope. This allows you to have multiple
 * maps/instances of the directive.
 *
 *
 * @param {expression} gm-center center variable in the current scope.  The
 * value will be a google.maps.LatLng object.
 *
 *
 * @param {expression} gm-zoom zoom variable in the current scope.  Value will
 * be an integer.
 *
 *
 * @param {expression} gm-bounds bounds variable in the current scope.  Value
 * will be a google.maps.LatLngBounds object.
 *
 *
 * @param {expression} gm-map-type-id mapTypeId variable in the current scope.
 * Value will be a string.
 *
 *
 * @param {expression} gm-map-options object in the current scope that is a
 * google.maps.MapOptions object. If unspecified, will use the values in
 * angulargmDefaults.mapOptions. {@link angulargm.service:angulargmDefaults angulargmDefaults} is a service, so it is
 * both injectable and overrideable (using $provide.decorator).
 *
 * @param {expression} gm-on-*event* an angular expression which evaluates to
 * an event handler. This handler will be attached to each marker's \*event\*
 * event.  The variables 'map' and 'event' evaluate to the map and the
 * [google.maps.MouseEvent](https://developers.google.com/maps/documentation/javascript/reference#MouseEvent),
 * respectively. The map is always passed in, but the MouseEvent is only passed in if the event emits it.  For example:
 * ```html
 * gm-on-click="myClickFn(map, event)"
 * ```
 * will call your `myClickFn` whenever the map is clicked.  You may have
 * multiple `gm-on-*event*` handlers, but only one for each type of event.  For events that have an underscore in their
 * name, such as 'center_changed', write it as 'gm-on-center-changed'.
 *
 *
 */

/**
 * @ngdoc event
 * @name angulargm.directive:gmMap#gmMapResize
 * @eventOf angulargm.directive:gmMap
 * @eventType listen on current gmMap scope
 *
 * @description Alias for google.maps.event.trigger(map, 'resize')
 *
 * @param {string} mapId Required. The id of your map.
 * @example
 * ```js
 * $scope.$broadcast('gmMapResize', 'myMapId')
 * ```
 */

/**
 * @ngdoc event
 * @name angulargm.directive:gmMap#gmMapIdle
 * @eventOf angulargm.directive:gmMap
 * @eventType emit on current gmMap scope
 *
 * @description Emitted when the map is finished loading (when the map fires
 * the 'idle' event).
 *
 * @param {string} mapId the id of the map which finished loading.
 *
 * @example
 * ```js
 * $scope.$on('gmMapIdle', function(event, mapId) {
 *     if (mapId === 'myMapId') {
 *       ...
 *     }
 * });
 * ```
 */

(function () {
'use strict';

  angular.module('AngularGM').


  directive('gmMap', ['$timeout', 'angulargmUtils', 'debounce', function ($timeout, angulargmUtils, debounce) {

    /** aliases **/
    var getEventHandlers = angulargmUtils.getEventHandlers;

    /** link function **/
    function link(scope, element, attrs, controller) {
      // initialize scope
      if (!angular.isDefined(scope.gmCenter)) {
        scope.center = {};
      }
      if (!angular.isDefined(scope.gmBounds)) {
        scope.bounds = {};
      }

      // Make sure gmMapId is defined
      // Note: redundant check in MapController. Can't hurt.
      if (!angular.isDefined(scope.gmMapId)) {
        throw 'angulargm must have non-empty gmMapId attribute';
      }

      // Check what's defined in attrs
      // Note: this is also redundant since angular will throw an exception if
      // these attributes are not set. I may make these optional in the future
      // (pending angular support).
      var hasCenter = false;
      var hasZoom = false;
      var hasBounds = false;
      var hasMapTypeId = false;

      if (attrs.hasOwnProperty('gmCenter')) {
        hasCenter = true;
      }
      if (attrs.hasOwnProperty('gmZoom')) {
        hasZoom = true;
      }
      if (attrs.hasOwnProperty('gmBounds')) {
        hasBounds = true;
      }
      if (attrs.hasOwnProperty('gmMapTypeId')) {
        hasMapTypeId = true;
      }

      var _updateScope = function() {
        $timeout(function () {
          if (hasCenter || hasZoom || hasBounds || hasMapTypeId) {
            scope.$apply(function (s) {
              if (hasCenter) {
                scope.gmCenter = controller.center;
              }
              if (hasZoom) {
                scope.gmZoom = controller.zoom;
              }
              if (hasBounds) {
                var b = controller.bounds;
                if (b) {
                  scope.gmBounds = b;
                }
              }
              if (hasMapTypeId) {
                scope.gmMapTypeId = controller.mapTypeId;
              }
            });
          }
        });
      };

      var updateScope = debounce(_updateScope, 100);

      // Add event listeners to the map
      controller.addMapListener('drag', updateScope);
      controller.addMapListener('zoom_changed', updateScope);
      controller.addMapListener('center_changed', updateScope);
      controller.addMapListener('bounds_changed', updateScope);
      controller.addMapListener('maptypeid_changed', updateScope);
      controller.addMapListener('resize', updateScope);

      // Add user supplied callbacks
      var map = controller.getMap(attrs.gmMapId);
      var handlers = getEventHandlers(attrs); // map events -> handlers
      angular.forEach(handlers, function(handler, event) {
        controller.addMapListener(event, function(ev) {
          // pass the map in
          var locals = {
            map: map
          };
          // And optionally a MouseEvent object if it exists
          if (ev !== undefined) {
            locals.event = ev;
          }

          $timeout(function() {
            handler(scope.$parent, locals);
          });
        });
      });



      if (hasCenter) {
        scope.$watch('gmCenter', function (newValue, oldValue) {
          var changed = (newValue !== oldValue);
          if (changed && !controller.dragging) {
            var latLng = newValue;
            if (latLng)
              controller.center = latLng;
          }
        }, true);
      }

      if (hasZoom) {
        scope.$watch('gmZoom', function (newValue, oldValue) {
          var ok = (newValue != null && !isNaN(newValue));
          if (ok && newValue !== oldValue) {
            controller.zoom = newValue;
          }
        });
      }

      if (hasBounds) {
        scope.$watch('gmBounds', function(newValue, oldValue) {
          var changed = (newValue !== oldValue);
          if (changed && !controller.dragging) {
            var bounds = newValue;
            if (bounds)
              controller.bounds = bounds;
          }
        });
      }

      if (hasMapTypeId) {
        scope.$watch('gmMapTypeId', function(newValue, oldValue) {
          var changed = (newValue !== oldValue);
          if (changed && newValue) {
            controller.mapTypeId = newValue;
          }
        });
      }

      scope.$on('gmMapResize', function(event, gmMapId) {
        if (scope.gmMapId() === gmMapId) {
          controller.mapTrigger('resize');
        }
      });

      controller.addMapListenerOnce('idle', function() {
        scope.$emit('gmMapIdle', scope.gmMapId());
      });
      controller.mapTrigger('resize');
    }


    return {
      restrict: 'AE',
      priority: 100,
      template: '<div>' +
                  '<div id="" style="width:100%;height:100%;"></div>' +
                  '<div ng-transclude></div>' +
                '</div>',
      transclude: true,
      replace: true,
      scope: {
        gmCenter: '=',
        gmZoom: '=',
        gmBounds: '=',
        gmMapTypeId: '=',
        gmMapOptions: '&',
        gmMapId: '&'
      },
      controller: 'angulargmMapController',
      link: link
    };
  }]);
})();

/**
 * @ngdoc directive
 * @name angulargm.directive:gmMarkers
 * @element ANY
 *
 * @description
 * A directive for adding markers to a `gmMap`. You may have multiple per `gmMap`.
 *
 * To use, you specify an array of custom objects and tell the directive how to
 * extract an id and position from them. A marker will be created for each of
 * your objects. If you assign a new array to your scope variable or change the
 * array's length (i.e. add or remove an object), the markers will also update.
 * The one case where `gmMarkers` can not automatically detect changes to your
 * objects is when you mutate objects in the array. To inform the directive of
 * such changes, see the `gmMarkersUpdate` event below.
 *
 * Only the `gm-objects`, `gm-id` and `gm-position` attributes are required.
 *
 * @param {expression} gm-objects an array of objects in the current scope.
 * These can be any objects you wish to attach to markers, the only requirement
 * is that they have a uniform method of accessing an id and a position.
 *
 * @param {expression} gm-id an angular expression that given an object from
 * `gm-objects`, evaluates to a unique identifier for that object. Your object
 * can be accessed through the variable `object`. See `gm-position` below for
 * an example.
 *
 * @param {expression} gm-position an angular expression that given an object from
 * `gm-objects`, evaluates to an object with lat and lng properties. Your
 * object can be accessed through the variable `object`.  For example, if
 * your controller has
 * ```js
 * ...
 * $scope.myObjects = [
 *   { id: 0, location: { lat: 5, lng: 5} },
 *   { id: 1, location: { lat: 6, lng: 6} }
 * ]
 * ...
 * ```
 * then in the `gm-markers` directive you would put
 * ```js
 * ...
 * gm-objects="myObjects"
 * gm-id="object.id"
 * gm-position="{ lat: object.location.lat, lng: object.location.lng }"
 * ...
 * ```
 *
 *
 * @param {expression} gm-marker-options an angular expression that given
 * an object from `gm-objects`, evaluates to a
 * [google.maps.MarkerOptions](https://developers.google.com/maps/documentation/javascript/reference#MarkerOptions)
 * object.  Your object can be accessed through the variable `object`. If
 * unspecified, google maps api defaults will be used.
 *
 *
 * @param {expression} gm-events a variable in the current scope that is used to
 * simulate events on markers. Setting this variable to an object of the form
 * ```js
 *     [
 *       {
 *         event: 'click',
 *         ids: [id1, ...]
 *       },
 *       ...
 *     ]
 * ```
 * will generate the named events on the markers with the given ids, if a
 * marker with each id exists. Note: when setting the `gm-events` variable, you
 * must set it to a new object for the changes to be detected.  Code like
 * ```js
 * myEvents[0]["ids"] = [0]
 * ```
 * will not work.
 *
 *
 * @param {expression} gm-on-*event* an angular expression which evaluates to
 * an event handler. This handler will be attached to each marker's \*event\*
 * event.  The variables 'object' and 'marker' evaluate to your object and the
 * [google.maps.Marker](https://developers.google.com/maps/documentation/javascript/reference#Marker),
 * respectively. For example:
 * ```html
 * gm-on-click="myClickFn(object, marker)"
 * ```
 * will call your `myClickFn` whenever a marker is clicked.  You may have
 * multiple `gm-on-*event*` handlers, but only one for each type of event.
 * For events that have an underscore in their name, such as
 * 'position_changed', write it as 'gm-on-position-changed'.
 */

/**
 * @ngdoc event
 * @name angulargm.directive:gmMarkers#gmMarkersUpdate
 * @eventOf angulargm.directive:gmMarkers
 * @eventType listen on current gmMarkers scope
 *
 * @description Manually tell the `gmMarkers` directive to update the markers.
 * This is useful to tell the directive when an object from `gm-objects` is
 * mutated--`gmMarkers` can not pick up on such changes automatically.
 *
 * @param {string} objects Not required. The name of the scope variable which
 * holds the objects to update markers for, i.e. what you set `gm-objects` to.
 * It is useful because there may be multiple instances of the `gmMarkers`
 * directive. If not specified, all instances of `gmMarkers` which are child
 * scopes will update their markers.
 *
 * @example
 * ```js
 * $scope.$broadcast('gmMarkersUpdate', 'myObjects');
 * ```
 */

/**
 * @ngdoc event
 * @name angulargm.directive:gmMarkers#gmMarkersRedraw
 * @eventOf angulargm.directive:gmMarkers
 * @eventType listen on current gmMarkers scope
 *
 * @description Force the `gmMarkers` directive to clear and redraw all markers.
 *
 * @param {string} objects Not required. The name of the scope variable which
 * holds the objects to redraw markers for, i.e. what you set `gm-objects` to.
 * It is useful because there may be multiple instances of the `gmMarkers`
 * directive. If not specified, all instances of `gmMarkers` which are child
 * scopes will redraw their markers.
 *
 * @example
 * ```js
 * $scope.$broadcast('gmMarkersRedraw', 'myObjects');
 * ```
 */

/**
 * @ngdoc event
 * @name angulargm.directive:gmMarkers#gmMarkersUpdated
 * @eventOf angulargm.directive:gmMarkers
 * @eventType emit on current gmMarkers scope
 *
 * @description Emitted when markers are updated.
 *
 * @param {string} objects the name of the scope variable which holds the
 * objects the `gmMarkers` directive was constructed with. This is what
 * `gm-objects` was set to.
 *
 * @example
 * ```js
 * $scope.$on('gmMarkersUpdated', function(event, objects) {
 *     if (objects === 'myObjects') {
 *       ...
 *     }
 * });
 * ```
 */

(function () {
'use strict';

  angular.module('AngularGM').

  directive('gmMarkers',
    ['$log', '$parse', '$timeout', 'angulargmUtils', 'angulargmShape',
    function($log, $parse, $timeout, angulargmUtils, angulargmShape) {

    /** aliases */
    var objToLatLng = angulargmUtils.objToLatLng;

    function link(scope, element, attrs, controller) {
      // check marker attrs
      if (!('gmPosition' in attrs)) {
        throw 'gmPosition attribute required';
      }

      var markerOptions = function(object) {
        var latLngObj = scope.gmPosition({object: object});
        var position = objToLatLng(latLngObj);
        if (position == null) {
          return null;
        }

        var markerOptions = scope.gmMarkerOptions({object: object});
        var options = {};
        angular.extend(options, markerOptions, {position: position});
        return options;
      };

      angulargmShape.createShapeDirective(
        'marker', scope, attrs, controller, markerOptions
      );
    }

    return {
      restrict: 'AE',
      priority: 100,
      scope: {
        gmObjects: '&',
        gmId: '&',
        gmPosition: '&',
        gmMarkerOptions: '&',
        gmEvents: '&'
      },
      require: '^gmMap',
      link: link
    };
  }]);
})();

/**
 * @ngdoc directive
 * @name angulargm.directive:gmPolylines
 * @element ANY
 *
 * @description
 * A directive for adding polylines to a `gmMap`. You may have multiple per `gmMap`.
 *
 * To use, you specify an array of custom objects and tell the directive how to
 * extract location data from them. A polyline will be created for each of your
 * objects. If you assign a new array to your scope variable or change the
 * array's length, the polylines will also update.  The one case where
 * `gmPolylines` can not automatically detect changes to your objects is when
 * you mutate objects in the array. To inform the directive of such changes,
 * see the `gmPolylinesUpdate` event below.
 *
 * Only the `gm-objects`, `gm-id` and `gm-path` attributes are required.
 *
 * @param {expression} gm-objects an array of objects in the current scope.
 * These can be any objects you wish to attach to polylines, the only requirement
 * is that they have a uniform method of accessing an id and a path.
 *
 * @param {expression} gm-path an angular expression that given an object
 * from `gm-objects`, evaluates to an array of objects with lat and lng
 * properties. Your object can be accessed through the variable `object`.  For
 * example, if your controller has
 * ```js
 * ...
 * $scope.myObjects = [
 *   { id: 0, path: [ { lat: 5, lng: 5}, {lat: 4, lng: 4} ]},
 *   { id: 1, path: [ { lat: 6, lng: 6}, {lat: 7, lng: 7} ]}
 * ]
 * ...
 * ```
 * then in the `gm-polylines` directive you would put
 * ```js
 * ...
 * gm-objects="myObjects"
 * gm-get-path="object.path"
 * ...
 * ```
 *
 * @param {expression} gm-polyline-options an angular expression that given
 * an object from `gm-objects`, evaluates to a
 * [google.maps.PolylineOptions](https://developers.google.com/maps/documentation/javascript/reference#PolylineOptions)
 * object.  Your object can be accessed through the variable `object`. If
 * unspecified, google maps api defaults will be used.
 *
 * @param {expression} gm-events a variable in the current scope that is used to
 * simulate events on polylines. Setting this variable to an object of the form
 * ```js
 *     [
 *       {
 *         event: 'click',
 *         ids: [id1, ...]
 *       },
 *       ...
 *     ]
 * ```
 * will generate the named events on the polylines with the given ids, if a
 * polyline with each id exists. Note: when setting the `gm-events` variable, you
 * must set it to a new object for the changes to be detected.  Code like
 * ```js
 * myEvents[0]["ids"] = [0]
 * ```
 * will not work.
 *
 *
 * @param {expression} gm-on-*event* an angular expression which evaluates to
 * an event handler. This handler will be attached to each polyline's \*event\*
 * event.  The variables 'object' and 'polyline' evaluate to your object and the
 * [google.maps.Polyline](https://developers.google.com/maps/documentation/javascript/reference#Polyline),
 * respectively. For example:
 * ```html
 * gm-on-click="myClickFn(object, polyline)"
 * ```
 * will call your `myClickFn` whenever a polyline is clicked.  You may have
 * multiple `gm-on-*event*` handlers, but only one for each type of event.
 * For events that have an underscore in their name, such as
 * 'position_changed', write it as 'gm-on-position-changed'.
 */

/**
 * @ngdoc event
 * @name angulargm.directive:gmPolylines#gmPolylinesUpdate
 * @eventOf angulargm.directive:gmPolylines
 * @eventType listen on current gmPolylines scope
 *
 * @description Manually tell the `gmPolylines` directive to update the polylines.
 * This is useful to tell the directive when an object from `gm-objects` is
 * mutated--`gmPolylines` can not pick up on such changes automatically.
 *
 * @param {string} objects Not required. The name of the scope variable which
 * holds the objects to update polylines for, i.e. what you set `gm-objects` to.
 * It is useful because there may be multiple instances of the `gmPolylines`
 * directive. If not specified, all instances of `gmPolylines` which are child
 * scopes will update their polylines.
 *
 * @example
 * ```js
 * $scope.$broadcast('gmPolylinesUpdate', 'myObjects');
 * ```
 */

/**
 * @ngdoc event
 * @name angulargm.directive:gmPolylines#gmPolylinesRedraw
 * @eventOf angulargm.directive:gmPolylines
 * @eventType listen on current gmPolylines scope
 *
 * @description Force the gmPolylines directive to clear and redraw all polylines.
 *
 * @param {string} objects Not required. The name of the scope variable which
 * holds the objects to redraw polylines for, i.e. what you set `gm-objects` to.
 * It is useful because there may be multiple instances of the `gmPolylines`
 * directive. If not specified, all instances of gmPolylines which are child
 * scopes will redraw their polylines.
 *
 * @example
 * ```js
 * $scope.$broadcast('gmPolylinesRedraw', 'myObjects');
 * ```
 */

/**
 * @ngdoc event
 * @name angulargm.directive:gmPolylines#gmPolylinesUpdated
 * @eventOf angulargm.directive:gmPolylines
 * @eventType emit on current gmPolylines scope
 *
 * @description Emitted when polylines are updated.
 *
 * @param {string} objects the name of the scope variable which holds the
 * objects the gmPolylines directive was constructed with. This is what
 * `gm-objects` was set to.
 *
 * @example
 * ```js
 * $scope.$on('gmPolylinesUpdated', function(event, objects) {
 *     if (objects === 'myObjects') {
 *       ...
 *     }
 * });
 * ```
 */

(function () {
'use strict';

  angular.module('AngularGM').

  directive('gmPolylines', ['$parse', '$compile', '$timeout', '$log', 'angulargmUtils', 'angulargmShape',
    function ($parse, $compile, $timeout, $log, angulargmUtils, angulargmShape) {
    /** aliases */
    var objToLatLng = angulargmUtils.objToLatLng;

    function link(scope, element, attrs, controller) {
      if (!('gmPath' in attrs)) {
        throw 'gmPath attribute required';
      }

      var polylineOptions = function(object) {
        var lineLatLngs = scope.gmPath({object: object});
        var path = [];

        angular.forEach(lineLatLngs, function(latlng) {
          var position = objToLatLng(latlng);
          if (position == null) {
              $log.warn('Unable to generate lat/lng from ', latlng);
              return;
          }
          path.push(position);
        });

        var polylineOptions = scope.gmPolylineOptions({object: object});
        var options = {};
        angular.extend(options, polylineOptions, {path: path});
        return options;
      };

      angulargmShape.createShapeDirective(
        'polyline', scope, attrs, controller, polylineOptions
      );
    }

    return {
      restrict: 'AE',
      priority: 100,
      scope: {
        gmObjects: '&',
        gmId: '&',
        gmPath: '&',
        gmPolylineOptions: '&',
        gmEvents: '&'
      },
      require: '^gmMap',
      link: link
    };
  }]);
})();

/**
 * @ngdoc service
 * @name angulargm.service:angulargmContainer
 *
 * @description
 * A container which maps mapIds to google.maps.Map instances, and additionally
 * allows getting a promise of a map for custom configuration of the map.
 *
 * If you want a handle to the map, you should use the `getMapPromise(mapId)`
 * method so you can guarantee the map will be initialized. For example,
 *
 * ```js
 * angular.module('myModule').
 *
 * run(function(angulargmContainer) {
 *   var gmapPromise = angulargmContainer.getMapPromise('myMapid');
 *
 *   gmapPromise.then(function(gmap) {
 *     // google map configuration here
 *   });
 * });
 * ```
 */
(function () {
'use strict';

  angular.module('AngularGM').

  factory('angulargmContainer', ['$q', function($q) {
    var maps = {};
    var defers = {};

    /**
     * Add a map to the container.
     * @param {string} mapId the unique identifier for the map
     * @param {google.maps.Map} map the google map
     * @throw if there is already a map with mapId, or if map is not a
     *   google.maps.Map
     */
    function addMap(mapId, map) {
      if (!(map instanceof google.maps.Map)) {
        throw 'map not a google.maps.Map: ' + map;
      } else if (mapId in maps) {
        throw 'already contain map with id ' + mapId;
      }
      maps[mapId] = map;
      if (mapId in defers) {
        defers[mapId].resolve(map);
      }
    }

    /**
     * Get a map from the container.
     * @param {string} mapId the unique id of the map
     * @return {google.maps.Map|undefined} the map, or undefined if there is no
     *   map for mapId
     */
    function getMap(mapId) {
      return maps[mapId];
    }

    /**
     * Returns a promise of a map for the given mapId
     * @param {string} mapId the unique id of the map that may or may not have
     *   been created yet
     * @return {angular.q.promise} a promise of a map that will be resolved
     *   when the map is added
     */
    function getMapPromise(mapId) {
      var defer = defers[mapId] || $q.defer();
      var map = getMap(mapId);
      defers[mapId] = defer;
      if (map !== undefined) {
        defer.resolve(map);
      }
      return defer.promise;
    }

    /**
     * Removes map with given mapId from this container, and deletes the map.
     * In order for this to work you must ensure there are no references to the
     * map object. Note: this will likely cause a memory leak, see
     * http://stackoverflow.com/questions/10485582/what-is-the-proper-way-to-destroy-a-map-instance
     *
     * @param {string} mapId the unique id of the map to remove
     */
    function removeMap(mapId) {
      if (mapId in maps) {
        delete maps[mapId];
      }
      if (mapId in defers) {
        delete defers[mapId];
      }
    }

    /**
     * Removes all maps and unresolved map promises. Only for testing, see
     * #removeMap(mapId).
     */
    function clear() {
      maps = {};
      defers = {};
    }

    return {
      addMap: addMap,
      getMap: getMap,
      getMapPromise: getMapPromise,
      removeMap: removeMap,
      clear: clear
    };
  }]);
})();

/**
 * @ngdoc service
 * @name angulargm.service:angulargmShape
 *
 * @description
 * Directive functions for map shapes (marker, polyline, etc.)
 */
(function () {
'use strict';

  angular.module('AngularGM').

  factory('angulargmShape',
    ['$timeout', 'angulargmUtils',
    function($timeout, angulargmUtils) {

    /**
     * Check required attributes of a shape.
     */
    function checkRequiredAttributes(attrs) {
      if (!('gmObjects' in attrs)) {
        throw 'gmObjects attribute required';
      } else if (!('gmId' in attrs)) {
        throw 'gmId attribute required';
      }
    }

    /**
     * Create a mapping from object id -> object.
     * The object id is retrieved using scope.gmId
     */
    function _generateObjectCache(scope, objects) {
      var objectCache = {};
      angular.forEach(objects, function(object) {
        // cache objects for quick access
        var id = scope.gmId({object: object});
        objectCache[id] = object;
      });
      return objectCache;
    }

    /**
     * Create new shapes and add them to the map for objects which are not
     * currently on the map.
     */
    function _addNewElements(type, scope, controller, handlers, objectCache, optionsFn) {
      angular.forEach(objectCache, function(object, id) {
        var element = controller.getElement(type, scope.$id, id);

        var options = optionsFn(object);
        if (options == null) {
          return;
        }

        if (element) {
          controller.updateElement(type, scope.$id, id, options);
        } else {
          controller.addElement(type, scope.$id, id, options);
          element = controller.getElement(type, scope.$id, id);

          // set up element event handlers
          angular.forEach(handlers, function(handler, event) {
            controller.addListener(element, event, function() {
              $timeout(function() {
                var context = {object: object};
                context[type] = element;
                if ((angular.version.major <= 1) && (angular.version.minor <= 2)) {
                  // scope is this directive's isolate scope
                  // scope.$parent is the scope of ng-transclude
                  // scope.$parent.$parent is the one we want
                  handler(scope.$parent.$parent, context);
                } else {
                  handler(scope.$parent.$parent.$parent , context);
                }    
              });
            });
          });
        }
      });
    }

    /**
     * Remove shape elements from the map which are no longer in objects.
     */
    function _removeOrphanedElements(type, scope, controller, objectCache) {
      var orphaned = [];

      controller.forEachElementInScope(type, scope.$id, function(element, id) {
        if (!(id in objectCache)) {
          orphaned.push(id);
        }
      });

      angular.forEach(orphaned, function(id) {
        controller.removeElement(type, scope.$id, id);
      });
    }

    /**
     * _formatEventName('gmShapesUpdated', 'marker') -> 'gmMarkersUpdated'
     */
    function _formatEventName(template, type) {
      var uppercasePluralType = type.charAt(0).toUpperCase() + type.slice(1) + 's';
      return template.replace('Shapes', uppercasePluralType);
    }

    /**
     * Attach necessary watchers and listeners to scope to deal with:
     * - updating objects
     * - handling gmEvents
     * - listening for events
     */
    function _attachEventListeners(type, scope, attrs, controller, updateElements) {

      // watch objects
      scope.$watch('gmObjects().length', function(newValue, oldValue) {
        if (newValue != null && newValue !== oldValue) {
          updateElements(scope, scope.gmObjects());
        }
      });

      scope.$watch('gmObjects()', function(newValue, oldValue) {
        if (newValue != null && newValue !== oldValue) {
          updateElements(scope, scope.gmObjects());
        }
      });

      // watch gmEvents
      scope.$watch('gmEvents()', function(newValue, oldValue) {
        if (newValue != null && newValue !== oldValue) {
          angular.forEach(newValue, function(eventObj) {
            var event = eventObj.event;
            var ids = eventObj.ids;
            angular.forEach(ids, function(id) {
              var element = controller.getElement(type, scope.$id, id);
              if (element != null) {
                $timeout(angular.bind(this, controller.trigger, element, event));
              }
            });
          });
        }
      });

      scope.$on(_formatEventName('gmShapesRedraw', type), function(event, objectsName) {
        if (objectsName == null || objectsName === attrs.gmObjects) {
          updateElements(scope);
          updateElements(scope, scope.gmObjects());
        }
      });

      scope.$on(_formatEventName('gmShapesUpdate', type), function(event, objectsName) {
        if (objectsName == null || objectsName === attrs.gmObjects) {
          updateElements(scope, scope.gmObjects());
        }
      });
    }

    /**
     * Takes care of setting up the directive for the given type of shape.
     * Assumes the following directive scope:
     *   scope: {
     *     gmId: '&',
     *     gmObjects: '&',
     *     gmEvents: '&'
     *   },
     *
     * And the angulargmMapController:
     *   require: '^gmMap',
     *
     * Also supports the following attributes:
     *   gmOn* (though some of this knowledge is in angulargmUtils as well)
     *
     * As well as the following events
     *   gmShapesUpdated
     *   gmShapesRedraw
     *
     * (e.g. gmMarkersUpdated and gmMarkersRedraw)
     *
     * See gmMarkers for a complete example.
     */
    function createShapeDirective(type, scope, attrs, controller, elementOptions) {
      checkRequiredAttributes(attrs);

      var updateElements = function(scope, objects) {
        var objectCache = _generateObjectCache(scope, objects);
        var handlers = angulargmUtils.getEventHandlers(attrs); // map events -> handlers

        _addNewElements(
          type, scope, controller, handlers,
          objectCache, elementOptions
        );

        _removeOrphanedElements(type, scope, controller, objectCache);

        scope.$emit(_formatEventName('gmShapesUpdated', type), attrs.gmObjects);
      };

      _attachEventListeners(type, scope, attrs, controller, updateElements);

      // initialize elements
      $timeout(angular.bind(null, updateElements, scope, scope.gmObjects()));
    }

    return {
      createShapeDirective: createShapeDirective
    };
  }]);
})();

/**
 * @ngdoc service
 * @name angulargm.service:angulargmUtils
 *
 * @description
 * Common utility functions.
 */
(function () {
'use strict';

  angular.module('AngularGM').

  factory('angulargmUtils', ['$parse', function($parse) {

    /**
     * Check if two floating point numbers are equal.
     *
     * @param {number} f1 first number
     * @param {number} f2 second number
     * @return {boolean} true if f1 and f2 are 'very close' (within 0.000001)
     */
    function floatEqual (f1, f2) {
      return (Math.abs(f1 - f2) < 0.000001);
    }

    /**
     * @ngdoc function
     * @name #latLngEqual
     * @methodOf angulargm.service:angulargmUtils
     *
     * @param {google.maps.LatLng} l1 first
     * @param {google.maps.LatLng} l2 second
     * @return {boolean} true if l1 and l2 are 'very close'. If either are null
     * or not google.maps.LatLng objects returns false.
     */
    function latLngEqual(l1, l2) {
      if (!(l1 instanceof google.maps.LatLng &&
            l2 instanceof google.maps.LatLng)) {
        return false;
      }
      return floatEqual(l1.lat(), l2.lat()) && floatEqual(l1.lng(), l2.lng());
    }

    /**
     * @ngdoc function
     * @name #boundsEqual
     * @methodOf angulargm.service:angulargmUtils
     *
     * @param {google.maps.LatLngBounds} b1 first
     * @param {google.maps.LatLngBounds} b2 second
     * @return {boolean} true if b1 and b2 are 'very close'. If either are null
     * or not google.maps.LatLngBounds objects returns false.
     */
    function boundsEqual(b1, b2) {
      if (!(b1 instanceof google.maps.LatLngBounds &&
            b2 instanceof google.maps.LatLngBounds)) {
        return false;
      }
      var sw1 = b1.getSouthWest();
      var sw2 = b2.getSouthWest();
      var ne1 = b1.getNorthEast();
      var ne2 = b2.getNorthEast();

      return latLngEqual(sw1, sw2) && latLngEqual(ne1, ne2);
    }

    /**
     * @ngdoc function
     * @name #latLngToObj
     * @methodOf angulargm.service:angulargmUtils
     *
     * @param {google.maps.LatLng} latLng the LatLng
     * @return {Object} object literal with 'lat' and 'lng' properties.
     * @throw if latLng not instanceof google.maps.LatLng
     */
    function latLngToObj(latLng) {
      if (!(latLng instanceof google.maps.LatLng))
        throw 'latLng not a google.maps.LatLng';

      return {
        lat: latLng.lat(),
        lng: latLng.lng()
      };
    }

    /**
     * @ngdoc function
     * @name #objToLatLng
     * @methodOf angulargm.service:angulargmUtils
     *
     * @param {Object} obj of the form { lat: 40, lng: -120 }
     * @return {google.maps.LatLng} returns null if problems with obj (null,
     * NaN, etc.)
     */
    function objToLatLng(obj) {
      if (obj != null) {
        var lat = obj.lat;
        var lng = obj.lng;
        var ok = !(lat == null || lng == null) && !(isNaN(lat) ||
            isNaN(lng));
        if (ok) {
          return new google.maps.LatLng(lat, lng);
        }
      }
      return null;
    }

    /**
     * @ngdoc function
     * @name #hasNaN
     * @methodOf angulargm.service:angulargmUtils
     *
     * @param {google.maps.LatLng} latLng the LatLng
     * @return {boolean} true if either lat or lng of latLng is null or isNaN
     */
    function hasNaN(latLng) {
      if (!(latLng instanceof google.maps.LatLng))
        throw 'latLng must be a google.maps.LatLng';

      // google.maps.LatLng converts NaN to null, so check for both
      var isNull = (latLng.lat() == null || latLng.lng() == null);
      var isNotaN =  isNaN(latLng.lat()) || isNaN(latLng.lng());
      return isNull || isNotaN;
    }

    /**
     * @param {Object} attrs directive attributes
     * @return {Object} mapping from event names to handler fns
     */
    function getEventHandlers(attrs) {
      var handlers = {};

      // retrieve gm-on-___ handlers
      angular.forEach(attrs, function(value, key) {
        if (key.lastIndexOf('gmOn', 0) === 0) {
          var event = angular.lowercase(
            key.substring(4)
              .replace(/(?!^)([A-Z])/g, '_$&')
          );
          var fn = $parse(value);
          handlers[event] = fn;
        }
      });

      return handlers;
    }

    function assertDefined(value, name) {
      if (value === undefined || value === null) {
        if (name) {
          throw name + ' was: ' + value;
        } else {
          throw 'value was: ' + value;
        }
      }
    }

    return {
      latLngEqual: latLngEqual,
      boundsEqual: boundsEqual,
      latLngToObj: latLngToObj,
      objToLatLng: objToLatLng,
      hasNaN: hasNaN,
      getEventHandlers: getEventHandlers,
      assertDefined: assertDefined
    };
  }]);
})();

/**
 * @ngdoc service
 * @name angulargm.service:debounce
 *
 * @description
 * Debounce function. Stolen from https://github.com/shahata/angular-debounce
 */
(function () {
'use strict';

  angular.module('AngularGM').

  factory('debounce', ['$timeout', function ($timeout) {
    return function (func, wait, immediate) {
      var timeout, args, context, result;
      function debounce() {
        /* jshint validthis:true */
        context = this;
        args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) {
            result = func.apply(context, args);
          }
        };
        var callNow = immediate && !timeout;
        if (timeout) {
          $timeout.cancel(timeout);
        }
        timeout = $timeout(later, wait);
        if (callNow) {
          result = func.apply(context, args);
        }
        return result;
      }
      debounce.cancel = function () {
        $timeout.cancel(timeout);
        timeout = null;
      };
      return debounce;
    };
  }]);

})();

/**
 * Directive controller which is owned by the [gmMap]{@link module:gmMap}
 * directive and shared among all other angulargm directives.
 */
(function () {
'use strict';

  angular.module('AngularGM').

  controller('angulargmMapController',
    ['$scope', '$element', 'angulargmUtils', 'angulargmDefaults',
    'angulargmContainer',

    function ($scope, $element, angulargmUtils, angulargmDefaults,
      angulargmContainer) {

    /** aliases */
    var latLngEqual = angulargmUtils.latLngEqual;
    var boundsEqual = angulargmUtils.boundsEqual;
    var hasNaN = angulargmUtils.hasNaN;
    var assertDefined = angulargmUtils.assertDefined;

    /*
     * Construct a new controller for the gmMap directive.
     * @param {angular.Scope} $scope
     * @param {angular.element} $element
     * @constructor
     */
    var constructor = function($scope, $element) {

      var mapId = $scope.gmMapId();
      if (!mapId) { throw 'angulargm must have non-empty gmMapId attribute'; }

      var mapDiv = angular.element($element[0].firstChild);
      mapDiv.attr('id', mapId);

      var config = this._getConfig($scope, angulargmDefaults);

      // 'private' properties
      this._map = this._createMap(mapId, mapDiv, config, angulargmContainer, $scope);
      this._elements = {};
      this._listeners = {};

      // 'public' properties
      this.dragging = false;

      Object.defineProperties(this, {
        'precision': {
          value: angulargmDefaults.precision,
          writeable: false
        },

        'center': {
          configurable: true, // for testing so we can mock
          get: function() {
             return this._map.getCenter();
           },
          set: function(center) {
            if (hasNaN(center))
              throw 'center contains null or NaN';
            var changed = !latLngEqual(this.center, center);
            if (changed) {
              this._map.panTo(center);
            }
          }
        },

        'zoom': {
          configurable: true, // for testing so we can mock
          get: function() {
            return this._map.getZoom();
          },
          set: function(zoom) {
            if (!(zoom != null && !isNaN(zoom)))
              throw 'zoom was null or NaN';
            var changed = this.zoom !== zoom;
            if (changed) {
              this._map.setZoom(zoom);
            }
          }
        },

        'bounds': {
          configurable: true, // for testing so we can mock
          get: function() {
            return this._map.getBounds();
          },
          set: function(bounds) {
            var numbers = !hasNaN(bounds.getSouthWest()) &&
                          !hasNaN(bounds.getNorthEast());
            if (!numbers)
              throw 'bounds contains null or NaN';

            var changed = !(boundsEqual(this.bounds, bounds));
            if (changed) {
              this._map.fitBounds(bounds);
            }
          }
        },

        'mapTypeId': {
          configurable: true, // for testing so we can mock
          get: function() {
            return this._map.getMapTypeId();
          },
          set: function(mapTypeId) {
            if (mapTypeId == null)
              throw 'mapTypeId was null or unknown';
            var changed = this.mapTypeId !== mapTypeId;
            if (changed) {
              this._map.setMapTypeId(mapTypeId);
            }
          }
        }
      });

      this._initDragListeners();
      $scope.$on('$destroy', angular.bind(this, this._destroy));
    };


    // Retrieve google.maps.MapOptions
    this._getConfig = function($scope, angulargmDefaults) {
      // Get config or defaults
      var defaults = angulargmDefaults.mapOptions;
      var config = {};
      angular.extend(config, defaults, $scope.gmMapOptions());
      return config;
    };


    // Create the map and add to angulargmContainer
    this._createMap = function(id, element, config, angulargmContainer) {
      var map = angulargmContainer.getMap(id);
      if (!map) {
        map = new google.maps.Map(element[0], config);
        angulargmContainer.addMap(id, map);
      } else {
        var div = map.getDiv();
        element.replaceWith(div);
        this._map = map;
        this.mapTrigger('resize');
        map.setOptions(config);
      }
      return map;
    };


    // Set up listeners to update this.dragging
    this._initDragListeners = function() {
      var self = this;
      this.addMapListener('dragstart', function () {
        self.dragging = true;
      });

      this.addMapListener('idle', function () {
        self.dragging = false;
      });
    };


    this._destroy = function() {
      angular.forEach(this._listeners, function(listener) {
        angular.forEach(listener, function(l) {
          google.maps.event.removeListener(l);
        });
      });
      this._listeners = {};

      var self = this;
      var types = Object.keys(this._elements);
      angular.forEach(types, function(type) {
        var scopeIds = Object.keys(self._getElements(type));
        angular.forEach(scopeIds, function(scopeId) {
          self.forEachElementInScope(type, scopeId, function(element, id) {
            self.removeElement(type, scopeId, id);
          });
        });
      });

      var streetView = this._map.getStreetView();
      if (streetView && streetView.getVisible()) {
        streetView.setVisible(false);
      }
    };


    /**
     * Alias for google.maps.event.addListener(map, event, handler)
     * @param {string} event an event defined on google.maps.Map
     * @param {Function} a handler for the event
     */
    this.addMapListener = function(event, handler) {
      var listener = google.maps.event.addListener(this._map, event, handler);

      if (this._listeners[event] === undefined) {
        this._listeners[event] = [];
      }

      this._listeners[event].push(listener);
    };


    /**
     * Alias for google.maps.event.addListenerOnce(map, event, handler)
     * @param {string} event an event defined on google.maps.Map
     * @param {Function} a handler for the event
     */
    this.addMapListenerOnce = function(event, handler) {
      var listener = google.maps.event.addListenerOnce(this._map, event, handler);

      if (this._listeners[event] === undefined) {
        this._listeners[event] = [];
      }

      this._listeners[event].push(listener);
    };


    /**
     * Alias for google.maps.event.addListener(object, event, handler)
     */
    this.addListener = function(object, event, handler) {
      google.maps.event.addListener(object, event, handler);
    };


    /**
     * Alias for google.maps.event.addListenerOnce(object, event, handler)
     */
    this.addListenerOnce = function(object, event, handler) {
      google.maps.event.addListenerOnce(object, event, handler);
    };


    /**
     * Alias for google.maps.event.trigger(map, event)
     * @param {string} event an event defined on google.maps.Map
     */
    this.mapTrigger = function(event) {
      google.maps.event.trigger(this._map, event);
    };


    /**
     * Alias for google.maps.event.trigger(object, event)
     */
    this.trigger = function(object, event) {
      google.maps.event.trigger(object, event);
    };

    this._newElement = function(type, opts) {
        if (type === 'marker') {
            if (!(opts.position instanceof google.maps.LatLng)) {
              throw 'markerOptions did not contain a position';
            }
            return new angulargmDefaults.markerConstructor(opts);
        } else if (type === 'polyline') {
            if (!(opts.path instanceof Array)) {
                throw 'polylineOptions did not contain a path';
            }
            return new angulargmDefaults.polylineConstructor(opts);
        } else if (type === 'circle') {
            if (!(opts.center instanceof google.maps.LatLng)) {
                throw 'circleOptions did not contain a marker position';
            }
            return new angulargmDefaults.circleConstructor(opts);
        }
        else {
          throw 'unrecognized type ' + type;
        }
    };

    this._getElements = function(type) {
        if (!(type in this._elements)) {
            this._elements[type] = {};
        }
        return this._elements[type];
    };

    /**
     * Adds a new element to the map.
     * @return {boolean} true if an element was added, false if there was already
     *   an element with the given id
     * @throw if any arguments are null/undefined or elementOptions does not
     *   have all the required options (i.e. position)
     */
    this.addElement = function(type, scopeId, id, elementOptions) {
        assertDefined(type, 'type');
        assertDefined(scopeId, 'scopeId');
        assertDefined(id, 'id');
        assertDefined(elementOptions, 'elementOptions');

        if (this.hasElement(type, scopeId, id)) {
          return false;
        }

        var elements = this._getElements(type);
        if (elements[scopeId] == null) {
          elements[scopeId] = {};
        }

        // google maps munges passed in options, so copy it first
        // extend instead of copy to preserve value objects
        var opts = {};
        angular.extend(opts, elementOptions);
        var element = this._newElement(type, opts);
        elements[scopeId][id] = element;
        element.setMap(this._map);

        return true;
    };

    /**
     * Updates an element on the map with new options.
     * @return {boolean} true if an element was updated, false if there was no
     *   element with the given id to update
     * @throw if any arguments are null/undefined or elementOptions does not
     *   have all the required options (i.e. position)
     */

    this.updateElement = function(type, scopeId, id, elementOptions) {
      assertDefined(type, 'type');
      assertDefined(scopeId, 'scopeId');
      assertDefined(id, 'id');
      assertDefined(elementOptions, 'elementOptions');

      var element = this.getElement(type, scopeId, id);
      if (element) {
        element.setOptions(elementOptions);
        return true;
      } else {
        return false;
      }
    };

    this.hasElement = function(type, scopeId, id) {
      assertDefined(type, 'type');
      assertDefined(scopeId, 'scopeId');
      assertDefined(id, 'id');
      return (this.getElement(type, scopeId, id) != null);
    };

    /**
     * @return {google maps element} the element with the given id, or null if no
     *   such element exists
     */
    this.getElement = function (type, scopeId, id) {
      assertDefined(type, 'type');
      assertDefined(scopeId, 'scopeId');
      assertDefined(id, 'id');

      var elements = this._getElements(type);
      if (elements[scopeId] != null && id in elements[scopeId]) {
        return elements[scopeId][id];
      } else {
        return null;
      }
    };

    /**
     * @return {boolean} true if an element was removed, false if nothing
     *   happened
     */
    this.removeElement = function(type, scopeId, id) {
      assertDefined(type, 'type');
      assertDefined(scopeId, 'scopeId');
      assertDefined(id, 'id');

      var elements = this._getElements(type);
      var removed = false;
      var element = elements[scopeId][id];
      if (element) {
          element.setMap(null);
          removed = true;
      }
      elements[scopeId][id] = null;
      delete elements[scopeId][id];
      return removed;
    };

    /**
     * Applies a function to each element on the map.
     * @param {String} type of element, e.g. 'marker'
     * @param {Function} fn will be called with element as first argument
     * @throw if an argument is null or undefined
     */
    this.forEachElement = function(type, fn) {
      assertDefined(type, 'type');
      assertDefined(fn, 'fn');

      var elements = this._getElements(type);
      var scopeIds = Object.keys(elements);
      var allElements = scopeIds.reduce(function(accumulator, scopeId) {
        angular.forEach(elements[scopeId], function(element) {
          accumulator.push(element);
        });
        return accumulator;
      }, []);

      angular.forEach(allElements, function(element, id) {
        if (element != null) {
          fn(element, id);
        }
      });
    };


    /**
     * Applies a function to each element in a scope.
     * @param {String} type of element, e.g. 'marker'
     * @param {number} scope id
     * @param {Function} fn will called with marker as first argument
     * @throw if an argument is null or undefined
     */
    this.forEachElementInScope = function(type, scopeId, fn) {
      assertDefined(type, 'type');
      assertDefined(scopeId, 'scopeId');
      assertDefined(fn, 'fn');

      var elements = this._getElements(type);
      angular.forEach(elements[scopeId], function(element, id) {
        if (element != null) {
          fn(element, id);
        }
      });
    };

    this.getMap = function() {
      return this._map;
    };

    /** Instantiate controller */
    angular.bind(this, constructor)($scope, $element);

  }]);
})();


/*!
 * ui-grid - v3.1.1 - 2016-02-09
 * Copyright (c) 2016 ; License: MIT 
 */

!function(){"use strict";angular.module("ui.grid.i18n",[]),angular.module("ui.grid",["ui.grid.i18n"])}(),function(){"use strict";angular.module("ui.grid").constant("uiGridConstants",{LOG_DEBUG_MESSAGES:!0,LOG_WARN_MESSAGES:!0,LOG_ERROR_MESSAGES:!0,CUSTOM_FILTERS:/CUSTOM_FILTERS/g,COL_FIELD:/COL_FIELD/g,MODEL_COL_FIELD:/MODEL_COL_FIELD/g,TOOLTIP:/title=\"TOOLTIP\"/g,DISPLAY_CELL_TEMPLATE:/DISPLAY_CELL_TEMPLATE/g,TEMPLATE_REGEXP:/<.+>/,FUNC_REGEXP:/(\([^)]*\))?$/,DOT_REGEXP:/\./g,APOS_REGEXP:/'/g,BRACKET_REGEXP:/^(.*)((?:\s*\[\s*\d+\s*\]\s*)|(?:\s*\[\s*"(?:[^"\\]|\\.)*"\s*\]\s*)|(?:\s*\[\s*'(?:[^'\\]|\\.)*'\s*\]\s*))(.*)$/,COL_CLASS_PREFIX:"ui-grid-col",events:{GRID_SCROLL:"uiGridScroll",COLUMN_MENU_SHOWN:"uiGridColMenuShown",ITEM_DRAGGING:"uiGridItemDragStart",COLUMN_HEADER_CLICK:"uiGridColumnHeaderClick"},keymap:{TAB:9,STRG:17,CAPSLOCK:20,CTRL:17,CTRLRIGHT:18,CTRLR:18,SHIFT:16,RETURN:13,ENTER:13,BACKSPACE:8,BCKSP:8,ALT:18,ALTR:17,ALTRIGHT:17,SPACE:32,WIN:91,MAC:91,FN:null,PG_UP:33,PG_DOWN:34,UP:38,DOWN:40,LEFT:37,RIGHT:39,ESC:27,DEL:46,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123},ASC:"asc",DESC:"desc",filter:{STARTS_WITH:2,ENDS_WITH:4,EXACT:8,CONTAINS:16,GREATER_THAN:32,GREATER_THAN_OR_EQUAL:64,LESS_THAN:128,LESS_THAN_OR_EQUAL:256,NOT_EQUAL:512,SELECT:"select",INPUT:"input"},aggregationTypes:{sum:2,count:4,avg:8,min:16,max:32},CURRENCY_SYMBOLS:["Æ’","$","Â£","$","Â¤","Â¥","áŸ›","â‚©","â‚±","à¸¿","â‚«"],scrollDirection:{UP:"up",DOWN:"down",LEFT:"left",RIGHT:"right",NONE:"none"},dataChange:{ALL:"all",EDIT:"edit",ROW:"row",COLUMN:"column",OPTIONS:"options"},scrollbars:{NEVER:0,ALWAYS:1}})}(),angular.module("ui.grid").directive("uiGridCell",["$compile","$parse","gridUtil","uiGridConstants",function(a,b,c,d){var e={priority:0,scope:!1,require:"?^uiGrid",compile:function(){return{pre:function(b,e,f,g){function h(){var a=b.col.compiledElementFn;a(b,function(a,b){e.append(a)})}if(g&&b.col.compiledElementFn)h();else if(g&&!b.col.compiledElementFn)b.col.getCompiledElementFn().then(function(a){a(b,function(a,b){e.append(a)})});else{var i=b.col.cellTemplate.replace(d.MODEL_COL_FIELD,"row.entity."+c.preEval(b.col.field)).replace(d.COL_FIELD,"grid.getCellValue(row, col)"),j=a(i)(b);e.append(j)}},post:function(a,b,c,e){var f=a.col.getColClass(!1);b.addClass(f);var g,h=function(c){var d=b;g&&(d.removeClass(g),g=null),g=angular.isFunction(a.col.cellClass)?a.col.cellClass(a.grid,a.row,a.col,a.rowRenderIndex,a.colRenderIndex):a.col.cellClass,d.addClass(g)};a.col.cellClass&&h();var i=a.grid.registerDataChangeCallback(h,[d.dataChange.COLUMN,d.dataChange.EDIT]),j=function(c,d){if(c!==d){(g||a.col.cellClass)&&h();var e=a.col.getColClass(!1);e!==f&&(b.removeClass(f),b.addClass(e),f=e)}},k=a.$watch("row",j),l=function(){i(),k()};a.$on("$destroy",l),b.on("$destroy",l)}}}};return e}]),function(){angular.module("ui.grid").service("uiGridColumnMenuService",["i18nService","uiGridConstants","gridUtil",function(a,b,c){var d={initialize:function(a,b){a.grid=b.grid,b.columnMenuScope=a,a.menuShown=!1},setColMenuItemWatch:function(a){var b=a.$watch("col.menuItems",function(b){"undefined"!=typeof b&&b&&angular.isArray(b)?(b.forEach(function(b){"undefined"!=typeof b.context&&b.context||(b.context={}),b.context.col=a.col}),a.menuItems=a.defaultMenuItems.concat(b)):a.menuItems=a.defaultMenuItems});a.$on("$destroy",b)},sortable:function(a){return a.grid.options.enableSorting&&"undefined"!=typeof a.col&&a.col&&a.col.enableSorting?!0:!1},isActiveSort:function(a,b){return"undefined"!=typeof a.col&&"undefined"!=typeof a.col.sort&&"undefined"!=typeof a.col.sort.direction&&a.col.sort.direction===b},suppressRemoveSort:function(a){return a.col&&a.col.suppressRemoveSort?!0:!1},hideable:function(a){return"undefined"!=typeof a.col&&a.col&&a.col.colDef&&a.col.colDef.enableHiding===!1?!1:!0},getDefaultMenuItems:function(c){return[{title:a.getSafeText("sort.ascending"),icon:"ui-grid-icon-sort-alt-up",action:function(a){a.stopPropagation(),c.sortColumn(a,b.ASC)},shown:function(){return d.sortable(c)},active:function(){return d.isActiveSort(c,b.ASC)}},{title:a.getSafeText("sort.descending"),icon:"ui-grid-icon-sort-alt-down",action:function(a){a.stopPropagation(),c.sortColumn(a,b.DESC)},shown:function(){return d.sortable(c)},active:function(){return d.isActiveSort(c,b.DESC)}},{title:a.getSafeText("sort.remove"),icon:"ui-grid-icon-cancel",action:function(a){a.stopPropagation(),c.unsortColumn()},shown:function(){return d.sortable(c)&&"undefined"!=typeof c.col&&"undefined"!=typeof c.col.sort&&"undefined"!=typeof c.col.sort.direction&&null!==c.col.sort.direction&&!d.suppressRemoveSort(c)}},{title:a.getSafeText("column.hide"),icon:"ui-grid-icon-cancel",shown:function(){return d.hideable(c)},action:function(a){a.stopPropagation(),c.hideColumn()}}]},getColumnElementPosition:function(a,b,d){var e={};return e.left=d[0].offsetLeft,e.top=d[0].offsetTop,e.parentLeft=d[0].offsetParent.offsetLeft,e.offset=0,b.grid.options.offsetLeft&&(e.offset=b.grid.options.offsetLeft),e.height=c.elementHeight(d,!0),e.width=c.elementWidth(d,!0),e},repositionMenu:function(a,b,d,e,f){var g=e[0].querySelectorAll(".ui-grid-menu"),h=c.closestElm(f,".ui-grid-render-container"),i=h.getBoundingClientRect().left-a.grid.element[0].getBoundingClientRect().left,j=h.querySelectorAll(".ui-grid-viewport")[0].scrollLeft,k=b.lastMenuWidth?b.lastMenuWidth:a.lastMenuWidth?a.lastMenuWidth:170,l=b.lastMenuPaddingRight?b.lastMenuPaddingRight:a.lastMenuPaddingRight?a.lastMenuPaddingRight:10;if(0!==g.length){var m=g[0].querySelectorAll(".ui-grid-menu-mid");0===m.length||angular.element(m).hasClass("ng-hide")||(k=c.elementWidth(g,!0),a.lastMenuWidth=k,b.lastMenuWidth=k,l=parseInt(c.getStyles(angular.element(g)[0]).paddingRight,10),a.lastMenuPaddingRight=l,b.lastMenuPaddingRight=l)}var n=d.left+i-j+d.parentLeft+d.width-k+l;n<d.offset&&(n=d.offset),e.css("left",n+"px"),e.css("top",d.top+d.height+"px")}};return d}]).directive("uiGridColumnMenu",["$timeout","gridUtil","uiGridConstants","uiGridColumnMenuService","$document",function(a,b,c,d,e){var f={priority:0,scope:!0,require:"^uiGrid",templateUrl:"ui-grid/uiGridColumnMenu",replace:!0,link:function(f,g,h,i){d.initialize(f,i),f.defaultMenuItems=d.getDefaultMenuItems(f),f.menuItems=f.defaultMenuItems,d.setColMenuItemWatch(f),f.showMenu=function(a,b,c){f.col=a;var e=d.getColumnElementPosition(f,a,b);f.menuShown?(f.colElement=b,f.colElementPosition=e,f.hideThenShow=!0,f.$broadcast("hide-menu",{originalEvent:c})):(f.menuShown=!0,d.repositionMenu(f,a,e,g,b),f.colElement=b,f.colElementPosition=e,f.$broadcast("show-menu",{originalEvent:c}))},f.hideMenu=function(a){f.menuShown=!1,a||f.$broadcast("hide-menu")},f.$on("menu-hidden",function(){f.hideThenShow?(delete f.hideThenShow,d.repositionMenu(f,f.col,f.colElementPosition,g,f.colElement),f.$broadcast("show-menu"),f.menuShown=!0):(f.hideMenu(!0),f.col&&b.focus.bySelector(e,".ui-grid-header-cell."+f.col.getColClass()+" .ui-grid-column-menu-button",f.col.grid,!1))}),f.$on("menu-shown",function(){a(function(){d.repositionMenu(f,f.col,f.colElementPosition,g,f.colElement),b.focus.bySelector(e,".ui-grid-menu-items .ui-grid-menu-item",!0),delete f.colElementPosition,delete f.columnElement},200)}),f.sortColumn=function(a,b){a.stopPropagation(),f.grid.sortColumn(f.col,b,!0).then(function(){f.grid.refresh(),f.hideMenu()})},f.unsortColumn=function(){f.col.unsort(),f.grid.refresh(),f.hideMenu()};var j=function(){a(function(){var a,c=function(){return b.focus.byId("grid-menu",f.grid)};f.grid.columns.some(function(b,c){return angular.equals(b,f.col)?(a=c,!0):void 0});var d;if(f.grid.columns.some(function(b,c){if(!b.visible)return!1;if(a>c)d=b;else{if(c>a&&!d)return d=b,!0;if(c>a&&d)return!0}}),d){var g=d.getColClass();b.focus.bySelector(e,".ui-grid-header-cell."+g+" .ui-grid-header-cell-primary-focus",!0).then(angular.noop,function(a){return"canceled"!==a?c():void 0})}else c()})};f.hideColumn=function(){f.col.colDef.visible=!1,f.col.visible=!1,f.grid.queueGridRefresh(),f.hideMenu(),f.grid.api.core.notifyDataChange(c.dataChange.COLUMN),f.grid.api.core.raise.columnVisibilityChanged(f.col),j()}},controller:["$scope",function(a){var b=this;a.$watch("menuItems",function(a){b.menuItems=a})}]};return f}])}(),function(){"use strict";angular.module("ui.grid").directive("uiGridFilter",["$compile","$templateCache","i18nService","gridUtil",function(a,b,c,d){return{compile:function(){return{pre:function(b,c,d,e){b.col.updateFilters=function(d){if(c.children().remove(),d){var e=b.col.filterHeaderTemplate;c.append(a(e)(b))}},b.$on("$destroy",function(){delete b.col.updateFilters})},post:function(a,b,e,f){a.aria=c.getSafeText("headerCell.aria"),a.removeFilter=function(a,c){a.term=null,d.focus.bySelector(b,".ui-grid-filter-input-"+c)}}}}}}])}(),function(){"use strict";angular.module("ui.grid").directive("uiGridFooterCell",["$timeout","gridUtil","uiGridConstants","$compile",function(a,b,c,d){var e={priority:0,scope:{col:"=",row:"=",renderIndex:"="},replace:!0,require:"^uiGrid",compile:function(a,b,e){return{pre:function(a,b,c,e){var f=d(a.col.footerCellTemplate)(a);b.append(f)},post:function(a,b,d,e){a.grid=e.grid;var f=a.col.getColClass(!1);b.addClass(f);var g,h=function(c){var d=b;g&&(d.removeClass(g),g=null),g=angular.isFunction(a.col.footerCellClass)?a.col.footerCellClass(a.grid,a.row,a.col,a.rowRenderIndex,a.colRenderIndex):a.col.footerCellClass,d.addClass(g)};a.col.footerCellClass&&h(),a.col.updateAggregationValue();var i=a.grid.registerDataChangeCallback(h,[c.dataChange.COLUMN]);a.grid.api.core.on.rowsRendered(a,a.col.updateAggregationValue),a.grid.api.core.on.rowsRendered(a,h),a.$on("$destroy",i)}}}};return e}])}(),function(){"use strict";angular.module("ui.grid").directive("uiGridFooter",["$templateCache","$compile","uiGridConstants","gridUtil","$timeout",function(a,b,c,d,e){return{restrict:"EA",replace:!0,require:["^uiGrid","^uiGridRenderContainer"],scope:!0,compile:function(a,c){return{pre:function(a,c,e,f){var g=f[0],h=f[1];a.grid=g.grid,a.colContainer=h.colContainer,h.footer=c;var i=a.grid.options.footerTemplate;d.getTemplate(i).then(function(d){var e=angular.element(d),f=b(e)(a);if(c.append(f),h){var g=c[0].getElementsByClassName("ui-grid-footer-viewport")[0];g&&(h.footerViewport=g)}})},post:function(a,b,c,e){var f=e[0],g=e[1];f.grid;d.disableAnimations(b),g.footer=b;var h=b[0].getElementsByClassName("ui-grid-footer-viewport")[0];h&&(g.footerViewport=h)}}}}}])}(),function(){"use strict";angular.module("ui.grid").directive("uiGridGridFooter",["$templateCache","$compile","uiGridConstants","gridUtil","$timeout",function(a,b,c,d,e){return{restrict:"EA",replace:!0,require:"^uiGrid",scope:!0,compile:function(a,c){return{pre:function(a,c,e,f){a.grid=f.grid;var g=a.grid.options.gridFooterTemplate;d.getTemplate(g).then(function(d){var e=angular.element(d),f=b(e)(a);c.append(f)})},post:function(a,b,c,d){}}}}}])}(),function(){"use strict";angular.module("ui.grid").directive("uiGridGroupPanel",["$compile","uiGridConstants","gridUtil",function(a,b,c){var d="ui-grid/ui-grid-group-panel";return{restrict:"EA",replace:!0,require:"?^uiGrid",scope:!1,compile:function(b,e){return{pre:function(b,e,f,g){var h=b.grid.options.groupPanelTemplate||d;c.getTemplate(h).then(function(c){var d=angular.element(c),f=a(d)(b);e.append(f)})},post:function(a,b,c,d){b.bind("$destroy",function(){})}}}}}])}(),function(){"use strict";angular.module("ui.grid").directive("uiGridHeaderCell",["$compile","$timeout","$window","$document","gridUtil","uiGridConstants","ScrollEvent","i18nService",function(a,b,c,d,e,f,g,h){var i=500,j=500,k={priority:0,scope:{col:"=",row:"=",renderIndex:"="},require:["^uiGrid","^uiGridRenderContainer"],replace:!0,compile:function(){return{pre:function(b,c,d){var e=a(b.col.headerCellTemplate)(b);c.append(e)},post:function(a,c,e,g){var k=g[0],l=g[1];a.i18n={headerCell:h.getSafeText("headerCell"),sort:h.getSafeText("sort")},a.isSortPriorityVisible=function(){return angular.isNumber(a.col.sort.priority)&&a.grid.columns.some(function(b,c){return angular.isNumber(b.sort.priority)&&b!==a.col})},a.getSortDirectionAriaLabel=function(){var b=a.col,c=b.sort.direction===f.ASC?a.i18n.sort.ascending:b.sort.direction===f.DESC?a.i18n.sort.descending:a.i18n.sort.none,d=c;return a.isSortPriorityVisible()&&(d=d+". "+a.i18n.headerCell.priority+" "+b.sort.priority),d},a.grid=k.grid,a.renderContainer=k.grid.renderContainers[l.containerId];var m=a.col.getColClass(!1);c.addClass(m),a.menuShown=!1,a.asc=f.ASC,a.desc=f.DESC;var n,o,p=(angular.element(c[0].querySelectorAll(".ui-grid-header-cell-menu")),angular.element(c[0].querySelectorAll(".ui-grid-cell-contents"))),q=[];a.downFn=function(e){e.stopPropagation(),"undefined"!=typeof e.originalEvent&&void 0!==e.originalEvent&&(e=e.originalEvent),e.button&&0!==e.button||(o=e.pageX,a.mousedownStartTime=(new Date).getTime(),a.mousedownTimeout=b(function(){},i),a.mousedownTimeout.then(function(){a.colMenu&&k.columnMenuScope.showMenu(a.col,c,e)}),k.fireEvent(f.events.COLUMN_HEADER_CLICK,{event:e,columnName:a.col.colDef.name}),a.offAllEvents(),"touchstart"===e.type?(d.on("touchend",a.upFn),d.on("touchmove",a.moveFn)):"mousedown"===e.type&&(d.on("mouseup",a.upFn),d.on("mousemove",a.moveFn)))},a.upFn=function(c){c.stopPropagation(),b.cancel(a.mousedownTimeout),a.offAllEvents(),a.onDownEvents(c.type);var d=(new Date).getTime(),e=d-a.mousedownStartTime;e>i||a.sortable&&a.handleClick(c)},a.moveFn=function(c){var d=c.pageX-o;0!==d&&(b.cancel(a.mousedownTimeout),a.offAllEvents(),a.onDownEvents(c.type))},a.clickFn=function(b){b.stopPropagation(),p.off("click",a.clickFn)},a.offAllEvents=function(){p.off("touchstart",a.downFn),p.off("mousedown",a.downFn),d.off("touchend",a.upFn),d.off("mouseup",a.upFn),d.off("touchmove",a.moveFn),d.off("mousemove",a.moveFn),p.off("click",a.clickFn)},a.onDownEvents=function(c){switch(c){case"touchmove":case"touchend":p.on("click",a.clickFn),p.on("touchstart",a.downFn),b(function(){p.on("mousedown",a.downFn)},j);break;case"mousemove":case"mouseup":p.on("click",a.clickFn),p.on("mousedown",a.downFn),b(function(){p.on("touchstart",a.downFn)},j);break;default:p.on("click",a.clickFn),p.on("touchstart",a.downFn),p.on("mousedown",a.downFn)}};var r=function(d){var e=c;n&&(e.removeClass(n),n=null),n=angular.isFunction(a.col.headerCellClass)?a.col.headerCellClass(a.grid,a.row,a.col,a.rowRenderIndex,a.colRenderIndex):a.col.headerCellClass,e.addClass(n),b(function(){var b=a.grid.renderContainers.right?a.grid.renderContainers.right:a.grid.renderContainers.body;a.isLastCol=a.col===b.visibleColumnCache[b.visibleColumnCache.length-1]}),k.grid.options.enableSorting&&a.col.enableSorting?a.sortable=!0:a.sortable=!1;var g=a.filterable;k.grid.options.enableFiltering&&a.col.enableFiltering?a.filterable=!0:a.filterable=!1,g!==a.filterable&&("undefined"!=typeof a.col.updateFilters&&a.col.updateFilters(a.filterable),a.filterable?(a.col.filters.forEach(function(b,c){q.push(a.$watch("col.filters["+c+"].term",function(a,b){a!==b&&(k.grid.api.core.raise.filterChanged(),k.grid.api.core.notifyDataChange(f.dataChange.COLUMN),k.grid.queueGridRefresh())}))}),a.$on("$destroy",function(){q.forEach(function(a){a()})})):q.forEach(function(a){a()})),a.col.grid.options&&a.col.grid.options.enableColumnMenus!==!1&&a.col.colDef&&a.col.colDef.enableColumnMenu!==!1?a.colMenu=!0:a.colMenu=!1,a.offAllEvents(),(a.sortable||a.colMenu)&&(a.onDownEvents(),a.$on("$destroy",function(){a.offAllEvents()}))};r();var s=a.grid.registerDataChangeCallback(r,[f.dataChange.COLUMN]);a.$on("$destroy",s),a.handleClick=function(b){var c=!1;b.shiftKey&&(c=!0),k.grid.sortColumn(a.col,c).then(function(){k.columnMenuScope&&k.columnMenuScope.hideMenu(),k.grid.refresh()})},a.toggleMenu=function(b){b.stopPropagation(),k.columnMenuScope.menuShown&&k.columnMenuScope.col===a.col?k.columnMenuScope.hideMenu():k.columnMenuScope.showMenu(a.col,c)}}}}};return k}])}(),function(){"use strict";angular.module("ui.grid").directive("uiGridHeader",["$templateCache","$compile","uiGridConstants","gridUtil","$timeout","ScrollEvent",function(a,b,c,d,e,f){var g="ui-grid/ui-grid-header",h="ui-grid/ui-grid-no-header";return{restrict:"EA",replace:!0,require:["^uiGrid","^uiGridRenderContainer"],scope:!0,compile:function(a,c){return{pre:function(a,c,e,i){function j(){m.header=m.colContainer.header=c;var a=c[0].getElementsByClassName("ui-grid-header-canvas");a.length>0?m.headerCanvas=m.colContainer.headerCanvas=a[0]:m.headerCanvas=null}function k(a){if(!l.grid.isScrollingHorizontally){var b=d.normalizeScrollLeft(m.headerViewport,l.grid),c=m.colContainer.scrollHorizontal(b),e=new f(l.grid,null,m.colContainer,f.Sources.ViewPortScroll);e.newScrollLeft=b,c>-1&&(e.x={percentage:c}),l.grid.scrollContainers(null,e)}}var l=i[0],m=i[1];a.grid=l.grid,a.colContainer=m.colContainer,j();var n;n=a.grid.options.showHeader?a.grid.options.headerTemplate?a.grid.options.headerTemplate:g:h,d.getTemplate(n).then(function(d){var e=angular.element(d),f=b(e)(a);if(c.replaceWith(f),c=f,j(),m){var g=c[0].getElementsByClassName("ui-grid-header-viewport")[0];g&&(m.headerViewport=g,angular.element(g).on("scroll",k),a.$on("$destroy",function(){angular.element(g).off("scroll",k)}))}a.grid.queueRefresh()})},post:function(a,b,c,e){function f(){var a=h.colContainer.visibleColumnCache,b="",c=0;return a.forEach(function(a){b+=a.getColClassDefinition(),c+=a.drawnWidth}),h.colContainer.canvasWidth=c,b}var g=e[0],h=e[1];g.grid;d.disableAnimations(b),h.header=b;var i=b[0].getElementsByClassName("ui-grid-header-viewport")[0];i&&(h.headerViewport=i),g&&g.grid.registerStyleComputation({priority:15,func:f})}}}}}])}(),function(){angular.module("ui.grid").service("uiGridGridMenuService",["gridUtil","i18nService","uiGridConstants",function(a,b,c){var d={initialize:function(a,b){b.gridMenuScope=a,a.grid=b,a.registeredMenuItems=[],a.$on("$destroy",function(){a.grid&&a.grid.gridMenuScope&&(a.grid.gridMenuScope=null),a.grid&&(a.grid=null),a.registeredMenuItems&&(a.registeredMenuItems=null)}),a.registeredMenuItems=[],b.api.registerMethod("core","addToGridMenu",d.addToGridMenu),b.api.registerMethod("core","removeFromGridMenu",d.removeFromGridMenu)},addToGridMenu:function(b,c){angular.isArray(c)?b.gridMenuScope?(b.gridMenuScope.registeredMenuItems=b.gridMenuScope.registeredMenuItems?b.gridMenuScope.registeredMenuItems:[],b.gridMenuScope.registeredMenuItems=b.gridMenuScope.registeredMenuItems.concat(c)):a.logError("Asked to addToGridMenu, but gridMenuScope not present.  Timing issue?  Please log issue with ui-grid"):a.logError("addToGridMenu: menuItems must be an array, and is not, not adding any items")},removeFromGridMenu:function(b,c){var d=-1;b&&b.gridMenuScope&&b.gridMenuScope.registeredMenuItems.forEach(function(b,e){b.id===c&&(d>-1?a.logError("removeFromGridMenu: found multiple items with the same id, removing only the last"):d=e)}),d>-1&&b.gridMenuScope.registeredMenuItems.splice(d,1)},getMenuItems:function(c){var e=[];c.grid.options.gridMenuCustomItems&&(angular.isArray(c.grid.options.gridMenuCustomItems)?e=e.concat(c.grid.options.gridMenuCustomItems):a.logError("gridOptions.gridMenuCustomItems must be an array, and is not"));var f=[{title:b.getSafeText("gridMenu.clearAllFilters"),action:function(a){c.grid.clearAllFilters(void 0,!0,void 0)},shown:function(){return c.grid.options.enableFiltering},order:100}];return e=e.concat(f),e=e.concat(c.registeredMenuItems),c.grid.options.gridMenuShowHideColumns!==!1&&(e=e.concat(d.showHideColumns(c))),e.sort(function(a,b){return a.order-b.order}),e},showHideColumns:function(a){var c=[];return a.grid.options.columnDefs&&0!==a.grid.options.columnDefs.length&&0!==a.grid.columns.length?(c.push({title:b.getSafeText("gridMenu.columns"),order:300}),a.grid.options.gridMenuTitleFilter=a.grid.options.gridMenuTitleFilter?a.grid.options.gridMenuTitleFilter:function(a){return a},a.grid.options.columnDefs.forEach(function(b,e){if(b.enableHiding!==!1){var f={icon:"ui-grid-icon-ok",action:function(a){a.stopPropagation(),d.toggleColumnVisibility(this.context.gridCol)},shown:function(){return this.context.gridCol.colDef.visible===!0||void 0===this.context.gridCol.colDef.visible},context:{gridCol:a.grid.getColumn(b.name||b.field)},leaveOpen:!0,order:301+2*e};d.setMenuItemTitle(f,b,a.grid),c.push(f),f={icon:"ui-grid-icon-cancel",action:function(a){a.stopPropagation(),d.toggleColumnVisibility(this.context.gridCol)},shown:function(){return!(this.context.gridCol.colDef.visible===!0||void 0===this.context.gridCol.colDef.visible)},context:{gridCol:a.grid.getColumn(b.name||b.field)},leaveOpen:!0,order:301+2*e+1},d.setMenuItemTitle(f,b,a.grid),c.push(f)}}),c):c},setMenuItemTitle:function(b,c,d){var e=d.options.gridMenuTitleFilter(c.displayName||a.readableColumnName(c.name)||c.field);"string"==typeof e?b.title=e:e.then?(b.title="",e.then(function(a){b.title=a},function(a){b.title=a})):(a.logError("Expected gridMenuTitleFilter to return a string or a promise, it has returned neither, bad config"),b.title="badconfig")},toggleColumnVisibility:function(a){a.colDef.visible=!(a.colDef.visible===!0||void 0===a.colDef.visible),a.grid.refresh(),a.grid.api.core.notifyDataChange(c.dataChange.COLUMN),a.grid.api.core.raise.columnVisibilityChanged(a)}};return d}]).directive("uiGridMenuButton",["gridUtil","uiGridConstants","uiGridGridMenuService","i18nService",function(a,b,c,d){return{priority:0,scope:!0,require:["^uiGrid"],templateUrl:"ui-grid/ui-grid-menu-button",replace:!0,link:function(b,e,f,g){var h=g[0];b.i18n={aria:d.getSafeText("gridMenu.aria")},c.initialize(b,h.grid),b.shown=!1,b.toggleMenu=function(){b.shown?(b.$broadcast("hide-menu"),b.shown=!1):(b.menuItems=c.getMenuItems(b),b.$broadcast("show-menu"),b.shown=!0)},b.$on("menu-hidden",function(){b.shown=!1,a.focus.bySelector(e,".ui-grid-icon-container")})}}}])}(),function(){angular.module("ui.grid").directive("uiGridMenu",["$compile","$timeout","$window","$document","gridUtil","uiGridConstants","i18nService",function(a,b,c,d,e,f,g){var h={priority:0,scope:{menuItems:"=",autoHide:"=?"},require:"?^uiGrid",templateUrl:"ui-grid/uiGridMenu",replace:!1,link:function(a,d,h,i){var j;a.dynamicStyles="",i&&(j=i.grid.gridHeight-30,a.dynamicStyles=[".grid"+i.grid.id+" .ui-grid-menu-mid {","max-height: "+j+"px;","}"].join(" ")),a.i18n={close:g.getSafeText("columnMenu.close")},a.showMenu=function(c,f){a.shown?a.shownMid||(a.shownMid=!0,a.$emit("menu-shown")):(a.shown=!0,b(function(){a.shownMid=!0,a.$emit("menu-shown")}));var g="click";f&&f.originalEvent&&f.originalEvent.type&&"touchstart"===f.originalEvent.type&&(g=f.originalEvent.type),angular.element(document).off("click touchstart",k),d.off("keyup",l),d.off("keydown",m),b(function(){angular.element(document).on(g,k),d.on("keyup",l),d.on("keydown",m)}),e.focus.bySelector(d,"button[type=button]",!0)},a.hideMenu=function(c){a.shown&&(a.shownMid=!1,b(function(){a.shownMid||(a.shown=!1,a.$emit("menu-hidden"))},200)),angular.element(document).off("click touchstart",k),d.off("keyup",l),d.off("keydown",m)},a.$on("hide-menu",function(b,c){a.hideMenu(b,c)}),a.$on("show-menu",function(b,c){a.showMenu(b,c)});var k=function(){a.shown&&a.$apply(function(){a.hideMenu()})},l=function(b){27===b.keyCode&&a.hideMenu()},m=function(a){var b=function(b){return b.focus(),a.preventDefault(),!1};if(9===a.keyCode){var c,e,f=d[0].querySelectorAll("button:not(.ng-hide)");f.length>0&&(c=f[0],e=f[f.length-1],a.target!==e||a.shiftKey?a.target===c&&a.shiftKey&&b(e):b(c))}};("undefined"==typeof a.autoHide||void 0===a.autoHide)&&(a.autoHide=!0),a.autoHide&&angular.element(c).on("resize",k),a.$on("$destroy",function(){angular.element(document).off("click touchstart",k)}),a.$on("$destroy",function(){angular.element(c).off("resize",k)}),i&&a.$on("$destroy",i.grid.api.core.on.scrollBegin(a,k)),a.$on("$destroy",a.$on(f.events.ITEM_DRAGGING,k))}};return h}]).directive("uiGridMenuItem",["gridUtil","$compile","i18nService",function(a,b,c){var d={priority:0,scope:{name:"=",active:"=",action:"=",icon:"=",shown:"=",context:"=",templateUrl:"=",leaveOpen:"=",screenReaderOnly:"="},require:["?^uiGrid"],templateUrl:"ui-grid/uiGridMenuItem",replace:!1,compile:function(){return{pre:function(c,d){c.templateUrl&&a.getTemplate(c.templateUrl).then(function(a){var e=angular.element(a),f=b(e)(c);d.replaceWith(f)})},post:function(b,d,e,f){var g=f[0];("undefined"==typeof b.shown||null===b.shown)&&(b.shown=function(){return!0}),b.itemShown=function(){var a={};return b.context&&(a.context=b.context),"undefined"!=typeof g&&g&&(a.grid=g.grid),b.shown.call(a)},b.itemAction=function(c,e){if(a.logDebug("itemAction"),c.stopPropagation(),"function"==typeof b.action){var f={};b.context&&(f.context=b.context),"undefined"!=typeof g&&g&&(f.grid=g.grid),b.action.call(f,c,e),b.leaveOpen?a.focus.bySelector(angular.element(a.closestElm(d,".ui-grid-menu-items")),"button[type=button]",!0):b.$emit("hide-menu")}},b.i18n=c.get()}}}};return d}])}(),function(){"use strict";var a=angular.module("ui.grid");angular.forEach([{tag:"Src",method:"attr"},{tag:"Text",method:"text"},{tag:"Href",method:"attr"},{tag:"Class",method:"addClass"},{tag:"Html",method:"html"},{tag:"Alt",method:"attr"},{tag:"Style",method:"css"},{tag:"Value",method:"attr"},{tag:"Id",method:"attr"},{tag:"Id",directiveName:"IdGrid",method:"attr",appendGridId:!0},{tag:"Title",method:"attr"},{tag:"Label",method:"attr",aria:!0},{tag:"Labelledby",method:"attr",aria:!0},{tag:"Labelledby",directiveName:"LabelledbyGrid",appendGridId:!0,method:"attr",aria:!0},{tag:"Describedby",method:"attr",aria:!0},{tag:"Describedby",directiveName:"DescribedbyGrid",appendGridId:!0,method:"attr",aria:!0}],function(b){var c="uiGridOneBind",d=(b.aria?c+"Aria":c)+(b.directiveName?b.directiveName:b.tag);a.directive(d,["gridUtil",function(a){return{restrict:"A",require:["?uiGrid","?^uiGrid"],link:function(c,e,f,g){var h=function(b){var e;if(c.grid)e=c.grid;else if(c.col&&c.col.grid)e=c.col.grid;else if(!g.some(function(a){return a&&a.grid?(e=a.grid,!0):void 0}))throw a.logError("["+d+"] A valid grid could not be found to bind id. Are you using this directive within the correct scope? Trying to generate id: [gridID]-"+b),new Error("No valid grid could be found");if(e){var f=new RegExp(e.id.toString());f.test(b)||(b=e.id.toString()+"-"+b)}return b},i=c.$watch(f[d],function(a){if(a){if(b.appendGridId){var c=null;angular.forEach(a.split(" "),function(a){c=(c?c+" ":"")+h(a)}),a=c}switch(b.method){case"attr":b.aria?e[b.method]("aria-"+b.tag.toLowerCase(),a):e[b.method](b.tag.toLowerCase(),a);break;case"addClass":if(angular.isObject(a)&&!angular.isArray(a)){var d=[],f=!1;if(angular.forEach(a,function(a,b){null!==a&&"undefined"!=typeof a&&(f=!0,a&&d.push(b))}),!f)return;a=d}if(!a)return;e.addClass(angular.isArray(a)?a.join(" "):a);break;default:e[b.method](a)}i()}},!0)}}}])})}(),function(){"use strict";var a=angular.module("ui.grid");a.directive("uiGridRenderContainer",["$timeout","$document","uiGridConstants","gridUtil","ScrollEvent",function(a,b,c,d,e){return{replace:!0,transclude:!0,templateUrl:"ui-grid/uiGridRenderContainer",require:["^uiGrid","uiGridRenderContainer"],scope:{containerId:"=",rowContainerName:"=",colContainerName:"=",bindScrollHorizontal:"=",bindScrollVertical:"=",enableVerticalScrollbar:"=",enableHorizontalScrollbar:"="},controller:"uiGridRenderContainer as RenderContainer",compile:function(){return{pre:function(a,b,c,d){var e=d[0],f=d[1],g=a.grid=e.grid;if(!a.rowContainerName)throw"No row render container name specified";if(!a.colContainerName)throw"No column render container name specified";if(!g.renderContainers[a.rowContainerName])throw"Row render container '"+a.rowContainerName+"' is not registered.";if(!g.renderContainers[a.colContainerName])throw"Column render container '"+a.colContainerName+"' is not registered.";var h=a.rowContainer=g.renderContainers[a.rowContainerName],i=a.colContainer=g.renderContainers[a.colContainerName];f.containerId=a.containerId,f.rowContainer=h,f.colContainer=i},post:function(a,b,c,f){function g(){var b="",c=l.canvasWidth,d=l.getViewportWidth(),e=k.getCanvasHeight(),f=k.getViewportHeight();l.needsHScrollbarPlaceholder()&&(f-=j.scrollbarHeight);var g,i;return g=i=l.getHeaderViewportWidth(),b+="\n .grid"+h.grid.id+" .ui-grid-render-container-"+a.containerId+" .ui-grid-canvas { width: "+c+"px; height: "+e+"px; }",b+="\n .grid"+h.grid.id+" .ui-grid-render-container-"+a.containerId+" .ui-grid-header-canvas { width: "+(c+j.scrollbarWidth)+"px; }",b+=o.explicitHeaderCanvasHeight?"\n .grid"+h.grid.id+" .ui-grid-render-container-"+a.containerId+" .ui-grid-header-canvas { height: "+o.explicitHeaderCanvasHeight+"px; }":"\n .grid"+h.grid.id+" .ui-grid-render-container-"+a.containerId+" .ui-grid-header-canvas { height: inherit; }",b+="\n .grid"+h.grid.id+" .ui-grid-render-container-"+a.containerId+" .ui-grid-viewport { width: "+d+"px; height: "+f+"px; }",b+="\n .grid"+h.grid.id+" .ui-grid-render-container-"+a.containerId+" .ui-grid-header-viewport { width: "+g+"px; }",b+="\n .grid"+h.grid.id+" .ui-grid-render-container-"+a.containerId+" .ui-grid-footer-canvas { width: "+(c+j.scrollbarWidth)+"px; }",b+="\n .grid"+h.grid.id+" .ui-grid-render-container-"+a.containerId+" .ui-grid-footer-viewport { width: "+i+"px; }"}var h=f[0],i=f[1],j=h.grid,k=i.rowContainer,l=i.colContainer,m=null,n=null,o=j.renderContainers[a.containerId];b.addClass("ui-grid-render-container-"+a.containerId),d.on.mousewheel(b,function(a){var b=new e(j,k,l,e.Sources.RenderContainerMouseWheel);if(0!==a.deltaY){var c=-1*a.deltaY*a.deltaFactor;m=i.viewport[0].scrollTop,b.verticalScrollLength=k.getVerticalScrollLength();var f=(m+c)/b.verticalScrollLength;f>=1&&m<b.verticalScrollLength&&(i.viewport[0].scrollTop=b.verticalScrollLength),0>f?f=0:f>1&&(f=1),b.y={percentage:f,pixels:c}}if(0!==a.deltaX){var g=a.deltaX*a.deltaFactor;n=d.normalizeScrollLeft(i.viewport,j),b.horizontalScrollLength=l.getCanvasWidth()-l.getViewportWidth();var h=(n+g)/b.horizontalScrollLength;0>h?h=0:h>1&&(h=1),b.x={percentage:h,pixels:g}}0!==a.deltaY&&(b.atTop(m)||b.atBottom(m))||0!==a.deltaX&&(b.atLeft(n)||b.atRight(n))||(a.preventDefault(),a.stopPropagation(),b.fireThrottledScrollingEvent("",b))}),b.bind("$destroy",function(){b.unbind("keydown"),["touchstart","touchmove","touchend","keydown","wheel","mousewheel","DomMouseScroll","MozMousePixelScroll"].forEach(function(a){b.unbind(a)})}),h.grid.registerStyleComputation({priority:6,func:g})}}}}}]),a.controller("uiGridRenderContainer",["$scope","gridUtil",function(a,b){}])}(),function(){"use strict";angular.module("ui.grid").directive("uiGridRow",["gridUtil",function(a){return{replace:!0,require:["^uiGrid","^uiGridRenderContainer"],scope:{row:"=uiGridRow",rowRenderIndex:"="},compile:function(){return{pre:function(a,b,c,d){function e(){a.row.getRowTemplateFn.then(function(c){var d=a.$new();c(d,function(a,c){h&&(h.remove(),i.$destroy()),b.empty().append(a),h=a,i=d})})}var f=d[0],g=d[1];f.grid;a.grid=f.grid,a.colContainer=g.colContainer;var h,i;e(),a.$watch("row.getRowTemplateFn",function(a,b){a!==b&&e()})},post:function(a,b,c,d){}}}}}])}(),function(){angular.module("ui.grid").directive("uiGridStyle",["gridUtil","$interpolate",function(a,b){return{link:function(a,c,d,e){var f=b(c.text(),!0);f&&a.$watch(f,function(a){c.text(a)})}}}])}(),function(){"use strict";angular.module("ui.grid").directive("uiGridViewport",["gridUtil","ScrollEvent","uiGridConstants","$log",function(a,b,c,d){return{replace:!0,scope:{},controllerAs:"Viewport",templateUrl:"ui-grid/uiGridViewport",require:["^uiGrid","^uiGridRenderContainer"],link:function(c,d,e,f){function g(e){var f=d[0].scrollTop,g=a.normalizeScrollLeft(d,p),h=n.scrollVertical(f),i=o.scrollHorizontal(g),j=new b(p,n,o,b.Sources.ViewPortScroll);j.newScrollLeft=g,j.newScrollTop=f,i>-1&&(j.x={percentage:i}),h>-1&&(j.y={percentage:h}),p.scrollContainers(c.$parent.containerId,j)}function h(a){m.prevScrollArgs=a;var b=a.getNewScrollTop(n,m.viewport);d[0].scrollTop=b}function i(b){m.prevScrollArgs=b;var c=b.getNewScrollLeft(o,m.viewport);
d[0].scrollLeft=a.denormalizeScrollLeft(m.viewport,c,p)}function j(b){var c=b.getNewScrollLeft(o,m.viewport);m.headerViewport&&(m.headerViewport.scrollLeft=a.denormalizeScrollLeft(m.viewport,c,p))}function k(b){var c=b.getNewScrollLeft(o,m.viewport);m.footerViewport&&(m.footerViewport.scrollLeft=a.denormalizeScrollLeft(m.viewport,c,p))}var l=f[0],m=f[1];c.containerCtrl=m;var n=m.rowContainer,o=m.colContainer,p=l.grid;c.grid=l.grid,c.rowContainer=m.rowContainer,c.colContainer=m.colContainer,m.viewport=d,d.on("scroll",g);c.$parent.bindScrollVertical&&p.addVerticalScrollSync(c.$parent.containerId,h),c.$parent.bindScrollHorizontal&&(p.addHorizontalScrollSync(c.$parent.containerId,i),p.addHorizontalScrollSync(c.$parent.containerId+"header",j),p.addHorizontalScrollSync(c.$parent.containerId+"footer",k))},controller:["$scope",function(a){this.rowStyle=function(b){var c=a.rowContainer,d=a.colContainer,e={};if(0===b&&0!==c.currentTopRow){var f=c.currentTopRow*c.grid.options.rowHeight;e["margin-top"]=f+"px"}return 0!==d.currentFirstColumn&&(d.grid.isRTL()?e["margin-right"]=d.columnOffset+"px":e["margin-left"]=d.columnOffset+"px"),e}}]}}])}(),function(){angular.module("ui.grid").directive("uiGridVisible",function(){return function(a,b,c){a.$watch(c.uiGridVisible,function(a){b[a?"removeClass":"addClass"]("ui-grid-invisible")})}})}(),function(){"use strict";function a(a,b,c,d,e,f){return{templateUrl:"ui-grid/ui-grid",scope:{uiGrid:"="},replace:!0,transclude:!0,controller:"uiGridController",compile:function(){return{post:function(a,b,g,h){function i(){b[0].offsetWidth<=0&&p>q?(setTimeout(i,o),q++):c(k)}function j(){angular.element(d).on("resize",m),b.on("$destroy",function(){angular.element(d).off("resize",m)}),a.$watch(function(){return n.hasLeftContainer()},function(a,b){a!==b&&n.refreshCanvas(!0)}),a.$watch(function(){return n.hasRightContainer()},function(a,b){a!==b&&n.refreshCanvas(!0)})}function k(){n.gridWidth=a.gridWidth=e.elementWidth(b),n.canvasWidth=h.grid.gridWidth,n.gridHeight=a.gridHeight=e.elementHeight(b),n.gridHeight<=n.options.rowHeight&&n.options.enableMinHeightCheck&&l(),n.refreshCanvas(!0)}function l(){var c=n.options.minRowsToShow*n.options.rowHeight,d=n.options.showHeader?n.options.headerRowHeight:0,g=n.calcFooterHeight(),h=0;n.options.enableHorizontalScrollbar===f.scrollbars.ALWAYS&&(h=e.getScrollbarWidth());var i=0;if(angular.forEach(n.options.columnDefs,function(a){a.hasOwnProperty("filter")?1>i&&(i=1):a.hasOwnProperty("filters")&&i<a.filters.length&&(i=a.filters.length)}),n.options.enableFiltering&&!i){var j=n.options.columnDefs.length&&n.options.columnDefs.every(function(a){return a.enableFiltering===!1});j||(i=1)}var k=i*d,l=d+c+g+h+k;b.css("height",l+"px"),n.gridHeight=a.gridHeight=e.elementHeight(b)}function m(c){n.gridWidth=a.gridWidth=e.elementWidth(b),n.gridHeight=a.gridHeight=e.elementHeight(b),n.refreshCanvas(!0)}var n=h.grid;h.scrollbars=[],n.element=b;var o=100,p=20,q=0;j(),k(),n.renderingComplete(),i()}}}}}angular.module("ui.grid").controller("uiGridController",["$scope","$element","$attrs","gridUtil","$q","uiGridConstants","$templateCache","gridClassFactory","$timeout","$parse","$compile",function(a,b,c,d,e,f,g,h,i,j,k){function l(b,c){b&&b!==c&&(n.grid.options.columnDefs=a.uiGrid.columnDefs,n.grid.buildColumns({orderByColumnDefs:!0}).then(function(){n.grid.preCompileCellTemplates(),n.grid.callDataChangeCallbacks(f.dataChange.COLUMN)}))}function m(b){var d=[];if(n.grid.options.fastWatch&&(b=angular.isString(a.uiGrid.data)?n.grid.appScope[a.uiGrid.data]:a.uiGrid.data),p=b,b){var g=n.grid.columns.length>(n.grid.rowHeaderColumns?n.grid.rowHeaderColumns.length:0);!g&&!c.uiGridColumns&&0===n.grid.options.columnDefs.length&&b.length>0&&n.grid.buildColumnDefsFromData(b),!g&&(n.grid.options.columnDefs.length>0||b.length>0)&&d.push(n.grid.buildColumns().then(function(){n.grid.preCompileCellTemplates()})),e.all(d).then(function(){n.grid.modifyRows(p).then(function(){n.grid.redrawInPlace(!0),a.$evalAsync(function(){n.grid.refreshCanvas(!0),n.grid.callDataChangeCallbacks(f.dataChange.ROW)})})})}}var n=this;n.grid=h.createGrid(a.uiGrid),n.grid.appScope=n.grid.appScope||a.$parent,b.addClass("grid"+n.grid.id),n.grid.rtl="rtl"===d.getStyles(b[0]).direction,a.grid=n.grid,c.uiGridColumns&&c.$observe("uiGridColumns",function(a){n.grid.options.columnDefs=a,n.grid.buildColumns().then(function(){n.grid.preCompileCellTemplates(),n.grid.refreshCanvas(!0)})});var o=[];n.grid.options.fastWatch?(n.uiGrid=a.uiGrid,angular.isString(a.uiGrid.data)?(o.push(a.$parent.$watch(a.uiGrid.data,m)),o.push(a.$parent.$watch(function(){return n.grid.appScope[a.uiGrid.data]?n.grid.appScope[a.uiGrid.data].length:void 0},m))):(o.push(a.$parent.$watch(function(){return a.uiGrid.data},m)),o.push(a.$parent.$watch(function(){return a.uiGrid.data.length},function(){m(a.uiGrid.data)}))),o.push(a.$parent.$watch(function(){return a.uiGrid.columnDefs},l)),o.push(a.$parent.$watch(function(){return a.uiGrid.columnDefs.length},function(){l(a.uiGrid.columnDefs)}))):(angular.isString(a.uiGrid.data)?o.push(a.$parent.$watchCollection(a.uiGrid.data,m)):o.push(a.$parent.$watchCollection(function(){return a.uiGrid.data},m)),o.push(a.$parent.$watchCollection(function(){return a.uiGrid.columnDefs},l)));var p,q=a.$watch(function(){return n.grid.styleComputations},function(){n.grid.refreshCanvas(!0)});a.$on("$destroy",function(){o.forEach(function(a){a()}),q()}),n.fireEvent=function(b,c){("undefined"==typeof c||void 0===c)&&(c={}),("undefined"==typeof c.grid||void 0===c.grid)&&(c.grid=n.grid),a.$broadcast(b,c)},n.innerCompile=function(b){k(b)(a)}}]),angular.module("ui.grid").directive("uiGrid",a),a.$inject=["$compile","$templateCache","$timeout","$window","gridUtil","uiGridConstants"]}(),function(){"use strict";angular.module("ui.grid").directive("uiGridPinnedContainer",["gridUtil",function(a){return{restrict:"EA",replace:!0,template:'<div class="ui-grid-pinned-container"><div ui-grid-render-container container-id="side" row-container-name="\'body\'" col-container-name="side" bind-scroll-vertical="true" class="{{ side }} ui-grid-render-container-{{ side }}"></div></div>',scope:{side:"=uiGridPinnedContainer"},require:"^uiGrid",compile:function(){return{post:function(a,b,c,d){function e(){var a=this,b=0;a.visibleColumnCache.forEach(function(a){b+=a.drawnWidth});var c=a.getViewportAdjustment();return b+=c.width}function f(){if("left"===a.side||"right"===a.side){for(var b=h.renderContainers[a.side].visibleColumnCache,c=0,d=0;d<b.length;d++){var e=b[d];c+=e.drawnWidth||e.width||0}return c}}function g(){var c="";return("left"===a.side||"right"===a.side)&&(i=f(),b.attr("style",null),c+=".grid"+h.id+" .ui-grid-pinned-container-"+a.side+", .grid"+h.id+" .ui-grid-pinned-container-"+a.side+" .ui-grid-render-container-"+a.side+" .ui-grid-viewport { width: "+i+"px; } "),c}var h=d.grid,i=0;b.addClass("ui-grid-pinned-container-"+a.side),("left"===a.side||"right"===a.side)&&(h.renderContainers[a.side].getViewportWidth=e),h.renderContainers.body.registerViewportAdjuster(function(b){return i=f(),b.width-=i,b.side=a.side,b}),h.registerStyleComputation({priority:15,func:g})}}}}}])}(),function(){angular.module("ui.grid").factory("Grid",["$q","$compile","$parse","gridUtil","uiGridConstants","GridOptions","GridColumn","GridRow","GridApi","rowSorter","rowSearcher","GridRenderContainer","$timeout","ScrollEvent",function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){function o(){}var p=function(a){function b(a){g.isScrollingVertically=!1,g.api.core.raise.scrollEnd(a),g.scrollDirection=e.scrollDirection.NONE}function c(a){g.isScrollingHorizontally=!1,g.api.core.raise.scrollEnd(a),g.scrollDirection=e.scrollDirection.NONE}var g=this;if(void 0===a||"undefined"==typeof a.id||!a.id)throw new Error("No ID provided. An ID must be given when creating a grid.");if(!/^[_a-zA-Z0-9-]+$/.test(a.id))throw new Error("Grid id '"+a.id+'" is invalid. It must follow CSS selector syntax rules.');g.id=a.id,delete a.id,g.options=f.initialize(a),g.appScope=g.options.appScopeProvider,g.headerHeight=g.options.headerRowHeight,g.footerHeight=g.calcFooterHeight(),g.columnFooterHeight=g.calcColumnFooterHeight(),g.rtl=!1,g.gridHeight=0,g.gridWidth=0,g.columnBuilders=[],g.rowBuilders=[],g.rowsProcessors=[],g.columnsProcessors=[],g.styleComputations=[],g.viewportAdjusters=[],g.rowHeaderColumns=[],g.dataChangeCallbacks={},g.verticalScrollSyncCallBackFns={},g.horizontalScrollSyncCallBackFns={},g.renderContainers={},g.renderContainers.body=new l("body",g),g.cellValueGetterCache={},g.getRowTemplateFn=null,g.rows=[],g.columns=[],g.isScrollingVertically=!1,g.isScrollingHorizontally=!1,g.scrollDirection=e.scrollDirection.NONE,g.disableScrolling=!1;var h=d.debounce(b,g.options.scrollDebounce),k=d.debounce(b,0),m=d.debounce(c,g.options.scrollDebounce),n=d.debounce(c,0);g.flagScrollingVertically=function(a){g.isScrollingVertically||g.isScrollingHorizontally||g.api.core.raise.scrollBegin(a),g.isScrollingVertically=!0,0!==g.options.scrollDebounce&&a.withDelay?h(a):k(a)},g.flagScrollingHorizontally=function(a){g.isScrollingVertically||g.isScrollingHorizontally||g.api.core.raise.scrollBegin(a),g.isScrollingHorizontally=!0,0!==g.options.scrollDebounce&&a.withDelay?m(a):n(a)},g.scrollbarHeight=0,g.scrollbarWidth=0,g.options.enableHorizontalScrollbar===e.scrollbars.ALWAYS&&(g.scrollbarHeight=d.getScrollbarWidth()),g.options.enableVerticalScrollbar===e.scrollbars.ALWAYS&&(g.scrollbarWidth=d.getScrollbarWidth()),g.api=new i(g),g.api.registerMethod("core","refresh",this.refresh),g.api.registerMethod("core","queueGridRefresh",this.queueGridRefresh),g.api.registerMethod("core","refreshRows",this.refreshRows),g.api.registerMethod("core","queueRefresh",this.queueRefresh),g.api.registerMethod("core","handleWindowResize",this.handleWindowResize),g.api.registerMethod("core","addRowHeaderColumn",this.addRowHeaderColumn),g.api.registerMethod("core","scrollToIfNecessary",function(a,b){return g.scrollToIfNecessary(a,b)}),g.api.registerMethod("core","scrollTo",function(a,b){return g.scrollTo(a,b)}),g.api.registerMethod("core","registerRowsProcessor",this.registerRowsProcessor),g.api.registerMethod("core","registerColumnsProcessor",this.registerColumnsProcessor),g.api.registerMethod("core","sortHandleNulls",j.handleNulls),g.api.registerEvent("core","sortChanged"),g.api.registerEvent("core","columnVisibilityChanged"),g.api.registerMethod("core","notifyDataChange",this.notifyDataChange),g.api.registerMethod("core","clearAllFilters",this.clearAllFilters),g.registerDataChangeCallback(g.columnRefreshCallback,[e.dataChange.COLUMN]),g.registerDataChangeCallback(g.processRowsCallback,[e.dataChange.EDIT]),g.registerDataChangeCallback(g.updateFooterHeightCallback,[e.dataChange.OPTIONS]),g.registerStyleComputation({priority:10,func:g.getFooterStyles})};return p.prototype.calcFooterHeight=function(){if(!this.hasFooter())return 0;var a=0;return this.options.showGridFooter&&(a+=this.options.gridFooterHeight),a+=this.calcColumnFooterHeight()},p.prototype.calcColumnFooterHeight=function(){var a=0;return this.options.showColumnFooter&&(a+=this.options.columnFooterHeight),a},p.prototype.getFooterStyles=function(){var a=".grid"+this.id+" .ui-grid-footer-aggregates-row { height: "+this.options.columnFooterHeight+"px; }";return a+=" .grid"+this.id+" .ui-grid-footer-info { height: "+this.options.gridFooterHeight+"px; }"},p.prototype.hasFooter=function(){return this.options.showGridFooter||this.options.showColumnFooter},p.prototype.isRTL=function(){return this.rtl},p.prototype.registerColumnBuilder=function(a){this.columnBuilders.push(a)},p.prototype.buildColumnDefsFromData=function(a){this.options.columnDefs=d.getColumnsFromData(a,this.options.excludeProperties)},p.prototype.registerRowBuilder=function(a){this.rowBuilders.push(a)},p.prototype.registerDataChangeCallback=function(a,b,c){var f=d.nextUid();b||(b=[e.dataChange.ALL]),Array.isArray(b)||d.logError("Expected types to be an array or null in registerDataChangeCallback, value passed was: "+b),this.dataChangeCallbacks[f]={callback:a,types:b,_this:c};var g=this,h=function(){delete g.dataChangeCallbacks[f]};return h},p.prototype.callDataChangeCallbacks=function(a,b){angular.forEach(this.dataChangeCallbacks,function(b,c){(-1!==b.types.indexOf(e.dataChange.ALL)||-1!==b.types.indexOf(a)||a===e.dataChange.ALL)&&(b._this?b.callback.apply(b._this,this):b.callback(this))},this)},p.prototype.notifyDataChange=function(a){var b=e.dataChange;a===b.ALL||a===b.COLUMN||a===b.EDIT||a===b.ROW||a===b.OPTIONS?this.callDataChangeCallbacks(a):d.logError("Notified of a data change, but the type was not recognised, so no action taken, type was: "+a)},p.prototype.columnRefreshCallback=function(a){a.buildColumns(),a.queueGridRefresh()},p.prototype.processRowsCallback=function(a){a.queueGridRefresh()},p.prototype.updateFooterHeightCallback=function(a){a.footerHeight=a.calcFooterHeight(),a.columnFooterHeight=a.calcColumnFooterHeight()},p.prototype.getColumn=function(a){var b=this.columns.filter(function(b){return b.colDef.name===a});return b.length>0?b[0]:null},p.prototype.getColDef=function(a){var b=this.options.columnDefs.filter(function(b){return b.name===a});return b.length>0?b[0]:null},p.prototype.assignTypes=function(){var a=this;a.options.columnDefs.forEach(function(b,c){if(!b.type){var e=new g(b,c,a),f=a.rows.length>0?a.rows[0]:null;f?b.type=d.guessType(a.getCellValue(f,e)):b.type="string"}})},p.prototype.isRowHeaderColumn=function(a){return-1!==this.rowHeaderColumns.indexOf(a)},p.prototype.addRowHeaderColumn=function(a){var b=this,c=new g(a,d.nextUid(),b);c.isRowHeader=!0,b.isRTL()?(b.createRightContainer(),c.renderContainer="right"):(b.createLeftContainer(),c.renderContainer="left"),b.columnBuilders[0](a,c,b.options).then(function(){c.enableFiltering=!1,c.enableSorting=!1,c.enableHiding=!1,b.rowHeaderColumns.push(c),b.buildColumns().then(function(){b.preCompileCellTemplates(),b.queueGridRefresh()})})},p.prototype.getOnlyDataColumns=function(){var a=this,b=[];return a.columns.forEach(function(c){-1===a.rowHeaderColumns.indexOf(c)&&b.push(c)}),b},p.prototype.buildColumns=function(b){var c={orderByColumnDefs:!1};angular.extend(c,b);var e,f=this,h=[],i=f.rowHeaderColumns.length;for(e=0;e<f.columns.length;e++)f.getColDef(f.columns[e].name)||(f.columns.splice(e,1),e--);if(f.rowHeaderColumns.forEach(function(a){f.columns.unshift(a)}),f.options.columnDefs.forEach(function(a,b){f.preprocessColDef(a);var c=f.getColumn(a.name);c?c.updateColumnDef(a,!1):(c=new g(a,d.nextUid(),f),f.columns.splice(b+i,0,c)),f.columnBuilders.forEach(function(b){h.push(b.call(f,a,c,f.options))})}),c.orderByColumnDefs){var j=f.columns.slice(0),k=Math.min(f.options.columnDefs.length,f.columns.length);for(e=0;k>e;e++)f.columns[e+i].name!==f.options.columnDefs[e].name?j[e+i]=f.getColumn(f.options.columnDefs[e].name):j[e+i]=f.columns[e+i];f.columns.length=0,Array.prototype.splice.apply(f.columns,[0,0].concat(j))}return a.all(h).then(function(){f.rows.length>0&&f.assignTypes()})},p.prototype.preCompileCellTemplates=function(){var a=this,c=function(c){var d=c.cellTemplate.replace(e.MODEL_COL_FIELD,a.getQualifiedColField(c));d=d.replace(e.COL_FIELD,"grid.getCellValue(row, col)");var f=b(d);c.compiledElementFn=f,c.compiledElementFnDefer&&c.compiledElementFnDefer.resolve(c.compiledElementFn)};this.columns.forEach(function(a){a.cellTemplate?c(a):a.cellTemplatePromise&&a.cellTemplatePromise.then(function(){c(a)})})},p.prototype.getQualifiedColField=function(a){return"row.entity."+d.preEval(a.field)},p.prototype.createLeftContainer=function(){this.hasLeftContainer()||(this.renderContainers.left=new l("left",this,{disableColumnOffset:!0}))},p.prototype.createRightContainer=function(){this.hasRightContainer()||(this.renderContainers.right=new l("right",this,{disableColumnOffset:!0}))},p.prototype.hasLeftContainer=function(){return void 0!==this.renderContainers.left},p.prototype.hasRightContainer=function(){return void 0!==this.renderContainers.right},p.prototype.preprocessColDef=function(a){var b=this;if(!a.field&&!a.name)throw new Error("colDef.name or colDef.field property is required");if(void 0===a.name&&void 0!==a.field){for(var c=a.field,d=2;b.getColumn(c);)c=a.field+d.toString(),d++;a.name=c}},p.prototype.newInN=function(a,b,c,d){for(var e=this,f=[],g=0;g<b.length;g++){for(var h=d?b[g][d]:b[g],i=!1,j=0;j<a.length;j++){var k=c?a[j][c]:a[j];if(e.options.rowEquality(h,k)){i=!0;break}}i||f.push(h)}return f},p.prototype.getRow=function(a,b){var c=this;b="undefined"==typeof b?c.rows:b;var d=b.filter(function(b){return c.options.rowEquality(b.entity,a)});return d.length>0?d[0]:null},p.prototype.modifyRows=function(b){var c=this,d=c.rows.slice(0),e=c.rowHashMap||c.createRowHashMap();c.rowHashMap=c.createRowHashMap(),c.rows.length=0,b.forEach(function(a,b){var f;f=c.options.enableRowHashing?e.get(a):c.getRow(a,d),f||(f=c.processRowBuilders(new h(a,b,c))),c.rows.push(f),c.rowHashMap.put(a,f)}),c.assignTypes();var f=a.when(c.processRowsProcessors(c.rows)).then(function(a){return c.setVisibleRows(a)}),g=a.when(c.processColumnsProcessors(c.columns)).then(function(a){return c.setVisibleColumns(a)});return a.all([f,g])},p.prototype.addRows=function(a){for(var b=this,c=b.rows.length,d=0;d<a.length;d++){var e=b.processRowBuilders(new h(a[d],d+c,b));if(b.options.enableRowHashing){var f=b.rowHashMap.get(e.entity);f&&(f.row=e)}b.rows.push(e)}},p.prototype.processRowBuilders=function(a){var b=this;return b.rowBuilders.forEach(function(c){c.call(b,a,b.options)}),a},p.prototype.registerStyleComputation=function(a){this.styleComputations.push(a)},p.prototype.registerRowsProcessor=function(a,b){if(!angular.isFunction(a))throw"Attempt to register non-function rows processor: "+a;this.rowsProcessors.push({processor:a,priority:b}),this.rowsProcessors.sort(function(a,b){return a.priority-b.priority})},p.prototype.removeRowsProcessor=function(a){var b=-1;this.rowsProcessors.forEach(function(c,d){c.processor===a&&(b=d)}),-1!==b&&this.rowsProcessors.splice(b,1)},p.prototype.processRowsProcessors=function(b){function c(b,e){var g=d.rowsProcessors[b].processor;return a.when(g.call(d,e,d.columns)).then(function(a){if(!a)throw"Processor at index "+b+" did not return a set of renderable rows";if(!angular.isArray(a))throw"Processor at index "+b+" did not return an array";return b++,b<=d.rowsProcessors.length-1?c(b,a):void f.resolve(a)})}var d=this,e=b.slice(0);if(0===d.rowsProcessors.length)return a.when(e);var f=a.defer();return c(0,e),f.promise},p.prototype.setVisibleRows=function(a){var b=this;for(var c in b.renderContainers){var d=b.renderContainers[c];d.canvasHeightShouldUpdate=!0,"undefined"==typeof d.visibleRowCache?d.visibleRowCache=[]:d.visibleRowCache.length=0}for(var e=0;e<a.length;e++){var f=a[e],g="undefined"!=typeof f.renderContainer&&f.renderContainer?f.renderContainer:"body";f.visible&&b.renderContainers[g].visibleRowCache.push(f)}b.api.core.raise.rowsRendered(this.api)},p.prototype.registerColumnsProcessor=function(a,b){if(!angular.isFunction(a))throw"Attempt to register non-function rows processor: "+a;this.columnsProcessors.push({processor:a,priority:b}),this.columnsProcessors.sort(function(a,b){return a.priority-b.priority})},p.prototype.removeColumnsProcessor=function(a){var b=this.columnsProcessors.indexOf(a);"undefined"!=typeof b&&void 0!==b&&this.columnsProcessors.splice(b,1)},p.prototype.processColumnsProcessors=function(b){function c(b,g){var h=d.columnsProcessors[b].processor;return a.when(h.call(d,g,d.rows)).then(function(a){if(!a)throw"Processor at index "+b+" did not return a set of renderable rows";if(!angular.isArray(a))throw"Processor at index "+b+" did not return an array";return b++,b<=d.columnsProcessors.length-1?c(b,e):void f.resolve(e)})}var d=this,e=b.slice(0);if(0===d.columnsProcessors.length)return a.when(e);var f=a.defer();return c(0,e),f.promise},p.prototype.setVisibleColumns=function(a){var b=this;for(var c in b.renderContainers){var d=b.renderContainers[c];d.visibleColumnCache.length=0}for(var e=0;e<a.length;e++){var f=a[e];f.visible&&("undefined"!=typeof f.renderContainer&&f.renderContainer?b.renderContainers[f.renderContainer].visibleColumnCache.push(f):b.renderContainers.body.visibleColumnCache.push(f))}},p.prototype.handleWindowResize=function(a){var b=this;return b.gridWidth=d.elementWidth(b.element),b.gridHeight=d.elementHeight(b.element),b.queueRefresh()},p.prototype.queueRefresh=function(){var a=this;return a.refreshCanceller&&m.cancel(a.refreshCanceller),a.refreshCanceller=m(function(){a.refreshCanvas(!0)}),a.refreshCanceller.then(function(){a.refreshCanceller=null}),a.refreshCanceller},p.prototype.queueGridRefresh=function(){var a=this;return a.gridRefreshCanceller&&m.cancel(a.gridRefreshCanceller),a.gridRefreshCanceller=m(function(){a.refresh(!0)}),a.gridRefreshCanceller.then(function(){a.gridRefreshCanceller=null}),a.gridRefreshCanceller},p.prototype.updateCanvasHeight=function(){var a=this;for(var b in a.renderContainers)if(a.renderContainers.hasOwnProperty(b)){var c=a.renderContainers[b];c.canvasHeightShouldUpdate=!0}},p.prototype.buildStyles=function(){var a=this;a.customStyles="",a.styleComputations.sort(function(a,b){return null===a.priority?1:null===b.priority?-1:null===a.priority&&null===b.priority?0:a.priority-b.priority}).forEach(function(b){var c=b.func.call(a);angular.isString(c)&&(a.customStyles+="\n"+c)})},p.prototype.minColumnsToRender=function(){var a=this,b=this.getViewportWidth(),c=0,d=0;return a.columns.forEach(function(e,f){if(b>d)d+=e.drawnWidth,c++;else{for(var g=0,h=f;h>=f-c;h--)g+=a.columns[h].drawnWidth;b>g&&c++}}),c},p.prototype.getBodyHeight=function(){var a=this.getViewportHeight();return a},p.prototype.getViewportHeight=function(){var a=this,b=this.gridHeight-this.headerHeight-this.footerHeight,c=a.getViewportAdjustment();return b+=c.height},p.prototype.getViewportWidth=function(){var a=this,b=this.gridWidth,c=a.getViewportAdjustment();return b+=c.width},p.prototype.getHeaderViewportWidth=function(){var a=this.getViewportWidth();return a},p.prototype.addVerticalScrollSync=function(a,b){this.verticalScrollSyncCallBackFns[a]=b},p.prototype.addHorizontalScrollSync=function(a,b){this.horizontalScrollSyncCallBackFns[a]=b},p.prototype.scrollContainers=function(a,b){if(b.y){var c=["body","left","right"];this.flagScrollingVertically(b),"body"===a?c=["left","right"]:"left"===a?c=["body","right"]:"right"===a&&(c=["body","left"]);for(var d=0;d<c.length;d++){var e=c[d];this.verticalScrollSyncCallBackFns[e]&&this.verticalScrollSyncCallBackFns[e](b)}}if(b.x){var f=["body","bodyheader","bodyfooter"];this.flagScrollingHorizontally(b),"body"===a&&(f=["bodyheader","bodyfooter"]);for(var g=0;g<f.length;g++){var h=f[g];this.horizontalScrollSyncCallBackFns[h]&&this.horizontalScrollSyncCallBackFns[h](b)}}},p.prototype.registerViewportAdjuster=function(a){this.viewportAdjusters.push(a)},p.prototype.removeViewportAdjuster=function(a){var b=this.viewportAdjusters.indexOf(a);"undefined"!=typeof b&&void 0!==b&&this.viewportAdjusters.splice(b,1)},p.prototype.getViewportAdjustment=function(){var a=this,b={height:0,width:0};return a.viewportAdjusters.forEach(function(a){b=a.call(this,b)}),b},p.prototype.getVisibleRowCount=function(){return this.renderContainers.body.visibleRowCache.length},p.prototype.getVisibleRows=function(){return this.renderContainers.body.visibleRowCache},p.prototype.getVisibleColumnCount=function(){return this.renderContainers.body.visibleColumnCache.length},p.prototype.searchRows=function(a){return k.search(this,a,this.columns)},p.prototype.sortByColumn=function(a){return j.sort(this,a,this.columns)},p.prototype.getCellValue=function(a,b){return"undefined"!=typeof a.entity["$$"+b.uid]?a.entity["$$"+b.uid].rendered:this.options.flatEntityAccess&&"undefined"!=typeof b.field?a.entity[b.field]:(b.cellValueGetterCache||(b.cellValueGetterCache=c(a.getEntityQualifiedColField(b))),b.cellValueGetterCache(a))},p.prototype.getCellDisplayValue=function(a,b){if(!b.cellDisplayGetterCache){var d=b.cellFilter?" | "+b.cellFilter:"";"undefined"!=typeof a.entity["$$"+b.uid]?b.cellDisplayGetterCache=c(a.entity["$$"+b.uid].rendered+d):this.options.flatEntityAccess&&"undefined"!=typeof b.field?b.cellDisplayGetterCache=c(a.entity[b.field]+d):b.cellDisplayGetterCache=c(a.getEntityQualifiedColField(b)+d)}return b.cellDisplayGetterCache(a)},p.prototype.getNextColumnSortPriority=function(){var a=this,b=0;return a.columns.forEach(function(a){a.sort&&void 0!==a.sort.priority&&a.sort.priority>=b&&(b=a.sort.priority+1)}),b},p.prototype.resetColumnSorting=function(a){var b=this;b.columns.forEach(function(b){b===a||b.suppressRemoveSort||(b.sort={})})},p.prototype.getColumnSorting=function(){var a,b=this,c=[];return a=b.columns.slice(0),a.sort(j.prioritySort).forEach(function(a){a.sort&&"undefined"!=typeof a.sort.direction&&a.sort.direction&&(a.sort.direction===e.ASC||a.sort.direction===e.DESC)&&c.push(a)}),c},p.prototype.sortColumn=function(b,c,d){var e=this,f=null;if("undefined"==typeof b||!b)throw new Error("No column parameter provided");if("boolean"==typeof c?d=c:f=c,d?b.sort.priority||(b.sort.priority=e.getNextColumnSortPriority()):(e.resetColumnSorting(b),b.sort.priority=void 0,b.sort.priority=e.getNextColumnSortPriority()),f)b.sort.direction=f;else{var g=b.sortDirectionCycle.indexOf(b.sort.direction?b.sort.direction:null);g=(g+1)%b.sortDirectionCycle.length,b.colDef&&b.suppressRemoveSort&&!b.sortDirectionCycle[g]&&(g=(g+1)%b.sortDirectionCycle.length),b.sortDirectionCycle[g]?b.sort.direction=b.sortDirectionCycle[g]:b.sort={}}return e.api.core.raise.sortChanged(e,e.getColumnSorting()),a.when(b)},p.prototype.renderingComplete=function(){angular.isFunction(this.options.onRegisterApi)&&this.options.onRegisterApi(this.api),this.api.core.raise.renderingComplete(this.api)},p.prototype.createRowHashMap=function(){var a=this,b=new o;return b.grid=a,b},p.prototype.refresh=function(b){var c=this,d=c.processRowsProcessors(c.rows).then(function(a){c.setVisibleRows(a)}),e=c.processColumnsProcessors(c.columns).then(function(a){c.setVisibleColumns(a)});return a.all([d,e]).then(function(){c.redrawInPlace(b),c.refreshCanvas(!0)})},p.prototype.refreshRows=function(){var a=this;return a.processRowsProcessors(a.rows).then(function(b){a.setVisibleRows(b),a.redrawInPlace(),a.refreshCanvas(!0)})},p.prototype.refreshCanvas=function(b){var c=this;b&&c.buildStyles();var e=a.defer(),f=[];for(var g in c.renderContainers)if(c.renderContainers.hasOwnProperty(g)){var h=c.renderContainers[g];if(null===h.canvasWidth||isNaN(h.canvasWidth))continue;(h.header||h.headerCanvas)&&(h.explicitHeaderHeight=h.explicitHeaderHeight||null,h.explicitHeaderCanvasHeight=h.explicitHeaderCanvasHeight||null,f.push(h))}return f.length>0?(b&&c.buildStyles(),m(function(){var a,g,h=!1,i=0,j=0,k=function(a,b){return a!==b&&(h=!0),b};for(a=0;a<f.length;a++)if(g=f[a],null!==g.canvasWidth&&!isNaN(g.canvasWidth)){if(g.header){var l=g.headerHeight=k(g.headerHeight,parseInt(d.outerElementHeight(g.header),10)),m=d.getBorderSize(g.header,"top"),n=d.getBorderSize(g.header,"bottom"),o=parseInt(l-m-n,10);o=0>o?0:o,g.innerHeaderHeight=o,!g.explicitHeaderHeight&&o>i&&(i=o)}if(g.headerCanvas){var p=g.headerCanvasHeight=k(g.headerCanvasHeight,parseInt(d.outerElementHeight(g.headerCanvas),10));!g.explicitHeaderCanvasHeight&&p>j&&(j=p)}}for(a=0;a<f.length;a++)g=f[a],i>0&&"undefined"!=typeof g.headerHeight&&null!==g.headerHeight&&(g.explicitHeaderHeight||g.headerHeight<i)&&(g.explicitHeaderHeight=k(g.explicitHeaderHeight,i)),j>0&&"undefined"!=typeof g.headerCanvasHeight&&null!==g.headerCanvasHeight&&(g.explicitHeaderCanvasHeight||g.headerCanvasHeight<j)&&(g.explicitHeaderCanvasHeight=k(g.explicitHeaderCanvasHeight,j));b&&h&&c.buildStyles(),e.resolve()})):m(function(){e.resolve()}),e.promise},p.prototype.redrawInPlace=function(a){var b=this;for(var c in b.renderContainers){var d=b.renderContainers[c];a?(d.adjustRows(d.prevScrollTop,null),d.adjustColumns(d.prevScrollLeft,null)):(d.adjustRows(null,d.prevScrolltopPercentage),d.adjustColumns(null,d.prevScrollleftPercentage))}},p.prototype.hasLeftContainerColumns=function(){return this.hasLeftContainer()&&this.renderContainers.left.renderedColumns.length>0},p.prototype.hasRightContainerColumns=function(){return this.hasRightContainer()&&this.renderContainers.right.renderedColumns.length>0},p.prototype.scrollToIfNecessary=function(b,c){var d=this,e=new n(d,"uiGrid.scrollToIfNecessary"),f=d.renderContainers.body.visibleRowCache,g=d.renderContainers.body.visibleColumnCache,h=d.renderContainers.body.prevScrollTop+d.headerHeight;h=0>h?0:h;var i=d.renderContainers.body.prevScrollLeft,j=d.renderContainers.body.prevScrollTop+d.gridHeight-d.renderContainers.body.headerHeight-d.footerHeight-d.scrollbarWidth,k=d.renderContainers.body.prevScrollLeft+Math.ceil(d.renderContainers.body.getViewportWidth());if(null!==b){var l=f.indexOf(b),m=d.renderContainers.body.getCanvasHeight()-d.renderContainers.body.getViewportHeight(),o=l*d.options.rowHeight+d.headerHeight;o=0>o?0:o;var p,q;h>o?(p=d.renderContainers.body.prevScrollTop-(h-o),q=p/m,e.y={percentage:q}):o>j&&(p=o-j+d.renderContainers.body.prevScrollTop,q=p/m,e.y={percentage:q})}if(null!==c){for(var r=g.indexOf(c),s=d.renderContainers.body.getCanvasWidth()-d.renderContainers.body.getViewportWidth(),t=0,u=0;r>u;u++){var v=g[u];t+=v.drawnWidth}t=0>t?0:t;var w=t+c.drawnWidth;w=0>w?0:w;var x,y;i>t?(x=d.renderContainers.body.prevScrollLeft-(i-t),y=x/s,y=y>1?1:y,e.x={percentage:y}):w>k&&(x=w-k+d.renderContainers.body.prevScrollLeft,y=x/s,y=y>1?1:y,e.x={percentage:y})}var z=a.defer();if(e.y||e.x){e.withDelay=!1,d.scrollContainers("",e);var A=d.api.core.on.scrollEnd(null,function(){z.resolve(e),A()})}else z.resolve();return z.promise},p.prototype.scrollTo=function(a,b){var c=null,d=null;return null!==a&&"undefined"!=typeof a&&(c=this.getRow(a)),null!==b&&"undefined"!=typeof b&&(d=this.getColumn(b.name?b.name:b.field)),this.scrollToIfNecessary(c,d)},p.prototype.clearAllFilters=function(a,b,c){return void 0===a&&(a=!0),void 0===b&&(b=!1),void 0===c&&(c=!1),this.columns.forEach(function(a){a.filters.forEach(function(a){a.term=void 0,b&&(a.condition=void 0),c&&(a.flags=void 0)})}),a?this.refreshRows():void 0},o.prototype={put:function(a,b){this[this.grid.options.rowIdentity(a)]=b},get:function(a){return this[this.grid.options.rowIdentity(a)]},remove:function(a){var b=this[a=this.grid.options.rowIdentity(a)];return delete this[a],b}},p}])}(),function(){angular.module("ui.grid").factory("GridApi",["$q","$rootScope","gridUtil","uiGridConstants","GridRow","uiGridGridMenuService",function(a,b,c,d,e,f){function g(a,c,d,e){return b.$on(a,function(a){var b=Array.prototype.slice.call(arguments);b.splice(0,1),c.apply(e?e:d.api,b)})}var h=function(a){this.grid=a,this.listeners=[],this.registerEvent("core","renderingComplete"),this.registerEvent("core","filterChanged"),this.registerMethod("core","setRowInvisible",e.prototype.setRowInvisible),this.registerMethod("core","clearRowInvisible",e.prototype.clearRowInvisible),this.registerMethod("core","getVisibleRows",this.grid.getVisibleRows),this.registerEvent("core","rowsVisibleChanged"),this.registerEvent("core","rowsRendered"),this.registerEvent("core","scrollBegin"),this.registerEvent("core","scrollEnd"),this.registerEvent("core","canvasHeightChanged")};return h.prototype.suppressEvents=function(a,b){var c=this,d=angular.isArray(a)?a:[a],e=c.listeners.filter(function(a){return d.some(function(b){return a.handler===b})});e.forEach(function(a){a.dereg()}),b(),e.forEach(function(a){a.dereg=g(a.eventId,a.handler,c.grid,a._this)})},h.prototype.registerEvent=function(a,d){var e=this;e[a]||(e[a]={});var f=e[a];f.on||(f.on={},f.raise={});var h=e.grid.id+a+d;f.raise[d]=function(){b.$emit.apply(b,[h].concat(Array.prototype.slice.call(arguments)))},f.on[d]=function(b,f,i){if(null!==b&&"undefined"==typeof b.$on)return void c.logError("asked to listen on "+a+".on."+d+" but scope wasn't passed in the input parameters.  It is legitimate to pass null, but you've passed something else, so you probably forgot to provide scope rather than did it deliberately, not registering");
var j=g(h,f,e.grid,i),k={handler:f,dereg:j,eventId:h,scope:b,_this:i};e.listeners.push(k);var l=function(){k.dereg();var a=e.listeners.indexOf(k);e.listeners.splice(a,1)};return b&&b.$on("$destroy",function(){l()}),l}},h.prototype.registerEventsFromObject=function(a){var b=this,c=[];angular.forEach(a,function(a,b){var d={name:b,events:[]};angular.forEach(a,function(a,b){d.events.push(b)}),c.push(d)}),c.forEach(function(a){a.events.forEach(function(c){b.registerEvent(a.name,c)})})},h.prototype.registerMethod=function(a,b,d,e){this[a]||(this[a]={});var f=this[a];f[b]=c.createBoundedWrapper(e||this.grid,d)},h.prototype.registerMethodsFromObject=function(a,b){var c=this,d=[];angular.forEach(a,function(a,b){var c={name:b,methods:[]};angular.forEach(a,function(a,b){c.methods.push({name:b,fn:a})}),d.push(c)}),d.forEach(function(a){a.methods.forEach(function(d){c.registerMethod(a.name,d.name,d.fn,b)})})},h}])}(),function(){angular.module("ui.grid").factory("GridColumn",["gridUtil","uiGridConstants","i18nService",function(a,b,c){function d(a,c,d){var e=this;e.grid=d,e.uid=c,e.updateColumnDef(a,!0),e.aggregationValue=void 0,e.updateAggregationValue=function(){if(!e.aggregationType)return void(e.aggregationValue=void 0);var a=0,c=e.grid.getVisibleRows(),d=function(){var a=[];return c.forEach(function(b){var c=e.grid.getCellValue(b,e),d=Number(c);isNaN(d)||a.push(d)}),a};angular.isFunction(e.aggregationType)?e.aggregationValue=e.aggregationType(c,e):e.aggregationType===b.aggregationTypes.count?e.aggregationValue=e.grid.getVisibleRowCount():e.aggregationType===b.aggregationTypes.sum?(d().forEach(function(b){a+=b}),e.aggregationValue=a):e.aggregationType===b.aggregationTypes.avg?(d().forEach(function(b){a+=b}),a/=d().length,e.aggregationValue=a):e.aggregationType===b.aggregationTypes.min?e.aggregationValue=Math.min.apply(null,d()):e.aggregationType===b.aggregationTypes.max?e.aggregationValue=Math.max.apply(null,d()):e.aggregationValue="Â "},this.getAggregationValue=function(){return e.aggregationValue}}return d.prototype.hideColumn=function(){this.colDef.visible=!1},d.prototype.setPropertyOrDefault=function(a,b,c){var d=this;"undefined"!=typeof a[b]&&a[b]?d[b]=a[b]:"undefined"!=typeof d[b]?d[b]=d[b]:d[b]=c?c:{}},d.prototype.updateColumnDef=function(c,d){var e=this;if(e.colDef=c,void 0===c.name)throw new Error("colDef.name is required for column at index "+e.grid.options.columnDefs.indexOf(c));if(e.displayName=void 0===c.displayName?a.readableColumnName(c.name):c.displayName,!angular.isNumber(e.width)||!e.hasCustomWidth||c.allowCustomWidthOverride){var f=c.width,g="Cannot parse column width '"+f+"' for column named '"+c.name+"'";if(e.hasCustomWidth=!1,angular.isString(f)||angular.isNumber(f))if(angular.isString(f))if(a.endsWith(f,"%")){var h=f.replace(/%/g,""),i=parseInt(h,10);if(isNaN(i))throw new Error(g);e.width=f}else if(f.match(/^(\d+)$/))e.width=parseInt(f.match(/^(\d+)$/)[1],10);else{if(!f.match(/^\*+$/))throw new Error(g);e.width=f}else e.width=f;else e.width="*"}["minWidth","maxWidth"].forEach(function(a){var b=c[a],d="Cannot parse column "+a+" '"+b+"' for column named '"+c.name+"'";if(angular.isString(b)||angular.isNumber(b))if(angular.isString(b)){if(!b.match(/^(\d+)$/))throw new Error(d);e[a]=parseInt(b.match(/^(\d+)$/)[1],10)}else e[a]=b;else e[a]="minWidth"===a?30:9e3}),e.field=void 0===c.field?c.name:c.field,"string"!=typeof e.field&&a.logError("Field is not a string, this is likely to break the code, Field is: "+e.field),e.name=c.name,e.displayName=void 0===c.displayName?a.readableColumnName(c.name):c.displayName,e.aggregationType=angular.isDefined(c.aggregationType)?c.aggregationType:null,e.footerCellTemplate=angular.isDefined(c.footerCellTemplate)?c.footerCellTemplate:null,"undefined"==typeof c.cellTooltip||c.cellTooltip===!1?e.cellTooltip=!1:c.cellTooltip===!0?e.cellTooltip=function(a,b){return e.grid.getCellValue(a,b)}:"function"==typeof c.cellTooltip?e.cellTooltip=c.cellTooltip:e.cellTooltip=function(a,b){return b.colDef.cellTooltip},"undefined"==typeof c.headerTooltip||c.headerTooltip===!1?e.headerTooltip=!1:c.headerTooltip===!0?e.headerTooltip=function(a){return a.displayName}:"function"==typeof c.headerTooltip?e.headerTooltip=c.headerTooltip:e.headerTooltip=function(a){return a.colDef.headerTooltip},e.footerCellClass=c.footerCellClass,e.cellClass=c.cellClass,e.headerCellClass=c.headerCellClass,e.cellFilter=c.cellFilter?c.cellFilter:"",e.sortCellFiltered=c.sortCellFiltered?!0:!1,e.filterCellFiltered=c.filterCellFiltered?!0:!1,e.headerCellFilter=c.headerCellFilter?c.headerCellFilter:"",e.footerCellFilter=c.footerCellFilter?c.footerCellFilter:"",e.visible=a.isNullOrUndefined(c.visible)||c.visible,e.headerClass=c.headerClass,e.enableSorting="undefined"!=typeof c.enableSorting?c.enableSorting:!0,e.sortingAlgorithm=c.sortingAlgorithm,e.sortDirectionCycle="undefined"!=typeof c.sortDirectionCycle?c.sortDirectionCycle:[null,b.ASC,b.DESC],"undefined"==typeof e.suppressRemoveSort&&(e.suppressRemoveSort="undefined"!=typeof c.suppressRemoveSort?c.suppressRemoveSort:!1),e.enableFiltering="undefined"!=typeof c.enableFiltering?c.enableFiltering:!0,e.setPropertyOrDefault(c,"menuItems",[]),d&&e.setPropertyOrDefault(c,"sort");var j=[];c.filter?j.push(c.filter):c.filters?j=c.filters:j.push({}),d?(e.setPropertyOrDefault(c,"filter"),e.setPropertyOrDefault(c,"filters",j)):e.filters.length===j.length&&e.filters.forEach(function(a,b){"undefined"!=typeof j[b].placeholder&&(a.placeholder=j[b].placeholder),"undefined"!=typeof j[b].ariaLabel&&(a.ariaLabel=j[b].ariaLabel),"undefined"!=typeof j[b].flags&&(a.flags=j[b].flags),"undefined"!=typeof j[b].type&&(a.type=j[b].type),"undefined"!=typeof j[b].selectOptions&&(a.selectOptions=j[b].selectOptions)})},d.prototype.unsort=function(){this.sort={},this.grid.api.core.raise.sortChanged(this.grid,this.grid.getColumnSorting())},d.prototype.getColClass=function(a){var c=b.COL_CLASS_PREFIX+this.uid;return a?"."+c:c},d.prototype.isPinnedLeft=function(){return"left"===this.renderContainer},d.prototype.isPinnedRight=function(){return"right"===this.renderContainer},d.prototype.getColClassDefinition=function(){return" .grid"+this.grid.id+" "+this.getColClass(!0)+" { min-width: "+this.drawnWidth+"px; max-width: "+this.drawnWidth+"px; }"},d.prototype.getRenderContainer=function(){var a=this,b=a.renderContainer;return(null===b||""===b||void 0===b)&&(b="body"),a.grid.renderContainers[b]},d.prototype.showColumn=function(){this.colDef.visible=!0},d.prototype.getAggregationText=function(){var a=this;if(a.colDef.aggregationHideLabel)return"";if(a.colDef.aggregationLabel)return a.colDef.aggregationLabel;switch(a.colDef.aggregationType){case b.aggregationTypes.count:return c.getSafeText("aggregation.count");case b.aggregationTypes.sum:return c.getSafeText("aggregation.sum");case b.aggregationTypes.avg:return c.getSafeText("aggregation.avg");case b.aggregationTypes.min:return c.getSafeText("aggregation.min");case b.aggregationTypes.max:return c.getSafeText("aggregation.max");default:return""}},d.prototype.getCellTemplate=function(){var a=this;return a.cellTemplatePromise},d.prototype.getCompiledElementFn=function(){var a=this;return a.compiledElementFnDefer.promise},d}])}(),function(){angular.module("ui.grid").factory("GridOptions",["gridUtil","uiGridConstants",function(a,b){return{initialize:function(c){return c.onRegisterApi=c.onRegisterApi||angular.noop(),c.data=c.data||[],c.columnDefs=c.columnDefs||[],c.excludeProperties=c.excludeProperties||["$$hashKey"],c.enableRowHashing=c.enableRowHashing!==!1,c.rowIdentity=c.rowIdentity||function(b){return a.hashKey(b)},c.getRowIdentity=c.getRowIdentity||function(a){return a.$$hashKey},c.flatEntityAccess=c.flatEntityAccess===!0,c.showHeader="undefined"!=typeof c.showHeader?c.showHeader:!0,c.showHeader?c.headerRowHeight="undefined"!=typeof c.headerRowHeight?c.headerRowHeight:30:c.headerRowHeight=0,c.rowHeight=c.rowHeight||30,c.minRowsToShow="undefined"!=typeof c.minRowsToShow?c.minRowsToShow:10,c.showGridFooter=c.showGridFooter===!0,c.showColumnFooter=c.showColumnFooter===!0,c.columnFooterHeight="undefined"!=typeof c.columnFooterHeight?c.columnFooterHeight:30,c.gridFooterHeight="undefined"!=typeof c.gridFooterHeight?c.gridFooterHeight:30,c.columnWidth="undefined"!=typeof c.columnWidth?c.columnWidth:50,c.maxVisibleColumnCount="undefined"!=typeof c.maxVisibleColumnCount?c.maxVisibleColumnCount:200,c.virtualizationThreshold="undefined"!=typeof c.virtualizationThreshold?c.virtualizationThreshold:20,c.columnVirtualizationThreshold="undefined"!=typeof c.columnVirtualizationThreshold?c.columnVirtualizationThreshold:10,c.excessRows="undefined"!=typeof c.excessRows?c.excessRows:4,c.scrollThreshold="undefined"!=typeof c.scrollThreshold?c.scrollThreshold:4,c.excessColumns="undefined"!=typeof c.excessColumns?c.excessColumns:4,c.horizontalScrollThreshold="undefined"!=typeof c.horizontalScrollThreshold?c.horizontalScrollThreshold:2,c.aggregationCalcThrottle="undefined"!=typeof c.aggregationCalcThrottle?c.aggregationCalcThrottle:500,c.wheelScrollThrottle="undefined"!=typeof c.wheelScrollThrottle?c.wheelScrollThrottle:70,c.scrollDebounce="undefined"!=typeof c.scrollDebounce?c.scrollDebounce:300,c.enableSorting=c.enableSorting!==!1,c.enableFiltering=c.enableFiltering===!0,c.enableColumnMenus=c.enableColumnMenus!==!1,c.enableVerticalScrollbar="undefined"!=typeof c.enableVerticalScrollbar?c.enableVerticalScrollbar:b.scrollbars.ALWAYS,c.enableHorizontalScrollbar="undefined"!=typeof c.enableHorizontalScrollbar?c.enableHorizontalScrollbar:b.scrollbars.ALWAYS,c.enableMinHeightCheck=c.enableMinHeightCheck!==!1,c.minimumColumnSize="undefined"!=typeof c.minimumColumnSize?c.minimumColumnSize:10,c.rowEquality=c.rowEquality||function(a,b){return a===b},c.headerTemplate=c.headerTemplate||null,c.footerTemplate=c.footerTemplate||"ui-grid/ui-grid-footer",c.gridFooterTemplate=c.gridFooterTemplate||"ui-grid/ui-grid-grid-footer",c.rowTemplate=c.rowTemplate||"ui-grid/ui-grid-row",c.appScopeProvider=c.appScopeProvider||null,c}}}])}(),function(){angular.module("ui.grid").factory("GridRenderContainer",["gridUtil","uiGridConstants",function(a,b){function c(a,b,c){var d=this;d.name=a,d.grid=b,d.visibleRowCache=[],d.visibleColumnCache=[],d.renderedRows=[],d.renderedColumns=[],d.prevScrollTop=0,d.prevScrolltopPercentage=0,d.prevRowScrollIndex=0,d.prevScrollLeft=0,d.prevScrollleftPercentage=0,d.prevColumnScrollIndex=0,d.columnStyles="",d.viewportAdjusters=[],d.hasHScrollbar=!1,d.hasVScrollbar=!1,d.canvasHeightShouldUpdate=!0,d.$$canvasHeight=0,c&&angular.isObject(c)&&angular.extend(d,c),b.registerStyleComputation({priority:5,func:function(){return d.updateColumnWidths(),d.columnStyles}})}return c.prototype.reset=function(){this.visibleColumnCache.length=0,this.visibleRowCache.length=0,this.renderedRows.length=0,this.renderedColumns.length=0},c.prototype.containsColumn=function(a){return-1!==this.visibleColumnCache.indexOf(a)},c.prototype.minRowsToRender=function(){for(var a=this,b=0,c=0,d=a.getViewportHeight(),e=a.visibleRowCache.length-1;d>c&&e>=0;e--)c+=a.visibleRowCache[e].height,b++;return b},c.prototype.minColumnsToRender=function(){for(var a=this,b=this.getViewportWidth(),c=0,d=0,e=0;e<a.visibleColumnCache.length;e++){var f=a.visibleColumnCache[e];if(b>d)d+=f.drawnWidth?f.drawnWidth:0,c++;else{for(var g=0,h=e;h>=e-c;h--)g+=a.visibleColumnCache[h].drawnWidth?a.visibleColumnCache[h].drawnWidth:0;b>g&&c++}}return c},c.prototype.getVisibleRowCount=function(){return this.visibleRowCache.length},c.prototype.registerViewportAdjuster=function(a){this.viewportAdjusters.push(a)},c.prototype.removeViewportAdjuster=function(a){var b=this.viewportAdjusters.indexOf(a);b>-1&&this.viewportAdjusters.splice(b,1)},c.prototype.getViewportAdjustment=function(){var a=this,b={height:0,width:0};return a.viewportAdjusters.forEach(function(a){b=a.call(this,b)}),b},c.prototype.getMargin=function(a){var b=this,c=0;return b.viewportAdjusters.forEach(function(b){var d=b.call(this,{height:0,width:0});d.side&&d.side===a&&(c+=-1*d.width)}),c},c.prototype.getViewportHeight=function(){var a=this,b=a.headerHeight?a.headerHeight:a.grid.headerHeight,c=a.grid.gridHeight-b-a.grid.footerHeight,d=a.getViewportAdjustment();return c+=d.height},c.prototype.getViewportWidth=function(){var a=this,b=a.grid.gridWidth,c=a.getViewportAdjustment();return b+=c.width},c.prototype.getHeaderViewportWidth=function(){var a=this.getViewportWidth();return a},c.prototype.getCanvasHeight=function(){var a=this;if(!a.canvasHeightShouldUpdate)return a.$$canvasHeight;var b=a.$$canvasHeight;return a.$$canvasHeight=0,a.visibleRowCache.forEach(function(b){a.$$canvasHeight+=b.height}),a.canvasHeightShouldUpdate=!1,a.grid.api.core.raise.canvasHeightChanged(b,a.$$canvasHeight),a.$$canvasHeight},c.prototype.getVerticalScrollLength=function(){return this.getCanvasHeight()-this.getViewportHeight()+this.grid.scrollbarHeight},c.prototype.getCanvasWidth=function(){var a=this,b=a.canvasWidth;return b},c.prototype.setRenderedRows=function(a){this.renderedRows.length=a.length;for(var b=0;b<a.length;b++)this.renderedRows[b]=a[b]},c.prototype.setRenderedColumns=function(a){this.renderedColumns.length=a.length;for(var b=0;b<a.length;b++)this.renderedColumns[b]=a[b];this.updateColumnOffset()},c.prototype.updateColumnOffset=function(){for(var a=0,b=0;b<this.currentFirstColumn;b++)a+=this.visibleColumnCache[b].drawnWidth;this.columnOffset=a},c.prototype.scrollVertical=function(a){var c=-1;if(a!==this.prevScrollTop){var d=a-this.prevScrollTop;d>0&&(this.grid.scrollDirection=b.scrollDirection.DOWN),0>d&&(this.grid.scrollDirection=b.scrollDirection.UP);var e=this.getVerticalScrollLength();return c=a/e,c>1&&(c=1),0>c&&(c=0),this.adjustScrollVertical(a,c),c}},c.prototype.scrollHorizontal=function(a){var c=-1;if(a!==this.prevScrollLeft){var d=a-this.prevScrollLeft;d>0&&(this.grid.scrollDirection=b.scrollDirection.RIGHT),0>d&&(this.grid.scrollDirection=b.scrollDirection.LEFT);var e=this.canvasWidth-this.getViewportWidth();return c=0!==e?a/e:0,this.adjustScrollHorizontal(a,c),c}},c.prototype.adjustScrollVertical=function(a,b,c){(this.prevScrollTop!==a||c)&&(("undefined"==typeof a||void 0===a||null===a)&&(a=(this.getCanvasHeight()-this.getViewportHeight())*b),this.adjustRows(a,b,!1),this.prevScrollTop=a,this.prevScrolltopPercentage=b,this.grid.queueRefresh())},c.prototype.adjustScrollHorizontal=function(a,b,c){(this.prevScrollLeft!==a||c)&&(("undefined"==typeof a||void 0===a||null===a)&&(a=(this.getCanvasWidth()-this.getViewportWidth())*b),this.adjustColumns(a,b),this.prevScrollLeft=a,this.prevScrollleftPercentage=b,this.grid.queueRefresh())},c.prototype.adjustRows=function(a,b,c){var d=this,e=d.minRowsToRender(),f=d.visibleRowCache,g=f.length-e;"undefined"!=typeof b&&null!==b||!a||(b=a/d.getVerticalScrollLength());var h=Math.ceil(Math.min(g,g*b));h>g&&(h=g);var i=[];if(f.length>d.grid.options.virtualizationThreshold){if("undefined"!=typeof a&&null!==a){if(!d.grid.suppressParentScrollDown&&d.prevScrollTop<a&&h<d.prevRowScrollIndex+d.grid.options.scrollThreshold&&g>h)return;if(!d.grid.suppressParentScrollUp&&d.prevScrollTop>a&&h>d.prevRowScrollIndex-d.grid.options.scrollThreshold&&g>h)return}var j={},k={};j=Math.max(0,h-d.grid.options.excessRows),k=Math.min(f.length,h+e+d.grid.options.excessRows),i=[j,k]}else{var l=d.visibleRowCache.length;i=[0,Math.max(l,e+d.grid.options.excessRows)]}d.updateViewableRowRange(i),d.prevRowScrollIndex=h},c.prototype.adjustColumns=function(a,b){var c=this,d=c.minColumnsToRender(),e=c.visibleColumnCache,f=e.length-d;if(("undefined"==typeof b||null===b)&&a){var g=c.getCanvasWidth()-c.getViewportWidth();b=a/g}var h=Math.ceil(Math.min(f,f*b));h>f&&(h=f);var i=[];if(e.length>c.grid.options.columnVirtualizationThreshold&&c.getCanvasWidth()>c.getViewportWidth()){var j=Math.max(0,h-c.grid.options.excessColumns),k=Math.min(e.length,h+d+c.grid.options.excessColumns);i=[j,k]}else{var l=c.visibleColumnCache.length;i=[0,Math.max(l,d+c.grid.options.excessColumns)]}c.updateViewableColumnRange(i),c.prevColumnScrollIndex=h},c.prototype.updateViewableRowRange=function(a){var b=this.visibleRowCache.slice(a[0],a[1]);this.currentTopRow=a[0],this.setRenderedRows(b)},c.prototype.updateViewableColumnRange=function(a){var b=this.visibleColumnCache.slice(a[0],a[1]);this.currentFirstColumn=a[0],this.setRenderedColumns(b)},c.prototype.headerCellWrapperStyle=function(){var a=this;if(0!==a.currentFirstColumn){var b=a.columnOffset;return a.grid.isRTL()?{"margin-right":b+"px"}:{"margin-left":b+"px"}}return null},c.prototype.updateColumnWidths=function(){var b=this,c=[],d=0,e=0,f="",g=b.grid.getViewportWidth()-b.grid.scrollbarWidth,h=[];angular.forEach(b.grid.renderContainers,function(a,b){h=h.concat(a.visibleColumnCache)}),h.forEach(function(b,f){var h=0;b.visible&&(angular.isNumber(b.width)?(h=parseInt(b.width,10),e+=h,b.drawnWidth=h):a.endsWith(b.width,"%")?(h=parseInt(parseInt(b.width.replace(/%/g,""),10)/100*g),h>b.maxWidth&&(h=b.maxWidth),h<b.minWidth&&(h=b.minWidth),e+=h,b.drawnWidth=h):angular.isString(b.width)&&-1!==b.width.indexOf("*")&&(d+=b.width.length,c.push(b)))});var i=g-e;if(c.length>0){var j=i/d;c.forEach(function(a){var b=parseInt(a.width.length*j,10);b>a.maxWidth&&(b=a.maxWidth),b<a.minWidth&&(b=a.minWidth),e+=b,a.drawnWidth=b})}for(var k=function(a){a.drawnWidth<a.maxWidth&&l>0&&(a.drawnWidth++,e++,l--,m=!0)},l=g-e,m=!0;l>0&&m;)m=!1,c.forEach(k);var n=function(a){a.drawnWidth>a.minWidth&&o>0&&(a.drawnWidth--,e--,o--,m=!0)},o=e-g;for(m=!0;o>0&&m;)m=!1,c.forEach(n);var p=0;b.visibleColumnCache.forEach(function(a){a.visible&&(p+=a.drawnWidth)}),h.forEach(function(a){f+=a.getColClassDefinition()}),b.canvasWidth=p,this.columnStyles=f},c.prototype.needsHScrollbarPlaceholder=function(){return this.grid.options.enableHorizontalScrollbar&&!this.hasHScrollbar&&!this.grid.disableScrolling},c.prototype.getViewportStyle=function(){var a=this,c={};return a.hasHScrollbar=!1,a.hasVScrollbar=!1,a.grid.disableScrolling?(c["overflow-x"]="hidden",c["overflow-y"]="hidden",c):("body"===a.name?(a.hasHScrollbar=a.grid.options.enableHorizontalScrollbar!==b.scrollbars.NEVER,a.grid.isRTL()?a.grid.hasLeftContainerColumns()||(a.hasVScrollbar=a.grid.options.enableVerticalScrollbar!==b.scrollbars.NEVER):a.grid.hasRightContainerColumns()||(a.hasVScrollbar=a.grid.options.enableVerticalScrollbar!==b.scrollbars.NEVER)):"left"===a.name?a.hasVScrollbar=a.grid.isRTL()?a.grid.options.enableVerticalScrollbar!==b.scrollbars.NEVER:!1:a.hasVScrollbar=a.grid.isRTL()?!1:a.grid.options.enableVerticalScrollbar!==b.scrollbars.NEVER,c["overflow-x"]=a.hasHScrollbar?"scroll":"hidden",c["overflow-y"]=a.hasVScrollbar?"scroll":"hidden",c)},c}])}(),function(){angular.module("ui.grid").factory("GridRow",["gridUtil",function(a){function b(b,c,d){this.grid=d,this.entity=b,this.uid=a.nextUid(),this.visible=!0,this.$$height=d.options.rowHeight}return Object.defineProperty(b.prototype,"height",{get:function(){return this.$$height},set:function(a){a!==this.$$height&&(this.grid.updateCanvasHeight(),this.$$height=a)}}),b.prototype.getQualifiedColField=function(a){return"row."+this.getEntityQualifiedColField(a)},b.prototype.getEntityQualifiedColField=function(b){return a.preEval("entity."+b.field)},b.prototype.setRowInvisible=function(a){a&&a.setThisRowInvisible&&a.setThisRowInvisible("user")},b.prototype.clearRowInvisible=function(a){a&&a.clearThisRowInvisible&&a.clearThisRowInvisible("user")},b.prototype.setThisRowInvisible=function(a,b){this.invisibleReason||(this.invisibleReason={}),this.invisibleReason[a]=!0,this.evaluateRowVisibility(b)},b.prototype.clearThisRowInvisible=function(a,b){"undefined"!=typeof this.invisibleReason&&delete this.invisibleReason[a],this.evaluateRowVisibility(b)},b.prototype.evaluateRowVisibility=function(a){var b=!0;"undefined"!=typeof this.invisibleReason&&angular.forEach(this.invisibleReason,function(a,c){a&&(b=!1)}),("undefined"==typeof this.visible||this.visible!==b)&&(this.visible=b,a||(this.grid.queueGridRefresh(),this.grid.api.core.raise.rowsVisibleChanged(this)))},b}])}(),function(){"use strict";angular.module("ui.grid").factory("GridRowColumn",["$parse","$filter",function(a,b){var c=function d(a,b){if(!(this instanceof d))throw"Using GridRowColumn as a function insead of as a constructor. Must be called with `new` keyword";this.row=a,this.col=b};return c.prototype.getIntersectionValueRaw=function(){var b=a(this.row.getEntityQualifiedColField(this.col)),c=this.row;return b(c)},c.prototype.getIntersectionValueFiltered=function(){var a=this.getIntersectionValueRaw();if(this.col.cellFilter&&""!==this.col.cellFilter){var c=function(a){try{return b(a)}catch(c){return null}},d=c(this.col.cellFilter);if(d)a=d(a);else{var e,f=/([^:]*):([^:]*):?([\s\S]+)?/;null!==(e=f.exec(this.col.cellFilter))&&(a=b(e[1])(a,e[2],e[3]))}}return a},c}])}(),function(){angular.module("ui.grid").factory("ScrollEvent",["gridUtil",function(a){function b(b,c,d,e){var f=this;if(!b)throw new Error("grid argument is required");f.grid=b,f.source=e,f.withDelay=!0,f.sourceRowContainer=c,f.sourceColContainer=d,f.newScrollLeft=null,f.newScrollTop=null,f.x=null,f.y=null,f.verticalScrollLength=-9999999,f.horizontalScrollLength=-999999,f.fireThrottledScrollingEvent=a.throttle(function(a){f.grid.scrollContainers(a,f)},f.grid.options.wheelScrollThrottle,{trailing:!0})}return b.prototype.getNewScrollLeft=function(b,c){var d=this;if(!d.newScrollLeft){var e,f=b.getCanvasWidth()-b.getViewportWidth(),g=a.normalizeScrollLeft(c,d.grid);if("undefined"!=typeof d.x.percentage&&void 0!==d.x.percentage)e=d.x.percentage;else{if("undefined"==typeof d.x.pixels||void 0===d.x.pixels)throw new Error("No percentage or pixel value provided for scroll event X axis");e=d.x.percentage=(g+d.x.pixels)/f}return Math.max(0,e*f)}return d.newScrollLeft},b.prototype.getNewScrollTop=function(a,b){var c=this;if(!c.newScrollTop){var d,e=a.getVerticalScrollLength(),f=b[0].scrollTop;if("undefined"!=typeof c.y.percentage&&void 0!==c.y.percentage)d=c.y.percentage;else{if("undefined"==typeof c.y.pixels||void 0===c.y.pixels)throw new Error("No percentage or pixel value provided for scroll event Y axis");d=c.y.percentage=(f+c.y.pixels)/e}return Math.max(0,d*e)}return c.newScrollTop},b.prototype.atTop=function(a){return this.y&&(0===this.y.percentage||this.verticalScrollLength<0)&&0===a},b.prototype.atBottom=function(a){return this.y&&(1===this.y.percentage||0===this.verticalScrollLength)&&a>0},b.prototype.atLeft=function(a){return this.x&&(0===this.x.percentage||this.horizontalScrollLength<0)&&0===a},b.prototype.atRight=function(a){return this.x&&(1===this.x.percentage||0===this.horizontalScrollLength)&&a>0},b.Sources={ViewPortScroll:"ViewPortScroll",RenderContainerMouseWheel:"RenderContainerMouseWheel",RenderContainerTouchMove:"RenderContainerTouchMove",Other:99},b}])}(),function(){"use strict";angular.module("ui.grid").service("gridClassFactory",["gridUtil","$q","$compile","$templateCache","uiGridConstants","Grid","GridColumn","GridRow",function(a,b,c,d,e,f,g,h){var i={createGrid:function(d){d="undefined"!=typeof d?d:{},d.id=a.newId();var e=new f(d);if(e.options.rowTemplate){var g=b.defer();e.getRowTemplateFn=g.promise,a.getTemplate(e.options.rowTemplate).then(function(a){var b=c(a);g.resolve(b)},function(a){throw new Error("Couldn't fetch/use row template '"+e.options.rowTemplate+"'")})}return e.registerColumnBuilder(i.defaultColumnBuilder),e.registerRowBuilder(i.rowTemplateAssigner),e.registerRowsProcessor(function(a){return a.forEach(function(a){a.evaluateRowVisibility(!0)},50),a}),e.registerColumnsProcessor(function(a){return a.forEach(function(a){a.visible=!0}),a},50),e.registerColumnsProcessor(function(a){return a.forEach(function(a){a.colDef.visible===!1&&(a.visible=!1)}),a},50),e.registerRowsProcessor(e.searchRows,100),e.options.externalSort&&angular.isFunction(e.options.externalSort)?e.registerRowsProcessor(e.options.externalSort,200):e.registerRowsProcessor(e.sortByColumn,200),e},defaultColumnBuilder:function(c,d,f){var g=[],h=function(b,f,h,i,j){c[b]?d[f]=c[b]:d[f]=h,g.push(a.getTemplate(d[f]).then(function(a){angular.isFunction(a)&&(a=a());var c="cellTooltip"===j?"col.cellTooltip(row,col)":"col.headerTooltip(col)";j&&d[j]===!1?a=a.replace(e.TOOLTIP,""):j&&d[j]&&(a=a.replace(e.TOOLTIP,'title="{{'+c+' CUSTOM_FILTERS }}"')),i?d[b]=a.replace(e.CUSTOM_FILTERS,function(){return d[i]?"|"+d[i]:""}):d[b]=a},function(a){throw new Error("Couldn't fetch/use colDef."+b+" '"+c[b]+"'")}))};return h("cellTemplate","providedCellTemplate","ui-grid/uiGridCell","cellFilter","cellTooltip"),d.cellTemplatePromise=g[0],h("headerCellTemplate","providedHeaderCellTemplate","ui-grid/uiGridHeaderCell","headerCellFilter","headerTooltip"),h("footerCellTemplate","providedFooterCellTemplate","ui-grid/uiGridFooterCell","footerCellFilter"),h("filterHeaderTemplate","providedFilterHeaderTemplate","ui-grid/ui-grid-filter"),d.compiledElementFnDefer=b.defer(),b.all(g)},rowTemplateAssigner:function(d){var e=this;if(d.rowTemplate){var f=b.defer();d.getRowTemplateFn=f.promise,a.getTemplate(d.rowTemplate).then(function(a){var b=c(a);f.resolve(b)},function(a){throw new Error("Couldn't fetch/use row template '"+d.rowTemplate+"'")})}else d.rowTemplate=e.options.rowTemplate,d.getRowTemplateFn=e.getRowTemplateFn;return d.getRowTemplateFn}};return i}])}(),function(){function a(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var b=angular.module("ui.grid");b.service("rowSearcher",["gridUtil","uiGridConstants",function(b,c){var d=c.filter.CONTAINS,e={};return e.getTerm=function(a){if("undefined"==typeof a.term)return a.term;var b=a.term;return"string"==typeof b&&(b=b.trim()),b},e.stripTerm=function(b){var c=e.getTerm(b);return"string"==typeof c?a(c.replace(/(^\*|\*$)/g,"")):c},e.guessCondition=function(a){if("undefined"==typeof a.term||!a.term)return d;var b=e.getTerm(a);if(/\*/.test(b)){var c="";a.flags&&a.flags.caseSensitive||(c+="i");var f=b.replace(/(\\)?\*/g,function(a,b){return b?a:"[\\s\\S]*?"});return new RegExp("^"+f+"$",c)}return d},e.setupFilters=function(a){for(var d=[],f=a.length,g=0;f>g;g++){var h=a[g];if(h.noTerm||!b.isNullOrUndefined(h.term)){var i={},j="";h.flags&&h.flags.caseSensitive||(j+="i"),b.isNullOrUndefined(h.term)||(i.term=e.stripTerm(h)),h.condition?i.condition=h.condition:i.condition=e.guessCondition(h),i.flags=angular.extend({caseSensitive:!1,date:!1},h.flags),i.condition===c.filter.STARTS_WITH&&(i.startswithRE=new RegExp("^"+i.term,j)),i.condition===c.filter.ENDS_WITH&&(i.endswithRE=new RegExp(i.term+"$",j)),i.condition===c.filter.CONTAINS&&(i.containsRE=new RegExp(i.term,j)),i.condition===c.filter.EXACT&&(i.exactRE=new RegExp("^"+i.term+"$",j)),d.push(i)}}return d},e.runColumnFilter=function(a,b,d,e){var f,g=typeof e.condition,h=e.term;if(f=d.filterCellFiltered?a.getCellDisplayValue(b,d):a.getCellValue(b,d),e.condition instanceof RegExp)return e.condition.test(f);if("function"===g)return e.condition(h,f,b,d);if(e.startswithRE)return e.startswithRE.test(f);if(e.endswithRE)return e.endswithRE.test(f);if(e.containsRE)return e.containsRE.test(f);if(e.exactRE)return e.exactRE.test(f);if(e.condition===c.filter.NOT_EQUAL){var i=new RegExp("^"+h+"$");return!i.exec(f)}if("number"==typeof f&&"string"==typeof h){var j=parseFloat(h.replace(/\\\./,".").replace(/\\\-/,"-"));isNaN(j)||(h=j)}return e.flags.date===!0&&(f=new Date(f),h=new Date(h.replace(/\\/g,""))),e.condition===c.filter.GREATER_THAN?f>h:e.condition===c.filter.GREATER_THAN_OR_EQUAL?f>=h:e.condition===c.filter.LESS_THAN?h>f:e.condition===c.filter.LESS_THAN_OR_EQUAL?h>=f:!0},e.searchColumn=function(a,b,c,d){if(a.options.useExternalFiltering)return!0;for(var f=d.length,g=0;f>g;g++){var h=d[g],i=e.runColumnFilter(a,b,c,h);if(!i)return!1}return!0},e.search=function(a,c,d){if(c){if(!a.options.enableFiltering)return c;for(var f=[],g=d.length,h=function(a){var c=!1;return a.forEach(function(a){(!b.isNullOrUndefined(a.term)&&""!==a.term||a.noTerm)&&(c=!0)}),c},i=0;g>i;i++){var j=d[i];"undefined"!=typeof j.filters&&h(j.filters)&&f.push({col:j,filters:e.setupFilters(j.filters)})}if(f.length>0){for(var k=function(a,b,c,d){b.visible&&!e.searchColumn(a,b,c,d)&&(b.visible=!1)},l=function(a,b){for(var d=c.length,e=0;d>e;e++)k(a,c[e],b.col,b.filters)},m=f.length,n=0;m>n;n++)l(a,f[n]);a.api.core.raise.rowsVisibleChanged&&a.api.core.raise.rowsVisibleChanged()}return c}},e}])}(),function(){var a=angular.module("ui.grid");a.service("rowSorter",["$parse","uiGridConstants",function(a,b){var c="("+b.CURRENCY_SYMBOLS.map(function(a){return"\\"+a}).join("|")+")?",d=(new RegExp("^[-+]?"+c+"[\\d,.]+"+c+"%?$"),{colSortFnCache:{}});return d.guessSortFn=function(a){switch(a){case"number":return d.sortNumber;case"numberStr":return d.sortNumberStr;case"boolean":return d.sortBool;case"string":return d.sortAlpha;case"date":return d.sortDate;case"object":return d.basicSort;default:throw new Error("No sorting function found for type:"+a)}},d.handleNulls=function(a,b){if(!a&&0!==a&&a!==!1||!b&&0!==b&&b!==!1){if(!a&&0!==a&&a!==!1&&!b&&0!==b&&b!==!1)return 0;if(!a&&0!==a&&a!==!1)return 1;if(!b&&0!==b&&b!==!1)return-1}return null},d.basicSort=function(a,b){var c=d.handleNulls(a,b);return null!==c?c:a===b?0:b>a?-1:1},d.sortNumber=function(a,b){var c=d.handleNulls(a,b);return null!==c?c:a-b},d.sortNumberStr=function(a,b){var c=d.handleNulls(a,b);if(null!==c)return c;var e,f,g=!1,h=!1;return e=parseFloat(a.replace(/[^0-9.-]/g,"")),isNaN(e)&&(g=!0),f=parseFloat(b.replace(/[^0-9.-]/g,"")),isNaN(f)&&(h=!0),g&&h?0:g?1:h?-1:e-f},d.sortAlpha=function(a,b){var c=d.handleNulls(a,b);if(null!==c)return c;var e=a.toString().toLowerCase(),f=b.toString().toLowerCase();return e===f?0:e.localeCompare(f)},d.sortDate=function(a,b){var c=d.handleNulls(a,b);if(null!==c)return c;a instanceof Date||(a=new Date(a)),b instanceof Date||(b=new Date(b));var e=a.getTime(),f=b.getTime();return e===f?0:f>e?-1:1},d.sortBool=function(a,b){var c=d.handleNulls(a,b);return null!==c?c:a&&b?0:a||b?a?1:-1:0},d.getSortFn=function(a,b,c){var e;return d.colSortFnCache[b.colDef.name]?e=d.colSortFnCache[b.colDef.name]:void 0!==b.sortingAlgorithm?(e=b.sortingAlgorithm,d.colSortFnCache[b.colDef.name]=b.sortingAlgorithm):b.sortCellFiltered&&b.cellFilter?(e=d.sortAlpha,d.colSortFnCache[b.colDef.name]=e):(e=d.guessSortFn(b.colDef.type),e?d.colSortFnCache[b.colDef.name]=e:e=d.sortAlpha),e},d.prioritySort=function(a,b){return void 0!==a.sort.priority&&void 0!==b.sort.priority?a.sort.priority<b.sort.priority?-1:a.sort.priority===b.sort.priority?0:1:a.sort.priority||void 0===a.sort.priority?-1:b.sort.priority||void 0===b.sort.priority?1:0},d.sort=function(a,c,e){if(c){if(a.options.useExternalSorting)return c;var f=[];if(e.forEach(function(a){!a.sort||a.sort.ignoreSort||!a.sort.direction||a.sort.direction!==b.ASC&&a.sort.direction!==b.DESC||f.push(a)}),f=f.sort(d.prioritySort),0===f.length)return c;var g,h,i=function(a,b){a.entity.$$uiGridIndex=b};c.forEach(i);var j=c.slice(0),k=function(c,e){for(var i,k=0,l=0;0===k&&l<f.length;){g=f[l],h=f[l].sort.direction,i=d.getSortFn(a,g,j);var m,n;g.sortCellFiltered?(m=a.getCellDisplayValue(c,g),n=a.getCellDisplayValue(e,g)):(m=a.getCellValue(c,g),n=a.getCellValue(e,g)),k=i(m,n,c,e,h),l++}return 0===k?c.entity.$$uiGridIndex-e.entity.$$uiGridIndex:h===b.ASC?k:0-k},l=c.sort(k),m=function(a,b){delete a.entity.$$uiGridIndex};return c.forEach(m),l}},d}])}(),function(){function a(a){var b=a;return"undefined"!=typeof b.length&&b.length&&(b=a[0]),b.ownerDocument.defaultView.getComputedStyle(b,null)}function b(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0,h=["Top","Right","Bottom","Left"];4>f;f+=2){var i=h[f];if("margin"===c){var j=parseFloat(e[c+i]);isNaN(j)||(g+=j)}if(d){if("content"===c){var k=parseFloat(e["padding"+i]);isNaN(k)||(g-=k)}if("margin"!==c){var l=parseFloat(e["border"+i+"Width"]);isNaN(l)||(g-=l)}}else{var m=parseFloat(e["padding"+i]);if(isNaN(m)||(g+=m),"padding"!==c){var n=parseFloat(e["border"+i+"Width"]);isNaN(n)||(g+=n);
}}}return g}function c(c,d,e){var f,h=!0,i=a(c),j="border-box"===i.boxSizing;if(0>=f||null==f){if(f=i[d],(0>f||null==f)&&(f=c.style[d]),g.test(f))return f;h=j&&!0,f=parseFloat(f)||0}var k=f+b(c,d,e||(j?"border":"content"),h,i);return k}function d(b){b=angular.element(b)[0];var c=b.parentElement;return c||(c=document.getElementsByTagName("body")[0]),parseInt(a(c).fontSize)||parseInt(a(b).fontSize)||16}var e,f=angular.module("ui.grid");"function"!=typeof Function.prototype.bind&&(e=function(){var a=Array.prototype.slice;return function(b){var c=this,d=a.call(arguments,1);return d.length?function(){return arguments.length?c.apply(b,d.concat(a.call(arguments))):c.apply(b,d)}:function(){return arguments.length?c.apply(b,arguments):c.call(b)}}});var g=new RegExp("^("+/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source+")(?!px)[a-z%]+$","i"),h=/^(block|none|table(?!-c[ea]).+)/,i={position:"absolute",visibility:"hidden",display:"block"},j=["0","0","0","0"],k="uiGrid-";f.service("gridUtil",["$log","$window","$document","$http","$templateCache","$timeout","$interval","$injector","$q","$interpolate","uiGridConstants",function(f,g,l,m,n,o,p,q,r,s,t){function u(a,b){var c=angular.element(this),d=0,e=0,f=0,g=0;if(b.originalEvent&&(b=b.originalEvent),"detail"in b&&(f=-1*b.detail),"wheelDelta"in b&&(f=b.wheelDelta),"wheelDeltaY"in b&&(f=b.wheelDeltaY),"wheelDeltaX"in b&&(e=-1*b.wheelDeltaX),"axis"in b&&b.axis===b.HORIZONTAL_AXIS&&(e=-1*f,f=0),d=0===f?e:f,"deltaY"in b&&(f=-1*b.deltaY,d=f),"deltaX"in b&&(e=b.deltaX,0===f&&(d=-1*e)),0!==f||0!==e){if(1===b.deltaMode){var h=c.data("mousewheel-line-height");d*=h,f*=h,e*=h}else if(2===b.deltaMode){var i=c.data("mousewheel-page-height");d*=i,f*=i,e*=i}g=Math.max(Math.abs(f),Math.abs(e)),(!z||z>g)&&(z=g,w(b,g)&&(z/=40)),d=Math[d>=1?"floor":"ceil"](d/z),e=Math[e>=1?"floor":"ceil"](e/z),f=Math[f>=1?"floor":"ceil"](f/z),b.deltaMode=0;var j={originalEvent:b,deltaX:e,deltaY:f,deltaFactor:z,preventDefault:function(){b.preventDefault()},stopPropagation:function(){b.stopPropagation()}};y&&clearTimeout(y),y=setTimeout(v,200),a.call(c[0],j)}}function v(){z=null}function w(a,b){return"mousewheel"===a.type&&b%120===0}var x={augmentWidthOrHeight:b,getStyles:a,createBoundedWrapper:function(a,b){return function(){return b.apply(a,arguments)}},readableColumnName:function(a){return"undefined"==typeof a||void 0===a||null===a?a:("string"!=typeof a&&(a=String(a)),a.replace(/_+/g," ").replace(/^[A-Z]+$/,function(a){return angular.lowercase(angular.uppercase(a.charAt(0))+a.slice(1))}).replace(/([\w\u00C0-\u017F]+)/g,function(a){return angular.uppercase(a.charAt(0))+a.slice(1)}).replace(/(\w+?(?=[A-Z]))/g,"$1 "))},getColumnsFromData:function(a,b){var c=[];if(!a||"undefined"==typeof a[0]||void 0===a[0])return[];angular.isUndefined(b)&&(b=[]);var d=a[0];return angular.forEach(d,function(a,d){-1===b.indexOf(d)&&c.push({name:d})}),c},newId:function(){var a=(new Date).getTime();return function(){return a+=1}}(),getTemplate:function(a){if(n.get(a))return x.postProcessTemplate(n.get(a));if(a.hasOwnProperty("then"))return a.then(x.postProcessTemplate);try{if(angular.element(a).length>0)return r.when(a).then(x.postProcessTemplate)}catch(b){}return x.logDebug("fetching url",a),m({method:"GET",url:a}).then(function(b){var c=b.data.trim();return n.put(a,c),c},function(b){throw new Error("Could not get template "+a+": "+b)}).then(x.postProcessTemplate)},postProcessTemplate:function(a){var b=s.startSymbol(),c=s.endSymbol();return("{{"!==b||"}}"!==c)&&(a=a.replace(/\{\{/g,b),a=a.replace(/\}\}/g,c)),r.when(a)},guessType:function(a){var b=typeof a;switch(b){case"number":case"boolean":case"string":return b;default:return angular.isDate(a)?"date":"object"}},elementWidth:function(a){},elementHeight:function(a){},getScrollbarWidth:function(){var a=document.createElement("div");a.style.visibility="hidden",a.style.width="100px",a.style.msOverflowStyle="scrollbar",document.body.appendChild(a);var b=a.offsetWidth;a.style.overflow="scroll";var c=document.createElement("div");c.style.width="100%",a.appendChild(c);var d=c.offsetWidth;return a.parentNode.removeChild(a),b-d},swap:function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},fakeElement:function(a,b,c,d){var e,f,g=angular.element(a).clone()[0];for(f in b)g.style[f]=b[f];return angular.element(document.body).append(g),e=c.call(g,g),angular.element(g).remove(),e},normalizeWheelEvent:function(a){var b,c,d,e=a||window.event,f=([].slice.call(arguments,1),0),g=0,h=0,i=0,j=0;return e.originalEvent&&(e=e.originalEvent),e.wheelDelta&&(f=e.wheelDelta),e.detail&&(f=-1*e.detail),h=f,void 0!==e.axis&&e.axis===e.HORIZONTAL_AXIS&&(h=0,g=-1*f),e.deltaY&&(h=-1*e.deltaY,f=h),e.deltaX&&(g=e.deltaX,f=-1*g),void 0!==e.wheelDeltaY&&(h=e.wheelDeltaY),void 0!==e.wheelDeltaX&&(g=e.wheelDeltaX),i=Math.abs(f),(!b||b>i)&&(b=i),j=Math.max(Math.abs(h),Math.abs(g)),(!c||c>j)&&(c=j),d=f>0?"floor":"ceil",f=Math[d](f/b),g=Math[d](g/c),h=Math[d](h/c),{delta:f,deltaX:g,deltaY:h}},isTouchEnabled:function(){var a;return("ontouchstart"in g||g.DocumentTouch&&l instanceof DocumentTouch)&&(a=!0),a},isNullOrUndefined:function(a){return void 0===a||null===a?!0:!1},endsWith:function(a,b){return a&&b&&"string"==typeof a?-1!==a.indexOf(b,a.length-b.length):!1},arrayContainsObjectWithProperty:function(a,b,c){var d=!1;return angular.forEach(a,function(a){a[b]===c&&(d=!0)}),d},numericAndNullSort:function(a,b){return null===a?1:null===b?-1:null===a&&null===b?0:a-b},disableAnimations:function(a){var b;try{b=q.get("$animate"),angular.version.major>1||1===angular.version.major&&angular.version.minor>=4?b.enabled(a,!1):b.enabled(!1,a)}catch(c){}},enableAnimations:function(a){var b;try{return b=q.get("$animate"),angular.version.major>1||1===angular.version.major&&angular.version.minor>=4?b.enabled(a,!0):b.enabled(!0,a),b}catch(c){}},nextUid:function(){for(var a,b=j.length;b;){if(b--,a=j[b].charCodeAt(0),57===a)return j[b]="A",k+j.join("");if(90!==a)return j[b]=String.fromCharCode(a+1),k+j.join("");j[b]="0"}return j.unshift("0"),k+j.join("")},hashKey:function(a){var b,c=typeof a;return"object"===c&&null!==a?"function"==typeof(b=a.$$hashKey)?b=a.$$hashKey():"undefined"!=typeof a.$$hashKey&&a.$$hashKey?b=a.$$hashKey:void 0===b&&(b=a.$$hashKey=x.nextUid()):b=a,c+":"+b},resetUids:function(){j=["0","0","0"]},logError:function(a){t.LOG_ERROR_MESSAGES&&f.error(a)},logWarn:function(a){t.LOG_WARN_MESSAGES&&f.warn(a)},logDebug:function(){t.LOG_DEBUG_MESSAGES&&f.debug.apply(f,arguments)}};x.focus={queue:[],byId:function(a,b){this._purgeQueue();var c=o(function(){var c=(b&&b.id?b.id+"-":"")+a,d=g.document.getElementById(c);d?d.focus():x.logWarn("[focus.byId] Element id "+c+" was not found.")});return this.queue.push(c),c},byElement:function(a){if(!angular.isElement(a))return x.logWarn("Trying to focus on an element that isn't an element."),r.reject("not-element");a=angular.element(a),this._purgeQueue();var b=o(function(){a&&a[0].focus()});return this.queue.push(b),b},bySelector:function(a,b,c){var d=this;if(!angular.isElement(a))throw new Error("The parent element is not an element.");a=angular.element(a);var e=function(){var c=a[0].querySelector(b);return d.byElement(c)};if(this._purgeQueue(),c){var f=o(e);return this.queue.push(o(e)),f}return e()},_purgeQueue:function(){this.queue.forEach(function(a){o.cancel(a)}),this.queue=[]}},["width","height"].forEach(function(b){var d=angular.uppercase(b.charAt(0))+b.substr(1);x["element"+d]=function(d,e){var f=d;if(f&&"undefined"!=typeof f.length&&f.length&&(f=d[0]),f){var g=a(f);return 0===f.offsetWidth&&h.test(g.display)?x.swap(f,i,function(){return c(f,b,e)}):c(f,b,e)}return null},x["outerElement"+d]=function(a,b){return a?x["element"+d].call(this,a,b?"margin":"border"):null}}),x.closestElm=function(a,b){"undefined"!=typeof a.length&&a.length&&(a=a[0]);var c;["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some(function(a){return"function"==typeof document.body[a]?(c=a,!0):!1});for(var d;null!==a;){if(d=a.parentElement,null!==d&&d[c](b))return d;a=d}return null},x.type=function(a){var b=Function.prototype.toString.call(a.constructor);return b.match(/function (.*?)\(/)[1]},x.getBorderSize=function(b,c){"undefined"!=typeof b.length&&b.length&&(b=b[0]);var d=a(b);c=c?"border"+c.charAt(0).toUpperCase()+c.slice(1):"border",c+="Width";var e=parseInt(d[c],10);return isNaN(e)?0:e},x.detectBrowser=function(){var a=g.navigator.userAgent,b={chrome:/chrome/i,safari:/safari/i,firefox:/firefox/i,ie:/internet explorer|trident\//i};for(var c in b)if(b[c].test(a))return c;return"unknown"},x.rtlScrollType=function B(){if(B.type)return B.type;var a=angular.element('<div dir="rtl" style="font-size: 14px; width: 1px; height: 1px; position: absolute; top: -1000px; overflow: scroll">A</div>')[0],b="reverse";return document.body.appendChild(a),a.scrollLeft>0?b="default":(a.scrollLeft=1,0===a.scrollLeft&&(b="negative")),angular.element(a).remove(),B.type=b,b},x.normalizeScrollLeft=function(a,b){"undefined"!=typeof a.length&&a.length&&(a=a[0]);var c=a.scrollLeft;if(b.isRTL())switch(x.rtlScrollType()){case"default":return a.scrollWidth-c-a.clientWidth;case"negative":return Math.abs(c);case"reverse":return c}return c},x.denormalizeScrollLeft=function(a,b,c){if("undefined"!=typeof a.length&&a.length&&(a=a[0]),c.isRTL())switch(x.rtlScrollType()){case"default":var d=a.scrollWidth-a.clientWidth;return d-b;case"negative":return-1*b;case"reverse":return b}return b},x.preEval=function(a){var b=t.BRACKET_REGEXP.exec(a);if(b)return(b[1]?x.preEval(b[1]):b[1])+b[2]+(b[3]?x.preEval(b[3]):b[3]);a=a.replace(t.APOS_REGEXP,"\\'");var c=a.split(t.DOT_REGEXP),d=[c.shift()];return angular.forEach(c,function(a){d.push(a.replace(t.FUNC_REGEXP,"']$1"))}),d.join("['")},x.debounce=function(a,b,c){function d(){g=this,f=arguments;var d=function(){e=null,c||(h=a.apply(g,f))},i=c&&!e;return e&&o.cancel(e),e=o(d,b,!1),i&&(h=a.apply(g,f)),h}var e,f,g,h;return d.cancel=function(){o.cancel(e),e=null},d},x.throttle=function(a,b,c){function d(b){g=+new Date,a.apply(e,f),p(function(){h=null},0,1,!1)}c=c||{};var e,f,g=0,h=null;return function(){if(e=this,f=arguments,null===h){var a=+new Date-g;a>b?d():c.trailing&&(h=p(d,b-a,1,!1))}}},x.on={},x.off={},x._events={},x.addOff=function(a){x.off[a]=function(b,c){var d=x._events[a].indexOf(c);d>0&&x._events[a].removeAt(d)}};var y,z,A="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"];return x.on.mousewheel=function(a,b){if(a&&b){var c=angular.element(a);c.data("mousewheel-line-height",d(c)),c.data("mousewheel-page-height",x.elementHeight(c)),c.data("mousewheel-callbacks")||c.data("mousewheel-callbacks",{});var f=c.data("mousewheel-callbacks");f[b]=(Function.prototype.bind||e).call(u,c[0],b);for(var g=A.length;g;)c.on(A[--g],f[b])}},x.off.mousewheel=function(a,b){var c=angular.element(a),d=c.data("mousewheel-callbacks"),e=d[b];if(e)for(var f=A.length;f;)c.off(A[--f],e);delete d[b],0===Object.keys(d).length&&(c.removeData("mousewheel-line-height"),c.removeData("mousewheel-page-height"),c.removeData("mousewheel-callbacks"))},x}]),f.filter("px",function(){return function(a){return a.match(/^[\d\.]+$/)?a+"px":a}})}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){var b={aggregate:{label:"poloÅ¾ky"},groupPanel:{description:"PÅ™esuÅˆte zÃ¡hlavÃ­ zde pro vytvoÅ™enÃ­ skupiny dle sloupce."},search:{placeholder:"Hledat...",showingItems:"Zobrazuji poloÅ¾ky:",selectedItems:"VybranÃ© poloÅ¾ky:",totalItems:"Celkem poloÅ¾ek:",size:"Velikost strany:",first:"PrvnÃ­ strana",next:"DalÅ¡Ã­ strana",previous:"PÅ™edchozÃ­ strana",last:"PoslednÃ­ strana"},menu:{text:"Vyberte sloupec:"},sort:{ascending:"SeÅ™adit od A-Z",descending:"SeÅ™adit od Z-A",remove:"Odebrat seÅ™azenÃ­"},column:{hide:"Schovat sloupec"},aggregation:{count:"celkem Å™Ã¡dkÅ¯: ",sum:"celkem: ",avg:"avg: ",min:"min.: ",max:"max.: "},pinning:{pinLeft:"Zamknout vlevo",pinRight:"Zamknout vpravo",unpin:"Odemknout"},gridMenu:{columns:"Sloupce:",importerTitle:"Importovat soubor",exporterAllAsCsv:"Exportovat vÅ¡echna data do csv",exporterVisibleAsCsv:"Exportovat viditelnÃ¡ data do csv",exporterSelectedAsCsv:"Exportovat vybranÃ¡ data do csv",exporterAllAsPdf:"Exportovat vÅ¡echna data do pdf",exporterVisibleAsPdf:"Exportovat viditelnÃ¡ data do pdf",exporterSelectedAsPdf:"Exportovat vybranÃ¡ data do pdf",clearAllFilters:"Odstranit vÅ¡echny filtry"},importer:{noHeaders:"NÃ¡zvy sloupcÅ¯ se nepodaÅ™ilo zÃ­skat, obsahuje soubor zÃ¡hlavÃ­?",noObjects:"Data se nepodaÅ™ilo zpracovat, obsahuje soubor Å™Ã¡dky mimo zÃ¡hlavÃ­?",invalidCsv:"Soubor nelze zpracovat, jednÃ¡ se o CSV?",invalidJson:"Soubor nelze zpracovat, je to JSON?",jsonNotArray:"Soubor musÃ­ obsahovat json. UkonÄuji.."},pagination:{sizes:"poloÅ¾ek na strÃ¡nku",totalItems:"poloÅ¾ek"},grouping:{group:"Seskupit",ungroup:"Odebrat seskupenÃ­",aggregate_count:"Agregace: Count",aggregate_sum:"Agregace: Sum",aggregate_max:"Agregace: Max",aggregate_min:"Agregace: Min",aggregate_avg:"Agregace: Avg",aggregate_remove:"Agregace: Odebrat"}};return a.add("cs",b),a.add("cz",b),a.add("cs-cz",b),a.add("cs-CZ",b),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("da",{aggregate:{label:"artikler"},groupPanel:{description:"GrupÃ©r rÃ¦kker udfra en kolonne ved at trÃ¦kke dens overskift hertil."},search:{placeholder:"SÃ¸g...",showingItems:"Viste rÃ¦kker:",selectedItems:"Valgte rÃ¦kker:",totalItems:"RÃ¦kker totalt:",size:"Side stÃ¸rrelse:",first:"FÃ¸rste side",next:"NÃ¦ste side",previous:"Forrige side",last:"Sidste side"},menu:{text:"VÃ¦lg kolonner:"},sort:{ascending:"Sorter stigende",descending:"Sorter faldende",none:"Sorter ingen",remove:"Fjern sortering"},column:{hide:"Skjul kolonne"},aggregation:{count:"antal rÃ¦kker: ",sum:"sum: ",avg:"gns: ",min:"min: ",max:"max: "},gridMenu:{columns:"Columns:",importerTitle:"Import file",exporterAllAsCsv:"Export all data as csv",exporterVisibleAsCsv:"Export visible data as csv",exporterSelectedAsCsv:"Export selected data as csv",exporterAllAsPdf:"Export all data as pdf",exporterVisibleAsPdf:"Export visible data as pdf",exporterSelectedAsPdf:"Export selected data as pdf",clearAllFilters:"Clear all filters"},importer:{noHeaders:"Column names were unable to be derived, does the file have a header?",noObjects:"Objects were not able to be derived, was there data in the file other than headers?",invalidCsv:"File was unable to be processed, is it valid CSV?",invalidJson:"File was unable to be processed, is it valid Json?",jsonNotArray:"Imported json file must contain an array, aborting."}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("de",{headerCell:{aria:{defaultFilterLabel:"Filter fÃ¼r Spalte",removeFilter:"Filter lÃ¶schen",columnMenuButtonLabel:"SpaltenmenÃ¼"},priority:"PrioritÃ¤t:",filterLabel:"Filter fÃ¼r Spalte: "},aggregate:{label:"Eintrag"},groupPanel:{description:"Ziehen Sie eine SpaltenÃ¼berschrift hierhin, um nach dieser Spalte zu gruppieren."},search:{placeholder:"Suche...",showingItems:"Zeige EintrÃ¤ge:",selectedItems:"AusgewÃ¤hlte EintrÃ¤ge:",totalItems:"EintrÃ¤ge gesamt:",size:"EintrÃ¤ge pro Seite:",first:"Erste Seite",next:"NÃ¤chste Seite",previous:"Vorherige Seite",last:"Letzte Seite"},menu:{text:"Spalten auswÃ¤hlen:"},sort:{ascending:"aufsteigend sortieren",descending:"absteigend sortieren",none:"keine Sortierung",remove:"Sortierung zurÃ¼cksetzen"},column:{hide:"Spalte ausblenden"},aggregation:{count:"Zeilen insgesamt: ",sum:"gesamt: ",avg:"Durchschnitt: ",min:"min: ",max:"max: "},pinning:{pinLeft:"Links anheften",pinRight:"Rechts anheften",unpin:"LÃ¶sen"},columnMenu:{close:"SchlieÃŸen"},gridMenu:{aria:{buttonLabel:"TabellenmenÃ¼"},columns:"Spalten:",importerTitle:"Datei importieren",exporterAllAsCsv:"Alle Daten als CSV exportieren",exporterVisibleAsCsv:"sichtbare Daten als CSV exportieren",exporterSelectedAsCsv:"markierte Daten als CSV exportieren",exporterAllAsPdf:"Alle Daten als PDF exportieren",exporterVisibleAsPdf:"sichtbare Daten als PDF exportieren",exporterSelectedAsPdf:"markierte Daten als CSV exportieren",clearAllFilters:"Alle Filter zurÃ¼cksetzen"},importer:{noHeaders:"Es konnten keine Spaltennamen ermittelt werden. Sind in der Datei Spaltendefinitionen enthalten?",noObjects:"Es konnten keine Zeileninformationen gelesen werden, Sind in der Datei auÃŸer den Spaltendefinitionen auch Daten enthalten?",invalidCsv:"Die Datei konnte nicht eingelesen werden, ist es eine gÃ¼ltige CSV-Datei?",invalidJson:"Die Datei konnte nicht eingelesen werden. EnthÃ¤lt sie gÃ¼ltiges JSON?",jsonNotArray:"Die importierte JSON-Datei muÃŸ ein Array enthalten. Breche Import ab."},pagination:{aria:{pageToFirst:"Zum Anfang",pageBack:"Seite zurÃ¼ck",pageSelected:"AusgwÃ¤hlte Seite",pageForward:"Seite vor",pageToLast:"Zum Ende"},sizes:"EintrÃ¤ge pro Seite",totalItems:"EintrÃ¤ge",through:"bis",of:"von"},grouping:{group:"Gruppieren",ungroup:"Gruppierung aufheben",aggregate_count:"Agg: Anzahl",aggregate_sum:"Agg: Summe",aggregate_max:"Agg: Maximum",aggregate_min:"Agg: Minimum",aggregate_avg:"Agg: Mittelwert",aggregate_remove:"Aggregation entfernen"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("en",{headerCell:{aria:{defaultFilterLabel:"Filter for column",removeFilter:"Remove Filter",columnMenuButtonLabel:"Column Menu"},priority:"Priority:",filterLabel:"Filter for column: "},aggregate:{label:"items"},groupPanel:{description:"Drag a column header here and drop it to group by that column."},search:{placeholder:"Search...",showingItems:"Showing Items:",selectedItems:"Selected Items:",totalItems:"Total Items:",size:"Page Size:",first:"First Page",next:"Next Page",previous:"Previous Page",last:"Last Page"},menu:{text:"Choose Columns:"},sort:{ascending:"Sort Ascending",descending:"Sort Descending",none:"Sort None",remove:"Remove Sort"},column:{hide:"Hide Column"},aggregation:{count:"total rows: ",sum:"total: ",avg:"avg: ",min:"min: ",max:"max: "},pinning:{pinLeft:"Pin Left",pinRight:"Pin Right",unpin:"Unpin"},columnMenu:{close:"Close"},gridMenu:{aria:{buttonLabel:"Grid Menu"},columns:"Columns:",importerTitle:"Import file",exporterAllAsCsv:"Export all data as csv",exporterVisibleAsCsv:"Export visible data as csv",exporterSelectedAsCsv:"Export selected data as csv",exporterAllAsPdf:"Export all data as pdf",exporterVisibleAsPdf:"Export visible data as pdf",exporterSelectedAsPdf:"Export selected data as pdf",clearAllFilters:"Clear all filters"},importer:{noHeaders:"Column names were unable to be derived, does the file have a header?",noObjects:"Objects were not able to be derived, was there data in the file other than headers?",invalidCsv:"File was unable to be processed, is it valid CSV?",invalidJson:"File was unable to be processed, is it valid Json?",jsonNotArray:"Imported json file must contain an array, aborting."},pagination:{aria:{pageToFirst:"Page to first",pageBack:"Page back",pageSelected:"Selected page",pageForward:"Page forward",pageToLast:"Page to last"},sizes:"items per page",totalItems:"items",through:"through",of:"of"},grouping:{group:"Group",ungroup:"Ungroup",aggregate_count:"Agg: Count",aggregate_sum:"Agg: Sum",aggregate_max:"Agg: Max",aggregate_min:"Agg: Min",aggregate_avg:"Agg: Avg",aggregate_remove:"Agg: Remove"},validate:{error:"Error:",minLength:"Value should be at least THRESHOLD characters long.",maxLength:"Value should be at most THRESHOLD characters long.",required:"A value is needed."}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("es",{aggregate:{label:"ArtÃ­culos"},groupPanel:{description:"Arrastre un encabezado de columna aquÃ­ y suÃ©ltelo para agrupar por esa columna."},search:{placeholder:"Buscar...",showingItems:"ArtÃ­culos Mostrados:",selectedItems:"ArtÃ­culos Seleccionados:",totalItems:"ArtÃ­culos Totales:",size:"TamaÃ±o de PÃ¡gina:",first:"Primera PÃ¡gina",next:"PÃ¡gina Siguiente",previous:"PÃ¡gina Anterior",last:"Ãšltima PÃ¡gina"},menu:{text:"Elegir columnas:"},sort:{ascending:"Orden Ascendente",descending:"Orden Descendente",remove:"Sin Ordenar"},column:{hide:"Ocultar la columna"},aggregation:{count:"filas totales: ",sum:"total: ",avg:"media: ",min:"min: ",max:"max: "},pinning:{pinLeft:"Fijar a la Izquierda",pinRight:"Fijar a la Derecha",unpin:"Quitar FijaciÃ³n"},gridMenu:{columns:"Columnas:",importerTitle:"Importar archivo",exporterAllAsCsv:"Exportar todo como csv",exporterVisibleAsCsv:"Exportar vista como csv",exporterSelectedAsCsv:"Exportar selecciÃ³n como csv",exporterAllAsPdf:"Exportar todo como pdf",exporterVisibleAsPdf:"Exportar vista como pdf",exporterSelectedAsPdf:"Exportar selecciÃ³n como pdf",clearAllFilters:"Limpiar todos los filtros"},importer:{noHeaders:"No fue posible derivar los nombres de las columnas, Â¿tiene encabezados el archivo?",noObjects:"No fue posible obtener registros, Â¿contiene datos el archivo, aparte de los encabezados?",invalidCsv:"No fue posible procesar el archivo, Â¿es un CSV vÃ¡lido?",invalidJson:"No fue posible procesar el archivo, Â¿es un Json vÃ¡lido?",jsonNotArray:"El archivo json importado debe contener un array, abortando."},pagination:{sizes:"registros por pÃ¡gina",totalItems:"registros",of:"de"},grouping:{group:"Agrupar",ungroup:"Desagrupar",aggregate_count:"Agr: Cont",aggregate_sum:"Agr: Sum",aggregate_max:"Agr: MÃ¡x",aggregate_min:"Agr: Min",aggregate_avg:"Agr: Prom",aggregate_remove:"Agr: Quitar"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("fa",{aggregate:{label:"Ù‚Ù„Ù…"},groupPanel:{description:"Ø¹Ù†ÙˆØ§Ù† ÛŒÚ© Ø³ØªÙˆÙ† Ø±Ø§ Ø¨Ú¯ÛŒØ± Ùˆ Ø¨Ù‡ Ú¯Ø±ÙˆÙ‡ÛŒ Ø§Ø² Ø¢Ù† Ø³ØªÙˆÙ† Ø±Ù‡Ø§ Ú©Ù†."},search:{placeholder:"Ø¬Ø³ØªØ¬Ùˆ...",showingItems:"Ù†Ù…Ø§ÛŒØ´ Ø§Ù‚Ù„Ø§Ù…:",selectedItems:"Ù‚Ù„Ù…â€ŒÙ‡Ø§ÛŒ Ø§Ù†ØªØ®Ø§Ø¨ Ø´Ø¯Ù‡:",totalItems:"Ù…Ø¬Ù…ÙˆØ¹ Ø§Ù‚Ù„Ø§Ù…:",size:"Ø§Ù†Ø¯Ø§Ø²Ù‡â€ŒÛŒ ØµÙØ­Ù‡:",first:"Ø§ÙˆÙ„ÛŒÙ† ØµÙØ­Ù‡",next:"ØµÙØ­Ù‡â€ŒÛŒâ€ŒØ¨Ø¹Ø¯ÛŒ",previous:"ØµÙØ­Ù‡â€ŒÛŒâ€Œ Ù‚Ø¨Ù„ÛŒ",last:"Ø¢Ø®Ø±ÛŒÙ† ØµÙØ­Ù‡"},menu:{text:"Ø³ØªÙˆÙ†â€ŒÙ‡Ø§ÛŒ Ø§Ù†ØªØ®Ø§Ø¨ÛŒ:"},sort:{ascending:"ØªØ±ØªÛŒØ¨ ØµØ¹ÙˆØ¯ÛŒ",descending:"ØªØ±ØªÛŒØ¨ Ù†Ø²ÙˆÙ„ÛŒ",remove:"Ø­Ø°Ù Ù…Ø±ØªØ¨ Ú©Ø±Ø¯Ù†"},column:{hide:"Ù¾Ù†Ù‡Ø§Ù†â€ŒÚ©Ø±Ø¯Ù† Ø³ØªÙˆÙ†"},aggregation:{count:"ØªØ¹Ø¯Ø§Ø¯: ",sum:"Ù…Ø¬Ù…ÙˆØ¹: ",avg:"Ù…ÛŒØ§Ù†Ú¯ÛŒÙ†: ",min:"Ú©Ù…ØªØ±ÛŒÙ†: ",max:"Ø¨ÛŒØ´ØªØ±ÛŒÙ†: "},pinning:{pinLeft:"Ù¾ÛŒÙ† Ú©Ø±Ø¯Ù† Ø³Ù…Øª Ú†Ù¾",pinRight:"Ù¾ÛŒÙ† Ú©Ø±Ø¯Ù† Ø³Ù…Øª Ø±Ø§Ø³Øª",unpin:"Ø­Ø°Ù Ù¾ÛŒÙ†"},gridMenu:{columns:"Ø³ØªÙˆÙ†â€ŒÙ‡Ø§:",importerTitle:"ÙˆØ§Ø±Ø¯ Ú©Ø±Ø¯Ù† ÙØ§ÛŒÙ„",exporterAllAsCsv:"Ø®Ø±ÙˆØ¬ÛŒ ØªÙ…Ø§Ù… Ø¯Ø§Ø¯Ù‡â€ŒÙ‡Ø§ Ø¯Ø± ÙØ§ÛŒÙ„ csv",exporterVisibleAsCsv:"Ø®Ø±ÙˆØ¬ÛŒ Ø¯Ø§Ø¯Ù‡â€ŒÙ‡Ø§ÛŒ Ù‚Ø§Ø¨Ù„ Ù…Ø´Ø§Ù‡Ø¯Ù‡ Ø¯Ø± ÙØ§ÛŒÙ„ csv",exporterSelectedAsCsv:"Ø®Ø±ÙˆØ¬ÛŒ Ø¯Ø§Ø¯Ù‡â€ŒÙ‡Ø§ÛŒ Ø§Ù†ØªØ®Ø§Ø¨â€ŒØ´Ø¯Ù‡ Ø¯Ø± ÙØ§ÛŒÙ„ csv",exporterAllAsPdf:"Ø®Ø±ÙˆØ¬ÛŒ ØªÙ…Ø§Ù… Ø¯Ø§Ø¯Ù‡â€ŒÙ‡Ø§ Ø¯Ø± ÙØ§ÛŒÙ„ pdf",exporterVisibleAsPdf:"Ø®Ø±ÙˆØ¬ÛŒ Ø¯Ø§Ø¯Ù‡â€ŒÙ‡Ø§ÛŒ Ù‚Ø§Ø¨Ù„ Ù…Ø´Ø§Ù‡Ø¯Ù‡ Ø¯Ø± ÙØ§ÛŒÙ„ pdf",exporterSelectedAsPdf:"Ø®Ø±ÙˆØ¬ÛŒ Ø¯Ø§Ø¯Ù‡â€ŒÙ‡Ø§ÛŒ Ø§Ù†ØªØ®Ø§Ø¨â€ŒØ´Ø¯Ù‡ Ø¯Ø± ÙØ§ÛŒÙ„ pdf",clearAllFilters:"Ù¾Ø§Ú© Ú©Ø±Ø¯Ù† ØªÙ…Ø§Ù… ÙÛŒÙ„ØªØ±"},importer:{noHeaders:"Ù†Ø§Ù… Ø³ØªÙˆÙ† Ù‚Ø§Ø¨Ù„ Ø§Ø³ØªØ®Ø±Ø§Ø¬ Ù†ÛŒØ³Øª. Ø¢ÛŒØ§ ÙØ§ÛŒÙ„ Ø¹Ù†ÙˆØ§Ù† Ø¯Ø§Ø±Ø¯ØŸ",noObjects:"Ø§Ø´ÛŒØ§ Ù‚Ø§Ø¨Ù„ Ø§Ø³ØªØ®Ø±Ø§Ø¬ Ù†ÛŒØ³ØªÙ†Ø¯. Ø¢ÛŒØ§ Ø¨Ù‡ Ø¬Ø² Ø¹Ù†ÙˆØ§Ù†â€ŒÙ‡Ø§ Ø¯Ø± ÙØ§ÛŒÙ„ Ø¯Ø§Ø¯Ù‡ ÙˆØ¬ÙˆØ¯ Ø¯Ø§Ø±Ø¯ØŸ",invalidCsv:"ÙØ§ÛŒÙ„ Ù‚Ø§Ø¨Ù„ Ù¾Ø±Ø¯Ø§Ø²Ø´ Ù†ÛŒØ³Øª. Ø¢ÛŒØ§ ÙØ±Ù…Øª  csv  Ù…Ø¹ØªØ¨Ø± Ø§Ø³ØªØŸ",invalidJson:"ÙØ§ÛŒÙ„ Ù‚Ø§Ø¨Ù„ Ù¾Ø±Ø¯Ø§Ø²Ø´ Ù†ÛŒØ³Øª. Ø¢ÛŒØ§ ÙØ±Ù…Øª json   Ù…Ø¹ØªØ¨Ø± Ø§Ø³ØªØŸ",jsonNotArray:"ÙØ§ÛŒÙ„ json ÙˆØ§Ø±Ø¯ Ø´Ø¯Ù‡ Ø¨Ø§ÛŒØ¯ Ø­Ø§ÙˆÛŒ Ø¢Ø±Ø§ÛŒÙ‡ Ø¨Ø§Ø´Ø¯. Ø¹Ù…Ù„ÛŒØ§Øª Ø³Ø§Ù‚Ø· Ø´Ø¯."},pagination:{sizes:"Ø§Ù‚Ù„Ø§Ù… Ø¯Ø± Ù‡Ø± ØµÙØ­Ù‡",totalItems:"Ø§Ù‚Ù„Ø§Ù…",of:"Ø§Ø²"},grouping:{group:"Ú¯Ø±ÙˆÙ‡â€ŒØ¨Ù†Ø¯ÛŒ",ungroup:"Ø­Ø°Ù Ú¯Ø±ÙˆÙ‡â€ŒØ¨Ù†Ø¯ÛŒ",aggregate_count:"Agg: ØªØ¹Ø¯Ø§Ø¯",aggregate_sum:"Agg: Ø¬Ù…Ø¹",aggregate_max:"Agg: Ø¨ÛŒØ´ÛŒÙ†Ù‡",aggregate_min:"Agg: Ú©Ù…ÛŒÙ†Ù‡",aggregate_avg:"Agg: Ù…ÛŒØ§Ù†Ú¯ÛŒÙ†",aggregate_remove:"Agg: Ø­Ø°Ù"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("fi",{aggregate:{label:"rivit"},groupPanel:{description:"Raahaa ja pudota otsikko tÃ¤hÃ¤n ryhmittÃ¤Ã¤ksesi sarakkeen mukaan."},search:{placeholder:"Hae...",showingItems:"NÃ¤ytetÃ¤Ã¤n rivejÃ¤:",selectedItems:"Valitut rivit:",totalItems:"RivejÃ¤ yht.:",size:"NÃ¤ytÃ¤:",first:"EnsimmÃ¤inen sivu",next:"Seuraava sivu",previous:"Edellinen sivu",last:"Viimeinen sivu"},menu:{text:"Valitse sarakkeet:"},sort:{ascending:"JÃ¤rjestÃ¤ nouseva",descending:"JÃ¤rjestÃ¤ laskeva",remove:"Poista jÃ¤rjestys"},column:{hide:"Piilota sarake"},aggregation:{count:"RivejÃ¤ yht.: ",sum:"Summa: ",avg:"K.a.: ",min:"Min: ",max:"Max: "},pinning:{pinLeft:"Lukitse vasemmalle",pinRight:"Lukitse oikealle",unpin:"Poista lukitus"},gridMenu:{columns:"Sarakkeet:",importerTitle:"Tuo tiedosto",exporterAllAsCsv:"Vie tiedot csv-muodossa",exporterVisibleAsCsv:"Vie nÃ¤kyvÃ¤ tieto csv-muodossa",exporterSelectedAsCsv:"Vie valittu tieto csv-muodossa",exporterAllAsPdf:"Vie tiedot pdf-muodossa",exporterVisibleAsPdf:"Vie nÃ¤kyvÃ¤ tieto pdf-muodossa",exporterSelectedAsPdf:"Vie valittu tieto pdf-muodossa",clearAllFilters:"Puhdista kaikki suodattimet"},importer:{noHeaders:"Sarakkeen nimiÃ¤ ei voitu pÃ¤Ã¤tellÃ¤, onko tiedostossa otsikkoriviÃ¤?",noObjects:"Tietoja ei voitu lukea, onko tiedostossa muuta kuin otsikkot?",invalidCsv:"Tiedostoa ei voitu kÃ¤sitellÃ¤, oliko se CSV-muodossa?",invalidJson:"Tiedostoa ei voitu kÃ¤sitellÃ¤, oliko se JSON-muodossa?",jsonNotArray:"Tiedosto ei sisÃ¤ltÃ¤nyt taulukkoa, lopetetaan."}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("fr",{aggregate:{label:"Ã©lÃ©ments"},groupPanel:{description:"Faites glisser une en-tÃªte de colonne ici pour crÃ©er un groupe de colonnes."},search:{placeholder:"Recherche...",showingItems:"Affichage des Ã©lÃ©ments :",selectedItems:"Ã‰lÃ©ments sÃ©lectionnÃ©s :",totalItems:"Nombre total d'Ã©lÃ©ments:",size:"Taille de page:",first:"PremiÃ¨re page",next:"Page Suivante",previous:"Page prÃ©cÃ©dente",last:"DerniÃ¨re page"},menu:{text:"Choisir des colonnes :"},sort:{ascending:"Trier par ordre croissant",descending:"Trier par ordre dÃ©croissant",remove:"Enlever le tri"},column:{hide:"Cacher la colonne"},aggregation:{count:"lignes totales: ",sum:"total: ",avg:"moy: ",min:"min: ",max:"max: "},pinning:{pinLeft:"Ã‰pingler Ã  gauche",pinRight:"Ã‰pingler Ã  droite",unpin:"DÃ©tacher"},gridMenu:{columns:"Colonnes:",importerTitle:"Importer un fichier",exporterAllAsCsv:"Exporter toutes les donnÃ©es en CSV",exporterVisibleAsCsv:"Exporter les donnÃ©es visibles en CSV",exporterSelectedAsCsv:"Exporter les donnÃ©es sÃ©lectionnÃ©es en CSV",exporterAllAsPdf:"Exporter toutes les donnÃ©es en PDF",exporterVisibleAsPdf:"Exporter les donnÃ©es visibles en PDF",exporterSelectedAsPdf:"Exporter les donnÃ©es sÃ©lectionnÃ©es en PDF",clearAllFilters:"Nettoyez tous les filtres"},importer:{noHeaders:"Impossible de dÃ©terminer le nom des colonnes, le fichier possÃ¨de-t-il une en-tÃªte ?",noObjects:"Aucun objet trouvÃ©, le fichier possÃ¨de-t-il des donnÃ©es autres que l'en-tÃªte ?",invalidCsv:"Le fichier n'a pas pu Ãªtre traitÃ©, le CSV est-il valide ?",invalidJson:"Le fichier n'a pas pu Ãªtre traitÃ©, le JSON est-il valide ?",jsonNotArray:"Le fichier JSON importÃ© doit contenir un tableau, abandon."},pagination:{sizes:"Ã©lÃ©ments par page",totalItems:"Ã©lÃ©ments",of:"sur"},grouping:{group:"Grouper",ungroup:"DÃ©grouper",aggregate_count:"Agg: Compte",aggregate_sum:"Agg: Somme",aggregate_max:"Agg: Max",aggregate_min:"Agg: Min",aggregate_avg:"Agg: Moy",aggregate_remove:"Agg: Retirer"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("he",{aggregate:{label:"items"},groupPanel:{description:"×’×¨×•×¨ ×¢×ž×•×“×” ×œ×›××Ÿ ×•×©×—×¨×¨ ×‘×›×“×™ ×œ×§×‘×¥ ×¢×ž×•×“×” ×–×•."},search:{placeholder:"×—×¤×©...",showingItems:"×ž×¦×™×’:",selectedItems:'×¡×”"×› × ×‘×—×¨×•:',totalItems:'×¡×”"×› ×¨×©×•×ž×•×ª:',size:"×ª×•×¦××•×ª ×‘×“×£:",first:"×“×£ ×¨××©×•×Ÿ",next:"×“×£ ×”×‘×",previous:"×“×£ ×§×•×“×",last:"×“×£ ××—×¨×•×Ÿ"},menu:{text:"×‘×—×¨ ×¢×ž×•×“×•×ª:"},sort:{ascending:"×¡×“×¨ ×¢×•×œ×”",descending:"×¡×“×¨ ×™×•×¨×“",remove:"×‘×˜×œ"},column:{hide:"×˜×•×¨ ×”×¡×ª×¨"},aggregation:{count:"total rows: ",sum:"total: ",avg:"avg: ",min:"min: ",max:"max: "},gridMenu:{columns:"Columns:",importerTitle:"Import file",exporterAllAsCsv:"Export all data as csv",exporterVisibleAsCsv:"Export visible data as csv",exporterSelectedAsCsv:"Export selected data as csv",exporterAllAsPdf:"Export all data as pdf",exporterVisibleAsPdf:"Export visible data as pdf",exporterSelectedAsPdf:"Export selected data as pdf",clearAllFilters:"Clean all filters"},importer:{noHeaders:"Column names were unable to be derived, does the file have a header?",noObjects:"Objects were not able to be derived, was there data in the file other than headers?",invalidCsv:"File was unable to be processed, is it valid CSV?",invalidJson:"File was unable to be processed, is it valid Json?",jsonNotArray:"Imported json file must contain an array, aborting."}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("hy",{aggregate:{label:"Õ¿Õ¾ÕµÕ¡Õ¬Õ¶Õ¥Ö€"},groupPanel:{description:"Ô¸Õ½Õ¿ Õ½ÕµÕ¡Õ¶ Õ­Õ´Õ¢Õ¡Õ¾Õ¸Ö€Õ¥Õ¬Õ¸Ö‚ Õ°Õ¡Õ´Õ¡Ö€ Ö„Õ¡Õ·Õ¥Ö„ Ö‡ Õ£ÖÕ¥Ö„ Õ¾Õ¥Ö€Õ¶Õ¡Õ£Õ«Ö€Õ¶ Õ¡ÕµÕ½Õ¿Õ¥Õ²Ö‰"},search:{placeholder:"Õ“Õ¶Õ¿Ö€Õ¸Ö‚Õ´...",showingItems:"Õ‘Õ¸Ö‚ÖÕ¡Õ¤Ö€Õ¾Õ¡Õ® Õ¿Õ¾ÕµÕ¡Õ¬Õ¶Õ¥Ö€Õ",selectedItems:"Ô¸Õ¶Õ¿Ö€Õ¾Õ¡Õ®:",totalItems:"Ô¸Õ¶Õ¤Õ¡Õ´Õ¥Õ¶Õ¨Õ",size:"ÕÕ¸Õ²Õ¥Ö€Õ« Ö„Õ¡Õ¶Õ¡Õ¯Õ¨ Õ§Õ»Õ¸Ö‚Õ´Õ",first:"Ô±Õ¼Õ¡Õ»Õ«Õ¶ Õ§Õ»",next:"Õ€Õ¡Õ»Õ¸Ö€Õ¤ Õ§Õ»",previous:"Õ†Õ¡Õ­Õ¸Ö€Õ¤ Õ§Õ»",last:"ÕŽÕ¥Ö€Õ»Õ«Õ¶ Õ§Õ»"},menu:{text:"Ô¸Õ¶Õ¿Ö€Õ¥Õ¬ Õ½ÕµÕ¸Ö‚Õ¶Õ¥Ö€Õ¨:"},sort:{ascending:"Ô±Õ³Õ´Õ¡Õ¶ Õ¯Õ¡Ö€Õ£Õ¸Õ¾",descending:"Õ†Õ¾Õ¡Õ¦Õ´Õ¡Õ¶ Õ¯Õ¡Ö€Õ£Õ¸Õ¾",remove:"Õ€Õ¡Õ¶Õ¥Õ¬ "},column:{hide:"Ô¹Õ¡Ö„ÖÕ¶Õ¥Õ¬ Õ½ÕµÕ¸Ö‚Õ¶Õ¨"},aggregation:{count:"Õ¨Õ¶Õ¤Õ¡Õ´Õ¥Õ¶Õ¨ Õ¿Õ¸Õ²Õ ",sum:"Õ¨Õ¶Õ¤Õ¡Õ´Õ¥Õ¶Õ¨Õ ",avg:"Õ´Õ«Õ»Õ«Õ¶Õ ",min:"Õ´Õ«Õ¶Õ ",max:"Õ´Õ¡Ö„Õ½Õ "},pinning:{pinLeft:"Ô¿ÕºÖÕ¶Õ¥Õ¬ Õ±Õ¡Õ­ Õ¯Õ¸Õ²Õ´Õ¸Ö‚Õ´",pinRight:"Ô¿ÕºÖÕ¶Õ¥Õ¬ Õ¡Õ» Õ¯Õ¸Õ²Õ´Õ¸Ö‚Õ´",unpin:"Ô±Ö€Õ±Õ¡Õ¯Õ¥Õ¬"},gridMenu:{columns:"ÕÕµÕ¸Ö‚Õ¶Õ¥Ö€:",importerTitle:"Õ†Õ¥Ö€Õ´Õ¸Ö‚Õ®Õ¥Õ¬ Ö†Õ¡ÕµÕ¬",exporterAllAsCsv:"Ô±Ö€Õ¿Õ¡Õ°Õ¡Õ¶Õ¥Õ¬ Õ¡Õ´Õ¢Õ¸Õ²Õ»Õ¨ CSV",exporterVisibleAsCsv:"Ô±Ö€Õ¿Õ¡Õ°Õ¡Õ¶Õ¥Õ¬ Õ¥Ö€Ö‡Õ¡ÖÕ¸Õ² Õ¿Õ¾ÕµÕ¡Õ¬Õ¶Õ¥Ö€Õ¨ CSV",exporterSelectedAsCsv:"Ô±Ö€Õ¿Õ¡Õ°Õ¡Õ¶Õ¥Õ¬ Õ¨Õ¶Õ¿Ö€Õ¾Õ¡Õ® Õ¿Õ¾ÕµÕ¡Õ¬Õ¶Õ¥Ö€Õ¨ CSV",exporterAllAsPdf:"Ô±Ö€Õ¿Õ¡Õ°Õ¡Õ¶Õ¥Õ¬ PDF",exporterVisibleAsPdf:"Ô±Ö€Õ¿Õ¡Õ°Õ¡Õ¶Õ¥Õ¬ Õ¥Ö€Ö‡Õ¡ÖÕ¸Õ² Õ¿Õ¾ÕµÕ¡Õ¬Õ¶Õ¥Ö€Õ¨ PDF",exporterSelectedAsPdf:"Ô±Ö€Õ¿Õ¡Õ°Õ¡Õ¶Õ¥Õ¬ Õ¨Õ¶Õ¿Ö€Õ¾Õ¡Õ® Õ¿Õ¾ÕµÕ¡Õ¬Õ¶Õ¥Ö€Õ¨ PDF",clearAllFilters:"Õ„Õ¡Ö„Ö€Õ¥Õ¬ Õ¢Õ¸Õ¬Õ¸Ö€ Ö†Õ«Õ¬Õ¿Ö€Õ¥Ö€Õ¨"},importer:{noHeaders:"Õ€Õ¶Õ¡Ö€Õ¡Õ¾Õ¸Ö€ Õ¹Õ¥Õ²Õ¡Õ¾ Õ¸Ö€Õ¸Õ·Õ¥Õ¬ Õ½ÕµÕ¡Õ¶ Õ¾Õ¥Ö€Õ¶Õ¡Õ£Ö€Õ¥Ö€Õ¨Ö‰ Ô±Ö€Õ¤ÕµÕ¸ÕžÖ„ Ö†Õ¡ÕµÕ¬Õ¨ Õ¸Ö‚Õ¶Õ« Õ¾Õ¥Ö€Õ¶Õ¡Õ£Ö€Õ¥Ö€Ö‰",noObjects:"Õ€Õ¶Õ¡Ö€Õ¡Õ¾Õ¸Ö€ Õ¹Õ¥Õ²Õ¡Õ¾ Õ¯Õ¡Ö€Õ¤Õ¡Õ¬ Õ¿Õ¾ÕµÕ¡Õ¬Õ¶Õ¥Ö€Õ¨Ö‰ Ô±Ö€Õ¤ÕµÕ¸ÕžÖ„ Ö†Õ¡ÕµÕ¬Õ¸Ö‚Õ´ Õ¯Õ¡Õ¶ Õ¿Õ¾ÕµÕ¡Õ¬Õ¶Õ¥Ö€Ö‰",invalidCsv:"Õ€Õ¶Õ¡Ö€Õ¡Õ¾Õ¸Ö€ Õ¹Õ¥Õ²Õ¡Õ¾ Õ´Õ·Õ¡Õ¯Õ¥Õ¬ Ö†Õ¡ÕµÕ¬Õ¨Ö‰ Ô±Ö€Õ¤ÕµÕ¸ÕžÖ„ Õ¡ÕµÕ¶ Õ¾Õ¡Õ¾Õ¥Ö€ CSV Õ§Ö‰",invalidJson:"Õ€Õ¶Õ¡Ö€Õ¡Õ¾Õ¸Ö€ Õ¹Õ¥Õ²Õ¡Õ¾ Õ´Õ·Õ¡Õ¯Õ¥Õ¬ Ö†Õ¡ÕµÕ¬Õ¨Ö‰ Ô±Ö€Õ¤ÕµÕ¸ÕžÖ„ Õ¡ÕµÕ¶ Õ¾Õ¡Õ¾Õ¥Ö€ Json Õ§Ö‰",jsonNotArray:"Õ†Õ¥Ö€Õ´Õ¸Ö‚Õ®Õ¾Õ¡Õ® json Ö†Õ¡ÕµÕ¬Õ¨ ÕºÕ¥Õ¿Ö„ Õ§ ÕºÕ¡Ö€Õ¸Ö‚Õ¶Õ¡Õ¯Õ« Õ¦Õ¡Õ¶Õ£Õ¾Õ¡Õ®, Õ¯Õ¡Õ½Õ¥ÖÕ¾Õ¸Ö‚Õ´ Õ§Ö‰"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("it",{aggregate:{label:"elementi"},groupPanel:{description:"Trascina un'intestazione all'interno del gruppo della colonna."},search:{placeholder:"Ricerca...",showingItems:"Mostra:",selectedItems:"Selezionati:",totalItems:"Totali:",size:"Tot Pagine:",first:"Prima",next:"Prossima",previous:"Precedente",last:"Ultima"},menu:{text:"Scegli le colonne:"},sort:{ascending:"Asc.",descending:"Desc.",remove:"Annulla ordinamento"},column:{hide:"Nascondi"},aggregation:{count:"righe totali: ",sum:"tot: ",avg:"media: ",min:"minimo: ",max:"massimo: "},pinning:{pinLeft:"Blocca a sx",pinRight:"Blocca a dx",unpin:"Blocca in alto"},gridMenu:{columns:"Colonne:",importerTitle:"Importa",exporterAllAsCsv:"Esporta tutti i dati in CSV",exporterVisibleAsCsv:"Esporta i dati visibili in CSV",exporterSelectedAsCsv:"Esporta i dati selezionati in CSV",exporterAllAsPdf:"Esporta tutti i dati in PDF",exporterVisibleAsPdf:"Esporta i dati visibili in PDF",exporterSelectedAsPdf:"Esporta i dati selezionati in PDF",clearAllFilters:"Pulire tutti i filtri"},importer:{noHeaders:"Impossibile reperire i nomi delle colonne, sicuro che siano indicati all'interno del file?",noObjects:"Impossibile reperire gli oggetti, sicuro che siano indicati all'interno del file?",invalidCsv:"Impossibile elaborare il file, sicuro che sia un CSV?",invalidJson:"Impossibile elaborare il file, sicuro che sia un JSON valido?",jsonNotArray:"Errore! Il file JSON da importare deve contenere un array."},grouping:{group:"Raggruppa",ungroup:"Separa",aggregate_count:"Agg: N. Elem.",aggregate_sum:"Agg: Somma",aggregate_max:"Agg: Massimo",aggregate_min:"Agg: Minimo",aggregate_avg:"Agg: Media",aggregate_remove:"Agg: Rimuovi"
},validate:{error:"Errore:",minLength:"Lunghezza minima pari a THRESHOLD caratteri.",maxLength:"Lunghezza massima pari a THRESHOLD caratteri.",required:"Necessario inserire un valore."}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("ja",{aggregate:{label:"é …ç›®"},groupPanel:{description:"ã“ã“ã«åˆ—ãƒ˜ãƒƒãƒ€ã‚’ãƒ‰ãƒ©ãƒƒã‚°ã‚¢ãƒ³ãƒ‰ãƒ‰ãƒ­ãƒƒãƒ—ã—ã¦ã€ãã®åˆ—ã§ã‚°ãƒ«ãƒ¼ãƒ—åŒ–ã—ã¾ã™ã€‚"},search:{placeholder:"æ¤œç´¢...",showingItems:"è¡¨ç¤ºä¸­ã®é …ç›®:",selectedItems:"é¸æŠžã—ãŸé …ç›®:",totalItems:"é …ç›®ã®ç·æ•°:",size:"ãƒšãƒ¼ã‚¸ã‚µã‚¤ã‚º:",first:"æœ€åˆã®ãƒšãƒ¼ã‚¸",next:"æ¬¡ã®ãƒšãƒ¼ã‚¸",previous:"å‰ã®ãƒšãƒ¼ã‚¸",last:"å‰ã®ãƒšãƒ¼ã‚¸"},menu:{text:"åˆ—ã®é¸æŠž:"},sort:{ascending:"æ˜‡é †ã«ä¸¦ã¹æ›¿ãˆ",descending:"é™é †ã«ä¸¦ã¹æ›¿ãˆ",remove:"ä¸¦ã¹æ›¿ãˆã®è§£é™¤"},column:{hide:"åˆ—ã®éžè¡¨ç¤º"},aggregation:{count:"åˆè¨ˆè¡Œæ•°: ",sum:"åˆè¨ˆ: ",avg:"å¹³å‡: ",min:"æœ€å°: ",max:"æœ€å¤§: "},pinning:{pinLeft:"å·¦ã«å›ºå®š",pinRight:"å³ã«å›ºå®š",unpin:"å›ºå®šè§£é™¤"},gridMenu:{columns:"åˆ—:",importerTitle:"ãƒ•ã‚¡ã‚¤ãƒ«ã®ã‚¤ãƒ³ãƒãƒ¼ãƒˆ",exporterAllAsCsv:"ã™ã¹ã¦ã®ãƒ‡ãƒ¼ã‚¿ã‚’CSVå½¢å¼ã§ã‚¨ã‚¯ã‚¹ãƒãƒ¼ãƒˆ",exporterVisibleAsCsv:"è¡¨ç¤ºä¸­ã®ãƒ‡ãƒ¼ã‚¿ã‚’CSVå½¢å¼ã§ã‚¨ã‚¯ã‚¹ãƒãƒ¼ãƒˆ",exporterSelectedAsCsv:"é¸æŠžã—ãŸãƒ‡ãƒ¼ã‚¿ã‚’CSVå½¢å¼ã§ã‚¨ã‚¯ã‚¹ãƒãƒ¼ãƒˆ",exporterAllAsPdf:"ã™ã¹ã¦ã®ãƒ‡ãƒ¼ã‚¿ã‚’PDFå½¢å¼ã§ã‚¨ã‚¯ã‚¹ãƒãƒ¼ãƒˆ",exporterVisibleAsPdf:"è¡¨ç¤ºä¸­ã®ãƒ‡ãƒ¼ã‚¿ã‚’PDFå½¢å¼ã§ã‚¨ã‚¯ã‚¹ãƒãƒ¼ãƒˆ",exporterSelectedAsPdf:"é¸æŠžã—ãŸãƒ‡ãƒ¼ã‚¿ã‚’PDFå½¢å¼ã§ã‚¨ã‚¯ã‚¹ãƒãƒ¼ãƒˆ",clearAllFilters:"ã™ã¹ã¦ã®ãƒ•ã‚£ãƒ«ã‚¿ã‚’æ¸…æŽƒã—ã¦ãã ã•ã„"},importer:{noHeaders:"åˆ—åã‚’å–å¾—ã§ãã¾ã›ã‚“ã€‚ãƒ•ã‚¡ã‚¤ãƒ«ã«ãƒ˜ãƒƒãƒ€ãŒå«ã¾ã‚Œã¦ã„ã‚‹ã“ã¨ã‚’ç¢ºèªã—ã¦ãã ã•ã„ã€‚",noObjects:"ã‚ªãƒ–ã‚¸ã‚§ã‚¯ãƒˆã‚’å–å¾—ã§ãã¾ã›ã‚“ã€‚ãƒ•ã‚¡ã‚¤ãƒ«ã«ãƒ˜ãƒƒãƒ€ä»¥å¤–ã®ãƒ‡ãƒ¼ã‚¿ãŒå«ã¾ã‚Œã¦ã„ã‚‹ã“ã¨ã‚’ç¢ºèªã—ã¦ãã ã•ã„ã€‚",invalidCsv:"ãƒ•ã‚¡ã‚¤ãƒ«ã‚’å‡¦ç†ã§ãã¾ã›ã‚“ã€‚ãƒ•ã‚¡ã‚¤ãƒ«ãŒæœ‰åŠ¹ãªCSVå½¢å¼ã§ã‚ã‚‹ã“ã¨ã‚’ç¢ºèªã—ã¦ãã ã•ã„ã€‚",invalidJson:"ãƒ•ã‚¡ã‚¤ãƒ«ã‚’å‡¦ç†ã§ãã¾ã›ã‚“ã€‚ãƒ•ã‚¡ã‚¤ãƒ«ãŒæœ‰åŠ¹ãªJSONå½¢å¼ã§ã‚ã‚‹ã“ã¨ã‚’ç¢ºèªã—ã¦ãã ã•ã„ã€‚",jsonNotArray:"ã‚¤ãƒ³ãƒãƒ¼ãƒˆã—ãŸJSONãƒ•ã‚¡ã‚¤ãƒ«ã«ã¯é…åˆ—ãŒå«ã¾ã‚Œã¦ã„ã‚‹å¿…è¦ãŒã‚ã‚Šã¾ã™ã€‚å‡¦ç†ã‚’ä¸­æ­¢ã—ã¾ã™ã€‚"},pagination:{aria:{pageToFirst:"æœ€åˆã®ãƒšãƒ¼ã‚¸",pageBack:"å‰ã®ãƒšãƒ¼ã‚¸",pageSelected:"ç¾åœ¨ã®ãƒšãƒ¼ã‚¸",pageForward:"æ¬¡ã®ãƒšãƒ¼ã‚¸",pageToLast:"æœ€å¾Œã®ãƒšãƒ¼ã‚¸"},sizes:"é …ç›®/ãƒšãƒ¼ã‚¸",totalItems:"é …ç›®",through:"ã‹ã‚‰",of:"é …ç›®/å…¨"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("ko",{aggregate:{label:"ì•„ì´í…œ"},groupPanel:{description:"ì»¬ëŸ¼ìœ¼ë¡œ ê·¸ë£¹í•‘í•˜ê¸° ìœ„í•´ì„œëŠ” ì»¬ëŸ¼ í—¤ë”ë¥¼ ëŒì–´ ë–¨ì–´ëœ¨ë ¤ ì£¼ì„¸ìš”."},search:{placeholder:"ê²€ìƒ‰...",showingItems:"í•­ëª© ë³´ì—¬ì£¼ê¸°:",selectedItems:"ì„ íƒ í•­ëª©:",totalItems:"ì „ì²´ í•­ëª©:",size:"íŽ˜ì´ì§€ í¬ê¸°:",first:"ì²«ë²ˆì§¸ íŽ˜ì´ì§€",next:"ë‹¤ìŒ íŽ˜ì´ì§€",previous:"ì´ì „ íŽ˜ì´ì§€",last:"ë§ˆì§€ë§‰ íŽ˜ì´ì§€"},menu:{text:"ì»¬ëŸ¼ì„ ì„ íƒí•˜ì„¸ìš”:"},sort:{ascending:"ì˜¤ë¦„ì°¨ìˆœ ì •ë ¬",descending:"ë‚´ë¦¼ì°¨ìˆœ ì •ë ¬",remove:"ì†ŒíŒ… ì œê±°"},column:{hide:"ì»¬ëŸ¼ ì œê±°"},aggregation:{count:"ì „ì²´ ê°¯ìˆ˜: ",sum:"ì „ì²´: ",avg:"í‰ê· : ",min:"ìµœì†Œ: ",max:"ìµœëŒ€: "},pinning:{pinLeft:"ì™¼ìª½ í•€",pinRight:"ì˜¤ë¥¸ìª½ í•€",unpin:"í•€ ì œê±°"},gridMenu:{columns:"ì»¬ëŸ¼:",importerTitle:"íŒŒì¼ ê°€ì ¸ì˜¤ê¸°",exporterAllAsCsv:"csvë¡œ ëª¨ë“  ë°ì´í„° ë‚´ë³´ë‚´ê¸°",exporterVisibleAsCsv:"csvë¡œ ë³´ì´ëŠ” ë°ì´í„° ë‚´ë³´ë‚´ê¸°",exporterSelectedAsCsv:"csvë¡œ ì„ íƒëœ ë°ì´í„° ë‚´ë³´ë‚´ê¸°",exporterAllAsPdf:"pdfë¡œ ëª¨ë“  ë°ì´í„° ë‚´ë³´ë‚´ê¸°",exporterVisibleAsPdf:"pdfë¡œ ë³´ì´ëŠ” ë°ì´í„° ë‚´ë³´ë‚´ê¸°",exporterSelectedAsPdf:"pdfë¡œ ì„ íƒ ë°ì´í„° ë‚´ë³´ë‚´ê¸°",clearAllFilters:"ëª¨ë“  í•„í„°ë¥¼ ì²­ì†Œ"},importer:{noHeaders:"ì»¬ëŸ¼ëª…ì´ ì§€ì •ë˜ì–´ ìžˆì§€ ì•ŠìŠµë‹ˆë‹¤. íŒŒì¼ì— í—¤ë”ê°€ ëª…ì‹œë˜ì–´ ìžˆëŠ”ì§€ í™•ì¸í•´ ì£¼ì„¸ìš”.",noObjects:"ë°ì´í„°ê°€ ì§€ì •ë˜ì–´ ìžˆì§€ ì•ŠìŠµë‹ˆë‹¤. ë°ì´í„°ê°€ íŒŒì¼ì— ìžˆëŠ”ì§€ í™•ì¸í•´ ì£¼ì„¸ìš”.",invalidCsv:"íŒŒì¼ì„ ì²˜ë¦¬í•  ìˆ˜ ì—†ìŠµë‹ˆë‹¤. ì˜¬ë°”ë¥¸ csvì¸ì§€ í™•ì¸í•´ ì£¼ì„¸ìš”.",invalidJson:"íŒŒì¼ì„ ì²˜ë¦¬í•  ìˆ˜ ì—†ìŠµë‹ˆë‹¤. ì˜¬ë°”ë¥¸ jsonì¸ì§€ í™•ì¸í•´ ì£¼ì„¸ìš”.",jsonNotArray:"json íŒŒì¼ì€ ë°°ì—´ì„ í¬í•¨í•´ì•¼ í•©ë‹ˆë‹¤."},pagination:{sizes:"íŽ˜ì´ì§€ë‹¹ í•­ëª©",totalItems:"ì „ì²´ í•­ëª©"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("nl",{aggregate:{label:"items"},groupPanel:{description:"Sleep hier een kolomnaam heen om op te groeperen."},search:{placeholder:"Zoeken...",showingItems:"Getoonde items:",selectedItems:"Geselecteerde items:",totalItems:"Totaal aantal items:",size:"Items per pagina:",first:"Eerste pagina",next:"Volgende pagina",previous:"Vorige pagina",last:"Laatste pagina"},menu:{text:"Kies kolommen:"},sort:{ascending:"Sorteer oplopend",descending:"Sorteer aflopend",remove:"Verwijder sortering"},column:{hide:"Verberg kolom"},aggregation:{count:"Aantal rijen: ",sum:"Som: ",avg:"Gemiddelde: ",min:"Min: ",max:"Max: "},pinning:{pinLeft:"Zet links vast",pinRight:"Zet rechts vast",unpin:"Maak los"},gridMenu:{columns:"Kolommen:",importerTitle:"Importeer bestand",exporterAllAsCsv:"Exporteer alle data als csv",exporterVisibleAsCsv:"Exporteer zichtbare data als csv",exporterSelectedAsCsv:"Exporteer geselecteerde data als csv",exporterAllAsPdf:"Exporteer alle data als pdf",exporterVisibleAsPdf:"Exporteer zichtbare data als pdf",exporterSelectedAsPdf:"Exporteer geselecteerde data als pdf",clearAllFilters:"Reinig alle filters"},importer:{noHeaders:"Kolomnamen kunnen niet worden afgeleid. Heeft het bestand een header?",noObjects:"Objecten kunnen niet worden afgeleid. Bevat het bestand data naast de headers?",invalidCsv:"Het bestand kan niet verwerkt worden. Is het een valide csv bestand?",invalidJson:"Het bestand kan niet verwerkt worden. Is het valide json?",jsonNotArray:"Het json bestand moet een array bevatten. De actie wordt geannuleerd."},pagination:{sizes:"items per pagina",totalItems:"items",of:"van de"},grouping:{group:"Groepeer",ungroup:"Groepering opheffen",aggregate_count:"Agg: Aantal",aggregate_sum:"Agg: Som",aggregate_max:"Agg: Max",aggregate_min:"Agg: Min",aggregate_avg:"Agg: Gem",aggregate_remove:"Agg: Verwijder"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("pl",{headerCell:{aria:{defaultFilterLabel:"Filter dla kolumny",removeFilter:"UsuÅ„ filter",columnMenuButtonLabel:"Menu kolumny"},priority:"Prioritet:",filterLabel:"Filtr dla kolumny: "},aggregate:{label:"pozycji"},groupPanel:{description:"PrzeciÄ…gnij nagÅ‚Ã³wek kolumny tutaj, aby pogrupowaÄ‡ wedÅ‚ug niej."},search:{placeholder:"Szukaj...",showingItems:"Widoczne pozycje:",selectedItems:"Zaznaczone pozycje:",totalItems:"Wszystkich pozycji:",size:"Rozmiar strony:",first:"Pierwsza strona",next:"NastÄ™pna strona",previous:"Poprzednia strona",last:"Ostatnia strona"},menu:{text:"Wybierz kolumny:"},sort:{ascending:"Sortuj rosnÄ…co",descending:"Sortuj malejÄ…co",none:"Brak sortowania",remove:"WyÅ‚Ä…cz sortowanie"},column:{hide:"Ukryj kolumne"},aggregation:{count:"Razem pozycji: ",sum:"Razem: ",avg:"Åšrednia: ",min:"Min: ",max:"Max: "},pinning:{pinLeft:"Przypnij do lewej",pinRight:"Przypnij do prawej",unpin:"Odepnij"},columnMenu:{close:"Zamknij"},gridMenu:{aria:{buttonLabel:"Menu Grida"},columns:"Kolumny:",importerTitle:"Importuj plik",exporterAllAsCsv:"Eksportuj wszystkie dane do csv",exporterVisibleAsCsv:"Eksportuj widoczne dane do csv",exporterSelectedAsCsv:"Eksportuj zaznaczone dane do csv",exporterAllAsPdf:"Eksportuj wszystkie dane do pdf",exporterVisibleAsPdf:"Eksportuj widoczne dane do pdf",exporterSelectedAsPdf:"Eksportuj zaznaczone dane do pdf",clearAllFilters:"WyczyÅ›Ä‡ filtry"},importer:{noHeaders:"Nie udaÅ‚o siÄ™ wczytaÄ‡ nazw kolumn. Czy plik posiada nagÅ‚Ã³wek?",noObjects:"Nie udalo siÄ™ wczytaÄ‡ pozycji. Czy plik zawiera dane??",invalidCsv:"Nie udaÅ‚o siÄ™ przetworzyÄ‡ pliku, jest to prawidlowy plik CSV??",invalidJson:"Nie udaÅ‚o siÄ™ przetworzyÄ‡ pliku, jest to prawidlowy plik Json?",jsonNotArray:"Importowany plik json musi zawieraÄ‡ tablicÄ™, importowanie przerwane."},pagination:{aria:{pageToFirst:"Pierwsza strona",pageBack:"Poprzednia strona",pageSelected:"Wybrana strona",pageForward:"NastÄ™pna strona",pageToLast:"Ostatnia strona"},sizes:"pozycji na stronÄ™",totalItems:"pozycji",through:"do",of:"z"},grouping:{group:"Grupuj",ungroup:"Rozgrupuj",aggregate_count:"Zbiorczo: Razem",aggregate_sum:"Zbiorczo: Suma",aggregate_max:"Zbiorczo: Max",aggregate_min:"Zbiorczo: Min",aggregate_avg:"Zbiorczo: Åšrednia",aggregate_remove:"Zbiorczo: UsuÅ„"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("pt-br",{headerCell:{aria:{defaultFilterLabel:"Filtro por coluna",removeFilter:"Remover filtro",columnMenuButtonLabel:"Menu coluna"},priority:"Prioridade:",filterLabel:"Filtro por coluna: "},aggregate:{label:"itens"},groupPanel:{description:"Arraste e solte uma coluna aqui para agrupar por essa coluna"},search:{placeholder:"Procurar...",showingItems:"Mostrando os Itens:",selectedItems:"Items Selecionados:",totalItems:"Total de Itens:",size:"Tamanho da PÃ¡gina:",first:"Primeira PÃ¡gina",next:"PrÃ³xima PÃ¡gina",previous:"PÃ¡gina Anterior",last:"Ãšltima PÃ¡gina"},menu:{text:"Selecione as colunas:"},sort:{ascending:"Ordenar Ascendente",descending:"Ordenar Descendente",none:"Nenhuma Ordem",remove:"Remover OrdenaÃ§Ã£o"},column:{hide:"Esconder coluna"},aggregation:{count:"total de linhas: ",sum:"total: ",avg:"med: ",min:"min: ",max:"max: "},pinning:{pinLeft:"Fixar Esquerda",pinRight:"Fixar Direita",unpin:"Desprender"},columnMenu:{close:"Fechar"},gridMenu:{aria:{buttonLabel:"Menu Grid"},columns:"Colunas:",importerTitle:"Importar arquivo",exporterAllAsCsv:"Exportar todos os dados como csv",exporterVisibleAsCsv:"Exportar dados visÃ­veis como csv",exporterSelectedAsCsv:"Exportar dados selecionados como csv",exporterAllAsPdf:"Exportar todos os dados como pdf",exporterVisibleAsPdf:"Exportar dados visÃ­veis como pdf",exporterSelectedAsPdf:"Exportar dados selecionados como pdf",clearAllFilters:"Limpar todos os filtros"},importer:{noHeaders:"Nomes de colunas nÃ£o puderam ser derivados. O arquivo tem um cabeÃ§alho?",noObjects:"Objetos nÃ£o puderam ser derivados. Havia dados no arquivo, alÃ©m dos cabeÃ§alhos?",invalidCsv:"Arquivo nÃ£o pode ser processado. Ã‰ um CSV vÃ¡lido?",invalidJson:"Arquivo nÃ£o pode ser processado. Ã‰ um Json vÃ¡lido?",jsonNotArray:"Arquivo json importado tem que conter um array. Abortando."},pagination:{aria:{pageToFirst:"Primeira pÃ¡gina",pageBack:"PÃ¡gina anterior",pageSelected:"PÃ¡gina Selecionada",pageForward:"Proxima",pageToLast:"Anterior"},sizes:"itens por pÃ¡gina",totalItems:"itens",through:"atravÃ©s dos",of:"de"},grouping:{group:"Agrupar",ungroup:"Desagrupar",aggregate_count:"Agr: Contar",aggregate_sum:"Agr: Soma",aggregate_max:"Agr: Max",aggregate_min:"Agr: Min",aggregate_avg:"Agr: Med",aggregate_remove:"Agr: Remover"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("pt",{headerCell:{aria:{defaultFilterLabel:"Filtro por coluna",removeFilter:"Remover filtro",columnMenuButtonLabel:"Menu coluna"},priority:"Prioridade:",filterLabel:"Filtro por coluna: "},aggregate:{label:"itens"},groupPanel:{description:"Arraste e solte uma coluna aqui para agrupar por essa coluna"},search:{placeholder:"Procurar...",showingItems:"Mostrando os Itens:",selectedItems:"Itens Selecionados:",totalItems:"Total de Itens:",size:"Tamanho da PÃ¡gina:",first:"Primeira PÃ¡gina",next:"PrÃ³xima PÃ¡gina",previous:"PÃ¡gina Anterior",last:"Ãšltima PÃ¡gina"},menu:{text:"Selecione as colunas:"},sort:{ascending:"Ordenar Ascendente",descending:"Ordenar Descendente",none:"Nenhuma Ordem",remove:"Remover OrdenaÃ§Ã£o"},column:{hide:"Esconder coluna"},aggregation:{count:"total de linhas: ",sum:"total: ",avg:"med: ",min:"min: ",max:"max: "},pinning:{pinLeft:"Fixar Esquerda",pinRight:"Fixar Direita",unpin:"Desprender"},columnMenu:{close:"Fechar"},gridMenu:{aria:{buttonLabel:"Menu Grid"},columns:"Colunas:",importerTitle:"Importar ficheiro",exporterAllAsCsv:"Exportar todos os dados como csv",exporterVisibleAsCsv:"Exportar dados visÃ­veis como csv",exporterSelectedAsCsv:"Exportar dados selecionados como csv",exporterAllAsPdf:"Exportar todos os dados como pdf",exporterVisibleAsPdf:"Exportar dados visÃ­veis como pdf",exporterSelectedAsPdf:"Exportar dados selecionados como pdf",clearAllFilters:"Limpar todos os filtros"},importer:{noHeaders:"Nomes de colunas nÃ£o puderam ser derivados. O ficheiro tem um cabeÃ§alho?",noObjects:"Objetos nÃ£o puderam ser derivados. Havia dados no ficheiro, alÃ©m dos cabeÃ§alhos?",invalidCsv:"Ficheiro nÃ£o pode ser processado. Ã‰ um CSV vÃ¡lido?",invalidJson:"Ficheiro nÃ£o pode ser processado. Ã‰ um Json vÃ¡lido?",jsonNotArray:"Ficheiro json importado tem que conter um array. Interrompendo."},pagination:{aria:{pageToFirst:"Primeira pÃ¡gina",pageBack:"PÃ¡gina anterior",pageSelected:"PÃ¡gina Selecionada",pageForward:"PrÃ³xima",pageToLast:"Anterior"},sizes:"itens por pÃ¡gina",totalItems:"itens",through:"atravÃ©s dos",of:"de"},grouping:{group:"Agrupar",ungroup:"Desagrupar",aggregate_count:"Agr: Contar",aggregate_sum:"Agr: Soma",aggregate_max:"Agr: Max",aggregate_min:"Agr: Min",aggregate_avg:"Agr: Med",aggregate_remove:"Agr: Remover"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("ro",{headerCell:{aria:{defaultFilterLabel:"Filtru pentru coloana",removeFilter:"Sterge filtru",columnMenuButtonLabel:"Column Menu"},priority:"Prioritate:",filterLabel:"Filtru pentru coloana:"},aggregate:{label:"Elemente"},groupPanel:{description:"Trage un cap de coloana aici pentru a grupa elementele dupa coloana respectiva"},search:{placeholder:"Cauta...",showingItems:"Arata elementele:",selectedItems:"Elementele selectate:",totalItems:"Total elemente:",size:"Marime pagina:",first:"Prima pagina",next:"Pagina urmatoare",previous:"Pagina anterioara",last:"Ultima pagina"},menu:{text:"Alege coloane:"},sort:{ascending:"Ordoneaza crescator",descending:"Ordoneaza descrescator",none:"Fara ordonare",remove:"Sterge ordonarea"},column:{hide:"Ascunde coloana"},aggregation:{count:"total linii: ",sum:"total: ",avg:"medie: ",min:"min: ",max:"max: "},pinning:{pinLeft:"Pin la stanga",pinRight:"Pin la dreapta",unpin:"Sterge pinul"},columnMenu:{close:"Inchide"},gridMenu:{aria:{buttonLabel:"Grid Menu"},columns:"Coloane:",importerTitle:"Incarca fisier",exporterAllAsCsv:"Exporta toate datele ca csv",exporterVisibleAsCsv:"Exporta datele vizibile ca csv",exporterSelectedAsCsv:"Exporta datele selectate ca csv",exporterAllAsPdf:"Exporta toate datele ca pdf",exporterVisibleAsPdf:"Exporta datele vizibile ca pdf",exporterSelectedAsPdf:"Exporta datele selectate ca csv pdf",clearAllFilters:"Sterge toate filtrele"},importer:{noHeaders:"Numele coloanelor nu a putut fi incarcat, acest fisier are un header?",noObjects:"Datele nu au putut fi incarcate, exista date in fisier in afara numelor de coloane?",invalidCsv:"Fisierul nu a putut fi procesat, ati incarcat un CSV valid ?",invalidJson:"Fisierul nu a putut fi procesat, ati incarcat un Json valid?",jsonNotArray:"Json-ul incarcat trebuie sa contina un array, inchidere."},pagination:{aria:{pageToFirst:"Prima pagina",pageBack:"O pagina inapoi",pageSelected:"Pagina selectata",pageForward:"O pagina inainte",pageToLast:"Ultima pagina"},sizes:"Elemente per pagina",totalItems:"elemente",through:"prin",of:"of"},grouping:{group:"Grupeaza",ungroup:"Opreste gruparea",aggregate_count:"Agg: Count",aggregate_sum:"Agg: Sum",aggregate_max:"Agg: Max",aggregate_min:"Agg: Min",aggregate_avg:"Agg: Avg",aggregate_remove:"Agg: Remove"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("ru",{headerCell:{aria:{defaultFilterLabel:"Ð¤Ð¸Ð»ÑŒÑ‚Ñ€ ÑÑ‚Ð¾Ð»Ð±Ñ†Ð°",removeFilter:"Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ Ñ„Ð¸Ð»ÑŒÑ‚Ñ€",columnMenuButtonLabel:"ÐœÐµÐ½ÑŽ ÑÑ‚Ð¾Ð»Ð±Ñ†Ð°"},priority:"ÐŸÑ€Ð¸Ð¾Ñ€Ð¸Ñ‚ÐµÑ‚:",filterLabel:"Ð¤Ð¸Ð»ÑŒÑ‚Ñ€ ÑÑ‚Ð¾Ð»Ð±Ñ†Ð°: "},aggregate:{label:"ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ñ‹"},groupPanel:{description:"Ð”Ð»Ñ Ð³Ñ€ÑƒÐ¿Ð¿Ð¸Ñ€Ð¾Ð²ÐºÐ¸ Ð¿Ð¾ ÑÑ‚Ð¾Ð»Ð±Ñ†Ñƒ Ð¿ÐµÑ€ÐµÑ‚Ð°Ñ‰Ð¸Ñ‚Ðµ ÑÑŽÐ´Ð° ÐµÐ³Ð¾ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ðµ."},search:{placeholder:"ÐŸÐ¾Ð¸ÑÐº...",showingItems:"ÐŸÐ¾ÐºÐ°Ð·Ð°Ñ‚ÑŒ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ñ‹:",selectedItems:"Ð’Ñ‹Ð±Ñ€Ð°Ð½Ð½Ñ‹Ðµ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ñ‹:",totalItems:"Ð’ÑÐµÐ³Ð¾ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¾Ð²:",size:"Ð Ð°Ð·Ð¼ÐµÑ€ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñ‹:",first:"ÐŸÐµÑ€Ð²Ð°Ñ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð°",next:"Ð¡Ð»ÐµÐ´ÑƒÑŽÑ‰Ð°Ñ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð°",previous:"ÐŸÑ€ÐµÐ´Ñ‹Ð´ÑƒÑ‰Ð°Ñ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð°",last:"ÐŸÐ¾ÑÐ»ÐµÐ´Ð½ÑÑ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð°"},menu:{text:"Ð’Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ ÑÑ‚Ð¾Ð»Ð±Ñ†Ñ‹:"},sort:{ascending:"ÐŸÐ¾ Ð²Ð¾Ð·Ñ€Ð°ÑÑ‚Ð°Ð½Ð¸ÑŽ",descending:"ÐŸÐ¾ ÑƒÐ±Ñ‹Ð²Ð°Ð½Ð¸ÑŽ",none:"Ð‘ÐµÐ· ÑÐ¾Ñ€Ñ‚Ð¸Ñ€Ð¾Ð²ÐºÐ¸",remove:"Ð£Ð±Ñ€Ð°Ñ‚ÑŒ ÑÐ¾Ñ€Ñ‚Ð¸Ñ€Ð¾Ð²ÐºÑƒ"},column:{hide:"Ð¡Ð¿Ñ€ÑÑ‚Ð°Ñ‚ÑŒ ÑÑ‚Ð¾Ð»Ð±ÐµÑ†"},aggregation:{count:"Ð²ÑÐµÐ³Ð¾ ÑÑ‚Ñ€Ð¾Ðº: ",sum:"Ð¸Ñ‚Ð¾Ð³Ð¾: ",avg:"ÑÑ€ÐµÐ´Ð½ÐµÐµ: ",min:"Ð¼Ð¸Ð½: ",max:"Ð¼Ð°ÐºÑ: "},pinning:{pinLeft:"Ð—Ð°ÐºÑ€ÐµÐ¿Ð¸Ñ‚ÑŒ ÑÐ»ÐµÐ²Ð°",pinRight:"Ð—Ð°ÐºÑ€ÐµÐ¿Ð¸Ñ‚ÑŒ ÑÐ¿Ñ€Ð°Ð²Ð°",unpin:"ÐžÑ‚ÐºÑ€ÐµÐ¿Ð¸Ñ‚ÑŒ"},columnMenu:{close:"Ð—Ð°ÐºÑ€Ñ‹Ñ‚ÑŒ"},gridMenu:{aria:{buttonLabel:"ÐœÐµÐ½ÑŽ"},columns:"Ð¡Ñ‚Ð¾Ð»Ð±Ñ†Ñ‹:",importerTitle:"Ð˜Ð¼Ð¿Ð¾Ñ€Ñ‚Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ñ„Ð°Ð¹Ð»",exporterAllAsCsv:"Ð­ÐºÑÐ¿Ð¾Ñ€Ñ‚Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð²ÑÑ‘ Ð² CSV",exporterVisibleAsCsv:"Ð­ÐºÑÐ¿Ð¾Ñ€Ñ‚Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð²Ð¸Ð´Ð¸Ð¼Ñ‹Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð² CSV",exporterSelectedAsCsv:"Ð­ÐºÑÐ¿Ð¾Ñ€Ñ‚Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð²Ñ‹Ð±Ñ€Ð°Ð½Ð½Ñ‹Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð² CSV",exporterAllAsPdf:"Ð­ÐºÑÐ¿Ð¾Ñ€Ñ‚Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð²ÑÑ‘ Ð² PDF",exporterVisibleAsPdf:"Ð­ÐºÑÐ¿Ð¾Ñ€Ñ‚Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð²Ð¸Ð´Ð¸Ð¼Ñ‹Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð² PDF",exporterSelectedAsPdf:"Ð­ÐºÑÐ¿Ð¾Ñ€Ñ‚Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð²Ñ‹Ð±Ñ€Ð°Ð½Ð½Ñ‹Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð² PDF",clearAllFilters:"ÐžÑ‡Ð¸ÑÑ‚Ð¸Ñ‚Ðµ Ð²ÑÐµ Ñ„Ð¸Ð»ÑŒÑ‚Ñ€Ñ‹"},importer:{noHeaders:"ÐÐµ ÑƒÐ´Ð°Ð»Ð¾ÑÑŒ Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ñ‚ÑŒ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ñ ÑÑ‚Ð¾Ð»Ð±Ñ†Ð¾Ð², ÐµÑÑ‚ÑŒ Ð»Ð¸ Ð² Ñ„Ð°Ð¹Ð»Ðµ Ð·Ð°Ð³Ð¾Ð»Ð¾Ð²Ð¾Ðº?",noObjects:"ÐÐµ ÑƒÐ´Ð°Ð»Ð¾ÑÑŒ Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ñ‚ÑŒ Ð´Ð°Ð½Ð½Ñ‹Ðµ, ÐµÑÑ‚ÑŒ Ð»Ð¸ Ð² Ñ„Ð°Ð¹Ð»Ðµ ÑÑ‚Ñ€Ð¾ÐºÐ¸ ÐºÑ€Ð¾Ð¼Ðµ Ð·Ð°Ð³Ð¾Ð»Ð¾Ð²ÐºÐ°?",invalidCsv:"ÐÐµ ÑƒÐ´Ð°Ð»Ð¾ÑÑŒ Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚Ð°Ñ‚ÑŒ Ñ„Ð°Ð¹Ð», ÑÑ‚Ð¾ Ð¿Ñ€Ð°Ð²Ð¸Ð»ÑŒÐ½Ñ‹Ð¹ CSV-Ñ„Ð°Ð¹Ð»?",invalidJson:"ÐÐµ ÑƒÐ´Ð°Ð»Ð¾ÑÑŒ Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚Ð°Ñ‚ÑŒ Ñ„Ð°Ð¹Ð», ÑÑ‚Ð¾ Ð¿Ñ€Ð°Ð²Ð¸Ð»ÑŒÐ½Ñ‹Ð¹ JSON?",jsonNotArray:"Ð˜Ð¼Ð¿Ð¾Ñ€Ñ‚Ð¸Ñ€ÑƒÐµÐ¼Ñ‹Ð¹ JSON-Ñ„Ð°Ð¹Ð» Ð´Ð¾Ð»Ð¶ÐµÐ½ ÑÐ¾Ð´ÐµÑ€Ð¶Ð°Ñ‚ÑŒ Ð¼Ð°ÑÑÐ¸Ð², Ð¾Ð¿ÐµÑ€Ð°Ñ†Ð¸Ñ Ð¾Ñ‚Ð¼ÐµÐ½ÐµÐ½Ð°."},pagination:{aria:{pageToFirst:"ÐŸÐµÑ€Ð²Ð°Ñ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð°",pageBack:"ÐŸÑ€ÐµÐ´Ñ‹Ð´ÑƒÑ‰Ð°Ñ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð°",pageSelected:"Ð’Ñ‹Ð±Ñ€Ð°Ð½Ð½Ð°Ñ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð°",pageForward:"Ð¡Ð»ÐµÐ´ÑƒÑŽÑ‰Ð°Ñ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð°",pageToLast:"ÐŸÐ¾ÑÐ»ÐµÐ´Ð½ÑÑ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð°"},sizes:"ÑÑ‚Ñ€Ð¾Ðº Ð½Ð° ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñƒ",totalItems:"ÑÑ‚Ñ€Ð¾Ðº",through:"Ð¿Ð¾",of:"Ð¸Ð·"},grouping:{group:"Ð“Ñ€ÑƒÐ¿Ð¿Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ",ungroup:"Ð Ð°Ð·Ð³Ñ€ÑƒÐ¿Ð¿Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ",aggregate_count:"Ð“Ñ€ÑƒÐ¿Ð¿Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ: Count",aggregate_sum:"Ð”Ð»Ñ Ð³Ñ€ÑƒÐ¿Ð¿Ñ‹: Ð¡ÑƒÐ¼Ð¼Ð°",aggregate_max:"Ð”Ð»Ñ Ð³Ñ€ÑƒÐ¿Ð¿Ñ‹: ÐœÐ°ÐºÑÐ¸Ð¼ÑƒÐ¼",aggregate_min:"Ð”Ð»Ñ Ð³Ñ€ÑƒÐ¿Ð¿Ñ‹: ÐœÐ¸Ð½Ð¸Ð¼ÑƒÐ¼",aggregate_avg:"Ð”Ð»Ñ Ð³Ñ€ÑƒÐ¿Ð¿Ñ‹: Ð¡Ñ€ÐµÐ´Ð½ÐµÐµ",aggregate_remove:"Ð”Ð»Ñ Ð³Ñ€ÑƒÐ¿Ð¿Ñ‹: ÐŸÑƒÑÑ‚Ð¾"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("sk",{aggregate:{label:"items"},groupPanel:{description:"Pretiahni sem nÃ¡zov stÄºpca pre zoskupenie podÄ¾a toho stÄºpca."},search:{placeholder:"HÄ¾adaj...",showingItems:"Zobrazujem poloÅ¾ky:",selectedItems:"VybratÃ© poloÅ¾ky:",totalItems:"PoÄet poloÅ¾iek:",size:"PoÄet:",first:"PrvÃ¡ strana",next:"ÄŽalÅ¡ia strana",previous:"PredchÃ¡dzajÃºca strana",last:"PoslednÃ¡ strana"},menu:{text:"Vyberte stÄºpce:"},sort:{ascending:"ZotriediÅ¥ vzostupne",descending:"ZotriediÅ¥ zostupne",remove:"VymazaÅ¥ triedenie"},aggregation:{count:"total rows: ",sum:"total: ",avg:"avg: ",min:"min: ",max:"max: "},gridMenu:{columns:"Columns:",importerTitle:"Import file",exporterAllAsCsv:"Export all data as csv",exporterVisibleAsCsv:"Export visible data as csv",exporterSelectedAsCsv:"Export selected data as csv",exporterAllAsPdf:"Export all data as pdf",exporterVisibleAsPdf:"Export visible data as pdf",exporterSelectedAsPdf:"Export selected data as pdf",clearAllFilters:"Clear all filters"},importer:{noHeaders:"Column names were unable to be derived, does the file have a header?",noObjects:"Objects were not able to be derived, was there data in the file other than headers?",invalidCsv:"File was unable to be processed, is it valid CSV?",invalidJson:"File was unable to be processed, is it valid Json?",jsonNotArray:"Imported json file must contain an array, aborting."}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("sv",{aggregate:{label:"Artiklar"},groupPanel:{description:"Dra en kolumnrubrik hit och slÃ¤pp den fÃ¶r att gruppera efter den kolumnen."},search:{placeholder:"SÃ¶k...",showingItems:"Visar artiklar:",selectedItems:"Valda artiklar:",totalItems:"Antal artiklar:",size:"Sidstorlek:",first:"FÃ¶rsta sidan",next:"NÃ¤sta sida",previous:"FÃ¶regÃ¥ende sida",last:"Sista sidan"},menu:{text:"VÃ¤lj kolumner:"},sort:{ascending:"Sortera stigande",descending:"Sortera fallande",remove:"Inaktivera sortering"},column:{hide:"GÃ¶m kolumn"},aggregation:{count:"Antal rader: ",sum:"Summa: ",avg:"Genomsnitt: ",min:"Min: ",max:"Max: "},pinning:{pinLeft:"FÃ¤st vÃ¤nster",pinRight:"FÃ¤st hÃ¶ger",unpin:"LÃ¶sgÃ¶r"},gridMenu:{columns:"Kolumner:",importerTitle:"Importera fil",exporterAllAsCsv:"Exportera all data som CSV",exporterVisibleAsCsv:"Exportera synlig data som CSV",exporterSelectedAsCsv:"Exportera markerad data som CSV",exporterAllAsPdf:"Exportera all data som PDF",exporterVisibleAsPdf:"Exportera synlig data som PDF",exporterSelectedAsPdf:"Exportera markerad data som PDF",clearAllFilters:"RengÃ¶r alla filter"},importer:{noHeaders:"Kolumnnamn kunde inte hÃ¤rledas. Har filen ett sidhuvud?",noObjects:"Objekt kunde inte hÃ¤rledas. Har filen data undantaget sidhuvud?",invalidCsv:"Filen kunde inte behandlas, Ã¤r den en giltig CSV?",invalidJson:"Filen kunde inte behandlas, Ã¤r den en giltig JSON?",jsonNotArray:"Importerad JSON-fil mÃ¥ste innehÃ¥lla ett fÃ¤lt. Import avbruten."},pagination:{sizes:"Artiklar per sida",totalItems:"Artiklar"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("ta",{aggregate:{label:"à®‰à®°à¯à®ªà¯à®ªà®Ÿà®¿à®•à®³à¯"},groupPanel:{description:"à®’à®°à¯ à®ªà®¤à¯à®¤à®¿à®¯à¯ˆ à®•à¯à®´à¯à®µà®¾à®• à®…à®®à¯ˆà®•à¯à®• à®…à®ªà¯à®ªà®¤à¯à®¤à®¿à®¯à®¿à®©à¯ à®¤à®²à¯ˆà®ªà¯à®ªà¯ˆ à®‡à®™à¯à®•à¯‡  à®‡à®´à¯à®¤à¯à®¤à¯ à®µà®°à®µà¯à®®à¯ "},search:{placeholder:"à®¤à¯‡à®Ÿà®²à¯ ...",showingItems:"à®‰à®°à¯à®ªà¯à®ªà®Ÿà®¿à®•à®³à¯ˆ à®•à®¾à®£à¯à®ªà®¿à®¤à¯à®¤à®²à¯:",selectedItems:"à®¤à¯‡à®°à¯à®¨à¯à®¤à¯†à®Ÿà¯à®•à¯à®•à®ªà¯à®ªà®Ÿà¯à®Ÿ  à®‰à®°à¯à®ªà¯à®ªà®Ÿà®¿à®•à®³à¯:",totalItems:"à®®à¯Šà®¤à¯à®¤ à®‰à®°à¯à®ªà¯à®ªà®Ÿà®¿à®•à®³à¯:",size:"à®ªà®•à¯à®• à®…à®³à®µà¯: ",first:"à®®à¯à®¤à®²à¯ à®ªà®•à¯à®•à®®à¯",next:"à®…à®Ÿà¯à®¤à¯à®¤ à®ªà®•à¯à®•à®®à¯",previous:"à®®à¯à®¨à¯à®¤à¯ˆà®¯ à®ªà®•à¯à®•à®®à¯ ",last:"à®‡à®±à¯à®¤à®¿ à®ªà®•à¯à®•à®®à¯"},menu:{text:"à®ªà®¤à¯à®¤à®¿à®•à®³à¯ˆ à®¤à¯‡à®°à¯à®¨à¯à®¤à¯†à®Ÿà¯:"},sort:{ascending:"à®®à¯‡à®²à®¿à®°à¯à®¨à¯à®¤à¯ à®•à¯€à®´à®¾à®•",descending:"à®•à¯€à®´à®¿à®°à¯à®¨à¯à®¤à¯ à®®à¯‡à®²à®¾à®•",remove:"à®µà®°à®¿à®šà¯ˆà®¯à¯ˆ à®¨à¯€à®•à¯à®•à¯"},column:{hide:"à®ªà®¤à¯à®¤à®¿à®¯à¯ˆ à®®à®±à¯ˆà®¤à¯à®¤à¯ à®µà¯ˆ "},aggregation:{count:"à®®à¯Šà®¤à¯à®¤ à®µà®°à®¿à®•à®³à¯:",sum:"à®®à¯Šà®¤à¯à®¤à®®à¯: ",avg:"à®šà®°à®¾à®šà®°à®¿: ",min:"à®•à¯à®±à¯ˆà®¨à¯à®¤à®ªà®Ÿà¯à®š: ",max:"à®…à®¤à®¿à®•à®ªà®Ÿà¯à®š: "},pinning:{pinLeft:"à®‡à®Ÿà®¤à¯à®ªà¯à®±à®®à®¾à®• à®¤à¯ˆà®•à¯à®• ",pinRight:"à®µà®²à®¤à¯à®ªà¯à®±à®®à®¾à®• à®¤à¯ˆà®•à¯à®•",unpin:"à®ªà®¿à®°à®¿"},gridMenu:{columns:"à®ªà®¤à¯à®¤à®¿à®•à®³à¯:",importerTitle:"à®•à¯‹à®ªà¯à®ªà¯ : à®ªà®Ÿà®¿à®¤à¯à®¤à®²à¯",exporterAllAsCsv:"à®Žà®²à¯à®²à®¾ à®¤à®°à®µà¯à®•à®³à¯ˆà®¯à¯à®®à¯ à®•à¯‹à®ªà¯à®ªà®¾à®•à¯à®•à¯: csv",exporterVisibleAsCsv:"à®‡à®°à¯à®•à¯à®•à¯à®®à¯ à®¤à®°à®µà¯à®•à®³à¯ˆ à®•à¯‹à®ªà¯à®ªà®¾à®•à¯à®•à¯: csv",exporterSelectedAsCsv:"à®¤à¯‡à®°à¯à®¨à¯à®¤à¯†à®Ÿà¯à®¤à¯à®¤ à®¤à®°à®µà¯à®•à®³à¯ˆ à®•à¯‹à®ªà¯à®ªà®¾à®•à¯à®•à¯: csv",exporterAllAsPdf:"à®Žà®²à¯à®²à®¾ à®¤à®°à®µà¯à®•à®³à¯ˆà®¯à¯à®®à¯ à®•à¯‹à®ªà¯à®ªà®¾à®•à¯à®•à¯: pdf",exporterVisibleAsPdf:"à®‡à®°à¯à®•à¯à®•à¯à®®à¯ à®¤à®°à®µà¯à®•à®³à¯ˆ à®•à¯‹à®ªà¯à®ªà®¾à®•à¯à®•à¯: pdf",exporterSelectedAsPdf:"à®¤à¯‡à®°à¯à®¨à¯à®¤à¯†à®Ÿà¯à®¤à¯à®¤ à®¤à®°à®µà¯à®•à®³à¯ˆ à®•à¯‹à®ªà¯à®ªà®¾à®•à¯à®•à¯: pdf",clearAllFilters:"Clear all filters"},importer:{noHeaders:"à®ªà®¤à¯à®¤à®¿à®¯à®¿à®©à¯ à®¤à®²à¯ˆà®ªà¯à®ªà¯à®•à®³à¯ˆ à®ªà¯†à®± à®‡à®¯à®²à®µà®¿à®²à¯à®²à¯ˆ, à®•à¯‹à®ªà¯à®ªà®¿à®±à¯à®•à¯ à®¤à®²à¯ˆà®ªà¯à®ªà¯ à®‰à®³à¯à®³à®¤à®¾?",noObjects:"à®‡à®²à®•à¯à®•à¯à®•à®³à¯ˆ à®‰à®°à¯à®µà®¾à®•à¯à®• à®®à¯à®Ÿà®¿à®¯à®µà®¿à®²à¯à®²à¯ˆ, à®•à¯‹à®ªà¯à®ªà®¿à®²à¯ à®¤à®²à¯ˆà®ªà¯à®ªà¯à®•à®³à¯ˆ à®¤à®µà®¿à®° à®¤à®°à®µà¯ à®à®¤à¯‡à®©à¯à®®à¯ à®‰à®³à¯à®³à®¤à®¾? ",invalidCsv:"à®šà®°à®¿à®µà®° à®¨à®Ÿà¯ˆà®®à¯à®±à¯ˆ à®ªà®Ÿà¯à®¤à¯à®¤ à®‡à®¯à®²à®µà®¿à®²à¯à®²à¯ˆ, à®•à¯‹à®ªà¯à®ªà¯ à®šà®°à®¿à®¤à®¾à®©à®¾? - csv",invalidJson:"à®šà®°à®¿à®µà®° à®¨à®Ÿà¯ˆà®®à¯à®±à¯ˆ à®ªà®Ÿà¯à®¤à¯à®¤ à®‡à®¯à®²à®µà®¿à®²à¯à®²à¯ˆ, à®•à¯‹à®ªà¯à®ªà¯ à®šà®°à®¿à®¤à®¾à®©à®¾? - json",jsonNotArray:"à®ªà®Ÿà®¿à®¤à¯à®¤ à®•à¯‹à®ªà¯à®ªà®¿à®²à¯ à®µà®°à®¿à®šà¯ˆà®•à®³à¯ à®‰à®³à¯à®³à®¤à¯, à®¨à®Ÿà¯ˆà®®à¯à®±à¯ˆ à®°à®¤à¯à®¤à¯ à®šà¯†à®¯à¯ : json"},pagination:{sizes:"à®‰à®°à¯à®ªà¯à®ªà®Ÿà®¿à®•à®³à¯ / à®ªà®•à¯à®•à®®à¯",totalItems:"à®‰à®°à¯à®ªà¯à®ªà®Ÿà®¿à®•à®³à¯ "},grouping:{group:"à®•à¯à®´à¯",ungroup:"à®ªà®¿à®°à®¿",aggregate_count:"à®®à®¤à®¿à®ªà¯à®ªà¯€à®Ÿà¯à®Ÿà¯ : à®Žà®£à¯à®£à¯",aggregate_sum:"à®®à®¤à®¿à®ªà¯à®ªà¯€à®Ÿà¯à®Ÿà¯ : à®•à¯‚à®Ÿà¯à®Ÿà®²à¯",aggregate_max:"à®®à®¤à®¿à®ªà¯à®ªà¯€à®Ÿà¯à®Ÿà¯ : à®…à®¤à®¿à®•à®ªà®Ÿà¯à®šà®®à¯",aggregate_min:"à®®à®¤à®¿à®ªà¯à®ªà¯€à®Ÿà¯à®Ÿà¯ : à®•à¯à®±à¯ˆà®¨à¯à®¤à®ªà®Ÿà¯à®šà®®à¯",aggregate_avg:"à®®à®¤à®¿à®ªà¯à®ªà¯€à®Ÿà¯à®Ÿà¯ : à®šà®°à®¾à®šà®°à®¿",aggregate_remove:"à®®à®¤à®¿à®ªà¯à®ªà¯€à®Ÿà¯à®Ÿà¯ : à®¨à¯€à®•à¯à®•à¯"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("tr",{headerCell:{aria:{defaultFilterLabel:"SÃ¼tun iÃ§in filtre",removeFilter:"Filtreyi KaldÄ±r",columnMenuButtonLabel:"SÃ¼tun MenÃ¼sÃ¼"},priority:"Ã–ncelik:",filterLabel:"SÃ¼tun iÃ§in filtre: "},aggregate:{label:"kayÄ±tlar"},groupPanel:{description:"SÃ¼tuna gÃ¶re gruplamak iÃ§in sÃ¼tun baÅŸlÄ±ÄŸÄ±nÄ± buraya sÃ¼rÃ¼kleyin ve bÄ±rakÄ±n."},search:{placeholder:"Arama...",showingItems:"GÃ¶sterilen KayÄ±t:",selectedItems:"SeÃ§ili KayÄ±t:",totalItems:"Toplam KayÄ±t:",size:"Sayfa Boyutu:",first:"Ä°lk Sayfa",next:"Sonraki Sayfa",previous:"Ã–nceki Sayfa",last:"Son Sayfa"},menu:{text:"SÃ¼tunlarÄ± SeÃ§:"},sort:{ascending:"Artan SÄ±rada SÄ±rala",descending:"Azalan SÄ±rada SÄ±rala",none:"SÄ±ralama Yapma",remove:"SÄ±ralamayÄ± KaldÄ±r"},column:{hide:"SÃ¼tunu Gizle"},aggregation:{count:"toplam satÄ±r: ",sum:"toplam: ",avg:"ort: ",min:"min: ",max:"maks: "},pinning:{pinLeft:"Sola Sabitle",pinRight:"SaÄŸa Sabitle",unpin:"Sabitlemeyi KaldÄ±r"},columnMenu:{close:"Kapat"},gridMenu:{aria:{buttonLabel:"Tablo MenÃ¼"},columns:"SÃ¼tunlar:",importerTitle:"Dosya iÃ§eri aktar",exporterAllAsCsv:"BÃ¼tÃ¼n veriyi CSV olarak dÄ±ÅŸarÄ± aktar",exporterVisibleAsCsv:"GÃ¶rÃ¼nen veriyi CSV olarak dÄ±ÅŸarÄ± aktar",exporterSelectedAsCsv:"SeÃ§ili veriyi CSV olarak dÄ±ÅŸarÄ± aktar",exporterAllAsPdf:"BÃ¼tÃ¼n veriyi PDF olarak dÄ±ÅŸarÄ± aktar",exporterVisibleAsPdf:"GÃ¶rÃ¼nen veriyi PDF olarak dÄ±ÅŸarÄ± aktar",exporterSelectedAsPdf:"SeÃ§ili veriyi PDF olarak dÄ±ÅŸarÄ± aktar",clearAllFilters:"BÃ¼tÃ¼n filtreleri kaldÄ±r"},importer:{noHeaders:"SÃ¼tun isimleri Ã¼retilemiyor, dosyanÄ±n bir baÅŸlÄ±ÄŸÄ± var mÄ±?",noObjects:"Nesneler Ã¼retilemiyor, dosyada baÅŸlÄ±ktan baÅŸka bir veri var mÄ±?",invalidCsv:"Dosya iÅŸlenemedi, geÃ§erli bir CSV dosyasÄ± mÄ±?",invalidJson:"Dosya iÅŸlenemedi, geÃ§erli bir Json dosyasÄ± mÄ±?",jsonNotArray:"AlÄ±nan Json dosyasÄ±nda bir dizi bulunmalÄ±dÄ±r, iÅŸlem iptal ediliyor."},pagination:{aria:{pageToFirst:"Ä°lk sayfaya",pageBack:"Geri git",pageSelected:"SeÃ§ili sayfa",pageForward:"Ä°leri git",pageToLast:"Sona git"},sizes:"Sayfadaki nesne sayÄ±sÄ±",totalItems:"kayÄ±tlar",through:"",of:""},grouping:{group:"Grupla",ungroup:"Gruplama",aggregate_count:"Yekun: SayÄ±",aggregate_sum:"Yekun: Toplam",aggregate_max:"Yekun: Maks",aggregate_min:"Yekun: Min",aggregate_avg:"Yekun: Ort",aggregate_remove:"Yekun: Sil"}}),a}])}])}(),function(){var a=["uiT","uiTranslate"],b=["t","uiTranslate"],c=angular.module("ui.grid.i18n");c.constant("i18nConstants",{MISSING:"[MISSING]",UPDATE_EVENT:"$uiI18n",LOCALE_DIRECTIVE_ALIAS:"uiI18n",DEFAULT_LANG:"en"}),c.service("i18nService",["$log","i18nConstants","$rootScope",function(a,b,c){var d={_langs:{},current:null,get:function(a){return this._langs[a.toLowerCase()]},add:function(a,b){var c=a.toLowerCase();this._langs[c]||(this._langs[c]={}),angular.extend(this._langs[c],b)},getAllLangs:function(){var a=[];if(!this._langs)return a;for(var b in this._langs)a.push(b);return a},setCurrent:function(a){this.current=a.toLowerCase()},getCurrentLang:function(){return this.current}},e={add:function(a,b){"object"==typeof a?angular.forEach(a,function(a){a&&d.add(a,b)}):d.add(a,b)},getAllLangs:function(){return d.getAllLangs()},get:function(a){var b=a?a:e.getCurrentLang();return d.get(b)},getSafeText:function(a,c){var f=c?c:e.getCurrentLang(),g=d.get(f);if(!g)return b.MISSING;for(var h=a.split("."),i=g,j=0;j<h.length;++j){if(void 0===i[h[j]]||null===i[h[j]])return b.MISSING;i=i[h[j]]}return i},setCurrentLang:function(a){a&&(d.setCurrent(a),c.$broadcast(b.UPDATE_EVENT))},getCurrentLang:function(){var a=d.getCurrentLang();return a||(a=b.DEFAULT_LANG,d.setCurrent(a)),a}};return e}]);var d=function(a,b){return{compile:function(){return{pre:function(c,d,e){var f=b.LOCALE_DIRECTIVE_ALIAS,g=c.$eval(e[f]);g?c.$watch(e[f],function(){a.setCurrentLang(g)}):e.$$observers&&e.$observe(f,function(){a.setCurrentLang(e[f]||b.DEFAULT_LANG)})}}}}};c.directive("uiI18n",["i18nService","i18nConstants",d]);var e=function(b,c,d){return{restrict:"EA",compile:function(){return{pre:function(e,f,g){var h,i=a[0],j=a[1],k=g[i]||g[j]||f.html(),l=d.MISSING+k;if(g.$$observers){var m=g[i]?i:j;h=g.$observe(m,function(a){a&&f.html(b(a)(c.getCurrentLang())||l)})}var n=b(k),o=e.$on(d.UPDATE_EVENT,function(a){h?h(g[i]||g[j]):f.html(n(c.get())||l)});e.$on("$destroy",o),f.html(n(c.get())||l)}}}}};angular.forEach(a,function(a){c.directive(a,["$parse","i18nService","i18nConstants",e])});var f=function(a,b,c){return function(d){var e=a(d);return e(b.get())||c.MISSING+d}};angular.forEach(b,function(a){c.filter(a,["$parse","i18nService","i18nConstants",f])})}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("zh-cn",{headerCell:{aria:{defaultFilterLabel:"åˆ—è¿‡æ»¤å™¨",removeFilter:"ç§»é™¤è¿‡æ»¤å™¨",columnMenuButtonLabel:"åˆ—èœå•"},priority:"ä¼˜å…ˆçº§:",filterLabel:"åˆ—è¿‡æ»¤å™¨: "},aggregate:{label:"è¡Œ"},groupPanel:{description:"æ‹–æ›³è¡¨å¤´åˆ°æ­¤å¤„è¿›è¡Œåˆ†ç»„"},search:{placeholder:"æŸ¥æ‰¾",showingItems:"å·²æ˜¾ç¤ºè¡Œæ•°ï¼š",selectedItems:"å·²é€‰æ‹©è¡Œæ•°ï¼š",totalItems:"æ€»è¡Œæ•°ï¼š",size:"æ¯é¡µæ˜¾ç¤ºè¡Œæ•°ï¼š",first:"é¦–é¡µ",next:"ä¸‹ä¸€é¡µ",previous:"ä¸Šä¸€é¡µ",last:"æœ«é¡µ"},menu:{text:"é€‰æ‹©åˆ—ï¼š"},sort:{ascending:"å‡åº",descending:"é™åº",none:"æ— åº",remove:"å–æ¶ˆæŽ’åº"},column:{hide:"éšè—åˆ—"},aggregation:{count:"è®¡æ•°ï¼š",sum:"æ±‚å’Œï¼š",avg:"å‡å€¼ï¼š",min:"æœ€å°å€¼ï¼š",max:"æœ€å¤§å€¼ï¼š"},pinning:{pinLeft:"å·¦ä¾§å›ºå®š",pinRight:"å³ä¾§å›ºå®š",unpin:"å–æ¶ˆå›ºå®š"},columnMenu:{close:"å…³é—­"},gridMenu:{aria:{buttonLabel:"è¡¨æ ¼èœå•"},columns:"åˆ—ï¼š",importerTitle:"å¯¼å…¥æ–‡ä»¶",exporterAllAsCsv:"å¯¼å‡ºå…¨éƒ¨æ•°æ®åˆ°CSV",exporterVisibleAsCsv:"å¯¼å‡ºå¯è§æ•°æ®åˆ°CSV",exporterSelectedAsCsv:"å¯¼å‡ºå·²é€‰æ•°æ®åˆ°CSV",exporterAllAsPdf:"å¯¼å‡ºå…¨éƒ¨æ•°æ®åˆ°PDF",exporterVisibleAsPdf:"å¯¼å‡ºå¯è§æ•°æ®åˆ°PDF",exporterSelectedAsPdf:"å¯¼å‡ºå·²é€‰æ•°æ®åˆ°PDF",clearAllFilters:"æ¸…é™¤æ‰€æœ‰è¿‡æ»¤å™¨"},importer:{noHeaders:"æ— æ³•èŽ·å–åˆ—åï¼Œç¡®å®šæ–‡ä»¶åŒ…å«è¡¨å¤´ï¼Ÿ",noObjects:"æ— æ³•èŽ·å–æ•°æ®ï¼Œç¡®å®šæ–‡ä»¶åŒ…å«æ•°æ®ï¼Ÿ",invalidCsv:"æ— æ³•å¤„ç†æ–‡ä»¶ï¼Œç¡®å®šæ˜¯åˆæ³•çš„CSVæ–‡ä»¶ï¼Ÿ",invalidJson:"æ— æ³•å¤„ç†æ–‡ä»¶ï¼Œç¡®å®šæ˜¯åˆæ³•çš„JSONæ–‡ä»¶ï¼Ÿ",jsonNotArray:"å¯¼å…¥çš„æ–‡ä»¶ä¸æ˜¯JSONæ•°ç»„ï¼"},pagination:{aria:{pageToFirst:"ç¬¬ä¸€é¡µ",pageBack:"ä¸Šä¸€é¡µ",pageSelected:"å½“å‰é¡µ",pageForward:"ä¸‹ä¸€é¡µ",pageToLast:"æœ€åŽä¸€é¡µ"},sizes:"è¡Œæ¯é¡µ",totalItems:"è¡Œ",through:"è‡³",of:"å…±"},grouping:{group:"åˆ†ç»„",ungroup:"å–æ¶ˆåˆ†ç»„",aggregate_count:"åˆè®¡: è®¡æ•°",aggregate_sum:"åˆè®¡: æ±‚å’Œ",aggregate_max:"åˆè®¡: æœ€å¤§",aggregate_min:"åˆè®¡: æœ€å°",aggregate_avg:"åˆè®¡: å¹³å‡",aggregate_remove:"åˆè®¡: ç§»é™¤"}}),a}])}])}(),function(){angular.module("ui.grid").config(["$provide",function(a){a.decorator("i18nService",["$delegate",function(a){return a.add("zh-tw",{aggregate:{label:"è¡Œ"},groupPanel:{description:"æ‹–æ›³è¡¨é ­åˆ°æ­¤è™•é€²è¡Œåˆ†çµ„"},search:{placeholder:"æŸ¥æ‰¾",showingItems:"å·²é¡¯ç¤ºè¡Œæ•¸ï¼š",selectedItems:"å·²é¸æ“‡è¡Œæ•¸ï¼š",totalItems:"ç¸½è¡Œæ•¸ï¼š",size:"æ¯é é¡¯ç¤ºè¡Œæ•¸ï¼š",first:"é¦–é ",next:"ä¸‹å£¹é ",previous:"ä¸Šå£¹é ",last:"æœ«é "},menu:{text:"é¸æ“‡åˆ—ï¼š"},sort:{ascending:"å‡åº",descending:"é™åº",remove:"å–æ¶ˆæŽ’åº"},column:{hide:"éš±è—åˆ—"},aggregation:{count:"è¨ˆæ•¸ï¼š",sum:"æ±‚å’Œï¼š",avg:"å‡å€¼ï¼š",min:"æœ€å°å€¼ï¼š",max:"æœ€å¤§å€¼ï¼š"},pinning:{pinLeft:"å·¦å´å›ºå®š",pinRight:"å³å´å›ºå®š",unpin:"å–æ¶ˆå›ºå®š"},gridMenu:{columns:"åˆ—ï¼š",importerTitle:"å°Žå…¥æ–‡ä»¶",exporterAllAsCsv:"å°Žå‡ºå…¨éƒ¨æ•¸æ“šåˆ°CSV",exporterVisibleAsCsv:"å°Žå‡ºå¯è¦‹æ•¸æ“šåˆ°CSV",exporterSelectedAsCsv:"å°Žå‡ºå·²é¸æ•¸æ“šåˆ°CSV",exporterAllAsPdf:"å°Žå‡ºå…¨éƒ¨æ•¸æ“šåˆ°PDF",exporterVisibleAsPdf:"å°Žå‡ºå¯è¦‹æ•¸æ“šåˆ°PDF",exporterSelectedAsPdf:"å°Žå‡ºå·²é¸æ•¸æ“šåˆ°PDF",clearAllFilters:"æ¸…é™¤æ‰€æœ‰è¿‡æ»¤å™¨"},importer:{noHeaders:"ç„¡æ³•ç²å–åˆ—åï¼Œç¢ºå®šæ–‡ä»¶åŒ…å«è¡¨é ­ï¼Ÿ",noObjects:"ç„¡æ³•ç²å–æ•¸æ“šï¼Œç¢ºå®šæ–‡ä»¶åŒ…å«æ•¸æ“šï¼Ÿ",invalidCsv:"ç„¡æ³•è™•ç†æ–‡ä»¶ï¼Œç¢ºå®šæ˜¯åˆæ³•çš„CSVæ–‡ä»¶ï¼Ÿ",invalidJson:"ç„¡æ³•è™•ç†æ–‡ä»¶ï¼Œç¢ºå®šæ˜¯åˆæ³•çš„JSONæ–‡ä»¶ï¼Ÿ",jsonNotArray:"å°Žå…¥çš„æ–‡ä»¶ä¸æ˜¯JSONæ•¸çµ„ï¼"},pagination:{sizes:"è¡Œæ¯é ",totalItems:"è¡Œ"}}),a}])}])}(),function(){"use strict";var a=angular.module("ui.grid.autoResize",["ui.grid"]);a.directive("uiGridAutoResize",["$timeout","gridUtil",function(a,b){return{require:"uiGrid",scope:!1,link:function(a,c,d,e){function f(){i=b.elementHeight(c),h=b.elementWidth(c)}function g(){clearTimeout(j),j=setTimeout(function(){var d=b.elementHeight(c),j=b.elementWidth(c);d!==i||j!==h?(e.grid.gridHeight=d,e.grid.gridWidth=j,a.$apply(function(){e.grid.refresh().then(function(){f(),g()})})):g()},250)}var h,i;f();var j;g(),a.$on("$destroy",function(){clearTimeout(j)})}}}])}(),function(){"use strict";var a=angular.module("ui.grid.cellNav",["ui.grid"]);a.constant("uiGridCellNavConstants",{FEATURE_NAME:"gridCellNav",CELL_NAV_EVENT:"cellNav",direction:{LEFT:0,RIGHT:1,UP:2,DOWN:3,PG_UP:4,PG_DOWN:5},EVENT_TYPE:{KEYDOWN:0,CLICK:1,CLEAR:2}}),a.factory("uiGridCellNavFactory",["gridUtil","uiGridConstants","uiGridCellNavConstants","GridRowColumn","$q",function(a,b,c,d,e){var f=function(a,b,c,d){this.rows=a.visibleRowCache,this.columns=b.visibleColumnCache,this.leftColumns=c?c.visibleColumnCache:[],this.rightColumns=d?d.visibleColumnCache:[],this.bodyContainer=a};return f.prototype.getFocusableCols=function(){var a=this.leftColumns.concat(this.columns,this.rightColumns);return a.filter(function(a){return a.colDef.allowCellFocus})},f.prototype.getFocusableRows=function(){return this.rows.filter(function(a){return a.allowCellFocus!==!1})},f.prototype.getNextRowCol=function(a,b,d){switch(a){case c.direction.LEFT:return this.getRowColLeft(b,d);case c.direction.RIGHT:return this.getRowColRight(b,d);case c.direction.UP:return this.getRowColUp(b,d);case c.direction.DOWN:return this.getRowColDown(b,d);case c.direction.PG_UP:return this.getRowColPageUp(b,d);case c.direction.PG_DOWN:return this.getRowColPageDown(b,d)}},f.prototype.initializeSelection=function(){var a=this.getFocusableCols(),b=this.getFocusableRows();if(0===a.length||0===b.length)return null;return new d(b[0],a[0])},f.prototype.getRowColLeft=function(a,b){var c=this.getFocusableCols(),e=this.getFocusableRows(),f=c.indexOf(b),g=e.indexOf(a);-1===f&&(f=1);var h=0===f?c.length-1:f-1;return h>f?0===g?new d(a,c[h]):new d(e[g-1],c[h]):new d(a,c[h])},f.prototype.getRowColRight=function(a,b){var c=this.getFocusableCols(),e=this.getFocusableRows(),f=c.indexOf(b),g=e.indexOf(a);-1===f&&(f=0);var h=f===c.length-1?0:f+1;return f>h?g===e.length-1?new d(a,c[h]):new d(e[g+1],c[h]):new d(a,c[h])},f.prototype.getRowColDown=function(a,b){var c=this.getFocusableCols(),e=this.getFocusableRows(),f=c.indexOf(b),g=e.indexOf(a);return-1===f&&(f=0),g===e.length-1?new d(a,c[f]):new d(e[g+1],c[f])},f.prototype.getRowColPageDown=function(a,b){
var c=this.getFocusableCols(),e=this.getFocusableRows(),f=c.indexOf(b),g=e.indexOf(a);-1===f&&(f=0);var h=this.bodyContainer.minRowsToRender();return g>=e.length-h?new d(e[e.length-1],c[f]):new d(e[g+h],c[f])},f.prototype.getRowColUp=function(a,b){var c=this.getFocusableCols(),e=this.getFocusableRows(),f=c.indexOf(b),g=e.indexOf(a);return-1===f&&(f=0),0===g?new d(a,c[f]):new d(e[g-1],c[f])},f.prototype.getRowColPageUp=function(a,b){var c=this.getFocusableCols(),e=this.getFocusableRows(),f=c.indexOf(b),g=e.indexOf(a);-1===f&&(f=0);var h=this.bodyContainer.minRowsToRender();return 0>g-h?new d(e[0],c[f]):new d(e[g-h],c[f])},f}]),a.service("uiGridCellNavService",["gridUtil","uiGridConstants","uiGridCellNavConstants","$q","uiGridCellNavFactory","GridRowColumn","ScrollEvent",function(a,b,c,d,e,f,g){var h={initializeGrid:function(a){a.registerColumnBuilder(h.cellNavColumnBuilder),a.cellNav={},a.cellNav.lastRowCol=null,a.cellNav.focusedCells=[],h.defaultGridOptions(a.options);var b={events:{cellNav:{navigate:function(a,b){},viewPortKeyDown:function(a,b){},viewPortKeyPress:function(a,b){}}},methods:{cellNav:{scrollToFocus:function(b,c){return h.scrollToFocus(a,b,c)},getFocusedCell:function(){return a.cellNav.lastRowCol},getCurrentSelection:function(){return a.cellNav.focusedCells},rowColSelectIndex:function(b){for(var c=-1,d=0;d<a.cellNav.focusedCells.length;d++)if(a.cellNav.focusedCells[d].col.uid===b.col.uid&&a.cellNav.focusedCells[d].row.uid===b.row.uid){c=d;break}return c}}}};a.api.registerEventsFromObject(b.events),a.api.registerMethodsFromObject(b.methods)},defaultGridOptions:function(a){a.modifierKeysToMultiSelectCells=a.modifierKeysToMultiSelectCells===!0},decorateRenderContainers:function(a){var b=a.hasRightContainer()?a.renderContainers.right:null,c=a.hasLeftContainer()?a.renderContainers.left:null;null!==c&&(a.renderContainers.left.cellNav=new e(a.renderContainers.body,c,b,a.renderContainers.body)),null!==b&&(a.renderContainers.right.cellNav=new e(a.renderContainers.body,b,a.renderContainers.body,c)),a.renderContainers.body.cellNav=new e(a.renderContainers.body,a.renderContainers.body,c,b)},getDirection:function(a){return a.keyCode===b.keymap.LEFT||a.keyCode===b.keymap.TAB&&a.shiftKey?c.direction.LEFT:a.keyCode===b.keymap.RIGHT||a.keyCode===b.keymap.TAB?c.direction.RIGHT:a.keyCode===b.keymap.UP||a.keyCode===b.keymap.ENTER&&a.shiftKey?c.direction.UP:a.keyCode===b.keymap.PG_UP?c.direction.PG_UP:a.keyCode===b.keymap.DOWN||a.keyCode===b.keymap.ENTER&&!a.ctrlKey&&!a.altKey?c.direction.DOWN:a.keyCode===b.keymap.PG_DOWN?c.direction.PG_DOWN:null},cellNavColumnBuilder:function(a,b,c){var e=[];return a.allowCellFocus=void 0===a.allowCellFocus?!0:a.allowCellFocus,d.all(e)},scrollToFocus:function(a,b,c){var d=null,e=null;return"undefined"!=typeof b&&null!==b&&(d=a.getRow(b)),"undefined"!=typeof c&&null!==c&&(e=a.getColumn(c.name?c.name:c.field)),a.api.core.scrollToIfNecessary(d,e).then(function(){var b={row:d,col:e};null!==d&&null!==e&&a.cellNav.broadcastCellNav(b)})},getLeftWidth:function(a,b){var c=0;if(!b)return c;var d=a.renderContainers.body.visibleColumnCache.indexOf(b);a.renderContainers.body.visibleColumnCache.forEach(function(a,b){d>b&&(c+=a.drawnWidth)});var e=0===d?0:(d+1)/a.renderContainers.body.visibleColumnCache.length;return c+=b.drawnWidth*e}};return h}]),a.directive("uiGridCellnav",["gridUtil","uiGridCellNavService","uiGridCellNavConstants","uiGridConstants","GridRowColumn","$timeout","$compile",function(a,b,c,d,e,f,g){return{replace:!0,priority:-150,require:"^uiGrid",scope:!1,controller:function(){},compile:function(){return{pre:function(a,f,g,h){var i=a,j=h.grid;b.initializeGrid(j),h.cellNav={},h.cellNav.makeRowCol=function(a){return a instanceof e||(a=new e(a.row,a.col)),a},h.cellNav.getActiveCell=function(){var a=f[0].getElementsByClassName("ui-grid-cell-focus");return a.length>0?a[0]:void 0},h.cellNav.broadcastCellNav=j.cellNav.broadcastCellNav=function(a,b,d){b=!(void 0===b||!b),a=h.cellNav.makeRowCol(a),h.cellNav.broadcastFocus(a,b,d),i.$broadcast(c.CELL_NAV_EVENT,a,b,d)},h.cellNav.clearFocus=j.cellNav.clearFocus=function(){j.cellNav.focusedCells=[],i.$broadcast(c.CELL_NAV_EVENT)},h.cellNav.broadcastFocus=function(a,b,c){b=!(void 0===b||!b),a=h.cellNav.makeRowCol(a);var d=a.row,f=a.col,g=h.grid.api.cellNav.rowColSelectIndex(a);if(null===j.cellNav.lastRowCol||-1===g){var i=new e(d,f);(null===j.cellNav.lastRowCol||j.cellNav.lastRowCol.row!==i.row||j.cellNav.lastRowCol.col!==i.col)&&(j.api.cellNav.raise.navigate(i,j.cellNav.lastRowCol),j.cellNav.lastRowCol=i),h.grid.options.modifierKeysToMultiSelectCells&&b?j.cellNav.focusedCells.push(a):j.cellNav.focusedCells=[a]}else j.options.modifierKeysToMultiSelectCells&&b&&g>=0&&j.cellNav.focusedCells.splice(g,1)},h.cellNav.handleKeyDown=function(a){var e=b.getDirection(a);if(null===e)return null;var f="body";a.uiGridTargetRenderContainerId&&(f=a.uiGridTargetRenderContainerId);var g=h.grid.api.cellNav.getFocusedCell();if(g){var i=h.grid.renderContainers[f].cellNav.getNextRowCol(e,g.row,g.col),k=h.grid.renderContainers[f].cellNav.getFocusableCols(),l=h.grid.api.cellNav.rowColSelectIndex(i);return e===c.direction.LEFT&&i.col===k[k.length-1]&&i.row===g.row&&a.keyCode===d.keymap.TAB&&a.shiftKey?(j.cellNav.focusedCells.splice(l,1),h.cellNav.clearFocus(),!0):e!==c.direction.RIGHT||i.col!==k[0]||i.row!==g.row||a.keyCode!==d.keymap.TAB||a.shiftKey?(j.scrollToIfNecessary(i.row,i.col).then(function(){h.cellNav.broadcastCellNav(i)}),a.stopPropagation(),a.preventDefault(),!1):(j.cellNav.focusedCells.splice(l,1),h.cellNav.clearFocus(),!0)}}},post:function(a,b,d,e){function f(){var d='<div id="'+h.id+'-aria-speakable" class="ui-grid-a11y-ariascreenreader-speakable ui-grid-offscreen" aria-live="assertive" role="region" aria-atomic="true" aria-hidden="false" aria-relevant="additions" >&nbsp;</div>',e=g(d)(a);b.prepend(e),a.$on(c.CELL_NAV_EVENT,function(a,b,c,d){function f(a){a!==e.text()&&(e[0].style.clip="rect(0px,0px,0px,0px)",e[0].innerHTML="",e[0].style.visibility="hidden",e[0].style.visibility="visible",""!==a&&(e[0].style.clip="auto",e[0].appendChild(document.createTextNode(a+" ")),e[0].style.visibility="hidden",e[0].style.visibility="visible"))}if(!d||"focus"!==d.type){for(var g=[],i=h.api.cellNav.getCurrentSelection(),j=0;j<i.length;j++)g.push(i[j].getIntersectionValueFiltered());var k=g.toString();f(k)}})}var h=e.grid;f()}}}}}]),a.directive("uiGridRenderContainer",["$timeout","$document","gridUtil","uiGridConstants","uiGridCellNavService","$compile","uiGridCellNavConstants",function(a,b,c,d,e,f,g){return{replace:!0,priority:-99999,require:["^uiGrid","uiGridRenderContainer","?^uiGridCellnav"],scope:!1,compile:function(){return{post:function(b,d,h,i){var j=i[0],k=i[1],l=i[2];if(j.grid.api.cellNav){var m=k.containerId,n=j.grid;if(e.decorateRenderContainers(n),"body"===m){j.grid.options.modifierKeysToMultiSelectCells?d.attr("aria-multiselectable",!0):d.attr("aria-multiselectable",!1);var o=f('<div class="ui-grid-focuser" role="region" aria-live="assertive" aria-atomic="false" tabindex="0" aria-controls="'+n.id+"-aria-speakable "+n.id+'-grid-container" aria-owns="'+n.id+'-grid-container"></div>')(b);d.append(o),o.on("focus",function(a){a.uiGridTargetRenderContainerId=m;var b=j.grid.api.cellNav.getFocusedCell();null===b&&(b=j.grid.renderContainers[m].cellNav.getNextRowCol(g.direction.DOWN,null,null),b.row&&b.col&&j.cellNav.broadcastCellNav(b))}),l.setAriaActivedescendant=function(a){d.attr("aria-activedescendant",a)},l.removeAriaActivedescendant=function(a){d.attr("aria-activedescendant")===a&&d.attr("aria-activedescendant","")},j.focus=function(){c.focus.byElement(o[0])};var p=null;o.on("keydown",function(a){a.uiGridTargetRenderContainerId=m;var b=j.grid.api.cellNav.getFocusedCell(),c=j.cellNav.handleKeyDown(a);null===c&&(j.grid.api.cellNav.raise.viewPortKeyDown(a,b),p=b)}),o.on("keypress",function(b){p&&(a(function(){j.grid.api.cellNav.raise.viewPortKeyPress(b,p)},4),p=null)}),b.$on("$destroy",function(){o.off()})}}}}}}}]),a.directive("uiGridViewport",["$timeout","$document","gridUtil","uiGridConstants","uiGridCellNavService","uiGridCellNavConstants","$log","$compile",function(a,b,c,d,e,f,g,h){return{replace:!0,priority:-99999,require:["^uiGrid","^uiGridRenderContainer","?^uiGridCellnav"],scope:!1,compile:function(){return{pre:function(a,b,c,d){},post:function(a,b,c,d){var e=d[0],f=d[1];if(e.grid.api.cellNav){var g=f.containerId;if("body"===g){var h=e.grid;h.api.core.on.scrollBegin(a,function(a){var b=e.grid.api.cellNav.getFocusedCell();null!==b&&f.colContainer.containsColumn(b.col)&&e.cellNav.clearFocus()}),h.api.core.on.scrollEnd(a,function(a){var b=e.grid.api.cellNav.getFocusedCell();null!==b&&f.colContainer.containsColumn(b.col)&&e.cellNav.broadcastCellNav(b)}),h.api.cellNav.on.navigate(a,function(){e.focus()})}}}}}}}]),a.directive("uiGridCell",["$timeout","$document","uiGridCellNavService","gridUtil","uiGridCellNavConstants","uiGridConstants","GridRowColumn",function(a,b,c,d,e,f,g){return{priority:-150,restrict:"A",require:["^uiGrid","?^uiGridCellnav"],scope:!1,link:function(a,b,c,d){function f(a){a.preventDefault()}function h(){if(!a.focused){var c=b.find("div");c.addClass("ui-grid-cell-focus"),b.attr("aria-selected",!0),k.setAriaActivedescendant(b.attr("id")),a.focused=!0}}function i(){if(a.focused){var c=b.find("div");c.removeClass("ui-grid-cell-focus"),b.attr("aria-selected",!1),k.removeAriaActivedescendant(b.attr("id")),a.focused=!1}}var j=d[0],k=d[1];if(j.grid.api.cellNav&&a.col.colDef.allowCellFocus){var l=j.grid;a.focused=!1,b.attr("tabindex",-1),b.find("div").on("click",function(b){j.cellNav.broadcastCellNav(new g(a.row,a.col),b.ctrlKey||b.metaKey,b),b.stopPropagation(),a.$apply()}),b.on("mousedown",f),j.grid.api.edit&&(j.grid.api.edit.on.beginCellEdit(a,function(){b.off("mousedown",f)}),j.grid.api.edit.on.afterCellEdit(a,function(){b.on("mousedown",f)}),j.grid.api.edit.on.cancelCellEdit(a,function(){b.on("mousedown",f)})),b.on("focus",function(b){j.cellNav.broadcastCellNav(new g(a.row,a.col),!1,b),b.stopPropagation(),a.$apply()}),a.$on(e.CELL_NAV_EVENT,function(b,c,d){var e=l.cellNav.focusedCells.some(function(b,c){return b.row===a.row&&b.col===a.col});e?h():i()}),a.$on("$destroy",function(){b.find("div").off(),b.off()})}}}}])}(),function(){"use strict";var a=angular.module("ui.grid.edit",["ui.grid"]);a.constant("uiGridEditConstants",{EDITABLE_CELL_TEMPLATE:/EDITABLE_CELL_TEMPLATE/g,EDITABLE_CELL_DIRECTIVE:/editable_cell_directive/g,events:{BEGIN_CELL_EDIT:"uiGridEventBeginCellEdit",END_CELL_EDIT:"uiGridEventEndCellEdit",CANCEL_CELL_EDIT:"uiGridEventCancelCellEdit"}}),a.service("uiGridEditService",["$q","uiGridConstants","gridUtil",function(a,b,c){var d={initializeGrid:function(a){d.defaultGridOptions(a.options),a.registerColumnBuilder(d.editColumnBuilder),a.edit={};var b={events:{edit:{afterCellEdit:function(a,b,c,d){},beginCellEdit:function(a,b,c){},cancelCellEdit:function(a,b){}}},methods:{edit:{}}};a.api.registerEventsFromObject(b.events)},defaultGridOptions:function(a){a.cellEditableCondition=void 0===a.cellEditableCondition?!0:a.cellEditableCondition,a.enableCellEditOnFocus=void 0===a.enableCellEditOnFocus?!1:a.enableCellEditOnFocus},editColumnBuilder:function(b,d,e){var f=[];return b.enableCellEdit=void 0===b.enableCellEdit?void 0===e.enableCellEdit?"object"!==b.type:e.enableCellEdit:b.enableCellEdit,b.cellEditableCondition=void 0===b.cellEditableCondition?e.cellEditableCondition:b.cellEditableCondition,b.enableCellEdit&&(b.editableCellTemplate=b.editableCellTemplate||e.editableCellTemplate||"ui-grid/cellEditor",f.push(c.getTemplate(b.editableCellTemplate).then(function(a){d.editableCellTemplate=a},function(a){throw new Error("Couldn't fetch/use colDef.editableCellTemplate '"+b.editableCellTemplate+"'")}))),b.enableCellEditOnFocus=void 0===b.enableCellEditOnFocus?e.enableCellEditOnFocus:b.enableCellEditOnFocus,a.all(f)},isStartEditKey:function(a){return a.metaKey||a.keyCode===b.keymap.ESC||a.keyCode===b.keymap.SHIFT||a.keyCode===b.keymap.CTRL||a.keyCode===b.keymap.ALT||a.keyCode===b.keymap.WIN||a.keyCode===b.keymap.CAPSLOCK||a.keyCode===b.keymap.LEFT||a.keyCode===b.keymap.TAB&&a.shiftKey||a.keyCode===b.keymap.RIGHT||a.keyCode===b.keymap.TAB||a.keyCode===b.keymap.UP||a.keyCode===b.keymap.ENTER&&a.shiftKey||a.keyCode===b.keymap.DOWN||a.keyCode===b.keymap.ENTER?!1:!0}};return d}]),a.directive("uiGridEdit",["gridUtil","uiGridEditService",function(a,b){return{replace:!0,priority:0,require:"^uiGrid",scope:!1,compile:function(){return{pre:function(a,c,d,e){b.initializeGrid(e.grid)},post:function(a,b,c,d){}}}}}]),a.directive("uiGridViewport",["uiGridEditConstants",function(a){return{replace:!0,priority:-99998,require:["^uiGrid","^uiGridRenderContainer"],scope:!1,compile:function(){return{post:function(b,c,d,e){var f=e[0];if(f.grid.api.edit&&f.grid.api.cellNav){var g=e[1].containerId;"body"===g&&(b.$on(a.events.CANCEL_CELL_EDIT,function(){f.focus()}),b.$on(a.events.END_CELL_EDIT,function(){f.focus()}))}}}}}}]),a.directive("uiGridCell",["$compile","$injector","$timeout","uiGridConstants","uiGridEditConstants","gridUtil","$parse","uiGridEditService","$rootScope","$q",function(a,b,c,d,e,f,g,h,i,j){var k=500;if(b.has("uiGridCellNavService")){b.get("uiGridCellNavService")}return{priority:-100,restrict:"A",scope:!1,require:"?^uiGrid",link:function(b,l,m,n){function o(){l.on("dblclick",u),l.on("touchstart",p),n&&n.grid.api.cellNav&&(G=n.grid.api.cellNav.on.viewPortKeyDown(b,function(a,c){null!==c&&(c.row!==b.row||c.col!==b.col||b.col.colDef.enableCellEditOnFocus||s(a))}),F=n.grid.api.cellNav.on.navigate(b,function(a,d){b.col.colDef.enableCellEditOnFocus&&(d&&a.row===d.row&&a.col===d.col||a.row!==b.row||a.col!==b.col||c(function(){u()}))})),b.beginEditEventsWired=!0}function p(a){"undefined"!=typeof a.originalEvent&&void 0!==a.originalEvent&&(a=a.originalEvent),l.on("touchend",q),C=c(function(){},k),C.then(function(){setTimeout(u,0),l.off("touchend",q)})}function q(a){c.cancel(C),l.off("touchend",q)}function r(){l.off("dblclick",u),l.off("keydown",s),l.off("touchstart",p),F(),G(),b.beginEditEventsWired=!1}function s(a){h.isStartEditKey(a)&&u(a)}function t(a,c){return!c.isSaving&&(angular.isFunction(a.colDef.cellEditableCondition)?a.colDef.cellEditableCondition(b):a.colDef.cellEditableCondition)}function u(a){b.grid.api.core.scrollToIfNecessary(b.row,b.col).then(function(){v(a)})}function v(h){if(!E&&t(b.col,b.row)){B=g(b.row.getQualifiedColField(b.col)),A=B(b),z=b.col.editableCellTemplate,z=b.col.colDef.editModelField?z.replace(d.MODEL_COL_FIELD,f.preEval("row.entity."+b.col.colDef.editModelField)):z.replace(d.MODEL_COL_FIELD,b.row.getQualifiedColField(b.col)),z=z.replace(d.COL_FIELD,"grid.getCellValue(row, col)");var k=b.col.colDef.editDropdownFilter?"|"+b.col.colDef.editDropdownFilter:"";z=z.replace(d.CUSTOM_FILTERS,k);var m="text";switch(b.col.colDef.type){case"boolean":m="checkbox";break;case"number":m="number";break;case"date":m="date"}z=z.replace("INPUT_TYPE",m);var n=b.col.colDef.editDropdownOptionsFunction;if(n)j.when(n(b.row.entity,b.col.colDef)).then(function(a){b.editDropdownOptionsArray=a});else{var o=b.col.colDef.editDropdownRowEntityOptionsArrayPath;o?b.editDropdownOptionsArray=y(b.row.entity,o):b.editDropdownOptionsArray=b.col.colDef.editDropdownOptionsArray}b.editDropdownIdLabel=b.col.colDef.editDropdownIdLabel?b.col.colDef.editDropdownIdLabel:"id",b.editDropdownValueLabel=b.col.colDef.editDropdownValueLabel?b.col.colDef.editDropdownValueLabel:"value";var p=function(){E=!0,r();var c=angular.element(z);l.append(c),D=b.$new(),a(c)(D);var d=angular.element(l.children()[0]);d.addClass("ui-grid-cell-contents-hidden")};i.$$phase?p():b.$apply(p);var q=b.col.grid.api.core.on.scrollBegin(b,function(){b.grid.disableScrolling||(w(),b.grid.api.edit.raise.afterCellEdit(b.row.entity,b.col.colDef,B(b),A),q(),s(),u())}),s=b.$on(e.events.END_CELL_EDIT,function(){w(),b.grid.api.edit.raise.afterCellEdit(b.row.entity,b.col.colDef,B(b),A),s(),q(),u()}),u=b.$on(e.events.CANCEL_CELL_EDIT,function(){x(),u(),q(),s()});b.$broadcast(e.events.BEGIN_CELL_EDIT,h),c(function(){b.grid.api.edit.raise.beginCellEdit(b.row.entity,b.col.colDef,h)})}}function w(){if(b.grid.disableScrolling=!1,E){n&&n.grid.api.cellNav&&n.focus();var a=angular.element(l.children()[0]);D.$destroy(),angular.element(l.children()[1]).remove(),a.removeClass("ui-grid-cell-contents-hidden"),E=!1,o(),b.grid.api.core.notifyDataChange(d.dataChange.EDIT)}}function x(){b.grid.disableScrolling=!1,E&&(B.assign(b,A),b.$apply(),b.grid.api.edit.raise.cancelCellEdit(b.row.entity,b.col.colDef),w())}function y(a,b){b=b.replace(/\[(\w+)\]/g,".$1"),b=b.replace(/^\./,"");for(var c=b.split(".");c.length;){var d=c.shift();if(!(d in a))return;a=a[d]}return a}var z,A,B,C,D,E=!1;if(b.col.colDef.enableCellEdit){var F=function(){},G=function(){},H=function(){b.col.colDef.enableCellEdit&&b.row.enableCellEdit!==!1?b.beginEditEventsWired||o():b.beginEditEventsWired&&r()};H();var I=b.$watch("row",function(a,b){a!==b&&H()});b.$on("$destroy",I)}}}}]),a.directive("uiGridEditor",["gridUtil","uiGridConstants","uiGridEditConstants","$timeout","uiGridEditService",function(a,b,c,d,e){return{scope:!0,require:["?^uiGrid","?^uiGridRenderContainer","ngModel"],compile:function(){return{pre:function(a,b,c){},post:function(a,f,g,h){var i,j,k;h[0]&&(i=h[0]),h[1]&&(j=h[1]),h[2]&&(k=h[2]),a.$on(c.events.BEGIN_CELL_EDIT,function(b,c){if(d(function(){if(f[0].focus(),f[0].select&&a.col.colDef.enableCellEditOnFocus||!i||!i.grid.api.cellNav)f[0].select();else try{f[0].setSelectionRange(f[0].value.length,f[0].value.length)}catch(b){}}),i&&i.grid.api.cellNav)var g=i.grid.api.cellNav.on.viewPortKeyPress(a,function(a,b){e.isStartEditKey(a)&&(k.$setViewValue(String.fromCharCode("number"==typeof a.which?a.which:a.keyCode),a),k.$render()),g()});f.on("blur",function(b){a.stopEdit(b)})}),a.deepEdit=!1,a.stopEdit=function(b){a.inputForm&&!a.inputForm.$valid?(b.stopPropagation(),a.$emit(c.events.CANCEL_CELL_EDIT)):a.$emit(c.events.END_CELL_EDIT),a.deepEdit=!1},f.on("click",function(b){"checkbox"!==f[0].type&&(a.deepEdit=!0,d(function(){a.grid.disableScrolling=!0}))}),f.on("keydown",function(d){switch(d.keyCode){case b.keymap.ESC:d.stopPropagation(),a.$emit(c.events.CANCEL_CELL_EDIT)}if(!a.deepEdit||d.keyCode!==b.keymap.LEFT&&d.keyCode!==b.keymap.RIGHT&&d.keyCode!==b.keymap.UP&&d.keyCode!==b.keymap.DOWN)if(i&&i.grid.api.cellNav)d.uiGridTargetRenderContainerId=j.containerId,null!==i.cellNav.handleKeyDown(d)&&a.stopEdit(d);else switch(d.keyCode){case b.keymap.ENTER:case b.keymap.TAB:d.stopPropagation(),d.preventDefault(),a.stopEdit(d)}else d.stopPropagation();return!0})}}}}}]),a.directive("uiGridEditor",["$filter",function(a){function b(a){if("undefined"==typeof a||""===a)return null;var b=a.split("-");if(3!==b.length)return null;var c=parseInt(b[0],10),d=parseInt(b[1],10),e=parseInt(b[2],10);return 1>d||1>c||1>e?null:new Date(c,d-1,e)}return{priority:-100,require:"?ngModel",link:function(c,d,e,f){2===angular.version.minor&&e.type&&"date"===e.type&&f&&(f.$formatters.push(function(b){return f.$setValidity(null,!b||!isNaN(b.getTime())),a("date")(b,"yyyy-MM-dd")}),f.$parsers.push(function(a){if(a&&a.length>0){var c=b(a);return f.$setValidity(null,c&&!isNaN(c.getTime())),c}return f.$setValidity(null,!0),null}))}}}]),a.directive("uiGridEditDropdown",["uiGridConstants","uiGridEditConstants",function(a,b){return{require:["?^uiGrid","?^uiGridRenderContainer"],scope:!0,compile:function(){return{pre:function(a,b,c){},post:function(c,d,e,f){var g=f[0],h=f[1];c.$on(b.events.BEGIN_CELL_EDIT,function(){d[0].focus(),d[0].style.width=d[0].parentElement.offsetWidth-1+"px",d.on("blur",function(a){c.stopEdit(a)})}),c.stopEdit=function(a){c.$emit(b.events.END_CELL_EDIT)},d.on("keydown",function(d){switch(d.keyCode){case a.keymap.ESC:d.stopPropagation(),c.$emit(b.events.CANCEL_CELL_EDIT)}if(g&&g.grid.api.cellNav)d.uiGridTargetRenderContainerId=h.containerId,null!==g.cellNav.handleKeyDown(d)&&c.stopEdit(d);else switch(d.keyCode){case a.keymap.ENTER:case a.keymap.TAB:d.stopPropagation(),d.preventDefault(),c.stopEdit(d)}return!0})}}}}}]),a.directive("uiGridEditFileChooser",["gridUtil","uiGridConstants","uiGridEditConstants","$timeout",function(a,b,c,d){return{scope:!0,require:["?^uiGrid","?^uiGridRenderContainer"],compile:function(){return{pre:function(a,b,c){},post:function(b,d,e,f){var g,h;f[0]&&(g=f[0]),f[1]&&(h=f[1]);var i=(g.grid,function(d){var e=d.srcElement||d.target;e&&e.files&&e.files.length>0?("function"==typeof b.col.colDef.editFileChooserCallback?b.col.colDef.editFileChooserCallback(b.row,b.col,e.files):a.logError("You need to set colDef.editFileChooserCallback to use the file chooser"),e.form.reset(),b.$emit(c.events.END_CELL_EDIT)):b.$emit(c.events.CANCEL_CELL_EDIT)});d[0].addEventListener("change",i,!1),b.$on(c.events.BEGIN_CELL_EDIT,function(){d[0].focus(),d[0].select(),d.on("blur",function(a){b.$emit(c.events.END_CELL_EDIT)})})}}}}}])}(),function(){"use strict";var a=angular.module("ui.grid.expandable",["ui.grid"]);a.service("uiGridExpandableService",["gridUtil","$compile",function(a,b){var c={initializeGrid:function(b){b.expandable={},b.expandable.expandedAll=!1,b.options.enableExpandable=b.options.enableExpandable!==!1,b.options.expandableRowHeight=b.options.expandableRowHeight||150,b.options.expandableRowHeaderWidth=b.options.expandableRowHeaderWidth||40,b.options.enableExpandable&&!b.options.expandableRowTemplate&&(a.logError("You have not set the expandableRowTemplate, disabling expandable module"),b.options.enableExpandable=!1);var d={events:{expandable:{rowExpandedBeforeStateChanged:function(a,b){},rowExpandedStateChanged:function(a,b){}}},methods:{expandable:{toggleRowExpansion:function(a){var d=b.getRow(a);null!==d&&c.toggleRowExpansion(b,d)},expandAllRows:function(){c.expandAllRows(b)},collapseAllRows:function(){c.collapseAllRows(b)},toggleAllRows:function(){c.toggleAllRows(b)},expandRow:function(a){var d=b.getRow(a);null===d||d.isExpanded||c.toggleRowExpansion(b,d)},collapseRow:function(a){var d=b.getRow(a);null!==d&&d.isExpanded&&c.toggleRowExpansion(b,d)},getExpandedRows:function(){return c.getExpandedRows(b).map(function(a){return a.entity})}}}};b.api.registerEventsFromObject(d.events),b.api.registerMethodsFromObject(d.methods)},toggleRowExpansion:function(a,b){a.api.expandable.raise.rowExpandedBeforeStateChanged(b),b.isExpanded=!b.isExpanded,angular.isUndefined(b.expandedRowHeight)&&(b.expandedRowHeight=a.options.expandableRowHeight),b.isExpanded?b.height=b.grid.options.rowHeight+b.expandedRowHeight:(b.height=b.grid.options.rowHeight,a.expandable.expandedAll=!1),a.api.expandable.raise.rowExpandedStateChanged(b)},expandAllRows:function(a,b){a.renderContainers.body.visibleRowCache.forEach(function(b){b.isExpanded||c.toggleRowExpansion(a,b)}),a.expandable.expandedAll=!0,a.queueGridRefresh()},collapseAllRows:function(a){a.renderContainers.body.visibleRowCache.forEach(function(b){b.isExpanded&&c.toggleRowExpansion(a,b)}),a.expandable.expandedAll=!1,a.queueGridRefresh()},toggleAllRows:function(a){a.expandable.expandedAll?c.collapseAllRows(a):c.expandAllRows(a)},getExpandedRows:function(a){return a.rows.filter(function(a){return a.isExpanded})}};return c}]),a.directive("uiGridExpandable",["uiGridExpandableService","$templateCache",function(a,b){return{replace:!0,priority:0,require:"^uiGrid",scope:!1,compile:function(){return{pre:function(c,d,e,f){if(f.grid.options.enableExpandableRowHeader!==!1){var g={name:"expandableButtons",displayName:"",exporterSuppressExport:!0,enableColumnResizing:!1,enableColumnMenu:!1,width:f.grid.options.expandableRowHeaderWidth||40};g.cellTemplate=b.get("ui-grid/expandableRowHeader"),g.headerCellTemplate=b.get("ui-grid/expandableTopRowHeader"),f.grid.addRowHeaderColumn(g)}a.initializeGrid(f.grid)},post:function(a,b,c,d){}}}}}]),a.directive("uiGrid",["uiGridExpandableService","$templateCache",function(a,b){return{replace:!0,priority:599,require:"^uiGrid",scope:!1,compile:function(){return{pre:function(a,b,c,d){d.grid.api.core.on.renderingComplete(a,function(){a.row&&a.row.grid&&a.row.grid.options&&a.row.grid.options.enableExpandable&&(d.grid.parentRow=a.row)})},post:function(a,b,c,d){}}}}}]),a.directive("uiGridExpandableRow",["uiGridExpandableService","$timeout","$compile","uiGridConstants","gridUtil","$interval","$log",function(a,b,c,d,e,f,g){return{replace:!1,priority:0,scope:!1,compile:function(){return{pre:function(a,b,d,f){e.getTemplate(a.grid.options.expandableRowTemplate).then(function(d){if(a.grid.options.expandableRowScope){var e=a.grid.options.expandableRowScope;for(var f in e)e.hasOwnProperty(f)&&(a[f]=e[f])}var g=c(d)(a);b.append(g),a.row.expandedRendered=!0})},post:function(a,b,c,d){a.$on("$destroy",function(){a.row.expandedRendered=!1})}}}}}]),a.directive("uiGridRow",["$compile","gridUtil","$templateCache",function(a,b,c){return{priority:-200,scope:!1,compile:function(a,b){return{pre:function(a,b,c,d){a.expandableRow={},a.expandableRow.shouldRenderExpand=function(){var b="body"===a.colContainer.name&&a.grid.options.enableExpandable!==!1&&a.row.isExpanded&&(!a.grid.isScrollingVertically||a.row.expandedRendered);return b},a.expandableRow.shouldRenderFiller=function(){var b=a.row.isExpanded&&("body"!==a.colContainer.name||a.grid.isScrollingVertically&&!a.row.expandedRendered);return b}},post:function(a,b,c,d){}}}}}]),a.directive("uiGridViewport",["$compile","gridUtil","$templateCache",function(a,b,c){return{priority:-200,scope:!1,compile:function(a,b){var d=angular.element(a.children().children()[0]),e=c.get("ui-grid/expandableScrollFiller"),f=c.get("ui-grid/expandableRow");return d.append(f),d.append(e),{pre:function(a,b,c,d){},post:function(a,b,c,d){}}}}}])}(),function(){"use strict";var a=angular.module("ui.grid.exporter",["ui.grid"]);a.constant("uiGridExporterConstants",{featureName:"exporter",ALL:"all",VISIBLE:"visible",SELECTED:"selected",CSV_CONTENT:"CSV_CONTENT",BUTTON_LABEL:"BUTTON_LABEL",FILE_NAME:"FILE_NAME"}),a.service("uiGridExporterService",["$q","uiGridExporterConstants","gridUtil","$compile","$interval","i18nService",function(a,b,c,d,e,f){var g={delay:100,initializeGrid:function(a){a.exporter={},this.defaultGridOptions(a.options);var b={events:{exporter:{}},methods:{exporter:{csvExport:function(b,c){g.csvExport(a,b,c)},pdfExport:function(b,c){g.pdfExport(a,b,c)}}}};a.api.registerEventsFromObject(b.events),a.api.registerMethodsFromObject(b.methods),a.api.core.addToGridMenu?g.addToMenu(a):e(function(){a.api.core.addToGridMenu&&g.addToMenu(a)},this.delay,1)},defaultGridOptions:function(a){a.exporterSuppressMenu=a.exporterSuppressMenu===!0,a.exporterMenuLabel=a.exporterMenuLabel?a.exporterMenuLabel:"Export",a.exporterSuppressColumns=a.exporterSuppressColumns?a.exporterSuppressColumns:[],a.exporterCsvColumnSeparator=a.exporterCsvColumnSeparator?a.exporterCsvColumnSeparator:",",a.exporterCsvFilename=a.exporterCsvFilename?a.exporterCsvFilename:"download.csv",a.exporterPdfFilename=a.exporterPdfFilename?a.exporterPdfFilename:"download.pdf",a.exporterOlderExcelCompatibility=a.exporterOlderExcelCompatibility===!0,a.exporterPdfDefaultStyle=a.exporterPdfDefaultStyle?a.exporterPdfDefaultStyle:{fontSize:11},a.exporterPdfTableStyle=a.exporterPdfTableStyle?a.exporterPdfTableStyle:{margin:[0,5,0,15]},a.exporterPdfTableHeaderStyle=a.exporterPdfTableHeaderStyle?a.exporterPdfTableHeaderStyle:{bold:!0,fontSize:12,color:"black"},a.exporterPdfHeader=a.exporterPdfHeader?a.exporterPdfHeader:null,a.exporterPdfFooter=a.exporterPdfFooter?a.exporterPdfFooter:null,a.exporterPdfOrientation=a.exporterPdfOrientation?a.exporterPdfOrientation:"landscape",a.exporterPdfPageSize=a.exporterPdfPageSize?a.exporterPdfPageSize:"A4",a.exporterPdfMaxGridWidth=a.exporterPdfMaxGridWidth?a.exporterPdfMaxGridWidth:720,a.exporterMenuAllData=void 0!==a.exporterMenuAllData?a.exporterMenuAllData:!0,a.exporterMenuVisibleData=void 0!==a.exporterMenuVisibleData?a.exporterMenuVisibleData:!0,a.exporterMenuSelectedData=void 0!==a.exporterMenuSelectedData?a.exporterMenuSelectedData:!0,a.exporterMenuCsv=void 0!==a.exporterMenuCsv?a.exporterMenuCsv:!0,a.exporterMenuPdf=void 0!==a.exporterMenuPdf?a.exporterMenuPdf:!0,a.exporterPdfCustomFormatter=a.exporterPdfCustomFormatter&&"function"==typeof a.exporterPdfCustomFormatter?a.exporterPdfCustomFormatter:function(a){return a},a.exporterHeaderFilterUseName=a.exporterHeaderFilterUseName===!0,a.exporterFieldCallback=a.exporterFieldCallback?a.exporterFieldCallback:function(a,b,c,d){return d},a.exporterAllDataFn=a.exporterAllDataFn?a.exporterAllDataFn:null,null==a.exporterAllDataFn&&a.exporterAllDataPromise&&(a.exporterAllDataFn=a.exporterAllDataPromise)},addToMenu:function(a){a.api.core.addToGridMenu(a,[{title:f.getSafeText("gridMenu.exporterAllAsCsv"),action:function(a){this.grid.api.exporter.csvExport(b.ALL,b.ALL)},shown:function(){return this.grid.options.exporterMenuCsv&&this.grid.options.exporterMenuAllData},order:200},{title:f.getSafeText("gridMenu.exporterVisibleAsCsv"),action:function(a){this.grid.api.exporter.csvExport(b.VISIBLE,b.VISIBLE)},shown:function(){return this.grid.options.exporterMenuCsv&&this.grid.options.exporterMenuVisibleData},order:201},{title:f.getSafeText("gridMenu.exporterSelectedAsCsv"),action:function(a){this.grid.api.exporter.csvExport(b.SELECTED,b.VISIBLE)},shown:function(){return this.grid.options.exporterMenuCsv&&this.grid.options.exporterMenuSelectedData&&this.grid.api.selection&&this.grid.api.selection.getSelectedRows().length>0},order:202},{title:f.getSafeText("gridMenu.exporterAllAsPdf"),action:function(a){this.grid.api.exporter.pdfExport(b.ALL,b.ALL)},shown:function(){return this.grid.options.exporterMenuPdf&&this.grid.options.exporterMenuAllData},order:203},{title:f.getSafeText("gridMenu.exporterVisibleAsPdf"),action:function(a){this.grid.api.exporter.pdfExport(b.VISIBLE,b.VISIBLE)},shown:function(){return this.grid.options.exporterMenuPdf&&this.grid.options.exporterMenuVisibleData},order:204},{title:f.getSafeText("gridMenu.exporterSelectedAsPdf"),action:function(a){this.grid.api.exporter.pdfExport(b.SELECTED,b.VISIBLE)},shown:function(){return this.grid.options.exporterMenuPdf&&this.grid.options.exporterMenuSelectedData&&this.grid.api.selection&&this.grid.api.selection.getSelectedRows().length>0},order:205}])},csvExport:function(a,b,c){var d=this;this.loadAllDataIfNeeded(a,b,c).then(function(){var e=a.options.showHeader?d.getColumnHeaders(a,c):[],f=d.getData(a,b,c),g=d.formatAsCsv(e,f,a.options.exporterCsvColumnSeparator);d.downloadFile(a.options.exporterCsvFilename,g,a.options.exporterOlderExcelCompatibility)})},loadAllDataIfNeeded:function(c,d,e){if(d===b.ALL&&c.rows.length!==c.options.totalItems&&c.options.exporterAllDataFn)return c.options.exporterAllDataFn().then(function(){c.modifyRows(c.options.data)});var f=a.defer();return f.resolve(),f.promise},getColumnHeaders:function(a,c){var d,e=[];if(c===b.ALL)d=a.columns;else{var f=a.renderContainers.left?a.renderContainers.left.visibleColumnCache.filter(function(a){return a.visible}):[],g=a.renderContainers.body?a.renderContainers.body.visibleColumnCache.filter(function(a){return a.visible}):[],h=a.renderContainers.right?a.renderContainers.right.visibleColumnCache.filter(function(a){return a.visible}):[];d=f.concat(g,h)}return d.forEach(function(b,c){b.colDef.exporterSuppressExport!==!0&&-1===a.options.exporterSuppressColumns.indexOf(b.name)&&e.push({name:b.field,displayName:a.options.exporterHeaderFilter?a.options.exporterHeaderFilterUseName?a.options.exporterHeaderFilter(b.name):a.options.exporterHeaderFilter(b.displayName):b.displayName,width:b.drawnWidth?b.drawnWidth:b.width,align:"number"===b.colDef.type?"right":"left"})}),e},getData:function(a,d,e,f){var g,h,i=[];switch(d){case b.ALL:g=a.rows;break;case b.VISIBLE:g=a.getVisibleRows();break;case b.SELECTED:a.api.selection?g=a.api.selection.getSelectedGridRows():c.logError("selection feature must be enabled to allow selected rows to be exported")}if(e===b.ALL)h=a.columns;else{
var j=a.renderContainers.left?a.renderContainers.left.visibleColumnCache.filter(function(a){return a.visible}):[],k=a.renderContainers.body?a.renderContainers.body.visibleColumnCache.filter(function(a){return a.visible}):[],l=a.renderContainers.right?a.renderContainers.right.visibleColumnCache.filter(function(a){return a.visible}):[];h=j.concat(k,l)}return g.forEach(function(c,d){if(c.exporterEnableExporting!==!1){var g=[];h.forEach(function(d,h){if((d.visible||e===b.ALL)&&d.colDef.exporterSuppressExport!==!0&&-1===a.options.exporterSuppressColumns.indexOf(d.name)){var i=f?a.getCellDisplayValue(c,d):a.getCellValue(c,d),j={value:a.options.exporterFieldCallback(a,c,d,i)};d.colDef.exporterPdfAlign&&(j.alignment=d.colDef.exporterPdfAlign),g.push(j)}}),i.push(g)}}),i},formatAsCsv:function(a,b,c){var d=this,e=a.map(function(a){return{value:a.displayName}}),f=e.length>0?d.formatRowAsCsv(this,c)(e)+"\n":"";return f+=b.map(this.formatRowAsCsv(this,c)).join("\n")},formatRowAsCsv:function(a,b){return function(c){return c.map(a.formatFieldAsCsv).join(b)}},formatFieldAsCsv:function(a){return null==a.value?"":"number"==typeof a.value?a.value:"boolean"==typeof a.value?a.value?"TRUE":"FALSE":"string"==typeof a.value?'"'+a.value.replace(/"/g,'""')+'"':JSON.stringify(a.value)},isIE:function(){var a=navigator.userAgent.search(/(?:Edge|MSIE|Trident\/.*; rv:)/),b=!1;return-1!==a&&(b=!0),b},downloadFile:function(a,b,c){var d,e,f=document,g=f.createElement("a"),h="application/octet-stream;charset=utf-8";if(e=this.isIE(),e&&10>e){var i=f.createElement("iframe");return document.body.appendChild(i),i.contentWindow.document.open("text/html","replace"),i.contentWindow.document.write("sep=,\r\n"+b),i.contentWindow.document.close(),i.contentWindow.focus(),i.contentWindow.document.execCommand("SaveAs",!0,a),document.body.removeChild(i),!0}if(navigator.msSaveBlob)return navigator.msSaveOrOpenBlob(new Blob([c?"\ufeff":"",b],{type:h}),a);if("download"in g){var j=new Blob([c?"\ufeff":"",b],{type:h});d=URL.createObjectURL(j),g.setAttribute("download",a)}else d="data:"+h+","+encodeURIComponent(b),g.setAttribute("target","_blank");g.href=d,g.setAttribute("style","display:none;"),f.body.appendChild(g),setTimeout(function(){if(g.click)g.click();else if(document.createEvent){var a=document.createEvent("MouseEvents");a.initEvent("click",!0,!0),g.dispatchEvent(a)}f.body.removeChild(g)},this.delay)},pdfExport:function(a,b,c){var d=this;this.loadAllDataIfNeeded(a,b,c).then(function(){var e=d.getColumnHeaders(a,c),f=d.getData(a,b,c),g=d.prepareAsPdf(a,e,f);d.isIE()||-1!==navigator.appVersion.indexOf("Edge")?d.downloadPDF(a.options.exporterPdfFilename,g):pdfMake.createPdf(g).open()})},downloadPDF:function(a,b){var c,d=document;d.createElement("a");c=this.isIE();var e,f=pdfMake.createPdf(b);f.getBuffer(function(b){if(e=new Blob([b]),navigator.msSaveBlob)return navigator.msSaveBlob(e,a);if(c){var f=d.createElement("iframe");return document.body.appendChild(f),f.contentWindow.document.open("text/html","replace"),f.contentWindow.document.write(e),f.contentWindow.document.close(),f.contentWindow.focus(),f.contentWindow.document.execCommand("SaveAs",!0,a),document.body.removeChild(f),!0}})},prepareAsPdf:function(a,b,c){var d=this.calculatePdfHeaderWidths(a,b),e=b.map(function(a){return{text:a.displayName,style:"tableHeader"}}),f=c.map(this.formatRowAsPdf(this)),g=[e].concat(f),h={pageOrientation:a.options.exporterPdfOrientation,pageSize:a.options.exporterPdfPageSize,content:[{style:"tableStyle",table:{headerRows:1,widths:d,body:g}}],styles:{tableStyle:a.options.exporterPdfTableStyle,tableHeader:a.options.exporterPdfTableHeaderStyle},defaultStyle:a.options.exporterPdfDefaultStyle};return a.options.exporterPdfLayout&&(h.layout=a.options.exporterPdfLayout),a.options.exporterPdfHeader&&(h.header=a.options.exporterPdfHeader),a.options.exporterPdfFooter&&(h.footer=a.options.exporterPdfFooter),a.options.exporterPdfCustomFormatter&&(h=a.options.exporterPdfCustomFormatter(h)),h},calculatePdfHeaderWidths:function(a,b){var c=0;b.forEach(function(a){"number"==typeof a.width&&(c+=a.width)});var d=0;b.forEach(function(a){if("*"===a.width&&(d+=100),"string"==typeof a.width&&a.width.match(/(\d)*%/)){var b=parseInt(a.width.match(/(\d)*%/)[0]);a.width=c*b/100,d+=a.width}});var e=c+d;return b.map(function(b){return"*"===b.width?b.width:b.width*a.options.exporterPdfMaxGridWidth/e})},formatRowAsPdf:function(a){return function(b){return b.map(a.formatFieldAsPdfString)}},formatFieldAsPdfString:function(a){var b;return b=null==a.value?"":"number"==typeof a.value?a.value.toString():"boolean"==typeof a.value?a.value?"TRUE":"FALSE":"string"==typeof a.value?a.value.replace(/"/g,'""'):JSON.stringify(a.value).replace(/^"/,"").replace(/"$/,""),a.alignment&&"string"==typeof a.alignment&&(b={text:b,alignment:a.alignment}),b}};return g}]),a.directive("uiGridExporter",["uiGridExporterConstants","uiGridExporterService","gridUtil","$compile",function(a,b,c,d){return{replace:!0,priority:0,require:"^uiGrid",scope:!1,link:function(a,c,d,e){b.initializeGrid(e.grid),e.grid.exporter.$scope=a}}}])}(),function(){"use strict";var a=angular.module("ui.grid.grouping",["ui.grid","ui.grid.treeBase"]);a.constant("uiGridGroupingConstants",{featureName:"grouping",rowHeaderColName:"treeBaseRowHeaderCol",EXPANDED:"expanded",COLLAPSED:"collapsed",aggregation:{COUNT:"count",SUM:"sum",MAX:"max",MIN:"min",AVG:"avg"}}),a.service("uiGridGroupingService",["$q","uiGridGroupingConstants","gridUtil","rowSorter","GridRow","gridClassFactory","i18nService","uiGridConstants","uiGridTreeBaseService",function(a,b,c,d,e,f,g,h,i){var j={initializeGrid:function(a,b){i.initializeGrid(a,b),a.grouping={},a.grouping.groupHeaderCache={},j.defaultGridOptions(a.options),a.registerRowsProcessor(j.groupRows,400),a.registerColumnBuilder(j.groupingColumnBuilder),a.registerColumnsProcessor(j.groupingColumnProcessor,400);var c={events:{grouping:{aggregationChanged:{},groupingChanged:{}}},methods:{grouping:{getGrouping:function(b){var c=j.getGrouping(a);return c.grouping.forEach(function(a){a.colName=a.col.name,delete a.col}),c.aggregations.forEach(function(a){a.colName=a.col.name,delete a.col}),c.aggregations=c.aggregations.filter(function(a){return!a.aggregation.source||"grouping"!==a.aggregation.source}),b&&(c.rowExpandedStates=j.getRowExpandedStates(a.grouping.groupingHeaderCache)),c},setGrouping:function(b){j.setGrouping(a,b)},groupColumn:function(b){var c=a.getColumn(b);j.groupColumn(a,c)},ungroupColumn:function(b){var c=a.getColumn(b);j.ungroupColumn(a,c)},clearGrouping:function(){j.clearGrouping(a)},aggregateColumn:function(b,c,d){var e=a.getColumn(b);j.aggregateColumn(a,e,c,d)}}}};a.api.registerEventsFromObject(c.events),a.api.registerMethodsFromObject(c.methods),a.api.core.on.sortChanged(b,j.tidyPriorities)},defaultGridOptions:function(a){a.enableGrouping=a.enableGrouping!==!1,a.groupingShowCounts=a.groupingShowCounts!==!1,a.groupingNullLabel="undefined"==typeof a.groupingNullLabel?"Null":a.groupingNullLabel,a.enableGroupHeaderSelection=a.enableGroupHeaderSelection===!0},groupingColumnBuilder:function(a,d,e){if(a.enableGrouping!==!1){"undefined"==typeof d.grouping&&"undefined"!=typeof a.grouping?(d.grouping=angular.copy(a.grouping),"undefined"!=typeof d.grouping.groupPriority&&d.grouping.groupPriority>-1&&(d.treeAggregationFn=i.nativeAggregations()[b.aggregation.COUNT].aggregationFn,d.treeAggregationFinalizerFn=j.groupedFinalizerFn)):"undefined"==typeof d.grouping&&(d.grouping={}),"undefined"!=typeof d.grouping&&"undefined"!=typeof d.grouping.groupPriority&&d.grouping.groupPriority>=0&&(d.suppressRemoveSort=!0);var f={name:"ui.grid.grouping.group",title:g.get().grouping.group,icon:"ui-grid-icon-indent-right",shown:function(){return"undefined"==typeof this.context.col.grouping||"undefined"==typeof this.context.col.grouping.groupPriority||this.context.col.grouping.groupPriority<0},action:function(){j.groupColumn(this.context.col.grid,this.context.col)}},h={name:"ui.grid.grouping.ungroup",title:g.get().grouping.ungroup,icon:"ui-grid-icon-indent-left",shown:function(){return"undefined"!=typeof this.context.col.grouping&&"undefined"!=typeof this.context.col.grouping.groupPriority&&this.context.col.grouping.groupPriority>=0},action:function(){j.ungroupColumn(this.context.col.grid,this.context.col)}},k={name:"ui.grid.grouping.aggregateRemove",title:g.get().grouping.aggregate_remove,shown:function(){return"undefined"!=typeof this.context.col.treeAggregationFn},action:function(){j.aggregateColumn(this.context.col.grid,this.context.col,null)}},l=function(a,b){b=b||g.get().grouping["aggregate_"+a]||a;var e={name:"ui.grid.grouping.aggregate"+a,title:b,shown:function(){return"undefined"==typeof this.context.col.treeAggregation||"undefined"==typeof this.context.col.treeAggregation.type||this.context.col.treeAggregation.type!==a},action:function(){j.aggregateColumn(this.context.col.grid,this.context.col,a)}};c.arrayContainsObjectWithProperty(d.menuItems,"name","ui.grid.grouping.aggregate"+a)||d.menuItems.push(e)};d.colDef.groupingShowGroupingMenu!==!1&&(c.arrayContainsObjectWithProperty(d.menuItems,"name","ui.grid.grouping.group")||d.menuItems.push(f),c.arrayContainsObjectWithProperty(d.menuItems,"name","ui.grid.grouping.ungroup")||d.menuItems.push(h)),d.colDef.groupingShowAggregationMenu!==!1&&(angular.forEach(i.nativeAggregations(),function(a,b){l(b)}),angular.forEach(e.treeCustomAggregations,function(a,b){l(b,a.menuTitle)}),c.arrayContainsObjectWithProperty(d.menuItems,"name","ui.grid.grouping.aggregateRemove")||d.menuItems.push(k))}},groupingColumnProcessor:function(a,b){return a=j.moveGroupColumns(this,a,b)},groupedFinalizerFn:function(a){var b=this;"undefined"!=typeof a.groupVal?(a.rendered=a.groupVal,b.grid.options.groupingShowCounts&&"date"!==b.colDef.type&&(a.rendered+=" ("+a.value+")")):a.rendered=null},moveGroupColumns:function(a,b,c){return a.options.moveGroupColumns===!1?b:(b.forEach(function(a,b){a.groupingPosition=b}),b.sort(function(a,b){var c,d;return c=a.isRowHeader?-1e3:"undefined"==typeof a.grouping||"undefined"==typeof a.grouping.groupPriority||a.grouping.groupPriority<0?null:a.grouping.groupPriority,d=b.isRowHeader?-1e3:"undefined"==typeof b.grouping||"undefined"==typeof b.grouping.groupPriority||b.grouping.groupPriority<0?null:b.grouping.groupPriority,null!==c&&null===d?-1:null!==d&&null===c?1:null!==c&&null!==d?c-d:a.groupingPosition-b.groupingPosition}),b.forEach(function(a,b){delete a.groupingPosition}),b)},groupColumn:function(a,c){"undefined"==typeof c.grouping&&(c.grouping={});var d=j.getGrouping(a);c.grouping.groupPriority=d.grouping.length,c.sort?("undefined"==typeof c.sort.direction||null===c.sort.direction)&&(c.sort.direction=h.ASC):c.sort={direction:h.ASC},c.treeAggregation={type:b.aggregation.COUNT,source:"grouping"},c.treeAggregationFn=i.nativeAggregations()[b.aggregation.COUNT].aggregationFn,c.treeAggregationFinalizerFn=j.groupedFinalizerFn,a.api.grouping.raise.groupingChanged(c),a.api.core.raise.sortChanged(a,a.getColumnSorting()),a.queueGridRefresh()},ungroupColumn:function(a,b){"undefined"!=typeof b.grouping&&(delete b.grouping.groupPriority,delete b.treeAggregation,delete b.customTreeAggregationFinalizer,j.tidyPriorities(a),a.api.grouping.raise.groupingChanged(b),a.queueGridRefresh())},aggregateColumn:function(a,b,c){"undefined"!=typeof b.grouping&&"undefined"!=typeof b.grouping.groupPriority&&b.grouping.groupPriority>=0&&j.ungroupColumn(a,b);var d={};"undefined"!=typeof a.options.treeCustomAggregations[c]?d=a.options.treeCustomAggregations[c]:"undefined"!=typeof i.nativeAggregations()[c]&&(d=i.nativeAggregations()[c]),b.treeAggregation={type:c,label:g.get().aggregation[d.label]||d.label},b.treeAggregationFn=d.aggregationFn,b.treeAggregationFinalizerFn=d.finalizerFn,a.api.grouping.raise.aggregationChanged(b),a.queueGridRefresh()},setGrouping:function(a,b){"undefined"!=typeof b&&(j.clearGrouping(a),b.grouping&&b.grouping.length&&b.grouping.length>0&&b.grouping.forEach(function(b){var c=a.getColumn(b.colName);c&&j.groupColumn(a,c)}),b.aggregations&&b.aggregations.length&&b.aggregations.forEach(function(b){var c=a.getColumn(b.colName);c&&j.aggregateColumn(a,c,b.aggregation.type)}),b.rowExpandedStates&&j.applyRowExpandedStates(a.grouping.groupingHeaderCache,b.rowExpandedStates))},clearGrouping:function(a){var b=j.getGrouping(a);b.grouping.length>0&&b.grouping.forEach(function(b){b.col||(b.col=a.getColumn(b.colName)),j.ungroupColumn(a,b.col)}),b.aggregations.length>0&&b.aggregations.forEach(function(b){b.col||(b.col=a.getColumn(b.colName)),j.aggregateColumn(a,b.col,null)})},tidyPriorities:function(a){"undefined"!=typeof a&&"undefined"==typeof a.grid||"undefined"==typeof this.grid||(a=this.grid);var b=[],c=[];a.columns.forEach(function(a,d){"undefined"!=typeof a.grouping&&"undefined"!=typeof a.grouping.groupPriority&&a.grouping.groupPriority>=0?b.push(a):"undefined"!=typeof a.sort&&"undefined"!=typeof a.sort.priority&&a.sort.priority>=0&&c.push(a)}),b.sort(function(a,b){return a.grouping.groupPriority-b.grouping.groupPriority}),b.forEach(function(a,b){a.grouping.groupPriority=b,a.suppressRemoveSort=!0,"undefined"==typeof a.sort&&(a.sort={}),a.sort.priority=b});var d=b.length;c.sort(function(a,b){return a.sort.priority-b.sort.priority}),c.forEach(function(a,b){a.sort.priority=d,a.suppressRemoveSort=a.colDef.suppressRemoveSort,d++})},groupRows:function(a){if(0===a.length)return a;var b=this;b.grouping.oldGroupingHeaderCache=b.grouping.groupingHeaderCache||{},b.grouping.groupingHeaderCache={};for(var c=j.initialiseProcessingState(b),e=function(e,h){var i=b.getCellValue(g,e.col);e.initialised&&0===d.getSortFn(b,e.col,a)(i,e.currentValue)||(j.insertGroupHeader(b,a,f,c,h),f++)},f=0;f<a.length;f++){var g=a[f];g.visible&&c.forEach(e)}return delete b.grouping.oldGroupingHeaderCache,a},initialiseProcessingState:function(a){var b=[],c=j.getGrouping(a);return c.grouping.forEach(function(a,c){b.push({fieldName:a.field,col:a.col,initialised:!1,currentValue:null,currentRow:null})}),b},getGrouping:function(a){var b=[],c=[];return a.columns.forEach(function(a,d){a.grouping&&"undefined"!=typeof a.grouping.groupPriority&&a.grouping.groupPriority>=0&&b.push({field:a.field,col:a,groupPriority:a.grouping.groupPriority,grouping:a.grouping}),a.treeAggregation&&a.treeAggregation.type&&c.push({field:a.field,col:a,aggregation:a.treeAggregation})}),b.sort(function(a,b){return a.groupPriority-b.groupPriority}),b.forEach(function(a,b){a.grouping.groupPriority=b,a.groupPriority=b,delete a.grouping}),{grouping:b,aggregations:c}},insertGroupHeader:function(a,b,c,d,g){var h=(d[g].fieldName,d[g].col),i=a.getCellValue(b[c],h),k=i;("undefined"==typeof i||null===i)&&(k=a.options.groupingNullLabel);for(var l=function(a){return angular.isObject(a)?JSON.stringify(a):a},m=a.grouping.oldGroupingHeaderCache,n=0;g>n;n++)m&&m[l(d[n].currentValue)]&&(m=m[l(d[n].currentValue)].children);var o;for(m&&m[l(i)]?(o=m[l(i)].row,o.entity={}):(o=new e({},null,a),f.rowTemplateAssigner.call(a,o)),o.entity["$$"+d[g].col.uid]={groupVal:k},o.treeLevel=g,o.groupHeader=!0,o.internalRow=!0,o.enableCellEdit=!1,o.enableSelection=a.options.enableGroupHeaderSelection,d[g].initialised=!0,d[g].currentValue=i,d[g].currentRow=o,j.finaliseProcessingState(d,g+1),b.splice(c,0,o),m=a.grouping.groupingHeaderCache,n=0;g>n;n++)m=m[l(d[n].currentValue)].children;m[l(i)]={row:o,children:{}}},finaliseProcessingState:function(a,b){for(var c=b;c<a.length;c++)a[c].initialised=!1,a[c].currentRow=null,a[c].currentValue=null},getRowExpandedStates:function(a){if("undefined"==typeof a)return{};var b={};return angular.forEach(a,function(a,c){b[c]={state:a.row.treeNode.state},a.children?b[c].children=j.getRowExpandedStates(a.children):b[c].children={}}),b},applyRowExpandedStates:function(a,b){"undefined"!=typeof b&&angular.forEach(b,function(b,c){a[c]&&(a[c].row.treeNode.state=b.state,b.children&&a[c].children&&j.applyRowExpandedStates(a[c].children,b.children))})}};return j}]),a.directive("uiGridGrouping",["uiGridGroupingConstants","uiGridGroupingService","$templateCache",function(a,b,c){return{replace:!0,priority:0,require:"^uiGrid",scope:!1,compile:function(){return{pre:function(a,c,d,e){e.grid.options.enableGrouping!==!1&&b.initializeGrid(e.grid,a)},post:function(a,b,c,d){}}}}}])}(),function(){"use strict";var a=angular.module("ui.grid.importer",["ui.grid"]);a.constant("uiGridImporterConstants",{featureName:"importer"}),a.service("uiGridImporterService",["$q","uiGridConstants","uiGridImporterConstants","gridUtil","$compile","$interval","i18nService","$window",function(a,b,c,d,e,f,g,h){var i={initializeGrid:function(a,b){b.importer={$scope:a},this.defaultGridOptions(b.options);var c={events:{importer:{}},methods:{importer:{importFile:function(a){i.importThisFile(b,a)}}}};b.api.registerEventsFromObject(c.events),b.api.registerMethodsFromObject(c.methods),b.options.enableImporter&&b.options.importerShowMenu&&(b.api.core.addToGridMenu?i.addToMenu(b):f(function(){b.api.core.addToGridMenu&&i.addToMenu(b)},100,1))},defaultGridOptions:function(a){a.enableImporter||void 0===a.enableImporter?h.hasOwnProperty("File")&&h.hasOwnProperty("FileReader")&&h.hasOwnProperty("FileList")&&h.hasOwnProperty("Blob")?a.enableImporter=!0:(d.logError("The File APIs are not fully supported in this browser, grid importer cannot be used."),a.enableImporter=!1):a.enableImporter=!1,a.importerProcessHeaders=a.importerProcessHeaders||i.processHeaders,a.importerHeaderFilter=a.importerHeaderFilter||function(a){return a},a.importerErrorCallback&&"function"==typeof a.importerErrorCallback||delete a.importerErrorCallback,a.enableImporter!==!0||a.importerDataAddCallback||(d.logError("You have not set an importerDataAddCallback, importer is disabled"),a.enableImporter=!1),a.importerShowMenu=a.importerShowMenu!==!1,a.importerObjectCallback=a.importerObjectCallback||function(a,b){return b}},addToMenu:function(a){a.api.core.addToGridMenu(a,[{title:g.getSafeText("gridMenu.importerTitle"),order:150},{templateUrl:"ui-grid/importerMenuItemContainer",action:function(b){this.grid.api.importer.importAFile(a)},order:151}])},importThisFile:function(a,b){if(!b)return void d.logError("No file object provided to importThisFile, should be impossible, aborting");var c=new FileReader;switch(b.type){case"application/json":c.onload=i.importJsonClosure(a);break;default:c.onload=i.importCsvClosure(a)}c.readAsText(b)},importJsonClosure:function(a){return function(b){var c,d=[],e=i.parseJson(a,b);null!==e&&(e.forEach(function(b,e){c=i.newObject(a),angular.extend(c,b),c=a.options.importerObjectCallback(a,c),d.push(c)}),i.addObjects(a,d))}},parseJson:function(a,b){var c;try{c=JSON.parse(b.target.result)}catch(d){return void i.alertError(a,"importer.invalidJson","File could not be processed, is it valid json? Content was: ",b.target.result)}return Array.isArray(c)?c:(i.alertError(a,"importer.jsonNotarray","Import failed, file is not an array, file was: ",b.target.result),[])},importCsvClosure:function(a){return function(b){var c=i.parseCsv(b);if(!c||c.length<1)return void i.alertError(a,"importer.invalidCsv","File could not be processed, is it valid csv? Content was: ",b.target.result);var d=i.createCsvObjects(a,c);return d&&0!==d.length?void i.addObjects(a,d):void i.alertError(a,"importer.noObjects","Objects were not able to be derived, content was: ",b.target.result)}},parseCsv:function(a){var b=a.target.result;return CSV.parse(b)},createCsvObjects:function(a,b){var c=a.options.importerProcessHeaders(a,b.shift());if(!c||0===c.length)return i.alertError(a,"importer.noHeaders","Column names could not be derived, content was: ",b),[];var d,e=[];return b.forEach(function(b,f){d=i.newObject(a),null!==b&&b.forEach(function(a,b){null!==c[b]&&(d[c[b]]=a)}),d=a.options.importerObjectCallback(a,d),e.push(d)}),e},processHeaders:function(a,b){var c=[];if(a.options.columnDefs&&0!==a.options.columnDefs.length){var d=i.flattenColumnDefs(a,a.options.columnDefs);return b.forEach(function(a,b){d[a]?c.push(d[a]):d[a.toLowerCase()]?c.push(d[a.toLowerCase()]):c.push(null)}),c}return b.forEach(function(a,b){c.push(a.replace(/[^0-9a-zA-Z\-_]/g,"_"))}),c},flattenColumnDefs:function(a,b){var c={};return b.forEach(function(b,d){b.name&&(c[b.name]=b.field||b.name,c[b.name.toLowerCase()]=b.field||b.name),b.field&&(c[b.field]=b.field||b.name,c[b.field.toLowerCase()]=b.field||b.name),b.displayName&&(c[b.displayName]=b.field||b.name,c[b.displayName.toLowerCase()]=b.field||b.name),b.displayName&&a.options.importerHeaderFilter&&(c[a.options.importerHeaderFilter(b.displayName)]=b.field||b.name,c[a.options.importerHeaderFilter(b.displayName).toLowerCase()]=b.field||b.name)}),c},addObjects:function(a,c,d){if(a.api.rowEdit){var e=a.registerDataChangeCallback(function(){a.api.rowEdit.setRowsDirty(c),e()},[b.dataChange.ROW]);a.importer.$scope.$on("$destroy",e)}a.importer.$scope.$apply(a.options.importerDataAddCallback(a,c))},newObject:function(a){return"undefined"!=typeof a.options&&"undefined"!=typeof a.options.importerNewObject?new a.options.importerNewObject:{}},alertError:function(a,b,c,e){a.options.importerErrorCallback?a.options.importerErrorCallback(a,b,c,e):(h.alert(g.getSafeText(b)),d.logError(c+e))}};return i}]),a.directive("uiGridImporter",["uiGridImporterConstants","uiGridImporterService","gridUtil","$compile",function(a,b,c,d){return{replace:!0,priority:0,require:"^uiGrid",scope:!1,link:function(a,c,d,e){b.initializeGrid(a,e.grid)}}}]),a.directive("uiGridImporterMenuItem",["uiGridImporterConstants","uiGridImporterService","gridUtil","$compile",function(a,b,c,d){return{replace:!0,priority:0,require:"^uiGrid",scope:!1,templateUrl:"ui-grid/importerMenuItem",link:function(a,d,e,f){var g=function(a){var c=a.srcElement||a.target;if(c&&c.files&&1===c.files.length){var d=c.files[0];b.importThisFile(i,d),c.form.reset()}},h=d[0].querySelectorAll(".ui-grid-importer-file-chooser"),i=f.grid;1!==h.length?c.logError("Found > 1 or < 1 file choosers within the menu item, error, cannot continue"):h[0].addEventListener("change",g,!1)}}}])}(),function(){"use strict";var a=angular.module("ui.grid.infiniteScroll",["ui.grid"]);a.service("uiGridInfiniteScrollService",["gridUtil","$compile","$timeout","uiGridConstants","ScrollEvent","$q",function(a,b,c,d,e,f){var g={initializeGrid:function(a,b){if(g.defaultGridOptions(a.options),a.options.enableInfiniteScroll){a.infiniteScroll={dataLoading:!1},g.setScrollDirections(a,a.options.infiniteScrollUp,a.options.infiniteScrollDown),a.api.core.on.scrollEnd(b,g.handleScroll);var c={events:{infiniteScroll:{needLoadMoreData:function(a,b){},needLoadMoreDataTop:function(a,b){}}},methods:{infiniteScroll:{dataLoaded:function(b,c){g.setScrollDirections(a,b,c);var d=g.adjustScroll(a).then(function(){a.infiniteScroll.dataLoading=!1});return d},resetScroll:function(b,c){return g.setScrollDirections(a,b,c),g.adjustInfiniteScrollPosition(a,0)},saveScrollPercentage:function(){a.infiniteScroll.prevScrollTop=a.renderContainers.body.prevScrollTop,a.infiniteScroll.previousVisibleRows=a.getVisibleRowCount()},dataRemovedTop:function(b,c){g.dataRemovedTop(a,b,c)},dataRemovedBottom:function(b,c){g.dataRemovedBottom(a,b,c)},setScrollDirections:function(b,c){g.setScrollDirections(a,b,c)}}}};a.api.registerEventsFromObject(c.events),a.api.registerMethodsFromObject(c.methods)}},defaultGridOptions:function(a){a.enableInfiniteScroll=a.enableInfiniteScroll!==!1,a.infiniteScrollRowsFromEnd=a.infiniteScrollRowsFromEnd||20,a.infiniteScrollUp=a.infiniteScrollUp===!0,a.infiniteScrollDown=a.infiniteScrollDown!==!1},setScrollDirections:function(a,b,c){a.infiniteScroll.scrollUp=b===!0,a.suppressParentScrollUp=b===!0,a.infiniteScroll.scrollDown=c!==!1,a.suppressParentScrollDown=c!==!1},handleScroll:function(a){if(!(a.grid.infiniteScroll&&a.grid.infiniteScroll.dataLoading||"ui.grid.adjustInfiniteScrollPosition"===a.source)&&a.y){var b,c=a.grid.options.infiniteScrollRowsFromEnd/a.grid.renderContainers.body.visibleRowCache.length;a.grid.scrollDirection===d.scrollDirection.UP?(b=a.y.percentage,c>=b&&g.loadData(a.grid)):a.grid.scrollDirection===d.scrollDirection.DOWN&&(b=1-a.y.percentage,c>=b&&g.loadData(a.grid))}},loadData:function(a){a.infiniteScroll.previousVisibleRows=a.renderContainers.body.visibleRowCache.length,a.infiniteScroll.direction=a.scrollDirection,delete a.infiniteScroll.prevScrollTop,a.scrollDirection===d.scrollDirection.UP&&a.infiniteScroll.scrollUp?(a.infiniteScroll.dataLoading=!0,a.api.infiniteScroll.raise.needLoadMoreDataTop()):a.scrollDirection===d.scrollDirection.DOWN&&a.infiniteScroll.scrollDown&&(a.infiniteScroll.dataLoading=!0,a.api.infiniteScroll.raise.needLoadMoreData())},adjustScroll:function(a){var b=f.defer();return c(function(){var e,f,h,i,j;e=a.getViewportHeight()+a.headerHeight-a.renderContainers.body.headerHeight-a.scrollbarHeight,f=a.options.rowHeight,void 0===a.infiniteScroll.direction&&g.adjustInfiniteScrollPosition(a,0),h=a.getVisibleRowCount();var k=f*h;a.infiniteScroll.scrollDown&&e>k&&a.api.infiniteScroll.raise.needLoadMoreData(),a.infiniteScroll.direction===d.scrollDirection.UP&&(i=a.infiniteScroll.prevScrollTop||0,j=i+(h-a.infiniteScroll.previousVisibleRows)*f,g.adjustInfiniteScrollPosition(a,j),c(function(){b.resolve()})),a.infiniteScroll.direction===d.scrollDirection.DOWN&&(j=a.infiniteScroll.prevScrollTop||a.infiniteScroll.previousVisibleRows*f-e,g.adjustInfiniteScrollPosition(a,j),c(function(){b.resolve()}))},0),b.promise},adjustInfiniteScrollPosition:function(a,b){var c=new e(a,null,null,"ui.grid.adjustInfiniteScrollPosition"),d=a.getVisibleRowCount(),f=a.getViewportHeight()+a.headerHeight-a.renderContainers.body.headerHeight-a.scrollbarHeight,g=a.options.rowHeight,h=d*g-f;0===b&&a.infiniteScroll.scrollUp?c.y={percentage:1/h}:c.y={percentage:b/h},a.scrollContainers("",c)},dataRemovedTop:function(a,b,c){var d,e,f,h;return g.setScrollDirections(a,b,c),d=a.renderContainers.body.visibleRowCache.length,e=a.infiniteScroll.prevScrollTop,h=a.options.rowHeight,f=e-(a.infiniteScroll.previousVisibleRows-d)*h,g.adjustInfiniteScrollPosition(a,f)},dataRemovedBottom:function(a,b,c){var d;return g.setScrollDirections(a,b,c),d=a.infiniteScroll.prevScrollTop,g.adjustInfiniteScrollPosition(a,d)}};return g}]),a.directive("uiGridInfiniteScroll",["uiGridInfiniteScrollService",function(a){return{priority:-200,scope:!1,require:"^uiGrid",compile:function(b,c,d){return{pre:function(b,c,d,e){a.initializeGrid(e.grid,b)},post:function(a,b,c){}}}}}])}(),function(){"use strict";var a=angular.module("ui.grid.moveColumns",["ui.grid"]);a.service("uiGridMoveColumnService",["$q","$timeout","$log","ScrollEvent","uiGridConstants","gridUtil",function(a,b,c,d,e,f){var g={initializeGrid:function(a){var b=this;this.registerPublicApi(a),this.defaultGridOptions(a.options),a.moveColumns={orderCache:[]},a.registerColumnBuilder(b.movableColumnBuilder),a.registerDataChangeCallback(b.verifyColumnOrder,[e.dataChange.COLUMN])},registerPublicApi:function(a){var b=this,c={events:{colMovable:{columnPositionChanged:function(a,b,c){}}},methods:{colMovable:{moveColumn:function(c,d){var e=a.columns;if(!angular.isNumber(c)||!angular.isNumber(d))return void f.logError("MoveColumn: Please provide valid values for originalPosition and finalPosition");for(var g=0,h=0;h<e.length;h++)(angular.isDefined(e[h].colDef.visible)&&e[h].colDef.visible===!1||e[h].isRowHeader===!0)&&g++;if(c>=e.length-g||d>=e.length-g)return void f.logError("MoveColumn: Invalid values for originalPosition, finalPosition");var i=function(a){for(var b=a,c=0;b>=c;c++)angular.isDefined(e[c])&&(angular.isDefined(e[c].colDef.visible)&&e[c].colDef.visible===!1||e[c].isRowHeader===!0)&&b++;return b};b.redrawColumnAtPosition(a,i(c),i(d))}}}};a.api.registerEventsFromObject(c.events),a.api.registerMethodsFromObject(c.methods)},defaultGridOptions:function(a){a.enableColumnMoving=a.enableColumnMoving!==!1},movableColumnBuilder:function(b,c,d){var e=[];return b.enableColumnMoving=void 0===b.enableColumnMoving?d.enableColumnMoving:b.enableColumnMoving,a.all(e)},updateColumnCache:function(a){a.moveColumns.orderCache=a.getOnlyDataColumns()},verifyColumnOrder:function(a){var b,c=a.rowHeaderColumns.length;angular.forEach(a.moveColumns.orderCache,function(d,e){if(b=a.columns.indexOf(d),-1!==b&&b-c!==e){var f=a.columns.splice(b,1)[0];a.columns.splice(e+c,0,f)}})},redrawColumnAtPosition:function(a,c,d){if(c!==d){var f=a.columns,h=f[c];if(h.colDef.enableColumnMoving){if(c>d)for(var i=c;i>d;i--)f[i]=f[i-1];else if(d>c)for(var j=c;d>j;j++)f[j]=f[j+1];f[d]=h,g.updateColumnCache(a),a.queueGridRefresh(),b(function(){a.api.core.notifyDataChange(e.dataChange.COLUMN),a.api.colMovable.raise.columnPositionChanged(h.colDef,c,d)})}}}};return g}]),a.directive("uiGridMoveColumns",["uiGridMoveColumnService",function(a){return{replace:!0,priority:0,require:"^uiGrid",scope:!1,compile:function(){return{pre:function(b,c,d,e){a.initializeGrid(e.grid)},post:function(a,b,c,d){}}}}}]),a.directive("uiGridHeaderCell",["$q","gridUtil","uiGridMoveColumnService","$document","$log","uiGridConstants","ScrollEvent",function(a,b,c,d,e,f,g){return{priority:-10,require:"^uiGrid",compile:function(){return{post:function(a,b,e,f){if(a.col.colDef.enableColumnMoving){var h,i,j,k,l,m,n=angular.element(b[0].querySelectorAll(".ui-grid-cell-contents")),o=!1,p=!1,q=function(b){h=a.grid.element[0].getBoundingClientRect().left,a.grid.hasLeftContainer()&&(h+=a.grid.renderContainers.left.header[0].getBoundingClientRect().width),i=b.pageX,j=0,k=h+a.grid.getViewportWidth(),"mousedown"===b.type?(d.on("mousemove",r),d.on("mouseup",s)):"touchstart"===b.type&&(d.on("touchmove",r),d.on("touchend",s))},r=function(a){var b=a.pageX-i;0!==b&&(document.onselectstart=function(){return!1},p=!0,o?o&&(w(b),i=a.pageX):v())},s=function(b){if(document.onselectstart=null,l&&(l.remove(),o=!1),u(),t(),p){for(var d=a.grid.columns,e=0,f=0;f<d.length&&d[f].colDef.name!==a.col.colDef.name;f++)e++;var g;if(0>j){var h,i=0;if(a.grid.isRTL()){for(h=e+1;h<d.length;h++)if((angular.isUndefined(d[h].colDef.visible)||d[h].colDef.visible===!0)&&(i+=d[h].drawnWidth||d[h].width||d[h].colDef.width,i>Math.abs(j))){c.redrawColumnAtPosition(a.grid,e,h-1);break}}else for(h=e-1;h>=0;h--)if((angular.isUndefined(d[h].colDef.visible)||d[h].colDef.visible===!0)&&(i+=d[h].drawnWidth||d[h].width||d[h].colDef.width,i>Math.abs(j))){c.redrawColumnAtPosition(a.grid,e,h+1);break}i<Math.abs(j)&&(g=0,a.grid.isRTL()&&(g=d.length-1),c.redrawColumnAtPosition(a.grid,e,g))}else if(j>0){var k,m=0;if(a.grid.isRTL()){for(k=e-1;k>0;k--)if((angular.isUndefined(d[k].colDef.visible)||d[k].colDef.visible===!0)&&(m+=d[k].drawnWidth||d[k].width||d[k].colDef.width,m>j)){c.redrawColumnAtPosition(a.grid,e,k);break}}else for(k=e+1;k<d.length;k++)if((angular.isUndefined(d[k].colDef.visible)||d[k].colDef.visible===!0)&&(m+=d[k].drawnWidth||d[k].width||d[k].colDef.width,m>j)){c.redrawColumnAtPosition(a.grid,e,k-1);break}j>m&&(g=d.length-1,a.grid.isRTL()&&(g=0),c.redrawColumnAtPosition(a.grid,e,g))}}},t=function(){n.on("touchstart",q),n.on("mousedown",q)},u=function(){n.off("touchstart",q),n.off("mousedown",q),d.off("mousemove",r),d.off("touchmove",r),d.off("mouseup",s),d.off("touchend",s)};t();var v=function(){o=!0,l=b.clone(),b.parent().append(l),l.addClass("movingColumn");var c={};c.left=b[0].offsetLeft+"px";var d=a.grid.element[0].getBoundingClientRect().right,e=b[0].getBoundingClientRect().right;e>d&&(m=a.col.drawnWidth+(d-e),c.width=m+"px"),l.css(c)},w=function(b){for(var c=a.grid.columns,d=0,e=0;e<c.length;e++)(angular.isUndefined(c[e].colDef.visible)||c[e].colDef.visible===!0)&&(d+=c[e].drawnWidth||c[e].width||c[e].colDef.width);var i,n=l[0].getBoundingClientRect().left-1,o=l[0].getBoundingClientRect().right;if(i=n-h+b,i=k>i?i:k,(n>=h||b>0)&&(k>=o||0>b))l.css({visibility:"visible",left:l[0].offsetLeft+(k>i?b:k-n)+"px"});else if(d>Math.ceil(f.grid.gridWidth)){b*=8;var p=new g(a.col.grid,null,null,"uiGridHeaderCell.moveElement");p.x={pixels:b},p.grid.scrollContainers("",p)}for(var q=0,r=0;r<c.length;r++)if(angular.isUndefined(c[r].colDef.visible)||c[r].colDef.visible===!0){
if(c[r].colDef.name===a.col.colDef.name)break;q+=c[r].drawnWidth||c[r].width||c[r].colDef.width}void 0===a.newScrollLeft?j+=b:j=a.newScrollLeft+i-q,m<a.col.drawnWidth&&(m+=Math.abs(b),l.css({width:m+"px"}))}}}}}}}])}(),function(){"use strict";var a=angular.module("ui.grid.pagination",["ng","ui.grid"]);a.service("uiGridPaginationService",["gridUtil",function(a){var b={initializeGrid:function(a){b.defaultGridOptions(a.options);var c={events:{pagination:{paginationChanged:function(a,b){}}},methods:{pagination:{getPage:function(){return a.options.enablePagination?a.options.paginationCurrentPage:null},getTotalPages:function(){return a.options.enablePagination?0===a.options.totalItems?1:Math.ceil(a.options.totalItems/a.options.paginationPageSize):null},nextPage:function(){a.options.enablePagination&&(a.options.totalItems>0?a.options.paginationCurrentPage=Math.min(a.options.paginationCurrentPage+1,c.methods.pagination.getTotalPages()):a.options.paginationCurrentPage++)},previousPage:function(){a.options.enablePagination&&(a.options.paginationCurrentPage=Math.max(a.options.paginationCurrentPage-1,1))},seek:function(b){if(a.options.enablePagination){if(!angular.isNumber(b)||1>b)throw"Invalid page number: "+b;a.options.paginationCurrentPage=Math.min(b,c.methods.pagination.getTotalPages())}}}}};a.api.registerEventsFromObject(c.events),a.api.registerMethodsFromObject(c.methods);var d=function(b){if(a.options.useExternalPagination||!a.options.enablePagination)return b;var c=parseInt(a.options.paginationPageSize,10),d=parseInt(a.options.paginationCurrentPage,10),e=b.filter(function(a){return a.visible});a.options.totalItems=e.length;var f=(d-1)*c;return f>e.length&&(d=a.options.paginationCurrentPage=1,f=(d-1)*c),e.slice(f,f+c)};a.registerRowsProcessor(d,900)},defaultGridOptions:function(b){b.enablePagination=b.enablePagination!==!1,b.enablePaginationControls=b.enablePaginationControls!==!1,b.useExternalPagination=b.useExternalPagination===!0,a.isNullOrUndefined(b.totalItems)&&(b.totalItems=0),a.isNullOrUndefined(b.paginationPageSizes)&&(b.paginationPageSizes=[250,500,1e3]),a.isNullOrUndefined(b.paginationPageSize)&&(b.paginationPageSizes.length>0?b.paginationPageSize=b.paginationPageSizes[0]:b.paginationPageSize=0),a.isNullOrUndefined(b.paginationCurrentPage)&&(b.paginationCurrentPage=1),a.isNullOrUndefined(b.paginationTemplate)&&(b.paginationTemplate="ui-grid/pagination")},onPaginationChanged:function(a,b,c){a.api.pagination.raise.paginationChanged(b,c),a.options.useExternalPagination||a.queueGridRefresh()}};return b}]),a.directive("uiGridPagination",["gridUtil","uiGridPaginationService",function(a,b){return{priority:-200,scope:!1,require:"uiGrid",link:{pre:function(c,d,e,f){b.initializeGrid(f.grid),a.getTemplate(f.grid.options.paginationTemplate).then(function(a){var b=angular.element(a);d.append(b),f.innerCompile(b)})}}}}]),a.directive("uiGridPager",["uiGridPaginationService","uiGridConstants","gridUtil","i18nService",function(a,b,c,d){return{priority:-200,scope:!0,require:"^uiGrid",link:function(e,f,g,h){var i=".ui-grid-pager-control-input";e.aria=d.getSafeText("pagination.aria"),e.paginationApi=h.grid.api.pagination,e.sizesLabel=d.getSafeText("pagination.sizes"),e.totalItemsLabel=d.getSafeText("pagination.totalItems"),e.paginationOf=d.getSafeText("pagination.of"),e.paginationThrough=d.getSafeText("pagination.through");var j=h.grid.options;h.grid.renderContainers.body.registerViewportAdjuster(function(a){return a.height=a.height-c.elementHeight(f,"padding"),a});var k=h.grid.registerDataChangeCallback(function(a){a.options.useExternalPagination||(a.options.totalItems=a.rows.length)},[b.dataChange.ROW]);e.$on("$destroy",k);var l=function(){e.showingLow=(j.paginationCurrentPage-1)*j.paginationPageSize+1,e.showingHigh=Math.min(j.paginationCurrentPage*j.paginationPageSize,j.totalItems)},m=e.$watch("grid.options.totalItems + grid.options.paginationPageSize",l),n=e.$watch("grid.options.paginationCurrentPage + grid.options.paginationPageSize",function(b,c){if(b!==c&&void 0!==c){if(!angular.isNumber(j.paginationCurrentPage)||j.paginationCurrentPage<1)return void(j.paginationCurrentPage=1);if(j.totalItems>0&&j.paginationCurrentPage>e.paginationApi.getTotalPages())return void(j.paginationCurrentPage=e.paginationApi.getTotalPages());l(),a.onPaginationChanged(e.grid,j.paginationCurrentPage,j.paginationPageSize)}});e.$on("$destroy",function(){m(),n()}),e.cantPageForward=function(){return j.totalItems>0?j.paginationCurrentPage>=e.paginationApi.getTotalPages():j.data.length<1},e.cantPageToLast=function(){return j.totalItems>0?e.cantPageForward():!0},e.cantPageBackward=function(){return j.paginationCurrentPage<=1};var o=function(a){a&&c.focus.bySelector(f,i)};e.pageFirstPageClick=function(){e.paginationApi.seek(1),o(e.cantPageBackward())},e.pagePreviousPageClick=function(){e.paginationApi.previousPage(),o(e.cantPageBackward())},e.pageNextPageClick=function(){e.paginationApi.nextPage(),o(e.cantPageForward())},e.pageLastPageClick=function(){e.paginationApi.seek(e.paginationApi.getTotalPages()),o(e.cantPageToLast())}}}}])}(),function(){"use strict";var a=angular.module("ui.grid.pinning",["ui.grid"]);a.constant("uiGridPinningConstants",{container:{LEFT:"left",RIGHT:"right",NONE:""}}),a.service("uiGridPinningService",["gridUtil","GridRenderContainer","i18nService","uiGridPinningConstants",function(a,b,c,d){var e={initializeGrid:function(a){e.defaultGridOptions(a.options),a.registerColumnBuilder(e.pinningColumnBuilder);var b={events:{pinning:{columnPinned:function(a,b){}}},methods:{pinning:{pinColumn:function(b,c){e.pinColumn(a,b,c)}}}};a.api.registerEventsFromObject(b.events),a.api.registerMethodsFromObject(b.methods)},defaultGridOptions:function(a){a.enablePinning=a.enablePinning!==!1},pinningColumnBuilder:function(b,f,g){if(b.enablePinning=void 0===b.enablePinning?g.enablePinning:b.enablePinning,b.pinnedLeft?(f.renderContainer="left",f.grid.createLeftContainer()):b.pinnedRight&&(f.renderContainer="right",f.grid.createRightContainer()),b.enablePinning){var h={name:"ui.grid.pinning.pinLeft",title:c.get().pinning.pinLeft,icon:"ui-grid-icon-left-open",shown:function(){return"undefined"==typeof this.context.col.renderContainer||!this.context.col.renderContainer||"left"!==this.context.col.renderContainer},action:function(){e.pinColumn(this.context.col.grid,this.context.col,d.container.LEFT)}},i={name:"ui.grid.pinning.pinRight",title:c.get().pinning.pinRight,icon:"ui-grid-icon-right-open",shown:function(){return"undefined"==typeof this.context.col.renderContainer||!this.context.col.renderContainer||"right"!==this.context.col.renderContainer},action:function(){e.pinColumn(this.context.col.grid,this.context.col,d.container.RIGHT)}},j={name:"ui.grid.pinning.unpin",title:c.get().pinning.unpin,icon:"ui-grid-icon-cancel",shown:function(){return"undefined"!=typeof this.context.col.renderContainer&&null!==this.context.col.renderContainer&&"body"!==this.context.col.renderContainer},action:function(){e.pinColumn(this.context.col.grid,this.context.col,d.container.NONE)}};a.arrayContainsObjectWithProperty(f.menuItems,"name","ui.grid.pinning.pinLeft")||f.menuItems.push(h),a.arrayContainsObjectWithProperty(f.menuItems,"name","ui.grid.pinning.pinRight")||f.menuItems.push(i),a.arrayContainsObjectWithProperty(f.menuItems,"name","ui.grid.pinning.unpin")||f.menuItems.push(j)}},pinColumn:function(a,b,c){c===d.container.NONE?(b.renderContainer=null,b.colDef.pinnedLeft=b.colDef.pinnedRight=!1):(b.renderContainer=c,c===d.container.LEFT?a.createLeftContainer():c===d.container.RIGHT&&a.createRightContainer()),a.refresh().then(function(){a.api.pinning.raise.columnPinned(b.colDef,c)})}};return e}]),a.directive("uiGridPinning",["gridUtil","uiGridPinningService",function(a,b){return{require:"uiGrid",scope:!1,compile:function(){return{pre:function(a,c,d,e){b.initializeGrid(e.grid)},post:function(a,b,c,d){}}}}}])}(),function(){"use strict";var a=angular.module("ui.grid.resizeColumns",["ui.grid"]);a.service("uiGridResizeColumnsService",["gridUtil","$q","$timeout",function(a,b,c){var d={defaultGridOptions:function(a){a.enableColumnResizing=a.enableColumnResizing!==!1,a.enableColumnResize===!1&&(a.enableColumnResizing=!1)},colResizerColumnBuilder:function(a,c,d){var e=[];return a.enableColumnResizing=void 0===a.enableColumnResizing?d.enableColumnResizing:a.enableColumnResizing,a.enableColumnResize===!1&&(a.enableColumnResizing=!1),b.all(e)},registerPublicApi:function(a){var b={events:{colResizable:{columnSizeChanged:function(a,b){}}}};a.api.registerEventsFromObject(b.events)},fireColumnSizeChanged:function(b,d,e){c(function(){b.api.colResizable?b.api.colResizable.raise.columnSizeChanged(d,e):a.logError("The resizeable api is not registered, this may indicate that you've included the module but not added the 'ui-grid-resize-columns' directive to your grid definition.  Cannot raise any events.")})},findTargetCol:function(a,b,c){var d=a.getRenderContainer();if("left"===b){var e=d.visibleColumnCache.indexOf(a);return d.visibleColumnCache[e-1*c]}return a}};return d}]),a.directive("uiGridResizeColumns",["gridUtil","uiGridResizeColumnsService",function(a,b){return{replace:!0,priority:0,require:"^uiGrid",scope:!1,compile:function(){return{pre:function(a,c,d,e){b.defaultGridOptions(e.grid.options),e.grid.registerColumnBuilder(b.colResizerColumnBuilder),b.registerPublicApi(e.grid)},post:function(a,b,c,d){}}}}}]),a.directive("uiGridHeaderCell",["gridUtil","$templateCache","$compile","$q","uiGridResizeColumnsService","uiGridConstants","$timeout",function(a,b,c,d,e,f,g){return{priority:-10,require:"^uiGrid",compile:function(){return{post:function(a,d,h,i){var j=i.grid;if(j.options.enableColumnResizing){var k=b.get("ui-grid/columnResizer"),l=1;j.isRTL()&&(a.position="left",l=-1);var m=function(){for(var b=d[0].getElementsByClassName("ui-grid-column-resizer"),f=0;f<b.length;f++)angular.element(b[f]).remove();var g=e.findTargetCol(a.col,"left",l),h=a.col.getRenderContainer();if(g&&0!==h.visibleColumnCache.indexOf(a.col)&&g.colDef.enableColumnResizing!==!1){var i=angular.element(k).clone();i.attr("position","left"),d.prepend(i),c(i)(a)}if(a.col.colDef.enableColumnResizing!==!1){var j=angular.element(k).clone();j.attr("position","right"),d.append(j),c(j)(a)}};m();var n=function(){g(m)},o=j.registerDataChangeCallback(n,[f.dataChange.COLUMN]);a.$on("$destroy",o)}}}}}}]),a.directive("uiGridColumnResizer",["$document","gridUtil","uiGridConstants","uiGridResizeColumnsService",function(a,b,c,d){var e=angular.element('<div class="ui-grid-resize-overlay"></div>'),f={priority:0,scope:{col:"=",position:"@",renderIndex:"="},require:"?^uiGrid",link:function(f,g,h,i){function j(a){i.grid.refreshCanvas(!0).then(function(){i.grid.queueGridRefresh()})}function k(a,b){var c=b;return a.minWidth&&c<a.minWidth?c=a.minWidth:a.maxWidth&&c>a.maxWidth&&(c=a.maxWidth),c}function l(a,b){a.originalEvent&&(a=a.originalEvent),a.preventDefault(),o=(a.targetTouches?a.targetTouches[0]:a).clientX-p,0>o?o=0:o>i.grid.gridWidth&&(o=i.grid.gridWidth);var g=d.findTargetCol(f.col,f.position,q);if(g.colDef.enableColumnResizing!==!1){i.grid.element.hasClass("column-resizing")||i.grid.element.addClass("column-resizing");var h=o-n,j=parseInt(g.drawnWidth+h*q,10);o+=(k(g,j)-j)*q,e.css({left:o+"px"}),i.fireEvent(c.events.ITEM_DRAGGING)}}function m(a,b){a.originalEvent&&(a=a.originalEvent),a.preventDefault(),i.grid.element.removeClass("column-resizing"),e.remove(),o=(a.changedTouches?a.changedTouches[0]:a).clientX-p;var c=o-n;if(0===c)return t(),void s();var g=d.findTargetCol(f.col,f.position,q);if(g.colDef.enableColumnResizing!==!1){var h=parseInt(g.drawnWidth+c*q,10);g.width=k(g,h),g.hasCustomWidth=!0,j(c),d.fireColumnSizeChanged(i.grid,g.colDef,c),t(),s()}}var n=0,o=0,p=0,q=1;i.grid.isRTL()&&(f.position="left",q=-1),"left"===f.position?g.addClass("left"):"right"===f.position&&g.addClass("right");var r=function(b,c){b.originalEvent&&(b=b.originalEvent),b.stopPropagation(),p=i.grid.element[0].getBoundingClientRect().left,n=(b.targetTouches?b.targetTouches[0]:b).clientX-p,i.grid.element.append(e),e.css({left:n}),"touchstart"===b.type?(a.on("touchend",m),a.on("touchmove",l),g.off("mousedown",r)):(a.on("mouseup",m),a.on("mousemove",l),g.off("touchstart",r))},s=function(){g.on("mousedown",r),g.on("touchstart",r)},t=function(){a.off("mouseup",m),a.off("touchend",m),a.off("mousemove",l),a.off("touchmove",l),g.off("mousedown",r),g.off("touchstart",r)};s();var u=function(a,e){a.stopPropagation();var h=d.findTargetCol(f.col,f.position,q);if(h.colDef.enableColumnResizing!==!1){var l=0,m=0,n=b.closestElm(g,".ui-grid-render-container"),o=n.querySelectorAll("."+c.COL_CLASS_PREFIX+h.uid+" .ui-grid-cell-contents");Array.prototype.forEach.call(o,function(a){var c;angular.element(a).parent().hasClass("ui-grid-header-cell")&&(c=angular.element(a).parent()[0].querySelectorAll(".ui-grid-column-menu-button")),b.fakeElement(a,{},function(a){var d=angular.element(a);d.attr("style","float: left");var e=b.elementWidth(d);if(c){var f=b.elementWidth(c);e+=f}e>l&&(l=e,m=l-e)})}),h.width=k(h,l),h.hasCustomWidth=!0,j(m),d.fireColumnSizeChanged(i.grid,h.colDef,m)}};g.on("dblclick",u),g.on("$destroy",function(){g.off("dblclick",u),t()})}};return f}])}(),function(){"use strict";var a=angular.module("ui.grid.rowEdit",["ui.grid","ui.grid.edit","ui.grid.cellNav"]);a.constant("uiGridRowEditConstants",{}),a.service("uiGridRowEditService",["$interval","$q","uiGridConstants","uiGridRowEditConstants","gridUtil",function(a,b,c,d,e){var f={initializeGrid:function(a,b){b.rowEdit={};var c={events:{rowEdit:{saveRow:function(a){}}},methods:{rowEdit:{setSavePromise:function(a,c){f.setSavePromise(b,a,c)},getDirtyRows:function(){return b.rowEdit.dirtyRows?b.rowEdit.dirtyRows:[]},getErrorRows:function(){return b.rowEdit.errorRows?b.rowEdit.errorRows:[]},flushDirtyRows:function(){return f.flushDirtyRows(b)},setRowsDirty:function(a){f.setRowsDirty(b,a)},setRowsClean:function(a){f.setRowsClean(b,a)}}}};b.api.registerEventsFromObject(c.events),b.api.registerMethodsFromObject(c.methods),b.api.core.on.renderingComplete(a,function(c){b.api.edit.on.afterCellEdit(a,f.endEditCell),b.api.edit.on.beginCellEdit(a,f.beginEditCell),b.api.edit.on.cancelCellEdit(a,f.cancelEditCell),b.api.cellNav&&b.api.cellNav.on.navigate(a,f.navigate)})},defaultGridOptions:function(a){},saveRow:function(a,b){var c=this;return function(){if(b.isSaving=!0,b.rowEditSavePromise)return b.rowEditSavePromise;var d=a.api.rowEdit.raise.saveRow(b.entity);return b.rowEditSavePromise?b.rowEditSavePromise.then(c.processSuccessPromise(a,b),c.processErrorPromise(a,b)):e.logError("A promise was not returned when saveRow event was raised, either nobody is listening to event, or event handler did not return a promise"),d}},setSavePromise:function(a,b,c){var d=a.getRow(b);d.rowEditSavePromise=c},processSuccessPromise:function(a,b){var c=this;return function(){delete b.isSaving,delete b.isDirty,delete b.isError,delete b.rowEditSaveTimer,delete b.rowEditSavePromise,c.removeRow(a.rowEdit.errorRows,b),c.removeRow(a.rowEdit.dirtyRows,b)}},processErrorPromise:function(a,b){return function(){delete b.isSaving,delete b.rowEditSaveTimer,delete b.rowEditSavePromise,b.isError=!0,a.rowEdit.errorRows||(a.rowEdit.errorRows=[]),f.isRowPresent(a.rowEdit.errorRows,b)||a.rowEdit.errorRows.push(b)}},removeRow:function(a,b){"undefined"!=typeof a&&null!==a&&a.forEach(function(c,d){c.uid===b.uid&&a.splice(d,1)})},isRowPresent:function(a,b){var c=!1;return a.forEach(function(a,d){a.uid===b.uid&&(c=!0)}),c},flushDirtyRows:function(a){var c=[];return a.api.rowEdit.getDirtyRows().forEach(function(b){f.saveRow(a,b)(),c.push(b.rowEditSavePromise)}),b.all(c)},endEditCell:function(a,b,c,d){var g=this.grid,h=g.getRow(a);return h?void((c!==d||h.isDirty)&&(g.rowEdit.dirtyRows||(g.rowEdit.dirtyRows=[]),h.isDirty||(h.isDirty=!0,g.rowEdit.dirtyRows.push(h)),delete h.isError,f.considerSetTimer(g,h))):void e.logError("Unable to find rowEntity in grid data, dirty flag cannot be set")},beginEditCell:function(a,b){var c=this.grid,d=c.getRow(a);return d?void f.cancelTimer(c,d):void e.logError("Unable to find rowEntity in grid data, timer cannot be cancelled")},cancelEditCell:function(a,b){var c=this.grid,d=c.getRow(a);return d?void f.considerSetTimer(c,d):void e.logError("Unable to find rowEntity in grid data, timer cannot be set")},navigate:function(a,b){var c=this.grid;a.row.rowEditSaveTimer&&f.cancelTimer(c,a.row),b&&b.row&&b.row!==a.row&&f.considerSetTimer(c,b.row)},considerSetTimer:function(b,c){if(f.cancelTimer(b,c),c.isDirty&&!c.isSaving&&-1!==b.options.rowEditWaitInterval){var d=b.options.rowEditWaitInterval?b.options.rowEditWaitInterval:2e3;c.rowEditSaveTimer=a(f.saveRow(b,c),d,1)}},cancelTimer:function(b,c){c.rowEditSaveTimer&&!c.isSaving&&(a.cancel(c.rowEditSaveTimer),delete c.rowEditSaveTimer)},setRowsDirty:function(a,b){var c;b.forEach(function(b,d){c=a.getRow(b),c?(a.rowEdit.dirtyRows||(a.rowEdit.dirtyRows=[]),c.isDirty||(c.isDirty=!0,a.rowEdit.dirtyRows.push(c)),delete c.isError,f.considerSetTimer(a,c)):e.logError("requested row not found in rowEdit.setRowsDirty, row was: "+b)})},setRowsClean:function(a,b){var c;b.forEach(function(b,d){c=a.getRow(b),c?(delete c.isDirty,f.removeRow(a.rowEdit.dirtyRows,c),f.cancelTimer(a,c),delete c.isError,f.removeRow(a.rowEdit.errorRows,c)):e.logError("requested row not found in rowEdit.setRowsClean, row was: "+b)})}};return f}]),a.directive("uiGridRowEdit",["gridUtil","uiGridRowEditService","uiGridEditConstants",function(a,b,c){return{replace:!0,priority:0,require:"^uiGrid",scope:!1,compile:function(){return{pre:function(a,c,d,e){b.initializeGrid(a,e.grid)},post:function(a,b,c,d){}}}}}]),a.directive("uiGridViewport",["$compile","uiGridConstants","gridUtil","$parse",function(a,b,c,d){return{priority:-200,scope:!1,compile:function(a,b){var c=angular.element(a.children().children()[0]),d=c.attr("ng-class"),e="";return e=d?d.slice(0,-1)+", 'ui-grid-row-dirty': row.isDirty, 'ui-grid-row-saving': row.isSaving, 'ui-grid-row-error': row.isError}":"{'ui-grid-row-dirty': row.isDirty, 'ui-grid-row-saving': row.isSaving, 'ui-grid-row-error': row.isError}",c.attr("ng-class",e),{pre:function(a,b,c,d){},post:function(a,b,c,d){}}}}}])}(),function(){"use strict";var a=angular.module("ui.grid.saveState",["ui.grid","ui.grid.selection","ui.grid.cellNav","ui.grid.grouping","ui.grid.pinning","ui.grid.treeView"]);a.constant("uiGridSaveStateConstants",{featureName:"saveState"}),a.service("uiGridSaveStateService",["$q","uiGridSaveStateConstants","gridUtil","$compile","$interval","uiGridConstants",function(a,b,c,d,e,f){var g={initializeGrid:function(a){a.saveState={},this.defaultGridOptions(a.options);var b={events:{saveState:{}},methods:{saveState:{save:function(){return g.save(a)},restore:function(b,c){g.restore(a,b,c)}}}};a.api.registerEventsFromObject(b.events),a.api.registerMethodsFromObject(b.methods)},defaultGridOptions:function(a){a.saveWidths=a.saveWidths!==!1,a.saveOrder=a.saveOrder!==!1,a.saveScroll=a.saveScroll===!0,a.saveFocus=a.saveScroll!==!0&&a.saveFocus!==!1,a.saveVisible=a.saveVisible!==!1,a.saveSort=a.saveSort!==!1,a.saveFilter=a.saveFilter!==!1,a.saveSelection=a.saveSelection!==!1,a.saveGrouping=a.saveGrouping!==!1,a.saveGroupingExpandedStates=a.saveGroupingExpandedStates===!0,a.savePinning=a.savePinning!==!1,a.saveTreeView=a.saveTreeView!==!1},save:function(a){var b={};return b.columns=g.saveColumns(a),b.scrollFocus=g.saveScrollFocus(a),b.selection=g.saveSelection(a),b.grouping=g.saveGrouping(a),b.treeView=g.saveTreeView(a),b.pagination=g.savePagination(a),b},restore:function(a,b,c){c.columns&&g.restoreColumns(a,c.columns),c.scrollFocus&&g.restoreScrollFocus(a,b,c.scrollFocus),c.selection&&g.restoreSelection(a,c.selection),c.grouping&&g.restoreGrouping(a,c.grouping),c.treeView&&g.restoreTreeView(a,c.treeView),c.pagination&&g.restorePagination(a,c.pagination),a.refresh()},saveColumns:function(a){var b=[];return a.getOnlyDataColumns().forEach(function(c){var d={};d.name=c.name,a.options.saveVisible&&(d.visible=c.visible),a.options.saveWidths&&(d.width=c.width),a.options.saveSort&&(d.sort=angular.copy(c.sort)),a.options.saveFilter&&(d.filters=[],c.filters.forEach(function(a){var b={};angular.forEach(a,function(a,c){"condition"!==c&&"$$hashKey"!==c&&"placeholder"!==c&&(b[c]=a)}),d.filters.push(b)})),a.api.pinning&&a.options.savePinning&&(d.pinned=c.renderContainer?c.renderContainer:""),b.push(d)}),b},saveScrollFocus:function(a){if(!a.api.cellNav)return{};var b={};if(a.options.saveFocus){b.focus=!0;var c=a.api.cellNav.getFocusedCell();null!==c&&(null!==c.col&&(b.colName=c.col.colDef.name),null!==c.row&&(b.rowVal=g.getRowVal(a,c.row)))}return(a.options.saveScroll||a.options.saveFocus&&!b.colName&&!b.rowVal)&&(b.focus=!1,a.renderContainers.body.prevRowScrollIndex&&(b.rowVal=g.getRowVal(a,a.renderContainers.body.visibleRowCache[a.renderContainers.body.prevRowScrollIndex])),a.renderContainers.body.prevColScrollIndex&&(b.colName=a.renderContainers.body.visibleColumnCache[a.renderContainers.body.prevColScrollIndex].name)),b},saveSelection:function(a){if(!a.api.selection||!a.options.saveSelection)return[];var b=a.api.selection.getSelectedGridRows().map(function(b){return g.getRowVal(a,b)});return b},saveGrouping:function(a){return a.api.grouping&&a.options.saveGrouping?a.api.grouping.getGrouping(a.options.saveGroupingExpandedStates):{}},savePagination:function(a){return a.api.pagination&&a.options.paginationPageSize?{paginationCurrentPage:a.options.paginationCurrentPage,paginationPageSize:a.options.paginationPageSize}:{}},saveTreeView:function(a){return a.api.treeView&&a.options.saveTreeView?a.api.treeView.getTreeView():{}},getRowVal:function(a,b){if(!b)return null;var c={};return a.options.saveRowIdentity?(c.identity=!0,c.row=a.options.saveRowIdentity(b.entity)):(c.identity=!1,c.row=a.renderContainers.body.visibleRowCache.indexOf(b)),c},restoreColumns:function(a,b){var c=!1;b.forEach(function(b,d){var e=a.getColumn(b.name);if(e&&!a.isRowHeaderColumn(e)){!a.options.saveVisible||e.visible===b.visible&&e.colDef.visible===b.visible||(e.visible=b.visible,e.colDef.visible=b.visible,a.api.core.raise.columnVisibilityChanged(e)),a.options.saveWidths&&e.width!==b.width&&(e.width=b.width,e.hasCustomWidth=!0),!a.options.saveSort||angular.equals(e.sort,b.sort)||void 0===e.sort&&angular.isEmpty(b.sort)||(e.sort=angular.copy(b.sort),c=!0),a.options.saveFilter&&!angular.equals(e.filters,b.filters)&&(b.filters.forEach(function(a,b){angular.extend(e.filters[b],a),("undefined"==typeof a.term||null===a.term)&&delete e.filters[b].term}),a.api.core.raise.filterChanged()),a.api.pinning&&a.options.savePinning&&e.renderContainer!==b.pinned&&a.api.pinning.pinColumn(e,b.pinned);var f=a.getOnlyDataColumns().indexOf(e);if(-1!==f&&a.options.saveOrder&&f!==d){var g=a.columns.splice(f+a.rowHeaderColumns.length,1)[0];a.columns.splice(d+a.rowHeaderColumns.length,0,g)}}}),c&&a.api.core.raise.sortChanged(a,a.getColumnSorting())},restoreScrollFocus:function(a,b,c){if(a.api.cellNav){var d,e;if(c.colName){var f=a.options.columnDefs.filter(function(a){return a.name===c.colName});f.length>0&&(d=f[0])}c.rowVal&&c.rowVal.row&&(e=c.rowVal.identity?g.findRowByIdentity(a,c.rowVal):a.renderContainers.body.visibleRowCache[c.rowVal.row]);var h=e&&e.entity?e.entity:null;(d||h)&&(c.focus?a.api.cellNav.scrollToFocus(h,d):a.scrollTo(h,d))}},restoreSelection:function(a,b){a.api.selection&&(a.api.selection.clearSelectedRows(),b.forEach(function(b){if(b.identity){var c=g.findRowByIdentity(a,b);c&&a.api.selection.selectRow(c.entity)}else a.api.selection.selectRowByVisibleIndex(b.row)}))},restoreGrouping:function(a,b){a.api.grouping&&"undefined"!=typeof b&&null!==b&&!angular.equals(b,{})&&a.api.grouping.setGrouping(b)},restoreTreeView:function(a,b){a.api.treeView&&"undefined"!=typeof b&&null!==b&&!angular.equals(b,{})&&a.api.treeView.setTreeView(b)},restorePagination:function(a,b){a.api.pagination&&a.options.paginationPageSize&&(a.options.paginationCurrentPage=b.paginationCurrentPage,a.options.paginationPageSize=b.paginationPageSize)},findRowByIdentity:function(a,b){if(!a.options.saveRowIdentity)return null;var c=a.rows.filter(function(c){return a.options.saveRowIdentity(c.entity)===b.row?!0:!1});return c.length>0?c[0]:null}};return g}]),a.directive("uiGridSaveState",["uiGridSaveStateConstants","uiGridSaveStateService","gridUtil","$compile",function(a,b,c,d){return{replace:!0,priority:0,require:"^uiGrid",scope:!1,link:function(a,c,d,e){b.initializeGrid(e.grid)}}}])}(),function(){"use strict";var a=angular.module("ui.grid.selection",["ui.grid"]);a.constant("uiGridSelectionConstants",{featureName:"selection",selectionRowHeaderColName:"selectionRowHeaderCol"}),angular.module("ui.grid").config(["$provide",function(a){a.decorator("GridRow",["$delegate",function(a){return a.prototype.setSelected=function(a){this.isSelected=a,a?this.grid.selection.selectedCount++:this.grid.selection.selectedCount--},a}])}]),a.service("uiGridSelectionService",["$q","$templateCache","uiGridSelectionConstants","gridUtil",function(a,b,c,d){var e={initializeGrid:function(a){a.selection={},a.selection.lastSelectedRow=null,a.selection.selectAll=!1,a.selection.selectedCount=0,e.defaultGridOptions(a.options);var b={events:{selection:{rowSelectionChanged:function(a,b,c){},rowSelectionChangedBatch:function(a,b,c){}}},methods:{selection:{toggleRowSelection:function(b,c){var d=a.getRow(b);null!==d&&e.toggleRowSelection(a,d,c,a.options.multiSelect,a.options.noUnselect)},selectRow:function(b,c){var d=a.getRow(b);null===d||d.isSelected||e.toggleRowSelection(a,d,c,a.options.multiSelect,a.options.noUnselect)},selectRowByVisibleIndex:function(b,c){var d=a.renderContainers.body.visibleRowCache[b];null===d||"undefined"==typeof d||d.isSelected||e.toggleRowSelection(a,d,c,a.options.multiSelect,a.options.noUnselect)},unSelectRow:function(b,c){var d=a.getRow(b);null!==d&&d.isSelected&&e.toggleRowSelection(a,d,c,a.options.multiSelect,a.options.noUnselect)},selectAllRows:function(b){if(a.options.multiSelect!==!1){var c=[];a.rows.forEach(function(d){d.isSelected||d.enableSelection===!1||(d.setSelected(!0),e.decideRaiseSelectionEvent(a,d,c,b))}),e.decideRaiseSelectionBatchEvent(a,c,b),a.selection.selectAll=!0}},selectAllVisibleRows:function(b){if(a.options.multiSelect!==!1){var c=[];a.rows.forEach(function(d){d.visible?d.isSelected||d.enableSelection===!1||(d.setSelected(!0),e.decideRaiseSelectionEvent(a,d,c,b)):d.isSelected&&(d.setSelected(!1),e.decideRaiseSelectionEvent(a,d,c,b))}),e.decideRaiseSelectionBatchEvent(a,c,b),a.selection.selectAll=!0}},clearSelectedRows:function(b){e.clearSelectedRows(a,b)},getSelectedRows:function(){return e.getSelectedRows(a).map(function(a){return a.entity})},getSelectedGridRows:function(){return e.getSelectedRows(a)},getSelectedCount:function(){return a.selection.selectedCount},setMultiSelect:function(b){a.options.multiSelect=b},setModifierKeysToMultiSelect:function(b){a.options.modifierKeysToMultiSelect=b},getSelectAllState:function(){return a.selection.selectAll}}}};a.api.registerEventsFromObject(b.events),a.api.registerMethodsFromObject(b.methods)},defaultGridOptions:function(a){a.enableRowSelection=a.enableRowSelection!==!1,a.multiSelect=a.multiSelect!==!1,a.noUnselect=a.noUnselect===!0,a.modifierKeysToMultiSelect=a.modifierKeysToMultiSelect===!0,a.enableRowHeaderSelection=a.enableRowHeaderSelection!==!1,"undefined"==typeof a.enableFullRowSelection&&(a.enableFullRowSelection=!a.enableRowHeaderSelection),a.enableSelectAll=a.enableSelectAll!==!1,a.enableSelectionBatchEvent=a.enableSelectionBatchEvent!==!1,a.selectionRowHeaderWidth=angular.isDefined(a.selectionRowHeaderWidth)?a.selectionRowHeaderWidth:30,a.enableFooterTotalSelected=a.enableFooterTotalSelected!==!1,a.isRowSelectable=angular.isDefined(a.isRowSelectable)?a.isRowSelectable:angular.noop},toggleRowSelection:function(a,b,c,d,f){var g=b.isSelected;if(b.enableSelection!==!1||g){var h;d||g?!d&&g&&(h=e.getSelectedRows(a),h.length>1&&(g=!1,e.clearSelectedRows(a,c))):e.clearSelectedRows(a,c),g&&f||(b.setSelected(!g),b.isSelected===!0&&(a.selection.lastSelectedRow=b),h=e.getSelectedRows(a),a.selection.selectAll=a.rows.length===h.length,a.api.selection.raise.rowSelectionChanged(b,c))}},shiftSelect:function(a,b,c,d){if(d){var f=e.getSelectedRows(a),g=f.length>0?a.renderContainers.body.visibleRowCache.indexOf(a.selection.lastSelectedRow):0,h=a.renderContainers.body.visibleRowCache.indexOf(b);if(g>h){var i=g;g=h,h=i}for(var j=[],k=g;h>=k;k++){var l=a.renderContainers.body.visibleRowCache[k];l&&(l.isSelected||l.enableSelection===!1||(l.setSelected(!0),a.selection.lastSelectedRow=l,e.decideRaiseSelectionEvent(a,l,j,c)))}e.decideRaiseSelectionBatchEvent(a,j,c)}},getSelectedRows:function(a){return a.rows.filter(function(a){return a.isSelected})},clearSelectedRows:function(a,b){var c=[];e.getSelectedRows(a).forEach(function(d){d.isSelected&&(d.setSelected(!1),e.decideRaiseSelectionEvent(a,d,c,b))}),e.decideRaiseSelectionBatchEvent(a,c,b),a.selection.selectAll=!1,a.selection.selectedCount=0},decideRaiseSelectionEvent:function(a,b,c,d){a.options.enableSelectionBatchEvent?c.push(b):a.api.selection.raise.rowSelectionChanged(b,d)},decideRaiseSelectionBatchEvent:function(a,b,c){b.length>0&&a.api.selection.raise.rowSelectionChangedBatch(b,c)}};return e}]),a.directive("uiGridSelection",["uiGridSelectionConstants","uiGridSelectionService","$templateCache","uiGridConstants",function(a,b,c,d){return{replace:!0,priority:0,require:"^uiGrid",scope:!1,compile:function(){return{pre:function(c,e,f,g){if(b.initializeGrid(g.grid),g.grid.options.enableRowHeaderSelection){var h={name:a.selectionRowHeaderColName,displayName:"",width:g.grid.options.selectionRowHeaderWidth,minWidth:10,cellTemplate:"ui-grid/selectionRowHeader",headerCellTemplate:"ui-grid/selectionHeaderCell",enableColumnResizing:!1,enableColumnMenu:!1,exporterSuppressExport:!0,allowCellFocus:!0};g.grid.addRowHeaderColumn(h)}var i=!1,j=function(a){return a.forEach(function(a){a.enableSelection=g.grid.options.isRowSelectable(a)}),a},k=function(){g.grid.options.isRowSelectable!==angular.noop&&i!==!0&&(g.grid.registerRowsProcessor(j,500),i=!0)};k();var l=g.grid.registerDataChangeCallback(k,[d.dataChange.OPTIONS]);c.$on("$destroy",l)},post:function(a,b,c,d){}}}}}]),a.directive("uiGridSelectionRowHeaderButtons",["$templateCache","uiGridSelectionService","gridUtil",function(a,b,c){return{replace:!0,restrict:"E",template:a.get("ui-grid/selectionRowHeaderButtons"),scope:!0,require:"^uiGrid",link:function(a,d,e,f){function g(a,c){c.stopPropagation(),c.shiftKey?b.shiftSelect(i,a,c,i.options.multiSelect):c.ctrlKey||c.metaKey?b.toggleRowSelection(i,a,c,i.options.multiSelect,i.options.noUnselect):b.toggleRowSelection(i,a,c,i.options.multiSelect&&!i.options.modifierKeysToMultiSelect,i.options.noUnselect)}function h(a){(a.ctrlKey||a.shiftKey)&&(a.target.onselectstart=function(){return!1},window.setTimeout(function(){a.target.onselectstart=null},0))}var i=f.grid;a.selectButtonClick=g,"ie"===c.detectBrowser()&&d.on("mousedown",h)}}}]),a.directive("uiGridSelectionSelectAllButtons",["$templateCache","uiGridSelectionService",function(a,b){return{replace:!0,restrict:"E",template:a.get("ui-grid/selectionSelectAllButtons"),scope:!1,link:function(a,c,d,e){var f=a.col.grid;a.headerButtonClick=function(a,c){f.selection.selectAll?(b.clearSelectedRows(f,c),f.options.noUnselect&&f.api.selection.selectRowByVisibleIndex(0,c),f.selection.selectAll=!1):f.options.multiSelect&&(f.api.selection.selectAllVisibleRows(c),f.selection.selectAll=!0)}}}}]),a.directive("uiGridViewport",["$compile","uiGridConstants","uiGridSelectionConstants","gridUtil","$parse","uiGridSelectionService",function(a,b,c,d,e,f){return{priority:-200,scope:!1,compile:function(a,b){var c=angular.element(a.children().children()[0]),d=c.attr("ng-class"),e="";return e=d?d.slice(0,-1)+",'ui-grid-row-selected': row.isSelected}":"{'ui-grid-row-selected': row.isSelected}",c.attr("ng-class",e),
{pre:function(a,b,c,d){},post:function(a,b,c,d){}}}}}]),a.directive("uiGridCell",["$compile","uiGridConstants","uiGridSelectionConstants","gridUtil","$parse","uiGridSelectionService","$timeout",function(a,b,c,d,e,f,g){return{priority:-200,restrict:"A",require:"?^uiGrid",scope:!1,link:function(a,c,d,e){function h(){a.grid.options.enableRowSelection&&a.grid.options.enableFullRowSelection&&(c.addClass("ui-grid-disable-selection"),c.on("touchstart",m),c.on("touchend",n),c.on("click",l),a.registered=!0)}function i(){a.registered&&(c.removeClass("ui-grid-disable-selection"),c.off("touchstart",m),c.off("touchend",n),c.off("click",l),a.registered=!1)}var j=0,k=300;e.grid.api.cellNav&&e.grid.api.cellNav.on.viewPortKeyDown(a,function(b,c){null!==c&&c.row===a.row&&c.col===a.col&&32===b.keyCode&&"selectionRowHeaderCol"===a.col.colDef.name&&(f.toggleRowSelection(a.grid,a.row,b,a.grid.options.multiSelect&&!a.grid.options.modifierKeysToMultiSelect,a.grid.options.noUnselect),a.$apply())});var l=function(b){c.off("touchend",n),b.shiftKey?f.shiftSelect(a.grid,a.row,b,a.grid.options.multiSelect):b.ctrlKey||b.metaKey?f.toggleRowSelection(a.grid,a.row,b,a.grid.options.multiSelect,a.grid.options.noUnselect):f.toggleRowSelection(a.grid,a.row,b,a.grid.options.multiSelect&&!a.grid.options.modifierKeysToMultiSelect,a.grid.options.noUnselect),a.$apply(),g(function(){c.on("touchend",n)},k)},m=function(a){j=(new Date).getTime(),c.off("click",l)},n=function(a){var b=(new Date).getTime(),d=b-j;k>d&&l(a),g(function(){c.on("click",l)},k)};h();var o=a.grid.registerDataChangeCallback(function(){a.grid.options.enableRowSelection&&a.grid.options.enableFullRowSelection&&!a.registered?h():a.grid.options.enableRowSelection&&a.grid.options.enableFullRowSelection||!a.registered||i()},[b.dataChange.OPTIONS]);c.on("$destroy",o)}}}]),a.directive("uiGridGridFooter",["$compile","uiGridConstants","gridUtil",function(a,b,c){return{restrict:"EA",replace:!0,priority:-1e3,require:"^uiGrid",scope:!0,compile:function(b,d){return{pre:function(b,d,e,f){f.grid.options.showGridFooter&&c.getTemplate("ui-grid/gridFooterSelectedItems").then(function(c){var e=angular.element(c),f=a(e)(b);angular.element(d[0].getElementsByClassName("ui-grid-grid-footer")[0]).append(f)})},post:function(a,b,c,d){}}}}}])}(),function(){"use strict";var a=angular.module("ui.grid.treeBase",["ui.grid"]);a.constant("uiGridTreeBaseConstants",{featureName:"treeBase",rowHeaderColName:"treeBaseRowHeaderCol",EXPANDED:"expanded",COLLAPSED:"collapsed",aggregation:{COUNT:"count",SUM:"sum",MAX:"max",MIN:"min",AVG:"avg"}}),a.service("uiGridTreeBaseService",["$q","uiGridTreeBaseConstants","gridUtil","GridRow","gridClassFactory","i18nService","uiGridConstants","rowSorter",function(a,b,c,d,e,f,g,h){var i={initializeGrid:function(a,b){a.treeBase={},a.treeBase.numberLevels=0,a.treeBase.expandAll=!1,a.treeBase.tree=[],i.defaultGridOptions(a.options),a.registerRowsProcessor(i.treeRows,410),a.registerColumnBuilder(i.treeBaseColumnBuilder),i.createRowHeader(a);var c={events:{treeBase:{rowExpanded:{},rowCollapsed:{}}},methods:{treeBase:{expandAllRows:function(){i.expandAllRows(a)},collapseAllRows:function(){i.collapseAllRows(a)},toggleRowTreeState:function(b){i.toggleRowTreeState(a,b)},expandRow:function(b){i.expandRow(a,b)},expandRowChildren:function(b){i.expandRowChildren(a,b)},collapseRow:function(b){i.collapseRow(a,b)},collapseRowChildren:function(b){i.collapseRowChildren(a,b)},getTreeExpandedState:function(){return{expandedState:i.getTreeState(a)}},setTreeState:function(b){i.setTreeState(a,b)},getRowChildren:function(a){return a.treeNode.children.map(function(a){return a.row})}}}};a.api.registerEventsFromObject(c.events),a.api.registerMethodsFromObject(c.methods)},defaultGridOptions:function(a){a.treeRowHeaderBaseWidth=a.treeRowHeaderBaseWidth||30,a.treeIndent=a.treeIndent||10,a.showTreeRowHeader=a.showTreeRowHeader!==!1,a.showTreeExpandNoChildren=a.showTreeExpandNoChildren!==!1,a.treeRowHeaderAlwaysVisible=a.treeRowHeaderAlwaysVisible!==!1,a.treeCustomAggregations=a.treeCustomAggregations||{},a.enableExpandAll=a.enableExpandAll!==!1},treeBaseColumnBuilder:function(a,b,c){"undefined"!=typeof a.customTreeAggregationFn&&(b.treeAggregationFn=a.customTreeAggregationFn),"undefined"!=typeof a.treeAggregationType&&(b.treeAggregation={type:a.treeAggregationType},"undefined"!=typeof c.treeCustomAggregations[a.treeAggregationType]?(b.treeAggregationFn=c.treeCustomAggregations[a.treeAggregationType].aggregationFn,b.treeAggregationFinalizerFn=c.treeCustomAggregations[a.treeAggregationType].finalizerFn,b.treeAggregation.label=c.treeCustomAggregations[a.treeAggregationType].label):"undefined"!=typeof i.nativeAggregations()[a.treeAggregationType]&&(b.treeAggregationFn=i.nativeAggregations()[a.treeAggregationType].aggregationFn,b.treeAggregation.label=i.nativeAggregations()[a.treeAggregationType].label)),"undefined"!=typeof a.treeAggregationLabel&&("undefined"==typeof b.treeAggregation&&(b.treeAggregation={}),b.treeAggregation.label=a.treeAggregationLabel),b.treeAggregationUpdateEntity=a.treeAggregationUpdateEntity!==!1,"undefined"==typeof b.customTreeAggregationFinalizerFn&&(b.customTreeAggregationFinalizerFn=a.customTreeAggregationFinalizerFn)},createRowHeader:function(a){var c={name:b.rowHeaderColName,displayName:"",width:a.options.treeRowHeaderBaseWidth,minWidth:10,cellTemplate:"ui-grid/treeBaseRowHeader",headerCellTemplate:"ui-grid/treeBaseHeaderCell",enableColumnResizing:!1,enableColumnMenu:!1,exporterSuppressExport:!0,allowCellFocus:!0};c.visible=a.options.treeRowHeaderAlwaysVisible,a.addRowHeaderColumn(c)},expandAllRows:function(a){a.treeBase.tree.forEach(function(c){i.setAllNodes(a,c,b.EXPANDED)}),a.treeBase.expandAll=!0,a.queueGridRefresh()},collapseAllRows:function(a){a.treeBase.tree.forEach(function(c){i.setAllNodes(a,c,b.COLLAPSED)}),a.treeBase.expandAll=!1,a.queueGridRefresh()},setAllNodes:function(a,c,d){"undefined"!=typeof c.state&&c.state!==d&&(c.state=d,d===b.EXPANDED?a.api.treeBase.raise.rowExpanded(c.row):a.api.treeBase.raise.rowCollapsed(c.row)),c.children&&c.children.forEach(function(b){i.setAllNodes(a,b,d)})},toggleRowTreeState:function(a,c){"undefined"==typeof c.treeLevel||null===c.treeLevel||c.treeLevel<0||(c.treeNode.state===b.EXPANDED?i.collapseRow(a,c):i.expandRow(a,c),a.queueGridRefresh())},expandRow:function(a,c){"undefined"==typeof c.treeLevel||null===c.treeLevel||c.treeLevel<0||c.treeNode.state!==b.EXPANDED&&(c.treeNode.state=b.EXPANDED,a.api.treeBase.raise.rowExpanded(c),a.treeBase.expandAll=i.allExpanded(a.treeBase.tree),a.queueGridRefresh())},expandRowChildren:function(a,c){"undefined"==typeof c.treeLevel||null===c.treeLevel||c.treeLevel<0||(i.setAllNodes(a,c.treeNode,b.EXPANDED),a.treeBase.expandAll=i.allExpanded(a.treeBase.tree),a.queueGridRefresh())},collapseRow:function(a,c){"undefined"==typeof c.treeLevel||null===c.treeLevel||c.treeLevel<0||c.treeNode.state!==b.COLLAPSED&&(c.treeNode.state=b.COLLAPSED,a.treeBase.expandAll=!1,a.api.treeBase.raise.rowCollapsed(c),a.queueGridRefresh())},collapseRowChildren:function(a,c){"undefined"==typeof c.treeLevel||null===c.treeLevel||c.treeLevel<0||(i.setAllNodes(a,c.treeNode,b.COLLAPSED),a.treeBase.expandAll=!1,a.queueGridRefresh())},allExpanded:function(a){var b=!0;return a.forEach(function(a){i.allExpandedInternal(a)||(b=!1)}),b},allExpandedInternal:function(a){if(a.children&&a.children.length>0){if(a.state===b.COLLAPSED)return!1;var c=!0;return a.children.forEach(function(a){i.allExpandedInternal(a)||(c=!1)}),c}return!0},treeRows:function(a){if(0===a.length)return a;var c=this;b.EXPANDED;return c.treeBase.tree=i.createTree(c,a),i.updateRowHeaderWidth(c),i.sortTree(c),i.fixFilter(c),i.renderTree(c.treeBase.tree)},updateRowHeaderWidth:function(a){var c=a.getColumn(b.rowHeaderColName),d=a.options.treeRowHeaderBaseWidth+a.options.treeIndent*Math.max(a.treeBase.numberLevels-1,0);c&&d!==c.width&&(c.width=d,a.queueRefresh());var e=!0;a.options.showTreeRowHeader===!1&&(e=!1),a.options.treeRowHeaderAlwaysVisible===!1&&a.treeBase.numberLevels<=0&&(e=!1),c.visible!==e&&(c.visible=e,c.colDef.visible=e,a.queueGridRefresh())},renderTree:function(a){var c=[];return a.forEach(function(a){a.row.visible&&c.push(a.row),a.state===b.EXPANDED&&a.children&&a.children.length>0&&(c=c.concat(i.renderTree(a.children)))}),c},createTree:function(a,c){var d,e=-1,f=[];a.treeBase.tree=[],a.treeBase.numberLevels=0;var g=i.getAggregations(a),h=function(c){if("undefined"!=typeof c.entity.$$treeLevel&&c.treeLevel!==c.entity.$$treeLevel&&(c.treeLevel=c.entity.$$treeLevel),c.treeLevel<=e){for(;c.treeLevel<=e;){var h=f.pop();i.finaliseAggregations(h),e--}d=f.length>0?i.setCurrentState(f):b.EXPANDED}("undefined"==typeof c.treeLevel||null===c.treeLevel||c.treeLevel<0)&&c.visible&&i.aggregate(a,c,f),i.addOrUseNode(a,c,f,g),"undefined"!=typeof c.treeLevel&&null!==c.treeLevel&&c.treeLevel>=0&&(f.push(c),e++,d=i.setCurrentState(f)),a.treeBase.numberLevels<c.treeLevel+1&&(a.treeBase.numberLevels=c.treeLevel+1)};for(c.forEach(h);f.length>0;){var j=f.pop();i.finaliseAggregations(j)}return a.treeBase.tree},addOrUseNode:function(a,c,d,e){var f=[];e.forEach(function(a){f.push(i.buildAggregationObject(a.col))});var g={state:b.COLLAPSED,row:c,parentRow:null,aggregations:f,children:[]};c.treeNode&&(g.state=c.treeNode.state),d.length>0&&(g.parentRow=d[d.length-1]),c.treeNode=g,0===d.length?a.treeBase.tree.push(g):d[d.length-1].treeNode.children.push(g)},setCurrentState:function(a){var c=b.EXPANDED;return a.forEach(function(a){a.treeNode.state===b.COLLAPSED&&(c=b.COLLAPSED)}),c},sortTree:function(a){a.columns.forEach(function(a){a.sort&&a.sort.ignoreSort&&delete a.sort.ignoreSort}),a.treeBase.tree=i.sortInternal(a,a.treeBase.tree)},sortInternal:function(a,c){var d=c.map(function(a){return a.row});d=h.sort(a,d,a.columns);var e=d.map(function(a){return a.treeNode});return e.forEach(function(c){c.state===b.EXPANDED&&c.children&&c.children.length>0&&(c.children=i.sortInternal(a,c.children))}),e},fixFilter:function(a){var b;a.treeBase.tree.forEach(function(a){a.children&&a.children.length>0&&(b=a.row.visible,i.fixFilterInternal(a.children,b))})},fixFilterInternal:function(a,b){return a.forEach(function(a){a.row.visible&&!b&&(i.setParentsVisible(a),b=!0),a.children&&a.children.length>0&&i.fixFilterInternal(a.children,b&&a.row.visible)&&(b=!0)}),b},setParentsVisible:function(a){for(;a.parentRow;)a.parentRow.visible=!0,a=a.parentRow.treeNode},buildAggregationObject:function(a){var b={col:a};return a.treeAggregation&&a.treeAggregation.type&&(b.type=a.treeAggregation.type),a.treeAggregation&&a.treeAggregation.label&&(b.label=a.treeAggregation.label),b},getAggregations:function(a){var b=[];return a.columns.forEach(function(c){"undefined"!=typeof c.treeAggregationFn&&(b.push(i.buildAggregationObject(c)),a.options.showColumnFooter&&"undefined"==typeof c.colDef.aggregationType&&c.treeAggregation&&(c.treeFooterAggregation=i.buildAggregationObject(c),c.aggregationType=i.treeFooterAggregationType))}),b},aggregate:function(a,b,c){0===c.length&&b.treeNode&&b.treeNode.aggregations&&b.treeNode.aggregations.forEach(function(c){if("undefined"!=typeof c.col.treeFooterAggregation){var d=a.getCellValue(b,c.col),e=Number(d);c.col.treeAggregationFn(c.col.treeFooterAggregation,d,e,b)}}),c.forEach(function(c,d){c.treeNode.aggregations&&c.treeNode.aggregations.forEach(function(c){var e=a.getCellValue(b,c.col),f=Number(e);c.col.treeAggregationFn(c,e,f,b),0===d&&"undefined"!=typeof c.col.treeFooterAggregation&&c.col.treeAggregationFn(c.col.treeFooterAggregation,e,f,b)})})},nativeAggregations:function(){var a={count:{label:f.get().aggregation.count,menuTitle:f.get().grouping.aggregate_count,aggregationFn:function(a,b,c){"undefined"==typeof a.value?a.value=1:a.value++}},sum:{label:f.get().aggregation.sum,menuTitle:f.get().grouping.aggregate_sum,aggregationFn:function(a,b,c){isNaN(c)||("undefined"==typeof a.value?a.value=c:a.value+=c)}},min:{label:f.get().aggregation.min,menuTitle:f.get().grouping.aggregate_min,aggregationFn:function(a,b,c){"undefined"==typeof a.value?a.value=b:"undefined"!=typeof b&&null!==b&&(b<a.value||null===a.value)&&(a.value=b)}},max:{label:f.get().aggregation.max,menuTitle:f.get().grouping.aggregate_max,aggregationFn:function(a,b,c){"undefined"==typeof a.value?a.value=b:"undefined"!=typeof b&&null!==b&&(b>a.value||null===a.value)&&(a.value=b)}},avg:{label:f.get().aggregation.avg,menuTitle:f.get().grouping.aggregate_avg,aggregationFn:function(a,b,c){"undefined"==typeof a.count?a.count=1:a.count++,isNaN(c)||("undefined"==typeof a.value||"undefined"==typeof a.sum?(a.value=c,a.sum=c):(a.sum+=c,a.value=a.sum/a.count))}}};return a},finaliseAggregation:function(a,b){b.col.treeAggregationUpdateEntity&&"undefined"!=typeof a&&"undefined"!=typeof a.entity["$$"+b.col.uid]&&angular.extend(b,a.entity["$$"+b.col.uid]),"function"==typeof b.col.treeAggregationFinalizerFn&&b.col.treeAggregationFinalizerFn(b),"function"==typeof b.col.customTreeAggregationFinalizerFn&&b.col.customTreeAggregationFinalizerFn(b),"undefined"==typeof b.rendered&&(b.rendered=b.label?b.label+b.value:b.value)},finaliseAggregations:function(a){"undefined"!=typeof a.treeNode.aggregations&&a.treeNode.aggregations.forEach(function(b){if(i.finaliseAggregation(a,b),b.col.treeAggregationUpdateEntity){var c={};angular.forEach(b,function(a,d){b.hasOwnProperty(d)&&"col"!==d&&(c[d]=a)}),a.entity["$$"+b.col.uid]=c}})},treeFooterAggregationType:function(a,b){return i.finaliseAggregation(void 0,b.treeFooterAggregation),"undefined"==typeof b.treeFooterAggregation.value||null===b.treeFooterAggregation.rendered?"":b.treeFooterAggregation.rendered}};return i}]),a.directive("uiGridTreeBaseRowHeaderButtons",["$templateCache","uiGridTreeBaseService",function(a,b){return{replace:!0,restrict:"E",template:a.get("ui-grid/treeBaseRowHeaderButtons"),scope:!0,require:"^uiGrid",link:function(a,c,d,e){var f=e.grid;a.treeButtonClick=function(a,c){b.toggleRowTreeState(f,a,c)}}}}]),a.directive("uiGridTreeBaseExpandAllButtons",["$templateCache","uiGridTreeBaseService",function(a,b){return{replace:!0,restrict:"E",template:a.get("ui-grid/treeBaseExpandAllButtons"),scope:!1,link:function(a,c,d,e){var f=a.col.grid;a.headerButtonClick=function(a,c){f.treeBase.expandAll?b.collapseAllRows(f,c):b.expandAllRows(f,c)}}}}]),a.directive("uiGridViewport",["$compile","uiGridConstants","gridUtil","$parse",function(a,b,c,d){return{priority:-200,scope:!1,compile:function(a,b){var c=angular.element(a.children().children()[0]),d=c.attr("ng-class"),e="";return e=d?d.slice(0,-1)+",'ui-grid-tree-header-row': row.treeLevel > -1}":"{'ui-grid-tree-header-row': row.treeLevel > -1}",c.attr("ng-class",e),{pre:function(a,b,c,d){},post:function(a,b,c,d){}}}}}])}(),function(){"use strict";var a=angular.module("ui.grid.treeView",["ui.grid","ui.grid.treeBase"]);a.constant("uiGridTreeViewConstants",{featureName:"treeView",rowHeaderColName:"treeBaseRowHeaderCol",EXPANDED:"expanded",COLLAPSED:"collapsed",aggregation:{COUNT:"count",SUM:"sum",MAX:"max",MIN:"min",AVG:"avg"}}),a.service("uiGridTreeViewService",["$q","uiGridTreeViewConstants","uiGridTreeBaseConstants","uiGridTreeBaseService","gridUtil","GridRow","gridClassFactory","i18nService","uiGridConstants",function(a,b,c,d,e,f,g,h,i){var j={initializeGrid:function(a,b){d.initializeGrid(a,b),a.treeView={},a.registerRowsProcessor(j.adjustSorting,60);var c={events:{treeView:{}},methods:{treeView:{}}};a.api.registerEventsFromObject(c.events),a.api.registerMethodsFromObject(c.methods)},defaultGridOptions:function(a){a.enableTreeView=a.enableTreeView!==!1},adjustSorting:function(a){var b=this;return b.columns.forEach(function(a){a.sort&&(a.sort.ignoreSort=!0)}),a}};return j}]),a.directive("uiGridTreeView",["uiGridTreeViewConstants","uiGridTreeViewService","$templateCache",function(a,b,c){return{replace:!0,priority:0,require:"^uiGrid",scope:!1,compile:function(){return{pre:function(a,c,d,e){e.grid.options.enableTreeView!==!1&&b.initializeGrid(e.grid,a)},post:function(a,b,c,d){}}}}}])}(),function(){"use strict";var a=angular.module("ui.grid.validate",["ui.grid"]);a.service("uiGridValidateService",["$sce","$q","$http","i18nService","uiGridConstants",function(a,b,c,d,e){var f={validatorFactories:{},setExternalFactoryFunction:function(a){f.externalFactoryFunction=a},clearExternalFactory:function(){delete f.externalFactoryFunction},getValidatorFromExternalFactory:function(a,b){return f.externalFactoryFunction(a,b).validatorFactory(b)},getMessageFromExternalFactory:function(a,b){return f.externalFactoryFunction(a,b).messageFunction(b)},setValidator:function(a,b,c){f.validatorFactories[a]={validatorFactory:b,messageFunction:c}},getValidator:function(a,b){if(f.externalFactoryFunction){var c=f.getValidatorFromExternalFactory(a,b);if(c)return c}if(!f.validatorFactories[a])throw"Invalid validator name: "+a;return f.validatorFactories[a].validatorFactory(b)},getMessage:function(a,b){if(f.externalFactoryFunction){var c=f.getMessageFromExternalFactory(a,b);if(c)return c}return f.validatorFactories[a].messageFunction(b)},isInvalid:function(a,b){return a["$$invalid"+b.name]},setInvalid:function(a,b){a["$$invalid"+b.name]=!0},setValid:function(a,b){delete a["$$invalid"+b.name]},setError:function(a,b,c){a["$$errors"+b.name]||(a["$$errors"+b.name]={}),a["$$errors"+b.name][c]=!0},clearError:function(a,b,c){a["$$errors"+b.name]&&c in a["$$errors"+b.name]&&delete a["$$errors"+b.name][c]},getErrorMessages:function(a,b){var c=[];return a["$$errors"+b.name]&&0!==Object.keys(a["$$errors"+b.name]).length?(Object.keys(a["$$errors"+b.name]).sort().forEach(function(a){c.push(f.getMessage(a,b.validators[a]))}),c):c},getFormattedErrors:function(b,c){var e="",g=f.getErrorMessages(b,c);return g.length?(g.forEach(function(a){e+=a+"<br/>"}),a.trustAsHtml("<p><b>"+d.getSafeText("validate.error")+"</b></p>"+e)):void 0},getTitleFormattedErrors:function(b,c){var e="\n",g="",h=f.getErrorMessages(b,c);return h.length?(h.forEach(function(a){g+=a+e}),a.trustAsHtml(d.getSafeText("validate.error")+e+g)):void 0},runValidators:function(a,c,d,e,g){if(d!==e){if("undefined"==typeof c.name||!c.name)throw new Error("colDef.name is required to perform validation");f.setValid(a,c);var h=function(a,b,c){return function(h){h||(f.setInvalid(a,b),f.setError(a,b,c),g&&g.api.validate.raise.validationFailed(a,b,d,e))}};for(var i in c.validators){f.clearError(a,c,i);var j=f.getValidator(i,c.validators[i]);b.when(j(e,d,a,c)).then(h(a,c,i))}}},createDefaultValidators:function(){f.setValidator("minLength",function(a){return function(b,c,d,e){return void 0===c||null===c||""===c?!0:c.length>=a}},function(a){return d.getSafeText("validate.minLength").replace("THRESHOLD",a)}),f.setValidator("maxLength",function(a){return function(b,c,d,e){return void 0===c||null===c||""===c?!0:c.length<=a}},function(a){return d.getSafeText("validate.maxLength").replace("THRESHOLD",a)}),f.setValidator("required",function(a){return function(b,c,d,e){return a?!(void 0===c||null===c||""===c):!0}},function(a){return d.getSafeText("validate.required")})},initializeGrid:function(a,b){b.validate={isInvalid:f.isInvalid,getFormattedErrors:f.getFormattedErrors,getTitleFormattedErrors:f.getTitleFormattedErrors,runValidators:f.runValidators};var c={events:{validate:{validationFailed:function(a,b,c,d){}}},methods:{validate:{isInvalid:function(a,c){return b.validate.isInvalid(a,c)},getErrorMessages:function(a,c){return b.validate.getErrorMessages(a,c)},getFormattedErrors:function(a,c){return b.validate.getFormattedErrors(a,c)},getTitleFormattedErrors:function(a,c){return b.validate.getTitleFormattedErrors(a,c)}}}};b.api.registerEventsFromObject(c.events),b.api.registerMethodsFromObject(c.methods),b.edit&&b.api.edit.on.afterCellEdit(a,function(a,c,d,e){b.validate.runValidators(a,c,d,e,b)}),f.createDefaultValidators()}};return f}]),a.directive("uiGridValidate",["gridUtil","uiGridValidateService",function(a,b){return{priority:0,replace:!0,require:"^uiGrid",scope:!1,compile:function(){return{pre:function(a,c,d,e){b.initializeGrid(a,e.grid)},post:function(a,b,c,d){}}}}}])}(),angular.module("ui.grid").run(["$templateCache",function(a){"use strict";a.put("ui-grid/ui-grid-filter",'<div class="ui-grid-filter-container" ng-repeat="colFilter in col.filters" ng-class="{\'ui-grid-filter-cancel-button-hidden\' : colFilter.disableCancelFilterButton === true }"><div ng-if="colFilter.type !== \'select\'"><input type="text" class="ui-grid-filter-input ui-grid-filter-input-{{$index}}" ng-model="colFilter.term" ng-attr-placeholder="{{colFilter.placeholder || \'\'}}" aria-label="{{colFilter.ariaLabel || aria.defaultFilterLabel}}"><div role="button" class="ui-grid-filter-button" ng-click="removeFilter(colFilter, $index)" ng-if="!colFilter.disableCancelFilterButton" ng-disabled="colFilter.term === undefined || colFilter.term === null || colFilter.term === \'\'" ng-show="colFilter.term !== undefined && colFilter.term !== null && colFilter.term !== \'\'"><i class="ui-grid-icon-cancel" ui-grid-one-bind-aria-label="aria.removeFilter">&nbsp;</i></div></div><div ng-if="colFilter.type === \'select\'"><select class="ui-grid-filter-select ui-grid-filter-input-{{$index}}" ng-model="colFilter.term" ng-attr-placeholder="{{colFilter.placeholder || aria.defaultFilterLabel}}" aria-label="{{colFilter.ariaLabel || \'\'}}" ng-options="option.value as option.label for option in colFilter.selectOptions"><option value=""></option></select><div role="button" class="ui-grid-filter-button-select" ng-click="removeFilter(colFilter, $index)" ng-if="!colFilter.disableCancelFilterButton" ng-disabled="colFilter.term === undefined || colFilter.term === null || colFilter.term === \'\'" ng-show="colFilter.term !== undefined && colFilter.term != null"><i class="ui-grid-icon-cancel" ui-grid-one-bind-aria-label="aria.removeFilter">&nbsp;</i></div></div></div>'),a.put("ui-grid/ui-grid-footer",'<div class="ui-grid-footer-panel ui-grid-footer-aggregates-row"><!-- tfooter --><div class="ui-grid-footer ui-grid-footer-viewport"><div class="ui-grid-footer-canvas"><div class="ui-grid-footer-cell-wrapper" ng-style="colContainer.headerCellWrapperStyle()"><div role="row" class="ui-grid-footer-cell-row"><div ui-grid-footer-cell role="gridcell" ng-repeat="col in colContainer.renderedColumns track by col.uid" col="col" render-index="$index" class="ui-grid-footer-cell ui-grid-clearfix"></div></div></div></div></div></div>'),a.put("ui-grid/ui-grid-grid-footer",'<div class="ui-grid-footer-info ui-grid-grid-footer"><span>{{\'search.totalItems\' | t}} {{grid.rows.length}}</span> <span ng-if="grid.renderContainers.body.visibleRowCache.length !== grid.rows.length" class="ngLabel">({{"search.showingItems" | t}} {{grid.renderContainers.body.visibleRowCache.length}})</span></div>'),a.put("ui-grid/ui-grid-group-panel",'<div class="ui-grid-group-panel"><div ui-t="groupPanel.description" class="description" ng-show="groupings.length == 0"></div><ul ng-show="groupings.length > 0" class="ngGroupList"><li class="ngGroupItem" ng-repeat="group in configGroups"><span class="ngGroupElement"><span class="ngGroupName">{{group.displayName}} <span ng-click="removeGroup($index)" class="ngRemoveGroup">x</span></span> <span ng-hide="$last" class="ngGroupArrow"></span></span></li></ul></div>'),a.put("ui-grid/ui-grid-header",'<div role="rowgroup" class="ui-grid-header"><!-- theader --><div class="ui-grid-top-panel"><div class="ui-grid-header-viewport"><div class="ui-grid-header-canvas"><div class="ui-grid-header-cell-wrapper" ng-style="colContainer.headerCellWrapperStyle()"><div role="row" class="ui-grid-header-cell-row"><div class="ui-grid-header-cell ui-grid-clearfix" ng-repeat="col in colContainer.renderedColumns track by col.uid" ui-grid-header-cell col="col" render-index="$index"></div></div></div></div></div></div></div>'),a.put("ui-grid/ui-grid-menu-button",'<div class="ui-grid-menu-button"><div role="button" ui-grid-one-bind-id-grid="\'grid-menu\'" class="ui-grid-icon-container" ng-click="toggleMenu()" aria-haspopup="true"><i class="ui-grid-icon-menu" ui-grid-one-bind-aria-label="i18n.aria.buttonLabel">&nbsp;</i></div><div ui-grid-menu menu-items="menuItems"></div></div>'),a.put("ui-grid/ui-grid-no-header",'<div class="ui-grid-top-panel"></div>'),a.put("ui-grid/ui-grid-row","<div ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.uid\" ui-grid-one-bind-id-grid=\"rowRenderIndex + '-' + col.uid + '-cell'\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" role=\"{{col.isRowHeader ? 'rowheader' : 'gridcell'}}\" ui-grid-cell></div>"),a.put("ui-grid/ui-grid",'<div ui-i18n="en" class="ui-grid"><!-- TODO (c0bra): add "scoped" attr here, eventually? --><style ui-grid-style>.grid{{ grid.id }} {\n      /* Styles for the grid */\n    }\n\n    .grid{{ grid.id }} .ui-grid-row, .grid{{ grid.id }} .ui-grid-cell, .grid{{ grid.id }} .ui-grid-cell .ui-grid-vertical-bar {\n      height: {{ grid.options.rowHeight }}px;\n    }\n\n    .grid{{ grid.id }} .ui-grid-row:last-child .ui-grid-cell {\n      border-bottom-width: {{ ((grid.getTotalRowHeight() < grid.getViewportHeight()) && \'1\') || \'0\' }}px;\n    }\n\n    {{ grid.verticalScrollbarStyles }}\n    {{ grid.horizontalScrollbarStyles }}\n\n    /*\n    .ui-grid[dir=rtl] .ui-grid-viewport {\n      padding-left: {{ grid.verticalScrollbarWidth }}px;\n    }\n    */\n\n    {{ grid.customStyles }}</style><div class="ui-grid-contents-wrapper"><div ui-grid-menu-button ng-if="grid.options.enableGridMenu"></div><div ng-if="grid.hasLeftContainer()" style="width: 0" ui-grid-pinned-container="\'left\'"></div><div ui-grid-render-container container-id="\'body\'" col-container-name="\'body\'" row-container-name="\'body\'" bind-scroll-horizontal="true" bind-scroll-vertical="true" enable-horizontal-scrollbar="grid.options.enableHorizontalScrollbar" enable-vertical-scrollbar="grid.options.enableVerticalScrollbar"></div><div ng-if="grid.hasRightContainer()" style="width: 0" ui-grid-pinned-container="\'right\'"></div><div ui-grid-grid-footer ng-if="grid.options.showGridFooter"></div><div ui-grid-column-menu ng-if="grid.options.enableColumnMenus"></div><div ng-transclude></div></div></div>'),a.put("ui-grid/uiGridCell",'<div class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'),a.put("ui-grid/uiGridColumnMenu",'<div class="ui-grid-column-menu"><div ui-grid-menu menu-items="menuItems"><!-- <div class="ui-grid-column-menu">\n    <div class="inner" ng-show="menuShown">\n      <ul>\n        <div ng-show="grid.options.enableSorting">\n          <li ng-click="sortColumn($event, asc)" ng-class="{ \'selected\' : col.sort.direction == asc }"><i class="ui-grid-icon-sort-alt-up"></i> Sort Ascending</li>\n          <li ng-click="sortColumn($event, desc)" ng-class="{ \'selected\' : col.sort.direction == desc }"><i class="ui-grid-icon-sort-alt-down"></i> Sort Descending</li>\n          <li ng-show="col.sort.direction" ng-click="unsortColumn()"><i class="ui-grid-icon-cancel"></i> Remove Sort</li>\n        </div>\n      </ul>\n    </div>\n  </div> --></div></div>'),a.put("ui-grid/uiGridFooterCell",'<div class="ui-grid-cell-contents" col-index="renderIndex"><div>{{ col.getAggregationText() + ( col.getAggregationValue() CUSTOM_FILTERS ) }}</div></div>'),a.put("ui-grid/uiGridHeaderCell",'<div role="columnheader" ng-class="{ \'sortable\': sortable }" ui-grid-one-bind-aria-labelledby-grid="col.uid + \'-header-text \' + col.uid + \'-sortdir-text\'" aria-sort="{{col.sort.direction == asc ? \'ascending\' : ( col.sort.direction == desc ? \'descending\' : (!col.sort.direction ? \'none\' : \'other\'))}}"><div role="button" tabindex="0" class="ui-grid-cell-contents ui-grid-header-cell-primary-focus" col-index="renderIndex" title="TOOLTIP"><span class="ui-grid-header-cell-label" ui-grid-one-bind-id-grid="col.uid + \'-header-text\'">{{ col.displayName CUSTOM_FILTERS }}</span> <span ui-grid-one-bind-id-grid="col.uid + \'-sortdir-text\'" ui-grid-visible="col.sort.direction" aria-label="{{getSortDirectionAriaLabel()}}"><i ng-class="{ \'ui-grid-icon-up-dir\': col.sort.direction == asc, \'ui-grid-icon-down-dir\': col.sort.direction == desc, \'ui-grid-icon-blank\': !col.sort.direction }" title="{{isSortPriorityVisible() ? i18n.headerCell.priority + \' \' + ( col.sort.priority + 1 )  : null}}" aria-hidden="true"></i> <sub ui-grid-visible="isSortPriorityVisible()" class="ui-grid-sort-priority-number">{{col.sort.priority + 1}}</sub></span></div><div role="button" tabindex="0" ui-grid-one-bind-id-grid="col.uid + \'-menu-button\'" class="ui-grid-column-menu-button" ng-if="grid.options.enableColumnMenus && !col.isRowHeader  && col.colDef.enableColumnMenu !== false" ng-click="toggleMenu($event)" ng-class="{\'ui-grid-column-menu-button-last-col\': isLastCol}" ui-grid-one-bind-aria-label="i18n.headerCell.aria.columnMenuButtonLabel" aria-haspopup="true"><i class="ui-grid-icon-angle-down" aria-hidden="true">&nbsp;</i></div><div ui-grid-filter></div></div>'),a.put("ui-grid/uiGridMenu",'<div class="ui-grid-menu" ng-if="shown"><style ui-grid-style>{{dynamicStyles}}</style><div class="ui-grid-menu-mid" ng-show="shownMid"><div class="ui-grid-menu-inner"><ul role="menu" class="ui-grid-menu-items"><li ng-repeat="item in menuItems" role="menuitem" ui-grid-menu-item ui-grid-one-bind-id="\'menuitem-\'+$index" action="item.action" name="item.title" active="item.active" icon="item.icon" shown="item.shown" context="item.context" template-url="item.templateUrl" leave-open="item.leaveOpen" screen-reader-only="item.screenReaderOnly"></li></ul></div></div></div>'),a.put("ui-grid/uiGridMenuItem",'<button type="button" class="ui-grid-menu-item" ng-click="itemAction($event, title)" ng-show="itemShown()" ng-class="{ \'ui-grid-menu-item-active\': active(), \'ui-grid-sr-only\': (!focus && screenReaderOnly) }" aria-pressed="{{active()}}" tabindex="0" ng-focus="focus=true" ng-blur="focus=false"><i ng-class="icon" aria-hidden="true">&nbsp;</i> {{ name }}</button>'),a.put("ui-grid/uiGridRenderContainer","<div role=\"grid\" ui-grid-one-bind-id-grid=\"'grid-container'\" class=\"ui-grid-render-container\" ng-style=\"{ 'margin-left': colContainer.getMargin('left') + 'px', 'margin-right': colContainer.getMargin('right') + 'px' }\"><!-- All of these dom elements are replaced in place --><div ui-grid-header></div><div ui-grid-viewport></div><div ng-if=\"colContainer.needsHScrollbarPlaceholder()\" class=\"ui-grid-scrollbar-placeholder\" ng-style=\"{height:colContainer.grid.scrollbarHeight + 'px'}\"></div><ui-grid-footer ng-if=\"grid.options.showColumnFooter\"></ui-grid-footer></div>"),a.put("ui-grid/uiGridViewport",'<div role="rowgroup" class="ui-grid-viewport" ng-style="colContainer.getViewportStyle()"><!-- tbody --><div class="ui-grid-canvas"><div ng-repeat="(rowRenderIndex, row) in rowContainer.renderedRows track by $index" class="ui-grid-row" ng-style="Viewport.rowStyle(rowRenderIndex)"><div role="row" ui-grid-row="row" row-render-index="rowRenderIndex"></div></div></div></div>'),a.put("ui-grid/cellEditor",'<div><form name="inputForm"><input type="INPUT_TYPE" ng-class="\'colt\' + col.uid" ui-grid-editor ng-model="MODEL_COL_FIELD"></form></div>'),a.put("ui-grid/dropdownEditor",'<div><form name="inputForm"><select ng-class="\'colt\' + col.uid" ui-grid-edit-dropdown ng-model="MODEL_COL_FIELD" ng-options="field[editDropdownIdLabel] as field[editDropdownValueLabel] CUSTOM_FILTERS for field in editDropdownOptionsArray"></select></form></div>'),a.put("ui-grid/fileChooserEditor",'<div><form name="inputForm"><input ng-class="\'colt\' + col.uid" ui-grid-edit-file-chooser type="file" id="files" name="files[]" ng-model="MODEL_COL_FIELD"></form></div>'),a.put("ui-grid/expandableRow",'<div ui-grid-expandable-row ng-if="expandableRow.shouldRenderExpand()" class="expandableRow" style="float:left; margin-top: 1px; margin-bottom: 1px" ng-style="{width: (grid.renderContainers.body.getCanvasWidth()) + \'px\', height: row.expandedRowHeight + \'px\'}"></div>'),
a.put("ui-grid/expandableRowHeader",'<div class="ui-grid-row-header-cell ui-grid-expandable-buttons-cell"><div class="ui-grid-cell-contents"><i ng-class="{ \'ui-grid-icon-plus-squared\' : !row.isExpanded, \'ui-grid-icon-minus-squared\' : row.isExpanded }" ng-click="grid.api.expandable.toggleRowExpansion(row.entity)"></i></div></div>'),a.put("ui-grid/expandableScrollFiller","<div ng-if=\"expandableRow.shouldRenderFiller()\" ng-class=\"{scrollFiller:true, scrollFillerClass:(colContainer.name === 'body')}\" ng-style=\"{ width: (grid.getViewportWidth()) + 'px', height: row.expandedRowHeight + 2 + 'px', 'margin-left': grid.options.rowHeader.rowHeaderWidth + 'px' }\"><i class=\"ui-grid-icon-spin5 ui-grid-animate-spin\" ng-style=\"{'margin-top': ( row.expandedRowHeight/2 - 5) + 'px', 'margin-left' : ((grid.getViewportWidth() - grid.options.rowHeader.rowHeaderWidth)/2 - 5) + 'px'}\"></i></div>"),a.put("ui-grid/expandableTopRowHeader",'<div class="ui-grid-row-header-cell ui-grid-expandable-buttons-cell"><div class="ui-grid-cell-contents"><i ng-class="{ \'ui-grid-icon-plus-squared\' : !grid.expandable.expandedAll, \'ui-grid-icon-minus-squared\' : grid.expandable.expandedAll }" ng-click="grid.api.expandable.toggleAllRows()"></i></div></div>'),a.put("ui-grid/csvLink",'<span class="ui-grid-exporter-csv-link-span"><a href="data:text/csv;charset=UTF-8,CSV_CONTENT" download="FILE_NAME">LINK_LABEL</a></span>'),a.put("ui-grid/importerMenuItem",'<li class="ui-grid-menu-item"><form><input class="ui-grid-importer-file-chooser" type="file" id="files" name="files[]"></form></li>'),a.put("ui-grid/importerMenuItemContainer","<div ui-grid-importer-menu-item></div>"),a.put("ui-grid/pagination",'<div role="contentinfo" class="ui-grid-pager-panel" ui-grid-pager ng-show="grid.options.enablePaginationControls"><div role="navigation" class="ui-grid-pager-container"><div role="menubar" class="ui-grid-pager-control"><button type="button" role="menuitem" class="ui-grid-pager-first" ui-grid-one-bind-title="aria.pageToFirst" ui-grid-one-bind-aria-label="aria.pageToFirst" ng-click="pageFirstPageClick()" ng-disabled="cantPageBackward()"><div ng-class="grid.isRTL() ? \'last-triangle\' : \'first-triangle\'"><div ng-class="grid.isRTL() ? \'last-bar-rtl\' : \'first-bar\'"></div></div></button> <button type="button" role="menuitem" class="ui-grid-pager-previous" ui-grid-one-bind-title="aria.pageBack" ui-grid-one-bind-aria-label="aria.pageBack" ng-click="pagePreviousPageClick()" ng-disabled="cantPageBackward()"><div ng-class="grid.isRTL() ? \'last-triangle prev-triangle\' : \'first-triangle prev-triangle\'"></div></button> <input type="number" ui-grid-one-bind-title="aria.pageSelected" ui-grid-one-bind-aria-label="aria.pageSelected" class="ui-grid-pager-control-input" ng-model="grid.options.paginationCurrentPage" min="1" max="{{ paginationApi.getTotalPages() }}" required> <span class="ui-grid-pager-max-pages-number" ng-show="paginationApi.getTotalPages() > 0"><abbr ui-grid-one-bind-title="paginationOf">/</abbr> {{ paginationApi.getTotalPages() }}</span> <button type="button" role="menuitem" class="ui-grid-pager-next" ui-grid-one-bind-title="aria.pageForward" ui-grid-one-bind-aria-label="aria.pageForward" ng-click="pageNextPageClick()" ng-disabled="cantPageForward()"><div ng-class="grid.isRTL() ? \'first-triangle next-triangle\' : \'last-triangle next-triangle\'"></div></button> <button type="button" role="menuitem" class="ui-grid-pager-last" ui-grid-one-bind-title="aria.pageToLast" ui-grid-one-bind-aria-label="aria.pageToLast" ng-click="pageLastPageClick()" ng-disabled="cantPageToLast()"><div ng-class="grid.isRTL() ? \'first-triangle\' : \'last-triangle\'"><div ng-class="grid.isRTL() ? \'first-bar-rtl\' : \'last-bar\'"></div></div></button></div><div class="ui-grid-pager-row-count-picker" ng-if="grid.options.paginationPageSizes.length > 1"><select ui-grid-one-bind-aria-labelledby-grid="\'items-per-page-label\'" ng-model="grid.options.paginationPageSize" ng-options="o as o for o in grid.options.paginationPageSizes"></select><span ui-grid-one-bind-id-grid="\'items-per-page-label\'" class="ui-grid-pager-row-count-label">&nbsp;{{sizesLabel}}</span></div><span ng-if="grid.options.paginationPageSizes.length <= 1" class="ui-grid-pager-row-count-label">{{grid.options.paginationPageSize}}&nbsp;{{sizesLabel}}</span></div><div class="ui-grid-pager-count-container"><div class="ui-grid-pager-count"><span ng-show="grid.options.totalItems > 0">{{showingLow}} <abbr ui-grid-one-bind-title="paginationThrough">-</abbr> {{showingHigh}} {{paginationOf}} {{grid.options.totalItems}} {{totalItemsLabel}}</span></div></div></div>'),a.put("ui-grid/columnResizer",'<div ui-grid-column-resizer ng-if="grid.options.enableColumnResizing" class="ui-grid-column-resizer" col="col" position="right" render-index="renderIndex" unselectable="on"></div>'),a.put("ui-grid/gridFooterSelectedItems",'<span ng-if="grid.selection.selectedCount !== 0 && grid.options.enableFooterTotalSelected">({{"search.selectedItems" | t}} {{grid.selection.selectedCount}})</span>'),a.put("ui-grid/selectionHeaderCell",'<div><!-- <div class="ui-grid-vertical-bar">&nbsp;</div> --><div class="ui-grid-cell-contents" col-index="renderIndex"><ui-grid-selection-select-all-buttons ng-if="grid.options.enableSelectAll"></ui-grid-selection-select-all-buttons></div></div>'),a.put("ui-grid/selectionRowHeader",'<div class="ui-grid-disable-selection"><div class="ui-grid-cell-contents"><ui-grid-selection-row-header-buttons></ui-grid-selection-row-header-buttons></div></div>'),a.put("ui-grid/selectionRowHeaderButtons",'<div class="ui-grid-selection-row-header-buttons ui-grid-icon-ok" ng-class="{\'ui-grid-row-selected\': row.isSelected}" ng-click="selectButtonClick(row, $event)">&nbsp;</div>'),a.put("ui-grid/selectionSelectAllButtons",'<div class="ui-grid-selection-row-header-buttons ui-grid-icon-ok" ng-class="{\'ui-grid-all-selected\': grid.selection.selectAll}" ng-click="headerButtonClick($event)"></div>'),a.put("ui-grid/treeBaseExpandAllButtons",'<div class="ui-grid-tree-base-row-header-buttons" ng-class="{\'ui-grid-icon-minus-squared\': grid.treeBase.numberLevels > 0 && grid.treeBase.expandAll, \'ui-grid-icon-plus-squared\': grid.treeBase.numberLevels > 0 && !grid.treeBase.expandAll}" ng-click="headerButtonClick($event)"></div>'),a.put("ui-grid/treeBaseHeaderCell",'<div><div class="ui-grid-cell-contents" col-index="renderIndex"><ui-grid-tree-base-expand-all-buttons ng-if="grid.options.enableExpandAll"></ui-grid-tree-base-expand-all-buttons></div></div>'),a.put("ui-grid/treeBaseRowHeader",'<div class="ui-grid-cell-contents"><ui-grid-tree-base-row-header-buttons></ui-grid-tree-base-row-header-buttons></div>'),a.put("ui-grid/treeBaseRowHeaderButtons","<div class=\"ui-grid-tree-base-row-header-buttons\" ng-class=\"{'ui-grid-tree-base-header': row.treeLevel > -1 }\" ng-click=\"treeButtonClick(row, $event)\"><i ng-class=\"{'ui-grid-icon-minus-squared': ( ( grid.options.showTreeExpandNoChildren && row.treeLevel > -1 ) || ( row.treeNode.children && row.treeNode.children.length > 0 ) ) && row.treeNode.state === 'expanded', 'ui-grid-icon-plus-squared': ( ( grid.options.showTreeExpandNoChildren && row.treeLevel > -1 ) || ( row.treeNode.children && row.treeNode.children.length > 0 ) ) && row.treeNode.state === 'collapsed'}\" ng-style=\"{'padding-left': grid.options.treeIndent * row.treeLevel + 'px'}\"></i> &nbsp;</div>"),a.put("ui-grid/cellTitleValidator",'<div class="ui-grid-cell-contents" ng-class="{invalid:grid.validate.isInvalid(row.entity,col.colDef)}" title="{{grid.validate.getTitleFormattedErrors(row.entity,col.colDef)}}">{{COL_FIELD CUSTOM_FILTERS}}</div>'),a.put("ui-grid/cellTooltipValidator",'<div class="ui-grid-cell-contents" ng-class="{invalid:grid.validate.isInvalid(row.entity,col.colDef)}" tooltip-html-unsafe="{{grid.validate.getFormattedErrors(row.entity,col.colDef)}}" tooltip-enable="grid.validate.isInvalid(row.entity,col.colDef)" tooltip-append-to-body="true" tooltip-placement="top" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>')}]);


/**
 * @license AngularJS v1.5.7
 * (c) 2010-2016 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular) {'use strict';

/* global ngTouchClickDirectiveFactory: false,
 */

/**
 * @ngdoc module
 * @name ngTouch
 * @description
 *
 * # ngTouch
 *
 * The `ngTouch` module provides touch events and other helpers for touch-enabled devices.
 * The implementation is based on jQuery Mobile touch event handling
 * ([jquerymobile.com](http://jquerymobile.com/)).
 *
 *
 * See {@link ngTouch.$swipe `$swipe`} for usage.
 *
 * <div doc-module-components="ngTouch"></div>
 *
 */

// define ngTouch module
/* global -ngTouch */
var ngTouch = angular.module('ngTouch', []);

ngTouch.provider('$touch', $TouchProvider);

function nodeName_(element) {
  return angular.lowercase(element.nodeName || (element[0] && element[0].nodeName));
}

/**
 * @ngdoc provider
 * @name $touchProvider
 *
 * @description
 * The `$touchProvider` allows enabling / disabling {@link ngTouch.ngClick ngTouch's ngClick directive}.
 */
$TouchProvider.$inject = ['$provide', '$compileProvider'];
function $TouchProvider($provide, $compileProvider) {

  /**
   * @ngdoc method
   * @name  $touchProvider#ngClickOverrideEnabled
   *
   * @param {boolean=} enabled update the ngClickOverrideEnabled state if provided, otherwise just return the
   * current ngClickOverrideEnabled state
   * @returns {*} current value if used as getter or itself (chaining) if used as setter
   *
   * @kind function
   *
   * @description
   * Call this method to enable/disable {@link ngTouch.ngClick ngTouch's ngClick directive}. If enabled,
   * the default ngClick directive will be replaced by a version that eliminates the 300ms delay for
   * click events on browser for touch-devices.
   *
   * The default is `false`.
   *
   */
  var ngClickOverrideEnabled = false;
  var ngClickDirectiveAdded = false;
  this.ngClickOverrideEnabled = function(enabled) {
    if (angular.isDefined(enabled)) {

      if (enabled && !ngClickDirectiveAdded) {
        ngClickDirectiveAdded = true;

        // Use this to identify the correct directive in the delegate
        ngTouchClickDirectiveFactory.$$moduleName = 'ngTouch';
        $compileProvider.directive('ngClick', ngTouchClickDirectiveFactory);

        $provide.decorator('ngClickDirective', ['$delegate', function($delegate) {
          if (ngClickOverrideEnabled) {
            // drop the default ngClick directive
            $delegate.shift();
          } else {
            // drop the ngTouch ngClick directive if the override has been re-disabled (because
            // we cannot de-register added directives)
            var i = $delegate.length - 1;
            while (i >= 0) {
              if ($delegate[i].$$moduleName === 'ngTouch') {
                $delegate.splice(i, 1);
                break;
              }
              i--;
            }
          }

          return $delegate;
        }]);
      }

      ngClickOverrideEnabled = enabled;
      return this;
    }

    return ngClickOverrideEnabled;
  };

  /**
  * @ngdoc service
  * @name $touch
  * @kind object
  *
  * @description
  * Provides the {@link ngTouch.$touch#ngClickOverrideEnabled `ngClickOverrideEnabled`} method.
  *
  */
  this.$get = function() {
    return {
      /**
       * @ngdoc method
       * @name  $touch#ngClickOverrideEnabled
       *
       * @returns {*} current value of `ngClickOverrideEnabled` set in the {@link ngTouch.$touchProvider $touchProvider},
       * i.e. if {@link ngTouch.ngClick ngTouch's ngClick} directive is enabled.
       *
       * @kind function
       */
      ngClickOverrideEnabled: function() {
        return ngClickOverrideEnabled;
      }
    };
  };

}

/* global ngTouch: false */

    /**
     * @ngdoc service
     * @name $swipe
     *
     * @description
     * The `$swipe` service is a service that abstracts the messier details of hold-and-drag swipe
     * behavior, to make implementing swipe-related directives more convenient.
     *
     * Requires the {@link ngTouch `ngTouch`} module to be installed.
     *
     * `$swipe` is used by the `ngSwipeLeft` and `ngSwipeRight` directives in `ngTouch`.
     *
     * # Usage
     * The `$swipe` service is an object with a single method: `bind`. `bind` takes an element
     * which is to be watched for swipes, and an object with four handler functions. See the
     * documentation for `bind` below.
     */

ngTouch.factory('$swipe', [function() {
  // The total distance in any direction before we make the call on swipe vs. scroll.
  var MOVE_BUFFER_RADIUS = 10;

  var POINTER_EVENTS = {
    'mouse': {
      start: 'mousedown',
      move: 'mousemove',
      end: 'mouseup'
    },
    'touch': {
      start: 'touchstart',
      move: 'touchmove',
      end: 'touchend',
      cancel: 'touchcancel'
    }
  };

  function getCoordinates(event) {
    var originalEvent = event.originalEvent || event;
    var touches = originalEvent.touches && originalEvent.touches.length ? originalEvent.touches : [originalEvent];
    var e = (originalEvent.changedTouches && originalEvent.changedTouches[0]) || touches[0];

    return {
      x: e.clientX,
      y: e.clientY
    };
  }

  function getEvents(pointerTypes, eventType) {
    var res = [];
    angular.forEach(pointerTypes, function(pointerType) {
      var eventName = POINTER_EVENTS[pointerType][eventType];
      if (eventName) {
        res.push(eventName);
      }
    });
    return res.join(' ');
  }

  return {
    /**
     * @ngdoc method
     * @name $swipe#bind
     *
     * @description
     * The main method of `$swipe`. It takes an element to be watched for swipe motions, and an
     * object containing event handlers.
     * The pointer types that should be used can be specified via the optional
     * third argument, which is an array of strings `'mouse'` and `'touch'`. By default,
     * `$swipe` will listen for `mouse` and `touch` events.
     *
     * The four events are `start`, `move`, `end`, and `cancel`. `start`, `move`, and `end`
     * receive as a parameter a coordinates object of the form `{ x: 150, y: 310 }` and the raw
     * `event`. `cancel` receives the raw `event` as its single parameter.
     *
     * `start` is called on either `mousedown` or `touchstart`. After this event, `$swipe` is
     * watching for `touchmove` or `mousemove` events. These events are ignored until the total
     * distance moved in either dimension exceeds a small threshold.
     *
     * Once this threshold is exceeded, either the horizontal or vertical delta is greater.
     * - If the horizontal distance is greater, this is a swipe and `move` and `end` events follow.
     * - If the vertical distance is greater, this is a scroll, and we let the browser take over.
     *   A `cancel` event is sent.
     *
     * `move` is called on `mousemove` and `touchmove` after the above logic has determined that
     * a swipe is in progress.
     *
     * `end` is called when a swipe is successfully completed with a `touchend` or `mouseup`.
     *
     * `cancel` is called either on a `touchcancel` from the browser, or when we begin scrolling
     * as described above.
     *
     */
    bind: function(element, eventHandlers, pointerTypes) {
      // Absolute total movement, used to control swipe vs. scroll.
      var totalX, totalY;
      // Coordinates of the start position.
      var startCoords;
      // Last event's position.
      var lastPos;
      // Whether a swipe is active.
      var active = false;

      pointerTypes = pointerTypes || ['mouse', 'touch'];
      element.on(getEvents(pointerTypes, 'start'), function(event) {
        startCoords = getCoordinates(event);
        active = true;
        totalX = 0;
        totalY = 0;
        lastPos = startCoords;
        eventHandlers['start'] && eventHandlers['start'](startCoords, event);
      });
      var events = getEvents(pointerTypes, 'cancel');
      if (events) {
        element.on(events, function(event) {
          active = false;
          eventHandlers['cancel'] && eventHandlers['cancel'](event);
        });
      }

      element.on(getEvents(pointerTypes, 'move'), function(event) {
        if (!active) return;

        // Android will send a touchcancel if it thinks we're starting to scroll.
        // So when the total distance (+ or - or both) exceeds 10px in either direction,
        // we either:
        // - On totalX > totalY, we send preventDefault() and treat this as a swipe.
        // - On totalY > totalX, we let the browser handle it as a scroll.

        if (!startCoords) return;
        var coords = getCoordinates(event);

        totalX += Math.abs(coords.x - lastPos.x);
        totalY += Math.abs(coords.y - lastPos.y);

        lastPos = coords;

        if (totalX < MOVE_BUFFER_RADIUS && totalY < MOVE_BUFFER_RADIUS) {
          return;
        }

        // One of totalX or totalY has exceeded the buffer, so decide on swipe vs. scroll.
        if (totalY > totalX) {
          // Allow native scrolling to take over.
          active = false;
          eventHandlers['cancel'] && eventHandlers['cancel'](event);
          return;
        } else {
          // Prevent the browser from scrolling.
          event.preventDefault();
          eventHandlers['move'] && eventHandlers['move'](coords, event);
        }
      });

      element.on(getEvents(pointerTypes, 'end'), function(event) {
        if (!active) return;
        active = false;
        eventHandlers['end'] && eventHandlers['end'](getCoordinates(event), event);
      });
    }
  };
}]);

/* global ngTouch: false,
  nodeName_: false
*/

/**
 * @ngdoc directive
 * @name ngClick
 * @deprecated
 *
 * @description
 * <div class="alert alert-danger">
 * **DEPRECATION NOTICE**: Beginning with Angular 1.5, this directive is deprecated and by default **disabled**.
 * The directive will receive no further support and might be removed from future releases.
 * If you need the directive, you can enable it with the {@link ngTouch.$touchProvider $touchProvider#ngClickOverrideEnabled}
 * function. We also recommend that you migrate to [FastClick](https://github.com/ftlabs/fastclick).
 * To learn more about the 300ms delay, this [Telerik article](http://developer.telerik.com/featured/300-ms-click-delay-ios-8/)
 * gives a good overview.
 * </div>
 * A more powerful replacement for the default ngClick designed to be used on touchscreen
 * devices. Most mobile browsers wait about 300ms after a tap-and-release before sending
 * the click event. This version handles them immediately, and then prevents the
 * following click event from propagating.
 *
 * Requires the {@link ngTouch `ngTouch`} module to be installed.
 *
 * This directive can fall back to using an ordinary click event, and so works on desktop
 * browsers as well as mobile.
 *
 * This directive also sets the CSS class `ng-click-active` while the element is being held
 * down (by a mouse click or touch) so you can restyle the depressed element if you wish.
 *
 * @element ANY
 * @param {expression} ngClick {@link guide/expression Expression} to evaluate
 * upon tap. (Event object is available as `$event`)
 *
 * @example
    <example module="ngClickExample" deps="angular-touch.js">
      <file name="index.html">
        <button ng-click="count = count + 1" ng-init="count=0">
          Increment
        </button>
        count: {{ count }}
      </file>
      <file name="script.js">
        angular.module('ngClickExample', ['ngTouch']);
      </file>
    </example>
 */

var ngTouchClickDirectiveFactory = ['$parse', '$timeout', '$rootElement',
    function($parse, $timeout, $rootElement) {
  var TAP_DURATION = 750; // Shorter than 750ms is a tap, longer is a taphold or drag.
  var MOVE_TOLERANCE = 12; // 12px seems to work in most mobile browsers.
  var PREVENT_DURATION = 2500; // 2.5 seconds maximum from preventGhostClick call to click
  var CLICKBUSTER_THRESHOLD = 25; // 25 pixels in any dimension is the limit for busting clicks.

  var ACTIVE_CLASS_NAME = 'ng-click-active';
  var lastPreventedTime;
  var touchCoordinates;
  var lastLabelClickCoordinates;


  // TAP EVENTS AND GHOST CLICKS
  //
  // Why tap events?
  // Mobile browsers detect a tap, then wait a moment (usually ~300ms) to see if you're
  // double-tapping, and then fire a click event.
  //
  // This delay sucks and makes mobile apps feel unresponsive.
  // So we detect touchstart, touchcancel and touchend ourselves and determine when
  // the user has tapped on something.
  //
  // What happens when the browser then generates a click event?
  // The browser, of course, also detects the tap and fires a click after a delay. This results in
  // tapping/clicking twice. We do "clickbusting" to prevent it.
  //
  // How does it work?
  // We attach global touchstart and click handlers, that run during the capture (early) phase.
  // So the sequence for a tap is:
  // - global touchstart: Sets an "allowable region" at the point touched.
  // - element's touchstart: Starts a touch
  // (- touchcancel ends the touch, no click follows)
  // - element's touchend: Determines if the tap is valid (didn't move too far away, didn't hold
  //   too long) and fires the user's tap handler. The touchend also calls preventGhostClick().
  // - preventGhostClick() removes the allowable region the global touchstart created.
  // - The browser generates a click event.
  // - The global click handler catches the click, and checks whether it was in an allowable region.
  //     - If preventGhostClick was called, the region will have been removed, the click is busted.
  //     - If the region is still there, the click proceeds normally. Therefore clicks on links and
  //       other elements without ngTap on them work normally.
  //
  // This is an ugly, terrible hack!
  // Yeah, tell me about it. The alternatives are using the slow click events, or making our users
  // deal with the ghost clicks, so I consider this the least of evils. Fortunately Angular
  // encapsulates this ugly logic away from the user.
  //
  // Why not just put click handlers on the element?
  // We do that too, just to be sure. If the tap event caused the DOM to change,
  // it is possible another element is now in that position. To take account for these possibly
  // distinct elements, the handlers are global and care only about coordinates.

  // Checks if the coordinates are close enough to be within the region.
  function hit(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) < CLICKBUSTER_THRESHOLD && Math.abs(y1 - y2) < CLICKBUSTER_THRESHOLD;
  }

  // Checks a list of allowable regions against a click location.
  // Returns true if the click should be allowed.
  // Splices out the allowable region from the list after it has been used.
  function checkAllowableRegions(touchCoordinates, x, y) {
    for (var i = 0; i < touchCoordinates.length; i += 2) {
      if (hit(touchCoordinates[i], touchCoordinates[i + 1], x, y)) {
        touchCoordinates.splice(i, i + 2);
        return true; // allowable region
      }
    }
    return false; // No allowable region; bust it.
  }

  // Global click handler that prevents the click if it's in a bustable zone and preventGhostClick
  // was called recently.
  function onClick(event) {
    if (Date.now() - lastPreventedTime > PREVENT_DURATION) {
      return; // Too old.
    }

    var touches = event.touches && event.touches.length ? event.touches : [event];
    var x = touches[0].clientX;
    var y = touches[0].clientY;
    // Work around desktop Webkit quirk where clicking a label will fire two clicks (on the label
    // and on the input element). Depending on the exact browser, this second click we don't want
    // to bust has either (0,0), negative coordinates, or coordinates equal to triggering label
    // click event
    if (x < 1 && y < 1) {
      return; // offscreen
    }
    if (lastLabelClickCoordinates &&
        lastLabelClickCoordinates[0] === x && lastLabelClickCoordinates[1] === y) {
      return; // input click triggered by label click
    }
    // reset label click coordinates on first subsequent click
    if (lastLabelClickCoordinates) {
      lastLabelClickCoordinates = null;
    }
    // remember label click coordinates to prevent click busting of trigger click event on input
    if (nodeName_(event.target) === 'label') {
      lastLabelClickCoordinates = [x, y];
    }

    // Look for an allowable region containing this click.
    // If we find one, that means it was created by touchstart and not removed by
    // preventGhostClick, so we don't bust it.
    if (checkAllowableRegions(touchCoordinates, x, y)) {
      return;
    }

    // If we didn't find an allowable region, bust the click.
    event.stopPropagation();
    event.preventDefault();

    // Blur focused form elements
    event.target && event.target.blur && event.target.blur();
  }


  // Global touchstart handler that creates an allowable region for a click event.
  // This allowable region can be removed by preventGhostClick if we want to bust it.
  function onTouchStart(event) {
    var touches = event.touches && event.touches.length ? event.touches : [event];
    var x = touches[0].clientX;
    var y = touches[0].clientY;
    touchCoordinates.push(x, y);

    $timeout(function() {
      // Remove the allowable region.
      for (var i = 0; i < touchCoordinates.length; i += 2) {
        if (touchCoordinates[i] == x && touchCoordinates[i + 1] == y) {
          touchCoordinates.splice(i, i + 2);
          return;
        }
      }
    }, PREVENT_DURATION, false);
  }

  // On the first call, attaches some event handlers. Then whenever it gets called, it creates a
  // zone around the touchstart where clicks will get busted.
  function preventGhostClick(x, y) {
    if (!touchCoordinates) {
      $rootElement[0].addEventListener('click', onClick, true);
      $rootElement[0].addEventListener('touchstart', onTouchStart, true);
      touchCoordinates = [];
    }

    lastPreventedTime = Date.now();

    checkAllowableRegions(touchCoordinates, x, y);
  }

  // Actual linking function.
  return function(scope, element, attr) {
    var clickHandler = $parse(attr.ngClick),
        tapping = false,
        tapElement,  // Used to blur the element after a tap.
        startTime,   // Used to check if the tap was held too long.
        touchStartX,
        touchStartY;

    function resetState() {
      tapping = false;
      element.removeClass(ACTIVE_CLASS_NAME);
    }

    element.on('touchstart', function(event) {
      tapping = true;
      tapElement = event.target ? event.target : event.srcElement; // IE uses srcElement.
      // Hack for Safari, which can target text nodes instead of containers.
      if (tapElement.nodeType == 3) {
        tapElement = tapElement.parentNode;
      }

      element.addClass(ACTIVE_CLASS_NAME);

      startTime = Date.now();

      // Use jQuery originalEvent
      var originalEvent = event.originalEvent || event;
      var touches = originalEvent.touches && originalEvent.touches.length ? originalEvent.touches : [originalEvent];
      var e = touches[0];
      touchStartX = e.clientX;
      touchStartY = e.clientY;
    });

    element.on('touchcancel', function(event) {
      resetState();
    });

    element.on('touchend', function(event) {
      var diff = Date.now() - startTime;

      // Use jQuery originalEvent
      var originalEvent = event.originalEvent || event;
      var touches = (originalEvent.changedTouches && originalEvent.changedTouches.length) ?
          originalEvent.changedTouches :
          ((originalEvent.touches && originalEvent.touches.length) ? originalEvent.touches : [originalEvent]);
      var e = touches[0];
      var x = e.clientX;
      var y = e.clientY;
      var dist = Math.sqrt(Math.pow(x - touchStartX, 2) + Math.pow(y - touchStartY, 2));

      if (tapping && diff < TAP_DURATION && dist < MOVE_TOLERANCE) {
        // Call preventGhostClick so the clickbuster will catch the corresponding click.
        preventGhostClick(x, y);

        // Blur the focused element (the button, probably) before firing the callback.
        // This doesn't work perfectly on Android Chrome, but seems to work elsewhere.
        // I couldn't get anything to work reliably on Android Chrome.
        if (tapElement) {
          tapElement.blur();
        }

        if (!angular.isDefined(attr.disabled) || attr.disabled === false) {
          element.triggerHandler('click', [event]);
        }
      }

      resetState();
    });

    // Hack for iOS Safari's benefit. It goes searching for onclick handlers and is liable to click
    // something else nearby.
    element.onclick = function(event) { };

    // Actual click handler.
    // There are three different kinds of clicks, only two of which reach this point.
    // - On desktop browsers without touch events, their clicks will always come here.
    // - On mobile browsers, the simulated "fast" click will call this.
    // - But the browser's follow-up slow click will be "busted" before it reaches this handler.
    // Therefore it's safe to use this directive on both mobile and desktop.
    element.on('click', function(event, touchend) {
      scope.$apply(function() {
        clickHandler(scope, {$event: (touchend || event)});
      });
    });

    element.on('mousedown', function(event) {
      element.addClass(ACTIVE_CLASS_NAME);
    });

    element.on('mousemove mouseup', function(event) {
      element.removeClass(ACTIVE_CLASS_NAME);
    });

  };
}];

/* global ngTouch: false */

/**
 * @ngdoc directive
 * @name ngSwipeLeft
 *
 * @description
 * Specify custom behavior when an element is swiped to the left on a touchscreen device.
 * A leftward swipe is a quick, right-to-left slide of the finger.
 * Though ngSwipeLeft is designed for touch-based devices, it will work with a mouse click and drag
 * too.
 *
 * To disable the mouse click and drag functionality, add `ng-swipe-disable-mouse` to
 * the `ng-swipe-left` or `ng-swipe-right` DOM Element.
 *
 * Requires the {@link ngTouch `ngTouch`} module to be installed.
 *
 * @element ANY
 * @param {expression} ngSwipeLeft {@link guide/expression Expression} to evaluate
 * upon left swipe. (Event object is available as `$event`)
 *
 * @example
    <example module="ngSwipeLeftExample" deps="angular-touch.js">
      <file name="index.html">
        <div ng-show="!showActions" ng-swipe-left="showActions = true">
          Some list content, like an email in the inbox
        </div>
        <div ng-show="showActions" ng-swipe-right="showActions = false">
          <button ng-click="reply()">Reply</button>
          <button ng-click="delete()">Delete</button>
        </div>
      </file>
      <file name="script.js">
        angular.module('ngSwipeLeftExample', ['ngTouch']);
      </file>
    </example>
 */

/**
 * @ngdoc directive
 * @name ngSwipeRight
 *
 * @description
 * Specify custom behavior when an element is swiped to the right on a touchscreen device.
 * A rightward swipe is a quick, left-to-right slide of the finger.
 * Though ngSwipeRight is designed for touch-based devices, it will work with a mouse click and drag
 * too.
 *
 * Requires the {@link ngTouch `ngTouch`} module to be installed.
 *
 * @element ANY
 * @param {expression} ngSwipeRight {@link guide/expression Expression} to evaluate
 * upon right swipe. (Event object is available as `$event`)
 *
 * @example
    <example module="ngSwipeRightExample" deps="angular-touch.js">
      <file name="index.html">
        <div ng-show="!showActions" ng-swipe-left="showActions = true">
          Some list content, like an email in the inbox
        </div>
        <div ng-show="showActions" ng-swipe-right="showActions = false">
          <button ng-click="reply()">Reply</button>
          <button ng-click="delete()">Delete</button>
        </div>
      </file>
      <file name="script.js">
        angular.module('ngSwipeRightExample', ['ngTouch']);
      </file>
    </example>
 */

function makeSwipeDirective(directiveName, direction, eventName) {
  ngTouch.directive(directiveName, ['$parse', '$swipe', function($parse, $swipe) {
    // The maximum vertical delta for a swipe should be less than 75px.
    var MAX_VERTICAL_DISTANCE = 75;
    // Vertical distance should not be more than a fraction of the horizontal distance.
    var MAX_VERTICAL_RATIO = 0.3;
    // At least a 30px lateral motion is necessary for a swipe.
    var MIN_HORIZONTAL_DISTANCE = 30;

    return function(scope, element, attr) {
      var swipeHandler = $parse(attr[directiveName]);

      var startCoords, valid;

      function validSwipe(coords) {
        // Check that it's within the coordinates.
        // Absolute vertical distance must be within tolerances.
        // Horizontal distance, we take the current X - the starting X.
        // This is negative for leftward swipes and positive for rightward swipes.
        // After multiplying by the direction (-1 for left, +1 for right), legal swipes
        // (ie. same direction as the directive wants) will have a positive delta and
        // illegal ones a negative delta.
        // Therefore this delta must be positive, and larger than the minimum.
        if (!startCoords) return false;
        var deltaY = Math.abs(coords.y - startCoords.y);
        var deltaX = (coords.x - startCoords.x) * direction;
        return valid && // Short circuit for already-invalidated swipes.
            deltaY < MAX_VERTICAL_DISTANCE &&
            deltaX > 0 &&
            deltaX > MIN_HORIZONTAL_DISTANCE &&
            deltaY / deltaX < MAX_VERTICAL_RATIO;
      }

      var pointerTypes = ['touch'];
      if (!angular.isDefined(attr['ngSwipeDisableMouse'])) {
        pointerTypes.push('mouse');
      }
      $swipe.bind(element, {
        'start': function(coords, event) {
          startCoords = coords;
          valid = true;
        },
        'cancel': function(event) {
          valid = false;
        },
        'end': function(coords, event) {
          if (validSwipe(coords)) {
            scope.$apply(function() {
              element.triggerHandler(eventName);
              swipeHandler(scope, {$event: event});
            });
          }
        }
      }, pointerTypes);
    };
  }]);
}

// Left is negative X-coordinate, right is positive.
makeSwipeDirective('ngSwipeLeft', -1, 'swipeleft');
makeSwipeDirective('ngSwipeRight', 1, 'swiperight');



})(window, window.angular);



/**
 * @license AngularJS v1.5.7
 * (c) 2010-2016 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular) {'use strict';

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *     Any commits to this file should be reviewed with security in mind.  *
 *   Changes to this file can potentially create security vulnerabilities. *
 *          An approval from 2 Core members with history of modifying      *
 *                         this file is required.                          *
 *                                                                         *
 *  Does the change somehow allow for arbitrary javascript to be executed? *
 *    Or allows for someone to change the prototype of built-in objects?   *
 *     Or gives undesired access to variables likes document or window?    *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

var $sanitizeMinErr = angular.$$minErr('$sanitize');

/**
 * @ngdoc module
 * @name ngSanitize
 * @description
 *
 * # ngSanitize
 *
 * The `ngSanitize` module provides functionality to sanitize HTML.
 *
 *
 * <div doc-module-components="ngSanitize"></div>
 *
 * See {@link ngSanitize.$sanitize `$sanitize`} for usage.
 */

/**
 * @ngdoc service
 * @name $sanitize
 * @kind function
 *
 * @description
 *   Sanitizes an html string by stripping all potentially dangerous tokens.
 *
 *   The input is sanitized by parsing the HTML into tokens. All safe tokens (from a whitelist) are
 *   then serialized back to properly escaped html string. This means that no unsafe input can make
 *   it into the returned string.
 *
 *   The whitelist for URL sanitization of attribute values is configured using the functions
 *   `aHrefSanitizationWhitelist` and `imgSrcSanitizationWhitelist` of {@link ng.$compileProvider
 *   `$compileProvider`}.
 *
 *   The input may also contain SVG markup if this is enabled via {@link $sanitizeProvider}.
 *
 * @param {string} html HTML input.
 * @returns {string} Sanitized HTML.
 *
 * @example
   <example module="sanitizeExample" deps="angular-sanitize.js">
   <file name="index.html">
     <script>
         angular.module('sanitizeExample', ['ngSanitize'])
           .controller('ExampleController', ['$scope', '$sce', function($scope, $sce) {
             $scope.snippet =
               '<p style="color:blue">an html\n' +
               '<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
               'snippet</p>';
             $scope.deliberatelyTrustDangerousSnippet = function() {
               return $sce.trustAsHtml($scope.snippet);
             };
           }]);
     </script>
     <div ng-controller="ExampleController">
        Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
       <table>
         <tr>
           <td>Directive</td>
           <td>How</td>
           <td>Source</td>
           <td>Rendered</td>
         </tr>
         <tr id="bind-html-with-sanitize">
           <td>ng-bind-html</td>
           <td>Automatically uses $sanitize</td>
           <td><pre>&lt;div ng-bind-html="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
           <td><div ng-bind-html="snippet"></div></td>
         </tr>
         <tr id="bind-html-with-trust">
           <td>ng-bind-html</td>
           <td>Bypass $sanitize by explicitly trusting the dangerous value</td>
           <td>
           <pre>&lt;div ng-bind-html="deliberatelyTrustDangerousSnippet()"&gt;
&lt;/div&gt;</pre>
           </td>
           <td><div ng-bind-html="deliberatelyTrustDangerousSnippet()"></div></td>
         </tr>
         <tr id="bind-default">
           <td>ng-bind</td>
           <td>Automatically escapes</td>
           <td><pre>&lt;div ng-bind="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
           <td><div ng-bind="snippet"></div></td>
         </tr>
       </table>
       </div>
   </file>
   <file name="protractor.js" type="protractor">
     it('should sanitize the html snippet by default', function() {
       expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
         toBe('<p>an html\n<em>click here</em>\nsnippet</p>');
     });

     it('should inline raw snippet if bound to a trusted value', function() {
       expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).
         toBe("<p style=\"color:blue\">an html\n" +
              "<em onmouseover=\"this.textContent='PWN3D!'\">click here</em>\n" +
              "snippet</p>");
     });

     it('should escape snippet without any filter', function() {
       expect(element(by.css('#bind-default div')).getInnerHtml()).
         toBe("&lt;p style=\"color:blue\"&gt;an html\n" +
              "&lt;em onmouseover=\"this.textContent='PWN3D!'\"&gt;click here&lt;/em&gt;\n" +
              "snippet&lt;/p&gt;");
     });

     it('should update', function() {
       element(by.model('snippet')).clear();
       element(by.model('snippet')).sendKeys('new <b onclick="alert(1)">text</b>');
       expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
         toBe('new <b>text</b>');
       expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).toBe(
         'new <b onclick="alert(1)">text</b>');
       expect(element(by.css('#bind-default div')).getInnerHtml()).toBe(
         "new &lt;b onclick=\"alert(1)\"&gt;text&lt;/b&gt;");
     });
   </file>
   </example>
 */


/**
 * @ngdoc provider
 * @name $sanitizeProvider
 *
 * @description
 * Creates and configures {@link $sanitize} instance.
 */
function $SanitizeProvider() {
  var svgEnabled = false;

  this.$get = ['$$sanitizeUri', function($$sanitizeUri) {
    if (svgEnabled) {
      angular.extend(validElements, svgElements);
    }
    return function(html) {
      var buf = [];
      htmlParser(html, htmlSanitizeWriter(buf, function(uri, isImage) {
        return !/^unsafe:/.test($$sanitizeUri(uri, isImage));
      }));
      return buf.join('');
    };
  }];


  /**
   * @ngdoc method
   * @name $sanitizeProvider#enableSvg
   * @kind function
   *
   * @description
   * Enables a subset of svg to be supported by the sanitizer.
   *
   * <div class="alert alert-warning">
   *   <p>By enabling this setting without taking other precautions, you might expose your
   *   application to click-hijacking attacks. In these attacks, sanitized svg elements could be positioned
   *   outside of the containing element and be rendered over other elements on the page (e.g. a login
   *   link). Such behavior can then result in phishing incidents.</p>
   *
   *   <p>To protect against these, explicitly setup `overflow: hidden` css rule for all potential svg
   *   tags within the sanitized content:</p>
   *
   *   <br>
   *
   *   <pre><code>
   *   .rootOfTheIncludedContent svg {
   *     overflow: hidden !important;
   *   }
   *   </code></pre>
   * </div>
   *
   * @param {boolean=} flag Enable or disable SVG support in the sanitizer.
   * @returns {boolean|ng.$sanitizeProvider} Returns the currently configured value if called
   *    without an argument or self for chaining otherwise.
   */
  this.enableSvg = function(enableSvg) {
    if (angular.isDefined(enableSvg)) {
      svgEnabled = enableSvg;
      return this;
    } else {
      return svgEnabled;
    }
  };
}

function sanitizeText(chars) {
  var buf = [];
  var writer = htmlSanitizeWriter(buf, angular.noop);
  writer.chars(chars);
  return buf.join('');
}


// Regular Expressions for parsing tags and attributes
var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  // Match everything outside of normal chars and " (quote character)
  NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;


// Good source of info about elements and attributes
// http://dev.w3.org/html5/spec/Overview.html#semantics
// http://simon.html5.org/html-elements

// Safe Void Elements - HTML5
// http://dev.w3.org/html5/spec/Overview.html#void-elements
var voidElements = toMap("area,br,col,hr,img,wbr");

// Elements that you can, intentionally, leave open (and which close themselves)
// http://dev.w3.org/html5/spec/Overview.html#optional-tags
var optionalEndTagBlockElements = toMap("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
    optionalEndTagInlineElements = toMap("rp,rt"),
    optionalEndTagElements = angular.extend({},
                                            optionalEndTagInlineElements,
                                            optionalEndTagBlockElements);

// Safe Block Elements - HTML5
var blockElements = angular.extend({}, optionalEndTagBlockElements, toMap("address,article," +
        "aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5," +
        "h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul"));

// Inline Elements - HTML5
var inlineElements = angular.extend({}, optionalEndTagInlineElements, toMap("a,abbr,acronym,b," +
        "bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s," +
        "samp,small,span,strike,strong,sub,sup,time,tt,u,var"));

// SVG Elements
// https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Elements
// Note: the elements animate,animateColor,animateMotion,animateTransform,set are intentionally omitted.
// They can potentially allow for arbitrary javascript to be executed. See #11290
var svgElements = toMap("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph," +
        "hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline," +
        "radialGradient,rect,stop,svg,switch,text,title,tspan");

// Blocked Elements (will be stripped)
var blockedElements = toMap("script,style");

var validElements = angular.extend({},
                                   voidElements,
                                   blockElements,
                                   inlineElements,
                                   optionalEndTagElements);

//Attributes that have href and hence need to be sanitized
var uriAttrs = toMap("background,cite,href,longdesc,src,xlink:href");

var htmlAttrs = toMap('abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,' +
    'color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,' +
    'ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,' +
    'scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,' +
    'valign,value,vspace,width');

// SVG attributes (without "id" and "name" attributes)
// https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Attributes
var svgAttrs = toMap('accent-height,accumulate,additive,alphabetic,arabic-form,ascent,' +
    'baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,' +
    'cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,' +
    'font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,' +
    'height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,' +
    'marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,' +
    'max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,' +
    'path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,' +
    'requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,' +
    'stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,' +
    'stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,' +
    'stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,' +
    'underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,' +
    'width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,' +
    'xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan', true);

var validAttrs = angular.extend({},
                                uriAttrs,
                                svgAttrs,
                                htmlAttrs);

function toMap(str, lowercaseKeys) {
  var obj = {}, items = str.split(','), i;
  for (i = 0; i < items.length; i++) {
    obj[lowercaseKeys ? angular.lowercase(items[i]) : items[i]] = true;
  }
  return obj;
}

var inertBodyElement;
(function(window) {
  var doc;
  if (window.document && window.document.implementation) {
    doc = window.document.implementation.createHTMLDocument("inert");
  } else {
    throw $sanitizeMinErr('noinert', "Can't create an inert html document");
  }
  var docElement = doc.documentElement || doc.getDocumentElement();
  var bodyElements = docElement.getElementsByTagName('body');

  // usually there should be only one body element in the document, but IE doesn't have any, so we need to create one
  if (bodyElements.length === 1) {
    inertBodyElement = bodyElements[0];
  } else {
    var html = doc.createElement('html');
    inertBodyElement = doc.createElement('body');
    html.appendChild(inertBodyElement);
    doc.appendChild(html);
  }
})(window);

/**
 * @example
 * htmlParser(htmlString, {
 *     start: function(tag, attrs) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * });
 *
 * @param {string} html string
 * @param {object} handler
 */
function htmlParser(html, handler) {
  if (html === null || html === undefined) {
    html = '';
  } else if (typeof html !== 'string') {
    html = '' + html;
  }
  inertBodyElement.innerHTML = html;

  //mXSS protection
  var mXSSAttempts = 5;
  do {
    if (mXSSAttempts === 0) {
      throw $sanitizeMinErr('uinput', "Failed to sanitize html because the input is unstable");
    }
    mXSSAttempts--;

    // strip custom-namespaced attributes on IE<=11
    if (window.document.documentMode) {
      stripCustomNsAttrs(inertBodyElement);
    }
    html = inertBodyElement.innerHTML; //trigger mXSS
    inertBodyElement.innerHTML = html;
  } while (html !== inertBodyElement.innerHTML);

  var node = inertBodyElement.firstChild;
  while (node) {
    switch (node.nodeType) {
      case 1: // ELEMENT_NODE
        handler.start(node.nodeName.toLowerCase(), attrToMap(node.attributes));
        break;
      case 3: // TEXT NODE
        handler.chars(node.textContent);
        break;
    }

    var nextNode;
    if (!(nextNode = node.firstChild)) {
      if (node.nodeType == 1) {
        handler.end(node.nodeName.toLowerCase());
      }
      nextNode = node.nextSibling;
      if (!nextNode) {
        while (nextNode == null) {
          node = node.parentNode;
          if (node === inertBodyElement) break;
          nextNode = node.nextSibling;
          if (node.nodeType == 1) {
            handler.end(node.nodeName.toLowerCase());
          }
        }
      }
    }
    node = nextNode;
  }

  while (node = inertBodyElement.firstChild) {
    inertBodyElement.removeChild(node);
  }
}

function attrToMap(attrs) {
  var map = {};
  for (var i = 0, ii = attrs.length; i < ii; i++) {
    var attr = attrs[i];
    map[attr.name] = attr.value;
  }
  return map;
}


/**
 * Escapes all potentially dangerous characters, so that the
 * resulting string can be safely inserted into attribute or
 * element text.
 * @param value
 * @returns {string} escaped text
 */
function encodeEntities(value) {
  return value.
    replace(/&/g, '&amp;').
    replace(SURROGATE_PAIR_REGEXP, function(value) {
      var hi = value.charCodeAt(0);
      var low = value.charCodeAt(1);
      return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
    }).
    replace(NON_ALPHANUMERIC_REGEXP, function(value) {
      return '&#' + value.charCodeAt(0) + ';';
    }).
    replace(/</g, '&lt;').
    replace(/>/g, '&gt;');
}

/**
 * create an HTML/XML writer which writes to buffer
 * @param {Array} buf use buf.join('') to get out sanitized html string
 * @returns {object} in the form of {
 *     start: function(tag, attrs) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * }
 */
function htmlSanitizeWriter(buf, uriValidator) {
  var ignoreCurrentElement = false;
  var out = angular.bind(buf, buf.push);
  return {
    start: function(tag, attrs) {
      tag = angular.lowercase(tag);
      if (!ignoreCurrentElement && blockedElements[tag]) {
        ignoreCurrentElement = tag;
      }
      if (!ignoreCurrentElement && validElements[tag] === true) {
        out('<');
        out(tag);
        angular.forEach(attrs, function(value, key) {
          var lkey=angular.lowercase(key);
          var isImage = (tag === 'img' && lkey === 'src') || (lkey === 'background');
          if (validAttrs[lkey] === true &&
            (uriAttrs[lkey] !== true || uriValidator(value, isImage))) {
            out(' ');
            out(key);
            out('="');
            out(encodeEntities(value));
            out('"');
          }
        });
        out('>');
      }
    },
    end: function(tag) {
      tag = angular.lowercase(tag);
      if (!ignoreCurrentElement && validElements[tag] === true && voidElements[tag] !== true) {
        out('</');
        out(tag);
        out('>');
      }
      if (tag == ignoreCurrentElement) {
        ignoreCurrentElement = false;
      }
    },
    chars: function(chars) {
      if (!ignoreCurrentElement) {
        out(encodeEntities(chars));
      }
    }
  };
}


/**
 * When IE9-11 comes across an unknown namespaced attribute e.g. 'xlink:foo' it adds 'xmlns:ns1' attribute to declare
 * ns1 namespace and prefixes the attribute with 'ns1' (e.g. 'ns1:xlink:foo'). This is undesirable since we don't want
 * to allow any of these custom attributes. This method strips them all.
 *
 * @param node Root element to process
 */
function stripCustomNsAttrs(node) {
  if (node.nodeType === window.Node.ELEMENT_NODE) {
    var attrs = node.attributes;
    for (var i = 0, l = attrs.length; i < l; i++) {
      var attrNode = attrs[i];
      var attrName = attrNode.name.toLowerCase();
      if (attrName === 'xmlns:ns1' || attrName.lastIndexOf('ns1:', 0) === 0) {
        node.removeAttributeNode(attrNode);
        i--;
        l--;
      }
    }
  }

  var nextNode = node.firstChild;
  if (nextNode) {
    stripCustomNsAttrs(nextNode);
  }

  nextNode = node.nextSibling;
  if (nextNode) {
    stripCustomNsAttrs(nextNode);
  }
}



// define ngSanitize module and register $sanitize service
angular.module('ngSanitize', []).provider('$sanitize', $SanitizeProvider);

/* global sanitizeText: false */

/**
 * @ngdoc filter
 * @name linky
 * @kind function
 *
 * @description
 * Finds links in text input and turns them into html links. Supports `http/https/ftp/mailto` and
 * plain email address links.
 *
 * Requires the {@link ngSanitize `ngSanitize`} module to be installed.
 *
 * @param {string} text Input text.
 * @param {string} target Window (`_blank|_self|_parent|_top`) or named frame to open links in.
 * @param {object|function(url)} [attributes] Add custom attributes to the link element.
 *
 *    Can be one of:
 *
 *    - `object`: A map of attributes
 *    - `function`: Takes the url as a parameter and returns a map of attributes
 *
 *    If the map of attributes contains a value for `target`, it overrides the value of
 *    the target parameter.
 *
 *
 * @returns {string} Html-linkified and {@link $sanitize sanitized} text.
 *
 * @usage
   <span ng-bind-html="linky_expression | linky"></span>
 *
 * @example
   <example module="linkyExample" deps="angular-sanitize.js">
     <file name="index.html">
       <div ng-controller="ExampleController">
       Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
       <table>
         <tr>
           <th>Filter</th>
           <th>Source</th>
           <th>Rendered</th>
         </tr>
         <tr id="linky-filter">
           <td>linky filter</td>
           <td>
             <pre>&lt;div ng-bind-html="snippet | linky"&gt;<br>&lt;/div&gt;</pre>
           </td>
           <td>
             <div ng-bind-html="snippet | linky"></div>
           </td>
         </tr>
         <tr id="linky-target">
          <td>linky target</td>
          <td>
            <pre>&lt;div ng-bind-html="snippetWithSingleURL | linky:'_blank'"&gt;<br>&lt;/div&gt;</pre>
          </td>
          <td>
            <div ng-bind-html="snippetWithSingleURL | linky:'_blank'"></div>
          </td>
         </tr>
         <tr id="linky-custom-attributes">
          <td>linky custom attributes</td>
          <td>
            <pre>&lt;div ng-bind-html="snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}"&gt;<br>&lt;/div&gt;</pre>
          </td>
          <td>
            <div ng-bind-html="snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}"></div>
          </td>
         </tr>
         <tr id="escaped-html">
           <td>no filter</td>
           <td><pre>&lt;div ng-bind="snippet"&gt;<br>&lt;/div&gt;</pre></td>
           <td><div ng-bind="snippet"></div></td>
         </tr>
       </table>
     </file>
     <file name="script.js">
       angular.module('linkyExample', ['ngSanitize'])
         .controller('ExampleController', ['$scope', function($scope) {
           $scope.snippet =
             'Pretty text with some links:\n'+
             'http://angularjs.org/,\n'+
             'mailto:us@somewhere.org,\n'+
             'another@somewhere.org,\n'+
             'and one more: ftp://127.0.0.1/.';
           $scope.snippetWithSingleURL = 'http://angularjs.org/';
         }]);
     </file>
     <file name="protractor.js" type="protractor">
       it('should linkify the snippet with urls', function() {
         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
             toBe('Pretty text with some links: http://angularjs.org/, us@somewhere.org, ' +
                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
         expect(element.all(by.css('#linky-filter a')).count()).toEqual(4);
       });

       it('should not linkify snippet without the linky filter', function() {
         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText()).
             toBe('Pretty text with some links: http://angularjs.org/, mailto:us@somewhere.org, ' +
                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
         expect(element.all(by.css('#escaped-html a')).count()).toEqual(0);
       });

       it('should update', function() {
         element(by.model('snippet')).clear();
         element(by.model('snippet')).sendKeys('new http://link.');
         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
             toBe('new http://link.');
         expect(element.all(by.css('#linky-filter a')).count()).toEqual(1);
         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText())
             .toBe('new http://link.');
       });

       it('should work with the target property', function() {
        expect(element(by.id('linky-target')).
            element(by.binding("snippetWithSingleURL | linky:'_blank'")).getText()).
            toBe('http://angularjs.org/');
        expect(element(by.css('#linky-target a')).getAttribute('target')).toEqual('_blank');
       });

       it('should optionally add custom attributes', function() {
        expect(element(by.id('linky-custom-attributes')).
            element(by.binding("snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}")).getText()).
            toBe('http://angularjs.org/');
        expect(element(by.css('#linky-custom-attributes a')).getAttribute('rel')).toEqual('nofollow');
       });
     </file>
   </example>
 */
angular.module('ngSanitize').filter('linky', ['$sanitize', function($sanitize) {
  var LINKY_URL_REGEXP =
        /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
      MAILTO_REGEXP = /^mailto:/i;

  var linkyMinErr = angular.$$minErr('linky');
  var isString = angular.isString;

  return function(text, target, attributes) {
    if (text == null || text === '') return text;
    if (!isString(text)) throw linkyMinErr('notstring', 'Expected string but received: {0}', text);

    var attributesFn =
      angular.isFunction(attributes) ? attributes :
      angular.isObject(attributes) ? function getAttributesObject() {return attributes;} :
      function getEmptyAttributesObject() {return {};};

    var match;
    var raw = text;
    var html = [];
    var url;
    var i;
    while ((match = raw.match(LINKY_URL_REGEXP))) {
      // We can not end in these as they are sometimes found at the end of the sentence
      url = match[0];
      // if we did not match ftp/http/www/mailto then assume mailto
      if (!match[2] && !match[4]) {
        url = (match[3] ? 'http://' : 'mailto:') + url;
      }
      i = match.index;
      addText(raw.substr(0, i));
      addLink(url, match[0].replace(MAILTO_REGEXP, ''));
      raw = raw.substring(i + match[0].length);
    }
    addText(raw);
    return $sanitize(html.join(''));

    function addText(text) {
      if (!text) {
        return;
      }
      html.push(sanitizeText(text));
    }

    function addLink(url, text) {
      var key, linkAttributes = attributesFn(url);
      html.push('<a ');

      for (key in linkAttributes) {
        html.push(key + '="' + linkAttributes[key] + '" ');
      }

      if (angular.isDefined(target) && !('target' in linkAttributes)) {
        html.push('target="',
                  target,
                  '" ');
      }
      html.push('href="',
                url.replace(/"/g, '&quot;'),
                '">');
      addText(text);
      html.push('</a>');
    }
  };
}]);


})(window, window.angular);


/*!
 * angular-translate - v2.7.2 - 2015-06-01
 * http://github.com/angular-translate/angular-translate
 * Copyright (c) 2015 ; Licensed MIT
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function () {
      return (factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    factory();
  }
}(this, function () {

/**
 * @ngdoc overview
 * @name pascalprecht.translate
 *
 * @description
 * The main module which holds everything together.
 */
angular.module('pascalprecht.translate', ['ng'])
  .run(runTranslate);

function runTranslate($translate) {

  'use strict';

  var key = $translate.storageKey(),
    storage = $translate.storage();

  var fallbackFromIncorrectStorageValue = function () {
    var preferred = $translate.preferredLanguage();
    if (angular.isString(preferred)) {
      $translate.use(preferred);
      // $translate.use() will also remember the language.
      // So, we don't need to call storage.put() here.
    } else {
      storage.put(key, $translate.use());
    }
  };

  fallbackFromIncorrectStorageValue.displayName = 'fallbackFromIncorrectStorageValue';

  if (storage) {
    if (!storage.get(key)) {
      fallbackFromIncorrectStorageValue();
    } else {
      $translate.use(storage.get(key))['catch'](fallbackFromIncorrectStorageValue);
    }
  } else if (angular.isString($translate.preferredLanguage())) {
    $translate.use($translate.preferredLanguage());
  }
}
runTranslate.$inject = ['$translate'];

runTranslate.displayName = 'runTranslate';

/**
 * @ngdoc object
 * @name pascalprecht.translate.$translateSanitizationProvider
 *
 * @description
 *
 * Configurations for $translateSanitization
 */
angular.module('pascalprecht.translate').provider('$translateSanitization', $translateSanitizationProvider);

function $translateSanitizationProvider () {

  'use strict';

  var $sanitize,
      currentStrategy = null, // TODO change to either 'sanitize', 'escape' or ['sanitize', 'escapeParameters'] in 3.0.
      hasConfiguredStrategy = false,
      hasShownNoStrategyConfiguredWarning = false,
      strategies;

  /**
   * Definition of a sanitization strategy function
   * @callback StrategyFunction
   * @param {string|object} value - value to be sanitized (either a string or an interpolated value map)
   * @param {string} mode - either 'text' for a string (translation) or 'params' for the interpolated params
   * @return {string|object}
   */

  /**
   * @ngdoc property
   * @name strategies
   * @propertyOf pascalprecht.translate.$translateSanitizationProvider
   *
   * @description
   * Following strategies are built-in:
   * <dl>
   *   <dt>sanitize</dt>
   *   <dd>Sanitizes HTML in the translation text using $sanitize</dd>
   *   <dt>escape</dt>
   *   <dd>Escapes HTML in the translation</dd>
   *   <dt>sanitizeParameters</dt>
   *   <dd>Sanitizes HTML in the values of the interpolation parameters using $sanitize</dd>
   *   <dt>escapeParameters</dt>
   *   <dd>Escapes HTML in the values of the interpolation parameters</dd>
   *   <dt>escaped</dt>
   *   <dd>Support legacy strategy name 'escaped' for backwards compatibility (will be removed in 3.0)</dd>
   * </dl>
   *
   */

  strategies = {
    sanitize: function (value, mode) {
      if (mode === 'text') {
        value = htmlSanitizeValue(value);
      }
      return value;
    },
    escape: function (value, mode) {
      if (mode === 'text') {
        value = htmlEscapeValue(value);
      }
      return value;
    },
    sanitizeParameters: function (value, mode) {
      if (mode === 'params') {
        value = mapInterpolationParameters(value, htmlSanitizeValue);
      }
      return value;
    },
    escapeParameters: function (value, mode) {
      if (mode === 'params') {
        value = mapInterpolationParameters(value, htmlEscapeValue);
      }
      return value;
    }
  };
  // Support legacy strategy name 'escaped' for backwards compatibility.
  // TODO should be removed in 3.0
  strategies.escaped = strategies.escapeParameters;

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateSanitizationProvider#addStrategy
   * @methodOf pascalprecht.translate.$translateSanitizationProvider
   *
   * @description
   * Adds a sanitization strategy to the list of known strategies.
   *
   * @param {string} strategyName - unique key for a strategy
   * @param {StrategyFunction} strategyFunction - strategy function
   * @returns {object} this
   */
  this.addStrategy = function (strategyName, strategyFunction) {
    strategies[strategyName] = strategyFunction;
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateSanitizationProvider#removeStrategy
   * @methodOf pascalprecht.translate.$translateSanitizationProvider
   *
   * @description
   * Removes a sanitization strategy from the list of known strategies.
   *
   * @param {string} strategyName - unique key for a strategy
   * @returns {object} this
   */
  this.removeStrategy = function (strategyName) {
    delete strategies[strategyName];
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateSanitizationProvider#useStrategy
   * @methodOf pascalprecht.translate.$translateSanitizationProvider
   *
   * @description
   * Selects a sanitization strategy. When an array is provided the strategies will be executed in order.
   *
   * @param {string|StrategyFunction|array} strategy The sanitization strategy / strategies which should be used. Either a name of an existing strategy, a custom strategy function, or an array consisting of multiple names and / or custom functions.
   * @returns {object} this
   */
  this.useStrategy = function (strategy) {
    hasConfiguredStrategy = true;
    currentStrategy = strategy;
    return this;
  };

  /**
   * @ngdoc object
   * @name pascalprecht.translate.$translateSanitization
   * @requires $injector
   * @requires $log
   *
   * @description
   * Sanitizes interpolation parameters and translated texts.
   *
   */
  this.$get = ['$injector', '$log', function ($injector, $log) {

    var applyStrategies = function (value, mode, selectedStrategies) {
      angular.forEach(selectedStrategies, function (selectedStrategy) {
        if (angular.isFunction(selectedStrategy)) {
          value = selectedStrategy(value, mode);
        } else if (angular.isFunction(strategies[selectedStrategy])) {
          value = strategies[selectedStrategy](value, mode);
        } else {
          throw new Error('pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: \'' + selectedStrategy + '\'');
        }
      });
      return value;
    };

    // TODO: should be removed in 3.0
    var showNoStrategyConfiguredWarning = function () {
      if (!hasConfiguredStrategy && !hasShownNoStrategyConfiguredWarning) {
        $log.warn('pascalprecht.translate.$translateSanitization: No sanitization strategy has been configured. This can have serious security implications. See http://angular-translate.github.io/docs/#/guide/19_security for details.');
        hasShownNoStrategyConfiguredWarning = true;
      }
    };

    if ($injector.has('$sanitize')) {
      $sanitize = $injector.get('$sanitize');
    }

    return {
      /**
       * @ngdoc function
       * @name pascalprecht.translate.$translateSanitization#useStrategy
       * @methodOf pascalprecht.translate.$translateSanitization
       *
       * @description
       * Selects a sanitization strategy. When an array is provided the strategies will be executed in order.
       *
       * @param {string|StrategyFunction|array} strategy The sanitization strategy / strategies which should be used. Either a name of an existing strategy, a custom strategy function, or an array consisting of multiple names and / or custom functions.
       */
      useStrategy: (function (self) {
        return function (strategy) {
          self.useStrategy(strategy);
        };
      })(this),

      /**
       * @ngdoc function
       * @name pascalprecht.translate.$translateSanitization#sanitize
       * @methodOf pascalprecht.translate.$translateSanitization
       *
       * @description
       * Sanitizes a value.
       *
       * @param {string|object} value The value which should be sanitized.
       * @param {string} mode The current sanitization mode, either 'params' or 'text'.
       * @param {string|StrategyFunction|array} [strategy] Optional custom strategy which should be used instead of the currently selected strategy.
       * @returns {string|object} sanitized value
       */
      sanitize: function (value, mode, strategy) {
        if (!currentStrategy) {
          showNoStrategyConfiguredWarning();
        }

        if (arguments.length < 3) {
          strategy = currentStrategy;
        }

        if (!strategy) {
          return value;
        }

        var selectedStrategies = angular.isArray(strategy) ? strategy : [strategy];
        return applyStrategies(value, mode, selectedStrategies);
      }
    };
  }];

  var htmlEscapeValue = function (value) {
    var element = angular.element('<div></div>');
    element.text(value); // not chainable, see #1044
    return element.html();
  };

  var htmlSanitizeValue = function (value) {
    if (!$sanitize) {
      throw new Error('pascalprecht.translate.$translateSanitization: Error cannot find $sanitize service. Either include the ngSanitize module (https://docs.angularjs.org/api/ngSanitize) or use a sanitization strategy which does not depend on $sanitize, such as \'escape\'.');
    }
    return $sanitize(value);
  };

  var mapInterpolationParameters = function (value, iteratee) {
    if (angular.isObject(value)) {
      var result = angular.isArray(value) ? [] : {};

      angular.forEach(value, function (propertyValue, propertyKey) {
        result[propertyKey] = mapInterpolationParameters(propertyValue, iteratee);
      });

      return result;
    } else if (angular.isNumber(value)) {
      return value;
    } else {
      return iteratee(value);
    }
  };
}

/**
 * @ngdoc object
 * @name pascalprecht.translate.$translateProvider
 * @description
 *
 * $translateProvider allows developers to register translation-tables, asynchronous loaders
 * and similar to configure translation behavior directly inside of a module.
 *
 */
angular.module('pascalprecht.translate')
.constant('pascalprechtTranslateOverrider', {})
.provider('$translate', $translate);

function $translate($STORAGE_KEY, $windowProvider, $translateSanitizationProvider, pascalprechtTranslateOverrider) {

  'use strict';

  var $translationTable = {},
      $preferredLanguage,
      $availableLanguageKeys = [],
      $languageKeyAliases,
      $fallbackLanguage,
      $fallbackWasString,
      $uses,
      $nextLang,
      $storageFactory,
      $storageKey = $STORAGE_KEY,
      $storagePrefix,
      $missingTranslationHandlerFactory,
      $interpolationFactory,
      $interpolatorFactories = [],
      $loaderFactory,
      $cloakClassName = 'translate-cloak',
      $loaderOptions,
      $notFoundIndicatorLeft,
      $notFoundIndicatorRight,
      $postCompilingEnabled = false,
      $forceAsyncReloadEnabled = false,
      NESTED_OBJECT_DELIMITER = '.',
      loaderCache,
      directivePriority = 0,
      statefulFilter = true,
      uniformLanguageTagResolver = 'default',
      languageTagResolver = {
        'default': function (tag) {
          return (tag || '').split('-').join('_');
        },
        java: function (tag) {
          var temp = (tag || '').split('-').join('_');
          var parts = temp.split('_');
          return parts.length > 1 ? (parts[0].toLowerCase() + '_' + parts[1].toUpperCase()) : temp;
        },
        bcp47: function (tag) {
          var temp = (tag || '').split('_').join('-');
          var parts = temp.split('-');
          return parts.length > 1 ? (parts[0].toLowerCase() + '-' + parts[1].toUpperCase()) : temp;
        }
      };

  var version = '2.7.2';

  // tries to determine the browsers language
  var getFirstBrowserLanguage = function () {

    // internal purpose only
    if (angular.isFunction(pascalprechtTranslateOverrider.getLocale)) {
      return pascalprechtTranslateOverrider.getLocale();
    }

    var nav = $windowProvider.$get().navigator,
        browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
        i,
        language;

    // support for HTML 5.1 "navigator.languages"
    if (angular.isArray(nav.languages)) {
      for (i = 0; i < nav.languages.length; i++) {
        language = nav.languages[i];
        if (language && language.length) {
          return language;
        }
      }
    }

    // support for other well known properties in browsers
    for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
      language = nav[browserLanguagePropertyKeys[i]];
      if (language && language.length) {
        return language;
      }
    }

    return null;
  };
  getFirstBrowserLanguage.displayName = 'angular-translate/service: getFirstBrowserLanguage';

  // tries to determine the browsers locale
  var getLocale = function () {
    var locale = getFirstBrowserLanguage() || '';
    if (languageTagResolver[uniformLanguageTagResolver]) {
      locale = languageTagResolver[uniformLanguageTagResolver](locale);
    }
    return locale;
  };
  getLocale.displayName = 'angular-translate/service: getLocale';

  /**
   * @name indexOf
   * @private
   *
   * @description
   * indexOf polyfill. Kinda sorta.
   *
   * @param {array} array Array to search in.
   * @param {string} searchElement Element to search for.
   *
   * @returns {int} Index of search element.
   */
  var indexOf = function(array, searchElement) {
    for (var i = 0, len = array.length; i < len; i++) {
      if (array[i] === searchElement) {
        return i;
      }
    }
    return -1;
  };

  /**
   * @name trim
   * @private
   *
   * @description
   * trim polyfill
   *
   * @returns {string} The string stripped of whitespace from both ends
   */
  var trim = function() {
    return this.toString().replace(/^\s+|\s+$/g, '');
  };

  var negotiateLocale = function (preferred) {

    var avail = [],
        locale = angular.lowercase(preferred),
        i = 0,
        n = $availableLanguageKeys.length;

    for (; i < n; i++) {
      avail.push(angular.lowercase($availableLanguageKeys[i]));
    }

    if (indexOf(avail, locale) > -1) {
      return preferred;
    }

    if ($languageKeyAliases) {
      var alias;
      for (var langKeyAlias in $languageKeyAliases) {
        var hasWildcardKey = false;
        var hasExactKey = Object.prototype.hasOwnProperty.call($languageKeyAliases, langKeyAlias) &&
          angular.lowercase(langKeyAlias) === angular.lowercase(preferred);

        if (langKeyAlias.slice(-1) === '*') {
          hasWildcardKey = langKeyAlias.slice(0, -1) === preferred.slice(0, langKeyAlias.length-1);
        }
        if (hasExactKey || hasWildcardKey) {
          alias = $languageKeyAliases[langKeyAlias];
          if (indexOf(avail, angular.lowercase(alias)) > -1) {
            return alias;
          }
        }
      }
    }

    if (preferred) {
      var parts = preferred.split('_');

      if (parts.length > 1 && indexOf(avail, angular.lowercase(parts[0])) > -1) {
        return parts[0];
      }
    }

    // If everything fails, just return the preferred, unchanged.
    return preferred;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#translations
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Registers a new translation table for specific language key.
   *
   * To register a translation table for specific language, pass a defined language
   * key as first parameter.
   *
   * <pre>
   *  // register translation table for language: 'de_DE'
   *  $translateProvider.translations('de_DE', {
   *    'GREETING': 'Hallo Welt!'
   *  });
   *
   *  // register another one
   *  $translateProvider.translations('en_US', {
   *    'GREETING': 'Hello world!'
   *  });
   * </pre>
   *
   * When registering multiple translation tables for for the same language key,
   * the actual translation table gets extended. This allows you to define module
   * specific translation which only get added, once a specific module is loaded in
   * your app.
   *
   * Invoking this method with no arguments returns the translation table which was
   * registered with no language key. Invoking it with a language key returns the
   * related translation table.
   *
   * @param {string} key A language key.
   * @param {object} translationTable A plain old JavaScript object that represents a translation table.
   *
   */
  var translations = function (langKey, translationTable) {

    if (!langKey && !translationTable) {
      return $translationTable;
    }

    if (langKey && !translationTable) {
      if (angular.isString(langKey)) {
        return $translationTable[langKey];
      }
    } else {
      if (!angular.isObject($translationTable[langKey])) {
        $translationTable[langKey] = {};
      }
      angular.extend($translationTable[langKey], flatObject(translationTable));
    }
    return this;
  };

  this.translations = translations;

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#cloakClassName
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   *
   * Let's you change the class name for `translate-cloak` directive.
   * Default class name is `translate-cloak`.
   *
   * @param {string} name translate-cloak class name
   */
  this.cloakClassName = function (name) {
    if (!name) {
      return $cloakClassName;
    }
    $cloakClassName = name;
    return this;
  };

  /**
   * @name flatObject
   * @private
   *
   * @description
   * Flats an object. This function is used to flatten given translation data with
   * namespaces, so they are later accessible via dot notation.
   */
  var flatObject = function (data, path, result, prevKey) {
    var key, keyWithPath, keyWithShortPath, val;

    if (!path) {
      path = [];
    }
    if (!result) {
      result = {};
    }
    for (key in data) {
      if (!Object.prototype.hasOwnProperty.call(data, key)) {
        continue;
      }
      val = data[key];
      if (angular.isObject(val)) {
        flatObject(val, path.concat(key), result, key);
      } else {
        keyWithPath = path.length ? ('' + path.join(NESTED_OBJECT_DELIMITER) + NESTED_OBJECT_DELIMITER + key) : key;
        if(path.length && key === prevKey){
          // Create shortcut path (foo.bar == foo.bar.bar)
          keyWithShortPath = '' + path.join(NESTED_OBJECT_DELIMITER);
          // Link it to original path
          result[keyWithShortPath] = '@:' + keyWithPath;
        }
        result[keyWithPath] = val;
      }
    }
    return result;
  };
  flatObject.displayName = 'flatObject';

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#addInterpolation
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Adds interpolation services to angular-translate, so it can manage them.
   *
   * @param {object} factory Interpolation service factory
   */
  this.addInterpolation = function (factory) {
    $interpolatorFactories.push(factory);
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#useMessageFormatInterpolation
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells angular-translate to use interpolation functionality of messageformat.js.
   * This is useful when having high level pluralization and gender selection.
   */
  this.useMessageFormatInterpolation = function () {
    return this.useInterpolation('$translateMessageFormatInterpolation');
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#useInterpolation
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells angular-translate which interpolation style to use as default, application-wide.
   * Simply pass a factory/service name. The interpolation service has to implement
   * the correct interface.
   *
   * @param {string} factory Interpolation service name.
   */
  this.useInterpolation = function (factory) {
    $interpolationFactory = factory;
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#useSanitizeStrategy
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Simply sets a sanitation strategy type.
   *
   * @param {string} value Strategy type.
   */
  this.useSanitizeValueStrategy = function (value) {
    $translateSanitizationProvider.useStrategy(value);
    return this;
  };

 /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#preferredLanguage
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells the module which of the registered translation tables to use for translation
   * at initial startup by passing a language key. Similar to `$translateProvider#use`
   * only that it says which language to **prefer**.
   *
   * @param {string} langKey A language key.
   *
   */
  this.preferredLanguage = function(langKey) {
    setupPreferredLanguage(langKey);
    return this;

  };
  var setupPreferredLanguage = function (langKey) {
    if (langKey) {
      $preferredLanguage = langKey;
    }
    return $preferredLanguage;
  };
  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#translationNotFoundIndicator
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Sets an indicator which is used when a translation isn't found. E.g. when
   * setting the indicator as 'X' and one tries to translate a translation id
   * called `NOT_FOUND`, this will result in `X NOT_FOUND X`.
   *
   * Internally this methods sets a left indicator and a right indicator using
   * `$translateProvider.translationNotFoundIndicatorLeft()` and
   * `$translateProvider.translationNotFoundIndicatorRight()`.
   *
   * **Note**: These methods automatically add a whitespace between the indicators
   * and the translation id.
   *
   * @param {string} indicator An indicator, could be any string.
   */
  this.translationNotFoundIndicator = function (indicator) {
    this.translationNotFoundIndicatorLeft(indicator);
    this.translationNotFoundIndicatorRight(indicator);
    return this;
  };

  /**
   * ngdoc function
   * @name pascalprecht.translate.$translateProvider#translationNotFoundIndicatorLeft
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Sets an indicator which is used when a translation isn't found left to the
   * translation id.
   *
   * @param {string} indicator An indicator.
   */
  this.translationNotFoundIndicatorLeft = function (indicator) {
    if (!indicator) {
      return $notFoundIndicatorLeft;
    }
    $notFoundIndicatorLeft = indicator;
    return this;
  };

  /**
   * ngdoc function
   * @name pascalprecht.translate.$translateProvider#translationNotFoundIndicatorLeft
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Sets an indicator which is used when a translation isn't found right to the
   * translation id.
   *
   * @param {string} indicator An indicator.
   */
  this.translationNotFoundIndicatorRight = function (indicator) {
    if (!indicator) {
      return $notFoundIndicatorRight;
    }
    $notFoundIndicatorRight = indicator;
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#fallbackLanguage
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells the module which of the registered translation tables to use when missing translations
   * at initial startup by passing a language key. Similar to `$translateProvider#use`
   * only that it says which language to **fallback**.
   *
   * @param {string||array} langKey A language key.
   *
   */
  this.fallbackLanguage = function (langKey) {
    fallbackStack(langKey);
    return this;
  };

  var fallbackStack = function (langKey) {
    if (langKey) {
      if (angular.isString(langKey)) {
        $fallbackWasString = true;
        $fallbackLanguage = [ langKey ];
      } else if (angular.isArray(langKey)) {
        $fallbackWasString = false;
        $fallbackLanguage = langKey;
      }
      if (angular.isString($preferredLanguage)  && indexOf($fallbackLanguage, $preferredLanguage) < 0) {
        $fallbackLanguage.push($preferredLanguage);
      }

      return this;
    } else {
      if ($fallbackWasString) {
        return $fallbackLanguage[0];
      } else {
        return $fallbackLanguage;
      }
    }
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#use
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Set which translation table to use for translation by given language key. When
   * trying to 'use' a language which isn't provided, it'll throw an error.
   *
   * You actually don't have to use this method since `$translateProvider#preferredLanguage`
   * does the job too.
   *
   * @param {string} langKey A language key.
   */
  this.use = function (langKey) {
    if (langKey) {
      if (!$translationTable[langKey] && (!$loaderFactory)) {
        // only throw an error, when not loading translation data asynchronously
        throw new Error('$translateProvider couldn\'t find translationTable for langKey: \'' + langKey + '\'');
      }
      $uses = langKey;
      return this;
    }
    return $uses;
  };

 /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#storageKey
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells the module which key must represent the choosed language by a user in the storage.
   *
   * @param {string} key A key for the storage.
   */
  var storageKey = function(key) {
    if (!key) {
      if ($storagePrefix) {
        return $storagePrefix + $storageKey;
      }
      return $storageKey;
    }
    $storageKey = key;
    return this;
  };

  this.storageKey = storageKey;

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#useUrlLoader
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells angular-translate to use `$translateUrlLoader` extension service as loader.
   *
   * @param {string} url Url
   * @param {Object=} options Optional configuration object
   */
  this.useUrlLoader = function (url, options) {
    return this.useLoader('$translateUrlLoader', angular.extend({ url: url }, options));
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#useStaticFilesLoader
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells angular-translate to use `$translateStaticFilesLoader` extension service as loader.
   *
   * @param {Object=} options Optional configuration object
   */
  this.useStaticFilesLoader = function (options) {
    return this.useLoader('$translateStaticFilesLoader', options);
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#useLoader
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells angular-translate to use any other service as loader.
   *
   * @param {string} loaderFactory Factory name to use
   * @param {Object=} options Optional configuration object
   */
  this.useLoader = function (loaderFactory, options) {
    $loaderFactory = loaderFactory;
    $loaderOptions = options || {};
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#useLocalStorage
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells angular-translate to use `$translateLocalStorage` service as storage layer.
   *
   */
  this.useLocalStorage = function () {
    return this.useStorage('$translateLocalStorage');
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#useCookieStorage
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells angular-translate to use `$translateCookieStorage` service as storage layer.
   */
  this.useCookieStorage = function () {
    return this.useStorage('$translateCookieStorage');
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#useStorage
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells angular-translate to use custom service as storage layer.
   */
  this.useStorage = function (storageFactory) {
    $storageFactory = storageFactory;
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#storagePrefix
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Sets prefix for storage key.
   *
   * @param {string} prefix Storage key prefix
   */
  this.storagePrefix = function (prefix) {
    if (!prefix) {
      return prefix;
    }
    $storagePrefix = prefix;
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#useMissingTranslationHandlerLog
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells angular-translate to use built-in log handler when trying to translate
   * a translation Id which doesn't exist.
   *
   * This is actually a shortcut method for `useMissingTranslationHandler()`.
   *
   */
  this.useMissingTranslationHandlerLog = function () {
    return this.useMissingTranslationHandler('$translateMissingTranslationHandlerLog');
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#useMissingTranslationHandler
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Expects a factory name which later gets instantiated with `$injector`.
   * This method can be used to tell angular-translate to use a custom
   * missingTranslationHandler. Just build a factory which returns a function
   * and expects a translation id as argument.
   *
   * Example:
   * <pre>
   *  app.config(function ($translateProvider) {
   *    $translateProvider.useMissingTranslationHandler('customHandler');
   *  });
   *
   *  app.factory('customHandler', function (dep1, dep2) {
   *    return function (translationId) {
   *      // something with translationId and dep1 and dep2
   *    };
   *  });
   * </pre>
   *
   * @param {string} factory Factory name
   */
  this.useMissingTranslationHandler = function (factory) {
    $missingTranslationHandlerFactory = factory;
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#usePostCompiling
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * If post compiling is enabled, all translated values will be processed
   * again with AngularJS' $compile.
   *
   * Example:
   * <pre>
   *  app.config(function ($translateProvider) {
   *    $translateProvider.usePostCompiling(true);
   *  });
   * </pre>
   *
   * @param {string} factory Factory name
   */
  this.usePostCompiling = function (value) {
    $postCompilingEnabled = !(!value);
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#forceAsyncReload
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * If force async reload is enabled, async loader will always be called
   * even if $translationTable already contains the language key, adding
   * possible new entries to the $translationTable.
   *
   * Example:
   * <pre>
   *  app.config(function ($translateProvider) {
   *    $translateProvider.forceAsyncReload(true);
   *  });
   * </pre>
   *
   * @param {boolean} value - valid values are true or false
   */
  this.forceAsyncReload = function (value) {
    $forceAsyncReloadEnabled = !(!value);
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#uniformLanguageTag
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells angular-translate which language tag should be used as a result when determining
   * the current browser language.
   *
   * This setting must be set before invoking {@link pascalprecht.translate.$translateProvider#methods_determinePreferredLanguage determinePreferredLanguage()}.
   *
   * <pre>
   * $translateProvider
   *   .uniformLanguageTag('bcp47')
   *   .determinePreferredLanguage()
   * </pre>
   *
   * The resolver currently supports:
   * * default
   *     (traditionally: hyphens will be converted into underscores, i.e. en-US => en_US)
   *     en-US => en_US
   *     en_US => en_US
   *     en-us => en_us
   * * java
   *     like default, but the second part will be always in uppercase
   *     en-US => en_US
   *     en_US => en_US
   *     en-us => en_US
   * * BCP 47 (RFC 4646 & 4647)
   *     en-US => en-US
   *     en_US => en-US
   *     en-us => en-US
   *
   * See also:
   * * http://en.wikipedia.org/wiki/IETF_language_tag
   * * http://www.w3.org/International/core/langtags/
   * * http://tools.ietf.org/html/bcp47
   *
   * @param {string|object} options - options (or standard)
   * @param {string} options.standard - valid values are 'default', 'bcp47', 'java'
   */
  this.uniformLanguageTag = function (options) {

    if (!options) {
      options = {};
    } else if (angular.isString(options)) {
      options = {
        standard: options
      };
    }

    uniformLanguageTagResolver = options.standard;

    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#determinePreferredLanguage
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Tells angular-translate to try to determine on its own which language key
   * to set as preferred language. When `fn` is given, angular-translate uses it
   * to determine a language key, otherwise it uses the built-in `getLocale()`
   * method.
   *
   * The `getLocale()` returns a language key in the format `[lang]_[country]` or
   * `[lang]` depending on what the browser provides.
   *
   * Use this method at your own risk, since not all browsers return a valid
   * locale (see {@link pascalprecht.translate.$translateProvider#methods_uniformLanguageTag uniformLanguageTag()}).
   *
   * @param {Function=} fn Function to determine a browser's locale
   */
  this.determinePreferredLanguage = function (fn) {

    var locale = (fn && angular.isFunction(fn)) ? fn() : getLocale();

    if (!$availableLanguageKeys.length) {
      $preferredLanguage = locale;
    } else {
      $preferredLanguage = negotiateLocale(locale);
    }

    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#registerAvailableLanguageKeys
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Registers a set of language keys the app will work with. Use this method in
   * combination with
   * {@link pascalprecht.translate.$translateProvider#determinePreferredLanguage determinePreferredLanguage}.
   * When available languages keys are registered, angular-translate
   * tries to find the best fitting language key depending on the browsers locale,
   * considering your language key convention.
   *
   * @param {object} languageKeys Array of language keys the your app will use
   * @param {object=} aliases Alias map.
   */
  this.registerAvailableLanguageKeys = function (languageKeys, aliases) {
    if (languageKeys) {
      $availableLanguageKeys = languageKeys;
      if (aliases) {
        $languageKeyAliases = aliases;
      }
      return this;
    }
    return $availableLanguageKeys;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#useLoaderCache
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Registers a cache for internal $http based loaders.
   * {@link pascalprecht.translate.$translateProvider#determinePreferredLanguage determinePreferredLanguage}.
   * When false the cache will be disabled (default). When true or undefined
   * the cache will be a default (see $cacheFactory). When an object it will
   * be treat as a cache object itself: the usage is $http({cache: cache})
   *
   * @param {object} cache boolean, string or cache-object
   */
  this.useLoaderCache = function (cache) {
    if (cache === false) {
      // disable cache
      loaderCache = undefined;
    } else if (cache === true) {
      // enable cache using AJS defaults
      loaderCache = true;
    } else if (typeof(cache) === 'undefined') {
      // enable cache using default
      loaderCache = '$translationCache';
    } else if (cache) {
      // enable cache using given one (see $cacheFactory)
      loaderCache = cache;
    }
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#directivePriority
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Sets the default priority of the translate directive. The standard value is `0`.
   * Calling this function without an argument will return the current value.
   *
   * @param {number} priority for the translate-directive
   */
  this.directivePriority = function (priority) {
    if (priority === undefined) {
      // getter
      return directivePriority;
    } else {
      // setter with chaining
      directivePriority = priority;
      return this;
    }
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateProvider#statefulFilter
   * @methodOf pascalprecht.translate.$translateProvider
   *
   * @description
   * Since AngularJS 1.3, filters which are not stateless (depending at the scope)
   * have to explicit define this behavior.
   * Sets whether the translate filter should be stateful or stateless. The standard value is `true`
   * meaning being stateful.
   * Calling this function without an argument will return the current value.
   *
   * @param {boolean} state - defines the state of the filter
   */
  this.statefulFilter = function (state) {
    if (state === undefined) {
      // getter
      return statefulFilter;
    } else {
      // setter with chaining
      statefulFilter = state;
      return this;
    }
  };

  /**
   * @ngdoc object
   * @name pascalprecht.translate.$translate
   * @requires $interpolate
   * @requires $log
   * @requires $rootScope
   * @requires $q
   *
   * @description
   * The `$translate` service is the actual core of angular-translate. It expects a translation id
   * and optional interpolate parameters to translate contents.
   *
   * <pre>
   *  $translate('HEADLINE_TEXT').then(function (translation) {
   *    $scope.translatedText = translation;
   *  });
   * </pre>
   *
   * @param {string|array} translationId A token which represents a translation id
   *                                     This can be optionally an array of translation ids which
   *                                     results that the function returns an object where each key
   *                                     is the translation id and the value the translation.
   * @param {object=} interpolateParams An object hash for dynamic values
   * @param {string} interpolationId The id of the interpolation to use
   * @returns {object} promise
   */
  this.$get = [
    '$log',
    '$injector',
    '$rootScope',
    '$q',
    function ($log, $injector, $rootScope, $q) {

      var Storage,
          defaultInterpolator = $injector.get($interpolationFactory || '$translateDefaultInterpolation'),
          pendingLoader = false,
          interpolatorHashMap = {},
          langPromises = {},
          fallbackIndex,
          startFallbackIteration;

      var $translate = function (translationId, interpolateParams, interpolationId, defaultTranslationText) {

        // Duck detection: If the first argument is an array, a bunch of translations was requested.
        // The result is an object.
        if (angular.isArray(translationId)) {
          // Inspired by Q.allSettled by Kris Kowal
          // https://github.com/kriskowal/q/blob/b0fa72980717dc202ffc3cbf03b936e10ebbb9d7/q.js#L1553-1563
          // This transforms all promises regardless resolved or rejected
          var translateAll = function (translationIds) {
            var results = {}; // storing the actual results
            var promises = []; // promises to wait for
            // Wraps the promise a) being always resolved and b) storing the link id->value
            var translate = function (translationId) {
              var deferred = $q.defer();
              var regardless = function (value) {
                results[translationId] = value;
                deferred.resolve([translationId, value]);
              };
              // we don't care whether the promise was resolved or rejected; just store the values
              $translate(translationId, interpolateParams, interpolationId, defaultTranslationText).then(regardless, regardless);
              return deferred.promise;
            };
            for (var i = 0, c = translationIds.length; i < c; i++) {
              promises.push(translate(translationIds[i]));
            }
            // wait for all (including storing to results)
            return $q.all(promises).then(function () {
              // return the results
              return results;
            });
          };
          return translateAll(translationId);
        }

        var deferred = $q.defer();

        // trim off any whitespace
        if (translationId) {
          translationId = trim.apply(translationId);
        }

        var promiseToWaitFor = (function () {
          var promise = $preferredLanguage ?
            langPromises[$preferredLanguage] :
            langPromises[$uses];

          fallbackIndex = 0;

          if ($storageFactory && !promise) {
            // looks like there's no pending promise for $preferredLanguage or
            // $uses. Maybe there's one pending for a language that comes from
            // storage.
            var langKey = Storage.get($storageKey);
            promise = langPromises[langKey];

            if ($fallbackLanguage && $fallbackLanguage.length) {
                var index = indexOf($fallbackLanguage, langKey);
                // maybe the language from storage is also defined as fallback language
                // we increase the fallback language index to not search in that language
                // as fallback, since it's probably the first used language
                // in that case the index starts after the first element
                fallbackIndex = (index === 0) ? 1 : 0;

                // but we can make sure to ALWAYS fallback to preferred language at least
                if (indexOf($fallbackLanguage, $preferredLanguage) < 0) {
                  $fallbackLanguage.push($preferredLanguage);
                }
            }
          }
          return promise;
        }());

        if (!promiseToWaitFor) {
          // no promise to wait for? okay. Then there's no loader registered
          // nor is a one pending for language that comes from storage.
          // We can just translate.
          determineTranslation(translationId, interpolateParams, interpolationId, defaultTranslationText).then(deferred.resolve, deferred.reject);
        } else {
          var promiseResolved = function () {
            determineTranslation(translationId, interpolateParams, interpolationId, defaultTranslationText).then(deferred.resolve, deferred.reject);
          };
          promiseResolved.displayName = 'promiseResolved';

          promiseToWaitFor['finally'](promiseResolved, deferred.reject);
        }
        return deferred.promise;
      };

      /**
       * @name applyNotFoundIndicators
       * @private
       *
       * @description
       * Applies not fount indicators to given translation id, if needed.
       * This function gets only executed, if a translation id doesn't exist,
       * which is why a translation id is expected as argument.
       *
       * @param {string} translationId Translation id.
       * @returns {string} Same as given translation id but applied with not found
       * indicators.
       */
      var applyNotFoundIndicators = function (translationId) {
        // applying notFoundIndicators
        if ($notFoundIndicatorLeft) {
          translationId = [$notFoundIndicatorLeft, translationId].join(' ');
        }
        if ($notFoundIndicatorRight) {
          translationId = [translationId, $notFoundIndicatorRight].join(' ');
        }
        return translationId;
      };

      /**
       * @name useLanguage
       * @private
       *
       * @description
       * Makes actual use of a language by setting a given language key as used
       * language and informs registered interpolators to also use the given
       * key as locale.
       *
       * @param {key} Locale key.
       */
      var useLanguage = function (key) {
        $uses = key;
        $rootScope.$emit('$translateChangeSuccess', {language: key});

        if ($storageFactory) {
          Storage.put($translate.storageKey(), $uses);
        }
        // inform default interpolator
        defaultInterpolator.setLocale($uses);

        var eachInterpolator = function (interpolator, id) {
          interpolatorHashMap[id].setLocale($uses);
        };
        eachInterpolator.displayName = 'eachInterpolatorLocaleSetter';

        // inform all others too!
        angular.forEach(interpolatorHashMap, eachInterpolator);
        $rootScope.$emit('$translateChangeEnd', {language: key});
      };

      /**
       * @name loadAsync
       * @private
       *
       * @description
       * Kicks of registered async loader using `$injector` and applies existing
       * loader options. When resolved, it updates translation tables accordingly
       * or rejects with given language key.
       *
       * @param {string} key Language key.
       * @return {Promise} A promise.
       */
      var loadAsync = function (key) {
        if (!key) {
          throw 'No language key specified for loading.';
        }

        var deferred = $q.defer();

        $rootScope.$emit('$translateLoadingStart', {language: key});
        pendingLoader = true;

        var cache = loaderCache;
        if (typeof(cache) === 'string') {
          // getting on-demand instance of loader
          cache = $injector.get(cache);
        }

        var loaderOptions = angular.extend({}, $loaderOptions, {
          key: key,
          $http: angular.extend({}, {
            cache: cache
          }, $loaderOptions.$http)
        });

        var onLoaderSuccess = function (data) {
          var translationTable = {};
          $rootScope.$emit('$translateLoadingSuccess', {language: key});

          if (angular.isArray(data)) {
            angular.forEach(data, function (table) {
              angular.extend(translationTable, flatObject(table));
            });
          } else {
            angular.extend(translationTable, flatObject(data));
          }
          pendingLoader = false;
          deferred.resolve({
            key: key,
            table: translationTable
          });
          $rootScope.$emit('$translateLoadingEnd', {language: key});
        };
        onLoaderSuccess.displayName = 'onLoaderSuccess';

        var onLoaderError = function (key) {
          $rootScope.$emit('$translateLoadingError', {language: key});
          deferred.reject(key);
          $rootScope.$emit('$translateLoadingEnd', {language: key});
        };
        onLoaderError.displayName = 'onLoaderError';

        $injector.get($loaderFactory)(loaderOptions)
          .then(onLoaderSuccess, onLoaderError);

        return deferred.promise;
      };

      if ($storageFactory) {
        Storage = $injector.get($storageFactory);

        if (!Storage.get || !Storage.put) {
          throw new Error('Couldn\'t use storage \'' + $storageFactory + '\', missing get() or put() method!');
        }
      }

      // if we have additional interpolations that were added via
      // $translateProvider.addInterpolation(), we have to map'em
      if ($interpolatorFactories.length) {
        var eachInterpolationFactory = function (interpolatorFactory) {
          var interpolator = $injector.get(interpolatorFactory);
          // setting initial locale for each interpolation service
          interpolator.setLocale($preferredLanguage || $uses);
          // make'em recognizable through id
          interpolatorHashMap[interpolator.getInterpolationIdentifier()] = interpolator;
        };
        eachInterpolationFactory.displayName = 'interpolationFactoryAdder';

        angular.forEach($interpolatorFactories, eachInterpolationFactory);
      }

      /**
       * @name getTranslationTable
       * @private
       *
       * @description
       * Returns a promise that resolves to the translation table
       * or is rejected if an error occurred.
       *
       * @param langKey
       * @returns {Q.promise}
       */
      var getTranslationTable = function (langKey) {
        var deferred = $q.defer();
        if (Object.prototype.hasOwnProperty.call($translationTable, langKey)) {
          deferred.resolve($translationTable[langKey]);
        } else if (langPromises[langKey]) {
          var onResolve = function (data) {
            translations(data.key, data.table);
            deferred.resolve(data.table);
          };
          onResolve.displayName = 'translationTableResolver';
          langPromises[langKey].then(onResolve, deferred.reject);
        } else {
          deferred.reject();
        }
        return deferred.promise;
      };

      /**
       * @name getFallbackTranslation
       * @private
       *
       * @description
       * Returns a promise that will resolve to the translation
       * or be rejected if no translation was found for the language.
       * This function is currently only used for fallback language translation.
       *
       * @param langKey The language to translate to.
       * @param translationId
       * @param interpolateParams
       * @param Interpolator
       * @returns {Q.promise}
       */
      var getFallbackTranslation = function (langKey, translationId, interpolateParams, Interpolator) {
        var deferred = $q.defer();

        var onResolve = function (translationTable) {
          if (Object.prototype.hasOwnProperty.call(translationTable, translationId)) {
            Interpolator.setLocale(langKey);
            var translation = translationTable[translationId];
            if (translation.substr(0, 2) === '@:') {
              getFallbackTranslation(langKey, translation.substr(2), interpolateParams, Interpolator)
                .then(deferred.resolve, deferred.reject);
            } else {
              deferred.resolve(Interpolator.interpolate(translationTable[translationId], interpolateParams));
            }
            Interpolator.setLocale($uses);
          } else {
            deferred.reject();
          }
        };
        onResolve.displayName = 'fallbackTranslationResolver';

        getTranslationTable(langKey).then(onResolve, deferred.reject);

        return deferred.promise;
      };

      /**
       * @name getFallbackTranslationInstant
       * @private
       *
       * @description
       * Returns a translation
       * This function is currently only used for fallback language translation.
       *
       * @param langKey The language to translate to.
       * @param translationId
       * @param interpolateParams
       * @param Interpolator
       * @returns {string} translation
       */
      var getFallbackTranslationInstant = function (langKey, translationId, interpolateParams, Interpolator) {
        var result, translationTable = $translationTable[langKey];

        if (translationTable && Object.prototype.hasOwnProperty.call(translationTable, translationId)) {
          Interpolator.setLocale(langKey);
          result = Interpolator.interpolate(translationTable[translationId], interpolateParams);
          if (result.substr(0, 2) === '@:') {
            return getFallbackTranslationInstant(langKey, result.substr(2), interpolateParams, Interpolator);
          }
          Interpolator.setLocale($uses);
        }

        return result;
      };


      /**
       * @name translateByHandler
       * @private
       *
       * Translate by missing translation handler.
       *
       * @param translationId
       * @returns translation created by $missingTranslationHandler or translationId is $missingTranslationHandler is
       * absent
       */
      var translateByHandler = function (translationId, interpolateParams) {
        // If we have a handler factory - we might also call it here to determine if it provides
        // a default text for a translationid that can't be found anywhere in our tables
        if ($missingTranslationHandlerFactory) {
          var resultString = $injector.get($missingTranslationHandlerFactory)(translationId, $uses, interpolateParams);
          if (resultString !== undefined) {
            return resultString;
          } else {
            return translationId;
          }
        } else {
          return translationId;
        }
      };

      /**
       * @name resolveForFallbackLanguage
       * @private
       *
       * Recursive helper function for fallbackTranslation that will sequentially look
       * for a translation in the fallbackLanguages starting with fallbackLanguageIndex.
       *
       * @param fallbackLanguageIndex
       * @param translationId
       * @param interpolateParams
       * @param Interpolator
       * @returns {Q.promise} Promise that will resolve to the translation.
       */
      var resolveForFallbackLanguage = function (fallbackLanguageIndex, translationId, interpolateParams, Interpolator, defaultTranslationText) {
        var deferred = $q.defer();

        if (fallbackLanguageIndex < $fallbackLanguage.length) {
          var langKey = $fallbackLanguage[fallbackLanguageIndex];
          getFallbackTranslation(langKey, translationId, interpolateParams, Interpolator).then(
            deferred.resolve,
            function () {
              // Look in the next fallback language for a translation.
              // It delays the resolving by passing another promise to resolve.
              resolveForFallbackLanguage(fallbackLanguageIndex + 1, translationId, interpolateParams, Interpolator, defaultTranslationText).then(deferred.resolve);
            }
          );
        } else {
          // No translation found in any fallback language
          // if a default translation text is set in the directive, then return this as a result
          if (defaultTranslationText) {
            deferred.resolve(defaultTranslationText);
          } else {
            // if no default translation is set and an error handler is defined, send it to the handler
            // and then return the result
            deferred.resolve(translateByHandler(translationId, interpolateParams));
          }
        }
        return deferred.promise;
      };

      /**
       * @name resolveForFallbackLanguageInstant
       * @private
       *
       * Recursive helper function for fallbackTranslation that will sequentially look
       * for a translation in the fallbackLanguages starting with fallbackLanguageIndex.
       *
       * @param fallbackLanguageIndex
       * @param translationId
       * @param interpolateParams
       * @param Interpolator
       * @returns {string} translation
       */
      var resolveForFallbackLanguageInstant = function (fallbackLanguageIndex, translationId, interpolateParams, Interpolator) {
        var result;

        if (fallbackLanguageIndex < $fallbackLanguage.length) {
          var langKey = $fallbackLanguage[fallbackLanguageIndex];
          result = getFallbackTranslationInstant(langKey, translationId, interpolateParams, Interpolator);
          if (!result) {
            result = resolveForFallbackLanguageInstant(fallbackLanguageIndex + 1, translationId, interpolateParams, Interpolator);
          }
        }
        return result;
      };

      /**
       * Translates with the usage of the fallback languages.
       *
       * @param translationId
       * @param interpolateParams
       * @param Interpolator
       * @returns {Q.promise} Promise, that resolves to the translation.
       */
      var fallbackTranslation = function (translationId, interpolateParams, Interpolator, defaultTranslationText) {
        // Start with the fallbackLanguage with index 0
        return resolveForFallbackLanguage((startFallbackIteration>0 ? startFallbackIteration : fallbackIndex), translationId, interpolateParams, Interpolator, defaultTranslationText);
      };

      /**
       * Translates with the usage of the fallback languages.
       *
       * @param translationId
       * @param interpolateParams
       * @param Interpolator
       * @returns {String} translation
       */
      var fallbackTranslationInstant = function (translationId, interpolateParams, Interpolator) {
        // Start with the fallbackLanguage with index 0
        return resolveForFallbackLanguageInstant((startFallbackIteration>0 ? startFallbackIteration : fallbackIndex), translationId, interpolateParams, Interpolator);
      };

      var determineTranslation = function (translationId, interpolateParams, interpolationId, defaultTranslationText) {

        var deferred = $q.defer();

        var table = $uses ? $translationTable[$uses] : $translationTable,
            Interpolator = (interpolationId) ? interpolatorHashMap[interpolationId] : defaultInterpolator;

        // if the translation id exists, we can just interpolate it
        if (table && Object.prototype.hasOwnProperty.call(table, translationId)) {
          var translation = table[translationId];

          // If using link, rerun $translate with linked translationId and return it
          if (translation.substr(0, 2) === '@:') {

            $translate(translation.substr(2), interpolateParams, interpolationId, defaultTranslationText)
              .then(deferred.resolve, deferred.reject);
          } else {
            deferred.resolve(Interpolator.interpolate(translation, interpolateParams));
          }
        } else {
          var missingTranslationHandlerTranslation;
          // for logging purposes only (as in $translateMissingTranslationHandlerLog), value is not returned to promise
          if ($missingTranslationHandlerFactory && !pendingLoader) {
            missingTranslationHandlerTranslation = translateByHandler(translationId, interpolateParams);
          }

          // since we couldn't translate the inital requested translation id,
          // we try it now with one or more fallback languages, if fallback language(s) is
          // configured.
          if ($uses && $fallbackLanguage && $fallbackLanguage.length) {
            fallbackTranslation(translationId, interpolateParams, Interpolator, defaultTranslationText)
                .then(function (translation) {
                  deferred.resolve(translation);
                }, function (_translationId) {
                  deferred.reject(applyNotFoundIndicators(_translationId));
                });
          } else if ($missingTranslationHandlerFactory && !pendingLoader && missingTranslationHandlerTranslation) {
            // looks like the requested translation id doesn't exists.
            // Now, if there is a registered handler for missing translations and no
            // asyncLoader is pending, we execute the handler
            if (defaultTranslationText) {
              deferred.resolve(defaultTranslationText);
              } else {
                deferred.resolve(missingTranslationHandlerTranslation);
              }
          } else {
            if (defaultTranslationText) {
              deferred.resolve(defaultTranslationText);
            } else {
              deferred.reject(applyNotFoundIndicators(translationId));
            }
          }
        }
        return deferred.promise;
      };

      var determineTranslationInstant = function (translationId, interpolateParams, interpolationId) {

        var result, table = $uses ? $translationTable[$uses] : $translationTable,
            Interpolator = defaultInterpolator;

        // if the interpolation id exists use custom interpolator
        if (interpolatorHashMap && Object.prototype.hasOwnProperty.call(interpolatorHashMap, interpolationId)) {
          Interpolator = interpolatorHashMap[interpolationId];
        }

        // if the translation id exists, we can just interpolate it
        if (table && Object.prototype.hasOwnProperty.call(table, translationId)) {
          var translation = table[translationId];

          // If using link, rerun $translate with linked translationId and return it
          if (translation.substr(0, 2) === '@:') {
            result = determineTranslationInstant(translation.substr(2), interpolateParams, interpolationId);
          } else {
            result = Interpolator.interpolate(translation, interpolateParams);
          }
        } else {
          var missingTranslationHandlerTranslation;
          // for logging purposes only (as in $translateMissingTranslationHandlerLog), value is not returned to promise
          if ($missingTranslationHandlerFactory && !pendingLoader) {
            missingTranslationHandlerTranslation = translateByHandler(translationId, interpolateParams);
          }

          // since we couldn't translate the inital requested translation id,
          // we try it now with one or more fallback languages, if fallback language(s) is
          // configured.
          if ($uses && $fallbackLanguage && $fallbackLanguage.length) {
            fallbackIndex = 0;
            result = fallbackTranslationInstant(translationId, interpolateParams, Interpolator);
          } else if ($missingTranslationHandlerFactory && !pendingLoader && missingTranslationHandlerTranslation) {
            // looks like the requested translation id doesn't exists.
            // Now, if there is a registered handler for missing translations and no
            // asyncLoader is pending, we execute the handler
            result = missingTranslationHandlerTranslation;
          } else {
            result = applyNotFoundIndicators(translationId);
          }
        }

        return result;
      };

      var clearNextLangAndPromise = function(key) {
        if ($nextLang === key) {
          $nextLang = undefined;
        }
        langPromises[key] = undefined;
      };

      /**
       * @ngdoc function
       * @name pascalprecht.translate.$translate#preferredLanguage
       * @methodOf pascalprecht.translate.$translate
       *
       * @description
       * Returns the language key for the preferred language.
       *
       * @param {string} langKey language String or Array to be used as preferredLanguage (changing at runtime)
       *
       * @return {string} preferred language key
       */
      $translate.preferredLanguage = function (langKey) {
        if(langKey) {
          setupPreferredLanguage(langKey);
        }
        return $preferredLanguage;
      };

      /**
       * @ngdoc function
       * @name pascalprecht.translate.$translate#cloakClassName
       * @methodOf pascalprecht.translate.$translate
       *
       * @description
       * Returns the configured class name for `translate-cloak` directive.
       *
       * @return {string} cloakClassName
       */
      $translate.cloakClassName = function () {
        return $cloakClassName;
      };

      /**
       * @ngdoc function
       * @name pascalprecht.translate.$translate#fallbackLanguage
       * @methodOf pascalprecht.translate.$translate
       *
       * @description
       * Returns the language key for the fallback languages or sets a new fallback stack.
       *
       * @param {string=} langKey language String or Array of fallback languages to be used (to change stack at runtime)
       *
       * @return {string||array} fallback language key
       */
      $translate.fallbackLanguage = function (langKey) {
        if (langKey !== undefined && langKey !== null) {
          fallbackStack(langKey);

          // as we might have an async loader initiated and a new translation language might have been defined
          // we need to add the promise to the stack also. So - iterate.
          if ($loaderFactory) {
            if ($fallbackLanguage && $fallbackLanguage.length) {
              for (var i = 0, len = $fallbackLanguage.length; i < len; i++) {
                if (!langPromises[$fallbackLanguage[i]]) {
                  langPromises[$fallbackLanguage[i]] = loadAsync($fallbackLanguage[i]);
                }
              }
            }
          }
          $translate.use($translate.use());
        }
        if ($fallbackWasString) {
          return $fallbackLanguage[0];
        } else {
          return $fallbackLanguage;
        }

      };

      /**
       * @ngdoc function
       * @name pascalprecht.translate.$translate#useFallbackLanguage
       * @methodOf pascalprecht.translate.$translate
       *
       * @description
       * Sets the first key of the fallback language stack to be used for translation.
       * Therefore all languages in the fallback array BEFORE this key will be skipped!
       *
       * @param {string=} langKey Contains the langKey the iteration shall start with. Set to false if you want to
       * get back to the whole stack
       */
      $translate.useFallbackLanguage = function (langKey) {
        if (langKey !== undefined && langKey !== null) {
          if (!langKey) {
            startFallbackIteration = 0;
          } else {
            var langKeyPosition = indexOf($fallbackLanguage, langKey);
            if (langKeyPosition > -1) {
              startFallbackIteration = langKeyPosition;
            }
          }

        }

      };

      /**
       * @ngdoc function
       * @name pascalprecht.translate.$translate#proposedLanguage
       * @methodOf pascalprecht.translate.$translate
       *
       * @description
       * Returns the language key of language that is currently loaded asynchronously.
       *
       * @return {string} language key
       */
      $translate.proposedLanguage = function () {
        return $nextLang;
      };

      /**
       * @ngdoc function
       * @name pascalprecht.translate.$translate#storage
       * @methodOf pascalprecht.translate.$translate
       *
       * @description
       * Returns registered storage.
       *
       * @return {object} Storage
       */
      $translate.storage = function () {
        return Storage;
      };

      /**
       * @ngdoc function
       * @name pascalprecht.translate.$translate#use
       * @methodOf pascalprecht.translate.$translate
       *
       * @description
       * Tells angular-translate which language to use by given language key. This method is
       * used to change language at runtime. It also takes care of storing the language
       * key in a configured store to let your app remember the choosed language.
       *
       * When trying to 'use' a language which isn't available it tries to load it
       * asynchronously with registered loaders.
       *
       * Returns promise object with loaded language file data
       * @example
       * $translate.use("en_US").then(function(data){
       *   $scope.text = $translate("HELLO");
       * });
       *
       * @param {string} key Language key
       * @return {string} Language key
       */
      $translate.use = function (key) {
        if (!key) {
          return $uses;
        }

        var deferred = $q.defer();

        $rootScope.$emit('$translateChangeStart', {language: key});

        // Try to get the aliased language key
        var aliasedKey = negotiateLocale(key);
        if (aliasedKey) {
          key = aliasedKey;
        }

        // if there isn't a translation table for the language we've requested,
        // we load it asynchronously
        if (($forceAsyncReloadEnabled || !$translationTable[key]) && $loaderFactory && !langPromises[key]) {
          $nextLang = key;
          langPromises[key] = loadAsync(key).then(function (translation) {
            translations(translation.key, translation.table);
            deferred.resolve(translation.key);
            useLanguage(translation.key);
            return translation;
          }, function (key) {
            $rootScope.$emit('$translateChangeError', {language: key});
            deferred.reject(key);
            $rootScope.$emit('$translateChangeEnd', {language: key});
            return $q.reject(key);
          });
          langPromises[key]['finally'](function () {
            clearNextLangAndPromise(key);
          });
        } else if ($nextLang === key && langPromises[key]) {
          // we are already loading this asynchronously
          // resolve our new deferred when the old langPromise is resolved
          langPromises[key].then(function (translation) {
            deferred.resolve(translation.key);
            return translation;
          }, function (key) {
            deferred.reject(key);
            return $q.reject(key);
          });
        } else {
          deferred.resolve(key);
          useLanguage(key);
        }

        return deferred.promise;
      };

      /**
       * @ngdoc function
       * @name pascalprecht.translate.$translate#storageKey
       * @methodOf pascalprecht.translate.$translate
       *
       * @description
       * Returns the key for the storage.
       *
       * @return {string} storage key
       */
      $translate.storageKey = function () {
        return storageKey();
      };

      /**
       * @ngdoc function
       * @name pascalprecht.translate.$translate#isPostCompilingEnabled
       * @methodOf pascalprecht.translate.$translate
       *
       * @description
       * Returns whether post compiling is enabled or not
       *
       * @return {bool} storage key
       */
      $translate.isPostCompilingEnabled = function () {
        return $postCompilingEnabled;
      };

      /**
       * @ngdoc function
       * @name pascalprecht.translate.$translate#isForceAsyncReloadEnabled
       * @methodOf pascalprecht.translate.$translate
       *
       * @description
       * Returns whether force async reload is enabled or not
       *
       * @return {boolean} forceAsyncReload value
       */
      $translate.isForceAsyncReloadEnabled = function () {
        return $forceAsyncReloadEnabled;
      };

      /**
       * @ngdoc function
       * @name pascalprecht.translate.$translate#refresh
       * @methodOf pascalprecht.translate.$translate
       *
       * @description
       * Refreshes a translation table pointed by the given langKey. If langKey is not specified,
       * the module will drop all existent translation tables and load new version of those which
       * are currently in use.
       *
       * Refresh means that the module will drop target translation table and try to load it again.
       *
       * In case there are no loaders registered the refresh() method will throw an Error.
       *
       * If the module is able to refresh translation tables refresh() method will broadcast
       * $translateRefreshStart and $translateRefreshEnd events.
       *
       * @example
       * // this will drop all currently existent translation tables and reload those which are
       * // currently in use
       * $translate.refresh();
       * // this will refresh a translation table for the en_US language
       * $translate.refresh('en_US');
       *
       * @param {string} langKey A language key of the table, which has to be refreshed
       *
       * @return {promise} Promise, which will be resolved in case a translation tables refreshing
       * process is finished successfully, and reject if not.
       */
      $translate.refresh = function (langKey) {
        if (!$loaderFactory) {
          throw new Error('Couldn\'t refresh translation table, no loader registered!');
        }

        var deferred = $q.defer();

        function resolve() {
          deferred.resolve();
          $rootScope.$emit('$translateRefreshEnd', {language: langKey});
        }

        function reject() {
          deferred.reject();
          $rootScope.$emit('$translateRefreshEnd', {language: langKey});
        }

        $rootScope.$emit('$translateRefreshStart', {language: langKey});

        if (!langKey) {
          // if there's no language key specified we refresh ALL THE THINGS!
          var tables = [], loadingKeys = {};

          // reload registered fallback languages
          if ($fallbackLanguage && $fallbackLanguage.length) {
            for (var i = 0, len = $fallbackLanguage.length; i < len; i++) {
              tables.push(loadAsync($fallbackLanguage[i]));
              loadingKeys[$fallbackLanguage[i]] = true;
            }
          }

          // reload currently used language
          if ($uses && !loadingKeys[$uses]) {
            tables.push(loadAsync($uses));
          }

          var allTranslationsLoaded = function (tableData) {
            $translationTable = {};
            angular.forEach(tableData, function (data) {
              translations(data.key, data.table);
            });
            if ($uses) {
              useLanguage($uses);
            }
            resolve();
          };
          allTranslationsLoaded.displayName = 'refreshPostProcessor';

          $q.all(tables).then(allTranslationsLoaded, reject);

        } else if ($translationTable[langKey]) {

          var oneTranslationsLoaded = function (data) {
            translations(data.key, data.table);
            if (langKey === $uses) {
              useLanguage($uses);
            }
            resolve();
          };
          oneTranslationsLoaded.displayName = 'refreshPostProcessor';

          loadAsync(langKey).then(oneTranslationsLoaded, reject);

        } else {
          reject();
        }
        return deferred.promise;
      };

      /**
       * @ngdoc function
       * @name pascalprecht.translate.$translate#instant
       * @methodOf pascalprecht.translate.$translate
       *
       * @description
       * Returns a translation instantly from the internal state of loaded translation. All rules
       * regarding the current language, the preferred language of even fallback languages will be
       * used except any promise handling. If a language was not found, an asynchronous loading
       * will be invoked in the background.
       *
       * @param {string|array} translationId A token which represents a translation id
       *                                     This can be optionally an array of translation ids which
       *                                     results that the function's promise returns an object where
       *                                     each key is the translation id and the value the translation.
       * @param {object} interpolateParams Params
       * @param {string} interpolationId The id of the interpolation to use
       *
       * @return {string|object} translation
       */
      $translate.instant = function (translationId, interpolateParams, interpolationId) {

        // Detect undefined and null values to shorten the execution and prevent exceptions
        if (translationId === null || angular.isUndefined(translationId)) {
          return translationId;
        }

        // Duck detection: If the first argument is an array, a bunch of translations was requested.
        // The result is an object.
        if (angular.isArray(translationId)) {
          var results = {};
          for (var i = 0, c = translationId.length; i < c; i++) {
            results[translationId[i]] = $translate.instant(translationId[i], interpolateParams, interpolationId);
          }
          return results;
        }

        // We discarded unacceptable values. So we just need to verify if translationId is empty String
        if (angular.isString(translationId) && translationId.length < 1) {
          return translationId;
        }

        // trim off any whitespace
        if (translationId) {
          translationId = trim.apply(translationId);
        }

        var result, possibleLangKeys = [];
        if ($preferredLanguage) {
          possibleLangKeys.push($preferredLanguage);
        }
        if ($uses) {
          possibleLangKeys.push($uses);
        }
        if ($fallbackLanguage && $fallbackLanguage.length) {
          possibleLangKeys = possibleLangKeys.concat($fallbackLanguage);
        }
        for (var j = 0, d = possibleLangKeys.length; j < d; j++) {
          var possibleLangKey = possibleLangKeys[j];
          if ($translationTable[possibleLangKey]) {
            if (typeof $translationTable[possibleLangKey][translationId] !== 'undefined') {
              result = determineTranslationInstant(translationId, interpolateParams, interpolationId);
            } else if ($notFoundIndicatorLeft || $notFoundIndicatorRight) {
              result = applyNotFoundIndicators(translationId);
            }
          }
          if (typeof result !== 'undefined') {
            break;
          }
        }

        if (!result && result !== '') {
          // Return translation of default interpolator if not found anything.
          result = defaultInterpolator.interpolate(translationId, interpolateParams);
          if ($missingTranslationHandlerFactory && !pendingLoader) {
            result = translateByHandler(translationId, interpolateParams);
          }
        }

        return result;
      };

      /**
       * @ngdoc function
       * @name pascalprecht.translate.$translate#versionInfo
       * @methodOf pascalprecht.translate.$translate
       *
       * @description
       * Returns the current version information for the angular-translate library
       *
       * @return {string} angular-translate version
       */
      $translate.versionInfo = function () {
        return version;
      };

      /**
       * @ngdoc function
       * @name pascalprecht.translate.$translate#loaderCache
       * @methodOf pascalprecht.translate.$translate
       *
       * @description
       * Returns the defined loaderCache.
       *
       * @return {boolean|string|object} current value of loaderCache
       */
      $translate.loaderCache = function () {
        return loaderCache;
      };

      // internal purpose only
      $translate.directivePriority = function () {
        return directivePriority;
      };

      // internal purpose only
      $translate.statefulFilter = function () {
        return statefulFilter;
      };

      if ($loaderFactory) {

        // If at least one async loader is defined and there are no
        // (default) translations available we should try to load them.
        if (angular.equals($translationTable, {})) {
          $translate.use($translate.use());
        }

        // Also, if there are any fallback language registered, we start
        // loading them asynchronously as soon as we can.
        if ($fallbackLanguage && $fallbackLanguage.length) {
          var processAsyncResult = function (translation) {
            translations(translation.key, translation.table);
            $rootScope.$emit('$translateChangeEnd', { language: translation.key });
            return translation;
          };
          for (var i = 0, len = $fallbackLanguage.length; i < len; i++) {
            var fallbackLanguageId = $fallbackLanguage[i];
            if ($forceAsyncReloadEnabled || !$translationTable[fallbackLanguageId]) {
              langPromises[fallbackLanguageId] = loadAsync(fallbackLanguageId).then(processAsyncResult);
            }
          }
        }
      }

      return $translate;
    }
  ];
}
$translate.$inject = ['$STORAGE_KEY', '$windowProvider', '$translateSanitizationProvider', 'pascalprechtTranslateOverrider'];

$translate.displayName = 'displayName';

/**
 * @ngdoc object
 * @name pascalprecht.translate.$translateDefaultInterpolation
 * @requires $interpolate
 *
 * @description
 * Uses angular's `$interpolate` services to interpolate strings against some values.
 *
 * Be aware to configure a proper sanitization strategy.
 *
 * See also:
 * * {@link pascalprecht.translate.$translateSanitization}
 *
 * @return {object} $translateDefaultInterpolation Interpolator service
 */
angular.module('pascalprecht.translate').factory('$translateDefaultInterpolation', $translateDefaultInterpolation);

function $translateDefaultInterpolation ($interpolate, $translateSanitization) {

  'use strict';

  var $translateInterpolator = {},
      $locale,
      $identifier = 'default';

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateDefaultInterpolation#setLocale
   * @methodOf pascalprecht.translate.$translateDefaultInterpolation
   *
   * @description
   * Sets current locale (this is currently not use in this interpolation).
   *
   * @param {string} locale Language key or locale.
   */
  $translateInterpolator.setLocale = function (locale) {
    $locale = locale;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateDefaultInterpolation#getInterpolationIdentifier
   * @methodOf pascalprecht.translate.$translateDefaultInterpolation
   *
   * @description
   * Returns an identifier for this interpolation service.
   *
   * @returns {string} $identifier
   */
  $translateInterpolator.getInterpolationIdentifier = function () {
    return $identifier;
  };

  /**
   * @deprecated will be removed in 3.0
   * @see {@link pascalprecht.translate.$translateSanitization}
   */
  $translateInterpolator.useSanitizeValueStrategy = function (value) {
    $translateSanitization.useStrategy(value);
    return this;
  };

  /**
   * @ngdoc function
   * @name pascalprecht.translate.$translateDefaultInterpolation#interpolate
   * @methodOf pascalprecht.translate.$translateDefaultInterpolation
   *
   * @description
   * Interpolates given string agains given interpolate params using angulars
   * `$interpolate` service.
   *
   * @returns {string} interpolated string.
   */
  $translateInterpolator.interpolate = function (string, interpolationParams) {
    interpolationParams = interpolationParams || {};
    interpolationParams = $translateSanitization.sanitize(interpolationParams, 'params');

    var interpolatedText = $interpolate(string)(interpolationParams);
    interpolatedText = $translateSanitization.sanitize(interpolatedText, 'text');

    return interpolatedText;
  };

  return $translateInterpolator;
}
$translateDefaultInterpolation.$inject = ['$interpolate', '$translateSanitization'];

$translateDefaultInterpolation.displayName = '$translateDefaultInterpolation';

angular.module('pascalprecht.translate').constant('$STORAGE_KEY', 'NG_TRANSLATE_LANG_KEY');

angular.module('pascalprecht.translate')
/**
 * @ngdoc directive
 * @name pascalprecht.translate.directive:translate
 * @requires $compile
 * @requires $filter
 * @requires $interpolate
 * @restrict A
 *
 * @description
 * Translates given translation id either through attribute or DOM content.
 * Internally it uses `translate` filter to translate translation id. It possible to
 * pass an optional `translate-values` object literal as string into translation id.
 *
 * @param {string=} translate Translation id which could be either string or interpolated string.
 * @param {string=} translate-values Values to pass into translation id. Can be passed as object literal string or interpolated object.
 * @param {string=} translate-attr-ATTR translate Translation id and put it into ATTR attribute.
 * @param {string=} translate-default will be used unless translation was successful
 * @param {boolean=} translate-compile (default true if present) defines locally activation of {@link pascalprecht.translate.$translateProvider#methods_usePostCompiling}
 *
 * @example
   <example module="ngView">
    <file name="index.html">
      <div ng-controller="TranslateCtrl">

        <pre translate="TRANSLATION_ID"></pre>
        <pre translate>TRANSLATION_ID</pre>
        <pre translate translate-attr-title="TRANSLATION_ID"></pre>
        <pre translate="{{translationId}}"></pre>
        <pre translate>{{translationId}}</pre>
        <pre translate="WITH_VALUES" translate-values="{value: 5}"></pre>
        <pre translate translate-values="{value: 5}">WITH_VALUES</pre>
        <pre translate="WITH_VALUES" translate-values="{{values}}"></pre>
        <pre translate translate-values="{{values}}">WITH_VALUES</pre>
        <pre translate translate-attr-title="WITH_VALUES" translate-values="{{values}}"></pre>

      </div>
    </file>
    <file name="script.js">
      angular.module('ngView', ['pascalprecht.translate'])

      .config(function ($translateProvider) {

        $translateProvider.translations('en',{
          'TRANSLATION_ID': 'Hello there!',
          'WITH_VALUES': 'The following value is dynamic: {{value}}'
        }).preferredLanguage('en');

      });

      angular.module('ngView').controller('TranslateCtrl', function ($scope) {
        $scope.translationId = 'TRANSLATION_ID';

        $scope.values = {
          value: 78
        };
      });
    </file>
    <file name="scenario.js">
      it('should translate', function () {
        inject(function ($rootScope, $compile) {
          $rootScope.translationId = 'TRANSLATION_ID';

          element = $compile('<p translate="TRANSLATION_ID"></p>')($rootScope);
          $rootScope.$digest();
          expect(element.text()).toBe('Hello there!');

          element = $compile('<p translate="{{translationId}}"></p>')($rootScope);
          $rootScope.$digest();
          expect(element.text()).toBe('Hello there!');

          element = $compile('<p translate>TRANSLATION_ID</p>')($rootScope);
          $rootScope.$digest();
          expect(element.text()).toBe('Hello there!');

          element = $compile('<p translate>{{translationId}}</p>')($rootScope);
          $rootScope.$digest();
          expect(element.text()).toBe('Hello there!');

          element = $compile('<p translate translate-attr-title="TRANSLATION_ID"></p>')($rootScope);
          $rootScope.$digest();
          expect(element.attr('title')).toBe('Hello there!');
        });
      });
    </file>
   </example>
 */
.directive('translate', translateDirective);
function translateDirective($translate, $q, $interpolate, $compile, $parse, $rootScope) {

  'use strict';

  /**
   * @name trim
   * @private
   *
   * @description
   * trim polyfill
   *
   * @returns {string} The string stripped of whitespace from both ends
   */
  var trim = function() {
    return this.toString().replace(/^\s+|\s+$/g, '');
  };

  return {
    restrict: 'AE',
    scope: true,
    priority: $translate.directivePriority(),
    compile: function (tElement, tAttr) {

      var translateValuesExist = (tAttr.translateValues) ?
        tAttr.translateValues : undefined;

      var translateInterpolation = (tAttr.translateInterpolation) ?
        tAttr.translateInterpolation : undefined;

      var translateValueExist = tElement[0].outerHTML.match(/translate-value-+/i);

      var interpolateRegExp = '^(.*)(' + $interpolate.startSymbol() + '.*' + $interpolate.endSymbol() + ')(.*)',
          watcherRegExp = '^(.*)' + $interpolate.startSymbol() + '(.*)' + $interpolate.endSymbol() + '(.*)';

      return function linkFn(scope, iElement, iAttr) {

        scope.interpolateParams = {};
        scope.preText = '';
        scope.postText = '';
        var translationIds = {};

        var initInterpolationParams = function (interpolateParams, iAttr, tAttr) {
          // initial setup
          if (iAttr.translateValues) {
            angular.extend(interpolateParams, $parse(iAttr.translateValues)(scope.$parent));
          }
          // initially fetch all attributes if existing and fill the params
          if (translateValueExist) {
            for (var attr in tAttr) {
              if (Object.prototype.hasOwnProperty.call(iAttr, attr) && attr.substr(0, 14) === 'translateValue' && attr !== 'translateValues') {
                var attributeName = angular.lowercase(attr.substr(14, 1)) + attr.substr(15);
                interpolateParams[attributeName] = tAttr[attr];
              }
            }
          }
        };

        // Ensures any change of the attribute "translate" containing the id will
        // be re-stored to the scope's "translationId".
        // If the attribute has no content, the element's text value (white spaces trimmed off) will be used.
        var observeElementTranslation = function (translationId) {

          // Remove any old watcher
          if (angular.isFunction(observeElementTranslation._unwatchOld)) {
            observeElementTranslation._unwatchOld();
            observeElementTranslation._unwatchOld = undefined;
          }

          if (angular.equals(translationId , '') || !angular.isDefined(translationId)) {
            // Resolve translation id by inner html if required
            var interpolateMatches = trim.apply(iElement.text()).match(interpolateRegExp);
            // Interpolate translation id if required
            if (angular.isArray(interpolateMatches)) {
              scope.preText = interpolateMatches[1];
              scope.postText = interpolateMatches[3];
              translationIds.translate = $interpolate(interpolateMatches[2])(scope.$parent);
              var watcherMatches = iElement.text().match(watcherRegExp);
              if (angular.isArray(watcherMatches) && watcherMatches[2] && watcherMatches[2].length) {
                observeElementTranslation._unwatchOld = scope.$watch(watcherMatches[2], function (newValue) {
                  translationIds.translate = newValue;
                  updateTranslations();
                });
              }
            } else {
              translationIds.translate = iElement.text().replace(/^\s+|\s+$/g,'');
            }
          } else {
            translationIds.translate = translationId;
          }
          updateTranslations();
        };

        var observeAttributeTranslation = function (translateAttr) {
          iAttr.$observe(translateAttr, function (translationId) {
            translationIds[translateAttr] = translationId;
            updateTranslations();
          });
        };

        // initial setup with values
        initInterpolationParams(scope.interpolateParams, iAttr, tAttr);

        var firstAttributeChangedEvent = true;
        iAttr.$observe('translate', function (translationId) {
          if (typeof translationId === 'undefined') {
            // case of element "<translate>xyz</translate>"
            observeElementTranslation('');
          } else {
            // case of regular attribute
            if (translationId !== '' || !firstAttributeChangedEvent) {
              translationIds.translate = translationId;
              updateTranslations();
            }
          }
          firstAttributeChangedEvent = false;
        });

        for (var translateAttr in iAttr) {
          if (iAttr.hasOwnProperty(translateAttr) && translateAttr.substr(0, 13) === 'translateAttr') {
            observeAttributeTranslation(translateAttr);
          }
        }

        iAttr.$observe('translateDefault', function (value) {
          scope.defaultText = value;
        });

        if (translateValuesExist) {
          iAttr.$observe('translateValues', function (interpolateParams) {
            if (interpolateParams) {
              scope.$parent.$watch(function () {
                angular.extend(scope.interpolateParams, $parse(interpolateParams)(scope.$parent));
              });
            }
          });
        }

        if (translateValueExist) {
          var observeValueAttribute = function (attrName) {
            iAttr.$observe(attrName, function (value) {
              var attributeName = angular.lowercase(attrName.substr(14, 1)) + attrName.substr(15);
              scope.interpolateParams[attributeName] = value;
            });
          };
          for (var attr in iAttr) {
            if (Object.prototype.hasOwnProperty.call(iAttr, attr) && attr.substr(0, 14) === 'translateValue' && attr !== 'translateValues') {
              observeValueAttribute(attr);
            }
          }
        }

        // Master update function
        var updateTranslations = function () {
          for (var key in translationIds) {

            if (translationIds.hasOwnProperty(key) && translationIds[key] !== undefined) {
              updateTranslation(key, translationIds[key], scope, scope.interpolateParams, scope.defaultText);
            }
          }
        };

        // Put translation processing function outside loop
        var updateTranslation = function(translateAttr, translationId, scope, interpolateParams, defaultTranslationText) {
          if (translationId) {
            $translate(translationId, interpolateParams, translateInterpolation, defaultTranslationText)
              .then(function (translation) {
                applyTranslation(translation, scope, true, translateAttr);
              }, function (translationId) {
                applyTranslation(translationId, scope, false, translateAttr);
              });
          } else {
            // as an empty string cannot be translated, we can solve this using successful=false
            applyTranslation(translationId, scope, false, translateAttr);
          }
        };

        var applyTranslation = function (value, scope, successful, translateAttr) {
          if (translateAttr === 'translate') {
            // default translate into innerHTML
            if (!successful && typeof scope.defaultText !== 'undefined') {
              value = scope.defaultText;
            }
            iElement.html(scope.preText + value + scope.postText);
            var globallyEnabled = $translate.isPostCompilingEnabled();
            var locallyDefined = typeof tAttr.translateCompile !== 'undefined';
            var locallyEnabled = locallyDefined && tAttr.translateCompile !== 'false';
            if ((globallyEnabled && !locallyDefined) || locallyEnabled) {
              $compile(iElement.contents())(scope);
            }
          } else {
            // translate attribute
            if (!successful && typeof scope.defaultText !== 'undefined') {
              value = scope.defaultText;
            }
            var attributeName = iAttr.$attr[translateAttr];
            if (attributeName.substr(0, 5) === 'data-') {
              // ensure html5 data prefix is stripped
              attributeName = attributeName.substr(5);
            }
            attributeName = attributeName.substr(15);
            iElement.attr(attributeName, value);
          }
        };

        if (translateValuesExist || translateValueExist || iAttr.translateDefault) {
          scope.$watch('interpolateParams', updateTranslations, true);
        }

        // Ensures the text will be refreshed after the current language was changed
        // w/ $translate.use(...)
        var unbind = $rootScope.$on('$translateChangeSuccess', updateTranslations);

        // ensure translation will be looked up at least one
        if (iElement.text().length) {
          if (iAttr.translate) {
            observeElementTranslation(iAttr.translate);
          } else {
            observeElementTranslation('');
          }
        } else if (iAttr.translate) {
          // ensure attribute will be not skipped
          observeElementTranslation(iAttr.translate);
        }
        updateTranslations();
        scope.$on('$destroy', unbind);
      };
    }
  };
}
translateDirective.$inject = ['$translate', '$q', '$interpolate', '$compile', '$parse', '$rootScope'];

translateDirective.displayName = 'translateDirective';

angular.module('pascalprecht.translate')
/**
 * @ngdoc directive
 * @name pascalprecht.translate.directive:translateCloak
 * @requires $rootScope
 * @requires $translate
 * @restrict A
 *
 * $description
 * Adds a `translate-cloak` class name to the given element where this directive
 * is applied initially and removes it, once a loader has finished loading.
 *
 * This directive can be used to prevent initial flickering when loading translation
 * data asynchronously.
 *
 * The class name is defined in
 * {@link pascalprecht.translate.$translateProvider#cloakClassName $translate.cloakClassName()}.
 *
 * @param {string=} translate-cloak If a translationId is provided, it will be used for showing
 *                                  or hiding the cloak. Basically it relies on the translation
 *                                  resolve.
 */
.directive('translateCloak', translateCloakDirective);

function translateCloakDirective($rootScope, $translate) {

  'use strict';

  return {
    compile: function (tElement) {
      var applyCloak = function () {
        tElement.addClass($translate.cloakClassName());
      },
      removeCloak = function () {
        tElement.removeClass($translate.cloakClassName());
      },
      removeListener = $rootScope.$on('$translateChangeEnd', function () {
        removeCloak();
        removeListener();
        removeListener = null;
      });
      applyCloak();

      return function linkFn(scope, iElement, iAttr) {
        // Register a watcher for the defined translation allowing a fine tuned cloak
        if (iAttr.translateCloak && iAttr.translateCloak.length) {
          iAttr.$observe('translateCloak', function (translationId) {
            $translate(translationId).then(removeCloak, applyCloak);
          });
        }
      };
    }
  };
}
translateCloakDirective.$inject = ['$rootScope', '$translate'];

translateCloakDirective.displayName = 'translateCloakDirective';

angular.module('pascalprecht.translate')
/**
 * @ngdoc filter
 * @name pascalprecht.translate.filter:translate
 * @requires $parse
 * @requires pascalprecht.translate.$translate
 * @function
 *
 * @description
 * Uses `$translate` service to translate contents. Accepts interpolate parameters
 * to pass dynamized values though translation.
 *
 * @param {string} translationId A translation id to be translated.
 * @param {*=} interpolateParams Optional object literal (as hash or string) to pass values into translation.
 *
 * @returns {string} Translated text.
 *
 * @example
   <example module="ngView">
    <file name="index.html">
      <div ng-controller="TranslateCtrl">

        <pre>{{ 'TRANSLATION_ID' | translate }}</pre>
        <pre>{{ translationId | translate }}</pre>
        <pre>{{ 'WITH_VALUES' | translate:'{value: 5}' }}</pre>
        <pre>{{ 'WITH_VALUES' | translate:values }}</pre>

      </div>
    </file>
    <file name="script.js">
      angular.module('ngView', ['pascalprecht.translate'])

      .config(function ($translateProvider) {

        $translateProvider.translations('en', {
          'TRANSLATION_ID': 'Hello there!',
          'WITH_VALUES': 'The following value is dynamic: {{value}}'
        });
        $translateProvider.preferredLanguage('en');

      });

      angular.module('ngView').controller('TranslateCtrl', function ($scope) {
        $scope.translationId = 'TRANSLATION_ID';

        $scope.values = {
          value: 78
        };
      });
    </file>
   </example>
 */
.filter('translate', translateFilterFactory);

function translateFilterFactory($parse, $translate) {

  'use strict';

  var translateFilter = function (translationId, interpolateParams, interpolation) {

    if (!angular.isObject(interpolateParams)) {
      interpolateParams = $parse(interpolateParams)(this);
    }

    return $translate.instant(translationId, interpolateParams, interpolation);
  };

  if ($translate.statefulFilter()) {
    translateFilter.$stateful = true;
  }

  return translateFilter;
}
translateFilterFactory.$inject = ['$parse', '$translate'];

translateFilterFactory.displayName = 'translateFilterFactory';

angular.module('pascalprecht.translate')

/**
 * @ngdoc object
 * @name pascalprecht.translate.$translationCache
 * @requires $cacheFactory
 *
 * @description
 * The first time a translation table is used, it is loaded in the translation cache for quick retrieval. You
 * can load translation tables directly into the cache by consuming the
 * `$translationCache` service directly.
 *
 * @return {object} $cacheFactory object.
 */
  .factory('$translationCache', $translationCache);

function $translationCache($cacheFactory) {

  'use strict';

  return $cacheFactory('translations');
}
$translationCache.$inject = ['$cacheFactory'];

$translationCache.displayName = '$translationCache';
return 'pascalprecht.translate';

}));


(function(exports, global) {
    global["eeh-navigation"] = exports;
    "use strict";
    angular.module("eehNavigation", [ "pascalprecht.translate" ]);
    "use strict";
    angular.module("eehNavigation").directive("eehNavigationActiveMenuItem", ActiveMenuItemDirective);
    function isMenuItemActive(menuItem, $state) {
        if (!menuItem.hasChildren()) {
            return angular.isDefined(menuItem.state) && $state.includes(menuItem.state);
        }
        var children = menuItem.children();
        for (var i = 0; i < children.length; i++) {
            if (angular.isDefined(children[i].state) && $state.includes(children[i].state)) {
                return true;
            }
            if (isMenuItemActive(children[i], $state)) {
                return true;
            }
        }
        return false;
    }
    function ActiveMenuItemDirective($state) {
        return {
            restrict: "A",
            scope: {
                menuItem: "=eehNavigationActiveMenuItem"
            },
            link: function(scope, element) {
                var checkIsActive = function() {
                    var isActive = isMenuItemActive(scope.menuItem, $state);
                    element.toggleClass("active", isActive);
                };
                scope.$on("$stateChangeSuccess", checkIsActive);
                checkIsActive();
            }
        };
    }
    ActiveMenuItemDirective.$inject = [ "$state" ];
    "use strict";
    var MenuItem = function(config) {
        this.weight = 0;
        angular.extend(this, config);
    };
    MenuItem.prototype.children = function() {
        var children = [];
        angular.forEach(this, function(property) {
            if (angular.isObject(property) && property instanceof MenuItem) {
                children.push(property);
            }
        });
        return children;
    };
    MenuItem.prototype.hasChildren = function() {
        return this.children().length > 0;
    };
    MenuItem.prototype._isVisible = function() {
        var hasVisibleChildren = this.children().filter(function(child) {
            return child._isVisible() !== false;
        }).length > 0;
        if (!hasVisibleChildren && angular.isUndefined(this.state) && angular.isUndefined(this.href) && angular.isUndefined(this.click) && !this.isDivider) {
            return false;
        }
        if (angular.isFunction(this.isVisible)) {
            return this.isVisible();
        }
        if (angular.isDefined(this.isVisible)) {
            return this.isVisible;
        }
        return true;
    };
    MenuItem.prototype.isVisible = function() {
        return true;
    };
    MenuItem.prototype.isHeavy = function() {
        if (this.hasOwnProperty("weight")) {
            return this.weight >= 0;
        }
    };
    "use strict";
    angular.module("eehNavigation").provider("eehNavigation", NavigationService);
    function NavigationService() {
        this._iconBaseClass = "glyphicon";
        this._defaultIconClassPrefix = "glyphicon";
        this._menuItems = {};
        this._toArray = function(items) {
            var arr = [];
            for (var key in items) {
                if (items.hasOwnProperty(key)) {
                    arr.push(items[key]);
                }
            }
            return arr;
        };
    }
    NavigationService.prototype.$get = function() {
        return this;
    };
    NavigationService.prototype.iconBaseClass = function(value) {
        if (angular.isUndefined(value)) {
            return this._iconBaseClass;
        }
        this._iconBaseClass = value;
        return this;
    };
    NavigationService.prototype.defaultIconClassPrefix = function(value) {
        if (angular.isUndefined(value)) {
            return this._defaultIconClassPrefix;
        }
        this._defaultIconClassPrefix = value;
        return this;
    };
    NavigationService.prototype.buildAncestorChain = function(name, items, config) {
        var keys = name.split(".");
        if (name.length === 0 || keys.length === 0) {
            return;
        }
        var key = keys.shift();
        if (angular.isUndefined(items[key])) {
            items[key] = keys.length === 0 ? config : {};
            if (keys.length === 0) {
                items[key] = config;
            }
        }
        this.buildAncestorChain(keys.join("."), items[key], config);
    };
    NavigationService.prototype.menuItemTree = function(menuName) {
        var items = {};
        var self = this;
        var menuItemsToTransform = {};
        if (angular.isDefined(menuName)) {
            var menuNameRegex = new RegExp("^" + menuName + ".");
            angular.forEach(this._menuItems, function(menuItem, menuItemName) {
                if (menuItemName.match(menuNameRegex) !== null) {
                    menuItemsToTransform[menuItemName.replace(menuNameRegex, "")] = menuItem;
                }
            });
        } else {
            menuItemsToTransform = this._menuItems;
        }
        angular.forEach(menuItemsToTransform, function(config, name) {
            self.buildAncestorChain(name, items, config);
        });
        return this._toArray(items);
    };
    NavigationService.prototype.menuItem = function(name, config) {
        if (angular.isUndefined(config)) {
            if (angular.isUndefined(this._menuItems[name])) {
                throw name + " is not a menu item";
            }
            return this._menuItems[name];
        }
        this._menuItems[name] = new MenuItem(config);
        return this;
    };
    NavigationService.prototype.menuItems = function() {
        return this._menuItems;
    };
    "use strict";
    angular.module("eehNavigation").directive("eehNavigationMenuItemContent", MenuItemContentDirective);
    function MenuItemContentDirective(eehNavigation) {
        return {
            restrict: "A",
            scope: {
                menuItem: "=eehNavigationMenuItemContent"
            },
            templateUrl: "template/eeh-navigation/menu-item-content/eeh-navigation-menu-item-content.html",
            link: function(scope) {
                scope.iconBaseClass = function() {
                    return eehNavigation.iconBaseClass();
                };
            }
        };
    }
    MenuItemContentDirective.$inject = [ "eehNavigation" ];
    "use strict";
    angular.module("eehNavigation").directive("eehNavigationMenu", MenuDirective);
    function MenuDirective(eehNavigation) {
        return {
            restrict: "AE",
            templateUrl: "template/eeh-navigation/menu/eeh-navigation-menu.html",
            scope: {
                menuName: "=",
                navClass: "=?",
                menuItemCollapsedIconClass: "=?",
                menuItemExpandedIconClass: "=?"
            },
            link: function(scope) {
                scope.iconBaseClass = function() {
                    return eehNavigation.iconBaseClass();
                };
                scope.defaultIconClassPrefix = function() {
                    return eehNavigation.defaultIconClassPrefix();
                };
                scope.navClass = scope.navClass || "navigation-menu";
                scope.menuItemCollapsedIconClass = scope.menuItemCollapsedIconClass || scope.defaultIconClassPrefix() + "-chevron-left";
                scope.menuItemExpandedIconClass = scope.menuItemExpandedIconClass || scope.defaultIconClassPrefix() + "-chevron-down";
                scope.$watch(eehNavigation.menuItems, function() {
                    if (angular.isUndefined(scope.menuName)) {
                        return;
                    }
                    scope.menuItems = eehNavigation.menuItemTree(scope.menuName);
                }, true);
            }
        };
    }
    MenuDirective.$inject = [ "eehNavigation" ];
    "use strict";
    angular.module("eehNavigation").directive("eehNavigationNavbarBrand", NavbarBrandDirective);
    function NavbarBrandDirective() {
        return {
            restrict: "AE",
            templateUrl: "template/eeh-navigation/navbar/eeh-navigation-navbar-brand.html",
            scope: {
                text: "=",
                state: "=",
                href: "=",
                target: "=",
                src: "=",
                click: "="
            }
        };
    }
    "use strict";
    var NavbarDirective = function($window, eehNavigation) {
        return {
            restrict: "AE",
            templateUrl: "template/eeh-navigation/navbar/eeh-navigation-navbar.html",
            scope: {
                menuName: "=",
                navClass: "=?",
                containerClass: "=?",
                brandText: "=",
                brandState: "=",
                brandHref: "=",
                brandTarget: "=",
                brandSrc: "=",
                brandClick: "="
            },
            link: function(scope) {
                scope.iconBaseClass = function() {
                    return eehNavigation.iconBaseClass();
                };
                scope.navClass = scope.navClass || "navbar-default navbar-static-top";
                scope.isNavbarCollapsed = true;
                scope.$watch(eehNavigation.menuItems, function() {
                    if (angular.isUndefined(scope.menuName)) {
                        return;
                    }
                    var menuItems = eehNavigation.menuItemTree(scope.menuName);
                    scope.leftNavbarMenuItems = menuItems.filter(function(item) {
                        return !item.isHeavy();
                    });
                    scope.rightNavbarMenuItems = menuItems.filter(function(item) {
                        return item.isHeavy();
                    });
                }, true);
                var windowElement = angular.element($window);
                windowElement.bind("resize", function() {
                    scope.$apply();
                });
                var getWindowDimensions = function() {
                    return {
                        innerHeight: windowElement[0].innerHeight,
                        innerWidth: windowElement[0].innerWidth
                    };
                };
                scope.$watch(getWindowDimensions, function(newValue) {
                    if (angular.isUndefined(newValue)) {
                        return;
                    }
                    var width = newValue.innerWidth > 0 ? newValue.innerWidth : $window.screen.width;
                    if (width >= 768) {
                        scope.isNavbarCollapsed = true;
                    }
                }, true);
            }
        };
    };
    angular.module("eehNavigation").directive("eehNavigationNavbar", [ "$window", "eehNavigation", NavbarDirective ]);
    "use strict";
    angular.module("eehNavigation").directive("eehNavigationSearchInput", SearchInputDirective);
    function SearchInputDirective(eehNavigation) {
        return {
            restrict: "AE",
            transclude: true,
            templateUrl: "template/eeh-navigation/search-input/eeh-navigation-search-input.html",
            scope: {
                iconClass: "=",
                submit: "=",
                classes: "=",
                isCollapsed: "="
            },
            link: function(scope) {
                scope.model = {
                    query: ""
                };
                scope.iconBaseClass = function() {
                    return eehNavigation.iconBaseClass();
                };
            }
        };
    }
    SearchInputDirective.$inject = [ "eehNavigation" ];
    "use strict";
    angular.module("eehNavigation").directive("eehNavigationSidebar", SidebarDirective);
    function SidebarDirective($window, eehNavigation) {
        return {
            restrict: "AE",
            transclude: true,
            templateUrl: "template/eeh-navigation/sidebar/eeh-navigation-sidebar.html",
            scope: {
                menuName: "=",
                navClass: "=?",
                topOffset: "=?",
                menuItemCollapsedIconClass: "=?",
                menuItemExpandedIconClass: "=?",
                sidebarCollapsedIconClass: "=?",
                sidebarExpandedIconClass: "=?",
                searchInputIconClass: "=?",
                searchInputIsVisible: "=?",
                searchInputSubmit: "=",
                sidebarCollapsedButtonIsVisible: "=?",
                sidebarIsCollapsed: "=?"
            },
            link: function(scope) {
                scope.iconBaseClass = function() {
                    return eehNavigation.iconBaseClass();
                };
                scope.defaultIconClassPrefix = function() {
                    return eehNavigation.defaultIconClassPrefix();
                };
                scope.topOffset = scope.topOffset || 51;
                scope.navClass = scope.navClass || "navbar-default";
                scope.menuItemCollapsedIconClass = scope.menuItemCollapsedIconClass || scope.defaultIconClassPrefix() + "-chevron-left";
                scope.menuItemExpandedIconClass = scope.menuItemExpandedIconClass || scope.defaultIconClassPrefix() + "-chevron-down";
                scope.sidebarCollapsedIconClass = scope.sidebarCollapsedIconClass || scope.defaultIconClassPrefix() + "-arrow-right";
                scope.sidebarExpandedIconClass = scope.sidebarExpandedIconClass || scope.defaultIconClassPrefix() + "-arrow-left";
                scope.searchInputIconClass = scope.searchInputIconClass || scope.defaultIconClassPrefix() + "-search";
                if (scope.sidebarCollapsedButtonIsVisible !== false) {
                    scope.sidebarCollapsedButtonIsVisible = true;
                }
                scope.sidebarIsCollapsed = scope.sidebarIsCollapsed || false;
                if (scope.searchInputIsVisible !== false) {
                    scope.searchInputIsVisible = true;
                }
                var menuItems = function() {
                    return eehNavigation.menuItems();
                };
                scope.$watch(menuItems, function() {
                    if (angular.isUndefined(scope.menuName)) {
                        return;
                    }
                    scope.sidebarMenuItems = eehNavigation.menuItemTree(scope.menuName);
                }, true);
                var windowElement = angular.element($window);
                windowElement.bind("resize", function() {
                    scope.$apply();
                });
                var getWindowDimensions = function() {
                    return {
                        innerHeight: windowElement[0].innerHeight,
                        innerWidth: windowElement[0].innerWidth
                    };
                };
                var transcludedWrapper = angular.element(document.querySelectorAll("#eeh-navigation-page-wrapper"));
                scope.$watch(getWindowDimensions, function(newValue) {
                    if (angular.isUndefined(newValue)) {
                        return;
                    }
                    var height = newValue.innerHeight > 0 ? newValue.innerHeight : $window.screen.height;
                    height = height - scope.topOffset;
                    if (height < 1) {
                        height = 1;
                    }
                    if (height > scope.topOffset) {
                        transcludedWrapper.css("min-height", height + "px");
                    }
                }, true);
                scope.toggleSidebarTextCollapse = function() {
                    scope.sidebarIsCollapsed = !scope.sidebarIsCollapsed;
                    setTextCollapseState();
                };
                function setTextCollapseState() {
                    var sidebarMenuItems = angular.element(document.querySelectorAll("ul.sidebar-nav:not(.sidebar-nav-nested) > li > a > span"));
                    var sidebarMenuItemText = sidebarMenuItems.find("span");
                    var allMenuItemTextElements = Array.prototype.filter.call(sidebarMenuItemText, function(item) {
                        return item.matches(".menu-item-text");
                    });
                    var arrowIconElements = Array.prototype.filter.call(sidebarMenuItems, function(item) {
                        return item.matches(".sidebar-arrow");
                    });
                    var sidebarElement = angular.element(document.querySelectorAll(".eeh-navigation-sidebar"));
                    if (scope.sidebarIsCollapsed) {
                        transcludedWrapper.addClass("sidebar-text-collapsed");
                        sidebarElement.addClass("sidebar-text-collapsed");
                        allMenuItemTextElements.forEach(function(menuItem) {
                            angular.element(menuItem).addClass("hidden");
                        });
                        arrowIconElements.forEach(function(menuItem) {
                            angular.element(menuItem).addClass("hidden");
                        });
                        angular.forEach(menuItems(), function(menuItem) {
                            menuItem.isCollapsed = true;
                        });
                    } else {
                        transcludedWrapper.removeClass("sidebar-text-collapsed");
                        sidebarElement.removeClass("sidebar-text-collapsed");
                        allMenuItemTextElements.forEach(function(menuItem) {
                            angular.element(menuItem).removeClass("hidden");
                        });
                        arrowIconElements.forEach(function(menuItem) {
                            angular.element(menuItem).removeClass("hidden");
                        });
                    }
                }
                scope.$on("$includeContentLoaded", function() {
                    setTextCollapseState();
                });
                scope.isSidebarVisible = function() {
                    return scope.searchInputIsVisible || angular.isArray(scope.sidebarMenuItems) && scope.sidebarMenuItems.filter(function(item) {
                        return item._isVisible();
                    }).length > 0;
                };
                scope.topLevelMenuItemClickHandler = function(clickedMenuItem) {
                    if (!scope.sidebarIsCollapsed || !clickedMenuItem.hasChildren()) {
                        return;
                    }
                    scope.sidebarMenuItems.filter(function(menuItem) {
                        return menuItem.hasChildren() && clickedMenuItem !== menuItem;
                    }).forEach(function(menuItem) {
                        menuItem.isCollapsed = true;
                    });
                };
            }
        };
    }
    SidebarDirective.$inject = [ "$window", "eehNavigation" ];
})({}, function() {
    return this;
}());




angular.module('eehNavigation').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('template/eeh-navigation/menu-item-content/eeh-navigation-menu-item-content.html',
    "<span class=\"menu-item-icon icon-fw {{ iconBaseClass() }} {{ menuItem.iconClass}}\"></span>\n" +
    "<span class=\"menu-item-text\"> {{ menuItem.text|translate }}</span>\n"
  );


  $templateCache.put('template/eeh-navigation/menu/eeh-navigation-menu.html',
    "<nav ng-class=\"navClass\">\n" +
    "    <ul>\n" +
    "        <li ng-repeat=\"item in menuItems | orderBy:'weight'\"\n" +
    "            ng-include=\"'template/eeh-navigation/list-menu-item.html'\"\n" +
    "            ng-class=\"{ 'leaf': !item.hasChildren() }\"\n" +
    "            ng-if=\"item._isVisible()\"\n" +
    "            eeh-navigation-active-menu-item=\"item\"></li>\n" +
    "    </ul>\n" +
    "</nav>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-navigation/list-menu-item.html\">\n" +
    "    <a ng-if=\"item.state\" ui-sref=\"{{item.state}}\">\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\n" +
    "    </a>\n" +
    "    <a ng-if=\"item.click\" ng-click=\"item.click()\">\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\n" +
    "    </a>\n" +
    "    <a ng-if=\"item.href\" ng-href=\"{{item.href}}\" target=\"{{item.target ? item.target : '_self'}}\">\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\n" +
    "    </a>\n" +
    "    <a ng-if=\"!item.state && item.hasChildren()\">\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\n" +
    "        <span class=\"float-right icon-fw {{ iconBaseClass() }}\"\n" +
    "              ng-class=\"item.isCollapsed ? menuItemCollapsedIconClass : menuItemExpandedIconClass\"></span>\n" +
    "    </a>\n" +
    "    <ul ng-if=\"!item.state && item.hasChildren()\">\n" +
    "        <li ng-repeat=\"item in item.children()\"\n" +
    "            ng-include=\"'template/eeh-navigation/list-menu-item.html'\"\n" +
    "            ng-if=\"item._isVisible()\"\n" +
    "            eeh-navigation-active-menu-item=\"item\"></li>\n" +
    "    </ul>\n" +
    "</script>\n"
  );


  $templateCache.put('template/eeh-navigation/navbar/eeh-navigation-navbar-brand.html',
    "<a ng-if=\"state && !href && (text || src)\"\n" +
    "   class=\"navbar-brand\"\n" +
    "   ng-click=\"click()\"\n" +
    "   ui-sref=\"{{ state }}\">\n" +
    "    <span ng-include=\"'template/eeh-navigation/navbar-brand-content.html'\"></span>\n" +
    "</a>\n" +
    "\n" +
    "<a ng-if=\"!state && href && (text || src)\"\n" +
    "   class=\"navbar-brand\"\n" +
    "   ng-click=\"click()\"\n" +
    "   ng-href=\"{{ href }}\"\n" +
    "   target=\"{{ target ? target : '_self'}}\">\n" +
    "    <span ng-include=\"'template/eeh-navigation/navbar-brand-content.html'\"></span>\n" +
    "</a>\n" +
    "\n" +
    "<span ng-if=\"!state && !href && (text || src)\"\n" +
    "      ng-click=\"click()\"\n" +
    "      class=\"navbar-brand\">\n" +
    "    <span ng-include=\"'template/eeh-navigation/navbar-brand-content.html'\"></span>\n" +
    "</span>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-navigation/navbar-brand-content.html\">\n" +
    "    <img ng-if=\"src\" ng-src=\"{{ src }}\">\n" +
    "    <span ng-if=\"text\">{{ text|translate }}</span>\n" +
    "</script>\n" +
    "\n"
  );


  $templateCache.put('template/eeh-navigation/navbar/eeh-navigation-navbar.html',
    "<nav class=\"navbar eeh-navigation eeh-navigation-navbar\"\n" +
    "     ng-class=\"navClass\"\n" +
    "     role=\"navigation\">\n" +
    "    <div ng-class=\"containerClass\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" ng-click=\"isNavbarCollapsed = !isNavbarCollapsed\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "            <eeh-navigation-navbar-brand text=\"brandText\"\n" +
    "                                         state=\"brandState\"\n" +
    "                                         href=\"brandHref\"\n" +
    "                                         target=\"brandTarget\"\n" +
    "                                         src=\"brandSrc\"\n" +
    "                                         click=\"brandClick\"></eeh-navigation-navbar-brand>\n" +
    "        </div>\n" +
    "        <div uib-collapse=\"isNavbarCollapsed\" class=\"navbar-collapse\">\n" +
    "            <ul class=\"nav navbar-nav navbar-left\">\n" +
    "                <li ng-repeat=\"item in leftNavbarMenuItems | orderBy:'weight'\"\n" +
    "                    ng-include=\"'template/eeh-navigation/navbar-menu-item.html'\"\n" +
    "                    ng-if=\"item._isVisible()\"\n" +
    "                    uib-dropdown\n" +
    "                    ui-sref-active-eq=\"active\"\n" +
    "                    eeh-navigation-active-menu-item=\"item\"></li>\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li ng-repeat=\"item in rightNavbarMenuItems | orderBy:'weight'\"\n" +
    "                    ng-include=\"'template/eeh-navigation/navbar-menu-item.html'\"\n" +
    "                    ng-if=\"item._isVisible()\"\n" +
    "                    uib-dropdown\n" +
    "                    ui-sref-active-eq=\"active\"\n" +
    "                    eeh-navigation-active-menu-item=\"item\"></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-navigation/navbar-menu-item.html\">\n" +
    "    <a ng-if=\"!item.isDivider && item.state\" ui-sref=\"{{ item.state }}\">\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\n" +
    "    </a>\n" +
    "    <a ng-if=\"item.click\" ng-click=\"item.click()\">\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\n" +
    "    </a>\n" +
    "    <a ng-if=\"item.href\" ng-href=\"{{item.href}}\" target=\"{{item.target ? item.target : '_self'}}\">\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\n" +
    "    </a>\n" +
    "    <a ng-if=\"item.hasChildren()\" uib-dropdown-toggle=\"\">\n" +
    "        <span class=\"icon-fw {{ iconBaseClass() }} {{ item.iconClass }}\"></span>\n" +
    "        <span> {{ item.text|translate }}</span>\n" +
    "        <span class=\"caret\"></span>\n" +
    "    </a>\n" +
    "    <ul ng-if=\"item.hasChildren()\" class=\"dropdown-menu\">\n" +
    "        <li ng-repeat=\"item in item.children()|orderBy:'weight'\"\n" +
    "            ng-class=\"{'divider': item.isDivider}\"\n" +
    "            ng-include=\"'template/eeh-navigation/navbar-menu-item.html'\"\n" +
    "            ng-if=\"item._isVisible()\"\n" +
    "            ui-sref-active-eq=\"active\"></li>\n" +
    "    </ul>\n" +
    "</script>\n"
  );


  $templateCache.put('template/eeh-navigation/search-input/eeh-navigation-search-input.html',
    "<div ng-include=\"'template/eeh-navigation/search-input.html'\"\n" +
    "     ng-if=\"!isCollapsed\"\n" +
    "     class=\"eeh-navigation-search-input\"></div>\n" +
    "\n" +
    "<a class=\"eeh-navigation-search-input\" ng-href=\"\" ng-if=\"isCollapsed\"\n" +
    "   popover-placement=\"right\"\n" +
    "   popover-append-to-body=\"'true'\"\n" +
    "   uib-popover-template=\"'template/eeh-navigation/search-input-popover.html'\">\n" +
    "    <span class=\"menu-item-icon icon-fw {{ iconBaseClass() }} {{ iconClass }}\"></span>\n" +
    "</a>\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-navigation/search-input-popover.html\">\n" +
    "    <div class=\"row search-input-popover\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            <div ng-include=\"'template/eeh-navigation/search-input.html'\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</script>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-navigation/search-input.html\">\n" +
    "    <form ng-submit=\"submit(model.query)\" class=\"navbar-form\" ng-class=\"classes\">\n" +
    "        <div class=\"input-group\">\n" +
    "            <input type=\"text\"\n" +
    "                   class=\"form-control\"\n" +
    "                   placeholder=\"{{'Search'|translate}}\"\n" +
    "                   ng-model=\"model.query\">\n" +
    "        <span class=\"input-group-btn\" ng-if=\"!isCollapsed\">\n" +
    "            <button class=\"btn btn-default\">\n" +
    "                <span class=\"icon-fw {{ iconBaseClass() }} {{ iconClass }}\"></span>\n" +
    "            </button>\n" +
    "        </span>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</script>\n"
  );


  $templateCache.put('template/eeh-navigation/sidebar/eeh-navigation-sidebar.html',
    "<nav class=\"navbar navbar-default eeh-navigation eeh-navigation-sidebar\" role=\"navigation\"\n" +
    "    ng-class=\"navClass\">\n" +
    "    <div class=\"navbar-collapse\" uib-collapse=\"isNavbarCollapsed\">\n" +
    "        <ul class=\"nav sidebar-nav\">\n" +
    "            <li class=\"sidebar-search\" ng-if=\"searchInputIsVisible\">\n" +
    "                <eeh-navigation-search-input class=\"sidebar-search-input\"\n" +
    "                                             icon-class=\"searchInputIconClass\"\n" +
    "                                             submit=\"searchInputSubmit\"\n" +
    "                                             is-collapsed=\"sidebarIsCollapsed\"></eeh-navigation-search-input>\n" +
    "            </li>\n" +
    "            <li ng-repeat=\"item in sidebarMenuItems | orderBy:'weight'\"\n" +
    "                ng-include=\"'template/eeh-navigation/sidebar-menu-item.html'\"\n" +
    "                ng-class=\"{ 'leaf': !item.hasChildren() }\"\n" +
    "                ng-if=\"item._isVisible()\"\n" +
    "                ng-click=\"topLevelMenuItemClickHandler(item)\"fire\n" +
    "                ui-sref-active-eq=\"active\"\n" +
    "                eeh-navigation-active-menu-item=\"item\"></li>\n" +
    "            <li ng-click=\"toggleSidebarTextCollapse()\" ng-if=\"sidebarCollapsedButtonIsVisible && isSidebarVisible()\">\n" +
    "                <a>\n" +
    "                    <span class=\"icon-fw {{ iconBaseClass() }}\" ng-class=\"sidebarIsCollapsed ? sidebarCollapsedIconClass : sidebarExpandedIconClass\"></span>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<div id=\"eeh-navigation-page-wrapper\" ng-class=\"{ 'sidebar-invisible': !isSidebarVisible() }\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "            <div ng-transclude></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"template/eeh-navigation/sidebar-menu-item.html\">\n" +
    "    <a ng-if=\"item.state\" ui-sref=\"{{item.state}}\">\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\n" +
    "    </a>\n" +
    "    <a ng-if=\"item.click\" ng-click=\"item.click()\">\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\n" +
    "    </a>\n" +
    "    <a ng-if=\"item.href\" ng-href=\"{{item.href}}\" target=\"{{item.target ? item.target : '_self'}}\">\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\n" +
    "    </a>\n" +
    "    <a ng-if=\"!item.state && item.hasChildren()\"\n" +
    "       ng-click=\"item.isCollapsed = !item.isCollapsed\">\n" +
    "        <span eeh-navigation-menu-item-content=\"item\"></span>\n" +
    "        <span class=\"navbar-right sidebar-arrow icon-fw {{ iconBaseClass() }}\"\n" +
    "              ng-class=\"item.isCollapsed ? menuItemCollapsedIconClass : menuItemExpandedIconClass\"></span>\n" +
    "    </a>\n" +
    "    <ul ng-if=\"!item.state && item.hasChildren()\" uib-collapse=\"item.isCollapsed\"\n" +
    "        ng-class=\"{ 'text-collapsed': sidebarIsCollapsed }\"\n" +
    "        class=\"nav sidebar-nav sidebar-nav-nested\">\n" +
    "        <li ng-repeat=\"item in item.children()\"\n" +
    "            ng-include=\"'template/eeh-navigation/sidebar-menu-item.html'\"\n" +
    "            ng-class=\"{ 'leaf': !item.hasChildren() }\"\n" +
    "            ng-if=\"item._isVisible()\"\n" +
    "            ui-sref-active-eq=\"active\"\n" +
    "            eeh-navigation-active-menu-item=\"item\"></li>\n" +
    "    </ul>\n" +
    "</script>\n"
  );

}]);