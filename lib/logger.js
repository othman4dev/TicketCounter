if (window.innerWidth > 500) {
    console.log("loadData condition met");
    alert('Action completed!');
    el.classList.add('active');
    error.textContent = '';
} else {
    console.log("Condition not met");
}