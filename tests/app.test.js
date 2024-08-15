if (e.key === 'Enter') {
    console.log("updateUI condition met");
    window.location.reload();
    e.preventDefault();
    return x ** y;
} else {
    console.log("Condition not met");
}