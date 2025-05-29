//Import the library 'dotenv', this helps us to access to .env (doc that contains privat information, such as bank - emails credentials). .env files doesn´t upload to .git.
import dotenv from "dotenv";

//Execute the library
dotenv.config();

export const config = {
    db: {
        URI: process.env.DB_URI
    },
    server: {
        PORT: process.env.PORT
    },
  cloudinary: {
    cloudinary_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  }
}