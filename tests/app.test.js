if (x !== y) {
    console.log("checkStatus condition met");
    error.textContent = '';
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}