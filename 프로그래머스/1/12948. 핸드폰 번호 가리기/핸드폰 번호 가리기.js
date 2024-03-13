function solution(phone_number) {
    return answer = (phone_number.split('').slice(0, -4).map(item => "*") + phone_number.split('').slice(-4)).split(',').join('');
}