if (document.readyState === 'complete') {
    console.log("validateInput condition met");
    alert('Action completed!');
    data.push(value);
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}