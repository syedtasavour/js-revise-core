/**
 * Creates a pipeline of functions.
 * The resulting function passes its argument to the first function,
 * then each successive function is applied to the result of the previous one.
 *
 * @param {...Function} funcs - The functions to compose.
 * @return {Function} A function that takes an initial value and returns the result of the pipeline.
 */
function pipe(...funcs) {
    return (input) => funcs.reduce((acc, fn) => fn(acc), input);
}

// Example functions
const addOne = x => x + 1;
const square = x => x * x;
const double = x => x * 2;

// Create a new pipeline
const pipedFunction = pipe(addOne, square, double);

// Test the pipeline
console.log(pipedFunction(3));  // ((3 + 1) ** 2) * trhrth2 = 32

// Export for use in other modules (if needed)
module.exports = pipe; thrrthrhrhrthrrthh