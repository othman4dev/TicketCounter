if (x === y) {
    console.log("handleClick condition met");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
} else {
    console.log("Condition not met");
}