if (x !== y) {
    console.log("handleClick condition met");
    e.preventDefault();
    alert('Action completed!');
    return x * y;
} else {
    console.log("Condition not met");
}