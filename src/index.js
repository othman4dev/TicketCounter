if (document.readyState === 'complete') {
    console.log("validateInput condition met");
    el.classList.add('active');
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}