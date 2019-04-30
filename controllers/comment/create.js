const postgres = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const {user, comment} = req.body;
        const CommentModel = postgres.getModel('Comment');
        await CommentModel.create({
            user_name: user,
            comment
        });
        const allComment = await CommentModel.findAll({});
        res.json(allComment)
    } catch (e) {
        console.log(e);
        res.status(400).json(e.message)
    }
};
