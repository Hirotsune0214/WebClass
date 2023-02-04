// Q: Use the setInterval() function to log "Hello, World!" to the console after every 6 seconds, and then use the clearInterval() function to stop the interval.

let count = 0;
let timer1 = setInterval(() => {
    count += 6;
    console.log("HelloWorld");
}, 6000); // 6000は6秒毎はタイマー開始

setTimeout(() =>{
    console.log("Stop");
    clearInterval(timer1);
},10000);