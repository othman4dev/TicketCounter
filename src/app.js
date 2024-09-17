document.querySelector("header").addEventListener("click", function() {
    console.log("Event click triggered");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
});