if (x === y) {
    console.log("handleClick condition met");
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    data.push(value);
} else {
    console.log("Condition not met");
}