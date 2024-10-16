document.querySelector("window").addEventListener("click", function() {
    console.log("Event scroll triggered");
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
});