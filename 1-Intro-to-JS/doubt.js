console.log(typeof(typeof(12))); 
// Output: string
// Explanation: The inner typeof(12) returns 'number', which is a string. Then the outer typeof('number') returns 'string'.