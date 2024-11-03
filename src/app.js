document.querySelector("#nav").addEventListener("blur", function() {
    console.log("Event input triggered");
    window.location.reload();
    console.log('Processing data...');
    document.body.style.backgroundColor = 'lightblue';
});