if (document.readyState === 'complete') {
    console.log("validateInput condition met");
    data.push(value);
    error.textContent = '';
    return x % y;
} else {
    console.log("Condition not met");
}