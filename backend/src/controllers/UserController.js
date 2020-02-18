const User = require('../models/User')

module.exports = {
    async userTokenStore(req, res) {
        const { token } = req.body;

        const userDb = await User.findOne({ token })

        if (userDb)
            return userDb;

        const newUser = {
            token
        }

        const obj = await User.create(newUser)
            .catch(function (err) {
                return res.json({ message: 'Houve uma falha ao atualizar. Entre em contato com o desenvolvedor!', err: err })
            })

        return res.json(obj);
    }
}