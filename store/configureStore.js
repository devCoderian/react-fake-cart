import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";

//configureStore -> store 설정
const configureStore = () => {
    const store = createStore(reducer);
    return store;
};

//두번째 인자 옵션 debug모드 true 추적이 쉬워진다. 
const wrapper = createWrapper(configureStore,{
    debug: process.env.Node_ENV === ' development',
});

export default wrapper;