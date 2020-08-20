using mensagem_diaria_core.Interfaces;
using mensagem_diaria_core.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;

namespace mensagem_diaria_core.Data
{
    public class SeedingService
    {
        private readonly IMongoCollection<DailyMessage> _dailyMessages;

        public SeedingService(IDailyMessageDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _dailyMessages = database.GetCollection<DailyMessage>(settings.DailyMessageCollectionName);
        }

        public async void Seed()
        {
            if (_dailyMessages.Find(dailyMessage => true).Any())
                return;

            IList<DailyMessage> dailyMessages = new List<DailyMessage>();

            var dailyMessage1 = new DailyMessage()
            {
                Author = "Leandro Rovagnoli",
                Date = DateTime.UtcNow,
                Message = "Quando te vi peguei um burro e fugi, de saudade não aguentei, peguei um jegue e voltei."
            };

            var dailyMessage2 = new DailyMessage()
            {
                Author = "Larry Page - Google",
                Date = DateTime.UtcNow.AddDays(1),
                Message = "Sempre entregue mais do que o esperado."
            };

            var dailyMessage3 = new DailyMessage()
            {
                Author = "D. Blocher",
                Date = DateTime.UtcNow.AddDays(2),
                Message = "Aprender não é um esporte para espectadores."
            };

            dailyMessages.Add(dailyMessage1);
            dailyMessages.Add(dailyMessage2);
            dailyMessages.Add(dailyMessage3);

            await _dailyMessages.InsertManyAsync(dailyMessages);
        }
    }
}
