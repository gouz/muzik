var e="object"==typeof e?e:{};e.Widget=function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){var o,r,i,a=t(1),d=t(2),l=t(3),c=a.api,u=a.bridge,s=[],w=[],f=/^http(?:s?)/;function p(e){var n,t;for(n=0,t=w.length;n<t&&!1!==e(w[n]);n++);}function h(e){return e.contentWindow?e.contentWindow:e.contentDocument&&"parentWindow"in e.contentDocument?e.contentDocument.parentWindow:null}function y(e){var n,t=[];for(n in e)e.hasOwnProperty(n)&&t.push(e[n]);return t}function g(e,n,t){t.callbacks[e]=t.callbacks[e]||[],t.callbacks[e].push(n)}function b(e,n){var t=!0;return n.callbacks[e]=[],p((function(n){if((n.callbacks[e]||[]).length)return t=!1,!1})),t}function E(e,n,t){var o,r,i=h(t);if(!i.postMessage)return!1;o=t.getAttribute("src").split("?")[0],r=JSON.stringify({method:e,value:n}),"//"===o.substr(0,2)&&(o=window.location.protocol+o),o=o.replace(/http:\/\/(w|wt).soundcloud.com/,"https://$1.soundcloud.com"),i.postMessage(r,o)}function m(e){var n;return p((function(t){if(t.instance===e)return n=t,!1})),n}function v(e){var n;return p((function(t){if(h(t.element)===e)return n=t,!1})),n}function S(e,n){return function(t){var o,r=!!((o=t)&&o.constructor&&o.call&&o.apply),i=m(this),a=!r&&n?t:null,d=r&&!n?t:null;return d&&g(e,d,i),E(e,a,i.element),this}}function _(e,n,t){var o,r,i;for(o=0,r=n.length;o<r;o++)e[i=n[o]]=S(i,t)}function R(e,n,t){return e+"?url="+n+"&"+function(e){var n,t,o=[];for(n in e)e.hasOwnProperty(n)&&(t=e[n],o.push(n+"="+("start_track"===n?parseInt(t,10):t?"true":"false")));return o.join("&")}(t)}function O(e,n,t){var o,r,i=e.callbacks[n]||[];for(o=0,r=i.length;o<r;o++)i[o].apply(e.instance,t);(function(e){var n,t=!1;for(n in d)if(d.hasOwnProperty(n)&&d[n]===e){t=!0;break}return t}(n)||n===c.READY)&&(e.callbacks[n]=[])}function P(e){var n,t,o,r,i;try{t=JSON.parse(e.data)}catch(e){return!1}return n=v(e.source),o=t.method,r=t.value,(!n||T(e.origin)===T(n.domain))&&(n?(o===c.READY&&(n.isReady=!0,O(n,"__LATE_BINDING__"),b("__LATE_BINDING__",n)),o!==c.PLAY||n.playEventFired||(n.playEventFired=!0),o!==c.PLAY_PROGRESS||n.playEventFired||(n.playEventFired=!0,O(n,c.PLAY,[r])),i=[],void 0!==r&&i.push(r),void O(n,o,i)):(o===c.READY&&s.push(e.source),!1))}function T(e){return e.replace(f,"")}window.addEventListener?window.addEventListener("message",P,!1):window.attachEvent("onmessage",P),e.exports=i=function(e,n,t){var i;if((""===(i=e)||i&&i.charCodeAt&&i.substr)&&(e=document.getElementById(e)),!function(e){return!(!e||1!==e.nodeType||"IFRAME"!==e.nodeName.toUpperCase())}(e))throw new Error("SC.Widget function should be given either iframe element or a string specifying id attribute of iframe element.");n&&(t=t||{},e.src=R("http://wt.soundcloud.test:9200/",n,t));var a,d,l=v(h(e));return l&&l.instance?l.instance:(a=s.indexOf(h(e))>-1,d=new o(e),w.push(new r(d,e,a)),d)},i.Events=c,window.SC=window.SC||{},window.SC.Widget=i,r=function(e,n,t){this.instance=e,this.element=n,this.domain=function(e){var n,t,o,r="";for("//"===e.substr(0,2)&&(e=window.location.protocol+e),n=0,t=(o=e.split("/")).length;n<t&&n<3;n++)r+=o[n],n<2&&(r+="/");return r}(n.getAttribute("src")),this.isReady=!!t,this.callbacks={}},(o=function(){}).prototype={constructor:o,load:function(e,n){if(e){n=n||{};var t=this,o=m(this),r=o.element,i=r.src,a=i.substr(0,i.indexOf("?"));o.isReady=!1,o.playEventFired=!1,r.onload=function(){t.bind(c.READY,(function(){var e,t=o.callbacks;for(e in t)t.hasOwnProperty(e)&&e!==c.READY&&E(u.ADD_LISTENER,e,o.element);n.callback&&n.callback()}))},r.src=R(a,e,n)}},bind:function(e,n){var t=this,o=m(this);return o&&o.element&&(e===c.READY&&o.isReady?setTimeout(n,1):o.isReady?(g(e,n,o),E(u.ADD_LISTENER,e,o.element)):g("__LATE_BINDING__",(function(){t.bind(e,n)}),o)),this},unbind:function(e){var n,t=m(this);t&&t.element&&(n=b(e,t),e!==c.READY&&n&&E(u.REMOVE_LISTENER,e,t.element))}},_(o.prototype,y(d)),_(o.prototype,y(l),!0)},function(e,n){n.api={LOAD_PROGRESS:"loadProgress",PLAY_PROGRESS:"playProgress",PLAY:"play",PAUSE:"pause",FINISH:"finish",SEEK:"seek",READY:"ready",OPEN_SHARE_PANEL:"sharePanelOpened",CLICK_DOWNLOAD:"downloadClicked",CLICK_BUY:"buyClicked",ERROR:"error"},n.bridge={REMOVE_LISTENER:"removeEventListener",ADD_LISTENER:"addEventListener"}},function(e,n){e.exports={GET_VOLUME:"getVolume",GET_DURATION:"getDuration",GET_POSITION:"getPosition",GET_SOUNDS:"getSounds",GET_CURRENT_SOUND:"getCurrentSound",GET_CURRENT_SOUND_INDEX:"getCurrentSoundIndex",IS_PAUSED:"isPaused"}},function(e,n){e.exports={PLAY:"play",PAUSE:"pause",TOGGLE:"toggle",SEEK_TO:"seekTo",SET_VOLUME:"setVolume",NEXT:"next",PREV:"prev",SKIP:"skip"}}]);window.next=()=>(window.location.hash="",window.location.reload(!0),!1),window.changeBG=e=>{window.bg=document.createElement("canvas"),window.bg.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,window.bg.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,window.bg.id="bg",document.querySelector("body").appendChild(window.bg);let n=new Image;n.onload=()=>{document.querySelector("#bg").getContext("2d").drawImage(n,0,0,window.bg.width,window.bg.height);try{let e=context.getImageData(0,0,window.bg.width,window.bg.height),n=e.data.length,t=5,o={r:0,g:0,b:0};for(;(i+=4*t)<n;)++count,o.r+=e.data[i],o.g+=e.data[i+1],o.b+=e.data[i+2];o.r=~~(o.r/count),o.g=~~(o.g/count),o.b=~~(o.b/count),document.querySelector("body").style.backgroundColor=`rgb(${rbg.r}, ${o.b}, ${o.g})`}catch(e){document.querySelector("body").style.backgroundColor="#000"}},n.src=e},fetch("./list.json").then((e=>e.json().then((e=>{let n=Math.floor(Math.random()*e.list.length);""!=window.location.hash&&(n=window.location.hash.replace("#","")-1,(n>e.list.length||n<1)&&(n=Math.floor(Math.random()*e.list.length))),window.location.hash=n+1,document.querySelector("#wrapper").innerHTML+=(e=>{let n="";if(-1!==e.indexOf("youtube")||-1!==e.indexOf("youtu.be")){window.player={},window.onPlayerReady=e=>{e.target.playVideo(),document.querySelector("h1").innerHTML=window.player.playerInfo.videoData.title},window.onPlayerStateChange=e=>{e.data==YT.PlayerState.ENDED&&(window.location.hash="",window.location.reload(!0))},window.onYouTubeIframeAPIReady=()=>{window.player=new YT.Player("player",{videoId:window.code,events:{onReady:window.onPlayerReady,onStateChange:window.onPlayerStateChange}})},window.code=e.substring(e.lastIndexOf("/")+1).replace("watch?v=","");let t=document.createElement("script");t.src="https://www.youtube.com/iframe_api";let o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(t,o),n='<div id="player"></div>'}return-1!==e.indexOf("soundcloud")&&(n=`<iframe src="https://w.soundcloud.com/player/?url=${e.replace(":","%3A")+"&amp;auto_play=true"}" \n                           scrolling="no" \n                           frameborder="no" \n                           width="640"\n                           allow="autoplay"></iframe>`,setTimeout((()=>{window.player=SC.Widget(document.querySelector("iframe")),window.player.bind(SC.Widget.Events.FINISH,(()=>{window.location.hash="",window.location.reload(!0)})),window.player.bind(SC.Widget.Events.READY,(()=>{window.player.getCurrentSound((e=>{document.querySelector("h1").innerHTML=e.title;let n=null;n=void 0===e.artwork_url?e.artwork_url:e.user.avatar_url,window.changeBG(n)}))}))}),1e3)),`\n        <div class="🎶">\n            <div class="🎶--box">\n                ${n}\n                <a href="#" onclick="window.next();">next</div>\n            </div>\n        </div>\n        `})(e.list[n]),document.querySelector("body").innerHTML+=`<div id="info">There is <b>${e.list.length}</b> tracks in the playlist.</div>`}))));