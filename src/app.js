if (document.readyState === 'complete') {
    console.log("validateInput condition met");
    window.location.reload();
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}