"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const constants_1 = require("./constants");
function FormlyConfig(configs) {
    return (target, propertyKey) => {
        const allMetadata = Reflect.getMetadata(constants_1.FORMLY_CONFIG_KEY, target) || {};
        allMetadata[propertyKey] = allMetadata[propertyKey] || {};
        for (const key of Reflect.ownKeys(configs)) {
            allMetadata[propertyKey][key] = configs[key];
        }
        Reflect.defineMetadata(constants_1.FORMLY_CONFIG_KEY, allMetadata, target);
    };
}
exports.FormlyConfig = FormlyConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybWx5Q29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9Gb3JtbHlDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0QkFBMEI7QUFFMUIsMkNBQWdEO0FBSWhELFNBQWdCLFlBQVksQ0FBQyxPQUEwQjtJQUNyRCxPQUFPLENBQUMsTUFBVyxFQUFFLFdBQTRCLEVBQUUsRUFBRTtRQUNuRCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLDZCQUFpQixFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV6RSxXQUFXLENBQUMsV0FBVyxDQUFDLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUUxRCxLQUFLLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDMUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM5QztRQUVELE9BQU8sQ0FBQyxjQUFjLENBQ3BCLDZCQUFpQixFQUNqQixXQUFXLEVBQ1gsTUFBTSxDQUNQLENBQUM7SUFDSixDQUFDLENBQUE7QUFDSCxDQUFDO0FBaEJELG9DQWdCQyJ9