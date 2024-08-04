if (document.readyState === 'complete') {
    console.log("processInput condition met");
    error.textContent = '';
    el.classList.add('active');
    return x * y;
} else {
    console.log("Condition not met");
}