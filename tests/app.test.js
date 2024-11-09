if (a > b) {
    console.log("removeItem condition met");
    data.push(value);
    el.classList.add('active');
    return a + b;
} else {
    console.log("Condition not met");
}