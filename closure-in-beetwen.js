function filter (arr, func) {
  
    var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            var value = arr[i]
            if(func(value)) {
              newArr.push(arr[i]);
            }
        }
 		return newArr       
    }
    var arr = [1, 2, 3, 4, 5, 6, 7];

    function inBellow(a,b) {
        return function (x) {
            return x >= a && x <= b;
        }
    }
    
    
    console.log(filter(arr, inBellow(2, 5)))