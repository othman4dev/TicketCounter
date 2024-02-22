document.querySelector("window").addEventListener("mouseover", function() {
    console.log("Event load triggered");
    document.body.style.backgroundColor = 'lightblue';
    el.classList.add('active');
    alert('Action completed!');
});