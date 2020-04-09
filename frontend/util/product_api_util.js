export const getAllProducts = () => (
    $.ajax({
        method: "GET",
        url: "/api/products"
    })
)

export const getProduct = (productId) => {
    return (
        $.ajax({
            method: "GET",
            url: `/api/products/${productId}`
        })
    )
}

export const createProduct = (product) => (
    $.ajax({
        url: '/api/products',
        method: "POST",
        data: product
    })
)

export const updateProduct = (product, id) => (
    $.ajax({
        method: "PATCH",
        url: `/api/products/${id}`,
        data: product
    })
)

export const deleteProduct = (productId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/products/${productId}`
    })
)

