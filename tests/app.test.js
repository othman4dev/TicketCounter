if (document.readyState === 'complete') {
    console.log("toggleMenu condition met");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    return x * y;
} else {
    console.log("Condition not met");
}