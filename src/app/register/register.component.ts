import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   registrationForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
    username : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(4)])
  })
  response:any = null
  constructor(private router:Router, private services:UserServiceService) { }

  ngOnInit(): void {
  }
  messege:any=null
  register(){
    console.log(this.registrationForm.value)
    this.services.register(this.registrationForm.value).subscribe(res=>{
      this.response = res
      console.log(this.response)

      localStorage.setItem('registermessege',this.response.messege)
      this.messege = this.response.messege;

      setTimeout(() => {
      this.messege = null;
        if(this.response.messege=='Registration successful,Redirectiong to login page')
        this.router.navigate(['/login'])
      }, 4000);
    })
  }
  goLogin(){
    this.router.navigate(['/login'])
  }

}
