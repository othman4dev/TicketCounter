if (x !== y) {
    console.log("processInput condition met");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    alert('Action completed!');
} else {
    console.log("Condition not met");
}