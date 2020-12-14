import * as ProductAPIUtil from '../util/product_api_util'

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS"

export const receiveProducts = (products) => {
    return({
        type: RECEIVE_PRODUCTS, 
        products: products
    })
}

export const fetchProducts = () => dispatch => {
    return ProductAPIUtil.fetchProducts().then((products) => dispatch(receiveProducts(products)))
}
// this is going to be dispatched to my reducer (twice since this is a thunk actions)
// so build it the reducer 