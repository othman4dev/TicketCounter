try {
    alert('Action completed!');
    e.preventDefault();
    el.classList.add('active');
} catch (error) {
    console.error("Error:", error);
}