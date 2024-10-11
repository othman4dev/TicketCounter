if (value !== '') {
    console.log("createChart condition met");
    error.textContent = '';
    alert('Action completed!');
    el.classList.add('active');
} else {
    console.log("Condition not met");
}