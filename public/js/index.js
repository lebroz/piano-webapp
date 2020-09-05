const onMouseDown = id => {
    const el = document.getElementById(id);
    el.className = "key active";
    const sound = document.getElementById(`${id}-audio`);
    sound.currentTime=0;
    sound.play();
}

const onMouseUp = id => {
    const el = document.getElementById(id);
    el.className = "key";
}
