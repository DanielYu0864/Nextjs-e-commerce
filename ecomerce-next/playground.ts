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
/* + */
interface Person {
  prop: string;
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

interface Person2 {
  name: string;
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

type SUVCar = {
  hybrid: boolean;
} & Car;

//* Unions in TS => "|"
type Car2 = RaceCar | CityCar;

//! type & interface can be extends with each other

type Noop = () => any;
type Noop2 = () => void;

function anyVSvoid() {
  function fuc1(x: Noop): void {
    const result = x();
    result();
  }
  function fuc2(x: Noop2): void {
    const result = x();
    // result();
  }
}

export default function play() {
  const person: Person = {
    kind: 'academic',
    name: 'daniel',
    age: 123,
    prop: 'none',
  };
  const person2: BusinessPerson = {
    kind: 'business',
    name: 'daniel',
    age: 23,
    salary: 5500,
    prop: 'none',
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
      default:
        // cannot be call as never if there is still arguments
        const _never: never = car;
        return _never;
    }
  }
  //* Generic Objects Types
  function printInfo(obj: { [key: string]: string | number | boolean }) {}

  //* Custom Generic Type
  class Logger<T> {
    // 'T' stand for Type
    constructor() {}
    log(items: Array<T>, callback: (arg: T) => void) {
      items.forEach((item) => {
        console.log(item);
      });
    }
  }

  interface Student extends Person2 {
    age: number;
    name: string;
  }

  type StudentInfo<T extends any = Student> = T extends Student
    ? {
        data: T;
        grades: number[];
      }
    : string;
  /*
   * Both works
   */
  // interface StudentInfo<T extends Student = Student> {
  //   data: T;
  //   grades: number[];
  // }

  interface PostGraduadeStudent extends Person {
    age: number;
    city: string;
    projects: string[];
  }

  class Logger2<T extends Person2 = Person2> {
    // 'extends Person2 = Person2' <= Default values of generics
    log(items: Array<T>, callback: (arg: T) => void) {
      items.forEach((item) => {
        console.log(item);
      });
    }
  }

  printInfo({
    name: 'daniel',
    age: '26',
  });

  let somtimeNew: unknown;
  //* => unknown is the type-safe counterpart of any. Anything is assignable to unknown, but unknown isn’t assignable to anything but itself and any without a type assertion or a control flow based narrowing.
  const noReturn = (): void => {};
  //* => void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value:

  const logger = new Logger<string>();

  const cars = ['audi', 'toyota', 'skoda'];
  logger.log(cars, (car) => {
    console.log(car);
  });

  const logger2 = new Logger<Person>();

  const persons: Person[] = [
    {
      name: 'Dan',
      age: 24,
      kind: 'other',
      prop: 'none',
    },
    {
      name: 'Daniel',
      age: 26,
      kind: 'other',
      prop: 'onjob',
    },
  ];

  logger2.log(persons, (person) => {
    console.log(person);
  });

  function logStudentInfo(info: StudentInfo<PostGraduadeStudent>) {
    console.log(info.data.name);
    console.log(info.data.age);
    console.log(info.data.projects);
  }
  function logStudentInfo2(info: StudentInfo) {
    console.log(info.data.name);
    console.log(info.data.age);
  }
}

//* Single From Array
// interface Person3 {
//   name: string;
// }
// type SingleType<T> = T extends any[] ? T[number] : unknown;

// type Type1 = SingleType<string[]>;
// type Type2 = SingleType<number[]>;
// type Type3 = SingleType<Person>;
// type Type4 = string[][number];

//* Array index type
// interface Person3 {
//   name: string;
// }

// type CustomArray<T = any> = {
//   [index: number]: T;
//   // in array, index always tobe number
// };

// const items: CustomArray<string> = ['1', '2', '3'];
// const items2: CustomArray<number> = [1, 2, 3];

//* Mapped Types
// interface Person3 {
//   name: string;
// }

// type CustomObject<T = any> = {
//   [key: string]: T;
//   //* in object, key always tobe string
// };

// const person: CustomObject<string | number | Person3> = {
//   age: 23,
//   name: 'dan',
//   person: {
//     name: 'other guy',
//   },
// };

//* Typeof
interface Person3 {
  name: string;
}

function logger(...args: any[]) {
  return 'hello worlds';
}

const kindaLogger: typeof logger = (name: string, age: number) => 'hello guys';

kindaLogger('string', 0);

const person = {
  name: 'Dan',
  age: 26,
};

const person2: typeof person = {
  name: 'John',
  age: 30,
};
