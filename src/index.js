document.querySelector("#input").addEventListener("scroll", function() {
    console.log("Event blur triggered");
    error.textContent = '';
    alert('Action completed!');
    data.push(value);
});