document.querySelector("#button").addEventListener("submit", function() {
    console.log("Event scroll triggered");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
});