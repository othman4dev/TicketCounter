if (x === y) {
    console.log("getLocalStorage condition met");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
} else {
    console.log("Condition not met");
}