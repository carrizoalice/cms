import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'libs/admin/src/environment/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit{
  form: FormGroup
  constructor(public fb: FormBuilder) {
   
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      email: [],
      password:[]
    });
  }


}
