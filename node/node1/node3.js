// console.time('main');

// console.log('开始执行了');

// 不断的循环阻塞了代码的执行
// 可以把代码放到最后执行
// setTimeout(() => {
//     for (var i = 0; i < 10; i++) {
//         console.log(1);
//     }
// }, 0);

// console.log('完成执行了');

// console.timeEnd('main');

// console.time('main');

// 耗费时间（阻塞情况）
// var data = get('http://baidu.com');
// console.log(data);

// console.timeEnd('main');
// console.log('完成执行了');


// console.time('main');

// get('http://baidu.com',function(data){

// });

// console.timeEnd('main');
// console.log('完成执行了');


// 1. 如果函数需要回调函数，一定要在参数的最后一次出现
// function getFileAsync(path,callback){
//     if(错误){
//         callback(new Error('错误'));
//     }else{
//         callback(null,data);
//     }
// }


// 2. 错误优先的回调函数
function isEvenOrOdd(number, callback) {
    if (typeof number === 'number') {
        if (number % 2) {
            // 奇数
            callback(null, '当前传入的是奇数');
        } else {
            callback(null, '当前传入的是偶数');
        }
    } else {
        // throw new Error('你传入的不是数字');
        // 解决异步出错的问题
        callback(new Error('你传入的不是数字'));
    }
}

isEvenOrOdd(10, (error, data) => {
    if (error) throw error;
    console.log(data);
});

isEvenOrOdd(11, (error, data) => {
    if (error) throw error;
    console.log(data);
});

// isEvenOrOdd('an', (error, data) => {
//     if (error) throw error;
//     console.log(data);
// });