import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'authentication';
  form: FormGroup;

  constructor(private fb: FormBuilder){
    
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      usuario: [null],
      password: [null],
    })
  }


}
