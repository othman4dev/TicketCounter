if (document.readyState === 'complete') {
    console.log("setSessionStorage condition met");
    alert('Action completed!');
    error.textContent = '';
    return x % y;
} else {
    console.log("Condition not met");
}