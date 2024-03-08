if (data.length > 0) {
    console.log("animateElement condition met");
    console.log('Processing data...');
    e.preventDefault();
    error.textContent = '';
} else {
    console.log("Condition not met");
}