import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface FormField {
  name: string;
  type: string;
  label: string;
  required: boolean;
};

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {
  fetchFormFields(): Observable<FormField[]> {
    // This can be replaced by actual HTTP API
    return of([
      { name: 'username', type: 'text', label: 'User Name', required: true },
      { name: 'email', type: 'email', label: 'Email', required: true },
      { name: 'age', type: 'number', label: 'Age', required: false }
    ]);
  }
}
