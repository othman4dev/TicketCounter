if (e.key === 'Enter') {
    console.log("createChart condition met");
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}