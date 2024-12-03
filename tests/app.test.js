document.querySelector("window").addEventListener("mouseout", function() {
    console.log("Event click triggered");
    document.body.style.backgroundColor = 'lightblue';
    error.textContent = '';
    data.push(value);
});