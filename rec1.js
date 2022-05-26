
function sigma(num){
    if(num == 0){
        return num
    }
    return num + sigma(num-1);
}

function factorial(num){
    if(num == 1 ){
        return num;
    }

    return num * factorial(num-1);
}
//console.log(factorial(3));


// function paintFill(arr, coords, newNum){
//     var y = coords[0];
//     var x = coords[1];
//     for(var i=y; i>=0; i--){
//         var temp = arr[i][x];
//         arr[i][x] = newNum;
//         // console.log(arr[i][x]);
//         // console.log(arr[i-1][x]);
//         if(i-1<0){
//             return arr;
//         }
//         if(arr[i-1][x] != temp ){
//             arr[i][x] = newNum;
//             return arr;
//         }
//     }
// }
var arr = [ 
    [1,4,4,5,7,8],
    [1,5,4,5,4,8],
    [1,2,4,6,3,8],
    [1,4,4,4,7,8],
    [1,9,4,5,3,8],
    [1,3,4,6,7,8]
]

// console.log(paintFill(arr,[2,2],7));

function paintFillRec(arr, coords, newNum){
    var y = coords[0];
    var x = coords[1];
    var temp = arr[y][x];
    arr[y][x] = newNum;
    if(y-1<0){
        return arr;
    }
    if(y-1<0){
        return arr;
    }
    if(arr[y-1][x] != temp ){
        arr[y][x] = newNum;
        return arr;
    }
    return paintFillRec(arr,[y-1,x],newNum)
}

console.log(paintFillRec(arr,[2,2],7));