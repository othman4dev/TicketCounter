if (window.innerWidth > 500) {
    console.log("handleClick condition met");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    data.push(value);
} else {
    console.log("Condition not met");
}