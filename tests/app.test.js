document.querySelector("document").addEventListener("blur", function() {
    console.log("Event focus triggered");
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
});