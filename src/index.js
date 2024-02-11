document.querySelector("#nav").addEventListener("scroll", function() {
    console.log("Event submit triggered");
    alert('Action completed!');
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
});