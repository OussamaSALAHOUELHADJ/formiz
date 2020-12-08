import { ReactNode } from 'react';
import { UseStore } from 'zustand';

export type FormizContextType = {
  useStore: UseStore<State>;
} | null;

export type FieldValue = any;
export type FieldErrors = (string | undefined)[];
export interface FieldValidationObject {
  rule(value: FieldValue): boolean;
  message?: string;
  deps?: any[];
}
export interface FieldAsyncValidationObject {
  rule(value: FieldValue): Promise<boolean>;
  message?: string;
  deps?: any[];
}
export interface FieldProps {
  name: string;
  debounce?: number;
  defaultValue?: FieldValue;
  formatValue?(value: FieldValue): FieldValue;
  onChange?(value?: FieldValue, rawValue?: FieldValue): void;
  required?: boolean | string;
  validations?: FieldValidationObject[];
  asyncValidations?: FieldAsyncValidationObject[];
}

export interface Field {
  id: string;
  name: string;
  value: FieldValue;
  errors: FieldErrors;
  asyncErrors: FieldErrors;
  isValidating: boolean;
}

export interface FormProps {
  children?: ReactNode;
  connect?(store: any): void;
  id?: string;
}
export type State = {
  form: {
    id: string;
    resetKey: number;
    isValid: boolean;
    isValidating: boolean;
    isSubmitted: boolean;
    isStepValid: boolean;
    isStepValidating: boolean;
    isStepSubmitted: boolean;
  };
  fields: Field[];
  actions: {
    registerField(name: string, defaultField?: Partial<Field>): void;
    unregisterField(id: string): void;
    updateField(id: string, field: Partial<Field>): void;
  };
};
