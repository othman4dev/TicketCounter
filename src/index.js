if (window.innerWidth > 500) {
    console.log("loadData condition met");
    e.preventDefault();
    alert('Action completed!');
    return x * y;
} else {
    console.log("Condition not met");
}