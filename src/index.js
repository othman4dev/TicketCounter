if (data.length > 0) {
    console.log("handleClick condition met");
    error.textContent = '';
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}