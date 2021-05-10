import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-mineappointments',
  templateUrl: './mineappointments.component.html',
  styleUrls: ['./mineappointments.component.css']
})
export class MineappointmentsComponent implements OnInit {

  constructor(private services:UserServiceService,private router:Router) { }
appointments:any = null
  ngOnInit(): void {
    this.services.getappem().subscribe(res=>{
      this.appointments = res
      // console.log(this.appointments)
    })
  }
  mydata:any = null

  editapp(id:any){
    // localStorage.setItem('edittoken',id);
    this.router.navigate([ `/editform/${id}`])
    
  }
  cancel(id:any){
    
    this.services.cancelrequest(id).subscribe(res=>{
      console.log(res)
      this.mydata = res
     alert(this.mydata.messege)
    })

  }
  senddata(){
    return this.mydata
  }

}
