const initialState = {
            id:1,
            User:{
                id: 1,
                userId: 'ian'
            },
            Products:[
                {
                id: 1,
                title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                price: 109.95,
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            }
        ],
    addedCart: false
}

export const ADD_CART = 'ADD_CART';

// export const addCart = (data) => {
//     return{
//         type: ADD_CART,
//         data
//     }
// }
export const addCartAction = () => {
    return{
        type: ADD_CART,
    }
}

const dummyProduct = {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CART:{
            return{
                ...state,
                Products:[dummyProduct, ...state.Products],
                addedCart: true
            }
        }
        default:
            return state;
    }
};

export default reducer;