import getData from "./getData"
import renderGoods from "./renderGoods"
import {filterCatalog} from "./filters"

const catalog = ()=> {
const catalogButton = document.querySelector('.catalog-button > button')
const catalogModal = document.querySelector('.catalog')
const catalogModalItems = document.querySelectorAll('.catalog-list li')

let isOpen = false
catalogButton.addEventListener('click', ()=> {
    isOpen=!isOpen
    if(isOpen) {
        catalogModal.style.display="flex"
    } else {
        catalogModal.style.display="none"
    }
    
})

catalogModalItems.forEach(item=> {
item.addEventListener('click', (event)=> {
console.log(item.textContent);

getData().then(goodsItems => {
    renderGoods(filterCatalog(goodsItems, item.textContent) )

})


})
})

}
export default catalog