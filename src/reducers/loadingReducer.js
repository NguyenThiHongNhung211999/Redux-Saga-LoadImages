import { IMAGES } from '../constants';

const loadingReducer = (state = { page: 1, isLoading: false }, action) => {
    switch (action.type) {
        case IMAGES.LOAD:
            console.log('acion', action);
            return action;
        case IMAGES.LOAD_SUCCESS:
            return state;
        case IMAGES.LOAD_FAIL:
            return state;
        default:
            return state;
    }
};

export default loadingReducer;
