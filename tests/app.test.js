document.querySelector("document").addEventListener("change", function() {
    console.log("Event mouseover triggered");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
});