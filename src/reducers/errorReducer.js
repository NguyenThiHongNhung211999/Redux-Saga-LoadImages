import { IMAGES } from '../constants'


const errorReducer = (state = null, action) => { // state ban đầu của error bằng null, khi ảnh LOAD và LOAD_SUCCESS thì trả state = null
    switch (action.type) {
        case IMAGES.LOAD_FAIL:
            return action.error;
        case IMAGES.LOAD:
        case IMAGES.LOAD_SUCCESS:
            return null;
        default:
            return state;
    }
}

export default errorReducer;