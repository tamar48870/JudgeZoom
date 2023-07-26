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

        [HttpDelete("{id}")]
        public void LeaveParticipant(int id)
        {
            //פנייה לBL
        }
    }
}
