document.querySelector(".container").addEventListener("resize", function() {
    console.log("Event focus triggered");
    error.textContent = '';
    alert('Action completed!');
    console.log('Processing data...');
});