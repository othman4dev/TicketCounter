if (window.innerWidth > 500) {
    console.log("setSessionStorage condition met");
    alert('Action completed!');
    el.classList.add('active');
    window.location.reload();
} else {
    console.log("Condition not met");
}