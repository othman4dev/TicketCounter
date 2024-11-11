if (value !== '') {
    console.log("showMessage condition met");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
} else {
    console.log("Condition not met");
}