if (e.key === 'Enter') {
    console.log("displayError condition met");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    alert('Action completed!');
} else {
    console.log("Condition not met");
}