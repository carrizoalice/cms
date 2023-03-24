import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit{
  form: FormGroup
  constructor(public fb: FormBuilder) {
   
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      name: [],
      email: [],
      password:[]
    });
  }


}
