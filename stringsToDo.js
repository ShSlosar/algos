// function Swt(favoriteLanguageString){
//     console.log(favoriteLanguageString);
//     switch (favoriteLanguageString) {
//         case 'JavaScript': console.log("Ah so, we thrive on chaos!"); break;
//         case 'Python': console.log("Parenthesis-haters, unite!"); break;
//         case 'PL/I': console.log("Wha? Who let you in here?");
//         default: console.log("Why don't you choose a different one.");
//         }
// }
// Swt('Python');

//_______________________________________________________________________________
// 1. Remove Blanks

function removeblnks(){
    str = "A m I R ig ht"
    str2 = ""
    for(var i=0; i<str.length; i++){
        if(str[i] != " "){
            str2 += str[i];
        }
    }
    console.log('_____________________________')
    console.log('Remove Blanks:')
    console.log(str2);
}
removeblnks();

//_______________________________________________________________________________
// 2. Get Digits

function getDigi(){
    var str = "0s1a3y5w7h9a2t4?6!8?0";
    var str2 = "";
    for(var i=0; i<str.length; i++){
        if(str[i] % 2 === 0 ||str[i] % 2 == .5 ||str[i] % 2 == 1 ){
            str2 += str[i];
        }
    }
    console.log('_____________________________')
    console.log('Get Digits:')
    console.log(str2);
}
getDigi();

//_______________________________________________________________________________
// 3. Acronyms

function acro(){
    var str = "Welcome to the Jungle! Have you tried Python?";
    var str2 = "";
    for(var i=0; i<str.length; i++){
        if (i===0 ||str[i-1]==" " ||str[i-1]=="-"){
            str2 += str[i]
        }
    }
    console.log('_____________________________')
    console.log('Acronyms:')
    console.log(str2.toUpperCase());
}
acro();

//_______________________________________________________________________________
// 4. Zip Arrays into Maps

function zipArr(){
    var arr1 = ["abc", 3, "yo"];
    var arr2 = [42, "wassup", true];
    var map = new Map();
    for(var i=0; i<arr1.length; i++){
        map.set(arr1[i], arr2[i]);
    }
    console.log('_____________________________')
    console.log('Zip Arrays into Maps:')
    console.log(arr1);
    console.log(arr2);
    console.log(map);
}
zipArr();

//_______________________________________________________________________________
// 5. Invert Hash

function invertHash(){
    var dict = {"name": "Zaphod", 
                "charm": "high", 
                "morals": "dicey"}
    var dict2 = {};
    for(var key in dict ){
        dict2[dict[key]] = key;
    }
    // return dict2
    console.log('_____________________________')
    console.log('Invert Hash:')
    console.log("before: ",dict);
    console.log("After: ",dict2);
}
invertHash();

function zipArraysIntoMap() {
    var arr1 = ["abc", 3, "yo"]
    var arr2 = [42, "wassup", true]
    var associativeArr = {}
    for (var i = -1; i < arr1.length; i++) {
        if(i< 0){
            continue
        }
        if(arr1[i] % 2 === 0 ||arr1[i] % 2 == .5 ||arr1[i] % 2 == 1 ){
            var temp = arr1[i];
            console.log(temp)
            associativeArr[toString(temp)] = arr2[i];
        }
        associativeArr[arr1[i]] = arr2[i];
    }

    console.log(associativeArr);
     //should return {"abc": 42, 3: "wassup", "yo": true}
}

zipArraysIntoMap();