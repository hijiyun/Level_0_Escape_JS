function solution(my_string) {
    return my_string.split("").filter((str, i) => my_string.indexOf(str) === i).join("");
}