document.querySelector("#nav").addEventListener("blur", function() {
    console.log("Event input triggered");
    data.push(value);
    alert('Action completed!');
    e.preventDefault();
});