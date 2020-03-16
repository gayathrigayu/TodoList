import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: AppService , private router: Router) { }

  public userName: string;
  public password: string;
  public idrequired : boolean = false;
  public namerequired : boolean = false;

  ngOnInit() {
  }

  onSubmit() {
    if(!this.userName){
      this.idrequired = true;
    }
    if(!this.password){
      this.namerequired = true;
    }


    if(this.userName && this.password) {
      this.idrequired = false;
      this.namerequired = false;

      let data : any = {};
      data.name = this.userName;
      data.apiKey = environment.apiKey;
      this.service.post(environment.loginApi, data).subscribe((response : any) => {
        localStorage.setItem('access_token', "Bearer "+response.token.token);
        localStorage.setItem('user-name', this.userName);
        this.router.navigate(['create-task']);
      });
    }
  }

}
