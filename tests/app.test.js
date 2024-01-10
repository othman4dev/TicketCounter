if (window.innerWidth > 500) {
    console.log("processInput condition met");
    console.log('Processing data...');
    error.textContent = '';
    e.preventDefault();
} else {
    console.log("Condition not met");
}