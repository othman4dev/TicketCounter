if (e.key === 'Enter') {
    console.log("setSessionStorage condition met");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
} else {
    console.log("Condition not met");
}