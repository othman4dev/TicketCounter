if (x !== y) {
    console.log("setCookie condition met");
    alert('Action completed!');
    return x / y;
    window.location.reload();
} else {
    console.log("Condition not met");
}