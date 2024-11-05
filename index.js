// Q1. Find the Product.-----------------------------

function Find_Prod(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++){
        product *= arr[i]
    }
    return product;
}
const input = "5 1 2 3 4 5";
const [n, ...arr] = input.split(" ").map(Number)
console.log(Find_Prod(arr));


// Q2. Find the Sum.-----------------------------------------

function Find_Sum(arr) {
    let sum = 0;
    for (let num of arr){
        sum += num;
    }
    return sum;
}
const a = "5 1 2 3 4 5";
const [b, ...abc] = input.split(" ").map(Number)
console.log(Find_Sum(abc));


// Q3. Count Occurrences-----------------------------------------

function findCount(arr, K) {
    let count = 0;
    for (let num of arr) {
        if (num === K) {
            count++;
        }
    }
    return count;
}
const i = "4 3\n3 3 1 2";
const [firstLine, secondLine] = i.split("\n");
const [N, K] = firstLine.split(" ").map(Number);
const ar = secondLine.split(" ").map(Number);
console.log(findCount(ar, K));


// Q4. Even Odd--------------------------

function findEvenOdd(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    return [evenSum, oddSum];
}
const input = "7\n1 2 3 4 5 6 7";
const [firstLine, secondLine] = input.split("\n");
const N = parseInt(firstLine);
const arr = secondLine.split(" ").map(Number);
console.log(findEvenOdd(arr));


// Q5. Find whether the number is present or not-----------------------------

function Find_Num(arr, M) {
    for (let num of arr) {
        if (num === M) {
            return "YES";
        }
    }
    return "NO";
}
const input = "5\n1 2 3 4 5\n2";
const [firstLine, secondLine, thirdLine] = input.split("\n");
const N = parseInt(firstLine);
const arr = secondLine.split(" ").map(Number);
const M = parseInt(thirdLine);
console.log(Find_Num(arr, M));



// Q6. Higher Age---------------------------------------

function highAge(ages) {
    const result = ages.filter(age => age >= 18);
    return result;
}
const ages = [11, 23, 3, 45, 72, 68];
console.log(highAge(ages));



// Q7. Increment the Array Elements------------------------------------

function Inc_Arr(arr) {
    const incrementedArray = arr.map(element => element + 1);
    console.log(incrementedArray.join(' '));
}
const arr = [1, 2, 3, 4, 5];
Inc_Arr(arr);



// Q8. Pass or Fail--------------------------------------------

function isAllPass(marks) {
    const allPass = marks.every(mark => mark >= 32);
    return allPass ? "YES" : "NO";
}
const marks = [13, 89, 45, 98, 67, 45, 54];
console.log(isAllPass(marks));


// Q9. Unique Color Shirt------------------------------

function uniqueColorShirts(shirts) {
    const colorCount = new Map();
    shirts.forEach(color => {
        colorCount.set(color, (colorCount.get(color) || 0) + 1);
    });
    let uniqueCount = 0;
    colorCount.forEach(count => {
        if (count === 1) {
            uniqueCount++;
        }
    });

    return uniqueCount;
}
const shirts = [3, 2, 4, 1, 2, 3];
console.log(uniqueColorShirts(shirts));


// Q10. Min and Max-------------------------------------

function findMinAndMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    return `${min} ${max}`;
}
const arr = [6, 33, 11, 44, 66, 22, 77];
console.log(findMinAndMax(arr));
