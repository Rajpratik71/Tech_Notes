
// WORKS LIKE R VECTORIZED OPERATIONS

var x = [20,21,22,23]

x > 21 // not gonna work like R

y = x.map( i => i > 21) // but this returns an array of true /false, like `x > 21` would in R

console.log(y);

