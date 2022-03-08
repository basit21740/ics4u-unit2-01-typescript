/*
 * This is a program is  text reverser
 * 
 * @author  Abdul Basit Butt
 * @version 1.0
 * @since   2022-02-19
 */


// Text reverser
import promptSync from "prompt-sync"
const prompt = promptSync()
// Text Reversing function
function textReverser (str: string) {
  // this function is a text reverser function.
  if (str.length === 0) {
    return str
  } else {
    const lastChar: string = str.substr(str.length - 1)
    const restOfStr: string = str.substr(0, str.length - 1)
    const returnStr: string = lastChar + textReverser(restOfStr)
    return returnStr
  }
}
// Getting Input 
const InputText = prompt('Input a text to reverse: ')
var text:string = textReverser(InputText)
// Output 
console.log("The reverse of " + InputText + ' is ' + text + "" )
console.log("\nDone.")
