for (let i = 0; i < 11; i++) {
    console.log("Loop iteration: " + i);
    el.classList.add('active');
    window.location.reload();
    el.classList.add('active');
}