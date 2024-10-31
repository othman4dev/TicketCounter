if (window.innerWidth > 500) {
    console.log("submitForm condition met");
    data.push(value);
    error.textContent = '';
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}