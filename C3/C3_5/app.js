// Классы — это лишь синтаксический сахар* над обычным прототипным наследованием. Это очень важный момент.

// *Синтаксический сахар (англ. syntactic sugar) в языке программирования — это синтаксические возможности,
// применение которых не влияет на поведение программы, но делает использование языка более удобным для человека.

class Parent {
 constructor(ownCity) {
 this.ownCity = ownCity;
 this.hasFlat = true;
 }

 getInfo(){
 console.log(`I live in the ${this.ownCity}`);
 }
}

let parent = new Parent('Moscow');
parent.getInfo();

// Наследование

class Child extends Parent {
     constructor(isStudent, city, ownCity){
         super(ownCity);
         this.isStudent = isStudent;
         this.city = isStudent ? city : ownCity;
  }
  getInfo() {
     if (this.isStudent) {
         return `I live and study in the ${this.city}`
  } else {
    return super.getInfo();
  }
 }
}

class Animal {}

const student = new Child(true, 'Piter');
console.log(student.getInfo());

const employee = new Child(false, 'New York');
console.log(employee.getInfo());

console.log(student instanceof Animal);



class Amazing {
	static cool() {
		console.log('cool')
	}
    wow() {
	    console.log('wow');
	}
}

class Wonderful extends Amazing {
	static awesome() {
	    super.cool();
	    console.log('awesome')
    }

    great() {
 	    super.cool();
	    console.log(this.great);
    }
}


Amazing.cool();
Wonderful.cool();
Wonderful.awesome();

const instance = new Wonderful();

// instance.great();
// instance.awesome();
// instance.cool();

// Есть такая вещь, как Babel — это транспайлер. Он переписывает современный JavaScript в стандарт ES5.


// Задание 5

class ElectricalAppliance {
    constructor(name, power)
    {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }
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
class Lamp extends ElectricalAppliance {
    constructor(name, brand, power, bulbType) {
        super(name, power);
        // this.name = name;
        this.brand = brand;
        // this.power = power;
        this.bulbType = bulbType;
        this.isPlugged = true;
    };
    isBurning() {
        if (this.isPlugged) {
            console.log(this.name + " is burning!");
        }
        else {
            console.log(this.name + " is not burning!");
        }
        // console.log(this.name + " is burning!");
    };
}


// Прибор 2
class Computer extends ElectricalAppliance {
    constructor(name, brand, power, type, functionality) {
        super(name, power);
        // this.name = name;
        this.brand = brand;
        // this.power = power;
        this.type = type;
        this.functionality = functionality;
        this.isPlugged = false;
    }
    isWorks() {
        if (this.isPlugged) {
            console.log(this.name + " works!");
        } else {
            console.log(this.name + " not works!");
        }
    }
}


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
