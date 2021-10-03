const initialState = {
            id:1,
            User:{
                id: 1,
                userId: 'ian'
            },
            Order:[
            //     {
            //     id: null,
            //     title: null,
            //     price: null,
            //     quantity: 0
            // }
        ],
        LoadOrderLoading: false,
        LoadOrdertDone: false,
        LoadOrderError: null,
}

export const ADD_CART_REQUEST = 'ADD_CART_REQUEST';
export const ADD_CART_SUCCEESS = 'ADD_CART_SUCCEESS';
export const ADD_CART_FAILURE = 'ADD_CART_FAILURE';

// export const addCart = (data) => {
//     return{
//         type: ADD_CART,
//         data
//     }
// }
export const addCartAction = (data) => {
    return{
        type: ADD_CART_REQUEST,
        data
    }
}

// const dummyProduct = {
//     id: 2,
//     title: "Mens Casual Premium Slim Fit T-Shirts",
//     price: 22.3,
//     image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
// }

// const addCart = useCallback((item) => {
//     console.log(item.id, Order)
//       const check = Order.find(order =>order.id === item.id);
//       if(check === undefined){
//         item.quantity = 1;
//         console.log('first')
//         dispatch(addCartAction(item));  
//         // return {item, quantity: 1};
//       }else{
//           Order.map((order)=>{
//               if(order.id === item.id){
//                 console.log('중복')
//                 order.quantity = order.quantity+1;
//                 dispatch(addCartAction(order));
//               }
//             })
//       }
// },[]); 


// const addCart = useCallback((item) => {
//     console.log(item.id, Order)
//       const check = Order.find(order =>order.id === item.id);
//       if(check === undefined){
//         item.quantity = 1;
//         console.log('first')
//         dispatch(addCartAction(item));  
//         // return {item, quantity: 1};
//       }else{
//           Order.map((order)=>{
//               if(order.id === item.id){
//                 console.log('중복')
//                 order.quantity = order.quantity+1;
//                 dispatch(addCartAction(order));
//               }
//             })
//       }
// },[]);

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CART_REQUEST:{
           
            return{
                ...state,
                LoadOrderLoading: true,
                LoadOrdertDone: false,
            }
        }
        case ADD_CART_SUCCEESS:{
            console.log(action.data.id);
            console.log(...state.Order,action.data.id);
            let Order = [...state.Order];
            const check = Order.find(order =>order.id === action.data.id);
                if(check === undefined){
                    console.log(check,'check')
                    action.data.quantity = 1;
                        return{
                            ...state,
                            Order: [action.data, ...state.Order],
                            LoadOrderLoading: false,
                            LoadOrdertDone: true
                        }
                }else{
                Order.map((order)=>{
                    console.log(order, 'order')
                if(order.id === action.data.id){    
                  console.log('중복')
                  order.quantity = order.quantity+1;
                  return{
                    ...state,
                    Order: [action.data, ...state.Order],
                    LoadOrderLoading: false,
                    LoadOrdertDone: true
                    }
                }
            })
        }
                // }else{
                //     action.data.quantity = 1;
                //     return{
                //         ...state,
                //         Order: [action.data, ...state.Order],
                //         LoadOrderLoading: false,
                //         LoadOrdertDone: true
                //     }
                // }
            // return{
            //     ...state,
            //     Order: [action.data, ...state.Order],
            //     LoadOrderLoading: false,
            //     LoadOrdertDone: true
            // }
        }
        default:
            return state;
    }
};

export default reducer;