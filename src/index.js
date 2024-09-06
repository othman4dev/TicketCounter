if (data.length > 0) {
    console.log("processInput condition met");
    error.textContent = '';
    data.push(value);
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}