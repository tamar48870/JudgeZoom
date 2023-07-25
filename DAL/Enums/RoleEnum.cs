using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Enums
{
    public enum RoleEnum
    {

        [Display(Description = "שופט")]
        Judge = 1,
        [Display(Description = "צד")]
        Party = 2,
        [Display(Description = "מייצג")]
        Representative = 3

    }
}
