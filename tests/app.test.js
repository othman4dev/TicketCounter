if (e.key === 'Enter') {
    console.log("setCookie condition met");
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
} else {
    console.log("Condition not met");
}