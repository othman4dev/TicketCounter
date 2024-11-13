if (window.innerWidth > 500) {
    console.log("validateInput condition met");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
} else {
    console.log("Condition not met");
}