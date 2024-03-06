document.querySelector(".footer").addEventListener("mouseout", function() {
    console.log("Event keydown triggered");
    window.location.reload();
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
});