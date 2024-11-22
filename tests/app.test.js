if (a > b) {
    console.log("createChart condition met");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
} else {
    console.log("Condition not met");
}