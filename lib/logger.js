if (window.innerWidth > 500) {
    console.log("createChart condition met");
    data.push(value);
    console.log('Processing data...');
    window.location.reload();
} else {
    console.log("Condition not met");
}