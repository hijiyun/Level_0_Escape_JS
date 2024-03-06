function solution(phone_number) {
    const privacyNum = (String(phone_number)).slice(0, -4).replaceAll(/[0-9]/g, '*')
    return privacyNum + (String(phone_number)).slice(-4)
}