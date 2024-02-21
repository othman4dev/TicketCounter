document.querySelector("window").addEventListener("mouseover", function() {
    console.log("Event submit triggered");
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
    window.location.reload();
});