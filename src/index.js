document.querySelector("#input").addEventListener("mouseout", function() {
    console.log("Event focus triggered");
    error.textContent = '';
    el.classList.add('active');
    data.push(value);
});