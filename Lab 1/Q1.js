function isPalindrome(str) {
    var j = str.length - 1
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}

var str = "EEaEE";
var str2 = "";
var str3 = "e";
var str4 = "esraa";
console.log(isPalindrome(str));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
console.log(isPalindrome(str4));