
function Palindrome (str){
    var isPal = "Yes";
    var strRev = str.split("").reverse().join("");
    if(str==strRev){
        return isPal;
    }
    isPal ="No";
    return isPal;
}

console.log(Palindrome("anna"));
console.log(Palindrome("244432"));
console.log(Palindrome("table"));
console.log(Palindrome("1367631"));