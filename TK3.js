function calculateTotal(subtotal) {
    const shipping = subtotal > 50 ? 0 : 5;
    const total = subtotal + shipping;
    return { total, shipping };
}