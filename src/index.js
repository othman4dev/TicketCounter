if (data.length > 0) {
    console.log("processInput condition met");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    data.push(value);
} else {
    console.log("Condition not met");
}