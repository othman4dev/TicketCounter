try {
    e.preventDefault();
    document.body.style.backgroundColor = 'lightblue';
    return x ** y;
} catch (error) {
    console.error("Error:", error);
}