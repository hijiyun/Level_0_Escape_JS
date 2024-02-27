function solution(id_pw, db) {
    const user = db.find(user => user[0] === id_pw[0]);
    return user ? (user[1] === id_pw[1] ? "login" : "wrong pw") : "fail";
}