if (document.readyState === 'complete') {
    console.log("validateInput condition met");
    error.textContent = '';
    e.preventDefault();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}