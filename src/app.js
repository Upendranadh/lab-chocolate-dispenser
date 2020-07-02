var chocolates = [
    "green",
    "green",
    "green",
    "silver",
    "blue",
    "crimson",
    "purple",
    "red",
    "crimson",
    "purple",
    "purple",
    "green",
    "pink",
    "blue",
    "red",
    "silver",
    "crimson",
    "purple",
    "silver",
    "silver",
    "red",
    "green",
    "red",
    "silver",
    "pink",
    "crimson",
    "purple",
    "green",
    "red",
    "silver",
    "crimson",
    "pink",
    "silver",
    "blue",
    "pink",
    "crimson",
    "crimson",
    "crimson",
    "red",
    "purple",
    "purple",
    "green",
    "pink",
    "blue",
    "red",
    "crimson",
    "silver",
    "purple",
    "purple",
    "purple",
    "red",
    "purple",
    "red",
    "blue",
    "silver",
    "green",
    "crimson",
    "silver",
    "blue",
    "crimson",
    "purple",
    "green",
    "pink",
    "green",
    "red",
    "silver",
    "crimson",
    "blue",
    "green",
    "red",
    "red",
    "pink",
    "blue",
    "silver",
    "pink",
    "crimson",
    "purple",
    "green",
    "red",
    "blue",
    "red",
    "purple",
    "silver",
    "blue",
    "pink",
    "silver",
    "crimson",
    "silver",
    "blue",
    "purple",
    "purple",
    "green",
    "blue",
    "blue",
    "red",
    "red",
    "silver",
    "purple",
    "silver",
    "crimson",
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates, color, number) {
    if (number > 0)
        for (let i = 0; i < number; i++) {
            chocolates.unshift(color);
        }
    else if (number <= 0) {
        return "Number cannot be zero/negative";
    }
}

//Progression 2: Remove ___ chocolates from the top the dispenser

function removeChocolates(chocolates, number) {
    if (number < 0) {
        return "Number cannot be zero/negative";
    } else if (number <= chocolates.length) {
        let removedchocolates = chocolates.splice(0, number);
        return removedchocolates;
    } else if (number > chocolates.length) {
        return "Insufficient chocolates in the dispenser";
    }
}

//Progression 3: Dispense ___ chocolates

function dispenseChocolates(chocolates, number) {
    if (number > chocolates.length) {
        return "Insufficient chocolates in the dispenser";
    } else if (number <= 0) {
        return "Number cannot be zero/negative";
    } else if (number <= chocolates.length) {
        var dischocolates = chocolates.splice(chocolates.length - number, number);
        dischocolates.reverse();
        return dischocolates;
    }
}

//Progression 4: Dispense ___ chocolates of ____ color

function dispenseChocolatesOfColor(chocolates, number, color) {
    if (number > chocolates.length) {
        return "Insufficient chocolates in the dispenser";
    } else if (number <= 0) {
        return "Number cannot be zero/negative";
    } else {
        let chocolatesRev = chocolates.reverse();
        let sameColour = chocolatesRev.filter((ele) => {
            while (number > 0) {
                if (ele === color) {
                    number--;
                    return true;
                } else return false;
            }
        });
        return sameColour;
    }
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

let noOfChocolates = (chocolates) => {
    let arr = [];
    chocolates.forEach((ele, index, chocolates) => {
        let n = index + 1;
        let count = 1;
        while (n <= chocolates.length - 1) {
            if (ele === chocolates[n]) {
                count++;
                chocolates.splice(n, 1);
                n++;
            } else {
                n++;
            }
        }
        arr.push(count);
    });
    return arr;
};

//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(chocolates) {
    let arrcount = [];
    let arrcolor = [];
    let sortedArray = [];
    chocolates.forEach((ele, index, chocolates) => {
        let n = index + 1;
        let count = 1;
        while (n <= chocolates.length - 1) {
            if (ele === chocolates[n]) {
                count++;
                chocolates.splice(n, 1);
                n++;
            } else {
                n++;
            }
        }
        arrcount.push(count);
        arrcolor.push(ele);
    });
    arrcount.forEach((ele, index, arrcount) => {
        let smallIndexCount = 0;
        for (let i = index + 1; i < arrcount.length; i++) {
            if (arrcount[index] > arrcount[i]) {
                let temp = arrcount[i];
                arrcount[i] = arrcount[index];
                arrcount[index] = temp;
                smallIndexCount = i;
            }
        }
        for (let i = 0; i < arrcount[index]; i++) {
            sortedArray.push(arrcolor[smallIndexCount]);
        }
    });

    return sortedArray;
}

//Progression 7: Change ___ chocolates of ____ color to ____ color

function changeChocolateColor(chocolates, number, color, finalColor) {
    var count = number;
    for (let i = 0; i <= chocolates.length - 1; i++) {
        if (color === finalColor) {
            return "Can't replace the same chocolates"
        } else if (chocolates[i] === color && number > 0) {
            chocolates.splice(i, 1, finalColor);
            count--
        } else if (number < 0) {
            return 'Number cannot be zero/negative';
        }

    }
    return chocolates;
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(chocolate, color, finalColor) {
    var arr = [];
    var count = 0
    var changedArray = chocolate.map(ele => {

        if (ele === color) {
            count++
            return finalColor;
        } else if (ele === finalColor && ele !== color) {
            count++
            return ele;
        } else {
            return ele;
        }
    });
    arr[0] = count;
    arr[1] = changedArray;
    if (color === finalColor) {
        return "Can't replace the same chocolates"
    } else {
        return arr;
    }


}

//Challenge 1: Remove one chocolate of ____ color from the top

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed