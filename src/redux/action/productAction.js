
import { PRODUCT } from "../../../constants/index"

export const addProductAction = (data) => {
    return {
        type: PRODUCT.ADD,
        payload: data,
    }
}

// class ProductAction{
//     actionAddProduct (item) {
//         console.log('creating actionAddProduct');
//         return {
//             type: "product/add",
//             payload: {
//                 id: count,
//                 productId: item.id,
//                 product: item,
//             }
//         }
//     }

//     actionUpdateProduct (item) {

//         console.log('creating actionUpdateProduct');
//         return {
//             type: "product/update",
//             payload: {
//                 id: item.id,
//                 name: item.id,
//                 desc: item.desc,
//                 unit_price: item.unit_price ,
//                 c: item.c,
//                 d: item.d,
//             }
//         }
//     }
    
//     actionDeleteProduct (item) {
//         console.log('creating actionDeleteProduct');
//         return {
//             type: "product/delete",
//             payload: {
//                 id: item.id,
//             }
//         }
//     }

// }

export default ProductAction;
