 const fs = require('fs');
 const path = require('path');
 const marked = require('marked');


 // 接收文件的路径
 const target = path.join(__dirname, process.argv[2] || '../README.md');

 // 监视文件变化
 fs.watchFile(target, {
     interval: 200
 }, (curr, prev) => {
     //  console.log(`current: ${curr.size};previous:${prev.size}`);
     if (curr.mtime === prev.mttime) {
         return false;
     }
     fs.readFile(target, 'utf8', (err, content) => {
         if (err) {
             throw err;
         }
         var html = marked(content);
         fs.readFile(path.join(__dirname, 'github.css'), 'utf8', (err, css) => {
             html = template.replace('{{{content}}}', html).replace('{{{styles}}}', css);
             fs.writeFile(target.replace('.md', '.html'), html, 'utf8', (err) => {
                 console.log('updated@' + new Date);
             });
         });
     });
 });

 var template = `
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>{{{styles}}}</style>   
</head>
<body>
    <div class="vs">
        {{{content}}}
    </div>
</body>
</html>
 `;