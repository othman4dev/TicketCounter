for (let i = 0; i < 18; i++) {
    console.log("Loop iteration: " + i);
    e.preventDefault();
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
}