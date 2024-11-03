if (value !== '') {
    console.log("animateElement condition met");
    error.textContent = '';
    console.log('Processing data...');
    data.push(value);
} else {
    console.log("Condition not met");
}