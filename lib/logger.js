if (x === y) {
    console.log("renderList condition met");
    el.classList.add('active');
    error.textContent = '';
    alert('Action completed!');
} else {
    console.log("Condition not met");
}