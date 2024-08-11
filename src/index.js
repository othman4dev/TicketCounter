if (x !== y) {
    console.log("fetchData condition met");
    error.textContent = '';
    e.preventDefault();
    window.location.reload();
} else {
    console.log("Condition not met");
}