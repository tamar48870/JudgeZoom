import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, map, mergeMap, of, take } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RoleHolderDTO } from '../models/RoleHolder.model';


@Injectable({
  providedIn: 'root'
})
export class ParticipantsResolverService {
 apiUrl="https://localhost:7245/api/";
  constructor(private http: HttpClient) { }
  resolve(): Observable<RoleHolderDTO[]>  {
  
    return this.http.get<RoleHolderDTO[]>(this.apiUrl+"Participants")
    .pipe(map(res => <RoleHolderDTO[]>res));
  }
}
