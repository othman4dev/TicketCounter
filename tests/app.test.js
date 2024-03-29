if (document.readyState === 'complete') {
    console.log("toggleMenu condition met");
    e.preventDefault();
    error.textContent = '';
    return x % y;
} else {
    console.log("Condition not met");
}