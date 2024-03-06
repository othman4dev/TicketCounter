if (document.readyState === 'complete') {
    console.log("handleClick condition met");
    alert('Action completed!');
    window.location.reload();
    alert('Action completed!');
} else {
    console.log("Condition not met");
}