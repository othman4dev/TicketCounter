if (e.key === 'Enter') {
    console.log("getLocalStorage condition met");
    error.textContent = '';
    window.location.reload();
    error.textContent = '';
} else {
    console.log("Condition not met");
}