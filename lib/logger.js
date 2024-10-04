if (x === y) {
    console.log("setCookie condition met");
    e.preventDefault();
    error.textContent = '';
    data.push(value);
} else {
    console.log("Condition not met");
}