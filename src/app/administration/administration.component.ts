import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  allappointments:any = 'null'
  alertmsg:any = null
  constructor(private services:UserServiceService,private router:Router) { }

  ngOnInit(): void {
    this.services.getall().subscribe(res=>{
      this.allappointments = res
      // console.log(this.allappointments)
    },err=>{
      this.router.navigate(['/login'])
    })

  }
  godash(){
    this.router.navigate(['/dashboard']);
  }
  printid(id:any){
      this.services.deleteapp(id).subscribe(resmsg=>{
        this.alertmsg = resmsg
        this.services.getall().subscribe(res=>{
          this.allappointments = res
          alert(this.alertmsg.messege)
        
        })
     

      })
  }
  gocancel(){
    this.router.navigate(['/administration/cancel'])
  }

}
