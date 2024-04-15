if (a > b) {
    console.log("updateUI condition met");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    error.textContent = '';
} else {
    console.log("Condition not met");
}