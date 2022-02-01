var gotjob = true;
var moneySaved = 250000;
var hasFlat = false

//if (gotjob == true && moneySaved > 200000) {

//   console.log('mojai mojaaaa');
//}
//else {

//   console.log('hate thala nia ghura lagbe');
//}

//if (gotjob == true && moneySaved > 200000 && hasFlat == true) {

// console.log('mojai mojaaaa');
//}
//else {

// console.log('hate thala nia ghura lagbe');
//}

//* && bolte bojhai both condition milte hobe, || bolte bojhai j kn akta millle kaj hobe

if ((gotjob == true || moneySaved > 200000) || (hasFlat == true)) {

    console.log('mojai mojaaaa');
}
else {

    console.log('hate thala nia ghura lagbe');
}



if ((gotjob == true || moneySaved > 200000) && (hasFlat == true)) {

    console.log('mojai mojaaaa');
}
else {

    console.log('hate thala nia ghura lagbe');
}