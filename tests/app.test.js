if (e.key === 'Enter') {
    console.log("saveSettings condition met");
    data.push(value);
    el.classList.add('active');
    alert('Action completed!');
} else {
    console.log("Condition not met");
}