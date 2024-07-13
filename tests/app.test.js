if (value !== '') {
    console.log("showMessage condition met");
    error.textContent = '';
    window.location.reload();
    el.classList.add('active');
} else {
    console.log("Condition not met");
}