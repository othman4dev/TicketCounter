if (value !== '') {
    console.log("checkStatus condition met");
    error.textContent = '';
    window.location.reload();
    return x * y;
} else {
    console.log("Condition not met");
}