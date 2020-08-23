using mensagem_diaria_core.Interfaces;
using mensagem_diaria_core.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;

namespace mensagem_diaria_core.Services
{
    public class DailyMessageService
    {
        private readonly IMongoCollection<DailyMessage> _dailyMessages;

        public DailyMessageService(IDailyMessageDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _dailyMessages = database.GetCollection<DailyMessage>(settings.DailyMessageCollectionName);
        }

        public List<DailyMessage> Get() =>
            _dailyMessages.Find(dailyMessage => true).ToList();

        public DailyMessage Get(string id) =>
            _dailyMessages.Find(dailyMessage => dailyMessage.Id == id).FirstOrDefault();

        public DailyMessage GetByDate(DateTime dateTime)
        {
            if (dateTime == null)
                return null;

            return _dailyMessages.Find(dailyMessage => dailyMessage.Date >= dateTime && dailyMessage.Date < dateTime.AddDays(1)).FirstOrDefault();
        }

        public DailyMessage Create(DailyMessage dailyMessage)
        {
            _dailyMessages.InsertOne(dailyMessage);
            return dailyMessage;
        }

        public void Update(string id, DailyMessage dailyMessageIn) =>
            _dailyMessages.ReplaceOne(dailyMessage => dailyMessage.Id == id, dailyMessageIn);

        public void Remove(DailyMessage dailyMessageIn) =>
            _dailyMessages.DeleteOne(dailyMessage => dailyMessage.Id == dailyMessageIn.Id);

        public void Remove(string id) =>
            _dailyMessages.DeleteOne(dailyMessage => dailyMessage.Id == id);
    }
}
