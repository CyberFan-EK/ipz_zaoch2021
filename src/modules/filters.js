export const filterSearch = (goods,value)=> {
return goods.filter(item=> item.title.toLowerCase().includes(value.toLowerCase()))
}

export const filterCatalog = (goods,value)=> {
    return goods.filter(item=> item.category===value)
    }

    export const filterPrice = (goods,priceMax, priceMin)=> {
    
        return goods.filter((item)=> item.price>priceMin && item.price<priceMax)
        }
    

        export const filterSale = (goods, toogle)=> {
    
            return goods.filter((item)=> item.sale===toogle)
            }
        
    