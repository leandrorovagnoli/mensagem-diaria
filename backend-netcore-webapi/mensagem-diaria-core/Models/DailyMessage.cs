using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.ComponentModel.DataAnnotations;

namespace mensagem_diaria_core.Models
{
    public class DailyMessage
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("author")]
        [MaxLength(60, ErrorMessage = "O {0} deve conter até {1} caracteres.")]
        [Display(Name = "Autor")]
        public string Author { get; set; } = "Desconhecido";

        [Required]
        [BsonElement("dailyMessage")]
        [StringLength(500, ErrorMessage = "A {0} deve conter entre {2} e {1} caracteres.", MinimumLength = 10)]
        [Display(Name = "Mensagem")]
        public string Message { get; set; }

        [Required]
        [BsonElement("dateMessage")]
        public DateTime Date { get; set; }
    }
}
