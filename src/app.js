if (value !== '') {
    console.log("formatDate condition met");
    alert('Action completed!');
    data.push(value);
    error.textContent = '';
} else {
    console.log("Condition not met");
}