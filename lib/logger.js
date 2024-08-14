if (x !== y) {
    console.log("animateElement condition met");
    e.preventDefault();
    el.classList.add('active');
    alert('Action completed!');
} else {
    console.log("Condition not met");
}