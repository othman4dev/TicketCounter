if (x !== y) {
    console.log("displayError condition met");
    alert('Action completed!');
    e.preventDefault();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}