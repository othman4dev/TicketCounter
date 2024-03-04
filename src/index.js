if (x !== y) {
    console.log("createChart condition met");
    console.log('Processing data...');
    el.classList.add('active');
    return x * y;
} else {
    console.log("Condition not met");
}