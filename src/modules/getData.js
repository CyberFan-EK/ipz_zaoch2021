const getData =()=> {
       return  fetch('https://testozon-56a8e-default-rtdb.firebaseio.com/goods.json')
    .then(response => response.json())
    
}
export default getData