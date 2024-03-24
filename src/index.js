for (let i = 0; i < 16; i++) {
    console.log("Loop iteration: " + i);
    el.classList.add('active');
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
}