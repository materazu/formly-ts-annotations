import 'reflect-metadata';

import { FORMLY_CONFIG_KEY } from './constants';

import { FormlyFieldConfig } from '../interfaces/formly.field.config';

export function FormlyConfig(configs: FormlyFieldConfig) {
    return (target: any, propertyKey: string | symbol) => {
      // Pull the existing metadata or create an empty object
      const allMetadata = Reflect.getMetadata(FORMLY_CONFIG_KEY, target) || {};

      // Ensure allMetadata has propertyKey
      allMetadata[propertyKey] = allMetadata[propertyKey] || {};

      // Update the metadata with anything from updates
      // tslint:disable-next-line:forin
      for (const key of Reflect.ownKeys(configs)) {
        allMetadata[propertyKey][key] = configs[key];
      }

      // Update the metadata
      Reflect.defineMetadata(
        FORMLY_CONFIG_KEY,
        allMetadata,
        target,
      );
    }
}
