### Number functions

```
num.toString(base)                  // (32).toString(2) -> 100000

num.toExponential(decDigits)        // (3.128).toExponential(2) -> 3.13e+0

num.toFixed(decDigits)              // (3.128).toFixed(2) -> 3.13

num.toPrecision(allDigits)          // (3.128).toPrecision(2) -> 3.1

Number(str)

parseFloat(str)

parseInt(str)

Number.MAX_VALUE                    // largest possible number to store in variable

Number.MIN_VALUE                    // lowest possible number to store in variable
```

### String functions

```
str.slice(start, end)               // get substring

str.substr(start, length)           // get substring

str.replace(oldsubstr, newsubstr)   // can be used with regexp

str.split(separator)                // split string into array

str.indexOf(substr, [start])        // find first ocurrence of substring in string

str.lastIndexOf(substr, [start])    // find last ocurrence of substring in string

str.search(substr)                  // find first occurence of substr, substr can be regexp
```

### Array functions

```
arr.length

arr.join(separator)                 // joins array into string

arr1.concat(arr2)                   // concatenate arrays, returns new array, does not modify arr1 and arr2

arr.splice(start, length, ...elems) // cuts and returns part of array, inserts elements into source array into place where elements were cut

arr.slice(start, end)               // cuts and returns part of array, does not modify source array

arr.sort()                          // sort array of strings alphabetically

arr.sort(compareFun)                // sort using compare function

arr.sort((a, b) => a - b)           // sort array numerically

arr.reverse()                       // reverse array

arr.forEach((item, index) => {...}) // calls function for each item in source array

arr.map((item, index) => {...})     // creates new array by calling function for each item in source array, does not change source array

arr.filter((item, index) => {...})  // creates new array by filtering source array, does not change source array

arr.reduce((total, item, index) => {...}, initial)    // creates new array by reducing source array into one value, does not change source array

arr.every((item, index) => {...})   // checks if all items pass the test

arr.some((item, index) => {...})    // checks if at least one item passes the test

arr.find((item, index) => {...})    // finds first item that passes the test

arr.findIndex((item, index) => {...})    // finds index of first item that passes the test

arr.indexOf(item, [start])          // find first ocurrence of item in array

arr.lastIndexOf(item, [start])      // find last ocurrence of item in array
```

### Special values

```
typeof undefined = undefined        // no value

typeof null = object                // null object

typeof NaN = number                 // not a number

typeof Infinity = number            // infinity

typeof -Infinity = number           // -infinity
```
