# Tokopedia Play Clone

This repository contains a backend and frontend server implementation for a video platform, inspired by Tokopedia Play for Generasi GIGIH 3.0. It uses MERN Stack (MongoDB, Express, ReactJS, Node.JS) with socket.io for real-time comment fetching. The UI uses chakra UI library.

[Website Link:](https://tokopedia-play-clone-395917.et.r.appspot.com/) https://tokopedia-play-clone-395917.et.r.appspot.com/

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

# How to Run Tokopedia Play Clone App (Production)

To run the Tokopedia Play Clone app on another machine, follow these steps:

## Prerequisites

Before proceeding, ensure that you have the following installed on your machine:

1. Node.js (https://nodejs.org/en/download/)
2. MongoDB (https://docs.mongodb.com/manual/installation/)
3. MongoDB Database Tools (https://www.mongodb.com/try/download/database-tools)

## Clone the Repository

1. Clone this repository to your local machine.
2. Navigate to the project root directory.

## Install Dependencies

1. Open a terminal or command prompt.
2. Change directory to the project root folder.
3. Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

## Restore the Database

1. Navigate to the "db-backup/tokopedia-play-clone/" folder in the project directory.
2. Restore the MongoDB database using the MongoDB `mongorestore` command. Replace `<path_to_mongorestore>` with the path to the `mongorestore` executable on your system.

   ```bash
   mongorestore --db tokopedia-play-clone <path_to_mongorestore>
   ```

## Configure the App

1. Create the `.env` file in the directory `production`. Make sure the port and mongodb connection are right, such as `PORT`, `WEB_PORT`, and `MONGO_URI` The default `PORT`and `WEB_PORT` is 80.
   
   ```shell
      "PORT": YOURSERVERPORT
      "WEB_PORT": YOURFRONTENDPORT
      "MONGO_URI": YOURMONGODBURI
   ```

## Start the App

1. In the terminal or command prompt, navigate to directory of `production`.
2. Start the app using the following command:

   ```bash
   npm start
   ```

   The app should now be running on the specified port (default is 80).

