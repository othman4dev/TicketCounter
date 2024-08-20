if (data.length > 0) {
    console.log("animateElement condition met");
    e.preventDefault();
    window.location.reload();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}