fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {

      if (Array.isArray(collection)) {
        for (i = 0; i < collection.length; i++) {
          callback(collection[i]);
        } 
      } else {
        obj_keys = Object.keys(collection)
        for (i = 0; i < obj_keys.length; i++) {
          callback(collection[obj_keys[i]])
        }
      }
     
      return collection 
    },

    map: function(collection, callback) {

      if (Array.isArray(collection)) {
        new_array = []
        for (i = 0; i < collection.length; i++) {
          new_array.push(callback(collection[i]))
        }
        return new_array
      } else {
        new_object = {}
        for (key in collection) {
          new_object[key] = callback(collection[key])
        }
        return Object.values(new_object)
      } 
    },

    reduce: function(collection, reducer, accumulator=0) {
      for (el of collection) {
        accumulator = reducer(accumulator, el, collection)
      }
        return accumulator
    },
    
    find: function(collection, callback) {
      for (i = 0; i < collection.length; i++) {
        if (callback(collection[i])) {
          return collection[i]
        }
      }
    },


  }
})()

fi.libraryMethod()
