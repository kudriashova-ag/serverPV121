import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const verifyToken = jwt.verify(token, 'Random');
        req.user = verifyToken;
        console.log(verifyToken);
        next();
    }
    catch { 
        res.status(400).json({
            status: 'error',
            message: 'Invalid Token'
        });
    }
}

export default auth;