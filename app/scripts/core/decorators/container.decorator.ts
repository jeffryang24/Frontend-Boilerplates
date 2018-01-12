import { container } from '~/app.container';
import { debug } from 'util';

const servicesKey = '__services__';

export const Container = <T>(id: any) => {
    return (target: any, key: string | symbol) => {
        const getter = () => {
            return container.get<T>(id);
        };
        Reflect.deleteProperty[key];
        Reflect.defineProperty(target, key, {
            get: getter
        });
    };
};