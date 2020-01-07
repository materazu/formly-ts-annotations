import 'reflect-metadata';
import { FormlyFieldConfig } from '../interfaces/formly.field.config';
export declare function FormlyConfig(configs: FormlyFieldConfig): (target: any, propertyKey: string | symbol) => void;
