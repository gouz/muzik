import "./main.css";
import "./less/main.less";
import LazyLoad from "vanilla-lazyload";

const template = (url) => {
    if (url.indexOf('youtube') !== -1 || url.indexOf('youtu.be') !== -1) {
        const code = url.substring(url.lastIndexOf('/') + 1).replace('watch?v=', '');
        return `
        <div class="🎶">
            <div class="🎶--box">
                <iframe 
                    class="lazy" 
                    data-src="https://www.youtube.com/embed/${code}" 
                    allowFullScreen="allowFullScreen" 
                    width="640" height="360"
                    allowtransparency="true" 
                    frameborder="0"
                    allow="autoplay"
                >
                </iframe>
                <div class="lazy" data-lazy-function="loadMoreSongs">...</div>
            </div>
        </div>
        `;
    }
    return '';
}

const $wrapper = document.querySelector("#wrapper");

const executeLazyFunction = (element) => {
    let lazyFunctionName = element.getAttribute("data-lazy-function");
    let lazyFunction = window.lazyFunctions[lazyFunctionName];
    if (!lazyFunction) return;
    lazyFunction(element);
}
const lazyLoadOptions = {
    unobserve_entered: true, // <- Avoid executing the function multiple times
    callback_enter: executeLazyFunction // Assigning the function defined above
};
const pageLazyLoad = new LazyLoad(lazyLoadOptions);

window.songList = [];

const loadSongs = () => {
    if (window.songList.length !== 0) {
        let url = window.songList.shift();
        $wrapper.innerHTML += template(url);
    }
    pageLazyLoad.update();
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

fetch("./list.json").then((response) => {
    return response.json().then((json) => {
        window.songList = shuffle(json.list);
        loadSongs();
    });
});

window.lazyFunctions = {
    loadMoreSongs: function (element) {
        element.parentNode.removeChild(element);
        loadSongs();
    }
}