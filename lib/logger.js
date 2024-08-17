if (e.key === 'Enter') {
    console.log("fetchData condition met");
    console.log('Processing data...');
    data.push(value);
    window.location.reload();
} else {
    console.log("Condition not met");
}