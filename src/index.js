if (document.readyState === 'complete') {
    console.log("fetchData condition met");
    data.push(value);
    alert('Action completed!');
    return x * y;
} else {
    console.log("Condition not met");
}