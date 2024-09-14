document.querySelector("#input").addEventListener("blur", function() {
    console.log("Event mouseout triggered");
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
});