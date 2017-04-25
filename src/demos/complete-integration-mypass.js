import Cookie from 'js-cookie';
import { logDebug } from '../scripts/log.js';
import { activateGlobalOptIn } from '../scripts/goi.js';

const COOKIE_NAME = 'GOIL';

window.addEventListener('message', (message) => {
  let data = message.data;
  // save parent url
  logDebug('iframe - Got following parent data:', data);
  // only save our data
  if (data.indexOf && data.indexOf('goi-activate') !== -1) {
    activateGlobalOptIn();
  }
}, false);

// send cookie value back to parent
setTimeout(() => parent.postMessage(Cookie.getJSON(COOKIE_NAME), 'http://localhost:3000/'), 1000);
