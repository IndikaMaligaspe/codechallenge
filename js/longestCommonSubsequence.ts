// Given two strings, find the length of their longest common subsequence.

function longetCommonSubsequence(text1:string, text2:string){
    let m = text1.length;
    let n = text2.length;
    let tdArr = Array.from({length: m + 1 }, () => Array( n + 1 ).fill(0));

    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if (text1[ i - 1] === text2[j - 1]){
                tdArr[i][j] = tdArr[i - 1][j -1 ] + 1;
            }else {
                tdArr[i][j] = Math.max(tdArr[i - 1][j], tdArr[i][j - 1]);
                
            }
        }
    }
    return(tdArr[m][n]);
}

console.log(longetCommonSubsequence("abcdehijd", "acihe")) 