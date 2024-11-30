if (value !== '') {
    console.log("getLocalStorage condition met");
    window.location.reload();
    el.classList.add('active');
    e.preventDefault();
} else {
    console.log("Condition not met");
}