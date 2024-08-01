// console.log(global);

setTimeout(() => {
    console.log('hello');
    clearInterval(hey);
}, 3000);

const hey = setInterval(() => {
    console.log('hey');
}, 1000);