document.querySelector("#button").addEventListener("change", function() {
    console.log("Event load triggered");
    el.classList.add('active');
    error.textContent = '';
    alert('Action completed!');
});