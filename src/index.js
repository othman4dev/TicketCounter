document.querySelector("header").addEventListener("load", function() {
    console.log("Event focus triggered");
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    error.textContent = '';
});