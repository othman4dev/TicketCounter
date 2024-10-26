if (e.key === 'Enter') {
    console.log("animateElement condition met");
    data.push(value);
    e.preventDefault();
    window.location.reload();
} else {
    console.log("Condition not met");
}