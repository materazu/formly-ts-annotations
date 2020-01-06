import 'reflect-metadata';

import { FORMLY_CONFIG_KEY } from './constants';

export function GetFormlyConfiguration(entity) {
  const formlyConfig = [];
  const entityInstance = new entity();
  const configs = Reflect.getMetadata(FORMLY_CONFIG_KEY, entityInstance);

  Object.keys(configs).forEach(key => {
    formlyConfig.push({
      key,
      ...configs[key]
    });
  });

  return formlyConfig;
}
