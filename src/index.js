if (window.innerWidth > 500) {
    console.log("showMessage condition met");
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}