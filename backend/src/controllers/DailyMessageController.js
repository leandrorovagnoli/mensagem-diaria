const DailyMessage = require('../models/DailyMessage')

module.exports = {
    async index(req, res) {
        const dailyMessage = await DailyMessage.find();
        return res.json(dailyMessage);
    },

    async getByDate(req, res) {
        const dailyMessage = await DailyMessage.find({ dateMessage: req.params.dateMessage });
        return res.json(dailyMessage);
    },

    async store(req, res) {
        const { author, dailyMessage, dateMessage } = req.body;

        const dailyMessageDb = await DailyMessage.findOne({
            $and: [
                { $or: [{ dateMessage }, { dailyMessage }] },
            ]
        },
            function (err, obj) {
                if (err)
                    return res.json({ message: 'Houve uma falha ao atualizar. Entre em contato com o desenvolvedor!', err: err })
            });

        if (!dailyMessageDb) {
            const newDailyMessage = {
                author,
                dailyMessage,
                dateMessage
            }

            await DailyMessage.create(newDailyMessage,
                function (err, obj) {
                    if (err)
                        return res.json({ message: 'Houve uma falha ao atualizar. Entre em contato com o desenvolvedor!', err: err })
                });

            return res.json({ message: 'Pensamento matinal criado com sucesso!' })
        }

        return res.json({ message: 'Pensamento matinal já existente!' })
    },

    async updateByDate(req, res) {
        const { author, dailyMessage, dateMessage } = req.body;

        const dailyMessageDb = await DailyMessage.findOne({ dateMessage: req.params.dateMessage },
            function (err, obj) {
                if (err)
                    return res.json({ message: 'Houve uma falha ao atualizar. Entre em contato com o desenvolvedor!', err: err })
            });

        if (dailyMessageDb) {
            const newDailyMessage = {
                $set: {
                    author,
                    dailyMessage,
                    dateMessage
                }
            }

            await DailyMessage.updateOne(dailyMessageDb, newDailyMessage,
                function (err, obj) {
                    if (err)
                        return res.json({ message: 'Houve uma falha ao atualizar. Entre em contato com o desenvolvedor!', err: err })
                });

            return res.json({ message: 'Pensamento matinal atualizado com sucesso!' })
        }

        return res.json({ message: 'Pensamento matinal não encontrado!' })
    },

    async deleteByDate(req, res) {
        await DailyMessage.findOneAndDelete({ dateMessage: req.params.dateMessage })
            .then(messageDeleted => {
                if (messageDeleted)
                    return res.json({ message: 'Pensamento removido com sucesso!' })
                else
                    return res.json({ message: 'Pensamento matinal não encontrado!' })
            })
            .catch(err => {
                return res.json({ message: 'Houve uma falha ao remover. Entre em contato com o desenvolvedor!', err: err })
            })
    },

    async deleteById(req, res) {
        if (req.params.id) //delete by id
        {
            await DailyMessage.findByIdAndDelete(req.params.id)
                .then(messageDeleted => {
                    if (messageDeleted)
                        return res.json({ message: 'Pensamento removido com sucesso!' })
                    else
                        return res.json({ message: 'Pensamento matinal não encontrado!' })
                })
                .catch(err => {
                    return res.json({ message: 'Houve uma falha ao remover. Entre em contato com o desenvolvedor!', err: err })
                })
        }
        else // delete by date
        {

        }

    }
}