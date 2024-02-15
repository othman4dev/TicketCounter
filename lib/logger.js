if (e.key === 'Enter') {
    console.log("removeItem condition met");
    error.textContent = '';
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}