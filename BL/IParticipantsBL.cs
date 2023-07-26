using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace BL
{
    public interface IParticipantsBL
    {
     List<RoleHolderDTO> GetAllParticipants();
     void MuteAll(RoleHolderDTO role);
    void MuteRole(RoleHolderDTO role,int muteRollId);
    void MuteMe(int muteRollId);
     void LeaveParticipant(int id);


    }
}
