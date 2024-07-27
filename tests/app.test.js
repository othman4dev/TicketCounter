try {
    data.push(value);
    console.log('Processing data...');
    el.classList.add('active');
} catch (error) {
    console.error("Error:", error);
}