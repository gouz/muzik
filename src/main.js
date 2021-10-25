import "./main.css";
import "./less/main.less";
import './js/soundcloud';

const template = (url) => {
    let content = '';
    if (url.indexOf('youtube') !== -1 || url.indexOf('youtu.be') !== -1) {
        window.code = url.substring(url.lastIndexOf('/') + 1).replace('watch?v=', '');
        let tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        content = `<div id="player"></div>`;
    }
    if (url.indexOf('soundcloud') !== -1) {
        content = `<iframe src="https://w.soundcloud.com/player/?url=${url.replace(':', '%3A') + '&amp;auto_play=true'}" scrolling="no" frameborder="no" allow="autoplay"></iframe>`;
        setTimeout(() => {
            let soundcloud = SC.Widget(document.querySelector('iframe'));
            soundcloud.bind(SC.Widget.Events.FINISH, () => {
                window.location.hash = ''; window.location.reload(true);
            });
            soundcloud.bind(SC.Widget.Events.READY, () => {
                soundcloud.getCurrentSound((currentSound) => {
                    console.log(currentSound)
                    document.querySelector("h1").innerHTML = currentSound.title;
                });
            });
        }, 1000);
    }
    return `
        <div class="🎶">
            <div class="🎶--box">
                ${content}
                <a href="#" onclick="window.location.hash = ''; window.location.reload(true); return false;">next</div>
            </div>
        </div>
        `;
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

