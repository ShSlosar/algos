

function diagonalDifference(arr) {
    var primaryDiag = 0;
    var secondaryDiag = 0;

    //Looping Through Matrix
    for(var i=0; i<arr.length; i++){

        //Calculating Primary Diagonal
        primaryDiag += arr[i][i];
        //Calculating Secondary Diagonal
        secondaryDiag += arr[arr.length -1 -i][i];
    }

    //Returning (abs)Absolute Value of The Diagonals
    return Math.abs(primaryDiag - secondaryDiag);
}

//Sample Input
const a = [
    [2,3,6],
    [5,7,9],
    [12,-7,-4]
]

diagonalDifference(a);