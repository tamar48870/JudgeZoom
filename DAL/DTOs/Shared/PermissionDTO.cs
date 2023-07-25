using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.DTOs.Shared
{
    public class PermissionDTO
    {
        public PermissionDTO()
        {

            this.AdminActive = new PermissionResult();
        }

        public PermissionResult AdminActive  { get; set; }
    }
    public class PermissionResult
    {
        public PermissionResult()
        {
            this.Messages = new List<string>();

        }
        public bool Can
        {
            get
            {
                return this.Message == "";
            }
        }
        public string Message
        {
            get
            {
                return String.Join("\r\n", this.Messages.Where(x => x != ""));
            }

        }
        public List<string> Messages { get; set; }

    }
}
