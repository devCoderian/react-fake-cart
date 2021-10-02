import { all, fork, takeLatest, delay, put, call } from "@redux-saga/core/effects";
import axios from "axios";

export default function* productSaga(){
    function loadProductAPI(){
        return axios.get(`https://fakestoreapi.com/products`);
    }

    function* loadProduct() {
        try {
          const result = yield call(loadProductAPI);
          yield put({
            type: 'LOAD_PRODUCT_SUCCESS',
            data: result.data,
          });
        } catch (err) {
          console.error(err);
          yield put({
            type: 'LOAD_PRODUCT_FAILURE',
            error: err.response.data,
          });
        }
      }

      
    function* watchLoadProduct(){
      yield takeLatest('LOAD_PRODUCT_REQUEST', loadProduct);
    }

    yield all([
        fork(watchLoadProduct)
    ]);
}