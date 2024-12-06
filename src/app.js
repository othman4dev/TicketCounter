document.querySelector("form").addEventListener("change", function() {
    console.log("Event mouseout triggered");
    console.log('Processing data...');
    alert('Action completed!');
    window.location.reload();
});