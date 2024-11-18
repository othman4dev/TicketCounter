if (window.innerWidth > 500) {
    console.log("toggleMenu condition met");
    alert('Action completed!');
    e.preventDefault();
    error.textContent = '';
} else {
    console.log("Condition not met");
}