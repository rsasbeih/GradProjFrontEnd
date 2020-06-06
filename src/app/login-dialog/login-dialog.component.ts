import { Component, OnInit,Inject } from '@angular/core';
import { ApiService } from '../api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CurrentUserService} from '../current-user.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  constructor(private apiService: ApiService,public dialogRef: MatDialogRef<LoginDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private currentUserSerivce:CurrentUserService) { }
  username:string="";
  password:string="";
  email:string=""
  users:any[];
  isUser=false;
  name:string;
  notAUser=false;
  message:any;
  ngOnInit() {
		this.apiService.login().subscribe((data: any[])=>{  
			console.log(data);  
      this.users = data;  
      
    })  
    this.isUser=false;
    this.currentUserSerivce.currentMessage.subscribe(message => this.message = message);
	}
  loginFormActive=true;
  registerFormActive=false;
  showLogin(){
    this.loginFormActive=true;
    this.registerFormActive=false;
  }
  showRegister(){
    this.loginFormActive=false;
    this.registerFormActive=true;
  }
  checkLogin(){
    for(let user of this.users){
      console.log(user);
      if(user.username===this.username&&user.password===this.password){
      this.isUser=true;
      this.notAUser=false;
      this.name=user.username;
      console.log(user);
      this.currentUserSerivce.changeMessage(user);
      this.dialogRef.close(this.name);
      break;
    }
    }
    this.notAUser=true;
  }
  register(){
    const randomId='_' + Math.random().toString(36).substr(2, 9);
    this.apiService.register(
      {
        "id": randomId,
        "username": this.username,
        "password": this.password,
        "email": this.email
    }
    ).subscribe((data: any[])=>{  
      {}
    }) 
    let user:any=null;
    this.apiService.getById(randomId).subscribe((data: any)=>{  
			user=data;    
    });
    this.isUser=true;
    this.notAUser=false;
    this.name=this.username;
    this.currentUserSerivce.changeMessage(user);
    this.dialogRef.close(this.name);
  }
}
