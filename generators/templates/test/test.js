import test from 'ava';
import add from '../src/js/modules/add.js';

test('Test adding function', t => {
  t.is(add(3,2), 5)
})