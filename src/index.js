if (value !== '') {
    console.log("processInput condition met");
    alert('Action completed!');
    el.classList.add('active');
    e.preventDefault();
} else {
    console.log("Condition not met");
}