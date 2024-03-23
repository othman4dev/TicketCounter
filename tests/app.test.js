try {
    error.textContent = '';
    data.push(value);
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}