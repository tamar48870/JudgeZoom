using DAL.Enums;

namespace DAL
{
    public class RepresentativeDTO: RoleHolderDTO
    {
        public RepresentativeDTO()
        {
            
            this.Role = RoleEnum.Representative.Description();
            

        }
    }
}
