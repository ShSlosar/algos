function miniMaxSum(arr) {
    let sum = arr.reduce((a,b) => a+b);
    let maxV = Math.max(...arr);
    let minV = Math.min(...arr);
    return console.log((sum - maxV)+ ' '+ (sum - minV));
}