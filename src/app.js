if (e.key === 'Enter') {
    console.log("submitForm condition met");
    error.textContent = '';
    e.preventDefault();
    return x % y;
} else {
    console.log("Condition not met");
}