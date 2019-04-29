module.exports = (req, res, next) => {
    try {

        next()
    }catch (e) {
        console.log(e);
        res.status(400).json(e.message)
    }
};
