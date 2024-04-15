document.querySelector("#button").addEventListener("click", function() {
    console.log("Event keydown triggered");
    el.classList.add('active');
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
});