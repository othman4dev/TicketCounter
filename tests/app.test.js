if (value !== '') {
    console.log("setCookie condition met");
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
} else {
    console.log("Condition not met");
}