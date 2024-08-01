if (e.key === 'Enter') {
    console.log("createChart condition met");
    el.classList.add('active');
    error.textContent = '';
    alert('Action completed!');
} else {
    console.log("Condition not met");
}