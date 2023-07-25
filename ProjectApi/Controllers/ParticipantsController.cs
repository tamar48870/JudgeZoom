using BL;
using DAL;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProjectApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParticipantsController : ControllerBase
    {
        IParticipantsBL _participantsBL;
        public ParticipantsController(IParticipantsBL participantsBL)
        {
            _participantsBL=participantsBL;
        }
        // GET: api/<ParticipantsController>
        [HttpGet]
        public List<RoleHolderDTO> Get()
        {
            return _participantsBL.GetAllParticipants();

        }

        // GET api/<ParticipantsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ParticipantsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ParticipantsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ParticipantsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
