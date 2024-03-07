document.querySelector("#button").addEventListener("click", function() {
    console.log("Event focus triggered");
    alert('Action completed!');
    e.preventDefault();
    console.log('Processing data...');
});