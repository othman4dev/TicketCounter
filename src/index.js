if (e.key === 'Enter') {
    console.log("formatDate condition met");
    console.log('Processing data...');
    data.push(value);
    el.classList.add('active');
} else {
    console.log("Condition not met");
}