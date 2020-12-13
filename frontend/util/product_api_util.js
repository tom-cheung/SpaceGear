export const fetchProducts = () => {
    return $.ajax({
        url: '/api/products', // url to my products index method on my products controller 
        method: 'GET'
    })
}