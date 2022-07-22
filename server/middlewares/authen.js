import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(authHeader);
    if(token == null) return res.status(401).json({
        status: '401',
        error: 'Unauthorized',
    });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

export const generateAccessToken = (username) => {
    return jwt.sign({data: username}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "60s",
    });
}

export default authenticateToken;