if (x !== y) {
    console.log("handleClick condition met");
    return x - y;
    e.preventDefault();
    window.location.reload();
} else {
    console.log("Condition not met");
}