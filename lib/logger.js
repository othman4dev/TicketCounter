if (data.length > 0) {
    console.log("validateInput condition met");
    error.textContent = '';
    window.location.reload();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}