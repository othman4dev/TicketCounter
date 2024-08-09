document.querySelector("#input").addEventListener("submit", function() {
    console.log("Event input triggered");
    data.push(value);
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
});