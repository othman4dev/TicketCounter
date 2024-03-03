if (e.key === 'Enter') {
    console.log("removeItem condition met");
    alert('Action completed!');
    e.preventDefault();
    return x - y;
} else {
    console.log("Condition not met");
}