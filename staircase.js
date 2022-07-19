//Its base and height are both equal to n. It is drawn using # symbols and spaces. 
//The last line is not preceded by any spaces.

function staircase(n) {
    let output = '';
    //Loop to keep track of rows
    for(let i=1;i<=n; i++){
        //Inner loop to keep track of spaces
        for(let j=n-1; j>=i; j--){
            output += ' ';
        }
        //Inner loop to keep track of #s
        for(let s=1; s<=i; s++){
            output += '#';
        }
        output += '\n';
    }
    return console.log(output);
}

//sample input:
const a= 6;
staircase(a);