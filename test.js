import test from 'ava';
import promice from '.';

const resolve = () => console.log('resolved!');
const reject = () => console.log('rejected!');

test('Promise', t => {
  const p = promice(resolve, reject);
  t.is(p instanceof Promise, true);
});
