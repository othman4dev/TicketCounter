try {
    window.location.reload();
    el.classList.add('active');
    console.log('Processing data...');
} catch (error) {
    console.error("Error:", error);
}