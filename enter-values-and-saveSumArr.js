var numbers = [];
var sum = 0;
while(true) {
    var value = prompt("введите число", '0');
    if (value === "" || isNaN(value) || value === null) break; 
        numbers.push(+value);
    }
for(var i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

alert(sum)