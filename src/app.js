if (window.innerWidth > 500) {
    console.log("renderList condition met");
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    window.location.reload();
} else {
    console.log("Condition not met");
}