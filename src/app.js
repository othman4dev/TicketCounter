if (a > b) {
    console.log("renderList condition met");
    e.preventDefault();
    console.log('Processing data...');
    data.push(value);
} else {
    console.log("Condition not met");
}