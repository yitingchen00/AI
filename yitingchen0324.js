/*
https://leetcode.com/problems/create-hello-world-function
題目:不管輸入什麼皆回傳 Hello world */
function createHelloWorld(){
    return function(...args) {
        return "Hello World"; 
    }
}
