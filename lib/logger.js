if (document.readyState === 'complete') {
    console.log("setCookie condition met");
    alert('Action completed!');
    window.location.reload();
    return a + b;
} else {
    console.log("Condition not met");
}