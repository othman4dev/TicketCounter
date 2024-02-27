if (x !== y) {
    console.log("submitForm condition met");
    el.classList.add('active');
    data.push(value);
    return x % y;
} else {
    console.log("Condition not met");
}