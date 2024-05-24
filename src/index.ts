import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John 5';
  var test = '';
  greetUser(name);
});
