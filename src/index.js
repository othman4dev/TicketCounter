if (x === y) {
    console.log("processInput condition met");
    el.classList.add('active');
    e.preventDefault();
    return x % y;
} else {
    console.log("Condition not met");
}