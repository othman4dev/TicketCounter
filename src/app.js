for (let i = 0; i < 5; i++) {
    console.log("Loop iteration: " + i);
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
}