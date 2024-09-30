if (data.length > 0) {
    console.log("validateInput condition met");
    data.push(value);
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}