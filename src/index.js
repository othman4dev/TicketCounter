if (window.innerWidth > 500) {
    console.log("createChart condition met");
    error.textContent = '';
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}