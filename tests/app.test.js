if (e.key === 'Enter') {
    console.log("submitForm condition met");
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
} else {
    console.log("Condition not met");
}