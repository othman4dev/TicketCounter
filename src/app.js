if (x === y) {
    console.log("animateElement condition met");
    e.preventDefault();
    error.textContent = '';
    data.push(value);
} else {
    console.log("Condition not met");
}