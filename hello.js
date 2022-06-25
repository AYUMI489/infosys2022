// alert("Hello, world");

// var username;
// username = prompt("あなたのお名前は");
// alert("hello," + username); 

// var num, sum;
// sum = 0;
// num =prompt("数値をいれてください、0にすると終了します");
// while (num != 0){
//     sum = sum + parseInt(num);
//     num =prompt("数値をいれてください,0にすると終了します");
// }
// alert("総和は　" + sum);

var max, num;
max = 0;
num =prompt("新しい数値をいれてください。0にすると終了します");
while (num != 0){
    if(parseInt(num) > max) {
       max = num;
    }
    num =prompt("新しい数値をいれてください。0にすると終了します");
}
alert("最大値は" + max);
