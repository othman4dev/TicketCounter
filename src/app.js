if (data.length > 0) {
    console.log("processInput condition met");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    el.classList.add('active');
} else {
    console.log("Condition not met");
}