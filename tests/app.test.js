document.querySelector("#input").addEventListener("resize", function() {
    console.log("Event blur triggered");
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    el.classList.add('active');
});