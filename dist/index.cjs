"use strict";var n=require("path"),e=require("fs"),r=require("module");function a(n,e,r,a){return new(r||(r=Promise))((function(i,o){function t(n){try{c(a.next(n))}catch(n){o(n)}}function s(n){try{c(a.throw(n))}catch(n){o(n)}}function c(n){var e;n.done?i(n.value):(e=n.value,e instanceof r?e:new r((function(n){n(e)}))).then(t,s)}c((a=a.apply(n,e||[])).next())}))}function i(n,e){var r,a,i,o,t={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,a&&(i=2&o[0]?a.return:o[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;switch(a=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return t.label++,{value:o[1],done:!1};case 5:t.label++,a=o[1],o=[0];continue;case 7:o=t.ops.pop(),t.trys.pop();continue;default:if(!(i=t.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){t=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){t.label=o[1];break}if(6===o[0]&&t.label<i[1]){t.label=i[1],i=o;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(o);break}i[2]&&t.ops.pop(),t.trys.pop();continue}o=e.call(n,t)}catch(n){o=[6,n],a=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}var o=["/usr/share/","/usr/lib/","/usr/opt/"],t=process.platform;exports.asarName="original_app.asar",exports.inject=function(r,s,c){return void 0===r&&(r="stable"),void 0===c&&(c={}),a(void 0,void 0,void 0,(function(){var a,l,u,p,d,f,y,v,b,h;return i(this,(function(i){if(a=c.name,l=c.events,u=function(r){var a;if(void 0===r&&(r="stable"),"win32"===t){var i;switch(r){case"stable":a=n.join(process.env.LOCALAPPDATA,"Discord");break;case"ptb":a=n.join(process.env.LOCALAPPDATA,"DiscordPTB");break;case"canary":a=n.join(process.env.LOCALAPPDATA,"DiscordCanary")}if(!e.existsSync(a))throw new Error("Could not find Discord installation.");i=e.readdirSync(a).filter((function(n){return n.startsWith("app-")}))[0],a=n.join(a,i,"resources")}else if("darwin"===t){switch(r){case"stable":a="/Applications/Discord.app/Contents/Resources/";break;case"ptb":a="/Applications/Discord PTB.app/Contents/Resources/";break;case"canary":a="/Applications/Discord Canary.app/Contents/Resources/"}if(!e.existsSync(a))throw new Error("Could not find Discord installation.")}else if("linux"===t){switch(r){case"stable":o.some((function(n){if(e.existsSync(n+"discord"))return a=n+"discord",!0}));break;case"ptb":o.some((function(n){if(e.existsSync(n+"discordptb"))return a=n+"discordptb",!0}));break;case"canary":o.some((function(n){if(e.existsSync(n+"discordcanary"))return a=n+"discordcanary",!0}))}if(!a)throw new Error("Could not find Discord installation.")}return a}(r),null===(y=null==l?void 0:l.onDiscovered)||void 0===y||y.call(l,u),p=n.join(u,"app.asar"),!e.existsSync(p)&&!e.existsSync(n.join(u,"original_app.asar")))throw null===(v=null==l?void 0:l.onError)||void 0===v||v.call(l,"Could not find app.asar."),new Error("No Discord asar found.");return e.existsSync(n.join(u,"original_app.asar"))||(e.renameSync(p,p.replace(/app\.asar$/,"original_app.asar")),null===(b=null==l?void 0:l.onRenamed)||void 0===b||b.call(l,p)),d='require("'.concat(s,'");'),f='{"name":"'.concat(a||"discord",'","main":"index.js"}'),e.writeFileSync(n.join(u,"app","index.js"),d),e.writeFileSync(n.join(u,"app","package.json"),f),null===(h=null==l?void 0:l.onInjected)||void 0===h||h.call(l,u),[2,u]}))}))},exports.load=function(a){var i=n.join(a.getAppPath(),"..","original_app.asar"),o=n.join(a.getAppPath(),"..","app.asar"),t=e.existsSync(i)?i:o,s=JSON.parse(e.readFileSync(n.join(t,"package.json"),"utf8"));a.setAppPath(t),a.name=s.name,r._load(n.join(t,s.main),null,!0)};
