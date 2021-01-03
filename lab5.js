function minElement(arr) {
    let current_min = Number.MAX_VALUE;
    arr.forEach((element) => {
        if (element < current_min) {
            current_min = element
        }
    });
    return current_min
}

function maxElement(arr) {
    let current_max = Number.MIN_VALUE;
    arr.forEach((element) => {
        if (element > current_max) {
            current_max = element;
        }
    });
    return current_max;
}

function getMedian(arr) {
    arr.sort();
    if (arr.length % 2 === 1) {
        return arr[Math.floor(arr.length / 2)];
    }
    return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
}

function quickSort(arr, left, right) {
    let index;
    if (arr.length > 1) {
        index = partition(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }
    return arr;
}

function partition(arr, left, right) {
    let pivot = arr[Math.floor((left + right) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function count(elementsCounter, Num){
    for (let i = 0; i < Num; i++) {
        let elementTagName = elements.item(i).tagName;
        if (elementsCounter.has(elementTagName)) {
            let number = elementsCounter.get(elementTagName);
            elementsCounter.set(elementTagName, number + 1);
        } else {
            elementsCounter.set(elementTagName, 1);
        }
    }
    return elementsCounter;
}
let arr = [];

for (let i = 0; i < 1000; i++) {
    arr.push(Math.random());
}

min = minElement(arr);
max = maxElement(arr);
median = getMedian(arr);


console.log(`Минимум: ${min}
Максимум: ${max}
Медиана: ${median}`);

arrCopy = [...arr];
arrCopy.sort();
quickSortedArr = quickSort(arr, 0, arr.length - 1);

console.log(quickSortedArr);

elementsNumber = document.getElementsByTagName('*').length;
elements = document.getElementsByTagName('*');

elementsCounter = new Map();

console.log(count(elementsCounter,elementsNumber));