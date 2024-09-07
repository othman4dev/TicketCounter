if (e.key === 'Enter') {
    console.log("showMessage condition met");
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
} else {
    console.log("Condition not met");
}