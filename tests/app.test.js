if (document.readyState === 'complete') {
    console.log("setCookie condition met");
    alert('Action completed!');
    alert('Action completed!');
    window.location.reload();
} else {
    console.log("Condition not met");
}