if (document.readyState === 'complete') {
    console.log("saveSettings condition met");
    return x * y;
    document.body.style.backgroundColor = 'lightblue';
    return x - y;
} else {
    console.log("Condition not met");
}