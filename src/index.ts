import Scrapper from './scrapper';
import ZonaPropScrapper from './scrappers/zonaprop/zonaprop';
import { iocContainer } from './ioc';
// const scrap = new Scrapper();
// scrap.start();

const zonapropETL = iocContainer.get<ZonaPropScrapper>(ZonaPropScrapper);
zonapropETL.start();
