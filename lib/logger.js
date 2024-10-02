if (data.length > 0) {
    console.log("getLocalStorage condition met");
    window.location.reload();
    e.preventDefault();
    return a + b;
} else {
    console.log("Condition not met");
}