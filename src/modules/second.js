// Инкапсулируем код создав функцию cart иначе если мы будем использоватьв других файлах названия переменных к примеру cartModal будет ошибка. Мы замкнули переменные в определенной области видимости
import getData from "./getData"
import postData  from "./postData"
const second = ()=> {
  const cardButton = document.getElementById('cart')
  getData().then(data => console.log(data))
  cardButton.addEventListener('click',()=>{
    // postData().then(data => console.log(data))
  
  })
}
 export default second
// такой подход называется инкапсуляция кода