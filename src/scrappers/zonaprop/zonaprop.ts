
import * as Crawler from 'crawler';
import BaseScrapper from '../BaseScrapper';
import { ProvideSingleton } from '../../ioc';

@ProvideSingleton(ZonaPropScrapper)
export default class ZonaPropScrapper extends BaseScrapper {
    constructor() {
        super();
    }

    public start() {
        console.log('scrapping');
    }
}
