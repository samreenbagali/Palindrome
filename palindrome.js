var isPalindrome = function (x) {
    return x < 0 ? false : x === +x.toString().split("").reverse().join("");
  };
  
  const res = isPalindrome(1518);
  console.log(res);
  
//   document.getElementById('result').textContent = `Is 10 a palindrome? ${res}`;
  