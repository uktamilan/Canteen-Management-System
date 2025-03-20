function filterMenu(category) {
    let items = document.querySelectorAll('.menu-item');
    
    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
function increaseQuantity(button) {
    let quantitySpan = button.previousElementSibling;
    let currentQuantity = parseInt(quantitySpan.textContent);
    quantitySpan.textContent = currentQuantity + 1;
}

function decreaseQuantity(button) {
    let quantitySpan = button.nextElementSibling;
    let currentQuantity = parseInt(quantitySpan.textContent);
    if (currentQuantity > 0) {
        quantitySpan.textContent = currentQuantity - 1;
    }
}
