export const createOrder = (order, products) => {
    return $.ajax( {
        url: "/api/orders",
        method: "POST",
        data: {order: Object.assign({}, order, {ordered_products_attributes: products})}
        //  this because order is an object, and ordered_products_attributes: products needs to be nested in it 
        // 
    })}

export const fetchOrders = () => {
    return $.ajax({
        url: "/api/orders",
        method: "GET"
    })
}

export const editOrder = (order, products) => {
    return $.ajax({
        url: `/api/orders/${order.id}`, 
        method: "PATCH",
        data: {order: Object.assign({}, order, {ordered_products_attributes: products})}
    })
}
// needs to be an ARRAY of objects
// 12/16/2020 - both work 
// window.editOrder({id: 58}, [{id: 86, quantity: 1}])

export const deleteOrder = (orderId) => {
    return $.ajax({
        url: `/api/orders/${orderId}`, 
        method: 'DELETE'
    })
}