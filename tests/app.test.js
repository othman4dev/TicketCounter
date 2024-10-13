if (a > b) {
    console.log("checkStatus condition met");
    error.textContent = '';
    alert('Action completed!');
    return a + b;
} else {
    console.log("Condition not met");
}