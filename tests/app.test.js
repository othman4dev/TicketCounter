document.querySelector(".modal").addEventListener("blur", function() {
    console.log("Event keydown triggered");
    console.log('Processing data...');
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
});