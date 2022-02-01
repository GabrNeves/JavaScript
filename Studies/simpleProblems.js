/* Create a function that when it get a array of items, it sums all even numbers and return the result*/

// Using for loop:
function sumEvenList(list) {
    for (var i = 0, sum = 0; i < list.length; i++) {
        if (list[i] % 2 === 0) {
          sum += list[i];
        }
    }
    return console.log(sum)
}

sumEvenList([1,7,17,8,4,6]);




