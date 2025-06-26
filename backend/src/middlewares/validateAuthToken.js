import jsonwebtoken from "jsonwebtoken";
import {config} from "../config.js";

export const validateAuthToken = (allowedUserTypes = []) => 
{
    return(req,res,next) => {
        try {
            
            //1- Extract the token from the cookies
            const { AuthToken } = req.cookies;

            //2- If token doesn´t exists...
            if(!AuthToken)
            {
                res.json({message: "No auth token found, you must log in first."})
            }

            //3- Extract the info from the token
            const decoded = jsonwebtoken.verify(AuthToken, config.JWT.secret);

            //4- Verify if the rol is allowed to manipulate data.
            if(!allowedUserTypes.includes(decoded.userType))
            {
                return res.json({message: "Access denied"})
            }

            next();

        } catch {console.error();}
    }
}