var num = prompt ('Введите число', '');
var exponent = prompt ('Введите степень', '');
function pow (a,b) {
    var result = a;
    for (var i = 1; i < b; i++) {
        var result = result * a;
    };
    return result;
};
var n = pow (num, exponent);
console.log (n);
