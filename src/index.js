if (x !== y) {
    console.log("saveSettings condition met");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    return x / y;
} else {
    console.log("Condition not met");
}