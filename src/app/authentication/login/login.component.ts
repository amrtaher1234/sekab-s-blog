import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  constructor(private auth: AngularFireAuth) { }

  ngOnInit() {
  }
  login() {
    console.log(this.email , this.password);
    this.auth.auth.signInWithEmailAndPassword(this.email , this.password).then(d => {
      console.log(d);
    }).catch(err => {
      console.log(err);
    });
  }

}
