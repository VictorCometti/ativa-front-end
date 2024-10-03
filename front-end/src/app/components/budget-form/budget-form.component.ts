import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Category } from '../../models/category-entity';
import { CategoryService } from '../../services/category.service';
import { FormButtonComponent } from '../form-button/form-button.component';
import { FormInputComponent } from '../form-input/form-input.component';
import { formFields, selecteWhereMeet } from './budget-form-fields';

@Component({
  selector: 'app-budget-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, FormInputComponent, FormButtonComponent],
  templateUrl: './budget-form.component.html',
  styleUrl: './budget-form.component.scss'
})
export class BudgetFormComponent implements OnInit {
  protected formFields = formFields;
  private subscription = new Subscription;
  protected whereMeetField = selecteWhereMeet;
  public haveCategory = input.required<boolean>();

  protected category: Category = {

    categoryName: '',
    imageUrl: ''
  }

  private categoryService = inject(CategoryService);
  private formService = inject(FormBuilder);

  protected form = this.formService.group({
    tipoDePessoa: ['', Validators.required],
    cnpj: [""],
    cpf: [""],
    email: ['', Validators.required],
    telefone: [''],
    celular: ['', Validators.required],
    ondeEncontrou: ['', Validators.required],
    nomeDoCliente: ['', Validators.required],
    nomeDaCategoria: ['']
  });

  ngOnInit(): void {
    this.subscription = this.categoryService.categoryToForm$.subscribe(category => {
      this.category = category.category;
  
      if (this.category.categoryName) {
        this.form.controls.nomeDaCategoria.setValue(this.category.categoryName);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}
