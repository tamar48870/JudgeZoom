using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Enums
{
    //יצרתי enum קבוע ,כמובן שאם היה DB הייתי מגדירה טבלת קודים להרשאות
    public enum PermissionEnum
    {
        [Display(Description = "הרשאת מנהל")]
        Admin = 1,
        [Display(Description = "הרשאה כללית")]
        User = 2,
        
    }
}
