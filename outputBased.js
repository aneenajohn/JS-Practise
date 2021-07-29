// * Find output
// * Q1 

// const person1 = {
// 	name: 'Hetav',
// 	address: {
// 	  city: 'Surat',
// 	  state: 'GJ'
// 	}
//   }
  
//   const person2 = person1;
  
//   const person3 = { ...person1 }
  
//   person2.name = 'Person2';
//   person3.address.city = 'Mumbai';
  
//   console.log(person1);
//   console.log(person2);
//   console.log(person3);
  

// * Q2

// const promise = new Promise((resolve, reject) => {
// 	console.log(1);
// 	setTimeout(() => {
// 	  console.log("timerStart");
// 	  resolve("success");
// 	  console.log("timerEnd");
// 	}, 0);
// 	console.log(2);
// });
// promise.then(console.log);
// console.log(3);


// * Q3

var person = {};
// console.log(person);

({
  name: person["username"]
} = {
  username: "yomeshgupta",
  email: "team@devtools.tech",
  name: "yomesh",
});

console.log(person.username, person.name);
// console.log(person);

