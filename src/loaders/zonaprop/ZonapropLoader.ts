
import { BaseLoader } from '../BaseLoader';
import { ProvideSingleton } from '../../ioc';

@ProvideSingleton(ZonaproLoader)
export class ZonaproLoader extends BaseLoader {
    constructor() {
        super();
    }

}
