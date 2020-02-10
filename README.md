# Object array manipulation
With these functions you will be able to manipulate array of objects in an easier way.

## How to use

three functions will be made available for use, see how to use them

### itemsSorting

the `itemsSorting` is a function that orders objects, that receives the `parameters`:
  - `items`: (required) array, for the array you want to manipulate
  - `attributeToSort`: (required) attribute that will be used for sort
  - `sort`: (optional) 'ASC' or 'DESC', choice ordenation

examples
```js
const ar = [
  {letter: 'a',numberToOrder: 1},
  {letter: 'b',numberToOrder: 3},
  {letter: 'b',numberToOrder: 2}
]

console.log('ASC: ', itemSorting(ar, 'numberToOrder', 'ASC'))
console.log('DESC: ', itemSorting(ar, 'numberToOrder', 'DESC'))
``` 

returns:

```js
    ASC: [
      {letter: 'a',numberToOrder: 1},
      {letter: 'b',numberToOrder: 2},
      {letter: 'b',numberToOrder: 3}
    ]
    DESC: [
      {letter: 'b',numberToOrder: 3},
      {letter: 'b',numberToOrder: 2},
      {letter: 'a',numberToOrder: 1}
    ]
```

### itemsGroupBy

the `itemsGroupBy` is a function that group objects, that receives the `parameters`:
  - `items`: (required) array, for the array you want to manipulate
  - `attributeToGroup`: (required) attribute that will be used for group items
  - `attributeToSort`: (optional) attribute that will be used for sort
  - `sort`: (optional) 'ASC' or 'DESC', choice ordenation
  
  examples

```js
const ar = [
  {letter: 'a', numberToOrder: 1},
  {letter: 'b', numberToOrder: 2},
  {letter: 'b', numberToOrder: 3},
  {letter: 'a', numberToOrder: 4}
]

console.log('1: ', itemsGroupBy(ar, 'letter'))
console.log('2: ', itemsGroupBy(ar, 'letter', 'numberToOrder', 'DESC'))

```
returns:

```js
    1: {
        a:[
            { letter: "a", numberToOrder: 1},
            { letter: "a", numberToOrder: 4}
        ],
        b:[
            {letter: "b", numberToOrder: 2},
            {letter: "b", numberToOrder: 3}
        ]
    }
    2: {
        a:[
            { letter: "a", numberToOrder: 4},
            { letter: "a", numberToOrder: 1}
        ],
        b:[
            {letter: "b", numberToOrder: 3},
            {letter: "b", numberToOrder: 2}
        ]
    }
```


### itemsSeparatorAndSort

the `itemsSeparatorAndSort` is a function that separates objects, that receives the `parameters`:
  - `items`: (required) array, for the array you want to manipulate
  - `attribute`: (required) attibute that will be used to verification
  - `operator`: (optional) default `eq` view option in table below
  - `value`: (required) value to comparate
  - `attributeToSort`: (required) attribute that will be used for sort
  - `sort`: (optional) 'ASC' or 'DESC', choice ordenation

| attribute | Operator | Description |
| ------ | ------ | ------ |
| eq | === | equals
| neq | !== | not equals
| lt | < | less then
| lteq | <= | less then or equals
| gt | > | bigger then
| gteq | >= | bigger then or equals
| cont | indexOf | in text 

examples

```js
const ar = [
  {letter: 'a', numberToOrder: 1},
  {letter: 'b', numberToOrder: 2},
  {letter: 'b', numberToOrder: 3},
  {letter: 'a', numberToOrder: 4}
]

console.log('1: ', itemsSeparatorAndSort(ar, 'numberToOrder', 'eq', 2, 'numberToOrder', 'ASC'))
console.log('2: ', itemsSeparatorAndSort(ar, 'numberToOrder', 'lt', 3, 'numberToOrder', 'DESC'))
```
returns:

```js
    1: {
            separated:[
                {letter: "b", numberToOrder: 2}
            ],
            remains:[
                {letter: "a", numberToOrder: 1},
                {letter: "b", numberToOrder: 3},
                {letter: "a", numberToOrder: 4}
            ]
        }
    2: {
            separated:[
                {letter: "b", numberToOrder: 2},
                {letter: "a", numberToOrder: 1}
            ],
            remains:[
                {letter: "a", numberToOrder: 4},
                {letter: "b", numberToOrder: 3}
            ]
        }
```



**Felipe Duarte de Lima, 02/2020! :)**
