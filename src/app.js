if (document.readyState === 'complete') {
    console.log("displayError condition met");
    console.log('Processing data...');
    window.location.reload();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}