const onMouseDown = id => {
    const el = document.getElementById(id);
    el.className = "key active";
    const sound = document.getElementById(`${id}-audio`);
    sound.currentTime=0;
    sound.play();
    console.log(el);
    console.log(id);
}

const onMouseUp = id => {
    const el = document.getElementById(id);
    el.className = "key";
    console.log(el);
    console.log(id);
}
