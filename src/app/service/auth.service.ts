import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly HttpClient = inject(HttpClient)


  setRegisterForm(data:object):Observable<any>
  {
 return this.HttpClient.post("url",data)
  }
}
