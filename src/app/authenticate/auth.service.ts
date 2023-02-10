import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  signingUp(email:string, password:string){
     return this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDgPCYTjg_OanbZ2pToMahI8WlSYl6pEDg',{
     email:email,
     password:password,
     returnSecureTaken:true,
    }).pipe(catchError(resError =>{
   let errorMessage='An unknown error occured!';
   if(resError.error.error.message =='EMAIL EXISTS'){
    errorMessage='This email exists alerady';

   }
   return throwError(errorMessage);
    }))

  }
  
}
