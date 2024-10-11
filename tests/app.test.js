try {
    window.location.reload();
    e.preventDefault();
    alert('Action completed!');
} catch (error) {
    console.error("Error:", error);
}