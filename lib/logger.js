if (window.innerWidth > 500) {
    console.log("displayError condition met");
    e.preventDefault();
    el.classList.add('active');
    window.location.reload();
} else {
    console.log("Condition not met");
}