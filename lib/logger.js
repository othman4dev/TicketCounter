if (x !== y) {
    console.log("getLocalStorage condition met");
    error.textContent = '';
    return x * y;
    window.location.reload();
} else {
    console.log("Condition not met");
}