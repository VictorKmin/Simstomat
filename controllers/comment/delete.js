const postgres = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const {id} = req.params;
        const CommentModel = postgres.getModel('Comment');
        let isPresent = await CommentModel.findByPk(id);
        console.log(isPresent);
        if (!isPresent) throw new Error('Comment not present');
        await CommentModel.destroy({
            where: {id}
        });
        const allComment = await CommentModel.findAll({});
        res.json(allComment);
    } catch (e) {
        console.log(e);
        res.status(400).json(e.message)
    }
};
