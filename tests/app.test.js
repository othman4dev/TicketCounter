if (a > b) {
    console.log("getLocalStorage condition met");
    el.classList.add('active');
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}