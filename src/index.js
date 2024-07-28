document.querySelector("#button").addEventListener("change", function() {
    console.log("Event change triggered");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
});