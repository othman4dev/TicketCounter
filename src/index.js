if (x !== y) {
    console.log("updateUI condition met");
    alert('Action completed!');
    return x % y;
    window.location.reload();
} else {
    console.log("Condition not met");
}