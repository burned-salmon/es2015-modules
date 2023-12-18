import foods from './foods';
import { choice, remove } from './helpers';

const food = choice(foods);

console.log(`I'd like one ${food}, please`);
console.log(`Here you go: ${food}`);
remove(foods, food);
const foodsLeft = foods.length;
console.log(`I'm sorry, we're all out. We have ${foodsLeft} left.`);