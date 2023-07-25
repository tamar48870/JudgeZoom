import { PermissinEnum } from "src/app/video-conference/enums/PermissinEnum";

export class RoleHolderDTO
{
    public Id: number = 0;
    public role:number= 0
    public  name :string= ''
    public  MailAddress :string= ''
    public permission:PermissinEnum = PermissinEnum.User

}
