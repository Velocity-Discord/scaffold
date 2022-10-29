"use strict";var n=require("path"),e=require("fs"),r=require("module");function o(n,e,r,o){return new(r||(r=Promise))((function(a,i){function t(n){try{c(o.next(n))}catch(n){i(n)}}function s(n){try{c(o.throw(n))}catch(n){i(n)}}function c(n){var e;n.done?a(n.value):(e=n.value,e instanceof r?e:new r((function(n){n(e)}))).then(t,s)}c((o=o.apply(n,e||[])).next())}))}function a(n,e){var r,o,a,i,t={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,o&&(a=2&i[0]?o.return:i[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,i[1])).done)return a;switch(o=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return t.label++,{value:i[1],done:!1};case 5:t.label++,o=i[1],i=[0];continue;case 7:i=t.ops.pop(),t.trys.pop();continue;default:if(!(a=t.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){t=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){t.label=i[1];break}if(6===i[0]&&t.label<a[1]){t.label=a[1],a=i;break}if(a&&t.label<a[2]){t.label=a[2],t.ops.push(i);break}a[2]&&t.ops.pop(),t.trys.pop();continue}i=e.call(n,t)}catch(n){i=[6,n],o=0}finally{r=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}var i=["/usr/share/","/usr/lib/","/usr/opt/"],t=process.platform;exports.asarName="original_app.asar",exports.inject=function(r,s,c){return void 0===r&&(r="stable"),void 0===c&&(c={}),o(void 0,void 0,void 0,(function(){var o,l,u,p,d,f,v,y,b,h;return a(this,(function(a){if(o=c.name,l=c.events,u=function(r){var o;if(void 0===r&&(r="stable"),"win32"===t){var a;switch(r){case"stable":o=n.join(process.env.LOCALAPPDATA,"Discord");break;case"ptb":o=n.join(process.env.LOCALAPPDATA,"DiscordPTB");break;case"canary":o=n.join(process.env.LOCALAPPDATA,"DiscordCanary")}if(!e.existsSync(o))throw new Error("Could not find Discord installation.");a=e.readdirSync(o).filter((function(n){return n.startsWith("app-")}))[0],o=n.join(o,a,"resources")}else if("darwin"===t){switch(r){case"stable":o="/Applications/Discord.app/Contents/Resources/";break;case"ptb":o="/Applications/Discord PTB.app/Contents/Resources/";break;case"canary":o="/Applications/Discord Canary.app/Contents/Resources/"}if(!e.existsSync(o))throw new Error("Could not find Discord installation.")}else if("linux"===t){switch(r){case"stable":i.some((function(n){if(e.existsSync(n+"discord"))return o=n+"discord",!0}));break;case"ptb":i.some((function(n){if(e.existsSync(n+"discordptb"))return o=n+"discordptb",!0}));break;case"canary":i.some((function(n){if(e.existsSync(n+"discordcanary"))return o=n+"discordcanary",!0}))}if(!o)throw new Error("Could not find Discord installation.")}return o}(r),null===(v=null==l?void 0:l.onDiscovered)||void 0===v||v.call(l,u),p=n.join(u,"app.asar"),!e.existsSync(p))throw null===(y=null==l?void 0:l.onError)||void 0===y||y.call(l,"Could not find app.asar."),new Error("No Discord asar found.");return e.renameSync(p,p.replace(/app\.asar$/,"original_app.asar")),null===(b=null==l?void 0:l.onRenamed)||void 0===b||b.call(l,p),d='require("'.concat(s,'");'),f='{"name":"'.concat(o||"discord",'","main":"index.js"}'),e.writeFileSync(n.join(u,"app","index.js"),d),e.writeFileSync(n.join(u,"app","package.json"),f),null===(h=null==l?void 0:l.onInjected)||void 0===h||h.call(l,u),[2,u]}))}))},exports.load=function(o){var a=n.join(o.getAppPath(),"..","original_app.asar"),i=n.join(o.getAppPath(),"..","app.asar"),t=e.existsSync(a)?a:i,s=JSON.parse(e.readFileSync(n.join(t,"package.json"),"utf8"));o.setAppPath(t),o.name=s.name,r._load(n.join(t,s.main),null,!0)};
