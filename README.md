# Tokopedia Play Clone

This repository contains a backend server implementation for a video platform, inspired by Tokopedia Play for Generasi GIGIH 3.0. It allows users to interact with videos, comments, and products associated with the videos.

## Database Structure

The application uses MongoDB as the database to store the data. There are two main collections: `videos` and `products`.

### Video Collection

The `videos` collection stores video-related information. The schema for the `videos` collection is as follows:

```javascript
{
    imgUrl: String,     // Image Thumbnail URL for the video
    videoUrl: String,   // Video URL
    title: String,      // Title of the video
    uploader: String,   // Uploader of the video
    products: [         // Array of ObjectIds referencing products associated with the video
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products'
        }
    ],
    comments: [         // Array of comments associated with the video
        {
            postedBy: String,   // Username of the commenter
            timestamp: Date,    // Timestamp of the comment
            text: String        // Content of the comment
        }
    ]
}
```

### Product Collection

The `products` collection stores product-related information. The schema for the `products` collection is as follows:

```javascript
{
    productLink: String,   // Image Thumbnail URL for the product
    title: String,         // Title of the product
    price: Number          // Price of the product
}
```

## API Structure

The API follows RESTful principles for handling different entities: videos, comments, and products. The base URL for the API is `/api/v1`.

### API Endpoints

1. Videos:

   - `GET /api/v1/videos`: Get a list of all videos.
   - `GET /api/v1/videos/thumbnails`: Get a list of video thumbnails (with limited information).
   - `GET /api/v1/videos/:videoId`: Get details of a specific video by its ID.
   - `GET /api/v1/videos/:videoId/thumbnail`: Get thumbnail details of a specific video by its ID.

2. Comments:

   - `GET /api/v1/videos/:videoId/comments`: Get all comments associated with a specific video.
   - `GET /api/v1/videos/:videoId/comments/:commentId`: Get details of a specific comment by its ID.
   - `POST /api/v1/videos/:videoId/comments`: Add a new comment to a specific video.

3. Products:

   - `GET /api/v1/videos/:videoId/products`: Get all products associated with a specific video.

## API Request and Response

For a detailed API request and response documentation, please refer to the [following Gists](https://gist.github.com/notyourdaniels/07102caaf139414c663b95269a101f0b): 
https://gist.github.com/notyourdaniels/07102caaf139414c663b95269a101f0b
