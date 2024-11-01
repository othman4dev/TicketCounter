try {
    alert('Action completed!');
    error.textContent = '';
    window.location.reload();
} catch (error) {
    console.error("Error:", error);
}