if (e.key === 'Enter') {
    console.log("updateUI condition met");
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}