// function solution(my_string) {
//     let result = []
//     for(let i=0; i<my_string.length; i++){
//         if(my_string[i] === my_string[i].toUpperCase()){
//             result.push(my_string[i].toLowerCase())
//         }else{
//             result.push(my_string[i].toUpperCase())
//         }
//     } return result.join("")
// }

function solution(my_string) {
  return my_string
    .split('')
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase(),
    )
    .join('');
}
