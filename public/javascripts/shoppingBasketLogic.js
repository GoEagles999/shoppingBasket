function checkOut() {    
    const appleQ = document.getElementById('appleQuantity').value
    const orangeQ = document.getElementById('orangeQuantity').value
    const garlicQ = document.getElementById('garlicQuantity').value
    const papayaQ = document.getElementById('papayaQuantity').value
    // if not buying multiples of 2 papayas, exit function
    if (papayaQ % 2 != 0) {
        document.getElementById('wrongNumberOfPapayas').style.display = 'block'
        document.getElementById('wrongNumberOfPapayas').textContent = 'You can only buy papayas in batches of 2. Please enter multiples of 2.'
        return false;
    }
    document.getElementById('wrongNumberOfPapayas').style.display = 'none'
    axios({
        method: 'post',
        url: '/addToBasket',
        data: {
          qOfApple: appleQ,
          qOfOrange: orangeQ,
          qOfGarlic: garlicQ,
          qOfPapaya: papayaQ
        }
    }).then(data => {
        document.getElementById('checkOutButton').style.display = 'none'
        for(var i = 0;i<document.getElementsByClassName('toRemove').length;i++) {
            document.getElementsByClassName('toRemove')[i].style.display = 'none'
        }
        document.getElementById('header').textContent = 'Basket submitted.'
        document.getElementById('done').textContent = "Thanks. Now you can't add any more items to your basket. "+data.data
    })
}