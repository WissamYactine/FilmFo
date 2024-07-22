import jwt from 'jsonwebtoken';
// import { jwtDecode } from 'jwt-decode';

import dotenv from 'dotenv';

dotenv.config();

// 1-  TRY TO USE JWT.DECODE FOR USER ID => EDIT INTERCEPTOR IN CLIENT -> API -> INDEX
// 2- FIND A MORE RELIABLE WAY TO CHECK CUSTOMAUTH

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        // SHOULD FIND A MORE RELIABLE WAY TO CHECK CUSTOMAUTH!
        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.JWT_SECRET);

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        console.log(error)
    }
}

export default auth;