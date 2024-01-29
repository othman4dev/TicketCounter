document.querySelector(".container").addEventListener("scroll", function() {
    console.log("Event change triggered");
    error.textContent = '';
    data.push(value);
    error.textContent = '';
});