using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Enums;

namespace DAL
{
    public class RoleHolderDTO
    {
        public RoleHolderDTO()
        {
            this.permission = PermissionEnum.User;
        }
        public int ID { get; set; }
        public string Role { get; set; }
        public string Name { get; set; }
        public string MailAddress { get; set; }
        public PermissionEnum permission { get; set; } //בSQL הייתי עושה טבלת Permission שמקושרת לRoleHolderDTO באמצעות  forieghn key 




    }
}
