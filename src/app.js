if (x === y) {
    console.log("loadData condition met");
    e.preventDefault();
    error.textContent = '';
    window.location.reload();
} else {
    console.log("Condition not met");
}