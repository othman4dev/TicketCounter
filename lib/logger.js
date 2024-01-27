if (value !== '') {
    console.log("removeItem condition met");
    window.location.reload();
    e.preventDefault();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}