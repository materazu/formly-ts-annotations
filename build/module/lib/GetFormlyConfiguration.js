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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0Rm9ybWx5Q29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvR2V0Rm9ybWx5Q29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLGtCQUFrQixDQUFDO0FBRTFCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVoRCxNQUFNLFVBQVUsc0JBQXNCLENBQUMsTUFBTTtJQUMzQyxNQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDeEIsTUFBTSxjQUFjLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUNwQyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBRXZFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ2pDLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDaEIsR0FBRztZQUNILEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUMifQ==