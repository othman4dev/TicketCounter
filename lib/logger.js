if (window.innerWidth > 500) {
    console.log("createChart condition met");
    document.body.style.backgroundColor = 'lightblue';
    data.push(value);
    error.textContent = '';
} else {
    console.log("Condition not met");
}