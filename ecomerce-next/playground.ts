//* TS recommend to use interface over types when possible
/*
    interface VS type
*/
//* interface this describe data structures in more natural way
/*
 *describing objects, shipment, orders
 */
// interface Person {
//   name: string;
//   age: number;
// }

/*
 * describe function in interface
 */
// interface PersonLoggerFuc {
//   (name: string, age: number): string;
// }
/*
 * describe function in type
 */
// type PersonLoggerFuc = (name: string, age: number) => string;

/*
//* type aliases
  *=> to describe function types

  *EX
   * type Data = string
*/
// type Person = {
//   name: string;
//   age: number;
// };
/*
 ? '?' in TS params
 ?=> set argument as optional parameters
 */
type PersonLoggerFuc = (name: string, age?: number) => string;

//* class in typescript
// class Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     (this.name = name), (this.age = age);
//   }
// }

interface Person {
  kind: 'business' | 'academic' | 'other';
  name: string;
  age: number;
}
//* extends with interface
interface BusinessPerson extends Person {
  kind: 'business';
  salary: number;
}

interface AcademicPerson extends Person {
  kind: 'academic';
  publications: string[];
}

type Human =
  | BusinessPerson
  | AcademicPerson
  | { kind: 'other'; special: string };

//* extends with type
type Car = {
  name: string;
};
type RaceCar = {
  speed: number;
  maxSpeed: 200; //*  has tobe 200 on matter what
  team: string;
} & Car & {
    mileage: number;
  };

type CityCar = {
  space: TemplateStringsArray;
  maxSpeed: 100; //*  has tobe 200 on matter what
} & Car;

//* Unions in TS => "|"
type Car2 = RaceCar | CityCar;

//! type & interface can be extends with each other

export default function play() {
  const person: Person = {
    kind: 'academic',
    name: 'daniel',
    age: 123,
  };
  const person2: BusinessPerson = {
    kind: 'business',
    name: 'daniel',
    age: 23,
    salary: 5500,
  };

  const car: Car = {
    name: 'my love',
  };

  const car2: RaceCar = {
    name: 'my love II',
    speed: 123,
    maxSpeed: 200,
    mileage: 100000000000000,
    team: 'ferari',
  };
  //* to force ts call team
  console.log((car as RaceCar).team);
  console.log((<RaceCar>car).team);

  function logPersonInfo(human: Human) {
    if (human.kind === 'academic') {
      console.log(human.publications);
    } else if (human.kind === 'business') {
      console.log(human.salary);
    } else {
      console.log(human.special);
    }
  }

  //* Unions in TS => "|"
  function logCarInfo(car: RaceCar | CityCar) {
    console.log();

    switch (car.maxSpeed) {
      case 200:
        console.log(car.team);
        break;
      case 100:
        console.log(car);
        break;
      // default
      // console.log(car)
    }
  }
}
