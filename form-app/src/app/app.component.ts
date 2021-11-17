import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (private formBuilder: FormBuilder) { }

  form: any = '';
  isChecked: boolean = false;

  ngOnInit () {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      hobbie: false
    })
  }

}
