if (x === y) {
    console.log("submitForm condition met");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
} else {
    console.log("Condition not met");
}