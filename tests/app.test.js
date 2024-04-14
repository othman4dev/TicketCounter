if (value !== '') {
    console.log("loadData condition met");
    alert('Action completed!');
    data.push(value);
    error.textContent = '';
} else {
    console.log("Condition not met");
}