if (x !== y) {
    console.log("handleClick condition met");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
} else {
    console.log("Condition not met");
}