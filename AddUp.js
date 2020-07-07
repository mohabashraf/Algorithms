//  const {performance} = require('pref_hooks');
function addUp(number) {
	return number * (number + 1) / 2;
}
let t1 = Date.now();
console.log(addUp(6));
let t2 = Date.now();
console.log(`Time Elapsed: ${ (t2 - t1) / 1000} seconds`);