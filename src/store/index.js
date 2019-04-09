import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers'
import rootSaga from '../sagas'

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware() // --> hàm tạo Saga
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware), // connect the Saga middleware to the store (store bao ngoài)
        // window.__REDUX_DEVTOOLs_EXTENSION__ &&
        // window.__REDUX_DEVTOOLs_EXTENSION__(),
    )
    sagaMiddleware.run(rootSaga) // chạy hàm Saga và kết nối + làm việc với rootSaga
    // store.dispatch({ type: 'DANG' });
    // store.dispatch({ type: 'LOGIN' });  //  Phát đi 1 action có tên là LOGIN, LOGOUT --
    // store.dispatch({ type: 'LOGOUT' }); // --> Lấy ra trong rootSaga action này -> thực hiện hàm tại saga
    return store;
}


export default configureStore;