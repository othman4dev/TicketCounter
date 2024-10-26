document.querySelector(".container").addEventListener("mouseout", function() {
    console.log("Event submit triggered");
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
});