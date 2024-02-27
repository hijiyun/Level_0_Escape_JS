function solution(rsp) {
    const arr = [];
    
    for (let num of rsp.split("")) {
        if (num === "0") arr.push("5");
        if (num === "2") arr.push("0");
        if (num === "5") arr.push("2");
    }
    return arr.join("");
}