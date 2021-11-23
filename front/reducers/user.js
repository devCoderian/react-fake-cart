const initialState = {
    signupLoading: false, //로그인 시도중
    signupDone: false,
    signupError: false, //로그아웃 시도중

    loginLoading: false, //로그인 시도중
    loginDone: false, //로그아웃 시도중
    loginError: false,
   
    logoutLoading: false, //로그인 시도중
    logoutDone: false,
    logoutError: false, //로그아웃 시도중
    me: null,
}

export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
// export const LOG_OUT = 'LOG_OUT';
// export const LOG_IN = 'LOG_IN';

export const loginRequestAction = (data) =>{
    return{
        type: LOG_IN_REQUEST,
        data
    }
}


export const logoutRequestAction = () =>{
    return{
        type: LOG_OUT_REQUEST
    }
}
export const signUpRequestAction = (data) =>{
    return{
        type: SIGN_UP_REQUEST,
        data
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SIGN_UP_REQUEST:
            return{
                ...state,
                signupLoading: true,
                }
        case SIGN_UP_SUCCESS:
            console.log(action.data);
            return{
                ...state,
                signupLoading: false,
                signupDone: true,
                me:null
                }
        case SIGN_UP_FAILURE:
            return{
                ...state,
                signupLoading: false,
                signupDone: false
                }
        case LOG_IN_REQUEST:
            return{
                ...state,
                loginLoading: true,
                }
        case LOG_IN_SUCCESS:
            console.log(action.data);
            return{
                ...state,
                loginLoading: false,
                loginDone: true,
                me:action.data
                }
        case LOG_IN_FAILURE:
            return{
                ...state,
                loginLoading: false,
                loginDone: false
                }
        case LOG_OUT_REQUEST:
            return{
                ...state,
                logoutLoading: true,
                };
        case LOG_OUT_SUCCESS:
            return{
                ...state,
                logoutLoading: false,
                logoutDone: true,
                me:null
                };
        case LOG_OUT_FAILURE:
            return{
                ...state,
                logoutLoading: false,
                logoutDone: false,
                };
        default:
            return state;
    }
};

export default reducer;