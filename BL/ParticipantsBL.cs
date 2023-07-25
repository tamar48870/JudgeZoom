using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DAL.Services;

namespace BL
{
    public class ParticipantsBL : IParticipantsBL
    {
        IParticipantsDAL _participantsDAL;
        public ParticipantsBL(IParticipantsDAL participantsDAL)
        {
            this._participantsDAL= participantsDAL;
        }
        public List<RoleHolderDTO> GetAllParticipants()
        {
          return _participantsDAL.GetAllParticipants();
        }

        public void MuteAll(RoleHolderDTO role)
        {
            throw new NotImplementedException();
        }

        public void MuteMe(int muteRollId)
        {
            throw new NotImplementedException();
        }

        public void MuteRole(RoleHolderDTO role, int muteRollId)
        {
            throw new NotImplementedException();
        }
    }
}
