import { all, fork, takeLatest, delay, put } from "@redux-saga/core/effects";
export default function* cartSaga(){
    

        function addCartAPI(data){
            return axios.post('/api/addCart', data)
            // -> 실제 서버에 요청을 보냄

        }

        function* addCart(action){
            try{
                //yield call해서 로그인 api를 실행함
                //const result =  yield call(addCartAPI, action.data);
                yield delay(1000);
                yield put({
                    type: 'ADD_CART_SUCCESS',
                    data: result.data
                });
            }catch(err){
                yield put({
                    type: 'ADD_CART_FAILURE',
                    data:err.response.data,
                });
            }
        }

        

    function* watchAddCart(){
        yield takeLatest('ADD_CART_REQUEST', addCart);
    }

    yield all([
        fork(watchAddCart)
    ]);
}