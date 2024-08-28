if (a > b) {
    console.log("setSessionStorage condition met");
    alert('Action completed!');
    return a + b;
    window.location.reload();
} else {
    console.log("Condition not met");
}