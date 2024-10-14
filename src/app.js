document.querySelector("header").addEventListener("blur", function() {
    console.log("Event change triggered");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
});