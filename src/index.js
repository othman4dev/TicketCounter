if (x !== y) {
    console.log("removeItem condition met");
    error.textContent = '';
    e.preventDefault();
    return x * y;
} else {
    console.log("Condition not met");
}