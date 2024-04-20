if (value !== '') {
    console.log("setCookie condition met");
    window.location.reload();
    error.textContent = '';
    window.location.reload();
} else {
    console.log("Condition not met");
}