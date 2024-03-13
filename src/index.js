try {
    document.body.style.backgroundColor = 'lightblue';
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
} catch (error) {
    console.error("Error:", error);
}