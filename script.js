// script.js
document.addEventListener('DOMContentLoaded', function() {
  var textInput = document.getElementById('text-input');
  var checkBtn = document.getElementById('check-btn');
  var resultDiv = document.getElementById('result');

  checkBtn.addEventListener('click', function() {
      var text = textInput.value.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
      if (text === '') {
          alert('Please input a value');
      } else {
          var isPalindrome = checkPalindrome(text);
          if (isPalindrome) {
              resultDiv.textContent = textInput.value + ' is a palindrome';
          } else {
              resultDiv.textContent = textInput.value + ' is not a palindrome';
          }
      }
  });

  function checkPalindrome(str) {
      var reversed = str.split('').reverse().join('');
      return str === reversed;
  }
});
