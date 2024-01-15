document.querySelector("#input").addEventListener("resize", function() {
    console.log("Event submit triggered");
    error.textContent = '';
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
});