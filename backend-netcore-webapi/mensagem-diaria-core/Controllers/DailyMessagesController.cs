using mensagem_diaria_core.Models;
using mensagem_diaria_core.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace mensagem_diaria_core.Controllers
{
    [Route("v1/[controller]")]
    [ApiController]
    public class DailyMessagesController : ControllerBase
    {
        private readonly DailyMessageService _dailyMessageService;

        public DailyMessagesController(DailyMessageService dailyMessageService)
        {
            _dailyMessageService = dailyMessageService;
        }

        [HttpGet]
        public ActionResult<List<DailyMessage>> Get() =>
            _dailyMessageService.Get();

        [HttpGet("{id:length(24)}", Name = "GetDailyMessage")]
        public ActionResult<DailyMessage> Get(string id)
        {
            var dailyMessage = _dailyMessageService.Get(id);

            if (dailyMessage == null)
            {
                return NotFound();
            }

            return dailyMessage;
        }

        [HttpGet("{dateTime:length(10)}", Name = "GetDailyMessageByDate")]
        public ActionResult<DailyMessage> GetByDate(DateTime dateTime)
        {
            var dailyMessage = _dailyMessageService.GetByDate(dateTime);

            if (dailyMessage == null)
            {
                return NotFound();
            }

            return dailyMessage;
        }

        [HttpPost]
        public ActionResult<DailyMessage> Create([FromBody] DailyMessage dailyMessage)
        {
            if (dailyMessage == null)
                return BadRequest();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _dailyMessageService.Create(dailyMessage);

            return CreatedAtRoute("dailyMessageCreated", new { id = dailyMessage.Id.ToString() }, dailyMessage);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, DailyMessage dailyMessageIn)
        {
            var dailyMessage = _dailyMessageService.Get(id);

            if (dailyMessage == null)
            {
                return NotFound();
            }

            dailyMessageIn.Id = id;

            _dailyMessageService.Update(id, dailyMessageIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var dailyMessage = _dailyMessageService.Get(id);

            if (dailyMessage == null)
            {
                return NotFound();
            }

            _dailyMessageService.Remove(dailyMessage.Id);

            return NoContent();
        }

        [HttpDelete("{dateTime:length(10)}")]
        public IActionResult DeleteByDate(DateTime dateTime)
        {
            var dailyMessage = _dailyMessageService.GetByDate(dateTime);

            if (dailyMessage == null)
            {
                return NotFound();
            }

            _dailyMessageService.Remove(dailyMessage.Id);

            return NoContent();
        }
    }
}