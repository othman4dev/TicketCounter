document.querySelector("document").addEventListener("mouseout", function() {
    console.log("Event mouseout triggered");
    console.log('Processing data...');
    alert('Action completed!');
    window.location.reload();
});