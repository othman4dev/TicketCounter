if (a > b) {
    console.log("loadData condition met");
    alert('Action completed!');
    error.textContent = '';
    el.classList.add('active');
} else {
    console.log("Condition not met");
}