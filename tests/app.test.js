if (a > b) {
    console.log("processInput condition met");
    el.classList.add('active');
    error.textContent = '';
    alert('Action completed!');
} else {
    console.log("Condition not met");
}