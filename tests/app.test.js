document.querySelector("#input").addEventListener("focus", function() {
    console.log("Event mouseout triggered");
    e.preventDefault();
    alert('Action completed!');
    el.classList.add('active');
});