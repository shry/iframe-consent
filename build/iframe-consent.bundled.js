!function(t){
/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const i=window,e=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class r{constructor(t,i,e){if(this._$cssResult$=!0,e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=o.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(i,t))}return t}toString(){return this.cssText}}const n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(i)})(t):t
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */;var h;const l=window,a=l.trustedTypes,c=a?a.emptyScript:"",d=l.reactiveElementPolyfillSupport,u={toAttribute(t,i){switch(i){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},v=(t,i)=>i!==t&&(i==i||t==t),p={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:v};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;null!==(i=this.h)&&void 0!==i||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,e)=>{const s=this._$Ep(e,i);void 0!==s&&(this._$Ev.set(s,e),t.push(s))})),t}static createProperty(t,i=p){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,e,i);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(s){const o=this[t];this[i]=s,this.requestUpdate(t,o,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const e of i)this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(n(t))}else void 0!==t&&i.push(n(t));return i}static _$Ep(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,e;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(e=t.hostConnected)||void 0===e||e.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{e?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),o=i.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=e.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$EO(t,i,e=p){var s;const o=this.constructor._$Ep(t,e);if(void 0!==o&&!0===e.reflect){const r=(void 0!==(null===(s=e.converter)||void 0===s?void 0:s.toAttribute)?e.converter:u).toAttribute(i,e.type);this._$El=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,i){var e;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(e=t.converter)||void 0===e?void 0:e.fromAttribute)?t.converter:u;this._$El=o,this[o]=r.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,e){let s=!0;void 0!==t&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===e.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,e))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(e)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(e)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var w;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:f}),(null!==(h=l.reactiveElementVersions)&&void 0!==h?h:l.reactiveElementVersions=[]).push("1.4.1");const g=window,b=g.trustedTypes,m=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,$="?"+y,x=`<${$}>`,S=document,k=(t="")=>S.createComment(t),_=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,j=/>/g,U=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),O=/'/g,M=/"/g,T=/^(?:script|style|textarea|title)$/i,z=(t=>(i,...e)=>({_$litType$:t,strings:i,values:e}))(1),R=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),N=new WeakMap,I=S.createTreeWalker(S,129,null,!1),P=(t,i)=>{const e=t.length-1,s=[];let o,r=2===i?"<svg>":"",n=C;for(let i=0;i<e;i++){const e=t[i];let h,l,a=-1,c=0;for(;c<e.length&&(n.lastIndex=c,l=n.exec(e),null!==l);)c=n.lastIndex,n===C?"!--"===l[1]?n=E:void 0!==l[1]?n=j:void 0!==l[2]?(T.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=U):void 0!==l[3]&&(n=U):n===U?">"===l[0]?(n=null!=o?o:C,a=-1):void 0===l[1]?a=-2:(a=n.lastIndex-l[2].length,h=l[1],n=void 0===l[3]?U:'"'===l[3]?M:O):n===M||n===O?n=U:n===E||n===j?n=C:(n=U,o=void 0);const d=n===U&&t[i+1].startsWith("/>")?" ":"";r+=n===C?e+x:a>=0?(s.push(h),e.slice(0,a)+"$lit$"+e.slice(a)+y+d):e+y+(-2===a?(s.push(void 0),i):d)}const h=r+(t[e]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(h):h,s]};class L{constructor({strings:t,_$litType$:i},e){let s;this.parts=[];let o=0,r=0;const n=t.length-1,h=this.parts,[l,a]=P(t,i);if(this.el=L.createElement(l,e),I.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(s=I.nextNode())&&h.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const i of s.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(y)){const e=a[r++];if(t.push(i),void 0!==e){const t=s.getAttribute(e.toLowerCase()+"$lit$").split(y),i=/([.?@])?(.*)/.exec(e);h.push({type:1,index:o,name:i[2],strings:t,ctor:"."===i[1]?K:"?"===i[1]?q:"@"===i[1]?V:J})}else h.push({type:6,index:o})}for(const i of t)s.removeAttribute(i)}if(T.test(s.tagName)){const t=s.textContent.split(y),i=t.length-1;if(i>0){s.textContent=b?b.emptyScript:"";for(let e=0;e<i;e++)s.append(t[e],k()),I.nextNode(),h.push({type:2,index:++o});s.append(t[i],k())}}}else if(8===s.nodeType)if(s.data===$)h.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(y,t+1));)h.push({type:7,index:o}),t+=y.length-1}o++}}static createElement(t,i){const e=S.createElement("template");return e.innerHTML=t,e}}function D(t,i,e=t,s){var o,r,n,h;if(i===R)return i;let l=void 0!==s?null===(o=e._$Co)||void 0===o?void 0:o[s]:e._$Cl;const a=_(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==a&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===a?l=void 0:(l=new a(t),l._$AT(t,e,s)),void 0!==s?(null!==(n=(h=e)._$Co)&&void 0!==n?n:h._$Co=[])[s]=l:e._$Cl=l),void 0!==l&&(i=D(t,l._$AS(t,i.values),l,s)),i}class Z{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:e},parts:s}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:S).importNode(e,!0);I.currentNode=o;let r=I.nextNode(),n=0,h=0,l=s[0];for(;void 0!==l;){if(n===l.index){let i;2===l.type?i=new H(r,r.nextSibling,this,t):1===l.type?i=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(i=new F(r,this,t)),this.u.push(i),l=s[++h]}n!==(null==l?void 0:l.index)&&(r=I.nextNode(),n++)}return o}p(t){let i=0;for(const e of this.u)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}}class H{constructor(t,i,e,s){var o;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=s,this._$Cm=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=D(this,t,i),_(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==R&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>A(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==B&&_(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){var i;const{values:e,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=L.createElement(s.h,this.options)),s);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.p(e);else{const t=new Z(o,this),i=t.v(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let i=N.get(t.strings);return void 0===i&&N.set(t.strings,i=new L(t)),i}k(t){A(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let e,s=0;for(const o of t)s===i.length?i.push(e=new H(this.O(k()),this.O(k()),this,this.options)):e=i[s],e._$AI(o),s++;s<i.length&&(this._$AR(e&&e._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){var e;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cm=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class J{constructor(t,i,e,s,o){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=o,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,e,s){const o=this.strings;let r=!1;if(void 0===o)t=D(this,t,i,0),r=!_(t)||t!==this._$AH&&t!==R,r&&(this._$AH=t);else{const s=t;let n,h;for(t=o[0],n=0;n<o.length-1;n++)h=D(this,s[e+n],i,n),h===R&&(h=this._$AH[n]),r||(r=!_(h)||h!==this._$AH[n]),h===B?t=B:t!==B&&(t+=(null!=h?h:"")+o[n+1]),this._$AH[n]=h}r&&!s&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends J{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}const W=b?b.emptyScript:"";class q extends J{constructor(){super(...arguments),this.type=4}j(t){t&&t!==B?this.element.setAttribute(this.name,W):this.element.removeAttribute(this.name)}}class V extends J{constructor(t,i,e,s,o){super(t,i,e,s,o),this.type=5}_$AI(t,i=this){var e;if((t=null!==(e=D(this,t,i,0))&&void 0!==e?e:B)===R)return;const s=this._$AH,o=t===B&&s!==B||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==B&&(s===B||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,e;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}class F{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}}const G=g.litHtmlPolyfillSupport;null==G||G(L,H),(null!==(w=g.litHtmlVersions)&&void 0!==w?w:g.litHtmlVersions=[]).push("2.4.0");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var Q,X;class Y extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,e)=>{var s,o;const r=null!==(s=null==e?void 0:e.renderBefore)&&void 0!==s?s:i;let n=r._$litPart$;if(void 0===n){const t=null!==(o=null==e?void 0:e.renderBefore)&&void 0!==o?o:null;r._$litPart$=n=new H(i.insertBefore(k(),t),t,void 0,null!=e?e:{})}return n._$AI(t),n})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return R}}Y.finalized=!0,Y._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:Y});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Y}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.2.2");
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const it=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(e){e.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(e){e.createProperty(i.key,t)}};
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function et(t){return(i,e)=>void 0!==e?((t,i,e)=>{i.constructor.createProperty(e,t)})(t,i,e):it(t,i)
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */}
/**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
var st;null===(st=window.HTMLSlotElement)||void 0===st||st.prototype.assignedElements;
/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
const ot=1;class rt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,e){this._$Ct=t,this._$AM=i,this._$Ci=e}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}
/**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const nt=(t=>(...i)=>({_$litDirective$:t,values:i}))(class extends rt{constructor(t){var i;if(super(t),t.type!==ot||"style"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((i,e)=>{const s=t[e];return null==s?i:i+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[i]){const{style:e}=t.element;if(void 0===this.vt){this.vt=new Set;for(const t in i)this.vt.add(t);return this.render(i)}this.vt.forEach((t=>{null==i[t]&&(this.vt.delete(t),t.includes("-")?e.removeProperty(t):e[t]="")}));for(const t in i){const s=i[t];null!=s&&(this.vt.add(t),t.includes("-")?e.setProperty(t,s):e[t]=s)}return R}}),ht=t=>null!=t?t:B;
/**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var lt=function(t,i,e,s){for(var o,r=arguments.length,n=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,h=t.length-1;h>=0;h--)(o=t[h])&&(n=(r<3?o(n):r>3?o(i,e,n):o(i,e))||n);return r>3&&n&&Object.defineProperty(i,e,n),n};const at={default:z`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,map:z`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>`,video:z`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`};t.IframeConsent=class extends Y{constructor(){super(...arguments),this.src="",this.title="",this.allowfullscreen=!1,this.accept="Accept",this.responsive=!1,this.poster="",this.consent=!1}_getStyle(){if(this.height&&this.width){if(this.height.endsWith("%")&&this.width.endsWith("%"))return{width:`${this.width}`,height:`${this.height}`};const t=parseInt(this.width,10),i=parseInt(this.height,10);return this.responsive?{paddingBottom:i/t*100+"%"}:{width:`${t}px`,height:`${i}px`}}return{paddingBottom:"56.25%"}}_getConsentStyle(){var t,i;return(null===(t=this.height)||void 0===t?void 0:t.endsWith("%"))&&(null===(i=this.width)||void 0===i?void 0:i.endsWith("%"))?{width:`${this.width}`,height:`${this.height}`}:{width:!this.responsive&&this.width?`${this.width}px`:"auto"}}_onConsent(){this.consent=!this.consent}_getIcon(t){let i=at.default;if(this.icon){if("auto"!==this.icon)i=at[this.icon];else{switch(new URL(this.src).hostname){case"www.youtube.com":case"www.youtube-nocookie.com":case"player.vimeo.com":i=at.video;break;case"www.openstreetmap.org":case"www.google.com":i=at.map}}return z`<div class=${t}>${i}</div>`}}_getPoster(){if(this.poster)return z`<img src=${this.poster} alt="" loading="lazy" class="poster" />`}render(){return this.consent?z`
        <div id="wrapper" class="wrapper-iframe" style=${nt(this._getStyle())}>
          <iframe title=${ht(this.title)} name=${ht(this.name)} src=${this.src} width=${ht(this.width)} height=${ht(this.height)} allow=${ht(this.allow)} referrerpolicy=${ht(this.referrerpolicy)} ?allowfullscreen=${this.allowfullscreen}></iframe>        
        </div>
      `:z`
      <div class="wrapper-consent" style=${nt(this._getConsentStyle())}>
        <div id="wrapper" style=${nt(this._getStyle())}>
          ${this._getPoster()}
          ${this._getIcon("consent-icon-mobile")}
        </div>
        <div class="consent-overlay">
            <div class="consent-overlay-msg">
              ${this._getIcon("consent-icon")}
              <slot></slot>
              <div>
                <button @click=${this._onConsent} part="button">
                    ${this.accept}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}},t.IframeConsent.styles=((t,...i)=>{const e=1===t.length?t[0]:i.reduce(((i,e,s)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[s+1]),t[0]);return new r(e,t,s)})`
    :host {
      display: block;
    }
    #wrapper {
      position:relative;
      overflow:hidden;
    }

    .wrapper-consent {
      position:relative;
      background:var(--iframe-consent-wrapper-bg, #eee);
      border: var(--iframe-consent-wrapper-border, 1px solid #ccc);
      border-radius:var(--iframe-consent-wrapper-radius);
    }

    .wrapper-iframe {
      background:var(--iframe-consent-wrapper-bg, #eee);
      border: var(--iframe-consent-wrapper-iframe-border, 1px solid transparent);
      border-radius:var(--iframe-consent-wrapper-radius);
    }

    iframe {
      border:0;
      border-radius:var(--iframe-consent-wrapper-radius);
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      width:100%;
      height:100%;
    }


    .consent-overlay, .consent-icon-mobile {
      position:absolute;
      top:50%;
      left:50%;
      width:75%;
      text-align:center;
      transform:translate(-50%,-50%);
      z-index:1;
    }

    .consent-icon-mobile {
      display:none;

    }

    button {
      cursor:pointer;
      border:var(--iframe-consent-btn-border, 1px solid black);
      color:var(--iframe-consent-btn-color, white);
      background:var(--iframe-consent-btn-bg, black);
      border-radius:var(--iframe-consent-btn-radius, 5px);
      padding:var(--iframe-consent-btn-padding, 0.75rem 2rem);
      font-weight:var(--iframe-consent-btn-font-weight);      
      font-family:var(--iframe-consent-btn-font-family);
      font-size:var(--iframe-consent-btn-font-size, 1rem);
    }

    button:hover  {
      background:var(--iframe-consent-btn-hover-bg, black);
      color:var(--iframe-consent-btn-hover-color, white);
      border-color:var(--iframe-consent-btn-hover-border-color, black);
    }

    img.poster {
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      width:100%;
      height:100%;
      object-fit:cover;
      opacity:var(--iframe-consent-poster-opacity, 0.2);
      filter: var(--iframe-consent-poster-filter);
    }

    svg {
      color:var(--iframe-consent-icon-color);
    }

    @media only screen and (max-width: 480px) {
      .wrapper-consent {
        display:flex;
        flex-direction:column;
      }
      .consent-overlay {
        border-top:var(--iframe-consent-wrapper-border, 1px solid #ccc);
        position:static;
        width:auto;
        padding:1rem;
        transform:none;
        background:var(--iframe-consent-wrapper-mobile-bg, white);
        border-bottom-left-radius:var(--iframe-consent-wrapper-radius);
        border-bottom-right-radius:var(--iframe-consent-wrapper-radius);
      }
      .consent-icon-mobile {
        display:block;
      }
      .consent-icon {
        display:none;
      }
    }
  `,lt([et({type:String})],t.IframeConsent.prototype,"src",void 0),lt([et({type:String})],t.IframeConsent.prototype,"title",void 0),lt([et()],t.IframeConsent.prototype,"width",void 0),lt([et()],t.IframeConsent.prototype,"height",void 0),lt([et()],t.IframeConsent.prototype,"name",void 0),lt([et()],t.IframeConsent.prototype,"referrerpolicy",void 0),lt([et({type:Boolean})],t.IframeConsent.prototype,"allowfullscreen",void 0),lt([et()],t.IframeConsent.prototype,"allow",void 0),lt([et({type:String})],t.IframeConsent.prototype,"accept",void 0),lt([et({type:Boolean})],t.IframeConsent.prototype,"responsive",void 0),lt([et()],t.IframeConsent.prototype,"icon",void 0),lt([et({type:String})],t.IframeConsent.prototype,"poster",void 0),lt([function(t){return et({...t,state:!0})}()],t.IframeConsent.prototype,"consent",void 0),t.IframeConsent=lt([(t=>i=>"function"==typeof i?((t,i)=>(customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:e,elements:s}=i;return{kind:e,elements:s,finisher(i){customElements.define(t,i)}}})(t,i))("iframe-consent")],t.IframeConsent),Object.defineProperty(t,"i",{value:!0})}({});
