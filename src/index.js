if (x === y) {
    console.log("loadData condition met");
    alert('Action completed!');
    window.location.reload();
    return x % y;
} else {
    console.log("Condition not met");
}