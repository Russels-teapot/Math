import Magician from '../Magician';
import Daemon from '../Daemon';

const daemon = new Daemon('John', 'Daemon');
const magician = new Magician('Alex', 'Magician');

test('two point attack', () => {
  daemon.getAttack(2);
  expect(daemon.modAttack).toBe(90);
});

test('five point attack', () => {
  magician.getAttack(5);
  expect(magician.modAttack).toBe(60);
});

test('six point attack', () => {
  magician.getAttack(6);
  expect(magician.modAttack).toBe(0);
});

test('two point get stoned', () => {
  daemon.getAttack(2);
  daemon.getStoned(2);
  expect(daemon.modAttack).toBe(85);
});

test('five point get stoned', () => {
  magician.getAttack(5);
  magician.getStoned(5);
  expect(magician.modAttack).toBe(50);
});

test('six point get stoned', () => {
  daemon.getAttack(6);
  daemon.getStoned(6);
  expect(daemon.modAttack).toBe(0);
});
