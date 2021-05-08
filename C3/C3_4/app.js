// Основная идея ООП — использовать объекты для отображения моделей из реального мира в программах и/или упрощения
// доступа к функциям, которые в противном случае было бы трудно или невозможно использовать.

// Объект может содержать следующую информацию:
//
// что это за модель;
// какие должны быть функциональные возможности;
// поведение модели.

// Основные принципы ООП
// Инкапсуляция
// Наследование
// Полиморфизм
// Абстракция

// This называют контекстом. This является объектом, который ссылается на саму функцию. То есть, таким образом,
// мы записываем в функцию свойства, которые затем можно передать новому, созданному через new, экземпляру.

// ВАЖНО! Стрелочные функции не содержат собственный контекст this, а используют значение this окружающего контекста.
// Поэтому стрелочные функции не могут быть функцией-конструктором.

// Функцией-конcтруктором может быть любая функция в JavaScript (кроме стрелочной, о которой мы разговаривали
// в предыдущем модуле). Их принято именовать с большой буквы.

function Candy(weight) {
  this.tasty = 'delicious',
  this.getWeight = function () {
    console.log(`Weight is ${weight} g`);
  }
}

const twix = new Candy(47);
const snickers = new Candy(50);

twix.getWeight();
snickers.getWeight();

// Задание 4

function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

// метод, который определяет прибор как включенный в розетку
ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
};

// метод, который определяет прибор как выключеный из розетки
ElectricalAppliance.prototype.unplug = function() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
};

// Прибор 1
function Lamp(name, brand, power, bulbType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.bulbType = bulbType;
    this.isPlugged = true;
    this.isBurning = function () {
        if (this.isPlugged) {
            console.log(this.name + " is burning!");
        }
        else {
            console.log(this.name + " is not burning!");
        }
        // console.log(this.name + " is burning!");
    };
}

Lamp.prototype = new ElectricalAppliance();

// Прибор 2
function Computer(name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
    this.isWorks = function () {
        if (this.isPlugged) {
            console.log(this.name + " works!");
        }
        else {
            console.log(this.name + " not works!");
        }
    };
}

Computer.prototype = new ElectricalAppliance();

// экземпляр лампы
const tableLamp = new Lamp("Table lamp", "Xiaomi", 5, "LED");

// экземпляр компьютера
const homePC = new Computer("Table PC", "Intel", 120, "stationary", "for work");

// отключить лампу из розетки
tableLamp.unplug();
// вызов tableLamp метода
tableLamp.isBurning();

// включить homePC в розетку
homePC.plugIn();
// вызов homePC метода
homePC.isWorks();

// результат
console.log(homePC);
console.log(tableLamp);
