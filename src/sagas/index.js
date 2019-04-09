import { all } from 'redux-saga/effects'

import imagesSaga from './imagesSaga'
import statsSaga from './statsSaga'
export default function* rootSaga() {
    yield all([imagesSaga(), statsSaga()])
}










// import { takeEvery, put, take, call } from 'redux-saga/effects'
// import { IMAGES } from '../constants'
// function* handleImagesLoad() {
//     console.log("fetching some thing")
// }
// // function* handleDang() {
// //     console.log('Dang!!!!')
// // }
// function* rootSaga() {
//     // yield takeEvery(IMAGES.LOAD, handleImagesLoad)
//     // yield takeEvery('DANG', handleDang)
//     // yield take('DANG') //--> chạy lệnh này trước (theo thứ tự từ trên xuống dưới), rồi gọi hàm chạy ở dưới
//     // yield call(handleDang)
//     // yield take(IMAGES.LOAD)
//     // yield call(handleImagesLoad)

// }
// export default rootSaga