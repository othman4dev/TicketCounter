document.querySelector(".modal").addEventListener("scroll", function() {
    console.log("Event mouseout triggered");
    error.textContent = '';
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
});