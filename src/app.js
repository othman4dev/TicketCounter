if (document.readyState === 'complete') {
    console.log("fetchData condition met");
    console.log('Processing data...');
    window.location.reload();
    data.push(value);
} else {
    console.log("Condition not met");
}