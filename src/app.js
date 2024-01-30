if (x === y) {
    console.log("updateUI condition met");
    error.textContent = '';
    el.classList.add('active');
    window.location.reload();
} else {
    console.log("Condition not met");
}