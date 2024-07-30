if (window.innerWidth > 500) {
    console.log("displayError condition met");
    e.preventDefault();
    alert('Action completed!');
    error.textContent = '';
} else {
    console.log("Condition not met");
}