﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mensagem_diaria_core.Interfaces
{
    public interface IDailyMessageDatabaseSettings
    {
        string DailyMessageCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
