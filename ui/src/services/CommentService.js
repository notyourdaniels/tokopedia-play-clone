class CommentService {
    static async getAllComments(videoId, orderBy) {
        const response = await fetch(`/api/v1/videos/${videoId}/comments?sort_by=createdAt&order=${orderBy}`)
        const json = await response.json()     
        return json.data
    }

    static async addComment(videoId, postedBy, text) {
        const response = await fetch(`/api/v1/videos/${videoId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ postedBy, text })
        })
        const json = await response.json()
        return json.data
    }
}

export default CommentService;