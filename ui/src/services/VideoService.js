class VideoService {
    static async getAllVideos() {
        const response = await fetch(`/api/v1/videos`)
        const json = await response.json()     
        return json.data
    }

    static async getVideoById(videoId) {
        const response = await fetch(`/api/v1/videos/${videoId}`)
        const json = await response.json()
        return json.data
    }
}

export default VideoService;