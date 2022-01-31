//using for loop

function countDown(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
    console.log('That is it.');
}

//countDown(37)

//recursive function

function countDownRecursive(n) {
    if (n <= 0) { //This if statement is resposible to get out of the recursive function. Once n=0, it prints 'That is it.' and finish the code.
        return console.log('That is it.');
    } else {
        console.log(n);
        countDownRecursive(n-1);
    }

}

countDownRecursive(3)

/*
- User calls the function and says that n=3
- Program checks: is 3 igual or lower than 0 ==> NO
- Program jumps to else statement.
- Print the value of n on screen. ==> 3
- Program calls himself, but set initial value of n-1. ==> 2
- Program checks: is 2 igual or lower than 0 ==> NO
- Program jumps to else statement.
- Print the value of n on screen. ==> 2
- Program calls himself, but set initial value of n-1. ==> 1
- Program checks: is 1 igual or lower than 0 ==> NO
- Program jumps to else statement.
- Print the value of n on screen. ==> 1
- Program calls himself, but set initial value of n-1. ==> 0
- Program checks: is 0 igual or lower than 0 ==> YES
- Program return 'That is it.' and go backwards 'closing' all previous called functions
*/
/*
countDownRecursive(3)
    countDownRecursive(2)
        countDownRecursive(1)
            countDownRecursive(0)
            return
        return
    return
return*/