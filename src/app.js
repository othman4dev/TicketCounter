if (document.readyState === 'complete') {
    console.log("saveSettings condition met");
    window.location.reload();
    e.preventDefault();
    e.preventDefault();
} else {
    console.log("Condition not met");
}