

var createCounter = function(n) {   //外部函式 createCounter(n) 
    
    return function() {
        return n++                  //內部函式
    };
};

//Example 1

const counter1 = createCounter(10)
console.log(counter1());  // 10 1st call
console.log(counter1());  // 11 2nd call
console.log(counter1());  // 12 3rd call


//Example 2
// 設定要呼叫的次數
const callTimes = 5;  
const counter2 = createCounter(-2);

// 自動執行 counter() `callTimes` 次
const output = Array.from({ length: callTimes }, () => counter2());

console.log(output); // 預期輸出：[-2, -1, 0, 1, 2]

//Example 3
//設定n限制式
function testCounter(n, calls) {
    // 確保 n 在範圍內
    if (n < -1000 || n > 1000) {
        throw new Error("n 必須在 -1000 到 1000 之間");
    }

    // 確保 calls.length 在範圍內
    if (calls.length < 0 || calls.length > 1000) {
        throw new Error("calls.length 必須在 0 到 1000 之間");
    }

    // 確保 calls 陣列的內容符合 "call"
    if (!calls.every(call => call === "call")) {
        throw new Error("calls 陣列內的元素必須是 'call'");
    }

    const counter = createCounter(n);
    return calls.map(() => counter());
}

console.log(testCounter(10, Array(3).fill("call"))); // [10, 11, 12]
console.log(testCounter(1000, Array(4).fill("call"))); // [1000, 1001, 1002, 1003]
console.log(testCounter(-1000, Array(2).fill("call"))); // [-1000, -999]
console.log(testCounter(0, Array(10).fill("call"))); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

/*
console.log(testCounter(2000, Array(5).fill("call"))); // error: n 超過範圍
console.log(testCounter(-2000, Array(5).fill("call"))); // error: n 小於 -1000
console.log(testCounter(5, Array(1001).fill("call"))); // error: calls.length 超過 1000
console.log(testCounter(5, ["call", "not_call", "call"])); // error: calls 陣列內有錯誤的字串
*/
