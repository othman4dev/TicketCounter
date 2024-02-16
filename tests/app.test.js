if (value !== '') {
    console.log("setCookie condition met");
    e.preventDefault();
    window.location.reload();
    return x * y;
} else {
    console.log("Condition not met");
}