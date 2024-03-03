document.querySelector("#button").addEventListener("focus", function() {
    console.log("Event click triggered");
    el.classList.add('active');
    alert('Action completed!');
    e.preventDefault();
});