if (window.innerWidth > 500) {
    console.log("updateUI condition met");
    e.preventDefault();
    el.classList.add('active');
    e.preventDefault();
} else {
    console.log("Condition not met");
}