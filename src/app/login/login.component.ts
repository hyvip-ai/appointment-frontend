import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response:any = null
  loginForm = new FormGroup({
    email:new FormControl('',Validators.required),
    
    password:new FormControl('',[Validators.required,Validators.minLength(4)])
  })
  constructor(private router:Router,private service:UserServiceService) { }
  messege:any=null
  ngOnInit(): void {
    this.messege = localStorage.getItem('logout')
    setTimeout(() => {
      this.messege = null
    }, 3000);

  }
  login(){
    // console.log(this.loginForm.value)
    this.service.login(this.loginForm.value).subscribe(res=>{
      this.response = res
      // console.log(this.response)
      localStorage.setItem('loginmessege',this.response.messege)
      localStorage.setItem('token',this.response.token)
      this.messege = this.response.messege
      setTimeout(() => {
        if(this.messege=='Login Success'){
          this.router.navigate(['/dashboard'])
        }
        this.messege = null
     
      }, 4000);
    })
  }
  goregister(){
    this.router.navigate(['/register'])
  }

}
