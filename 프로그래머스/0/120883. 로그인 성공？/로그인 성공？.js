function solution(id_pw, db) {
    const flatDb = db.flat();
    const searchIdIndex = flatDb.indexOf(id_pw[0])
    return searchIdIndex < 0 ? 'fail' : id_pw[1] === (flatDb[searchIdIndex + 1]) ? 'login' : 'wrong pw'
}