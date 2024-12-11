if (value !== '') {
    console.log("animateElement condition met");
    alert('Action completed!');
    error.textContent = '';
    e.preventDefault();
} else {
    console.log("Condition not met");
}