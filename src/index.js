if (e.key === 'Enter') {
    console.log("updateUI condition met");
    alert('Action completed!');
    e.preventDefault();
    return a + b;
} else {
    console.log("Condition not met");
}