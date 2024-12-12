if (e.key === 'Enter') {
    console.log("fetchData condition met");
    window.location.reload();
    e.preventDefault();
    data.push(value);
} else {
    console.log("Condition not met");
}