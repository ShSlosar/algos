//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
//Print the decimal value of each fraction on a new line with  places after the decimal.


function plusMinus(arr) {
    var length = arr.length; 
    let pos = 0;
    let neg = 0;
    let zer = 0;
    //Looping through array
    for(let i=0; i<length; i++){
        //Finding positives
        if(arr[i]>0){
            pos +=1;
        }
        //Finding negatives
        if(arr[i]<0){
            neg +=1;
        }
        //Finding zeros
        if(arr[i] == 0){
            zer +=1;
        }
    }
    //Getting fractions against the array's length
    pos = pos / length;
    neg = neg / length;
    zer = zer / length;
    //Printing decimals to 6.
    return console.log(`${pos.toFixed(6)} \n ${neg.toFixed(6)} \n ${zer.toFixed(6)}`)
}

//sample input
const a = [-4, 3, -9, 0, 4, 1];

plusMinus(a);