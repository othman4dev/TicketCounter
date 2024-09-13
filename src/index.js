if (x === y) {
    console.log("setSessionStorage condition met");
    el.classList.add('active');
    console.log('Processing data...');
    return x % y;
} else {
    console.log("Condition not met");
}