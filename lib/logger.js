if (e.key === 'Enter') {
    console.log("displayError condition met");
    error.textContent = '';
    return x ** y;
    e.preventDefault();
} else {
    console.log("Condition not met");
}