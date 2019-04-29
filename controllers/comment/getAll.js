module.exports = (req, res) => {
    try {

        res.json('OK')
    }catch (e) {
        console.log(e);
        res.status(400).json(e.message)
    }
};
