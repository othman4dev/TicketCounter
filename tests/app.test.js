if (x !== y) {
    console.log("updateUI condition met");
    alert('Action completed!');
    e.preventDefault();
    return x % y;
} else {
    console.log("Condition not met");
}