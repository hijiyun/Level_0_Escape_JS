function solution(M, N) {
    return M * N - 1;
}

/*
function solution(M, N) {
   if(M === 1 && N === 1)return 0;
   
   let mCnt = 0;
   let nCnt = 0;

   for(let i = M; i > 1; i--){
     mCnt++;
   }
    for(let i = N; i > 1; i--){
     nCnt++;
   }

   return mCnt + nCnt * M;
}
*/