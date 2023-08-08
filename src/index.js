module.exports = function check(str, bracketsConfig) {
  var s = String(str).split('');
  var stack = [], count = 0,
  open = ['(','{','[', '|', '1', '3', '5', '7', '8'],
  close = [')','}',']','|', '2', '4', '6', '7', '8'],
  closeIndex,openIndex;

  for(var i = 0; i < s.length; i++) {
    /*var key = open.indexOf(s[i]);
    if(key=== 3 || key=== 7||key=== 8){
      if(count === 0) {key = openIndex;stack.push(openIndex);count++;}
      if (count === 1) {key = closeIndex;
        openIndex = stack.pop();//pop - удаляет последний элемент и возвращает значение
      if(openIndex!==closeIndex){
          return false;
      }
      count--;
    }}
    if(count === 0) {key = openIndex;stack.push(openIndex);count++;}*/

    
   // else{
    openIndex=open.indexOf(s[i]);
    if(openIndex!== -1) {
      stack.push(openIndex);
      
    }
    
    closeIndex=close.indexOf(s[i]);
    if(closeIndex!== -1) {
    openIndex = stack.pop();//pop - удаляет последний элемент и возвращает значение
    if(openIndex!==closeIndex){
        return false;
    }}}
    
    
  
  if(count === 1) return false;
  if(stack.length%2!==0) return false;
  if(stack.length !== 0)return false;
  return true;
}
