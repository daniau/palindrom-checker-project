let inputEl=document.getElementById("text-input")
let resultPEl=document.getElementById("result")
let checkBtnEl=document.getElementById("check-btn")
function isPalindrome(text){
  let str=""
  for (let index=0;index<text.length;index++) {
    if(('Z'>=text[index]&&text[index]>='A')
      ||('z'>=text[index]&&text[index]>='a')
      ||('9'>=text[index]&&text[index]>='0')){
      str+=text[index].toLowerCase()
    }
  }
  let pointer_1=0
  let pointer_2=str.length-1
  while(pointer_1<pointer_2){
    if(str[pointer_1]!=str[pointer_2]) return false
    pointer_1++
    pointer_2--
  }
  return true
}
checkBtnEl.addEventListener("click",function(){
  const inputValue=inputEl.value
  if(inputValue===""){
    alert("Please input a value."); // ← لاحظ النقطة في النهاية.
    return
  }
  else if(isPalindrome(inputValue)){
    resultPEl.textContent=inputValue+" is a palindrome."

  }
  else{
    resultPEl.textContent=inputValue+" is not a palindrome."

  }
  inputEl.value=""

})