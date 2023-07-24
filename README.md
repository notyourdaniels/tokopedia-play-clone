# Tokopedia Play Clone

A clone for Tokopedia Play Application for Generasi GIGIH 3.0.

## Routes Guide

### Video Routes

1. **GET /videos**

   Description: Fetch all videos with optional inclusion of products and comments.

   Query Parameters:
   - `includeProducts` (optional): Set to `true` to include associated products with each video.
   - `includeComments` (optional): Set to `true` to include associated comments with each video.

   Controller: `VideoController.getAllVideos`

2. **GET /videos/thumbnails**

   Description: Fetch a list of video thumbnails with limited details (excluding products and comments).

   Controller: `VideoController.getAllVideosThumbnail`

3. **GET /videos/:videoId**

   Description: Fetch a specific video by its ID with optional inclusion of products and comments.

   Parameters:
   - `videoId` (URL parameter): The ID of the video to fetch.

   Query Parameters:
   - `includeProducts` (optional): Set to `true` to include associated products with the video.
   - `includeComments` (optional): Set to `true` to include associated comments with the video.

   Controller: `VideoController.getVideoById`

4. **GET /videos/:videoId/thumbnail**

   Description: Fetch the thumbnail details of a specific video by its ID (excluding products and comments).

   Parameters:
   - `videoId` (URL parameter): The ID of the video to fetch.

   Controller: `VideoController.getVideoThumbnailById`

### Product Routes

1. **GET /products/:videoId**

   Description: Fetch all products from Video ID.

   Parameters:
   - `videoId` (URL parameter): The ID of the video to fetch product for.

   Controller: `ProductController.getAllProductLists`

### Comment Routes

1. **GET /videos/:videoId/comments**

   Description: Fetch all comments for a specific video.

   Parameters:
   - `videoId` (URL parameter): The ID of the video to fetch comments for.

   Controller: `CommentController.getAllComments`

2. **GET /videos/:videoId/comments/:commentId**

   Description: Fetch a specific comment for a specific video.

   Parameters:
   - `videoId` (URL parameter): The ID of the video that contains the comment.
   - `commentId` (URL parameter): The ID of the comment to fetch.

   Controller: `CommentController.getCommentById`

3. **POST /videos/:videoId/comments**

   Description: Add a new comment to a specific video.

   Parameters:
   - `videoId` (URL parameter): The ID of the video to add the comment to.

   Request Body:
   - `name`: The name of the commenter.
   - `comment`: The text of the comment.

   Controller: `CommentController.addComment`
