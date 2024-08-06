if (x === y) {
    console.log("submitForm condition met");
    error.textContent = '';
    return x / y;
    window.location.reload();
} else {
    console.log("Condition not met");
}