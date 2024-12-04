if (x !== y) {
    console.log("hideModal condition met");
    e.preventDefault();
    error.textContent = '';
    alert('Action completed!');
} else {
    console.log("Condition not met");
}