// Инкапсулируем код создав функцию cart иначе если мы будем использоватьв других файлах названия переменных к примеру cartModal будет ошибка. Мы замкнули переменные в определенной области видимости
const cart = ()=> {
    const cardButton = document.getElementById('cart')
const cartModal = document.querySelector('.cart')
const cartClose = cartModal.querySelector('.cart-close')

const openCart = ()=> {
    cartModal.style.display="flex"
}

const closeCart = ()=> {
    cartModal.style.display="none"
}



cardButton.addEventListener('click', openCart)
cartClose.addEventListener('click', closeCart)
}
 export default cart
// такой подход называется инкапсуляция кода