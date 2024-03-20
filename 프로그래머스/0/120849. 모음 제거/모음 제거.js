function solution(my_string) {
    const VOWELS = 'aeiou';
    return my_string.split('').filter((v) => !(VOWELS.includes(v))).join('');
}