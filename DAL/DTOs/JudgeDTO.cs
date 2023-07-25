using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Enums;

namespace DAL
{
    public class JudgeDTO: RoleHolderDTO
    {
        public JudgeDTO()
        {
            this.Role = RoleEnum.Judge.Description();

        }
    }
}
