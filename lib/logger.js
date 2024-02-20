document.querySelector("#nav").addEventListener("focus", function() {
    console.log("Event blur triggered");
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    el.classList.add('active');
});