if (data.length > 0) {
    console.log("checkStatus condition met");
    data.push(value);
    e.preventDefault();
    window.location.reload();
} else {
    console.log("Condition not met");
}