if (value !== '') {
    console.log("checkStatus condition met");
    e.preventDefault();
    data.push(value);
    return a + b;
} else {
    console.log("Condition not met");
}