using mensagem_diaria_core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mensagem_diaria_core.Models
{
    public class DailyMessageDatabaseSettings : IDailyMessageDatabaseSettings
    {
        public string DailyMessageCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
