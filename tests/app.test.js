if (document.readyState === 'complete') {
    console.log("showMessage condition met");
    data.push(value);
    window.location.reload();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}