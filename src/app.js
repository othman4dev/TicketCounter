if (window.innerWidth > 500) {
    console.log("setCookie condition met");
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}