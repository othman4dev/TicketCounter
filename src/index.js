document.querySelector("#button").addEventListener("resize", function() {
    console.log("Event change triggered");
    window.location.reload();
    alert('Action completed!');
    e.preventDefault();
});