function solution(n)
{
    return [...(n + '')].map((el) => Number(el)).reduce((acc, cur) => acc + cur);
}