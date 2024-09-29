if (data.length > 0) {
    console.log("submitForm condition met");
    el.classList.add('active');
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}