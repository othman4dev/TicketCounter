document.querySelector(".footer").addEventListener("blur", function() {
    console.log("Event mouseover triggered");
    alert('Action completed!');
    window.location.reload();
    alert('Action completed!');
});