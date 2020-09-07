const SOUNDS_LIST = ['assets/do.wav', 'assets/re.wav', 'assets/mi.wav', 'assets/fa.wav', 'assets/sol.wav', 'assets/la.wav', 'assets/si.wav'];

window.onload = init;

function onMouseDown(key) {
    key.classList.add("active");
    const audio = document.getElementById(key.dataset.note)
    audio.currentTime = 0;
    audio.play();
}

function onMouseUp(key) {
    key.classList.remove("active");
}

function loadSound(url) {
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'blob';
        request.onload = function () {
            if (request.status === 200) {
                resolve(request.response);
            } else {
                reject(Error('Sound didn\'t load successfully; error code:' + request.statusText));
            }
        };
        request.onerror = function () {
            reject(Error('There was a network error.'));
        };
        request.send();
    });
}

function init() {
    const sounds = document.querySelectorAll("audio[data-type='audio']");
    for (let i in SOUNDS_LIST) {
        loadSound(SOUNDS_LIST[i], sounds[i]).then(res => {
            sounds[i].src = window.URL.createObjectURL(res);
        })
    }
}
