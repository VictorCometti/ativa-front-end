import { CommonModule } from '@angular/common';
import { Component, ElementRef, forwardRef, input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

export const CUSTOM_CONROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SearchInputComponent),
  multi: true,
};

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
  providers: [CUSTOM_CONROL_VALUE_ACCESSOR]

})
export class SearchInputComponent implements OnInit, ControlValueAccessor{
  @ViewChild('inputElement') inputElement!: ElementRef<HTMLInputElement>;

  public placeholder = input.required<string>();

  public label = input.required<string>();

  public formControlName = input.required<string>();

  public form = input.required<FormGroup>();

  protected formControl!: AbstractControl<any, any> | null;

  private onChange: (value: any) => void = () => { };

  private onTouched: () => void = () => { };

  ngOnInit(): void {
    this.formControl = this.form().get(this.formControlName())
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

  setDisabledState?(isDisabled: boolean): void {
    if (this.inputElement && this.inputElement.nativeElement) {
      this.inputElement.nativeElement.disabled = isDisabled;
    }
  }

  protected onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.writeValue(inputElement.value);
  }
}
