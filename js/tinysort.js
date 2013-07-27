/* TinySort 1.5.5
* Copyright (c) 2008-2013 Ron Valstar http://tinysort.sjeiti.com/
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*/
(function(e,c){var i=!1,l=null,p=parseFloat,m=Math.min,n=/(-?\d+\.?\d*)$/g,h=/(\d+\.?\d*)$/g,k=[],g=[],b=function(q){return typeof q=="string"},f=function(u,t){var q=u.length,s=q,r;while(s--){r=q-s-1;t(u[r],r)}},o=Array.prototype.indexOf||function(s){var q=this.length,r=Number(arguments[1])||0;r=r<0?Math.ceil(r):Math.floor(r);if(r<0){r+=q}for(;r<q;r++){if(r in this&&this[r]===s){return r}}return -1};e.tinysort={id:"TinySort",version:"1.5.5",copyright:"Copyright (c) 2008-2013 Ron Valstar",uri:"http://tinysort.sjeiti.com/",licensed:{MIT:"http://www.opensource.org/licenses/mit-license.php",GPL:"http://www.gnu.org/licenses/gpl.html"},plugin:(function(){var q=function(r,s){k.push(r);g.push(s)};q.indexOf=o;return q})(),defaults:{order:"asc",attr:l,data:l,useVal:i,place:"start",returns:i,cases:i,forceStrings:i,ignoreDashes:i,sortFunction:l}};e.fn.extend({tinysort:function(){var E,D,G=this,t=[],s=[],H=[],I=[],w=0,r,C=[],y=[],z=function(J){f(k,function(K){K.call(K,J)})},A=function(K,J){if(typeof J=="string"){if(!K.cases){J=a(J)}J=J.replace(/^\s*(.*?)\s*$/i,"$1")}return J},x=function(U,S){var J=0;if(w!==0){w=0}while(J===0&&w<r){var Q=I[w],N=Q.oSettings,R=N.ignoreDashes?h:n;z(N);if(N.sortFunction){J=N.sortFunction(U,S)}else{if(N.order=="rand"){J=Math.random()<0.5?1:-1}else{var T=i,M=A(N,U.s[w]),L=A(N,S.s[w]);if(!N.forceStrings){var K=b(M)?M&&M.match(R):i,V=b(L)?L&&L.match(R):i;if(K&&V){var P=M.substr(0,M.length-K[0].length),O=L.substr(0,L.length-V[0].length);if(P==O){T=!i;M=p(K[0]);L=p(V[0])}}}J=Q.iAsc*(M<L?-1:(M>L?1:0))}}f(g,function(W){J=W.call(W,T,M,L,J)});if(J===0){w++}}return J};for(E=0,D=arguments.length;E<D;E++){var B=arguments[E];if(b(B)){if(C.push(B)-1>y.length){y.length=C.length-1}}else{if(y.push(B)>C.length){C.length=y.length}}}if(C.length>y.length){y.length=C.length}r=C.length;if(r===0){r=C.length=1;y.push({})}for(E=0,D=r;E<D;E++){var F=C[E],u=e.extend({},e.tinysort.defaults,y[E]),v=!(!F||F==""),q=v&&F[0]==":";I.push({sFind:F,oSettings:u,bFind:v,bAttr:!(u.attr===l||u.attr==""),bData:u.data!==l,bFilter:q,$Filter:q?G.filter(F):G,fnSort:u.sortFunction,iAsc:u.order=="asc"?1:-1})}G.each(function(Q,J){var M=e(J),K=M.parent().get(0),L,P=[];for(j=0;j<r;j++){var R=I[j],N=R.bFind?(R.bFilter?R.$Filter.filter(J):M.find(R.sFind)):M;P.push(R.bData?N.data(R.oSettings.data):(R.bAttr?N.attr(R.oSettings.attr):(R.oSettings.useVal?N.val():N.text())));if(L===c){L=N}}var O=o.call(H,K);if(O<0){O=H.push(K)-1;s[O]={s:[],n:[]}}if(L.length>0){s[O].s.push({s:P,e:M,n:Q})}else{s[O].n.push({e:M,n:Q})}});f(s,function(J){J.s.sort(x)});f(s,function(K){var Q=K.s,J=K.n,S=Q.length,O=J.length,T=S+O,L=[],N=T,M=[0,0];switch(u.place){case"first":f(Q,function(V){N=m(N,V.n)});break;case"org":f(Q,function(V){L.push(V.n)});break;case"end":N=O;break;default:N=0}for(E=0;E<T;E++){var P=d(L,E)?!i:E>=N&&E<N+S,R=P?0:1,U=(P?Q:J)[M[R]].e;U.parent().append(U);if(P||!u.returns){t.push(U.get(0))}M[R]++}});G.length=0;Array.prototype.push.apply(G,t);return G}});function a(q){return q&&q.toLowerCase?q.toLowerCase():q}function d(r,t){for(var s=0,q=r.length;s<q;s++){if(r[s]==t){return !i}}return i}e.fn.TinySort=e.fn.Tinysort=e.fn.tsort=e.fn.tinysort})(jQuery);