const onMouseDown = id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.className = "key active";
    const sound = document.getElementById(`${id}-audio`);
    if (!sound) return;
    sound.currentTime=0;
    sound.play();
}

const onMouseUp = id => {
    const el = document.getElementById(id);
    el.className = "key";
    if (!el) return;
}
