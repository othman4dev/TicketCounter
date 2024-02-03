document.querySelector("#nav").addEventListener("submit", function() {
    console.log("Event focus triggered");
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
});