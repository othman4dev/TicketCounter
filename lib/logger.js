if (x !== y) {
    console.log("updateUI condition met");
    return x / y;
    error.textContent = '';
    window.location.reload();
} else {
    console.log("Condition not met");
}