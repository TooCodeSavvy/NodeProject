import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Mol';
  var test = '';
  greetUser(name);
});
