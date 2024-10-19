if (window.innerWidth > 500) {
    console.log("submitForm condition met");
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}