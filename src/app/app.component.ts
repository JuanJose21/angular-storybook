import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent, InputComponent } from './components';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonComponent,
    InputComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  formGroup?: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      user: ['', [Validators.required]],
      pass: ['', [Validators.required]],
    });
  }
  handleClick() {
    console.log('Button clicked');
    console.log(this.formGroup?.value);
  }
}
