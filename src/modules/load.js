// Инкапсулируем код создав функцию cart иначе если мы будем использоватьв других файлах названия переменных к примеру cartModal будет ошибка. Мы замкнули переменные в определенной области видимости
import getData from "./getData"
import renderGoods from "./renderGoods"

const load = ()=> {
  const cardButton = document.getElementById('cart')
  
  getData().then(data => renderGoods(data))
  cardButton.addEventListener('click',()=>{
    // postData().then(data => console.log(data))
  
  })
}
 export default load
// такой подход называется инкапсуляция кода