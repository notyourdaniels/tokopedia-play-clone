class ProductService {
    static async getAllProductLists(videoId) {
        const response = await fetch(`/api/v1/videos/${videoId}/products`)
        const json = await response.json()     
        return json.data
    }
}

export default ProductService;