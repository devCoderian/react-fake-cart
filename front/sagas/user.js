import { all, fork, takeLatest, put, delay, call} from "@redux-saga/core/effects";
import axios from "axios";
export default function* userSaga(){

    function signupAPI(data){
        return axios.post('http://localhost:3060/user/signUp', data)
    }

    function* signup(action){
    
        try{
            const result = yield call(signupAPI, action.data) 
            yield put({
                type: 'SIGN_UP_SUCCESS',
            });
        }catch(err){
            yield put({
                type: 'SIGN_UP_FAILURE',
                error: err.response.data,
            })
        }
    }
    // const l = login({type: 'LOG_IN_REQUEST', data: {id:'ian'}})
    // l.next(); ->  const result =  yield call(loginApi, action.data);여기까지 실행
    // l.next(); yield put 실행
    // generate를 쓰면 테스트하기 쉽다. 

    function logInAPI(data){
        return axios.post('http://localhost:3060/user/login', data)
        //return axios.get(`/user/login`);
        // -> 실제 서버에 요청을 보냄

    }

    function* logIn(action){
        try{
            //yield call해서 로그인 api를 실행함
            const result = yield call(logInAPI, action.data);
            //yield call(loginApi, action.data); === loginApi(action.data)
            //const result =  yield call(logInAPI, action.data);
            yield delay(2000);
            yield put({
                type: 'LOG_IN_SUCCESS',
                // data: action.data -> 가데이터
                data: result.data
            });
        }catch(err){
            yield put({
                type: 'LOG_IN_FAILURE',
                data:err.response.data,
            });
            // yield put({
            //     type: 'LOG_IN_SUCCESS',
            //     data: action.data
            // });
        }
    }

    function logOutAPI(){
        // return axios.post('/api/logout')
        // -> 실제 서버에 요청을 보냄
        return axios.post('http://localhost:3060/user/logout')

    }

    function* logOut(action){
        try{
            //yield call해서 로그인 api를 실행함
            const result =  yield call(logOutAPI)
            //const result =  yield call(logOutAPI); ->  data: result.data
            //yield delay(1000);
            yield put({
                type: 'LOG_OUT_SUCCESS'
            });
        }catch(err){
            console.error(err);
            yield put({
                type: 'LOG_OUT_FAILURE',
                data:err.response.data,
            });
        }
    }

    
    //이벤트 리스너 같은 애들
    function* watchLogin(){
        //비동기 액션 크리에이터
        //로그인이라는 액션이 들어오면 로그인 제너레이터를 실행하도록 이벤트 리스너 역할을 한다.
        yield takeLatest('LOG_IN_REQUEST', logIn);
        //로그인관련 데이터에 대한 액션이 logIn함수에 매개변수로 전달된다.
    }
    function* watchLogout(){
        yield takeLatest('LOG_OUT_REQUEST', logOut);
    }

    function* watchSignup(){
        yield takeLatest('SIGN_UP_REQUEST', signup);
    }
    yield all([
        fork(watchLogin),
        fork(watchLogout),
        fork(watchSignup)
    ]);
}