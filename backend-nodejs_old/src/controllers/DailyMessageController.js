const DailyMessage = require('../models/DailyMessage')

module.exports = {
    async index(req, res) {
        const dailyMessages = await DailyMessage.find();
        return res.json(dailyMessages);
    },

    async getByDate(req, res) {
        const dateQuery = req.params.dateMessage != undefined ? req.params.dateMessage.substring(0, 10) : ''
        
        const dailyMessage = await DailyMessage.find(
            {
                dateMessage: dateQuery
            });

        return res.json(dailyMessage);
    },

    async store(req, res) {
        const { author, dailyMessage, dateMessage } = req.body;

        const dailyMessageDb = await DailyMessage.findOne({
            $and: [
                { $or: [{ dateMessage }, { dailyMessage }] },
            ]
        },
            function (err) {
                if (err)
                    return res.json({ message: 'Houve uma falha ao atualizar. Entre em contato com o desenvolvedor!', err: err })
            });

        if (!dailyMessageDb) {
            const newDailyMessage = {
                author,
                dailyMessage,
                dateMessage
            }

            const obj = await DailyMessage.create(newDailyMessage)
                .catch(function (err) {
                    return res.json({ message: 'Houve uma falha ao salvar. Entre em contato com o desenvolvedor!', err: err })
                })

            return res.json(obj);
        }

        return res.json({ message: 'Mensagem ou dia já existente!' })
    },

    async update(req, res) {
        const { author, dailyMessage, dateMessage } = req.body;

        const newDailyMessage = {
            $set: {
                author,
                dailyMessage,
                dateMessage
            }
        }

        const dailyMessageUpdated = await DailyMessage.findByIdAndUpdate({ _id: req.params.id }, newDailyMessage,
            function (err) {
                if (err)
                    return res.json({ message: 'Houve uma falha ao atualizar. Entre em contato com o desenvolvedor!', err: err })
            });

        return res.json(dailyMessageUpdated);

    },

    async deleteByDate(req, res) {
        await DailyMessage.findOneAndDelete({ dateMessage: req.params.dateMessage })
            .then(messageDeleted => {
                if (messageDeleted)
                    return res.json({ message: 'Mensagem removida com sucesso!' })
                else
                    return res.json({ message: 'Mensagem não encontrada!' })
            })
            .catch(err => {
                return res.json({ message: 'Houve uma falha ao remover. Entre em contato com o desenvolvedor!', err: err })
            })
    },

    async deleteById(req, res) {
        await DailyMessage.findByIdAndDelete(req.params.id)
            .then(messageDeleted => {
                if (messageDeleted)
                    return res.json({ message: 'Mensagem removida com sucesso!' })
                else
                    return res.json({ message: 'Mensagem não encontrada!' })
            })
            .catch(err => {
                return res.json({ message: 'Houve uma falha ao remover. Entre em contato com o desenvolvedor!', err: err })
            })
    }
}