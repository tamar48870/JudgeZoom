using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.ComponentModel.DataAnnotations;
namespace DAL.Services
{
    public class ParticipantsDAL : IParticipantsDAL
    {
        List<RoleHolderDTO> RoleList= new List<RoleHolderDTO>();
        public ParticipantsDAL()
        {
            JudgeDTO judge = new JudgeDTO();
            judge.Name = "ג'ון";
            judge.ID = 1;

            RoleList.Add(judge);

            PartyDTO party = new PartyDTO();
            party.Name = "סמיט";
            party.ID = 2;

            RoleList.Add(party);

            RepresentativeDTO representative = new RepresentativeDTO();
            representative.Name = "נתן";
            representative.ID = 3;

            RoleList.Add(representative);


        }
        public List<RoleHolderDTO> GetAllParticipants()
        {
            return RoleList;    
        }
    }
}
