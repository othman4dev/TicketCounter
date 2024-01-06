if (document.readyState === 'complete') {
    console.log("hideModal condition met");
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    window.location.reload();
} else {
    console.log("Condition not met");
}