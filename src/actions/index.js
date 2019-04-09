import { IMAGES, STATS } from '../constants';

const loadImages = page => ({
    type: IMAGES.LOAD,
    page,
});

const setImages = images => ({
    type: IMAGES.LOAD_SUCCESS, //IMAGES_LOAD_SUCCESS
    images,
});

const setError = error => ({
    type: IMAGES.LOAD_FAIL, //IMAGES_LOAD_FAIL'
    error,
});

const loadImagesStats = id => ({
    type: STATS.LOAD,
    id,
});

const setImagesStats = (id, downloads) => ({
    type: STATS.LOAD_SUCCESS,
    id,
    downloads,
});

const setImagesStatsError = id => ({
    type: STATS.LOAD_FAIL,
    id,
});

export {
    loadImages,
    setImages,
    setError,
    loadImagesStats,
    setImagesStats,
    setImagesStatsError,
};
