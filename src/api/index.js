const KEY = '?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02&per_page=28'
const URL = `https://api.unsplash.com/photos/`

const fetchImages = async mix => {  //mix - là tham số truyền vào cho hàm async (được gọi từ saga thông qua hàm select)
    const response = await fetch(`${URL}${KEY}&per_page=&page=${mix}`)  // fetch() lấy dữ liệu trên server về, response là 1 cục dữ liệu chưa đc phân tách rõ ràng
    // console.log('res', response)
    const data = await response.json() // response.json() => .json() để mã hóa response thành các obj
    // console.log('data', data)
    if (response.status >= 400) {
        throw new Error(data.errors)
    }
    return data  // data lúc này trở thành 1 mảng có chưa 10 obj
}

const fetchImagesStats = async id => {
    const response = await fetch(`${URL}/${id}/statistics${KEY}`)

    const data = await response.json()
    if (response.status >= 400) {
        throw new Error(data.errors)
    }
    return data
}
// console.log('fetchImages', fetchImages(), fetchImagesStats())

export { fetchImages, fetchImagesStats }