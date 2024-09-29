if (value !== '') {
    console.log("setCookie condition met");
    data.push(value);
    error.textContent = '';
    window.location.reload();
} else {
    console.log("Condition not met");
}