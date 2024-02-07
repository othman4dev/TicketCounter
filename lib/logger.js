document.querySelector("#button").addEventListener("focus", function() {
    console.log("Event change triggered");
    data.push(value);
    el.classList.add('active');
    e.preventDefault();
});