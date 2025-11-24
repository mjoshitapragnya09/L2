console.log(`5 + 7 = ${5 + 7}`);
const multiLine = `
Line 1
Line 2
Line 3
`;
console.log(multiLine);
const firstName = "John";
const lastName = "Doe";
console.log(`${firstName} ${lastName}`);
const square = n => n * n;
const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test(); 
const obj2 = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
obj2.test(); 
const product = { name: "Pen", price: 10 };
const copy = { ...product };
const a = { x: 1 };
const b = { y: 2 };
const mergedObj = { ...a, ...b };
const maxValue = (...nums) => Math.max(...nums);
const arr = [10, 20, 30];
const [a1, b1] = arr;
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
const info = {};
console.log(info.details?.email); // undefined
for (var i = 0; i < 3; i++) {}
console.log(i); // 3 → var is function-scoped
for (let j = 0; j < 3; j++) {}

let speed = kmph > 60 ? "Fast" : "Normal";
const category = age >= 18 ? "Adult" : "Minor";
const checkNumber = n =>
  n > 0 ? "Positive" : n === 0 ? "Zero" : "Negative";
const nums = [1,2,3];
const newNums = [...nums, 4, 5];
const aArr = ["x", "y"];
const bArr = ["z"];
const combined = [...aArr, ...bArr];
const printNames = (...names) => names;
const user = { id: 101, status: "active" };
const { id, status } = user;
const role = "admin";
const user2 = {
  id,
  role
};
const name = "Sam";
const person = {
  name,
  greet() {
    console.log(`Hello ${name}`);
  }
};
console.log(`Today is: ${new Date().toDateString()}`);
const NAME = "John";
const SCORE = 92;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);
const add = (x, y) => x + y;
const isAdult = age => age >= 18;
const double = n => n * 2;
const arrClone = [...nums];
const arrBegin = [100, ...nums];
const objA = { x: 1, y: 2 };
const objB = { y: 99 };
const mergedOverride = { ...objA, ...objB };
const user3 = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(user3.address?.city);
console.log(user3.job?.title); 
const car = {
  model: "BMW"
};
console.log(car.engine?.type); 
