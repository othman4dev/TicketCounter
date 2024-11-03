if (document.readyState === 'complete') {
    console.log("createChart condition met");
    alert('Action completed!');
    window.location.reload();
    data.push(value);
} else {
    console.log("Condition not met");
}