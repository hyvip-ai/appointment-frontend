import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-cancelrequest',
  templateUrl: './cancelrequest.component.html',
  styleUrls: ['./cancelrequest.component.css']
})
export class CancelrequestComponent implements OnInit {

  constructor(private servec:UserServiceService,private router:Router) { }
  mydata:any = null
  mymsg:any = null
  ngOnInit(): void {
    // console.log('cholche ng on it')
    this.servec.getallcancels().subscribe(res=>{
      // console.log(res)
      this.mydata = res
    },err=>this.router.navigate(['/login']))
  }

  deleteit(id:any){
    console.log(id)
    this.servec.deleteformboth(id).subscribe(res=>{
      console.log(res);
      this.mymsg = res
    })
    // alert(this.mymsg.messege)

  }
  goaddm(){
    this.router.navigate(['/administration'])
  }

}
