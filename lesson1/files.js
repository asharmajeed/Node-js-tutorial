const fs = require('fs') // fs -> file system

// following mehtods are asynchronous mehtods that takes time but the remaining code will still run
// reading files

// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     // console.log(data);
//     console.log(data.toString());
// })

// console.log('last line');


// writing files

// fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
//     console.log('file was written');
// })

// fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
//     console.log('file was written');
// })


// directories

// if (!fs.existsSync('./assets')) // here sync blocks all the code
// {
//     fs.mkdir('./assets', (err) => {
//         if (err)
//             console.log(err);
//         console.log('folder created');
//     })
// } else
// {
//     fs.rmdir('./assets', (err) => {
//         if (err)
//             console.log(err);
//         console.log('folder deleted');
//     })
// }


// deleting files

if (fs.existsSync('./docs/deleteme.txt'))
{
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err)
            console.log(err);
        console.log('file deleted');
    })
}