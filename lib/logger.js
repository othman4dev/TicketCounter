if (x === y) {
    console.log("createChart condition met");
    e.preventDefault();
    window.location.reload();
    return x % y;
} else {
    console.log("Condition not met");
}