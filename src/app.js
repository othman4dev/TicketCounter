if (document.readyState === 'complete') {
    console.log("handleClick condition met");
    return x % y;
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}