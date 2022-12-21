function checkPalindrome() {

    let str = document.getElementById('palindrome_input').value;

    // convert the string to lowercase and remove all non-alphanumeric characters
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    isPalindrome(str);
}
function isPalindrome(str) {
// check if the string is equal to its reverse
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return document.getElementById('palindrome_res').textContent = 'false';
        } else {
            return document.getElementById('palindrome_res').textContent = 'true';
        }
    }
}
//==========================
function reverseString(){
    let reverseInput = document.getElementById('reverse_input').value;

    stringReverse(reverseInput);
}
function stringReverse(str) {
    document.getElementById('reverse_result').textContent =
        str.split('').reverse().join('');
}
//==========================
function countChar(str,c){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === c) {
            count++;
        }
    }
    return count;
}
function getCount(){
    // get value from input to str and c and then call countChar(str,c)
    let str = document.getElementById('string_value').value;
    let character = document.getElementById('character_value').value;

    document.getElementById('res_calc').textContent = countChar(str, character);
}


