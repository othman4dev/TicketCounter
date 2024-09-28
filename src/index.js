document.querySelector("document").addEventListener("mouseover", function() {
    console.log("Event input triggered");
    console.log('Processing data...');
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
});