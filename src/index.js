document.querySelector("form").addEventListener("scroll", function() {
    console.log("Event keydown triggered");
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    window.location.reload();
});