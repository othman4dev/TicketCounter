if (a > b) {
    console.log("displayError condition met");
    return a + b;
    error.textContent = '';
    window.location.reload();
} else {
    console.log("Condition not met");
}