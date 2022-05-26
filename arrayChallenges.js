

// 1. Shuffler

function shuffle(){
    var arr = [1,2,3,4,5,6];
    var len = arr.length;
    for(var i=0; i<len; i++){
        var newSpot = Math.floor(Math.random()*(len));
        var curnt = arr[i];
        arr[i] = arr[newSpot];
        arr[newSpot] = curnt;
    }
    console.log('___________________________');
    console.log('Shuffler:')
    console.log(arr);
    return arr;
}
shuffle();

// 2. Skylign Heights

function skyHeights(){
    var arr = [-1,7,8,0];
    var sight= [];
    for(var i =0; i<arr.length; i++){
        if(sight.length === 0 && arr[i]>0){
            sight.push(arr[i]);
        }
        if (sight.length > 0 && arr[i]>sight[sight.length-1]){
            sight.push(arr[i]);
        }
    }
    console.log('___________________________');
    console.log('Skyline Heights:')
    console.log(sight);
}
skyHeights();

// 3. Zip It

function zipper(){
    var arr1 = [1,3,5,7,9,11];
    var arr2 = [2,4,6,8,10,12,14,16,18];
    var zip = [];
    if(arr1.length == arr2.length){
        for(var i=0; i<arr1.length; i++){
            zip.push(arr1[i]);
            zip.push(arr2[i]);
            }
        }
    if(arr1.length > arr2.length){
        for(var n=0; n<arr1.length; n++){
            if (n>arr2.length-1){
                zip.push(arr1[n]);
            }
            else{
                zip.push(arr1[n]);
                zip.push(arr2[n]);
            }
        }
    }
    if (arr1.length < arr2.length){
        for(var x=0; x<arr2.length; x++){
            if (x>arr1.length-1){
                zip.push(arr2[x]);
            }
            else{
                zip.push(arr1[x]);
                zip.push(arr2[x]);
            }
        }
    }
    console.log('___________________________');
    console.log('Zipper:');
    console.log(zip);
}
zipper();