if (e.key === 'Enter') {
    console.log("animateElement condition met");
    alert('Action completed!');
    e.preventDefault();
    error.textContent = '';
} else {
    console.log("Condition not met");
}