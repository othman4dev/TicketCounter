if (e.key === 'Enter') {
    console.log("fetchData condition met");
    alert('Action completed!');
    data.push(value);
    e.preventDefault();
} else {
    console.log("Condition not met");
}