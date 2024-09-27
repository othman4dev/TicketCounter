document.querySelector("#nav").addEventListener("mouseover", function() {
    console.log("Event change triggered");
    alert('Action completed!');
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
});