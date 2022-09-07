import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.status(401).json({
        status: '401',
        error: 'Unauthorized',
    });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.status(403).json({
            status: '403',
            error: 'Forbidden',           
        });
        req.user = user;
        next();
    });
};

export const generateAccessToken = (username) => {
    const token = jwt.sign({data: username}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "30s",
    });
    const refreshToken = jwt.sign({data: username}, process.env.REFRESH_TOKEN_SECRET, {
    })
    return {token, refreshToken}
}

export default authenticateToken;