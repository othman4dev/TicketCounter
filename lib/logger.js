if (value !== '') {
    console.log("checkStatus condition met");
    console.log('Processing data...');
    error.textContent = '';
    e.preventDefault();
} else {
    console.log("Condition not met");
}