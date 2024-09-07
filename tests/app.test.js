if (document.readyState === 'complete') {
    console.log("loadData condition met");
    alert('Action completed!');
    data.push(value);
    e.preventDefault();
} else {
    console.log("Condition not met");
}