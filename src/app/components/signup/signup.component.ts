import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm !: FormGroup;
  constructor(private FormBuilder:FormBuilder, private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.signupForm = this.FormBuilder.group({
      name: [''],
      emailAddress: [''],
      password: ['']
    });
  }
  signUp() {
    this.http.post<any>('http://localhost:3000/signupUsers/', this.signupForm.value).subscribe(res => {
      alert("SignUp Successfully")
      this.signupForm.reset();
      this.router.navigate(['/login']);
    }, err => {
       alert('Something went wrong try again later');
    });
  }
}
