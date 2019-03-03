# Common algorithms
[![CircleCI](https://circleci.com/gh/Vidovitsch/common-algorithms/tree/master.svg?style=shield)](https://circleci.com/gh/Vidovitsch/common-algorithms/tree/master)

A small module that contains the most common sorting and searching algorithms.

## Installation
```
npm install --save common-algorithms
```

## Contents

|Algorithms            |Type  |O (time)                          |Θ (time)                          |Ω (time)              |O (space)         |
|:--------------------:|:----:|:--------------------------------:|:--------------------------------:|:--------------------:|:----------------:|
|Selection Sort        |Sort  |n<sup>2</sup>                     |n<sup>2</sup>                     |n<sup>2</sup>         |1                 |
|Insertion Sort        |Sort  |n<sup>2</sup>                     |n<sup>2</sup>                     |n                     |1                 |
|Quick Sort            |Sort  |n<sup>2</sup>                     |n * log<sub>2</sub>(n)            |n * log<sub>2</sub>(n)|log<sub>2</sub>(n)|
|Merge Sort            |Sort  |n * log<sub>2</sub>(n)            |n * log<sub>2</sub>(n)            |n * log<sub>2</sub>(n)|n                 |
|Heap Sort             |Sort  |n * log<sub>2</sub>(n)            |n * log<sub>2</sub>(n)            |n * log<sub>2</sub>(n)|1                 |
|Shell Sort            |Sort  |n * log<sub>2</sub>(n)<sup>2</sup>|n * log<sub>2</sub>(n)<sup>2</sup>|n * log<sub>2</sub>(n)|1                 |
|Shuffle (Fisher–Yates)|Sort  |n                                 |n                                 |n                     |1                 |
|Binary Search         |Search|log<sub>2</sub>(n)                |log<sub>2</sub>(n)                |1                     |1                 |

## Usage

### Using require()
```node
const algorithms = require('common-algorithms')
```
### Using ES6 Import/Export
```node
import * as algorithms from 'common-algorithms'
```
### Exports
The module exports the following object:
```node
{
  search: {
    binarySearch <Function>,
  },
  sort: {
    heapSort <Function>,
    insertionSort <Function>,
    mergeSort <Function>,
    quickSort <Function>,
    selectionSort <Function>,
    shellSort <Function>,
    shuffle <Function>,
  },
}
```
### Custom comparator
A custom comparator can be given as a parameter.

Example 1:
```node
const { quickSort } = require('common-algorithms').sort

const arr = [12, 0, -23, 4, 6, 14, 102, -5];

quickSort(arr, (a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0
});
```

Example 2:
```node
const { quickSort } = require('common-algorithms').sort

function SomeObj(value) {
  this.value = value;
}
        
const arr = [new SomeObj(5), new SomeObj(-5), new SomeObj(-22), new SomeObj(108), new SomeObj(37)];

quickSort(arr, (a, b) => {
  if (a.value < b.value) return -1;
  if (a.value > b.value) return 1;
  return 0;
});
```
