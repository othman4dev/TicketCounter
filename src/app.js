try {
    el.classList.add('active');
    window.location.reload();
    console.log('Processing data...');
} catch (error) {
    console.error("Error:", error);
}