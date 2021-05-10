import { Injectable } from '@angular/core';
import {  HttpHeaders, HttpClient } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})


export class UserServiceService {
mytoken:any = null
  constructor(private http:HttpClient) { }



  register(body:any){
    return this.http.post('http://localhost:3000/api/register',body,httpOptions)
  }

  login(body:any){
    return this.http.post('http://localhost:3000/api/login',body,httpOptions)
  }

  getuser(){
    this.mytoken = localStorage.getItem('token')
    return this.http.get('http://localhost:3000/api/dashboard',{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth':this.mytoken
      })
    })
  }

  logout(){
    this.mytoken = localStorage.getItem('token')
    return this.http.get('http://localhost:3000/api/dashboard',{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth':this.mytoken
      })
    })
  }

  bookappointments(body:any){
    this.mytoken = localStorage.getItem('token')
    console.log(localStorage.getItem('token'))
    return this.http.post('http://localhost:3000/api/apppointments',body,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth': this.mytoken
      })
    })
  }


  getall(){
    this.mytoken = localStorage.getItem('token')
    return this.http.get('http://localhost:3000/api/administration',{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth': this.mytoken
      })
    })
  }
  getappem(){
    this.mytoken = localStorage.getItem('token')
    return this.http.get('http://localhost:3000/api/getapp',{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth': this.mytoken
      })
    })
  }

  deleteapp(id:any){
    this.mytoken = localStorage.getItem('token')
    return this.http.get(`http://localhost:3000/api/deleteapp/${id}`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth': this.mytoken 
      })
    })
  }

  editapp(id:any){
    this.mytoken = localStorage.getItem('token')
    return this.http.get(`http://localhost:3000/api/editapp/${id}`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth': this.mytoken
      })
    })
  }

    editvalue(body:any,id:any){
      // console.log(id)
      this.mytoken = localStorage.getItem('token')
      return this.http.post(`http://localhost:3000/api/editappointment/${id}`,body,{
        headers:new HttpHeaders({
          'Access-Control-Allow-Origin':'*',
          'content-type':'application/json',
          'auth': this.mytoken
        })
      })
    }

    cancelrequest(id:any){
      this.mytoken = localStorage.getItem('token')
      return this.http.get(`http://localhost:3000/api/cancel/${id}`,{
        headers:new HttpHeaders({
          'Access-Control-Allow-Origin':'*',
          'content-type':'application/json',
          'auth': this.mytoken
        })
      })
    }

    getallcancels(){
      this.mytoken = localStorage.getItem('token')
      // console.log("asche ekahne")
      return this.http.get(`http://localhost:3000/api/getcancels`,{
        headers:new HttpHeaders({
          'Access-Control-Allow-Origin':'*',
          'content-type':'application/json',
          'auth': this.mytoken
        })
      })
    }

    deleteformboth(id:any){
      this.mytoken = localStorage.getItem('token')
      return this.http.get(`http://localhost:3000/api/deleteall/${id}`,{
        headers:new HttpHeaders({
          'Access-Control-Allow-Origin':'*',
          'content-type':'application/json',
          'auth': this.mytoken 
        })
      })
    }


}
