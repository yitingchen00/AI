/*
https://leetcode.com/problems/create-hello-world-function
題目:不管輸入什麼皆回傳 Hello world */
function createHelloWorld(){
    return function(...args) {
        return "Hello World"; 
    }
}
/*
https://leetcode.com/problems/counter/submissions/1591126544
題目:Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
 */
var createCounter = function(n) {
    let currentCount = n-1;
    return function() {
        currentCount +=1;
        return currentCount;
    };
};
/*
https://leetcode.com/problems/to-be-or-not-to-be/submissions/1591158549
題目:Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

*/
/**
 * @param {any} val
 * @return {Object}
 */
var expect = function(val){
    return{
        toBe:function(expectedVal){
            if (val==expectedVal){
                return true;
            }
            else{
                throw new Error("Not Equal");
            }
        },
        notToBe:function(expectedVal){
            if(val!=expectedVal){
                return true;
            }
            else{
            throw new Error("Equal");
              }
        }
    }
};
