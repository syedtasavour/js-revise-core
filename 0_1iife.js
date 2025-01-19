// Immediately Invoked Function Expressions (IIFE)


(function IIFE(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('pass name')
