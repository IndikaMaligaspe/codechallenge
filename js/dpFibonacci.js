function fibonacci(n){
    if (n <=1) return n;
    let arr = [n];
    arr[0] = 0;
    arr[1] = 1;

    for(let i = 2; i <= n; i++){
        arr[i] = arr[i - 1] + arr [i - 2];
    }
    return arr[n];
}

console.log(fibonacci(10));
