function reverseString(str){
    return str.split('').reverse().join('');
}

function isPalindrome(str){
    return str == reverseString(str)
}

console.log(isPalindrome("eve"))

function findGCD1(a, b) {
    let maxNumber = Math.min(a, b);
    for (let i = maxNumber; i > 0 ; i--) {
        if (a % i == 0 && b % i == 0) {
            return i;
        }
    }

    return 1;
}

console.log (findGCD1 (25,15))
