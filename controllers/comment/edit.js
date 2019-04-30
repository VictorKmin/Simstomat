const postgres = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const {id} = req.params;
        const CommentModel = postgres.getModel('Comment');
        let isPresent = await CommentModel.findByPk(id);
        console.log(isPresent);
        if (!isPresent) throw new Error('Comment not present');


        res.json('OK')
    }catch (e) {
        console.log(e);
        res.status(400).json(e.message)
    }
};
