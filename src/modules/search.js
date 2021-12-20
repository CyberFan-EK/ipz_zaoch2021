import getData from "./getData";
import renderGoods from "./renderGoods";
import { filterSearch } from "./filters";

const search = ()=> {
const searchWrapperInput = document.querySelector('.search-wrapper_input')
searchWrapperInput.addEventListener('input', (event)=> {
 const value = event.target.value;
    getData().then(goodsItems => {
                renderGoods(filterSearch(goodsItems, value) )
        
    })

})
}
export default search