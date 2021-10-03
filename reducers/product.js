const initialState = {
        
            Products:[
                {
                id: null,
                title: null,
                price: null,
                image: null
            }
        ],
        loadProductLoading: false,
        loadProductDone: false,
        loadProductError: null,
}

export const LOAD_PRODUCT_REQUEST = 'LOAD_PRODUCT_REQUEST';
export const LOAD_PRODUCT_SUCCESS = 'LOAD_PRODUCT_SUCCESS';
export const LOAD_PRODUCT_FAILURE = 'LOAD_PRODUCT_FAILURE';


export const LoadProductAction = () => {
    return{
        type: LOAD_PRODUCT_REQUEST,
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
        case LOAD_PRODUCT_REQUEST:{
            return{
                ...state,
                loadProductLoading: true,
                loadProductDone: false
            }
        }
        case LOAD_PRODUCT_SUCCESS:{
            return{
                ...state,
                Products:action.data,
                loadProductLoading: false,
                loadProductDone: true,

            }
        }
        case LOAD_PRODUCT_FAILURE:{
            return{
                ...state,
                loadProductLoading: false,
                loadProductDone: false,
            }
        }
        default:
            return state;
    }
};

export default reducer;