if (data.length > 0) {
    console.log("saveSettings condition met");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
} else {
    console.log("Condition not met");
}