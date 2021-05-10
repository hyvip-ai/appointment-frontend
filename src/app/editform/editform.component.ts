import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {

  constructor(private service:UserServiceService,private activatedroute:ActivatedRoute,private router:Router) { }
editid:any = null
mydata:any = null
mymsg:any = null
editform = new FormGroup({
  name : new FormControl('',Validators.required),
  email:new FormControl('',[Validators.required,Validators.email]),
  date:new FormControl('',Validators.required)
})
  ngOnInit(): void {
    this.editid = this.activatedroute.snapshot.params.id
    // console.log(this.activatedroute.snapshot.params.id)

    this.service.editapp(this.editid).subscribe(res=>{
      // console.log(res)
      this.mydata = res
      this.editform.setValue({
        name:this.mydata.appointment[0].name,
        email:this.mydata.appointment[0].email,
        date:this.mydata.appointment[0].date
      })
   
      // console.log()
    },err=>this.router.navigate(['/login']))


  }

  edit(){
    // console.log(this.editform.value)
    this.service.editvalue(this.editform.value,this.editid).subscribe(res=>{
      // console.log(res)
      this.mymsg = res
      setTimeout(() => {
        if(this.mymsg.messege=='Appointment Booked'){
          this.router.navigate(['/dashboard'])
        }
        
      }, 3000);
    })
    
  }

  cancel(){
  this.router.navigate(['/dashboard'])
  }
}
