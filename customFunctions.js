function customMap(array, callback){
  return array.map(callback)
}

function customReduce(array, callback, initialValue = undefined){
  if(initialValue !== undefined){
    return array.reduce(callback, initialValue)
  }
  return array.reduce(callback)  
}

function customFilter(array, callback){
  return array.filter(callback)
}

function customForEach(array, callback){
  return array.forEach(callback)
}

module.exports = {
  customMap,
  customReduce,
  customFilter,
  customForEach
}