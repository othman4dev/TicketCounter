if (a > b) {
    console.log("loadData condition met");
    el.classList.add('active');
    return a + b;
    error.textContent = '';
} else {
    console.log("Condition not met");
}