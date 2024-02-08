if (document.readyState === 'complete') {
    console.log("processInput condition met");
    data.push(value);
    error.textContent = '';
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}