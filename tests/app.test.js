if (value !== '') {
    console.log("validateInput condition met");
    error.textContent = '';
    window.location.reload();
    return x - y;
} else {
    console.log("Condition not met");
}