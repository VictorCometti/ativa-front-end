import { CommonModule } from '@angular/common';
import { Component, ElementRef, forwardRef, inject, input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputService } from '../../services/form-input.service';
import { InvalidFeedbackComponent } from "../invalid-feedback/invalid-feedback.component";

export const CUSTOM_CONROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormInputComponent),
  multi: true,
};

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [CommonModule, InvalidFeedbackComponent],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss',
  providers: [CUSTOM_CONROL_VALUE_ACCESSOR]
})

export class FormInputComponent implements ControlValueAccessor, OnInit {
  @ViewChild('inputElement') inputElement!: ElementRef<HTMLInputElement>;
  public id = input.required<string>();
  public label = input<string>();
  public type = input.required<string>();
  public placeholder = input.required<string>();
  public formControlName = input.required<string>();
  public form = input.required<FormGroup>();
  public validationMessage = input.required<string>();
  protected formControl!: AbstractControl<any, any> | null;
  private onChange: (value: any) => void = () => { };
  private onTouched: () => void = () => { };
  private inputService = inject(InputService);
  protected maxLength = 0;

  ngOnInit(): void {
    this.formControl = this.form().get(this.formControlName());
    this.maxLength = this.inputService.determineInputMaxLenght(this.formControlName());
  }

  writeValue(value: any): void {
    if (this.inputElement && this.inputElement.nativeElement) {
      this.form().get(this.formControlName())?.setValue(value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


  protected onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    let value = inputElement.value;
    if (['cpf', 'cnpj', 'telefone', 'celular'].includes(this.formControlName())) {
      if (!this.inputService.validateInput(value, this.formControlName())) {
        inputElement.value = this.formControl?.value; 
        return;
      }
      
      switch (this.formControlName()) {
        case 'cpf':
          value = this.inputService.formatCPF(value);
          break;
        case 'cnpj':
          value = this.inputService.formatCNPJ(value);
          break;
        case 'telefone':
          value = this.inputService.formatTelefone(value);
          break;
        case 'celular':
          value = this.inputService.formatCelular(value);
          break;
      }

      this.form().get(this.formControlName())?.setValue(value);
    }
  }
}