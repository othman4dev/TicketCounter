document.querySelector("window").addEventListener("click", function() {
    console.log("Event keydown triggered");
    window.location.reload();
    alert('Action completed!');
    console.log('Processing data...');
});