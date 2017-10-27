// 用户登录
// 当命令行中有回车符出现的时候会出发函数

var users = {
    'admin': '123',
    'user1': '321',
    'user2': '213'
};

// 输出第一个问题
// process.stdout.write(q+'\n');
// var i = 0;
// var isInputUserName = true;
// 用户名
var username = '';
// 接收用户输入
// 用户输入是无状态
// var res = process.stdin.readline()
process.stdin.on('data', (input) => {
    // 要在此处知道到底input是什么
    // console.log(i++);
    // process.stdout.write(typeof input);
    // 输入的字符最后肯定是一个回车符
    // input实际上是一个流
    input = input.toString().trim();
    // 获取一个键值对集合中所有的键
    if (!username) {
        if (Object.keys(users).indexOf(input) === -1) {
            // 用户名不存在
            process.stdout.write('用户名不存在' + '\n');
            process.stdout.write('请输入用户名:' + '\n');
            // isInputUserName = true;
            username = '';
        } else {
            // 存在用户
            // var pwd = users[input]
            console.log('请输入密码:\n');
            // isInputUserName = false;
            username = input;
        }
    } else {
        // 传入的是密码
        // console.log(111)
        // 此处拿不到上次输入的用户名了
        if (input === users[username]) {
            console.log('登录成功');
        } else {
            process.stdout.write('请输入密码' + '\n');
        }
    }
});