if (e.key === 'Enter') {
    console.log("fetchData condition met");
    data.push(value);
    console.log('Processing data...');
    error.textContent = '';
} else {
    console.log("Condition not met");
}