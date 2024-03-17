if (x === y) {
    console.log("showMessage condition met");
    e.preventDefault();
    window.location.reload();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}