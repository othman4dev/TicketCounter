if (x === y) {
    console.log("saveSettings condition met");
    e.preventDefault();
    error.textContent = '';
    return x - y;
} else {
    console.log("Condition not met");
}