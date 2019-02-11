function sum(x, y) {
    // proveriti da li je jedan od argumenata string
    if (typeof x === 'number' && typeof y === 'number')
        return +(x + y).toFixed(10);
        return NaN;  // ako je jedan od argumenata string vratiti NaN
    
  
   
   
}
console.log(sum(0.00002,0.00004));

