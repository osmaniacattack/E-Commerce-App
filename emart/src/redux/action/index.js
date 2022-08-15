// Adding item to Cart

export const addCart = (product) => {
    return{
        type: "ADDITEM",
        payload: product
    }
}

// Delete item from Cart

export const delCart = (product) => {
    return{
        type: "DELITEM",
        payload: product
    }
}