if (window.innerWidth > 500) {
    console.log("displayError condition met");
    e.preventDefault();
    e.preventDefault();
    window.location.reload();
} else {
    console.log("Condition not met");
}