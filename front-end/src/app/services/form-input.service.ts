import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  public determineFormatation(formControlName: string, value: string): string {
    switch (formControlName) {
      case 'cpf':
        return this.formatCPF(value);
      case 'cnpj':
        return this.formatCNPJ(value);
      case 'telefone':
        return this.formatTelefone(value);
      case 'celular':
        return this.formatCelular(value);
      default:
        return value;
    }
  }

  public validateInput(value: string, type: string): boolean {
    const regexMap: { [key: string]: RegExp } = {
      cpf: /^[0-9. -]*$/,
      cnpj: /^[0-9. /-]*$/,
      telefone: /^[0-9() -]*$/,
      celular: /^[0-9() -]*$/
    };

    const regex = regexMap[type];
    return regex ? regex.test(value) : false;
  }

  public validateNumber(value: string): string {
    if (parseFloat(value) >= 0 || value === '') {
      return value;
    }
    return '';
  }

  public formatCPF(value: string): string {
    value = value.replace(/\D/g, '');

    switch (true) {
      case (value.length <= 3):
        return value;
      case (value.length <= 6):
        return `${value.slice(0, 3)}.${value.slice(3)}`;
      case (value.length <= 9):
        return `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6)}`;
      default:
        return `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9)}`;
    }
  }

  public formatCNPJ(value: string): string {
    value = value.replace(/\D/g, '');

    switch (true) {
      case (value.length <= 2):
        return value;
      case (value.length <= 5):
        return `${value.slice(0, 2)}.${value.slice(2)}`;
      case (value.length <= 8):
        return `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5)}`;
      case (value.length <= 12):
        return `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5, 8)}/${value.slice(8)}`;
      default:
        return `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5, 8)}/${value.slice(8, 12)}-${value.slice(12)}`;
    }
  }

  public formatTelefone(value: string): string {
    value = value.replace(/\D/g, '');

    switch (true) {
      case (value.length <= 2):
        return `(${value}`;
      case (value.length <= 6):
        return `(${value.slice(0, 2)}) ${value.slice(2)}`;
      default:
        return `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
    }
  }

  public formatCelular(value: string): string {
    value = value.replace(/\D/g, '');

    switch (true) {
      case (value.length <= 2):
        return `(${value}`;
      case (value.length <= 7):
        return `(${value.slice(0, 2)}) ${value.slice(2)}`;
      default:
        return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    }
  }


  public determineInputMaxLenght(formControlName: string): number {
    switch (formControlName) {
      case 'cpf':
        return 14;
      case 'cnpj':
        return 18;
      case 'celular':
        return 15;
      case 'telefone':
        return 14;
      default:
        return 60;

    }
  }
}

