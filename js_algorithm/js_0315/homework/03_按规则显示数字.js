//显示从100到1000之间所有既能被5整除，也能被6整除的数字，要求每行显示10个数字。
// 先做题，再显示
// 
// 用个字符串把n拼接一下
var str = '';
var count = 0;
for (var n = 100; n <= 1000; n++) {
    if (n % 5 == 0 && n % 6 == 0) {
        // 先把它搞成一行
        str += ' ' + n;
        count++;
        // 于是在这边加个判断
        if (count % 10 == 0) {
            str += '\n'
        }; 
    };
};
console.log(str);
// 嗯，得到了一长串字符串，那么把他们分行把， 根据得到得数，我们先知道下需要有多少行
// 接下来想想怎么搞一个10个数字每行。 咦， 在循环得时候，判断下 然后 count % 10 == 0， 就加个分行符呗
