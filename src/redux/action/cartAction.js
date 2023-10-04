
class CartAction{
    actionAddCart (item) {
        console.log('creating actionAddCart');
        return {
            type: "cart/add",
            payload: {
                id: count,
                productId: item.id,
                product: item,
            }
        }
    }

} 

export default CartAction;
