const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;
module.exports = (req, res, next) => {
    try {
        const token = req.get('Authorization');
        if (!token) throw new Error('No token');

        jwt.verify(token, secret, (err, decoded) => {
            if (err) throw new Error(err.message);
            req.user = decoded;
        });

        next()
    } catch (e) {
        console.log(e);
        res.status(400).json(e.message)
    }
};
