if (window.innerWidth > 500) {
    console.log("setSessionStorage condition met");
    window.location.reload();
    document.body.style.backgroundColor = 'lightblue';
    console.log('Processing data...');
} else {
    console.log("Condition not met");
}