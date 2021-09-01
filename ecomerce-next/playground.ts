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
  name: string;
  age: number;
}
//* extends with interface
interface BusinessPerson extends Person {
  salary: number;
}

interface AcademicPerson extends Person {
  publications: string[];
}

//* extends with type
type Car = {
  name: string;
};
type RaceCar = {
  speed: number;
} & Car & {
    mileage: number;
  };

//! type & interface can be extends with each other

export default function play() {
  const person: Person = {
    name: 'daniel',
    age: 123,
  };
  const person2: BusinessPerson = {
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
    mileage: 100000000000000,
  };
}
