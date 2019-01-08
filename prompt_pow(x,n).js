function pow(x,n) {
var result = x;
for(var i = 1; i < n; i++) {
  result *= x;
 
}
return result;

}

var x = prompt("введите х", '');
var n = prompt("введите n", "");
 
if (n < 1) {
  alert("введите n больше единицы")
} else {
  alert(pow(x,n))
}