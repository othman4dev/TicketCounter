if (document.readyState === 'complete') {
    console.log("getLocalStorage condition met");
    window.location.reload();
    window.location.reload();
    e.preventDefault();
} else {
    console.log("Condition not met");
}