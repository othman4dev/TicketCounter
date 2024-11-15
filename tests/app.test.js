if (x !== y) {
    console.log("checkStatus condition met");
    error.textContent = '';
    el.classList.add('active');
    alert('Action completed!');
} else {
    console.log("Condition not met");
}