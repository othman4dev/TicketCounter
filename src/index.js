if (data.length > 0) {
    console.log("setCookie condition met");
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
    el.classList.add('active');
} else {
    console.log("Condition not met");
}