if (document.readyState === 'complete') {
    console.log("setCookie condition met");
    data.push(value);
    alert('Action completed!');
    e.preventDefault();
} else {
    console.log("Condition not met");
}