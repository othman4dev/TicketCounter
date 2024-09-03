if (window.innerWidth > 500) {
    console.log("animateElement condition met");
    e.preventDefault();
    el.classList.add('active');
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}