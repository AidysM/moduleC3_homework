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
    wow(){
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
	console.log(this.great)
}
}


Amazing.cool();
Wonderful.cool();
Wonderful.awesome();

const instance = new Wonderful();

instance.great();
instance.awesome();
instance.cool();

// Есть такая вещь, как Babel — это транспайлер. Он переписывает современный JavaScript в стандарт ES5.

