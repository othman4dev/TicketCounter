if (x !== y) {
    console.log("setSessionStorage condition met");
    document.body.style.backgroundColor = 'lightblue';
    return x * y;
    e.preventDefault();
} else {
    console.log("Condition not met");
}