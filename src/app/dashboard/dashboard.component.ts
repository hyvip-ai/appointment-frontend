import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service:UserServiceService,private router:Router) { }
  email:any = null
  username:any = null
  response:any = null
  resmsg:any = null
  ngOnInit(): void {
    this.service.getuser().subscribe(res=>{
      this.response = res
      // console.log(response)
      this.email = this.response.email;
      this.username = this.response.username;
      localStorage.setItem('loggedinemail',this.email);
    },err=>this.router.navigate(['/login']))
  }

  logOut(){
    localStorage.removeItem('token')
    this.service.logout().subscribe(res=>{
      this.resmsg = res
      localStorage.setItem('logout',this.resmsg.messege)
    })
    this.router.navigate(['/login'])
  }
  gobook(){
    this.router.navigate(['/booking'])
  }




}
