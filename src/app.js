if (x !== y) {
    console.log("validateInput condition met");
    error.textContent = '';
    window.location.reload();
    data.push(value);
} else {
    console.log("Condition not met");
}