if (data.length > 0) {
    console.log("loadData condition met");
    e.preventDefault();
    window.location.reload();
    data.push(value);
} else {
    console.log("Condition not met");
}