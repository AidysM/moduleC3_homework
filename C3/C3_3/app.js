// Прототип (Prototype) — это объект, который служит вспомогательным объектом (делегатом), к характеристикам
// которого может обратиться оригинальный объект, в случае, если сам оригинальный объект не обладает нужной
// характеристикой.

const person = {
 city: "Moscow"
}

// создаем объект с прототипом
const student = Object.create(person);

// добавляем собственное свойство объекту student
student.ownCity = "Piter";

// обращаемся к свойству, которого нет в объекте student, но есть в его прототипе person
console.log(student.city); // Moscow

for (let key in student) {
   console.log(key); // city, ownCity
}

for (let key in student) {
    if (student.hasOwnProperty(key)) {
        console.log(key); // ownCity
    }
}
console.log('');
// Функция в JavaScript это — тоже объект!

// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только
// собственных свойств. Данная функция не должна возвращать значение.

function printObject (obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      console.log(prop, obj[prop]);
    }
  }
}
printObject(person);

// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у
// переданного объекта свойство с данным именем. Функция должна возвращать true или false.

function checkPropInObj (str, obj) {
    let result = (str in obj);
    return result;
}
let res = checkPropInObj('city', person);
console.log(res);

// Написать функцию, которая создает пустой объект, но без прототипа.

function createObjWithoutProto() {
  return Object.create(null);
}
const emptyObj = createObjWithoutProto();
console.log(emptyObj);
