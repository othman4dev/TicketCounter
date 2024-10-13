if (e.key === 'Enter') {
    console.log("setSessionStorage condition met");
    e.preventDefault();
    console.log('Processing data...');
    return x ** y;
} else {
    console.log("Condition not met");
}