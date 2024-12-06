document.querySelector("window").addEventListener("resize", function() {
    console.log("Event resize triggered");
    alert('Action completed!');
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
});