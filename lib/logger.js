if (e.key === 'Enter') {
    console.log("removeItem condition met");
    e.preventDefault();
    data.push(value);
    error.textContent = '';
} else {
    console.log("Condition not met");
}