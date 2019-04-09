import { takeEvery, select, call, put } from 'redux-saga/effects';

import { IMAGES } from '../constants';
import { fetchImages } from '../api';
import { setImages, setError } from '../actions';

const getPage = stas => stas.isLoading; // nextPage gọi pageReducer trong reducers->để khi load_images_success thì state+1 [sta-(tên bất kỳ) là tham số truyền vào]
function* handleImagesLoad() {
    try {
        const { page } = yield select(getPage); //Select: chạy một selector function để lấy data từ state.
        console.log('page_saga', page);
        const images = yield call(fetchImages, page); //Call: gọi và chạy 2 hàm (fetchImages - lấy images, number - trả về[số trang + 1] hay state+1) -> trả về đối tượng là các images
        yield put(setImages(images));
    } catch (error) {
        yield put(setError(error.toString())); // gửi/phát action setError
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
