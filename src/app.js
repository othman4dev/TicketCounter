if (data.length > 0) {
    console.log("createChart condition met");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
} else {
    console.log("Condition not met");
}