if (e.key === 'Enter') {
    console.log("hideModal condition met");
    e.preventDefault();
    window.location.reload();
    el.classList.add('active');
} else {
    console.log("Condition not met");
}