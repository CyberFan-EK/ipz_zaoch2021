import getData from "./getData"
import renderGoods from "./renderGoods"
import {filterPrice} from "./filters"

const price = ()=> {

const minPrice = document.getElementById('min')
const maxPrice = document.getElementById('max')

maxPrice.addEventListener('input', ()=> {
    if(minPrice.value) {

    } else {
        minPrice.value =0
    } 
    getData().then(goodsItems => {
        renderGoods(filterPrice(goodsItems, maxPrice.value, minPrice.value) ) 
       })
     
})

minPrice.addEventListener('input', ()=> {
    if(maxPrice.value) {

    } else {
        maxPrice.value =0
    } 
   getData().then(goodsItems => {
    renderGoods(filterPrice(goodsItems, maxPrice.value, minPrice.value) ) 
   })
     
})




}

export default price