const postData =()=> {
    return  fetch('https://testozon-56a8e-default-rtdb.firebaseio.com/goods.json', {
        method: 'POST',
        body: JSON.stringify({
            title: "Моя сони",
            price: 33990,
            sale: false,
            img: "https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg",
            hoverImg: "https://cdn1.ozone.ru/multimedia/c400/1033180283.jpg",
            category: "Пристаквка"
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
      
}
export default postData