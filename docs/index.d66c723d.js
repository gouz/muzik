var $parcel$global="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function $parcel$interopDefault(e){return e&&e.__esModule?e.default:e}var $parcel$modules={},$parcel$inits={},parcelRequire=$parcel$global.parcelRequireccb7;async function $86727a2a01aca212$export$2e2bcd8739ae039(e){return new Promise((i=>{let t=document.createElement("canvas").getContext("2d");t.imageSmoothingEnabled=!0;let n=new Image;n.src=e,n.crossOrigin="Anonymous",n.onload=()=>{t.drawImage(n,0,0,1,1);let e=t.getImageData(0,0,1,1).data.slice(0,3);i("#"+(16777216+(e[0]<<16)+(e[1]<<8)+e[2]).toString(16).slice(1))}}))}function $fd9ee5497f79a2d4$export$2e2bcd8739ae039(e,i){var t=!1;"#"==e[0]&&(e=e.slice(1),t=!0);var n=parseInt(e,16),o=(n>>16)+i;o>255?o=255:o<0&&(o=0);var a=(n>>8&255)+i;a>255?a=255:a<0&&(a=0);var s=(255&n)+i;return s>255?s=255:s<0&&(s=0),(t?"#":"")+(s|a<<8|o<<16).toString(16)}function $e5cf1a41b45bdd8a$export$2e2bcd8739ae039(e){e=e.substring(1);let i=parseInt(e,16);return.2126*(i>>16&255)+.7152*(i>>8&255)+.0722*(i>>0&255)<40}function $38038adb1bd370dd$export$2e2bcd8739ae039(e){const i=parseInt(e,10);let t=Math.floor(i/3600),n=Math.floor((i-3600*t)/60),o=i-3600*t-60*n;return t<10&&(t="0"+t),n<10&&(n="0"+n),o<10&&(o="0"+o),("00"!=t?t+":":"")+n+":"+o}function $ce1680ed4f647bbb$export$2e2bcd8739ae039(e,i){e.value=i;const t=e.min,n=e.max,o=e.value;e.style.backgroundSize=100*(o-t)/(n-t)+"% 100%"}null==parcelRequire&&(parcelRequire=function(e){if(e in $parcel$modules)return $parcel$modules[e].exports;if(e in $parcel$inits){var i=$parcel$inits[e];delete $parcel$inits[e];var t={id:e,exports:{}};return $parcel$modules[e]=t,i.call(t.exports,t,t.exports),t.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n},parcelRequire.register=function(e,i){$parcel$inits[e]=i},$parcel$global.parcelRequireccb7=parcelRequire),parcelRequire.register("kcgoq",(function(module,exports){var $9Mq5w=parcelRequire("9Mq5w");
/*
 * [js-sha1]{@link https://github.com/emn178/js-sha1}
 *
 * @version 0.6.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */!function(){function t1(e){e?(f[0]=f[16]=f[1]=f[2]=f[3]=f[4]=f[5]=f[6]=f[7]=f[8]=f[9]=f[10]=f[11]=f[12]=f[13]=f[14]=f[15]=0,this.blocks=f):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.h0=1732584193,this.h1=4023233417,this.h2=2562383102,this.h3=271733878,this.h4=3285377520,this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}var h1="object"==typeof window?window:{},s1=!h1.JS_SHA1_NO_NODE_JS&&"object"==typeof $9Mq5w&&$9Mq5w.versions&&$9Mq5w.versions.node;s1&&(h1=$parcel$global);var i1=!h1.JS_SHA1_NO_COMMON_JS&&module.exports,e1="function"==typeof define&&define.amd,r1="0123456789abcdef".split(""),o1=[-2147483648,8388608,32768,128],n1=[24,16,8,0],a1=["hex","array","digest","arrayBuffer"],f=[],u=function(e){return function(i){return new t1(!0).update(i)[e]()}},c=function(){var e=u("hex");s1&&(e=p(e)),e.create=function(){return new t1},e.update=function(i){return e.create().update(i)};for(var i=0;i<a1.length;++i){var t=a1[i];e[t]=u(t)}return e},p=function(t){var h=eval("require('crypto')"),s=eval("require('buffer').Buffer"),i2=function(e){if("string"==typeof e)return h.createHash("sha1").update(e,"utf8").digest("hex");if(e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(void 0===e.length)return t(e);return h.createHash("sha1").update(new s(e)).digest("hex")};return i2};t1.prototype.update=function(e){if(!this.finalized){var i="string"!=typeof e;i&&e.constructor===h1.ArrayBuffer&&(e=new Uint8Array(e));for(var t,n,o=0,a=e.length||0,s=this.blocks;o<a;){if(this.hashed&&(this.hashed=!1,s[0]=this.block,s[16]=s[1]=s[2]=s[3]=s[4]=s[5]=s[6]=s[7]=s[8]=s[9]=s[10]=s[11]=s[12]=s[13]=s[14]=s[15]=0),i)for(n=this.start;o<a&&n<64;++o)s[n>>2]|=e[o]<<n1[3&n++];else for(n=this.start;o<a&&n<64;++o)(t=e.charCodeAt(o))<128?s[n>>2]|=t<<n1[3&n++]:t<2048?(s[n>>2]|=(192|t>>6)<<n1[3&n++],s[n>>2]|=(128|63&t)<<n1[3&n++]):t<55296||t>=57344?(s[n>>2]|=(224|t>>12)<<n1[3&n++],s[n>>2]|=(128|t>>6&63)<<n1[3&n++],s[n>>2]|=(128|63&t)<<n1[3&n++]):(t=65536+((1023&t)<<10|1023&e.charCodeAt(++o)),s[n>>2]|=(240|t>>18)<<n1[3&n++],s[n>>2]|=(128|t>>12&63)<<n1[3&n++],s[n>>2]|=(128|t>>6&63)<<n1[3&n++],s[n>>2]|=(128|63&t)<<n1[3&n++]);this.lastByteIndex=n,this.bytes+=n-this.start,n>=64?(this.block=s[16],this.start=n-64,this.hash(),this.hashed=!0):this.start=n}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t1.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,i=this.lastByteIndex;e[16]=this.block,e[i>>2]|=o1[3&i],this.block=e[16],i>=56&&(this.hashed||this.hash(),e[0]=this.block,e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.hBytes<<3|this.bytes>>>29,e[15]=this.bytes<<3,this.hash()}},t1.prototype.hash=function(){var e,i,t=this.h0,n=this.h1,o=this.h2,a=this.h3,s=this.h4,r=this.blocks;for(e=16;e<80;++e)i=r[e-3]^r[e-8]^r[e-14]^r[e-16],r[e]=i<<1|i>>>31;for(e=0;e<20;e+=5)t=(i=(n=(i=(o=(i=(a=(i=(s=(i=t<<5|t>>>27)+(n&o|~n&a)+s+1518500249+r[e]<<0)<<5|s>>>27)+(t&(n=n<<30|n>>>2)|~t&o)+a+1518500249+r[e+1]<<0)<<5|a>>>27)+(s&(t=t<<30|t>>>2)|~s&n)+o+1518500249+r[e+2]<<0)<<5|o>>>27)+(a&(s=s<<30|s>>>2)|~a&t)+n+1518500249+r[e+3]<<0)<<5|n>>>27)+(o&(a=a<<30|a>>>2)|~o&s)+t+1518500249+r[e+4]<<0,o=o<<30|o>>>2;for(;e<40;e+=5)t=(i=(n=(i=(o=(i=(a=(i=(s=(i=t<<5|t>>>27)+(n^o^a)+s+1859775393+r[e]<<0)<<5|s>>>27)+(t^(n=n<<30|n>>>2)^o)+a+1859775393+r[e+1]<<0)<<5|a>>>27)+(s^(t=t<<30|t>>>2)^n)+o+1859775393+r[e+2]<<0)<<5|o>>>27)+(a^(s=s<<30|s>>>2)^t)+n+1859775393+r[e+3]<<0)<<5|n>>>27)+(o^(a=a<<30|a>>>2)^s)+t+1859775393+r[e+4]<<0,o=o<<30|o>>>2;for(;e<60;e+=5)t=(i=(n=(i=(o=(i=(a=(i=(s=(i=t<<5|t>>>27)+(n&o|n&a|o&a)+s-1894007588+r[e]<<0)<<5|s>>>27)+(t&(n=n<<30|n>>>2)|t&o|n&o)+a-1894007588+r[e+1]<<0)<<5|a>>>27)+(s&(t=t<<30|t>>>2)|s&n|t&n)+o-1894007588+r[e+2]<<0)<<5|o>>>27)+(a&(s=s<<30|s>>>2)|a&t|s&t)+n-1894007588+r[e+3]<<0)<<5|n>>>27)+(o&(a=a<<30|a>>>2)|o&s|a&s)+t-1894007588+r[e+4]<<0,o=o<<30|o>>>2;for(;e<80;e+=5)t=(i=(n=(i=(o=(i=(a=(i=(s=(i=t<<5|t>>>27)+(n^o^a)+s-899497514+r[e]<<0)<<5|s>>>27)+(t^(n=n<<30|n>>>2)^o)+a-899497514+r[e+1]<<0)<<5|a>>>27)+(s^(t=t<<30|t>>>2)^n)+o-899497514+r[e+2]<<0)<<5|o>>>27)+(a^(s=s<<30|s>>>2)^t)+n-899497514+r[e+3]<<0)<<5|n>>>27)+(o^(a=a<<30|a>>>2)^s)+t-899497514+r[e+4]<<0,o=o<<30|o>>>2;this.h0=this.h0+t<<0,this.h1=this.h1+n<<0,this.h2=this.h2+o<<0,this.h3=this.h3+a<<0,this.h4=this.h4+s<<0},t1.prototype.hex=function(){this.finalize();var e=this.h0,i=this.h1,t=this.h2,n=this.h3,o=this.h4;return r1[e>>28&15]+r1[e>>24&15]+r1[e>>20&15]+r1[e>>16&15]+r1[e>>12&15]+r1[e>>8&15]+r1[e>>4&15]+r1[15&e]+r1[i>>28&15]+r1[i>>24&15]+r1[i>>20&15]+r1[i>>16&15]+r1[i>>12&15]+r1[i>>8&15]+r1[i>>4&15]+r1[15&i]+r1[t>>28&15]+r1[t>>24&15]+r1[t>>20&15]+r1[t>>16&15]+r1[t>>12&15]+r1[t>>8&15]+r1[t>>4&15]+r1[15&t]+r1[n>>28&15]+r1[n>>24&15]+r1[n>>20&15]+r1[n>>16&15]+r1[n>>12&15]+r1[n>>8&15]+r1[n>>4&15]+r1[15&n]+r1[o>>28&15]+r1[o>>24&15]+r1[o>>20&15]+r1[o>>16&15]+r1[o>>12&15]+r1[o>>8&15]+r1[o>>4&15]+r1[15&o]},t1.prototype.toString=t1.prototype.hex,t1.prototype.digest=function(){this.finalize();var e=this.h0,i=this.h1,t=this.h2,n=this.h3,o=this.h4;return[e>>24&255,e>>16&255,e>>8&255,255&e,i>>24&255,i>>16&255,i>>8&255,255&i,t>>24&255,t>>16&255,t>>8&255,255&t,n>>24&255,n>>16&255,n>>8&255,255&n,o>>24&255,o>>16&255,o>>8&255,255&o]},t1.prototype.array=t1.prototype.digest,t1.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(20),i=new DataView(e);return i.setUint32(0,this.h0),i.setUint32(4,this.h1),i.setUint32(8,this.h2),i.setUint32(12,this.h3),i.setUint32(16,this.h4),e};var y=c();i1?module.exports=y:(h1.sha1=y,e1&&define((function(){return y})))}()})),parcelRequire.register("9Mq5w",(function(e,i){var t,n,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function r(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(i){try{return t.call(null,e,0)}catch(i){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var d,l=[],u=!1,c=-1;function w(){u&&d&&(u=!1,d.length?l=d.concat(l):c=-1,l.length&&m())}function m(){if(!u){var e=r(w);u=!0;for(var i=l.length;i;){for(d=l,l=[];++c<i;)d&&d[c].run();c=-1,i=l.length}d=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(i){try{return n.call(null,e)}catch(i){return n.call(this,e)}}}(e)}}function $(e,i){this.fun=e,this.array=i}function h(){}o.nextTick=function(e){var i=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)i[t-1]=arguments[t];l.push(new $(e,i)),1!==l.length||u||r(m)},$.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}})),window.$muzik={repeat_mode:0,track_keypress:!0,playlist:null,$artist:document.getElementById("artist"),$artwork:document.getElementById("artwork"),$colors:document.getElementById("colors"),$muted:document.getElementById("muted"),$next:document.getElementById("next"),$pause:document.getElementById("pause"),$play:document.getElementById("play"),$playlistList:document.getElementById("playlist-list"),$playlistWrapper:document.getElementById("playlist-wrapper"),$previous:document.getElementById("previous"),$repeat:document.getElementById("repeat"),$repeat1:document.getElementById("repeat1"),$searchField:document.getElementById("search-field"),$shuffle:document.getElementById("shuffle"),$themeColor:document.getElementById("theme-color"),$timeCurrent:document.getElementById("time-current"),$timestamp:document.getElementById("timestamp"),$timeTotal:document.getElementById("time-total"),$title:document.getElementById("title"),$video:document.getElementById("video"),$volume:document.getElementById("volume"),$volumeRange:document.getElementById("volume-range"),$volumeWrapper:document.getElementById("volume-wrapper")},"mediaSession"in navigator&&(navigator.mediaSession.setActionHandler("play",(function(){window.$muzik.play()})),navigator.mediaSession.setActionHandler("pause",(function(){window.$muzik.pause()})),navigator.mediaSession.setActionHandler("previoustrack",(function(){window.$muzik.previous()})),navigator.mediaSession.setActionHandler("nexttrack",(function(){window.$muzik.next()}))),document.addEventListener("keypress",(e=>{if(window.$muzik.track_keypress){switch(e.stopImmediatePropagation(),e.preventDefault(),e.key){case"b":window.$muzik.previous();break;case"n":window.$muzik.next();break;case" ":window.$muzik.$pause.classList.contains("hide")?window.$muzik.play():window.$muzik.pause();break;case"s":window.$muzik.togglePlaylist(),window.$muzik.$searchField.focus();break;case"+":window.$muzik.$volumeRange.value=parseInt(window.$muzik.$volumeRange.value)+10,window.$muzik.volume(window.$muzik.$volumeRange.value);break;case"-":window.$muzik.$volumeRange.value=parseInt(window.$muzik.$volumeRange.value)-10,window.$muzik.volume(window.$muzik.$volumeRange.value);break;case"r":window.$muzik.repeat();break;case"v":window.$muzik.showClip();break;case"x":window.$muzik.shuffle();break;case"c":window.$muzik.share();break;case"q":window.$muzik.$playlistWrapper.classList.contains("hide")||window.$muzik.togglePlaylist()}return!1}}),!1),window.$muzik.changeAmbiance=e=>{"youtube"==window.$muzik.song.type&&(e=`//images.weserv.nl/?url=${e}&w=300&h=300`),$86727a2a01aca212$export$2e2bcd8739ae039(e).then((e=>{$e5cf1a41b45bdd8a$export$2e2bcd8739ae039(e)&&(e=$fd9ee5497f79a2d4$export$2e2bcd8739ae039(e,70)),window.$muzik.$colors.innerHTML=`\n      :root {\n          --muzik-track-color: ${$fd9ee5497f79a2d4$export$2e2bcd8739ae039(e,30)};\n          --muzik-thumb-color: ${e};\n          --muzik-thumb-color-hover: ${$fd9ee5497f79a2d4$export$2e2bcd8739ae039(e,-30)};\n      }\n\n      body {\n        background-color: ${e};\n      }\n    `,window.$muzik.$themeColor.content=e}))},window.$muzik.defineTimer=()=>{clearInterval(window.$muzik.timer),window.$muzik.timer=setInterval((()=>{const e=window.$muzik.player[window.$muzik.song.type].getTime();window.$muzik.$timeCurrent.textContent=$38038adb1bd370dd$export$2e2bcd8739ae039(e),$ce1680ed4f647bbb$export$2e2bcd8739ae039(window.$muzik.$timestamp,e),window.$muzik.player[window.$muzik.song.type].isPlaying||(window.$muzik.$play.classList.remove("hide"),window.$muzik.$pause.classList.add("hide"))}),300)},window.$muzik.initMediaSessionHandler=()=>{"mediaSession"in navigator&&(navigator.mediaSession.setActionHandler("play",(function(){window.$muzik.play()})),navigator.mediaSession.setActionHandler("pause",(function(){window.$muzik.pause()})),navigator.mediaSession.setActionHandler("stop",(function(){window.$muzik.pause()})),navigator.mediaSession.setActionHandler("seekto",(function(e){window.$muzik.seek(e.seekTime)})),navigator.mediaSession.setActionHandler("previoustrack",(function(){window.$muzik.previous()})),navigator.mediaSession.setActionHandler("nexttrack",(function(){window.$muzik.next()})))};var $kcgoq=parcelRequire("kcgoq");window.$muzik.loadMeta=e=>{window.$muzik.play(),window.location.hash=$parcel$interopDefault($kcgoq)(window.$muzik.song.code),window.$muzik.$artwork.style.backgroundImage=`url(${e.img})`,window.$muzik.$timeCurrent.textContent=$38038adb1bd370dd$export$2e2bcd8739ae039(0),window.$muzik.$timeTotal.textContent=$38038adb1bd370dd$export$2e2bcd8739ae039(e.duration),window.$muzik.$timestamp.max=Math.round(e.duration);let i=e.artist,t=e.title;void 0!==window.$muzik.song.artist&&""!=window.$muzik.song.artist&&(i=window.$muzik.song.artist),void 0!==window.$muzik.song.title&&""!=window.$muzik.song.title&&(t=window.$muzik.song.title),window.$muzik.$artist.textContent=i,window.$muzik.$title.textContent=t,window.$muzik.changeAmbiance(e.img),window.$muzik.notify({artwork:e.img,artist:i,title:t}),"mediaSession"in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:t,artist:i,artwork:[{src:e.img,sizes:e.size,type:"image/png"}]}))};var $kcgoq=parcelRequire("kcgoq");class $773a39bbaa517a89$export$a10c242a3195e585{constructor(e,i){this.list=e,this.currentTrack=0,""!=i&&(this.currentTrack=this.list.findIndex((e=>$parcel$interopDefault($kcgoq)(e.code)==i)));let t="";this.list.forEach((e=>{const i=$parcel$interopDefault($kcgoq)(e.code);t+=`\n        <li id="${i}">\n          <a href="javascript:window.$muzik.playlist.playSong('${i}');">\n            ${e.artist} | ${e.title}\n          </a>\n        </li>\n      `})),window.$muzik.$playlistList.innerHTML=t,window.$muzik.$songs=window.$muzik.$playlistList.querySelectorAll("li"),window.$muzik.song=null,this.load()}load=()=>{const e=window.$muzik.$video;"soundcloud"==this.list[this.currentTrack].type?(e.classList.add("hide"),document.getElementById("youtube-player").classList.add("hide")):"youtube"==this.list[this.currentTrack].type&&(e.classList.remove("hide"),document.getElementById("youtube-player").classList.remove("hide")),window.$muzik.manageControls(),null!=window.$muzik.song&&window.$muzik.player[window.$muzik.song.type].isReady&&window.$muzik.player[window.$muzik.song.type].pause(),window.$muzik.song=this.list[this.currentTrack],window.$muzik.player[window.$muzik.song.type].load();const i=window.$muzik.$playlistList.querySelector("li.current");null!=i&&i.classList.remove("current"),window.$muzik.$playlistList.querySelectorAll("li")[this.currentTrack].classList.add("current")};previous=()=>{this.currentTrack--,this.currentTrack<=0&&(1==window.$muzik.repeat_mode?this.currentTrack=this.list.length-1:this.currentTrack=0),this.load()};next=(e,i)=>{(e||2!=window.$muzik.repeat_mode)&&(window.$muzik.$shuffle.classList.contains("active")&&!i?this.currentTrack=Math.floor(Math.random()*this.list.length):this.currentTrack++),this.currentTrack>=this.list.length&&(1==window.$muzik.repeat_mode?this.currentTrack=0:this.currentTrack=this.list.length-1),this.load()};playSong=e=>{const i=this.list.findIndex((i=>$parcel$interopDefault($kcgoq)(i.code)==e));console.log(i),this.currentTrack=i-1,this.next(!0,!0)}}window.$muzik.loadPlaylist=e=>{fetch(e).then((e=>e.json())).then((e=>{let i=[];for(const[t,n]of Object.entries(e.list))n.forEach((e=>{e.type=t,i.push(e)}));window.$muzik.playlist=new $773a39bbaa517a89$export$a10c242a3195e585(i,window.location.hash.substring(1)),window.$muzik.manageControls()}))},window.$muzik.manageControls=()=>{if(null!=window.$muzik.playlist){const e=window.$muzik.playlist.currentTrack,i=window.$muzik.playlist.list.length-1,t=1==window.$muzik.repeat_mode,n=window.$muzik.$shuffle.classList.contains("active");0==e||n?window.$muzik.$previous.classList.add("disabled"):window.$muzik.$previous.classList.remove("disabled"),n||i!=e||t?window.$muzik.$next.classList.remove("disabled"):window.$muzik.$next.classList.add("disabled")}},window.$muzik.next=e=>{clearInterval(window.$muzik.timer),window.$muzik.$next.classList.contains("disabled")||window.$muzik.playlist.next(e)},window.$muzik.notify=e=>{window.Notification&&("granted"===Notification.permission?new Notification(e.artist,{body:e.title,icon:e.artwork}):Notification.requestPermission().then((i=>{"granted"===i&&new Notification(e.artist,{body:e.title,icon:e.artwork})})).catch((()=>{})))},window.$muzik.pause=()=>{clearInterval(window.$muzik.timer),window.$muzik.$play.classList.remove("hide"),window.$muzik.$pause.classList.add("hide"),window.$muzik.player[window.$muzik.song.type].pause()},window.$muzik.play=()=>{window.$muzik.$play.classList.add("hide"),window.$muzik.$pause.classList.remove("hide"),window.$muzik.defineTimer(),window.$muzik.player[window.$muzik.song.type].play()},window.$muzik.previous=()=>{clearInterval(window.$muzik.timer),window.$muzik.$previous.classList.contains("disabled")||window.$muzik.playlist.previous()},window.$muzik.repeat=()=>{0==window.$muzik.repeat_mode?(window.$muzik.repeat_mode=1,window.$muzik.$repeat.classList.add("active")):1==window.$muzik.repeat_mode?(window.$muzik.repeat_mode=2,window.$muzik.$repeat.classList.remove("active"),window.$muzik.$repeat.classList.add("hide"),window.$muzik.$repeat1.classList.remove("hide")):(window.$muzik.repeat_mode=0,window.$muzik.$repeat1.classList.add("hide"),window.$muzik.$repeat.classList.remove("hide")),window.$muzik.manageControls()},window.$muzik.search=e=>{e=e.toLowerCase(),window.$muzik.$songs.forEach((i=>{i.textContent.toLowerCase().includes(e)?i.classList.remove("hide"):i.classList.add("hide")}))},window.$muzik.seek=(e,i)=>{window.$muzik.$timeCurrent.textContent=$38038adb1bd370dd$export$2e2bcd8739ae039(e),$ce1680ed4f647bbb$export$2e2bcd8739ae039(window.$muzik.$timestamp,e),clearInterval(window.$muzik.timer),i&&(window.$muzik.player[window.$muzik.song.type].seek(e),window.$muzik.defineTimer())},window.$muzik.share=()=>{navigator.clipboard.writeText(window.location).then((()=>{alert("Link copied to clipboard")}))},window.$muzik.showClip=()=>{"youtube"==window.$muzik.song.type&&(document.getElementById("youtube-player").classList.toggle("over"),window.$muzik.$video.classList.toggle("active"))},window.$muzik.showVolume=()=>{window.$muzik.$volumeWrapper.classList.toggle("hide"),window.$muzik.$volume.classList.toggle("active")},window.$muzik.shuffle=()=>{window.$muzik.$shuffle.classList.toggle("active"),window.$muzik.manageControls()},window.$muzik.toggleKeyTrack=()=>{window.$muzik.track_keypress=!window.$muzik.track_keypress},window.$muzik.togglePlaylist=()=>{window.$muzik.$playlistWrapper.classList.toggle("hide"),window.$muzik.$songs.forEach((e=>e.classList.remove("hide"))),window.$muzik.$searchField.value="",document.getElementById(window.location.hash.substring(1)).scrollIntoView()},window.$muzik.volume=e=>{0==e?(window.$muzik.$muted.classList.remove("hide"),window.$muzik.$volume.classList.add("hide")):(window.$muzik.$muted.classList.add("hide"),window.$muzik.$volume.classList.remove("hide")),$ce1680ed4f647bbb$export$2e2bcd8739ae039(window.$muzik.$volumeRange,e),window.$muzik.player[window.$muzik.song.type].setVolume(e)};class $a95913b9c1561b27$export$9967558ab3090fa1{constructor(){this.isReady=!1,this.isPlaying=!1,this.player=null}onPlayerReady=e=>{e.target.playVideo()};onPlayerStateChange=e=>{YT.PlayerState.PLAYING==e.data?(window.$muzik.loadMeta({img:`https://i.ytimg.com/vi/${window.$muzik.song.code}/hqdefault.jpg`,size:"480x360",duration:this.player.getDuration(),artist:this.player.getVideoData().artist,title:this.player.getVideoData().title}),this.isPlaying=!0,this.setVolume(window.$muzik.$volumeRange.value)):YT.PlayerState.ENDED==e.data?window.$muzik.next(!1):YT.PlayerState.PAUSED==e.data&&(this.isPlaying=!1)};load=()=>{this.isReady?this.player.loadVideoById(window.$muzik.song.code):this.init()};play=()=>{this.player.playVideo()};pause=()=>{this.player.pauseVideo(),this.isPlaying=!1};seek=e=>{this.player.seekTo(e)};getTime=()=>this.player.getCurrentTime();setVolume=e=>{this.player.setVolume(e)};init=()=>{window.onYouTubeIframeAPIReady=()=>{this.isReady=!0,this.player=new YT.Player("youtube-player",{events:{onReady:this.onPlayerReady,onStateChange:this.onPlayerStateChange},playerVars:{autoplay:1,modestbranding:1,rel:0,origin:window.location.origin,width:320},videoId:window.$muzik.song.code,host:"https://www.youtube.com"})};const e=document.createElement("script"),i=document.getElementsByTagName("script")[0];e.src="//www.youtube.com/iframe_api",i.parentNode.insertBefore(e,i)}}class $d88140f38f89f927$export$958ea856dfb384c9{constructor(){this.isReady=!1,this.isPlaying=!1,this.player=null,this.position=0}loaded=()=>{this.player.getCurrentSound((e=>{let i=null;i=null!==e.artwork_url?e.artwork_url:e.user.avatar_url,window.$muzik.loadMeta({img:i.replace("-large.jpg","-t300x300.jpg"),size:"300x300",duration:Math.round(e.full_duration/1e3),artist:e.user.full_name,title:e.title}),this.setVolume(window.$muzik.$volumeRange.value),this.player.seek(0)}))};init=()=>{this.isReady=!0,document.getElementById("soundcloud-player").setAttribute("src",`https://w.soundcloud.com/player/?url=https%3A//soundcloud.com${window.$muzik.song.code}&amp;auto_play=true`),this.player=SC.Widget("soundcloud-player"),this.player.bind(SC.Widget.Events.READY,(()=>{this.player.bind(SC.Widget.Events.PLAY_PROGRESS,(()=>{this.player.getPosition((e=>{this.position=e}))})),this.player.bind(SC.Widget.Events.FINISH,(()=>{window.$muzik.next(!1)})),this.player.bind(SC.Widget.Events.PAUSE,(()=>{this.isPlaying=!1})),this.player.bind(SC.Widget.Events.PLAY,(()=>{this.isPlaying=!0,this.position>=0&&this.player.seekTo(this.position)})),this.loaded()}))};load=()=>{this.isReady?this.player.load(window.$muzik.song.code,{auto_play:"true",callback:()=>{this.loaded()}}):this.init()};play=()=>{this.player.play(),this.isPlaying=!0};pause=()=>{this.player.pause(),this.isPlaying=!1};seek=e=>{this.isPlaying=!0,this.position=1e3*e,this.player.isPaused((i=>{1==i?this.player.play():this.player.seekTo(1e3*e)}))};getTime=()=>Math.round(this.position/1e3);setVolume=e=>{this.player.setVolume(e)}}class $ec9db8c56108b093$export$6db55e342ab29d1a{constructor(){this.apiKey="1515bf9eecc024877c30d2c9ce09fc77",this.isReady=!1,this.isPlaying=!1,this.player=null,this.position=0,this.duration=0}loaded=e=>{const i=e.tracks[0];window.$muzik.loadMeta({img:window.$muzik.song.artwork,size:"264x264",duration:i.duration,artist:i.artist.name,title:i.title}),this.duration=i.duration,this.setVolume(window.$muzik.$volumeRange.value)};init=()=>{this.isReady=!0,DZ.init({appId:this.apiKey,channelUrl:"http://gouz.github.io/muzik/channel.html",player:{onload:()=>{DZ.Event.subscribe("player_position",(e=>{this.position=e[0],this.duration=e[1]})),DZ.Event.subscribe("track_end",(()=>{window.$muzik.next(!1)})),this.player=DZ.player,this.player.playTracks([window.$muzik.song.code],(e=>{this.loaded(e),this.isPlaying=!0}))}}})};load=()=>{this.isReady?this.player.playTracks([window.$muzik.song.code],(e=>{this.loaded(e)})):this.init()};play=()=>{this.player.play(),this.isPlaying=!0};pause=()=>{this.player.pause(),this.isPlaying=!1};seek=e=>{this.position=100*e/this.duration,this.player.seek(this.position)};getTime=()=>Math.round(this.position);setVolume=e=>{this.player.setVolume(e)}}const $0ab5c1362235f12a$var$ready=e=>{"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)};$0ab5c1362235f12a$var$ready((()=>{window.$muzik.player={youtube:new $a95913b9c1561b27$export$9967558ab3090fa1,soundcloud:new $d88140f38f89f927$export$958ea856dfb384c9,deezer:new $ec9db8c56108b093$export$6db55e342ab29d1a},window.$muzik.initMediaSessionHandler(),$ce1680ed4f647bbb$export$2e2bcd8739ae039(window.$muzik.$volumeRange,50),window.$muzik.loadPlaylist("list.json")}));