if (data.length > 0) {
    console.log("saveSettings condition met");
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
    e.preventDefault();
} else {
    console.log("Condition not met");
}