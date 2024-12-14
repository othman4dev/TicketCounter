document.querySelector("window").addEventListener("keydown", function() {
    console.log("Event mouseout triggered");
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    e.preventDefault();
});