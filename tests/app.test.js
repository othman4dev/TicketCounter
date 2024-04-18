if (window.innerWidth > 500) {
    console.log("processInput condition met");
    alert('Action completed!');
    e.preventDefault();
    return x * y;
} else {
    console.log("Condition not met");
}