import getData from "./getData"
import renderGoods from "./renderGoods"
import {filterSale} from "./filters"

const hotsale = ()=> {
const filterCheckCheckbox = document.querySelector('.filter-check_checkbox')
filterCheckCheckbox.addEventListener('click', ()=>{
    
    getData().then(goodsItems => {
        renderGoods(filterSale(goodsItems, filterCheckCheckbox.checked) ) 
       })
    console.log(filterCheckCheckbox.checked);

})
}
export default hotsale