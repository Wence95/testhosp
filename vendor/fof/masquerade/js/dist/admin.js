(()=>{var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t),e.d(t,{components:()=>Te,extend:()=>Ee});const n=flarum.core.compat["admin/app"];var r=e.n(n);function o(e,t){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},o(e,t)}function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,o(e,t)}function i(e,t,n){if(void 0===n)return e&&e.h5s&&e.h5s.data&&e.h5s.data[t];e.h5s=e.h5s||{},e.h5s.data=e.h5s.data||{},e.h5s.data[t]=n}var s=function(e,t){if(!(e instanceof NodeList||e instanceof HTMLCollection||e instanceof Array))throw new Error("You must provide a nodeList/HTMLCollection/Array of elements to be filtered.");return"string"!=typeof t?Array.from(e):Array.from(e).filter((function(e){return 1===e.nodeType&&e.matches(t)}))},l=new Map,d=function(){function e(){this._config=new Map,this._placeholder=void 0,this._data=new Map}return Object.defineProperty(e.prototype,"config",{get:function(){var e={};return this._config.forEach((function(t,n){e[n]=t})),e},set:function(e){if("object"!=typeof e)throw new Error("You must provide a valid configuration object to the config setter.");var t=Object.assign({},e);this._config=new Map(Object.entries(t))},enumerable:!1,configurable:!0}),e.prototype.setConfig=function(e,t){if(!this._config.has(e))throw new Error("Trying to set invalid configuration item: "+e);this._config.set(e,t)},e.prototype.getConfig=function(e){if(!this._config.has(e))throw new Error("Invalid configuration item requested: "+e);return this._config.get(e)},Object.defineProperty(e.prototype,"placeholder",{get:function(){return this._placeholder},set:function(e){if(!(e instanceof HTMLElement)&&null!==e)throw new Error("A placeholder must be an html element or null.");this._placeholder=e},enumerable:!1,configurable:!0}),e.prototype.setData=function(e,t){if("string"!=typeof e)throw new Error("The key must be a string.");this._data.set(e,t)},e.prototype.getData=function(e){if("string"!=typeof e)throw new Error("The key must be a string.");return this._data.get(e)},e.prototype.deleteData=function(e){if("string"!=typeof e)throw new Error("The key must be a string.");return this._data.delete(e)},e}(),u=function(e){if(!(e instanceof HTMLElement))throw new Error("Please provide a sortable to the store function.");return l.has(e)||l.set(e,new d),l.get(e)};function c(e,t,n){if(e instanceof Array)for(var r=0;r<e.length;++r)c(e[r],t,n);else e.addEventListener(t,n),u(e).setData("event"+t,n)}function f(e,t){if(e instanceof Array)for(var n=0;n<e.length;++n)f(e[n],t);else e.removeEventListener(t,u(e).getData("event"+t)),u(e).deleteData("event"+t)}function p(e,t,n){if(e instanceof Array)for(var r=0;r<e.length;++r)p(e[r],t,n);else e.setAttribute(t,n)}function h(e,t){if(e instanceof Array)for(var n=0;n<e.length;++n)h(e[n],t);else e.removeAttribute(t)}var g,v,b,y,w,E,T,x,C,q=function(e){if(!e.parentElement||0===e.getClientRects().length)throw new Error("target element must be part of the dom");var t=e.getClientRects()[0];return{left:t.left+window.pageXOffset,right:t.right+window.pageXOffset,top:t.top+window.pageYOffset,bottom:t.bottom+window.pageYOffset}},F=function(e,t){if(!(e instanceof HTMLElement&&(t instanceof NodeList||t instanceof HTMLCollection||t instanceof Array)))throw new Error("You must provide an element and a list of elements.");return Array.from(t).indexOf(e)},L=function(e){if(!(e instanceof HTMLElement))throw new Error("Element is not a node element.");return null!==e.parentNode},O=function(e,t,n){if(!(e instanceof HTMLElement&&e.parentElement instanceof HTMLElement))throw new Error("target and element must be a node");e.parentElement.insertBefore(t,"before"===n?e:e.nextElementSibling)},_=function(e,t){return O(e,t,"after")},S=function(e){if(!(e instanceof HTMLElement))throw new Error("You must provide a valid dom element");var t=window.getComputedStyle(e);return"border-box"===t.getPropertyValue("box-sizing")?parseInt(t.getPropertyValue("height"),10):["height","padding-top","padding-bottom"].map((function(e){var n=parseInt(t.getPropertyValue(e),10);return isNaN(n)?0:n})).reduce((function(e,t){return e+t}))},I=function(e){if(!(e instanceof HTMLElement))throw new Error("You must provide a valid dom element");var t=window.getComputedStyle(e);return["width","padding-left","padding-right"].map((function(e){var n=parseInt(t.getPropertyValue(e),10);return isNaN(n)?0:n})).reduce((function(e,t){return e+t}))},N=function(e,t){if(!(e instanceof Array))throw new Error("You must provide a Array of HTMLElements to be filtered.");return"string"!=typeof t?e:e.filter((function(e){return e.querySelector(t)instanceof HTMLElement||e.shadowRoot&&e.shadowRoot.querySelector(t)instanceof HTMLElement})).map((function(e){return e.querySelector(t)||e.shadowRoot&&e.shadowRoot.querySelector(t)}))},M=function(e){return e.composedPath&&e.composedPath()[0]||e.target},P=function(e,t,n){return{element:e,posX:n.pageX-t.left,posY:n.pageY-t.top}},A=function(e,t){if(!0===e.isSortable){var n=u(e).getConfig("acceptFrom");if(null!==n&&!1!==n&&"string"!=typeof n)throw new Error('HTML5Sortable: Wrong argument, "acceptFrom" must be "null", "false", or a valid selector string.');if(null!==n)return!1!==n&&n.split(",").filter((function(e){return e.length>0&&t.matches(e)})).length>0;if(e===t)return!0;if(void 0!==u(e).getConfig("connectWith")&&null!==u(e).getConfig("connectWith"))return u(e).getConfig("connectWith")===u(t).getConfig("connectWith")}return!1},D={items:null,connectWith:null,disableIEFix:null,acceptFrom:null,copy:!1,placeholder:null,placeholderClass:"sortable-placeholder",draggingClass:"sortable-dragging",hoverClass:!1,dropTargetContainerClass:!1,debounce:0,throttleTime:100,maxItems:0,itemSerializer:void 0,containerSerializer:void 0,customDragImage:null,orientation:"vertical"},H=function(e){f(e,"dragstart"),f(e,"dragend"),f(e,"dragover"),f(e,"dragenter"),f(e,"drop"),f(e,"mouseenter"),f(e,"mouseleave")},B=function(e,t){e&&f(e,"dragleave"),t&&t!==e&&f(t,"dragleave")},Y=function(e){var t;(t=e).h5s&&delete t.h5s.data,h(e,"aria-dropeffect")},j=function(e){h(e,"aria-grabbed"),h(e,"aria-copied"),h(e,"draggable"),h(e,"role")};function k(e,t){if(t.composedPath)return t.composedPath().find((function(e){return e.isSortable}));for(;!0!==e.isSortable;)e=e.parentElement;return e}function R(e,t){var n=i(e,"opts"),r=s(e.children,n.items).filter((function(e){return e.contains(t)||e.shadowRoot&&e.shadowRoot.contains(t)}));return r.length>0?r[0]:t}var z=function(e){var t=i(e,"opts"),n=s(e.children,t.items),r=N(n,t.handle);p(e,"aria-dropeffect","move"),i(e,"_disabled","false"),p(r,"draggable","true"),!1===t.disableIEFix&&"function"==typeof(document||window.document).createElement("span").dragDrop&&c(r,"mousedown",(function(){if(-1!==n.indexOf(this))this.dragDrop();else{for(var e=this.parentElement;-1===n.indexOf(e);)e=e.parentElement;e.dragDrop()}}))};function U(e,t){var n=String(t);return t=t||{},"string"==typeof e&&(e=document.querySelectorAll(e)),e instanceof HTMLElement&&(e=[e]),e=Array.prototype.slice.call(e),/serialize/.test(n)?e.map((function(e){var t=i(e,"opts");return function(e,t,n){if(void 0===t&&(t=function(e,t){return e}),void 0===n&&(n=function(e){return e}),!(e instanceof HTMLElement)||1==!e.isSortable)throw new Error("You need to provide a sortableContainer to be serialized.");if("function"!=typeof t||"function"!=typeof n)throw new Error("You need to provide a valid serializer for items and the container.");var r=i(e,"opts").items,o=s(e.children,r),a=o.map((function(t){return{parent:e,node:t,html:t.outerHTML,index:F(t,o)}}));return{container:n({node:e,itemCount:a.length}),items:a.map((function(n){return t(n,e)}))}}(e,t.itemSerializer,t.containerSerializer)})):(e.forEach((function(e){if(/enable|disable|destroy/.test(n))return U[n](e);["connectWith","disableIEFix"].forEach((function(e){Object.prototype.hasOwnProperty.call(t,e)&&null!==t[e]&&console.warn('HTML5Sortable: You are using the deprecated configuration "'+e+'". This will be removed in an upcoming version, make sure to migrate to the new options when updating.')})),t=Object.assign({},D,u(e).config,t),u(e).config=t,i(e,"opts",t),e.isSortable=!0,function(e){var t=i(e,"opts"),n=s(e.children,t.items),r=N(n,t.handle);i(e,"_disabled","false"),H(n),B(y,x),f(r,"mousedown"),f(e,"dragover"),f(e,"dragenter"),f(e,"drop")}(e);var r,o=s(e.children,t.items);if(null!==t.placeholder&&void 0!==t.placeholder){var a=document.createElement(e.tagName);t.placeholder instanceof HTMLElement?a.appendChild(t.placeholder):a.innerHTML=t.placeholder,r=a.children[0]}u(e).placeholder=function(e,t,n){var r;if(void 0===n&&(n="sortable-placeholder"),!(e instanceof HTMLElement))throw new Error("You must provide a valid element as a sortable.");if(!(t instanceof HTMLElement)&&void 0!==t)throw new Error("You must provide a valid element as a placeholder or set ot to undefined.");return void 0===t&&(["UL","OL"].includes(e.tagName)?t=document.createElement("li"):["TABLE","TBODY"].includes(e.tagName)?(t=document.createElement("tr")).innerHTML='<td colspan="100"></td>':t=document.createElement("div")),"string"==typeof n&&(r=t.classList).add.apply(r,n.split(" ")),t}(e,r,t.placeholderClass),i(e,"items",t.items),t.acceptFrom?i(e,"acceptFrom",t.acceptFrom):t.connectWith&&i(e,"connectWith",t.connectWith),z(e),p(o,"role","option"),p(o,"aria-grabbed","false"),function(e,t){if("string"==typeof u(e).getConfig("hoverClass")){var n=u(e).getConfig("hoverClass").split(" ");!0===t?(c(e,"mousemove",function(e,t){var n=this;if(void 0===t&&(t=250),"number"!=typeof t)throw new Error("You must provide a number as the second argument for throttle.");var r=null;return function(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];var i=Date.now();(null===r||i-r>=t)&&(r=i,e.apply(n,o))}}((function(t){0===t.buttons&&s(e.children,u(e).getConfig("items")).forEach((function(e){var r,o;e!==t.target?(r=e.classList).remove.apply(r,n):(o=e.classList).add.apply(o,n)}))}),u(e).getConfig("throttleTime"))),c(e,"mouseleave",(function(){s(e.children,u(e).getConfig("items")).forEach((function(e){var t;(t=e.classList).remove.apply(t,n)}))}))):(f(e,"mousemove"),f(e,"mouseleave"))}}(e,!0),c(e,"dragstart",(function(e){var n=M(e);if(!0!==n.isSortable&&(e.stopImmediatePropagation(),(!t.handle||n.matches(t.handle))&&"false"!==n.getAttribute("draggable"))){var r=k(n,e),o=R(r,n);T=s(r.children,t.items),w=T.indexOf(o),E=F(o,r.children),y=r,function(e,t,n){if(!(e instanceof Event))throw new Error("setDragImage requires a DragEvent as the first argument.");if(!(t instanceof HTMLElement))throw new Error("setDragImage requires the dragged element as the second argument.");if(n||(n=P),e.dataTransfer&&e.dataTransfer.setDragImage){var r=n(t,q(t),e);if(!(r.element instanceof HTMLElement)||"number"!=typeof r.posX||"number"!=typeof r.posY)throw new Error("The customDragImage function you provided must return and object with the properties element[string], posX[integer], posY[integer].");e.dataTransfer.effectAllowed="copyMove",e.dataTransfer.setData("text/plain",M(e).id),e.dataTransfer.setDragImage(r.element,r.posX,r.posY)}}(e,o,t.customDragImage),v=S(o),b=I(o),o.classList.add(t.draggingClass),g=function(e,t){var n=e;return!0===u(t).getConfig("copy")&&(p(n=e.cloneNode(!0),"aria-copied","true"),e.parentElement.appendChild(n),n.style.display="none",n.oldDisplay=e.style.display),n}(o,r),p(g,"aria-grabbed","true"),r.dispatchEvent(new CustomEvent("sortstart",{detail:{origin:{elementIndex:E,index:w,container:y},item:g,originalTarget:n}}))}})),c(e,"dragenter",(function(n){var r=M(n),o=k(r,n);o&&o!==x&&(C=s(o.children,i(o,"items")).filter((function(t){return t!==u(e).placeholder})),t.dropTargetContainerClass&&o.classList.add(t.dropTargetContainerClass),o.dispatchEvent(new CustomEvent("sortenter",{detail:{origin:{elementIndex:E,index:w,container:y},destination:{container:o,itemsBeforeUpdate:C},item:g,originalTarget:r}})),c(o,"dragleave",(function(e){var n=e.relatedTarget||e.fromElement;e.currentTarget.contains(n)||(t.dropTargetContainerClass&&o.classList.remove(t.dropTargetContainerClass),o.dispatchEvent(new CustomEvent("sortleave",{detail:{origin:{elementIndex:E,index:w,container:o},item:g,originalTarget:r}})))}))),x=o})),c(e,"dragend",(function(n){if(g){g.classList.remove(t.draggingClass),p(g,"aria-grabbed","false"),"true"===g.getAttribute("aria-copied")&&"true"!==i(g,"dropped")&&g.remove(),g.style.display=g.oldDisplay,delete g.oldDisplay;var r=Array.from(l.values()).map((function(e){return e.placeholder})).filter((function(e){return e instanceof HTMLElement})).filter(L)[0];r&&r.remove(),e.dispatchEvent(new CustomEvent("sortstop",{detail:{origin:{elementIndex:E,index:w,container:y},item:g}})),x=null,g=null,v=null,b=null}})),c(e,"drop",(function(n){if(A(e,g.parentElement)){n.preventDefault(),n.stopPropagation(),i(g,"dropped","true");var r=Array.from(l.values()).map((function(e){return e.placeholder})).filter((function(e){return e instanceof HTMLElement})).filter(L)[0];_(r,g),r.remove(),e.dispatchEvent(new CustomEvent("sortstop",{detail:{origin:{elementIndex:E,index:w,container:y},item:g}}));var o=u(e).placeholder,a=s(y.children,t.items).filter((function(e){return e!==o})),d=!0===this.isSortable?this:this.parentElement,c=s(d.children,i(d,"items")).filter((function(e){return e!==o})),f=F(g,Array.from(g.parentElement.children).filter((function(e){return e!==o}))),m=F(g,c);t.dropTargetContainerClass&&d.classList.remove(t.dropTargetContainerClass),E===f&&y===d||e.dispatchEvent(new CustomEvent("sortupdate",{detail:{origin:{elementIndex:E,index:w,container:y,itemsBeforeUpdate:T,items:a},destination:{index:m,elementIndex:f,container:d,itemsBeforeUpdate:C,items:c},item:g}}))}}));var d,m,h,Y=(d=function(e,n,r,o){if(g)if(t.forcePlaceholderSize&&(u(e).placeholder.style.height=v+"px",u(e).placeholder.style.width=b+"px"),Array.from(e.children).indexOf(n)>-1){var a=S(n),i=I(n),d=F(u(e).placeholder,n.parentElement.children),c=F(n,n.parentElement.children);if(a>v||i>b){var f=a-v,m=i-b,p=q(n).top,h=q(n).left;if(d<c&&("vertical"===t.orientation&&o<p||"horizontal"===t.orientation&&r<h))return;if(d>c&&("vertical"===t.orientation&&o>p+a-f||"horizontal"===t.orientation&&r>h+i-m))return}void 0===g.oldDisplay&&(g.oldDisplay=g.style.display),"none"!==g.style.display&&(g.style.display="none");var y=!1;try{var w=q(n).top+n.offsetHeight/2,E=q(n).left+n.offsetWidth/2;y="vertical"===t.orientation&&o>=w||"horizontal"===t.orientation&&r>=E}catch(e){y=d<c}y?_(n,u(e).placeholder):function(e,t){O(e,t,"before")}(n,u(e).placeholder),Array.from(l.values()).filter((function(e){return void 0!==e.placeholder})).forEach((function(t){t.placeholder!==u(e).placeholder&&t.placeholder.remove()}))}else{var T=Array.from(l.values()).filter((function(e){return void 0!==e.placeholder})).map((function(e){return e.placeholder}));-1!==T.indexOf(n)||e!==n||s(n.children,t.items).length||(T.forEach((function(e){return e.remove()})),n.appendChild(u(e).placeholder))}},void 0===(m=t.debounce)&&(m=0),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];clearTimeout(h),h=setTimeout((function(){d.apply(void 0,e)}),m)}),j=function(e){var t=e.target,n=!0===t.isSortable?t:k(t,e);if(t=R(n,t),g&&A(n,g.parentElement)&&"true"!==i(n,"_disabled")){var r=i(n,"opts");parseInt(r.maxItems)&&s(n.children,i(n,"items")).length>=parseInt(r.maxItems)&&g.parentElement!==n||(e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect=!0===u(n).getConfig("copy")?"copy":"move",Y(n,t,e.pageX,e.pageY))}};c(o.concat(e),"dragover",j),c(o.concat(e),"dragenter",j)})),e)}U.destroy=function(e){!function(e){var t=i(e,"opts")||{},n=s(e.children,t.items),r=N(n,t.handle);f(e,"dragover"),f(e,"dragenter"),f(e,"dragstart"),f(e,"dragend"),f(e,"drop"),Y(e),f(r,"mousedown"),H(n),j(n),B(y,x),e.isSortable=!1}(e)},U.enable=function(e){z(e)},U.disable=function(e){!function(e){var t=i(e,"opts"),n=s(e.children,t.items),r=N(n,t.handle);p(e,"aria-dropeffect","none"),i(e,"_disabled","true"),p(r,"draggable","false"),f(r,"mousedown")}(e)},U.__testing={_data:i,_removeItemEvents:H,_removeItemData:j,_removeSortableData:Y,_removeContainerEvents:B};const W=U,X=flarum.core.compat["admin/components/ExtensionPage"];var V=e.n(X);const G=flarum.core.compat["common/components/Switch"];var J=e.n(G);const K=flarum.core.compat["common/components/Button"];var Q=e.n(K);const Z=flarum.core.compat["common/components/Select"];var ee=e.n(Z);const te=flarum.core.compat["common/utils/withAttr"];var ne=e.n(te);const re=flarum.core.compat["common/Component"];var oe=e.n(re);const ae=flarum.core.compat["common/helpers/icon"];var ie=e.n(ae),se=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var n=t.prototype;return n.oninit=function(t){e.prototype.oninit.call(this,t),this.newOption=""},n.view=function(){var e=this;return m(".Form-group",[m("label",r().translator.trans("fof-masquerade.admin.fields.options")),m("table",m("tbody",this.options().map((function(t,n){return m("tr",[m("td",m("input[type=text].FormControl",{oninput:function(t){e.updateOption(n,t.target.value)},value:t})),m("td",m("button.Button",{onclick:function(){e.moveOption(n,-1)}},ie()("fas fa-chevron-up"))),m("td",m("button.Button",{onclick:function(){e.moveOption(n,1)}},ie()("fas fa-chevron-down"))),m("td",m("button.Button.Button--danger",{onclick:function(){e.deleteOption(n)}},ie()("fas fa-times")))])})))),m(".helpText",r().translator.trans("fof-masquerade.admin.fields.option-comma-warning")),m("table",m("tbody"),m("tr",[m("td",m("input[type=text].FormControl",{onchange:function(t){e.newOption=t.target.value},value:this.newOption,placeholder:r().translator.trans("fof-masquerade.admin.fields.option-new")})),m("td",m("button.Button.Button--primary",{onclick:function(){e.addOption()}},ie()("fas fa-plus")))]))])},n.updateRules=function(e){this.attrs.onchange("in:"+e.join(","))},n.options=function(){var e=this.attrs.value.split("|"),t=[];return e.forEach((function(e){var n=e.split(":",2);"in"===n[0]&&(t=n[1].split(","))})),t},n.updateOption=function(e,t){var n=this.options();n[e]=t,this.updateRules(n)},n.moveOption=function(e,t){var n=this.options(),r=e+t;if(!(r<0||r>n.length-1)){var o=n.splice(e,1);n.splice(r,0,o[0]),this.updateRules(n)}},n.deleteOption=function(e){var t=this.options();t.splice(e,1),this.updateRules(t)},n.addOption=function(){if(""!==this.newOption){var e=this.options();e.push(this.newOption),this.newOption="",this.updateRules(e)}},t}(oe());const le=flarum.core.compat["common/utils/ItemList"];var de=e.n(le),ue=function(){function e(){}var t=e.prototype;return t.view=function(e){var t=this,n=e.attrs,o=n.field,a=(n.loading,n.onUpdate),i=o.id();return m("fieldset",{className:"Field","data-id":o.id(),key:o.id()},m("legend",null,i?m(Q(),{className:"Button Button--icon Button--danger",icon:"fas fa-trash",onclick:function(){return t.deleteField(o,a)}}):null,m("span",{className:"Field-toggle",onclick:function(e){return t.toggleField(e)}},r().translator.trans("fof-masquerade.admin.fields."+(i?"edit":"add"),{field:o.name()}),ie()("fas fa-caret-down"))),m("div",{className:"Field-body"},this.fieldItems(o,a).toArray()))},t.fieldItems=function(e,t){var n=this,o=new(de());return o.add("name",m("div",{className:"Form-group"},m("label",null,r().translator.trans("fof-masquerade.admin.fields.name")),m("input",{className:"FormControl",value:e.name(),oninput:ne()("value",this.updateExistingFieldInput.bind(this,"name",e))}),m("span",{className:"helpText"},r().translator.trans("fof-masquerade.admin.fields.name-help"))),100),o.add("description",m("div",{className:"Form-group"},m("label",null,r().translator.trans("fof-masquerade.admin.fields.description")),m("input",{className:"FormControl",value:e.description(),oninput:ne()("value",this.updateExistingFieldInput.bind(this,"description",e))}),m("span",{className:"helpText"},r().translator.trans("fof-masquerade.admin.fields.description-help"))),90),o.add("icon",m("div",{className:"Form-group"},m("label",null,r().translator.trans("fof-masquerade.admin.fields.icon")),m("input",{className:"FormControl",value:e.icon(),oninput:ne()("value",this.updateExistingFieldInput.bind(this,"icon",e))}),m("span",{className:"helpText"},r().translator.trans("fof-masquerade.admin.fields.icon-help",{a:m("a",{href:"https://fontawesome.com/icons?m=free",target:"_blank"})}))),80),o.add("on_bio",m("div",{className:"Form-group"},m(J(),{state:e.on_bio(),onchange:this.updateExistingFieldInput.bind(this,"on_bio",e)},r().translator.trans("fof-masquerade.admin.fields.on_bio"))),70),o.add("required",m("div",{className:"Form-group"},m(J(),{state:e.required(),onchange:this.updateExistingFieldInput.bind(this,"required",e)},r().translator.trans("fof-masquerade.admin.fields.required"))),60),o.add("type",m("div",{className:"Form-group"},m("label",null,r().translator.trans("fof-masquerade.admin.fields.type")),m(ee(),{onchange:function(t){"null"===t&&(t=null),n.updateExistingFieldInput("type",e,t)},options:this.availableTypes(),value:e.type()})),50),"select"===e.type()&&o.add("select_options",m(se,{onchange:function(t){n.updateExistingFieldInput("validation",e,t)},value:e.validation()}),40),null===e.type()&&o.add("validation",m("div",{className:"Form-group"},m("label",null,r().translator.trans("fof-masquerade.admin.fields.validation")),m("input",{className:"FormControl",value:e.validation(),oninput:ne()("value",this.updateExistingFieldInput.bind(this,"validation",e))}),m("span",{className:"helpText"},r().translator.trans("fof-masquerade.admin.fields.validation-help",{a:m("a",{href:"https://laravel.com/docs/5.2/validation#available-validation-rules",target:"_blank"})}))),30),o.add("actions",m("div",{className:"Form-group"},m("div",{className:"ButtonGroup"},m(Q(),{className:"Button Button--primary",loading:this.loading,disabled:!this.readyToAdd(e),onclick:e.id()?this.updateExistingField.bind(this,e,t):this.submitAddField.bind(this,e,t)},r().translator.trans("fof-masquerade.admin.buttons."+(e.id()?"edit":"add")+"-field")),e.id()?m(Q(),{className:"Button Button--danger",loading:this.loading,onclick:this.deleteField.bind(this,e,t)},r().translator.trans("fof-masquerade.admin.buttons.delete-field")):null)),20),o},t.updateExistingFieldInput=function(e,t,n){var r;t.pushAttributes(((r={})[e]=n,r))},t.deleteField=function(e,t){e.delete().then(t)},t.toggleField=function(e){$(e.target).parents(".Field").toggleClass("active")},t.submitAddField=function(e,t,n){var r=this;n.preventDefault(),e.save(e.data.attributes).then((function(){t(),r.resetNewField()})),m.redraw()},t.updateExistingField=function(e,t){e.id()&&e.save(e.data.attributes).then(t)},t.resetNewField=function(){this.newField=r().store.createRecord("masquerade-field",{attributes:{name:"",description:"",prefix:"",icon:"",required:!1,on_bio:!1,type:null,validation:""}}),m.redraw()},t.readyToAdd=function(e){return!!e.name()},t.availableTypes=function(){return{url:r().translator.trans("fof-masquerade.admin.types.url"),email:r().translator.trans("fof-masquerade.admin.types.email"),boolean:r().translator.trans("fof-masquerade.admin.types.boolean"),select:r().translator.trans("fof-masquerade.admin.types.select"),null:r().translator.trans("fof-masquerade.admin.types.advanced")}},e}(),ce=function(){function e(){}return e.prototype.view=function(e){var t=e.attrs,n=t.existing,r=t.new,o=t.loading,a=t.onUpdate;return m("form.js-sortable-fields",n.map((function(e){return m(ue,{field:e,loading:o,onUpdate:a})})),m(ue,{field:r,loading:o,onUpdate:a}))},e}();const fe=flarum.core.compat["admin/utils/saveSettings"];var me=e.n(fe),pe=function(e){function t(){return e.apply(this,arguments)||this}a(t,e);var n=t.prototype;return n.oninit=function(t){e.prototype.oninit.call(this,t),this.resetNew(),this.loading=!1,this.existing=[],this.loadExisting(),this.enforceProfileCompletion="1"===r().data.settings["masquerade.force-profile-completion"]},n.config=function(){var e=this;W(this.element.querySelector(".js-sortable-fields"),{handle:"legend"})[0].addEventListener("sortupdate",(function(){var t=e.$(".js-sortable-fields > .Field").map((function(){return $(this).data("id")})).get();e.updateSort(t)}))},n.oncreate=function(t){e.prototype.oncreate.call(this,t),this.config()},n.onupdate=function(){this.config()},n.content=function(){var e=this;return m(".ExtensionPage-settings.ProfileConfigurePane",m(".container",[m("h2",r().translator.trans("fof-masquerade.admin.general-options")),m(".Form-group",J().component({state:this.enforceProfileCompletion,onchange:function(t){var n=t?"1":"0";me()({"masquerade.force-profile-completion":n}),e.enforceProfileCompletion=n}},r().translator.trans("fof-masquerade.admin.fields.force-user-to-completion"))),m("h2",r().translator.trans("fof-masquerade.admin.fields.title")),m(ce,{existing:this.existing,new:this.newField,loading:this.loading,onUpdate:this.requestSuccess.bind(this)})]))},n.updateSort=function(e){r().request({method:"POST",url:r().forum.attribute("apiUrl")+"/masquerade/fields/order",body:{sort:e}}).then(this.requestSuccess.bind(this))},n.requestSuccess=function(){this.loadExisting(),this.resetNew(),m.redraw()},n.loadExisting=function(){var e=this;return this.loading=!0,r().request({method:"GET",url:r().forum.attribute("apiUrl")+"/masquerade/fields"}).then((function(t){r().store.pushPayload(t),e.existing=r().store.all("masquerade-field"),e.existing.sort((function(e,t){return e.sort()-t.sort()})),e.loading=!1,m.redraw()}))},n.resetNew=function(){this.newField=r().store.createRecord("masquerade-field",{attributes:{name:"",description:"",prefix:"",icon:"",required:!1,on_bio:!1,type:null,validation:""}})},t}(V());const he=flarum.core.compat["common/extenders"];var ge=e.n(he);const ve=flarum.core.compat["common/Model"];var be=e.n(ve),ye=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).name=be().attribute("name"),t.description=be().attribute("description"),t.type=be().attribute("type"),t.validation=be().attribute("validation"),t.required=be().attribute("required"),t.prefix=be().attribute("prefix"),t.icon=be().attribute("icon"),t.sort=be().attribute("sort"),t.deleted_at=be().attribute("deleted_at",be().transformDate),t.answer=be().hasOne("answer"),t.on_bio=be().attribute("on_bio"),t}return a(t,e),t.prototype.apiEndpoint=function(){return"/masquerade/fields"+(this.exists?"/"+this.data.id:"")},t}(be());const we=[(new(ge().Store)).add("masquerade-field",ye)],Ee=[].concat(we);var Te={FieldList:ce,FieldEdit:ue,MasqueradePage:pe,SelectFieldOptionEditor:se};r().initializers.add("fof-masquerade",(function(){r().extensionData.for("fof-masquerade").registerPage(pe).registerPermission({icon:"far fa-id-card",label:r().translator.trans("fof-masquerade.admin.permissions.view-profile"),permission:"fof.masquerade.view-profile",allowGuest:!0},"view").registerPermission({icon:"far fa-id-card",label:r().translator.trans("fof-masquerade.admin.permissions.have-profile"),permission:"fof.masquerade.have-profile"},"start").registerPermission({icon:"far fa-id-card",label:r().translator.trans("fof-masquerade.admin.permissions.edit-others-profile"),permission:"fof.masquerade.edit-others-profile"},"moderate")}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map