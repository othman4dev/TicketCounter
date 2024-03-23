document.querySelector(".container").addEventListener("mouseout", function() {
    console.log("Event change triggered");
    error.textContent = '';
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
});