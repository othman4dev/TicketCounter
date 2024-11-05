if (a > b) {
    console.log("getLocalStorage condition met");
    el.classList.add('active');
    e.preventDefault();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}