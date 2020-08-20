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

        public DailyMessage GetByDate(string dateTime)
        {
            if (string.IsNullOrEmpty(dateTime))
                return null;

            var year = Convert.ToInt32(dateTime.Substring(0, 4));
            var month = Convert.ToInt32(dateTime.Substring(5, 2));
            var day = Convert.ToInt32(dateTime.Substring(8, 2));

            var date = new DateTime(year, month, day);

            return _dailyMessages.Find(dailyMessage => dailyMessage.Date == date).FirstOrDefault();
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
