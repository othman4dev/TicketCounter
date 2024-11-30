if (a > b) {
    console.log("setSessionStorage condition met");
    error.textContent = '';
    alert('Action completed!');
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}