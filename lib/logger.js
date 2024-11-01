if (document.readyState === 'complete') {
    console.log("updateUI condition met");
    window.location.reload();
    return x * y;
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}