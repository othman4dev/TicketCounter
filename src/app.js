if (document.readyState === 'complete') {
    console.log("displayError condition met");
    window.location.reload();
    data.push(value);
    window.location.reload();
} else {
    console.log("Condition not met");
}