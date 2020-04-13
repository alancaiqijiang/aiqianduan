//第7题 【寻找最大子数组】 给定一个整数数组，找到一个具有最大和的子数组，返回其子数组最大和和这个子数组。
//比如数组[−2, 2, −3, 4, −1, 2, 1, −5,]。符合要求的子数组为[4, −1, 2, 1]，其最大和为 6。
//再比如数组[1, 2, 3, 4]，符合要求的子数组为[1, 2, 3, 4]，其最大和为 10。
//再比如数组[-5, 6, -2, -3, 4]，符合要求的子数组为[6, -2, -3, 4]，其最大和为5。


//
var arr = [-2, 2, -3, 4, -1, 2, 1, -5,];
// 先 把数组从长度从2 开始遍历
var res_arr2 = [];
for (var i = 0; i < arr.length - 1; i++) {
    res_arr2.push(Number(arr[i] + arr[i + 1]));
};
console.log(res_arr2);
// 数组长度为3
var res_arr3 = [];
for (var i = 0; i < arr.length - 2; i++) {
    res_arr3.push(Number(arr[i] + arr[i + 1] + arr[i + 2]));
};
console.log(res_arr3);


