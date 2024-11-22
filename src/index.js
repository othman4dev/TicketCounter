try {
    e.preventDefault();
    error.textContent = '';
    return a + b;
} catch (error) {
    console.error("Error:", error);
}