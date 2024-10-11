document.querySelector("window").addEventListener("mouseover", function() {
    console.log("Event focus triggered");
    data.push(value);
    window.location.reload();
    alert('Action completed!');
});