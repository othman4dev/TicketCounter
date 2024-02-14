if (e.key === 'Enter') {
    console.log("validateInput condition met");
    return x - y;
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}