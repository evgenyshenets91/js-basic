function camelize(str) {

  var arr = str.split("");
  for(var i = 0; i < arr.length; i++)
  arr[i] === "-" && (arr[i + 1] = arr[i + 1].toUpperCase()) && (arr[i] = "")

  return arr.join("");
}

alert( camelize("background-color") ); // backgroundColor
alert( camelize("list-style-image") ); // listStyleImage
alert( camelize("-webkit-transition") ); // WebkitTransition


function camelize(str) {
  var arr = str.split('-');

  for (var i = 1; i < arr.length; i++) {
    // преобразовать: первый символ с большой буквы
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join('');
}