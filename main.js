const leftList = [3, 4, 2, 1, 3, 3];
const rightList = [4, 3, 5, 3, 9, 3];

const orderedLeftList = leftList.slice();
const orderedRightList = rightList.slice();

orderedLeftList.sort((a, b) => a - b);
orderedRightList.sort((a, b) => a - b);

// console.log(leftList);
// console.log(rightList);

console.log("Left List ordered", orderedLeftList);
console.log("Right List ordered", orderedRightList);

// console.log(orderedLeftList[0]);

const addedNumbers = [];

for (let i = 0; i < orderedLeftList.length; i++) {
    const numberOne = orderedLeftList[i];
    const numberTwo = orderedRightList[i];

    // console.log("Left List:", numberOne);
    // console.log("Right List:", numberTwo);

    const numberDifference = Math.abs(numberOne - numberTwo);

    console.log(numberOne, "dif", numberTwo, "=", numberDifference);

    addedNumbers.push(numberDifference);

    const total = addedNumbers.reduce((accumulator, addedNumbers) => accumulator + addedNumbers);

    console.log(total);
}