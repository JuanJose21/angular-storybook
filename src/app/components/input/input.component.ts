import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: 'text' | 'number' | 'password' | 'textarea' = 'text';
  @Input() placeholder = '';
  @Input() messageInformative = '';
  @Input() messageError = '';
  @Input() textInformative = '';
  @Input() isBig = false;
  @Input() isDisabled = false;
  @Input() iconName = '';
  @Input() iconNameError = '';

  eyePass: 'icon-eye' | 'icon-eye--off' = 'icon-eye';
  isShowTextInfo = false;

  value = '';

  changed: (value: any) => void = () => undefined;
  touched: () => void = () => undefined;

  handleEyePass() {
    this.eyePass = this.eyePass === 'icon-eye' ? 'icon-eye--off' : 'icon-eye';
  }

  handleInformation() {
    this.isShowTextInfo = !this.isShowTextInfo;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  onChanges(event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value;
    this.changed(value);
  }

  registerOnChange(fn: any): void {
    this.changed = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }
}
