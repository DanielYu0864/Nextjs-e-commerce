//* TS recommend to use interface over types when possible

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

/*
    interface VS type
*/

//* class in typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
}

export default function play() {
  // console.log('hello world');
  const name = 'Filip';
  const age = 30;

  const person: Person = {
    name: 'Daniel',
    age: 26,
  };

  const logPersonInfo: PersonLoggerFuc = (
    personName: string,
    personAge: number = 0
  ): string => {
    const info = `Name: ${personName}, Age: ${personAge}`;

    console.log(info);

    return info;
  };
  function logPersonInfo2(person: Person) {
    const info = {
      name: person.name,
      age: person.age,
    };

    console.log(info);

    return info;
  }

  const log = logPersonInfo(name, age);
  logPersonInfo2(new Person('Adam', 26));
}
