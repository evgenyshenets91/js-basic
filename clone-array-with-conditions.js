var arr = [5, 4, 3, 8, 0];

function filterRange(arr, a, b) {
    var result = [];
   for (var i = 0; i < arr.length; i++) {
       if(arr[i] >= a && arr[i] <= b) {
           result.push(arr[i]);
       }
   }
   return result;
}




alert(filterRange(arr, 3, 5));

