document.querySelector("#button").addEventListener("input", function() {
    console.log("Event change triggered");
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
});