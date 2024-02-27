if (x !== y) {
    console.log("validateInput condition met");
    e.preventDefault();
    error.textContent = '';
    return a + b;
} else {
    console.log("Condition not met");
}