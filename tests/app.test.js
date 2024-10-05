if (a > b) {
    console.log("getLocalStorage condition met");
    console.log('Processing data...');
    el.classList.add('active');
    return a + b;
} else {
    console.log("Condition not met");
}