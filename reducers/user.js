const initialState = {
    isLogin: false,
    user: null,
}

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';


export const loginAction = (data) =>{
    return{
        type: LOG_IN,
        data
    }
}

export const logoutAction = () =>{
    return{
        type: LOG_OUT
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOG_IN:
            return{
                ...state,
                isLogin: true,
                user:action.data
                }
        case LOG_OUT:
            return{
                ...state,
                isLogin: false,
                user:null
                };
        default:
            return state;
    }
};

export default reducer;