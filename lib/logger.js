document.querySelector("header").addEventListener("scroll", function() {
    console.log("Event mouseover triggered");
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
});