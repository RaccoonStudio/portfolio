import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const customizePage = page => {
  return page.emulate({
    'name': 'Desktop 1920x1080',
    'userAgent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.75 Safari/537.36',
    'viewport': {
      'width': 1920,
      'height': 1080,
      'deviceScaleFactor': 2,
      'isMobile': false,
      'hasTouch': false,
      'isLandscape': true
    }
  });
};

initStoryshots({ suite: 'Image storyshots', test: imageSnapshot({ customizePage }) });
