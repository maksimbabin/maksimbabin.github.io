var arr = [];
for (var i = 0; i < 5; i++) {
    var name = prompt ('Заполните поле имя: ', '');
    console.log (name);
    arr[i] = name;
}
console.log (arr);
var enterYourName = prompt ('Введите Ваше имя: ', '');
for (var i = 0; i < 5; i++) {
    if (enterYourName === arr[i]) {
        alert (enterYourName + ' , вы успешно вошли');
        break;
    } else {
        alert ('Ошибка!');
        break;
    }
}
