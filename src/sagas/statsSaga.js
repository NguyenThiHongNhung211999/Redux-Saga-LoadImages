import { take, fork, put, call } from 'redux-saga/effects'

import { IMAGES } from '../constants'
import { fetchImagesStats } from '../api';
import { setImagesStats, setImagesStatsError, loadImagesStats } from '../actions';

function* handleStatsRequest(id) {
    // console.log('fetching stats for', id)
    for (let i = 0; i < 3; i++) {
        try {
            yield put(loadImagesStats(id))
            const res = yield call(fetchImagesStats, id)
            yield put(setImagesStats(id, res.downloads.total))
            return true
        } catch (e) { }
    }

    yield put(setImagesStatsError(id))
}

export default function* watchStatsRequest() {
    while (true) {
        const { images } = yield take(IMAGES.LOAD_SUCCESS); // viết kiểu { images } để tranfer (chuyển) thành kiểu mảng chứa các obj

        for (let i = 0; i < images.length; i++) {
            yield fork(handleStatsRequest, images[i].id) // hàm handleStatsRequest sẽ nhận id (của mỗi image trong mảng images) và thực hiện các lệnh trong hàm
        }

    }
}