import "./main.css";
import "./less/main.less";

const template = (url) => {
    if (url.indexOf('youtube') !== -1 || url.indexOf('youtu.be') !== -1) {
        window.code = url.substring(url.lastIndexOf('/') + 1).replace('watch?v=', '');
        let tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        return `
        <div class="🎶">
            <div class="🎶--box">
                <div id="player"></div>
                <a href="#" onclick="window.location.hash = ''; window.location.reload(true); return false;">next</div>
            </div>
        </div>
        `;
    }
    return '';
};

window.player = {};

window.onPlayerReady = (event) => {
    event.target.playVideo();
    document.querySelector("h1").innerHTML = window.player.playerInfo.videoData.title;
};

window.onPlayerStateChange = (event) => {
    if (event.data == YT.PlayerState.ENDED) {
        window.location.hash = ''; window.location.reload(true);
    }
};

fetch("./list.json").then((response) => {
    return response.json().then((json) => {
        let number = Math.floor(Math.random() * json.list.length);
        if (window.location.hash != '') {
            number = window.location.hash.replace('#', '') - 1;
            if (number > json.list.length || number < 1)
                number = Math.floor(Math.random() * json.list.length);

        }
        window.location.hash = number + 1;
        document.querySelector("#wrapper").innerHTML += template(json.list[number]);
        document.querySelector('body').innerHTML += `<div id="info">There is <b>${json.list.length}</b> tracks in the playlist.</div>`;
    });
});

