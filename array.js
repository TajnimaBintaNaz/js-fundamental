
//*numeric veriables

var friendsAge = [11, 20, 17];

//*string veriables

var friendsName = ['mahi', 'raz', 'rahul'];

var vowels = ['a', 'e', 'i', 'o', 'u'];

var family = ['ma', 'bap', 'bon', 'dada', 'nana', 'mama', 'chacha', 'choddohushti'];

//*vowels length

var vowelsCount = vowels.length;

//console.log(vowelsCount);

//*index number position 
// ***kono elemnt jodi array te na thake taile seta k -1 dara define kora hoi ar mane oi value array te nai.

var vowelsIndex = vowels.indexOf('o');
//console.log(vowelsIndex);

var index = friendsAge.indexOf(20);
//console.log(index);

// */ index position name
var seventhIndex = family[7];
//console.log(seventhIndex);

//* modify array number
var friendsAgeIndex = friendsAge[2];
console.log(friendsAge);
friendsAge[1] = 10;
friendsAge[0] = 20;
friendsAge[2] = 30;
console.log(friendsAge); 
