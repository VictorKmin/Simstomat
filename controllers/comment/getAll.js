const postgres = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const CommentModel = postgres.getModel('Comment');
        const allComment = await CommentModel.findAll({});
        res.json(allComment);
    }catch (e) {
        console.log(e);
        res.status(400).json(e.message)
    }
};
