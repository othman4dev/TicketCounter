if (value !== '') {
    console.log("displayError condition met");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    window.location.reload();
} else {
    console.log("Condition not met");
}