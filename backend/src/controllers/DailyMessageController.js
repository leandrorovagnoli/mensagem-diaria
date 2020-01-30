const DailyMessage = require('../models/DailyMessage')

module.exports = {
    async index(req, res) {
        const dailyMessage = await DailyMessage.find();
        return res.json(dailyMessage);
    },

    async store(req, res) {
        const { author, message, day } = req.body;

        const dailyMessageDb = await DailyMessage.findOne({
            $and: [
                { $or: [{ day }, { message }] },
            ]
        });

        if (!dailyMessageDb) {
            const newDailyMessage = {
                author,
                message,
                day
            }

            await DailyMessage.create(newDailyMessage);
            return res.json({ message: 'Pensamento matinal criado com sucesso!' })
        }

        return res.json({ message: 'Pensamento matinal já existente!' })
    },

    async update(req, res) {
        const { author, message, day } = req.body;

        const dailyMessageDb = await DailyMessage.findOne({ day })

        if (dailyMessageDb) {
            const newDailyMessage = {
                $set: {
                    author,
                    message
                }
            }

            await DailyMessage.updateOne(dailyMessageDb, newDailyMessage);
            return res.json({ message: 'Pensamento matinal atualizado com sucesso!' })
        }

        return res.json({ message: 'Pensamento matinal não encontrado!' })
    },

    async delete(req, res) {
        const { day } = req.body;
        const dailyMessageDb = await DailyMessage.findOne({ day });
        
        if (dailyMessageDb) {
            await DailyMessage.deleteOne(dailyMessageDb);
            return res.json({ message: 'Pensamento removido com sucesso!' })
        }

        return res.json({ message: 'Pensamento matinal não encontrado!' })
    }
}