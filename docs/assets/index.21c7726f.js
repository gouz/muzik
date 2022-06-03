var P=Object.defineProperty;var A=(t,i,e)=>i in t?P(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e;var r=(t,i,e)=>(A(t,typeof i!="symbol"?i+"":i,e),e);const R=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}};R();window.$muzik={repeat_mode:0,track_keypress:!0,playlist:null,$artist:document.querySelector("#artist span"),$artwork:document.getElementById("artwork"),$colors:document.getElementById("colors"),$muted:document.getElementById("muted"),$next:document.getElementById("next"),$pause:document.getElementById("pause"),$play:document.getElementById("play"),$playlistList:document.getElementById("playlist-list"),$playlistWrapper:document.getElementById("playlist-wrapper"),$previous:document.getElementById("previous"),$repeat:document.getElementById("repeat"),$repeat1:document.getElementById("repeat1"),$searchField:document.getElementById("search-field"),$shuffle:document.getElementById("shuffle"),$timeCurrent:document.getElementById("time-current"),$timestamp:document.getElementById("timestamp"),$timeTotal:document.getElementById("time-total"),$title:document.querySelector("#title span"),$video:document.getElementById("video"),$volume:document.getElementById("volume"),$volumeRange:document.getElementById("volume-range"),$volumeWrapper:document.getElementById("volume-wrapper")};"mediaSession"in navigator&&(navigator.mediaSession.setActionHandler("play",function(){window.$muzik.play()}),navigator.mediaSession.setActionHandler("pause",function(){window.$muzik.pause()}),navigator.mediaSession.setActionHandler("previoustrack",function(){window.$muzik.previous()}),navigator.mediaSession.setActionHandler("nexttrack",function(){window.$muzik.next()}));document.addEventListener("keypress",t=>{if(window.$muzik.track_keypress){switch(t.stopImmediatePropagation(),t.preventDefault(),t.key){case"b":window.$muzik.previous();break;case"n":window.$muzik.next();break;case" ":window.$muzik.$pause.classList.contains("hide")?window.$muzik.play():window.$muzik.pause();break;case"s":window.$muzik.togglePlaylist(),window.$muzik.$searchField.focus();break;case"+":window.$muzik.$volumeRange.value=parseInt(window.$muzik.$volumeRange.value)+10,window.$muzik.volume(window.$muzik.$volumeRange.value);break;case"-":window.$muzik.$volumeRange.value=parseInt(window.$muzik.$volumeRange.value)-10,window.$muzik.volume(window.$muzik.$volumeRange.value);break;case"r":window.$muzik.repeat();break;case"v":window.$muzik.showClip();break;case"x":window.$muzik.shuffle();break;case"c":window.$muzik.share();break;case"q":window.$muzik.$playlistWrapper.classList.contains("hide")||window.$muzik.togglePlaylist();break}return!1}},!1);async function _(t){return new Promise(i=>{let e=document.createElement("canvas").getContext("2d");e.imageSmoothingEnabled=!0;let o=new Image;o.src=t,o.crossOrigin="Anonymous",o.onload=()=>{e.drawImage(o,0,0,1,1);let n=e.getImageData(0,0,1,1).data.slice(0,3);i("#"+((1<<24)+(n[0]<<16)+(n[1]<<8)+n[2]).toString(16).slice(1))}})}function h(t,i){var e=!1;t[0]=="#"&&(t=t.slice(1),e=!0);var o=parseInt(t,16),n=(o>>16)+i;n>255?n=255:n<0&&(n=0);var s=(o>>8&255)+i;s>255?s=255:s<0&&(s=0);var a=(o&255)+i;return a>255?a=255:a<0&&(a=0),(e?"#":"")+(a|s<<8|n<<16).toString(16)}function M(t){t=t.substring(1);let i=parseInt(t,16),e=i>>16&255,o=i>>8&255,n=i>>0&255;return .2126*e+.7152*o+.0722*n<40}window.$muzik.changeAmbiance=t=>{_(t).then(i=>{M(i)&&(i=h(i,70));const e=h(i,-30),o=h(i,30);window.$muzik.$colors.innerHTML=`
      :root {
          --muzik-track-color: ${o};
      }

      body {
        background: linear-gradient(${Math.floor(Math.random()*360)}deg, ${o} 0%, ${i} 50%, ${e} 100%);
      }
    `,document.querySelector('meta[name="theme-color"]').content=i})};function f(t){const i=parseInt(t,10);let e=Math.floor(i/3600),o=Math.floor((i-e*3600)/60),n=i-e*3600-o*60;return e<10&&(e="0"+e),o<10&&(o="0"+o),n<10&&(n="0"+n),(e!="00"?e+":":"")+o+":"+n}function y(t,i){t.value=i;const e=t.min,o=t.max,n=t.value;t.style.backgroundSize=(n-e)*100/(o-e)+"% 100%"}window.$muzik.defineTimer=()=>{clearInterval(window.$muzik.timer),window.$muzik.timer=setInterval(()=>{const t=window.$muzik.player[window.$muzik.song.type].getTime();window.$muzik.$timeCurrent.textContent=f(t),y(window.$muzik.$timestamp,t),window.$muzik.player[window.$muzik.song.type].isPlaying||(window.$muzik.$play.classList.remove("hide"),window.$muzik.$pause.classList.add("hide"))},300)};window.$muzik.initMediaSessionHandler=()=>{"mediaSession"in navigator&&(navigator.mediaSession.setActionHandler("play",function(){window.$muzik.play()}),navigator.mediaSession.setActionHandler("pause",function(){window.$muzik.pause()}),navigator.mediaSession.setActionHandler("stop",function(){window.$muzik.pause()}),navigator.mediaSession.setActionHandler("seekto",function(t){window.$muzik.seek(t.seekTime)}),navigator.mediaSession.setActionHandler("previoustrack",function(){window.$muzik.previous()}),navigator.mediaSession.setActionHandler("nexttrack",function(){window.$muzik.next()}))};var S={exports:{}},T={exports:{}};(function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i={rotl:function(e,o){return e<<o|e>>>32-o},rotr:function(e,o){return e<<32-o|e>>>o},endian:function(e){if(e.constructor==Number)return i.rotl(e,8)&16711935|i.rotl(e,24)&4278255360;for(var o=0;o<e.length;o++)e[o]=i.endian(e[o]);return e},randomBytes:function(e){for(var o=[];e>0;e--)o.push(Math.floor(Math.random()*256));return o},bytesToWords:function(e){for(var o=[],n=0,s=0;n<e.length;n++,s+=8)o[s>>>5]|=e[n]<<24-s%32;return o},wordsToBytes:function(e){for(var o=[],n=0;n<e.length*32;n+=8)o.push(e[n>>>5]>>>24-n%32&255);return o},bytesToHex:function(e){for(var o=[],n=0;n<e.length;n++)o.push((e[n]>>>4).toString(16)),o.push((e[n]&15).toString(16));return o.join("")},hexToBytes:function(e){for(var o=[],n=0;n<e.length;n+=2)o.push(parseInt(e.substr(n,2),16));return o},bytesToBase64:function(e){for(var o=[],n=0;n<e.length;n+=3)for(var s=e[n]<<16|e[n+1]<<8|e[n+2],a=0;a<4;a++)n*8+a*6<=e.length*8?o.push(t.charAt(s>>>6*(3-a)&63)):o.push("=");return o.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/ig,"");for(var o=[],n=0,s=0;n<e.length;s=++n%4)s!=0&&o.push((t.indexOf(e.charAt(n-1))&Math.pow(2,-2*s+8)-1)<<s*2|t.indexOf(e.charAt(n))>>>6-s*2);return o}};T.exports=i})();var z={utf8:{stringToBytes:function(t){return z.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(z.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var i=[],e=0;e<t.length;e++)i.push(t.charCodeAt(e)&255);return i},bytesToString:function(t){for(var i=[],e=0;e<t.length;e++)i.push(String.fromCharCode(t[e]));return i.join("")}}},L=z;(function(){var t=T.exports,i=L.utf8,e=L.bin,o=function(s){s.constructor==String?s=i.stringToBytes(s):typeof Buffer!="undefined"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(s)?s=Array.prototype.slice.call(s,0):Array.isArray(s)||(s=s.toString());var a=t.bytesToWords(s),m=s.length*8,c=[],$=1732584193,u=-271733879,d=-1732584194,w=271733878,p=-1009589776;a[m>>5]|=128<<24-m%32,a[(m+64>>>9<<4)+15]=m;for(var g=0;g<a.length;g+=16){for(var I=$,x=u,b=d,E=w,B=p,l=0;l<80;l++){if(l<16)c[l]=a[g+l];else{var v=c[l-3]^c[l-8]^c[l-14]^c[l-16];c[l]=v<<1|v>>>31}var C=($<<5|$>>>27)+p+(c[l]>>>0)+(l<20?(u&d|~u&w)+1518500249:l<40?(u^d^w)+1859775393:l<60?(u&d|u&w|d&w)-1894007588:(u^d^w)-899497514);p=w,w=d,d=u<<30|u>>>2,u=$,$=C}$+=I,u+=x,d+=b,w+=E,p+=B}return[$,u,d,w,p]},n=function(s,a){var m=t.wordsToBytes(o(s));return a&&a.asBytes?m:a&&a.asString?e.bytesToString(m):t.bytesToHex(m)};n._blocksize=16,n._digestsize=20,S.exports=n})();var k=S.exports;window.$muzik.loadMeta=t=>{window.$muzik.play(),window.location.hash=k(window.$muzik.song.code),window.$muzik.$artwork.style.backgroundImage=`url(${t.img})`,window.$muzik.$timeCurrent.textContent=f(0),window.$muzik.$timeTotal.textContent=f(t.duration),window.$muzik.$timestamp.max=Math.round(t.duration);let i=t.artist,e=t.title;typeof window.$muzik.song.artist!="undefined"&&window.$muzik.song.artist!=""&&(i=window.$muzik.song.artist),typeof window.$muzik.song.title!="undefined"&&window.$muzik.song.title!=""&&(e=window.$muzik.song.title),window.$muzik.$artist.textContent=i,window.$muzik.$title.textContent=e,window.$muzik.changeAmbiance(t.img),window.$muzik.notify({artwork:t.img,artist:i,title:e}),"mediaSession"in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:e,artist:i,artwork:[{src:t.img,sizes:t.size,type:"image/png"}]}))};class H{constructor(i,e){r(this,"load",()=>{const i=window.$muzik.$video;this.list[this.currentTrack].type!="youtube"?(i.classList.add("hide"),document.getElementById("youtube-player").classList.add("hide")):this.list[this.currentTrack].type=="youtube"&&(i.classList.remove("hide"),document.getElementById("youtube-player").classList.remove("hide")),window.$muzik.manageControls(),window.$muzik.song!=null&&window.$muzik.player[window.$muzik.song.type].isReady&&window.$muzik.player[window.$muzik.song.type].pause(),window.$muzik.song=this.list[this.currentTrack],window.$muzik.player[window.$muzik.song.type].load();const e=window.$muzik.$playlistList.querySelector("li.current");e!=null&&e.classList.remove("current"),window.$muzik.$playlistList.querySelectorAll("li")[this.currentTrack].classList.add("current")});r(this,"previous",()=>{this.currentTrack--,this.currentTrack<=0&&(window.$muzik.repeat_mode==1?this.currentTrack=this.list.length-1:this.currentTrack=0),this.load()});r(this,"next",(i,e)=>{if(typeof e=="undefined"&&(e=!1),i||window.$muzik.repeat_mode!=2)if(window.$muzik.$shuffle.classList.contains("active")&&!e){let o=JSON.parse(sessionStorage.getItem("songsplayed"));do this.currentTrack=Math.floor(Math.random()*this.list.length);while(o.includes(this.currentTrack));o.push(this.currentTrack),sessionStorage.setItem("songsplayed",JSON.stringify(o))}else this.currentTrack++;this.currentTrack>=this.list.length&&(window.$muzik.repeat_mode==1?this.currentTrack=0:this.currentTrack=this.list.length-1),this.load()});r(this,"playSong",i=>{const e=this.list.findIndex(o=>k(o.code)==i);this.currentTrack=e-1,this.next(!0,!0)});this.list=i,this.currentTrack=0,e!=""&&(this.currentTrack=this.list.findIndex(n=>k(n.code)==e));let o="";this.list.forEach(n=>{const s=k(n.code);o+=`
        <li id="${s}">
          <a href="javascript:window.$muzik.playlist.playSong('${s}');">
            ${n.artist} | ${n.title}
          </a>
        </li>
      `}),window.$muzik.$playlistList.innerHTML=o,window.$muzik.$songs=window.$muzik.$playlistList.querySelectorAll("li"),window.$muzik.song=null,this.load()}}window.$muzik.loadPlaylist=t=>{fetch(t).then(i=>i.json()).then(i=>{let e=[];for(const[o,n]of Object.entries(i.list))n.forEach(s=>{s.type=o,e.push(s)});window.$muzik.playlist=new H(e,window.location.hash.substring(1)),window.$muzik.manageControls()})};window.$muzik.manageControls=()=>{if(window.$muzik.playlist!=null){const t=window.$muzik.playlist.currentTrack,i=window.$muzik.playlist.list.length-1,e=window.$muzik.repeat_mode==1,o=window.$muzik.$shuffle.classList.contains("active");t==0||o?window.$muzik.$previous.classList.add("disabled"):window.$muzik.$previous.classList.remove("disabled"),!o&&i==t&&!e?window.$muzik.$next.classList.add("disabled"):window.$muzik.$next.classList.remove("disabled")}};window.$muzik.next=t=>{clearInterval(window.$muzik.timer),window.$muzik.$next.classList.contains("disabled")||window.$muzik.playlist.next(t)};window.$muzik.notify=t=>{window.Notification&&(Notification.permission==="granted"?new Notification(t.artist,{body:t.title,icon:t.artwork}):Notification.requestPermission().then(i=>{i==="granted"&&new Notification(t.artist,{body:t.title,icon:t.artwork})}).catch(()=>{}))};window.$muzik.pause=()=>{clearInterval(window.$muzik.timer),window.$muzik.$play.classList.remove("hide"),window.$muzik.$pause.classList.add("hide"),window.$muzik.player[window.$muzik.song.type].pause()};window.$muzik.play=()=>{window.$muzik.$play.classList.add("hide"),window.$muzik.$pause.classList.remove("hide"),window.$muzik.defineTimer(),window.$muzik.player[window.$muzik.song.type].play()};window.$muzik.previous=()=>{clearInterval(window.$muzik.timer),window.$muzik.$previous.classList.contains("disabled")||window.$muzik.playlist.previous()};window.$muzik.repeat=()=>{window.$muzik.repeat_mode==0?(window.$muzik.repeat_mode=1,window.$muzik.$repeat.classList.add("active")):window.$muzik.repeat_mode==1?(window.$muzik.repeat_mode=2,window.$muzik.$repeat.classList.remove("active"),window.$muzik.$repeat.classList.add("hide"),window.$muzik.$repeat1.classList.remove("hide")):(window.$muzik.repeat_mode=0,window.$muzik.$repeat1.classList.add("hide"),window.$muzik.$repeat.classList.remove("hide")),window.$muzik.manageControls()};window.$muzik.search=t=>{t=t.toLowerCase(),window.$muzik.$songs.forEach(i=>{i.textContent.toLowerCase().includes(t)?i.classList.remove("hide"):i.classList.add("hide")})};window.$muzik.seek=(t,i)=>{window.$muzik.$timeCurrent.textContent=f(t),y(window.$muzik.$timestamp,t),clearInterval(window.$muzik.timer),i&&(window.$muzik.player[window.$muzik.song.type].seek(t),window.$muzik.defineTimer())};window.$muzik.share=()=>{navigator.clipboard.writeText(window.location).then(()=>{alert("Link copied to clipboard")})};window.$muzik.showClip=()=>{window.$muzik.song.type=="youtube"&&(document.getElementById("youtube-player").classList.toggle("over"),window.$muzik.$video.classList.toggle("active"))};window.$muzik.showVolume=()=>{window.$muzik.$volumeWrapper.classList.toggle("hide"),window.$muzik.$volume.classList.toggle("active")};window.$muzik.shuffle=()=>{window.$muzik.$shuffle.classList.toggle("active"),window.$muzik.$shuffle.classList.contains("active")&&sessionStorage.setItem("songsplayed",JSON.stringify([])),window.$muzik.manageControls()};window.$muzik.toggleKeyTrack=()=>{window.$muzik.track_keypress=!window.$muzik.track_keypress};window.$muzik.togglePlaylist=()=>{window.$muzik.$playlistWrapper.classList.toggle("hide"),window.$muzik.$songs.forEach(t=>t.classList.remove("hide")),window.$muzik.$searchField.value="",document.getElementById(window.location.hash.substring(1)).scrollIntoView()};window.$muzik.volume=t=>{t==0?(window.$muzik.$muted.classList.remove("hide"),window.$muzik.$volume.classList.add("hide")):(window.$muzik.$muted.classList.add("hide"),window.$muzik.$volume.classList.remove("hide")),y(window.$muzik.$volumeRange,t),window.$muzik.player[window.$muzik.song.type].setVolume(t)};class F{constructor(){r(this,"onPlayerReady",i=>{i.target.playVideo()});r(this,"onPlayerStateChange",i=>{YT.PlayerState.PLAYING==i.data?(window.$muzik.loadMeta({img:`//images.weserv.nl/?url=https://i.ytimg.com/vi/${window.$muzik.song.code}/hqdefault.jpg&w=300`,size:"300x300",duration:this.player.getDuration(),artist:this.player.getVideoData().artist,title:this.player.getVideoData().title}),this.isPlaying=!0,this.setVolume(window.$muzik.$volumeRange.value)):YT.PlayerState.ENDED==i.data?window.$muzik.next(!1):YT.PlayerState.PAUSED==i.data&&(this.isPlaying=!1)});r(this,"load",()=>{this.isReady?this.player.loadVideoById(window.$muzik.song.code):this.init()});r(this,"play",()=>{this.player.playVideo()});r(this,"pause",()=>{this.player.pauseVideo(),this.isPlaying=!1});r(this,"seek",i=>{this.player.seekTo(i)});r(this,"getTime",()=>this.player.getCurrentTime());r(this,"setVolume",i=>{this.player.setVolume(i)});r(this,"init",()=>{window.onYouTubeIframeAPIReady=()=>{this.isReady=!0,this.player=new YT.Player("youtube-player",{events:{onReady:this.onPlayerReady,onStateChange:this.onPlayerStateChange},playerVars:{autoplay:1,modestbranding:1,rel:0,origin:window.location.origin,width:320},videoId:window.$muzik.song.code,host:"https://www.youtube.com"})};const i=document.createElement("script"),e=document.getElementsByTagName("script")[0];i.src="//www.youtube.com/iframe_api",e.parentNode.insertBefore(i,e)});this.isReady=!1,this.isPlaying=!1,this.player=null}}class N{constructor(){r(this,"loaded",()=>{this.player.getCurrentSound(i=>{let e=null;i.artwork_url!==null?e=i.artwork_url:e=i.user.avatar_url,window.$muzik.loadMeta({img:e.replace("-large.jpg","-t300x300.jpg"),size:"300x300",duration:Math.round(i.full_duration/1e3),artist:i.user.full_name,title:i.title}),this.setVolume(window.$muzik.$volumeRange.value),this.player.seekTo(0)})});r(this,"init",()=>{this.isReady=!0,document.getElementById("soundcloud-player").setAttribute("src",`https://w.soundcloud.com/player/?url=https%3A//soundcloud.com${window.$muzik.song.code}&amp;auto_play=true`),this.player=SC.Widget("soundcloud-player"),this.player.bind(SC.Widget.Events.READY,()=>{this.player.bind(SC.Widget.Events.PLAY_PROGRESS,()=>{this.player.getPosition(i=>{this.position=i})}),this.player.bind(SC.Widget.Events.FINISH,()=>{window.$muzik.next(!1)}),this.player.bind(SC.Widget.Events.PAUSE,()=>{this.isPlaying=!1}),this.player.bind(SC.Widget.Events.PLAY,()=>{this.isPlaying=!0,this.position>=0&&this.player.seekTo(this.position)}),this.loaded()})});r(this,"load",()=>{this.position=0,this.isReady?this.player.load(window.$muzik.song.code,{auto_play:"true",callback:()=>{this.loaded()}}):this.init()});r(this,"play",()=>{this.player.play(),this.isPlaying=!0});r(this,"pause",()=>{this.player.pause(),this.isPlaying=!1});r(this,"seek",i=>{this.isPlaying=!0,this.position=i*1e3,this.player.isPaused(e=>{e==!0?this.player.play():this.player.seekTo(i*1e3)})});r(this,"getTime",()=>Math.round(this.position/1e3));r(this,"setVolume",i=>{this.player.setVolume(i)});this.isReady=!1,this.isPlaying=!1,this.player=null,this.position=0}}const V=t=>{document.readyState!="loading"?t():document.addEventListener("DOMContentLoaded",t)};V(()=>{window.$muzik.player={youtube:new F,soundcloud:new N},window.$muzik.initMediaSessionHandler(),y(window.$muzik.$volumeRange,50),window.$muzik.loadPlaylist("https://raw.githubusercontent.com/gouz/muzik/main/songs/list.json"),window.$muzik.shuffle()});
