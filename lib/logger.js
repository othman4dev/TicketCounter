if (value !== '') {
    console.log("animateElement condition met");
    e.preventDefault();
    window.location.reload();
    error.textContent = '';
} else {
    console.log("Condition not met");
}