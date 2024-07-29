if (e.key === 'Enter') {
    console.log("removeItem condition met");
    error.textContent = '';
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}