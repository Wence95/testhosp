(()=>{var e={n:r=>{var t=r&&r.__esModule?()=>r.default:()=>r;return e.d(t,{a:t}),t},d:(r,t)=>{for(var s in t)e.o(t,s)&&!e.o(r,s)&&Object.defineProperty(r,s,{enumerable:!0,get:t[s]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};(()=>{"use strict";e.r(r),e.d(r,{SortMap:()=>o});const t=flarum.core.compat["admin/app"];var s=e.n(t),o=function(){function e(){}return e.prototype.sortMap=function(){return{username_az:"username",username_za:"-username",newest:"-joinedAt",oldest:"joinedAt",most_discussions:"-discussionCount",least_discussions:"discussionCount"}},e}();s().initializers.add("fof-user-directory",(function(e){var r={"":e.translator.trans("fof-user-directory.lib.sort.not_specified")};Object.keys((new o).sortMap()).forEach((function(t){r[t]=e.translator.trans("fof-user-directory.lib.sort."+t)})),e.extensionData.for("fof-user-directory").registerSetting({setting:"fof-user-directory-link",label:e.translator.trans("fof-user-directory.admin.settings.link"),type:"boolean"}).registerSetting({setting:"fof-user-directory.use-small-cards",label:e.translator.trans("fof-user-directory.admin.settings.use-small-cards"),type:"boolean"}).registerSetting({setting:"fof-user-directory.disable-global-search-source",label:e.translator.trans("fof-user-directory.admin.settings.disable-global-search-source"),type:"boolean"}).registerSetting({setting:"fof-user-directory.link-group-mentions",label:e.translator.trans("fof-user-directory.admin.settings.link-group-mentions"),type:"boolean"}).registerSetting({setting:"fof-user-directory.default-sort",label:e.translator.trans("fof-user-directory.admin.settings.default-sort"),options:r,type:"select",default:""}).registerPermission({icon:"far fa-address-book",label:e.translator.trans("fof-user-directory.admin.permissions.view_user_directory"),permission:"fof.user-directory.view",allowGuest:!0},"view")}))})(),module.exports=r})();
//# sourceMappingURL=admin.js.map