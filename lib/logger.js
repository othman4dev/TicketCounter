try {
    console.log('Processing data...');
    el.classList.add('active');
    document.body.style.backgroundColor = 'lightblue';
} catch (error) {
    console.error("Error:", error);
}