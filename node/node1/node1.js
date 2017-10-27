// 王安安 node.js


// var log = function (message) {
//     ProcessingInstruction.stdout.write(wangan + '\n');
// }

// var go = 'an'

// process.stdout.write(`
//     ${go} wang
// `);

var fs = require('fs');

// 针
var frames = [];

for (var i = 1; i < 7; i++) {
    frames[frames.length] = fs.readFileSync(`./frames/${i}.txt`, 'utf8');
}

var fps = 5;

var current = 0;

var render = () => {
    // var height = process.stdout.getWindowSize()[1];
    // for(var i=0;i<height;i++){
    //     process.stdout.write('\n');
    // }

    process.stdout.write('\033[2J');
    process.stdout.write('\033[0f');
    if (current === frames.length) {
        current = 0;
    }
    process.stdout.write(frames[current++]);

}

setInterval(render, 1000 / fps);


// 打印控制台宽高
var size = process.stdout.getWindowSize();
console.log(size);