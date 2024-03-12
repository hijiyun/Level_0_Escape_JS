function solution(phone_number) {
    const arr = [...phone_number];
    const end = phone_number.length;
    const num = arr.splice(end - 4, end).join('');
    const star = arr.map((i) => '*').join('');
    return star + num;
}