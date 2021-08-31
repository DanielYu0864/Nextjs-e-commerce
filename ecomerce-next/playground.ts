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
  const names: string[] = ['Filip', 'John'];
  const numbers: Array<number> = [1, 2, 3, 4, 5, 6];

  const random = Math.random() > 0.5 ? 'Hello' : [1, 2];

  if (typeof random === 'string') {
    random.toLowerCase();
  } else {
    console.log(random);
  }
}
