if (data.length > 0) {
    console.log("animateElement condition met");
    e.preventDefault();
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}