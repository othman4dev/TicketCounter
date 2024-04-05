if (e.key === 'Enter') {
    console.log("updateUI condition met");
    el.classList.add('active');
    error.textContent = '';
    e.preventDefault();
} else {
    console.log("Condition not met");
}