export const itemsSorting = (items, attributeToSort, sort = 'ASC')=>{
  let sortings = {
    'ASC': (a, b, attributeToSort)=>a[attributeToSort] > b[attributeToSort] ? 1 : -1,
    'DESC': (a, b, attributeToSort)=>a[attributeToSort] < b[attributeToSort] ? 1 : -1
  }
  return items.sort((a, b)=>sortings[sort](a,b, attributeToSort))
}

export const itemsSeparatorAndSort = (items, attribute = '', operator = 'eq', value='', attributeToSort = '', sort = '') => {

    let operators = {
      'eq': (a,b)=>a===b,
      'neq': (a,b)=>a!==b,
      'lt': (a,b)=>a<b,
      'lteq': (a,b)=>a<=b,
      'gt': (a,b)=>a>b,
      'gteq': (a,b)=>a>=b,
      'cont': (a,b)=>a.indexOf(b)>=0
    }
  
    if(sort !== '') items = itemsSorting(items,attributeToSort, sort)

    let separated = items.filter(item => operators[operator](item[attribute], value))
    let remains = items.filter(item => separated.indexOf(item) === -1)
    return {separated,remains}
}


export const itemsGroupBy = (items, attributeToGroup = '', attributeToSort = '', sort = '') => {

   if(sort !== '') items = itemsSorting(items,attributeToSort, sort)

  return items.reduce((a, b) => {
    (a[b[attributeToGroup]] = a[b[attributeToGroup]] || []).push(b)
    return a
  }, {})
}
