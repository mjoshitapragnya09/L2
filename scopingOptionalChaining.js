// (a) Scoping Output & Explanation
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile.user?.details?.email); 
console.log(profile.user?.details?.phone); 
const product = {
  name: "Laptop",
  specs: null
};
console.log(product.specs?.weight);  // undefined, no error
