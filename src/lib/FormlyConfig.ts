import 'reflect-metadata';

import { FORMLY_CONFIG_KEY } from './constants';

import { FormlyFieldConfig } from '../interfaces/formly.field.config';

export function FormlyConfig(configs: FormlyFieldConfig) {
  return (target: any, propertyKey: string | symbol) => {
    const allMetadata = Reflect.getMetadata(FORMLY_CONFIG_KEY, target) || {};

    allMetadata[propertyKey] = allMetadata[propertyKey] || {};

    for (const key of Reflect.ownKeys(configs)) {
      allMetadata[propertyKey][key] = configs[key];
    }

    Reflect.defineMetadata(
      FORMLY_CONFIG_KEY,
      allMetadata,
      target,
    );
  }
}
