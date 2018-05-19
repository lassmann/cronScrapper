import * as Crawler from 'crawler';

export default class Scrapper {
  private crawler: Crawler;
  constructor() {
    this.crawler = new Crawler({
      maxConnections: 10,
      // This will be called for each crawled page
      callback: function (error, res, done) {
        if (error) {
          console.log(error);
        } else {
          var $ = res.$;
          // $ is Cheerio by default
          // a lean implementation of core jQuery designed specifically for the server
          console.log('WEIRDDD');
        }
        done();
      }
    });
  }

  public start() {

    // this.crawler.queue(['http://www.infobae.com', 'https://www.ole.com.ar']);
    this.crawler.queue([{
      uri: 'https://promociones-aereas.com.ar/',
      // The global callback won't be called
      callback: function (error, res, done) {
        if (error) {
          console.log(error);
        } else {
          var $ = res.$;
          console.log('Grabbed', res.body);
        }
        done();
      }
    }]);
  }
}
