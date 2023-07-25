using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Enums;

namespace DAL
{
    public class PartyDTO: RoleHolderDTO
    {
        public PartyDTO()
        {
            this.Role = RoleEnum.Party.Description();
        }
    }
}
