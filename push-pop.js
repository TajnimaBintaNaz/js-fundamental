
//*push string name & as same as for number 
var lastBench = ['kalam', 'balam', 'jalam'];
console.log(lastBench);
lastBench.push('malam');
lastBench.push('palam');
console.log(lastBench);

var friendsAge = [11, 20, 17];
friendsAge.push(25);
console.log(friendsAge);

//*remove an element from an array 
//*jotobar pop korbe totobar akta kore element remove hobe

friendsAge.pop();
friendsAge.pop();
console.log(friendsAge);

// remove first item from from an array

friendsAge.shift();
console.log(friendsAge);

// add first item from from an array
friendsAge.unshift(10);
console.log(friendsAge);