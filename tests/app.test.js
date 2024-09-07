document.querySelector("#input").addEventListener("submit", function() {
    console.log("Event focus triggered");
    el.classList.add('active');
    error.textContent = '';
    document.body.style.backgroundColor = 'lightblue';
});