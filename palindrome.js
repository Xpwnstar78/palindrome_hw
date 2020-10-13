function checkPalindrome(str) {
    let arrayValues = string.split('');
    let reverseArrayValues = arrayValues.reverse();
    let reverseString = reverseArrayValues.join('');
    if(string == reverseString) {
    document.write(`${string} is a palindrome.`);
  } else {
    document.write(`${string} is not a palindrome, racecar is a palindrome.`);
    }
}
let string = prompt('Enter a string: ');
checkPalindrome(string);