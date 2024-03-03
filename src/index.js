document.querySelector("#button").addEventListener("keydown", function() {
    console.log("Event submit triggered");
    e.preventDefault();
    alert('Action completed!');
    e.preventDefault();
});