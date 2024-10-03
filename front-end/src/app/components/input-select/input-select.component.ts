import { CommonModule } from '@angular/common';
import { Component, forwardRef, input } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormInputComponent } from '../form-input/form-input.component';
import { InvalidFeedbackComponent } from "../invalid-feedback/invalid-feedback.component";

export const CUSTOM_CONROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormInputComponent),
  multi: true,
};

@Component({
  selector: 'app-input-select',
  standalone: true,
  imports: [InvalidFeedbackComponent, CommonModule],
  templateUrl: './input-select.component.html',
  styleUrl: './input-select.component.scss',
  providers: [CUSTOM_CONROL_VALUE_ACCESSOR]


})

export class InputSelectComponent {


  public dropDownOptions = input<{ value: string, id: number }[]>();

  public id = input.required<string>();

  public label = input<string>();

  public placeholder = input.required<string>();

  public formControlName = input.required<string>();

  public form = input.required<FormGroup>();

  public validationMessage = input.required<string>();

  protected formControl!: AbstractControl<any, any> | null;

  private onChange: (value: any) => void = () => { };

  private onTouched: () => void = () => { };

  ngOnInit(): void {
    this.formControl = this.form().get(this.formControlName());
  }

  writeValue(value: any): void {
    this.form().get(this.formControlName())?.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
