import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {reproduceYoutubeVideo} from './modules/reproduce-youtube/reproduce-youtube-video';
import {onTabClikc} from './modules/tabs/tabs-subscription';


window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    reproduceYoutubeVideo();
    onTabClikc();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
