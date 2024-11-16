document.querySelector("window").addEventListener("submit", function() {
    console.log("Event click triggered");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
});