if (x !== y) {
    console.log("checkStatus condition met");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    window.location.reload();
} else {
    console.log("Condition not met");
}