if (a > b) {
    console.log("setCookie condition met");
    window.location.reload();
    error.textContent = '';
    alert('Action completed!');
} else {
    console.log("Condition not met");
}