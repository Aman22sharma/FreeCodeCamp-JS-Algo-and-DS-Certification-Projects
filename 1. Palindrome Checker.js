
function palindrome(str) {
  // Good luck!
  return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
         
  return true;
}



palindrome("eye");