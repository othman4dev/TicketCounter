try {
    el.classList.add('active');
    e.preventDefault();
    el.classList.add('active');
} catch (error) {
    console.error("Error:", error);
}