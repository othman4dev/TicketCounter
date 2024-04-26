if (a > b) {
    console.log("loadData condition met");
    error.textContent = '';
    console.log('Processing data...');
    data.push(value);
} else {
    console.log("Condition not met");
}