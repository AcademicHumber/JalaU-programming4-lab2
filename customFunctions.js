function customMap(array, callback){
  const result = []

  for (let i = 0; i < array.length; i++){
    result.push(callback(array[i]))
  }

  return result
}

function customReduce(array, callback, initialValue = undefined){
  let accumulator = initialValue !== undefined ? initialValue : array[0]
  const startIndex = initialValue !== undefined ? 0 : 1

  // acumular os elementos
  for(let i = startIndex; i < array.length; i++){
      accumulator = callback(accumulator, array[i])
  }

  return accumulator
}

function customFilter(array, callback){
  const result = []

  for(let i = 0; i < array.length; i++){
    const passesFilter = callback(array[i], i, array)
    if(passesFilter){
      result.push(array[i])
    }
  }

  return result
}

function customForEach(array, callback){
  for(let i = 0; i < array.length; i++){
    callback(array[i], i, array)
  }
}

module.exports = {
  customMap,
  customReduce,
  customFilter,
  customForEach
}