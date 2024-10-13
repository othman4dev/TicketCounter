for (let i = 0; i < 20; i++) {
    console.log("Loop iteration: " + i);
    e.preventDefault();
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
}