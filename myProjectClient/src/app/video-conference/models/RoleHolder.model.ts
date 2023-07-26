import { ZoomDTO } from "src/app/shared/Models/ZoomDTO";
import { PermissinEnum } from "src/app/video-conference/enums/PermissinEnum";

export class RoleHolderDTO
{
    public id: number = 0;
    public role:number= 0
    public name :string= ''
    public MailAddress :string= ''
    public permission:PermissinEnum = PermissinEnum.User
    public muted: boolean = false
    public zoomHandler:ZoomDTO= new ZoomDTO();

}
