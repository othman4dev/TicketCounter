if (e.key === 'Enter') {
    console.log("submitForm condition met");
    e.preventDefault();
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}