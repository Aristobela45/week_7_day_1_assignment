//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max", "HAS", "PuRple", "dog"]

function findWords(string, list) {
    let match = False
    for (let i in list) {
        let name = list[i];
        if (string.toLowerCase().includes(name.toLowerCase())) {
            console.log('Matched ${name');
            match = True;
        }
    }
}

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let GivenArr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]

function replaceEvens(arr) {
    for (i in arr) {
        if (i % 2 == 0) {
            arr.splice(i, 1, "even");
        }
    }
    return arr;

}
console.log(replaceEvens(givenArr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



// Also, revist 2 of the code wars problems you've done so far and solve them using JavaScript instead. 
// (Recommended to do easier problems starting out, 
// if you would like to do harder challenges that is fine but not required.)

// Q's 1 codewars 
// def parts_sums(ls):
//     sums = [sum(ls)]
//     for i in ls:
//         sums.append(sums[-1]-i)
//     return sums

ls = [0, 1, 3, 6, 10]

function partsSums(ls) {
    let sum = ls.reduce((sum, n) => sum + n, 0)
    res = [sum]
    for (let i = 1; i <= ls.length; i++) {
        sum -= ls[i - 1]
        res.push(sum)
    }
    return res
}
console.log(partsSums(ls))

// Q's 2 codewars
// def count(string):
//     return {c:string.count(c) for c in string} 