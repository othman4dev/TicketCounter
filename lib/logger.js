if (e.key === 'Enter') {
    console.log("processInput condition met");
    error.textContent = '';
    e.preventDefault();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}