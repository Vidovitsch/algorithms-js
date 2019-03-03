# Common algorithms
[![CircleCI](https://circleci.com/gh/Vidovitsch/common-algorithms/tree/master.svg?style=shield)](https://circleci.com/gh/Vidovitsch/common-algorithms/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/Vidovitsch/common-algorithms-js/badge.svg?branch=master)](https://coveralls.io/github/Vidovitsch/common-algorithms-js?branch=master)

A small module that contains the most common sorting an searching algorithms.

## Installation
```
npm install --save common-algorithms
```

## Contents

| Algorithms        | Type           | O (time)  | Θ (time) | Ω (time) | O (space)
|:-------------:|:-------------:|:-----:|:-----:|:-----:|:-----:|
|Selection Sort|Sort|n<sup>2</sup>|n<sup>2</sup>|n<sup>2</sup>|1|
|Insertion Sort|Sort|n<sup>2</sup>|n<sup>2</sup>|n|1|
|Quick Sort|Sort|n<sup>2</sup>|n * log<sub>2</sub>(n)|n * log<sub>2</sub>(n)|log<sub>2</sub>(n)|
|Merge Sort|Sort|n * log<sub>2</sub>(n)|n * log<sub>2</sub>(n)|n * log<sub>2</sub>(n)|n|
|Heap Sort|Sort|n * log<sub>2</sub>(n)|n * log<sub>2</sub>(n)|n * log<sub>2</sub>(n)|1|
|Shell Sort|Sort|n * log<sub>2</sub>(n)<sup>2</sup>|n * log<sub>2</sub>(n)<sup>2</sup>|n * log<sub>2</sub>(n)|1|

