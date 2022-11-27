import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  getUserDetails(){
    return this._http.get('http://localhost:3000/users');
  }

  saveuserInfo(obj :any){
    return this._http.post('http://localhost:3000/users',obj)
  }

  edituserInfo(id:any, obj:any){
    return this._http.put('http://localhost:3000/users/'+id,obj)
  }

  deleteUserInfo(id :any)
  {
    return this._http.delete('http://localhost:3000/users/'+id,)
  }
 
}
