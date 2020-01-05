// import { FormlyConfig } from './lib/FormlyConfig';

// import { GetFormlyConfiguration } from './lib/GetFormlyConfiguration';

// class Demo {
//   @FormlyConfig({
//     type: 'input',
//       templateOptions: {
//         label: 'Title',
//         placeholder: 'Title of the training',
//         required: true,
//       },
//   })
//   public title: any;

//   @FormlyConfig({
//     type: 'textarea',
//     templateOptions: {
//       label: 'Description',
//       placeholder: 'Description',
//       required: true,
//       rows: 10,
//     },
//   })
//   public description;
// }

// console.log(GetFormlyConfiguration(Demo));

export * from './lib/FormlyConfig';
export * from './lib/GetFormlyConfiguration';