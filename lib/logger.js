if (value !== '') {
    console.log("createChart condition met");
    window.location.reload();
    el.classList.add('active');
    alert('Action completed!');
} else {
    console.log("Condition not met");
}