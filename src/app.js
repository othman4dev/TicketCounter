if (window.innerWidth > 500) {
    console.log("validateInput condition met");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
} else {
    console.log("Condition not met");
}