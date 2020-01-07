"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const constants_1 = require("./constants");
function GetFormlyConfiguration(entity) {
    const formlyConfig = [];
    const entityInstance = new entity();
    const configs = Reflect.getMetadata(constants_1.FORMLY_CONFIG_KEY, entityInstance);
    Object.keys(configs).forEach(key => {
        formlyConfig.push(Object.assign({ key }, configs[key]));
    });
    return formlyConfig;
}
exports.GetFormlyConfiguration = GetFormlyConfiguration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0Rm9ybWx5Q29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvR2V0Rm9ybWx5Q29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUUxQiwyQ0FBZ0Q7QUFFaEQsU0FBZ0Isc0JBQXNCLENBQUMsTUFBTTtJQUMzQyxNQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDeEIsTUFBTSxjQUFjLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUNwQyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLDZCQUFpQixFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBRXZFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2pDLFlBQVksQ0FBQyxJQUFJLGlCQUNmLEdBQUcsSUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQ2YsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxZQUFZLENBQUM7QUFDdEIsQ0FBQztBQWJELHdEQWFDIn0=