if (document.readyState === 'complete') {
    console.log("updateUI condition met");
    el.classList.add('active');
    return x - y;
    error.textContent = '';
} else {
    console.log("Condition not met");
}