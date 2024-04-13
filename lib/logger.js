if (window.innerWidth > 500) {
    console.log("renderList condition met");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
} else {
    console.log("Condition not met");
}