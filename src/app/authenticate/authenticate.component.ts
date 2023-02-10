import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  Signup=true;
  errorMsg ='';
  error=false;
  success=false;
  isLoading=false  
  constructor(private authServices:AuthService) { }

  ngOnInit(): void {
  }
  formAdd(addForm:NgForm){
    const email=addForm.value.email;
    const password=addForm.value.password;
    addForm.reset();
    this.isLoading=true
    this.authServices.signingUp(email,password).subscribe(responseData=>{
      console.log(responseData);
      this.success=true;
      this.error=false;
      this.isLoading=false

    },
    errorMessage =>{
      this.error=true;
      this.success=false;
      this.errorMsg=errorMessage;
      this.isLoading=false
      
    }
    )


}
changeMode(){
  this.Signup=!this.Signup;
}

}
