if (document.readyState === 'complete') {
    console.log("processInput condition met");
    console.log('Processing data...');
    return x % y;
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}