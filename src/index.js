if (data.length > 0) {
    console.log("showMessage condition met");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}