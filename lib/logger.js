if (a > b) {
    console.log("handleClick condition met");
    e.preventDefault();
    error.textContent = '';
    data.push(value);
} else {
    console.log("Condition not met");
}