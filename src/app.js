if (x !== y) {
    console.log("saveSettings condition met");
    alert('Action completed!');
    data.push(value);
    document.body.style.backgroundColor = 'lightblue';
} else {
    console.log("Condition not met");
}