if (e.key === 'Enter') {
    console.log("loadData condition met");
    return x - y;
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}