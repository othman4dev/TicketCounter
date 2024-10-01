document.querySelector(".container").addEventListener("mouseout", function() {
    console.log("Event submit triggered");
    e.preventDefault();
    console.log('Processing data...');
    alert('Action completed!');
});