document.querySelector("form").addEventListener("mouseover", function() {
    console.log("Event submit triggered");
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
});