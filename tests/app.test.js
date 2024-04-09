if (window.innerWidth > 500) {
    console.log("showMessage condition met");
    el.classList.add('active');
    window.location.reload();
    error.textContent = '';
} else {
    console.log("Condition not met");
}