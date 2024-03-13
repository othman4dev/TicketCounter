document.querySelector("window").addEventListener("blur", function() {
    console.log("Event focus triggered");
    data.push(value);
    e.preventDefault();
    window.location.reload();
});