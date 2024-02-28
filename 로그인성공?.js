// function solution(id_pw, db) {
//   if (db.find(([el]) => el == id_pw[0])) {
//     return db.find(([el]) => el == id_pw[0])[1] == id_pw[1]
//       ? 'login'
//       : 'wrong pw';
//   } else return 'fail';
// }

function solution(id_pw, db) {
  const user = db.find(([el]) => el == id_pw[0]);
  if (user) {
    return user[1] == id_pw[1] ? 'login' : 'wrong pw';
  } else return 'fail';
}
