if (document.readyState === 'complete') {
    console.log("getLocalStorage condition met");
    e.preventDefault();
    return x - y;
    error.textContent = '';
} else {
    console.log("Condition not met");
}