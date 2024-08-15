if (e.key === 'Enter') {
    console.log("saveSettings condition met");
    return x - y;
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}