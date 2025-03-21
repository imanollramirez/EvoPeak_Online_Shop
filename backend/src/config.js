//Import the library 'dotenv', this helps us to access to .env (doc that contains privat information, such as bank - emails credentials). .env files doesn´t upload to .git.
import dotenv from "dotenv";

//Execute the library
dotenv.config();

export const config = {
    db: {
        URI: process.env.DB_URI || "mongodb+srv://German:GermanDanielImanol@clustera2.lgxpo.mongodb.net/"
    },
    server: {
        PORT: process.env.PORT
    }
}