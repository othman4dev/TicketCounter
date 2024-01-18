document.querySelector("form").addEventListener("blur", function() {
    console.log("Event submit triggered");
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
    alert('Action completed!');
});