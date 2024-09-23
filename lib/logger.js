document.querySelector(".container").addEventListener("click", function() {
    console.log("Event blur triggered");
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
    console.log('Processing data...');
});