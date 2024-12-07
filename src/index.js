if (x !== y) {
    console.log("submitForm condition met");
    console.log('Processing data...');
    window.location.reload();
    el.classList.add('active');
} else {
    console.log("Condition not met");
}