import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent implements OnInit {
bookingform = new FormGroup({
  date : new FormControl('',[Validators.required]),
  name : new FormControl('',[Validators.required]),
  email : new FormControl('',[Validators.required,Validators.email])
})
response:any = null
  constructor(private router:Router, private services : UserServiceService) { }
messege:any = null

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/login'])
    }
  }

  book(){
    console.log(this.bookingform.value)
    this.services.bookappointments(this.bookingform.value).subscribe(res=>{
      console.log(res);
      this.response = res
      this.messege = this.response.messege

      if(this.messege=='Appointment Booked'){
        setTimeout(() => {
          this.router.navigate(['/dashboard'])
        }, 3000);
      }
    })
  }

}
