if (data.length > 0) {
    console.log("renderList condition met");
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
} else {
    console.log("Condition not met");
}