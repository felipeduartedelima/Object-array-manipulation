# itemSeparatorAndFilter
A function to separate and filter object vectors

# How to use

## Only filter

```
  const arr = [
    {id: 1, name: 'Felipe', filter: 'a'},
    {id: 3, name: 'Davi', filter: 'b'},
    {id: 2, name: 'Thiago', filter: 'a'},
  ]

  itemSeparatorAndFilter(arr, 'filter', 'b')
  
  //
  return 
  {
    filtered: [
      {id: 3, name: 'Davi', filter: 'b'}
     ],
     rest: [
      {id: 1, name: 'Felipe', filter: 'a'},
      {id: 2, name: 'Thiago', filter: 'a'}
     ]
  
  }

```

## Filter and Order by ASC

```
  const arr = [
    {id: 1, name: 'Felipe', filter: 'a'},
    {id: 3, name: 'Davi', filter: 'b'},
    {id: 2, name: 'Thiago', filter: 'a'},
  ]

  itemSeparatorAndFilter(arr, 'filter', 'b', 'ASC', 'id')
  
  //
  return 
  {
    filtered: [
      {id: 3, name: 'Davi', filter: 'b'}
     ],
     rest: [
      {id: 1, name: 'Felipe', filter: 'a'},
      {id: 2, name: 'Thiago', filter: 'a'}
     ]
  
  }

```

## Filter and Order by DESC

```
  const arr = [
    {id: 1, name: 'Felipe', filter: 'a'},
    {id: 3, name: 'Davi', filter: 'b'},
    {id: 2, name: 'Thiago', filter: 'a'},
  ]

  itemSeparatorAndFilter(arr, 'filter', 'b', 'DESC', 'id')
  
  //
  return 
  {
    filtered: [
      {id: 3, name: 'Davi', filter: 'b'}
     ],
     rest: [
      {id: 2, name: 'Thiago', filter: 'a'},
      {id: 1, name: 'Felipe', filter: 'a'}
     ]
  
  }

```
