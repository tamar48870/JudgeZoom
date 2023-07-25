import { Injectable } from '@angular/core';
import { RoleHolderDTO } from '../models/RoleHolder.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
   currentUser: RoleHolderDTO = new RoleHolderDTO();
  setCurrentUser(user: RoleHolderDTO) {
    this.currentUser = user;
  }
  
}
