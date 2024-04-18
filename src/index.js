if (x !== y) {
    console.log("setSessionStorage condition met");
    e.preventDefault();
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}