// It is a convention to define generic types with `<T>` the T is for "type":
// If allowing multiple types then the convention is to use `<U>`

// Simple generic function
function echo<T>(data: T) {
  return data;
}

console.log(echo('TK').length); // 2

// Built in generics
const testResults: Array<number> = [1.94, 2.33];

testResults.push('hey'); // error
testResults.push(5); // pass

// Arrays
function printAll<T>(args: T[]) {
  args.forEach(elem => console.log(elem));
}

printAll<string>(['Apples', 'Bananas']);

// Generic types
const echo2: <T>(data: T) => T = echo;
echo2<string>('Something');

// Generic classes, most of the time when using generics you'll be using them in classes
class SimpleMath<T extends number | string, U extends number | string> {
  basicValue: T;
  multiplyValue: U;
  calculate(): number {
    return +this.basicValue * +this.multiplyValue; // `+` at the begining turns strings to numbers
  }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.basicValue = '10';
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate()); // 200
