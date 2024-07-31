if (x !== y) {
    console.log("showMessage condition met");
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    data.push(value);
} else {
    console.log("Condition not met");
}