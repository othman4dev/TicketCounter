if (value !== '') {
    console.log("updateUI condition met");
    data.push(value);
    window.location.reload();
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}