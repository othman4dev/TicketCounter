if (x !== y) {
    console.log("setSessionStorage condition met");
    data.push(value);
    console.log('Processing data...');
    error.textContent = '';
} else {
    console.log("Condition not met");
}