import * as ProductAPIUtil from '../util/product_api_util'

export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT"
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS"
export const REMOVE_PRODUCT = "REMOVE_PRODUCT"
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS"


const receiveProduct = (product) => {
    
return {
    type: RECEIVE_PRODUCT,
    product
};
}

const receiveProducts = (products) => {
   
    return {
    type: RECEIVE_PRODUCTS,
    products
};
}

const removeProduct = productId => ({
    type: REMOVE_PRODUCT,
    productId
})

const receiveErrors = errors => ({
    type: RECEIVE_PRODUCT_ERRORS,
    errors
})

export const getAllProducts = () => dispatch => (
    ProductAPIUtil.getAllProducts()
        .then(products => dispatch(receiveProducts(products)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
)

export const getProduct = productId => dispatch => {
    return(
    ProductAPIUtil.getProduct(productId)
        .then(product => dispatch(receiveProduct(product)))
    )
}

export const createProduct = (product) => dispatch => (
    ProductAPIUtil.createProduct(product)
        .then(product => dispatch(receiveProduct(product)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
)

export const updateProduct = (product, id) => dispatch => (
    ProductAPIUtil.updateProduct(product, id) 
        .then(product => dispatch(receiveProduct(product)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
)

export const deleteProduct = productId => dispatch => (
    ProductAPIUtil.deleteProduct(productId)
        .then(() => dispatch(removeProduct(productId)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
)

