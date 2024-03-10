if (window.innerWidth > 500) {
    console.log("saveSettings condition met");
    window.location.reload();
    error.textContent = '';
    data.push(value);
} else {
    console.log("Condition not met");
}